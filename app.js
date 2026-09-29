// app.js
//
// ミチト MVP v0.1 - Step 6 + UI/ブランド移行 v1
// 「今日の10問」の基本UI・学習導線 ＋ 実問題20問（D-C001〜D-C020）の出題。
// Step 6-A: 間違えた問題の復習UX改善（正解するたびに一覧から消える）
// Step 6-B: 問題後の振り返り（旧フィードバック機能を「寄り添いアンケート」へ変更）
// V4.0 DESIGN-REFERENCE: ミチトデザイン１.png / ミチトデザイン２.png の画面構成・フローを再現
//   HOME → 今日の10問（開始） → 問題（選択 → 回答する） → 正解／不正解 → 解説 → 振り返り → … → 結果
// V4.1: 歯車から開く設定画面（文字サイズ 標準・大・特大／テーマ そら・やわらか・よる）。
//   選ぶとすぐに反映し、localStorage の michito_settings にだけ保存する
//
// 方針:
// - Vanilla JS のみ（フレームワーク・ビルド環境なし）
// - questions/questions.js のうち reviewStatus === "reviewed" の問題のみを
//   「今日の10問」の出題対象とする（"mock"・"draft" は出題対象に含めない）
// - Google Sheets 等の外部送信は未実装。振り返り・教習メモは localStorage のみに保存
// - バックエンド、認証、広告、課金、AI機能は未実装
// - イラスト（アプリアイコン・風景・キャラクター）は外部素材を使わず、インラインSVGで描画する
//
// 問題データの構造（QUESTION_DATA_SCHEMA.md 準拠）:
//   { id, reviewStatus, category, question, choices: [...], correct: <index>, explanation,
//     source, sourceVersion, sourceSection, lastVerifiedDate, stage, topic, difficulty, tags }
//   ※ app.js が実際に参照するのは id / reviewStatus / question / choices / correct / explanation

(function () {
  "use strict";

  var APP_VERSION = "0.1.0-step6";
  var SESSION_SIZE = 10;
  var NOTE_MAX_LENGTH = 500;

  var STORAGE_KEYS = {
    HISTORY: "zerodora_history",
    FEEDBACK: "zerodora_feedback",
    TRAINING_NOTES: "zerodora_training_notes",
    // V4.1: 表示設定（文字サイズ・テーマ）。学習履歴・メモのキー／形式とは独立させる
    SETTINGS: "michito_settings"
  };

  var appEl = document.getElementById("app");

  // アプリ全体の実行時状態（永続化しない）
  var state = {
    view: "home",
    session: null, // 今日の10問セッション実行中のデータ
    lastSession: null // 直近に完了したセッションの結果（間違えた問題の表示用）
  };

  // ---------- ユーティリティ ----------

  function getLocal(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function setLocal(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      // localStorageが使用できない環境でもアプリ自体は動作を継続する
      console.warn("localStorageへの保存に失敗しました", e);
      return false;
    }
  }

  function todayDateString() {
    var d = new Date();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }

  function generateSessionId() {
    return "session_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
  }

  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function nl2br(escaped) {
    return escaped.replace(/\n/g, "<br>");
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  // 「今日の10問」の出題対象は reviewStatus === "reviewed" の問題のみとする。
  // - "mock"（UI確認用の仮問題）は出題対象に含めない
  // - "draft"（一次資料との照合が未完了の実問題）も出題対象に含めない
  // 出題可能な reviewed 問題が SESSION_SIZE 未満の場合は、必要に応じて
  // reviewed 問題内で繰り返して SESSION_SIZE 件のセット（重複可）を作る。
  // reviewed 問題が SESSION_SIZE 件以上そろっている場合は、その中から
  // ランダムに SESSION_SIZE 件を選ぶ（複雑な出題アルゴリズムは導入しない）。
  var REVIEWED_STATUS = "reviewed";

  function getReviewedQuestions() {
    if (!Array.isArray(questions)) return [];
    return questions.filter(function (q) {
      return q.reviewStatus === REVIEWED_STATUS;
    });
  }

  function buildSessionQuestions() {
    var reviewedQuestions = getReviewedQuestions();
    if (reviewedQuestions.length === 0) {
      return [];
    }
    var pool = [];
    while (pool.length < SESSION_SIZE) {
      pool = pool.concat(shuffle(reviewedQuestions));
    }
    return pool.slice(0, SESSION_SIZE).map(function (q, idx) {
      return Object.assign({}, q, withShuffledChoices(q), { _instanceKey: q.id + "_" + idx });
    });
  }

  // 表示用に選択肢の並び順だけをシャッフルする（questions.js の元データは変更しない）。
  // - choices / correct は「表示順」に置き換えたコピーを返す
  // - _choiceOrder[表示位置] = 元データでの選択肢インデックス
  function withShuffledChoices(q) {
    if (!Array.isArray(q.choices)) return {};
    var order = shuffle(
      q.choices.map(function (_, i) {
        return i;
      })
    );
    return {
      choices: order.map(function (i) {
        return q.choices[i];
      }),
      correct: order.indexOf(q.correct),
      _choiceOrder: order
    };
  }

  // 表示位置 → 元データでの選択肢インデックス（保存データの意味を従来どおりに保つため）
  function toOriginalChoiceIndex(q, displayIndex) {
    if (!q._choiceOrder) return displayIndex;
    var original = q._choiceOrder[displayIndex];
    return typeof original === "number" ? original : displayIndex;
  }

  function computeHomeStats() {
    var history = getLocal(STORAGE_KEYS.HISTORY, []);
    var today = todayDateString();
    var todayCount = 0;
    var totalCount = 0;
    var totalCorrect = 0;

    history.forEach(function (h) {
      totalCount += h.count || 0;
      totalCorrect += h.correctCount || 0;
      if (h.date === today) {
        todayCount += h.count || 0;
      }
    });

    var accuracyText = totalCount > 0 ? Math.round((totalCorrect / totalCount) * 100) + "%" : "–%";

    return {
      todayCount: Math.min(todayCount, SESSION_SIZE),
      totalCount: totalCount,
      accuracyText: accuracyText
    };
  }

  // ---------- 表示設定（V4.1） ----------

  var FONT_SIZE_OPTIONS = [
    { value: "standard", label: "標準", sampleCls: "option-sample--standard" },
    { value: "large", label: "大", sampleCls: "option-sample--large" },
    { value: "xlarge", label: "特大", sampleCls: "option-sample--xlarge" }
  ];

  var THEME_OPTIONS = [
    { value: "sora", label: "そら", desc: "明るい空色。いつもの見た目です。" },
    { value: "yawaraka", label: "やわらか", desc: "あたたかい生成り色。目にやさしい配色です。" },
    { value: "yoru", label: "よる", desc: "暗めの落ち着いた配色。夜の学習に。" }
  ];

  var DEFAULT_SETTINGS = { fontSize: "standard", theme: "sora" };

  function isValidOption(options, value) {
    for (var i = 0; i < options.length; i++) {
      if (options[i].value === value) return true;
    }
    return false;
  }

  // 保存値が壊れている・古い・不正な場合は、項目ごとに初期値へ戻す
  function loadSettings() {
    var raw = getLocal(STORAGE_KEYS.SETTINGS, null);
    var settings = { fontSize: DEFAULT_SETTINGS.fontSize, theme: DEFAULT_SETTINGS.theme };
    if (raw && typeof raw === "object" && !Array.isArray(raw)) {
      if (isValidOption(FONT_SIZE_OPTIONS, raw.fontSize)) settings.fontSize = raw.fontSize;
      if (isValidOption(THEME_OPTIONS, raw.theme)) settings.theme = raw.theme;
    }
    return settings;
  }

  function applySettings(settings) {
    var root = document.documentElement;
    root.setAttribute("data-font-size", settings.fontSize);
    root.setAttribute("data-theme", settings.theme);
  }

  var settings = loadSettings();
  applySettings(settings);

  function updateSetting(name, value) {
    if (name !== "fontSize" && name !== "theme") return;
    var options = name === "fontSize" ? FONT_SIZE_OPTIONS : THEME_OPTIONS;
    if (!isValidOption(options, value)) return;
    settings[name] = value;
    applySettings(settings);
    setLocal(STORAGE_KEYS.SETTINGS, { fontSize: settings.fontSize, theme: settings.theme });
    render({ keepScroll: true });
    // 再描画でフォーカスが外れるため、選んだ項目へ戻す（キーボード操作・読み上げ向け）
    var selected = appEl.querySelector('[data-setting="' + name + '"][data-value="' + value + '"]');
    if (selected) selected.focus();
  }

  // ---------- イラスト・アイコン（インラインSVG） ----------

  var svgSeq = 0;

  // アプリアイコン：「道」をかたどった M（ティール → ディープブルーのグラデーション）
  function appIconSvg(cls) {
    var id = "ai" + ++svgSeq;
    return (
      '<svg class="' +
      (cls || "app-icon") +
      '" viewBox="0 0 64 64" aria-hidden="true">' +
      '<defs><linearGradient id="' +
      id +
      '" x1="0" y1="0" x2="0.9" y2="1">' +
      '<stop offset="0" stop-color="#14C2C0"/><stop offset="0.45" stop-color="#0A8FA8"/><stop offset="1" stop-color="#0B2F6E"/>' +
      "</linearGradient></defs>" +
      '<rect width="64" height="64" rx="15" fill="url(#' +
      id +
      ')"/>' +
      '<path d="M9 55 C13 36 17 17 22.5 15 C27 13.5 29.5 27 32 35 C34.5 27 37 13.5 41.5 15 C47 17 51 36 55 55" fill="none" stroke="#fff" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M32 41 V58" stroke="#fff" stroke-width="2.6" stroke-dasharray="4 3.2"/>' +
      "</svg>"
    );
  }

  // 空・山・街・丘・道路の風景。variant: "hero"（HOME上部） / "card"（今日の10問カード） / "ground"（画面下部）
  function sceneSvg(variant) {
    var id = "sc" + ++svgSeq;
    var city =
      variant === "hero"
        ? '<g fill="#A9C4DA">' +
          '<rect x="300" y="58" width="9" height="46"/><rect x="311" y="46" width="11" height="58"/>' +
          '<rect x="324" y="64" width="8" height="40"/><rect x="334" y="52" width="10" height="52"/>' +
          '<rect x="346" y="70" width="8" height="34"/><rect x="356" y="60" width="9" height="44"/>' +
          "</g>" +
          '<g fill="#C3D8E8"><rect x="286" y="74" width="10" height="30"/><rect x="368" y="76" width="12" height="28"/></g>'
        : "";
    return (
      '<svg class="scene scene--' +
      variant +
      '" viewBox="0 0 400 160" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
      "<defs>" +
      '<linearGradient id="' +
      id +
      's" x1="0" y1="0" x2="0" y2="1">' +
      (variant === "hero"
        ? '<stop offset="0" stop-color="#EEF7FD"/><stop offset="0.4" stop-color="#CDE9F8"/><stop offset="0.72" stop-color="#E4F3FB"/><stop offset="1" stop-color="#F2F9FD"/>'
        : variant === "ground"
          ? '<stop offset="0" stop-color="#D3ECF9" stop-opacity="0"/><stop offset="0.45" stop-color="#D3ECF9"/><stop offset="1" stop-color="#EEF7FC"/>'
          : '<stop offset="0" stop-color="#BFE3F6"/><stop offset="0.7" stop-color="#EAF6FC"/><stop offset="1" stop-color="#F6FBFE"/>') +
      "</linearGradient>" +
      '<linearGradient id="' +
      id +
      'r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A8B3BE"/><stop offset="1" stop-color="#5D6B79"/></linearGradient>' +
      "</defs>" +
      '<rect width="400" height="160" fill="url(#' +
      id +
      's)"/>' +
      '<g fill="#fff" opacity="0.92">' +
      '<ellipse cx="292" cy="30" rx="30" ry="8"/><ellipse cx="310" cy="24" rx="17" ry="9"/>' +
      '<ellipse cx="120" cy="22" rx="24" ry="6"/><ellipse cx="134" cy="18" rx="12" ry="7"/>' +
      "</g>" +
      '<path d="M0 96 L34 80 L70 90 L112 70 L150 86 L196 72 L238 88 L276 76 L320 90 L360 80 L400 92 V160 H0Z" fill="#C4DCEB"/>' +
      '<path d="M0 104 L46 90 L92 100 L140 88 L188 100 L240 92 L292 102 L400 96 V160 H0Z" fill="#A9CBDF"/>' +
      city +
      '<path d="M0 112 C70 98 130 106 190 110 C250 114 320 100 400 108 V160 H0Z" fill="#9CCB8F"/>' +
      '<path d="M0 122 C80 110 150 122 230 118 C300 114 350 110 400 118 V160 H0Z" fill="#6BB070"/>' +
      '<g fill="#4F9A5E">' +
      '<circle cx="30" cy="118" r="8"/><circle cx="42" cy="114" r="10"/><circle cx="56" cy="119" r="7"/>' +
      '<circle cx="372" cy="112" r="9"/><circle cx="386" cy="116" r="8"/><circle cx="360" cy="117" r="6"/>' +
      "</g>" +
      '<path d="M120 160 C210 142 290 126 338 111 L350 111 C318 128 282 146 250 160 Z" fill="url(#' +
      id +
      'r)"/>' +
      '<path d="M120 160 C210 142 290 126 338 111" fill="none" stroke="#fff" stroke-width="2.2" opacity="0.9"/>' +
      '<path d="M250 160 C282 146 318 128 350 111" fill="none" stroke="#fff" stroke-width="2.2" opacity="0.9"/>' +
      '<path d="M186 160 C250 142 305 126 344 111" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="9 8"/>' +
      '<path d="M0 138 C90 128 160 140 240 150 L260 160 H0Z" fill="#7DBD7C" opacity="0.85"/>' +
      "</svg>"
    );
  }

  // 寄り添うキャラクター（キャップ・パーカー・リュックの青年）
  function characterSvg(cls) {
    return (
      '<svg class="' +
      (cls || "character") +
      '" viewBox="0 0 80 96" aria-hidden="true">' +
      // リュック
      '<path d="M14 58 C12 70 13 84 16 92 L30 92 L28 58 Z" fill="#1F5F7A"/>' +
      // 体（パーカー）
      '<path d="M18 96 C18 74 26 62 40 62 C54 62 62 74 62 96 Z" fill="#2E97B3"/>' +
      '<path d="M32 62 C34 70 46 70 48 62" fill="#23809A"/>' +
      '<path d="M36 70 L36 84 M44 70 L44 84" stroke="#EAF6FA" stroke-width="1.6" stroke-linecap="round"/>' +
      // リュックの肩ひも
      '<path d="M26 66 C24 74 24 84 26 94" stroke="#1F5F7A" stroke-width="3.2" fill="none" stroke-linecap="round"/>' +
      // 首・顔
      '<rect x="35" y="54" width="10" height="9" rx="3" fill="#F2C7A5"/>' +
      '<circle cx="40" cy="40" r="17" fill="#F8D8BE"/>' +
      '<circle cx="23.5" cy="42" r="3.2" fill="#F2C7A5"/><circle cx="56.5" cy="42" r="3.2" fill="#F2C7A5"/>' +
      // 髪
      '<path d="M23 38 C23 28 30 24 40 24 C50 24 57 28 57 38 C52 33 46 31 40 32 C34 31 28 33 23 38 Z" fill="#1E2C44"/>' +
      // キャップ
      '<path d="M22 32 C22 18 31 12 40 12 C49 12 58 18 58 32 Z" fill="#1B87A6"/>' +
      '<path d="M40 30 C50 29 60 30 67 34 C62 36 52 35 44 34 Z" fill="#14708B"/>' +
      '<circle cx="40" cy="13" r="2" fill="#14708B"/>' +
      // 目・口・頬
      '<ellipse cx="33.5" cy="42" rx="2" ry="2.6" fill="#1E2C44"/><ellipse cx="46.5" cy="42" rx="2" ry="2.6" fill="#1E2C44"/>' +
      '<circle cx="34.2" cy="41.2" r="0.7" fill="#fff"/><circle cx="47.2" cy="41.2" r="0.7" fill="#fff"/>' +
      '<path d="M35 48.5 C37.5 51.5 42.5 51.5 45 48.5" stroke="#B5563F" stroke-width="1.8" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="29.5" cy="47" rx="2.6" ry="1.5" fill="#F4A9A0" opacity="0.6"/><ellipse cx="50.5" cy="47" rx="2.6" ry="1.5" fill="#F4A9A0" opacity="0.6"/>' +
      "</svg>"
    );
  }

  var ICONS = {
    gear:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.4 13a7.6 7.6 0 0 0 0-2l2-1.6-2-3.4-2.4 1a7.4 7.4 0 0 0-1.7-1L15 3.5h-4L10.6 6a7.4 7.4 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.6 7.6 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7.4 7.4 0 0 0 1.7 1l.4 2.5h4l.4-2.5a7.4 7.4 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6ZM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" transform="translate(-1 0)"/></svg>',
    target:
      '<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="15" cy="17" r="12" fill="none" stroke="#0A8F9A" style="stroke:var(--teal)" stroke-width="2.6"/><circle cx="15" cy="17" r="7.2" fill="none" stroke="#0A8F9A" style="stroke:var(--teal)" stroke-width="2.6"/><circle cx="15" cy="17" r="2.6" fill="#0A8F9A" style="fill:var(--teal)"/><path d="M15 17 L27 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M23 4 L28 4 L28 9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    alert:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="10.6" y="5" width="2.8" height="9.5" rx="1.4" fill="#fff"/><circle cx="12" cy="18.3" r="1.7" fill="#fff"/></svg>',
    chart:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="12" width="3" height="7" rx="1" fill="#fff"/><rect x="10.5" y="8" width="3" height="11" rx="1" fill="#fff"/><rect x="16" y="5" width="3" height="14" rx="1" fill="#fff"/></svg>',
    memo:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="4" width="12" height="16" rx="2" fill="none" stroke="#fff" stroke-width="2"/><path d="M9 9h6M9 12.5h6M9 16h3.5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>',
    tabHome:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11 L12 4 L20 11 V20 H14.5 V14.5 H9.5 V20 H4 Z" fill="currentColor"/></svg>',
    tabQuestion:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5.5" cy="6.5" r="1.8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="5.5" cy="12" r="1.8" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="5.5" cy="17.5" r="1.8" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.5h10M10 12h10M10 17.5h7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    tabHistory:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><rect x="5.5" y="12" width="3" height="6" rx="0.8" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="10.5" y="8.5" width="3" height="9.5" rx="0.8" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="15.5" y="5" width="3" height="13" rx="0.8" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    tabMemo:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3.5" width="14" height="17" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.5 8h7M8.5 11.5h7M8.5 15h4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    bulb:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V17h5.2v-1.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" fill="#F5B82E"/><rect x="9.4" y="18" width="5.2" height="2.6" rx="1" fill="#6B7B8A"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12.5 L10.2 16.5 L18 8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    back:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 L8 12 L15 19" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  // 円形の進捗リング（今日の10問開始画面・結果画面）
  function ringHtml(value, total, cls) {
    var r = 52;
    var c = 2 * Math.PI * r;
    var ratio = total > 0 ? Math.max(0, Math.min(1, value / total)) : 0;
    return (
      '<div class="ring ' +
      (cls || "") +
      '">' +
      '<svg viewBox="0 0 120 120" aria-hidden="true">' +
      '<circle class="ring-track" cx="60" cy="60" r="' +
      r +
      '" fill="none" stroke="#E3EBF1" stroke-width="9"/>' +
      (ratio > 0
        ? '<circle class="ring-fill" cx="60" cy="60" r="' +
          r +
          '" fill="none" stroke="#0A8F9A" stroke-width="9" stroke-linecap="round" stroke-dasharray="' +
          (c * ratio).toFixed(1) +
          " " +
          c.toFixed(1) +
          '" transform="rotate(-90 60 60)"/>'
        : "") +
      "</svg>" +
      '<div class="ring-label"><span class="ring-value">' +
      value +
      '</span><span class="ring-total">/' +
      total +
      "</span></div>" +
      "</div>"
    );
  }

  // ミチトのひとこと（キャラクター＋吹き出し）
  function michitoTalkHtml(title, message, extraCls) {
    return (
      '<div class="michito-talk ' +
      (extraCls || "") +
      '">' +
      characterSvg("character character--talk") +
      '<div class="talk-bubble">' +
      (title ? '<div class="talk-title">' + escapeHtml(title) + "</div>" : "") +
      '<div class="talk-text">' +
      nl2br(escapeHtml(message)) +
      "</div>" +
      "</div>" +
      "</div>"
    );
  }

  function topBackHtml(action) {
    return (
      '<button class="top-back" data-action="' +
      action +
      '" aria-label="戻る">' +
      ICONS.back +
      "</button>"
    );
  }

  // ---------- 画面遷移 ----------

  function goHome() {
    state.view = "home";
    state.session = null;
    render();
  }

  function openStart() {
    state.view = "start";
    state.session = null;
    render();
  }

  function startSession() {
    var sessionQuestions = buildSessionQuestions();
    if (sessionQuestions.length === 0) {
      // reviewStatus: "reviewed" の問題が1件もない場合のガード
      alert("現在、出題可能な問題がありません（reviewStatus: \"reviewed\" の問題が0件です）。");
      return;
    }
    state.session = {
      sessionId: generateSessionId(),
      questions: sessionQuestions,
      currentIndex: 0,
      answers: [],
      startTime: Date.now(),
      answeredCurrent: false,
      selectedIndex: null,
      pendingIndex: null, // 「回答する」を押す前に選んでいる選択肢
      phase: "question", // question → verdict → explain → reflect
      reflectionChoice: null
    };
    state.view = "question";
    render();
  }

  // 選択肢を選ぶ（まだ判定しない）
  function pickChoice(choiceIndex) {
    var s = state.session;
    if (!s || s.answeredCurrent) return;
    s.pendingIndex = choiceIndex;
    render({ keepScroll: true });
  }

  // 「回答する」で確定して判定する
  function submitAnswer() {
    var s = state.session;
    if (!s || s.answeredCurrent || s.pendingIndex === null) return;
    s.selectedIndex = s.pendingIndex;
    s.answeredCurrent = true;
    s.phase = "verdict";
    render();
  }

  function setPhase(phase) {
    var s = state.session;
    if (!s || !s.answeredCurrent) return;
    s.phase = phase;
    render();
  }

  function proceedToNext(feedbackPayload) {
    var s = state.session;
    if (!s) return;
    var q = s.questions[s.currentIndex];
    var isCorrect = s.selectedIndex === q.correct;

    var answerRecord = {
      timestamp: new Date().toISOString(),
      sessionId: s.sessionId,
      questionId: q.id,
      selectedAnswer: toOriginalChoiceIndex(q, s.selectedIndex),
      correct: isCorrect,
      feedbackRating: feedbackPayload ? feedbackPayload.rating : null,
      feedbackReason: feedbackPayload ? feedbackPayload.reasons : [],
      comment: feedbackPayload ? feedbackPayload.comment : "",
      appVersion: APP_VERSION
    };

    s.answers.push(answerRecord);

    // フィードバック（入力の有無に関わらず、回答記録の一部として保存する）
    if (feedbackPayload) {
      var feedbackLog = getLocal(STORAGE_KEYS.FEEDBACK, []);
      feedbackLog.push(answerRecord);
      setLocal(STORAGE_KEYS.FEEDBACK, feedbackLog);
    }

    if (s.currentIndex + 1 >= s.questions.length) {
      finishSession();
      return;
    }

    s.currentIndex += 1;
    s.answeredCurrent = false;
    s.selectedIndex = null;
    s.pendingIndex = null;
    s.phase = "question";
    s.reflectionChoice = null;
    render();
  }

  function finishSession() {
    var s = state.session;
    var correctCount = s.answers.filter(function (a) {
      return a.correct;
    }).length;
    var durationSec = Math.round((Date.now() - s.startTime) / 1000);

    var mistakes = [];
    s.answers.forEach(function (a, idx) {
      if (!a.correct) {
        var q = s.questions[idx];
        mistakes.push({
          questionId: q.id,
          question: q.question,
          choices: q.choices,
          correct: q.correct,
          explanation: q.explanation,
          // choices / correct は表示順のため、選んだ選択肢も表示順のインデックスに揃える
          selectedAnswer: q._choiceOrder ? q._choiceOrder.indexOf(a.selectedAnswer) : a.selectedAnswer,
          questionNumber: idx + 1 // 「第◯問」表示用（画面内でのみ使用）
        });
      }
    });

    var summary = {
      date: todayDateString(),
      count: s.questions.length,
      correctCount: correctCount,
      accuracy: s.questions.length > 0 ? Math.round((correctCount / s.questions.length) * 100) : 0,
      durationSec: durationSec
    };

    var history = getLocal(STORAGE_KEYS.HISTORY, []);
    history.push(summary);
    setLocal(STORAGE_KEYS.HISTORY, history);

    state.lastSession = {
      summary: summary,
      mistakes: mistakes, // 現段階では画面遷移内でのみ保持し、localStorageへは保存しない
      // (正式問題投入後、間違い履歴の永続化を追加予定)
      mistakeTotal: mistakes.length, // 復習の進捗表示用（正解して一覧から消えても変化しない当初件数）
      mistakeAll: mistakes.slice() // 一覧表示用（クリア済みも「クリア」として表示する）
    };

    state.session = null;
    state.view = "result";
    render();
  }

  function openMistakeList() {
    state.view = "mistakes";
    render();
  }

  function openMistakeSolve(index) {
    var data = state.lastSession;
    if (!data || !data.mistakeAll[index]) return;
    state.mistakeSolveSnapshot = data.mistakeAll[index];
    state.mistakeAnswered = false;
    state.mistakeSelected = null;
    state.mistakePending = null;
    state.view = "mistakeSolve";
    render();
  }

  function pickMistakeChoice(choiceIndex) {
    if (!state.mistakeSolveSnapshot || state.mistakeAnswered) return;
    state.mistakePending = choiceIndex;
    render({ keepScroll: true });
  }

  function submitMistakeAnswer() {
    if (state.mistakePending === null) return;
    selectMistakeChoice(state.mistakePending);
  }

  function selectMistakeChoice(choiceIndex) {
    var m = state.mistakeSolveSnapshot;
    if (!m || state.mistakeAnswered) return;
    state.mistakeSelected = choiceIndex;
    state.mistakeAnswered = true;

    var isCorrect = choiceIndex === m.correct;
    if (isCorrect) {
      // 正解した問題は「未クリアの間違い問題一覧」から外す
      var list = state.lastSession.mistakes;
      var idx = list.indexOf(m);
      if (idx !== -1) list.splice(idx, 1);
      m.cleared = true;
      var remaining = list.length;
      if (remaining === 0) {
        showToast("🎉 間違えた問題を全部クリアしました！");
      } else {
        showToast("1問クリア！ あと" + remaining + "問です");
      }
    } else {
      // 再び間違えた問題は一覧に残し、「もう一度チャレンジ」の印を付ける
      m.retryNeeded = true;
    }
    render();
  }

  function openTrainingNotes() {
    state.view = "trainingNotes";
    render();
  }

  function openHistory() {
    state.view = "history";
    render();
  }

  // ---------- トースト（簡易通知） ----------

  function showToast(message) {
    var existing = document.getElementById("toast");
    if (existing) existing.remove();
    var toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(function () {
      toast.classList.add("is-visible");
    });
    setTimeout(function () {
      toast.classList.remove("is-visible");
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 1800);
  }

  // ---------- ① HOME ----------

  function viewHome() {
    var remaining = state.lastSession ? state.lastSession.mistakes.length : 0;

    var html =
      '<header class="home-header">' +
      '<div class="brand">' +
      appIconSvg("app-icon") +
      '<div class="brand-text"><div class="brand-name">ミチト</div><div class="brand-tagline">今日も、少しずつ。</div></div>' +
      "</div>" +
      '<button class="icon-btn" data-action="open-settings" aria-label="設定">' +
      ICONS.gear +
      "</button>" +
      "</header>";

    // iPad横向き・広いPCでは home-main（風景・今日の10問）と home-side（メニュー）を2列に並べる
    html += '<div class="home-layout"><div class="home-main">';

    html +=
      '<section class="home-hero">' +
      sceneSvg("hero") +
      '<h1 class="home-greeting">こんにちは。<br>今日も少しだけ進もう。</h1>' +
      "</section>";

    html +=
      '<section class="today-card">' +
      '<div class="today-card-scene">' +
      sceneSvg("card") +
      "</div>" +
      '<div class="today-card-body">' +
      '<h2 class="today-card-title"><span class="today-card-icon">' +
      ICONS.target +
      "</span>今日の10問</h2>" +
      '<p class="today-card-sub">今日も10問、一緒にやろう。</p>' +
      '<button class="btn-pill" data-action="open-start">はじめる <span aria-hidden="true">→</span></button>' +
      "</div>" +
      "</section>";

    html += '</div><div class="home-side">';

    html += '<nav class="menu-list">';
    html += menuItemHtml(
      "open-mistakes",
      "menu-icon--pink",
      ICONS.alert,
      "間違い問題",
      "もう一度、一緒にやってみよう。",
      remaining > 0 ? '<span class="menu-badge">' + remaining + "</span>" : ""
    );
    html += menuItemHtml("open-history", "menu-icon--blue", ICONS.chart, "学習履歴", "これまでの歩みを確認する。", "");
    html += menuItemHtml("open-training-notes", "menu-icon--green", ICONS.memo, "トレーニングメモ", "今日の気づきを残しておこう。", "");
    html += "</nav>";

    html +=
      '<button class="home-talk" data-action="open-start">' +
      characterSvg("character character--home") +
      '<span class="home-talk-bubble">ミチトと一緒に、<br>あなたのペースで。<span class="menu-chevron" aria-hidden="true">›</span></span>' +
      "</button>";

    html += "</div></div>";

    return html;
  }

  function menuItemHtml(action, iconCls, icon, title, sub, badge) {
    return (
      '<button class="menu-item" data-action="' +
      action +
      '">' +
      '<span class="menu-icon ' +
      iconCls +
      '">' +
      icon +
      "</span>" +
      '<span class="menu-body"><span class="menu-title">' +
      title +
      "</span>" +
      '<span class="menu-sub">' +
      sub +
      "</span></span>" +
      badge +
      '<span class="menu-chevron" aria-hidden="true">›</span>' +
      "</button>"
    );
  }

  // ---------- ② 今日の10問（開始） ----------

  function viewStart() {
    var stats = computeHomeStats();
    return (
      '<div class="screen screen--start">' +
      topBackHtml("go-home") +
      '<h1 class="screen-title">今日の10問</h1>' +
      '<p class="screen-lead">まずは10問。<br>自分のペースで進めよう。</p>' +
      ringHtml(stats.todayCount, SESSION_SIZE, "ring--start") +
      '<button class="btn-pill btn-pill--wide" data-action="start-session">ミチトと始める <span aria-hidden="true">→</span></button>' +
      '<div class="ground-scene">' +
      sceneSvg("ground") +
      "</div>" +
      "</div>"
    );
  }

  // ---------- ③〜⑦ 今日の10問（問題 → 正解／不正解 → 解説 → 振り返り） ----------

  var CHOICE_LETTERS = ["A", "B", "C", "D", "E", "F"];

  function viewQuestion() {
    var s = state.session;
    switch (s.phase) {
      case "verdict":
        return viewVerdict();
      case "explain":
        return viewExplain();
      case "reflect":
        return viewReflect();
      default:
        return viewQuestionAsk();
    }
  }

  // ③ 問題画面
  function viewQuestionAsk() {
    var s = state.session;
    var q = s.questions[s.currentIndex];
    var progressPercent = Math.round(((s.currentIndex + 1) / s.questions.length) * 100);

    var html =
      '<div class="screen screen--question screen--split">' +
      '<div class="quiz-progress">' +
      '<div class="quiz-progress-label">今日の10問<span class="quiz-progress-count">' +
      (s.currentIndex + 1) +
      " / " +
      s.questions.length +
      "</span></div>" +
      '<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:' +
      progressPercent +
      '%"></div></div>' +
      "</div>" +
      '<div class="split-layout">' +
      '<div class="split-main">' +
      '<div class="question-number">第' +
      (s.currentIndex + 1) +
      "問</div>" +
      (q.reviewStatus === "mock" ? '<div class="mock-badge">仮問題（UI確認用）</div>' : "") +
      '<p class="question-text">' +
      escapeHtml(q.question) +
      "</p>" +
      "</div>" +
      '<div class="split-side">' +
      choiceListHtml(q.choices, s.pendingIndex, "pick-choice") +
      '<div class="answer-bar"><button class="btn-pill btn-pill--block" data-action="submit-answer"' +
      (s.pendingIndex === null ? " disabled" : "") +
      ">回答する</button></div>" +
      "</div>" +
      "</div>" +
      "</div>";
    return html;
  }

  // A〜D の選択肢（選ぶだけ。判定は「回答する」で行う）
  function choiceListHtml(choices, pendingIndex, action) {
    var html = '<div class="choice-list" role="radiogroup">';
    choices.forEach(function (choice, idx) {
      var isSelected = idx === pendingIndex;
      html +=
        '<button class="choice-btn' +
        (isSelected ? " is-selected" : "") +
        '" role="radio" aria-checked="' +
        (isSelected ? "true" : "false") +
        '" data-action="' +
        action +
        '" data-index="' +
        idx +
        '">' +
        '<span class="choice-letter">' +
        (CHOICE_LETTERS[idx] || idx + 1) +
        "</span>" +
        '<span class="choice-text">' +
        escapeHtml(choice) +
        "</span>" +
        "</button>";
    });
    html += "</div>";
    return html;
  }

  // ④ 正解画面 ／ ⑤ 不正解画面
  function viewVerdict() {
    var s = state.session;
    var q = s.questions[s.currentIndex];
    var isCorrect = s.selectedIndex === q.correct;

    if (isCorrect) {
      return (
        '<div class="screen screen--verdict screen--correct">' +
        '<div class="verdict-mark verdict-mark--correct">' +
        '<span class="spark spark--1"></span><span class="spark spark--2"></span><span class="spark spark--3"></span><span class="spark spark--4"></span>' +
        '<span class="verdict-circle">' +
        ICONS.check +
        "</span>" +
        "</div>" +
        '<h1 class="verdict-title verdict-title--correct">正解！</h1>' +
        '<p class="verdict-text">いいですね。<br>ちゃんと理解できています 👍</p>' +
        '<button class="btn-pill btn-pill--wide" data-action="show-explanation">解説を見る <span aria-hidden="true">→</span></button>' +
        michitoTalkHtml("ミチトのひとこと", "その調子です！\nこのまま進めていきましょう。") +
        '<div class="ground-scene ground-scene--soft">' +
        sceneSvg("ground") +
        "</div>" +
        "</div>"
      );
    }
    return (
      '<div class="screen screen--verdict screen--incorrect">' +
      '<div class="verdict-mark verdict-mark--incorrect">' +
      '<span class="spark spark--1"></span><span class="spark spark--2"></span><span class="spark spark--3"></span><span class="spark spark--4"></span>' +
      '<span class="verdict-circle">!</span>' +
      "</div>" +
      '<h1 class="verdict-title verdict-title--incorrect">今回は惜しかったです。</h1>' +
      '<p class="verdict-text">大丈夫。<br>ここで覚えておけばOKです。</p>' +
      '<button class="btn-pill btn-pill--wide btn-pill--pink" data-action="show-explanation">解説を見る <span aria-hidden="true">→</span></button>' +
      michitoTalkHtml("ミチトのひとこと", "間違えることは、悪いことじゃありません。\n一緒に確認していきましょう。") +
      "</div>"
    );
  }

  // ⑥ 解説画面
  function viewExplain() {
    var s = state.session;
    var q = s.questions[s.currentIndex];
    var isCorrect = s.selectedIndex === q.correct;
    return (
      '<div class="screen screen--explain screen--split">' +
      '<h1 class="screen-title screen-title--left">解説</h1>' +
      '<div class="split-layout split-layout--explain">' +
      explanationBodyHtml(q, isCorrect, s.selectedIndex) +
      "</div>" +
      '<div class="pager">' +
      '<button class="pager-btn" data-action="back-to-verdict">' +
      ICONS.back +
      "前へ</button>" +
      '<button class="pager-btn pager-btn--next" data-action="show-reflection">次へ' +
      ICONS.back +
      "</button>" +
      "</div>" +
      "</div>"
    );
  }

  // 解説本文（今日の10問・間違い問題の解き直しで共通）
  function explanationBodyHtml(q, isCorrect, selectedIndex) {
    var correctLabel = (CHOICE_LETTERS[q.correct] || q.correct + 1) + ". " + (q.choices[q.correct] || "");
    var html = '<section class="explain-section">';
    html += '<h2 class="explain-label">問題のポイント</h2>';
    html += '<p class="explain-text">' + escapeHtml(q.explanation || "") + "</p>";
    html += "</section>";
    html +=
      '<div class="hint-box">' +
      '<div class="hint-title"><span class="hint-icon">' +
      ICONS.bulb +
      "</span>ミチトのひとこと</div>" +
      '<p class="hint-text">正解は<strong>「' +
      escapeHtml(correctLabel) +
      "」</strong>です。" +
      (isCorrect
        ? "<br>この判断、しっかり覚えておきましょう。"
        : "<br>あなたの回答は「" +
          escapeHtml((CHOICE_LETTERS[selectedIndex] || "") + ". " + (q.choices[selectedIndex] || "")) +
          "」でした。ここを覚えておけば大丈夫です。") +
      "</p>" +
      "</div>";
    return html;
  }

  // Step 6-B: 問題後の振り返り（旧フィードバック機能）
  // 「アプリの評価」ではなく「自分の理解・気持ちの振り返り」を選んでもらい、
  // ミチトから短い一言を返す。保存先・保存形式は既存のフィードバック
  // 保存の仕組み（proceedToNext内でzerodora_feedbackへ保存）をそのまま利用する。
  var REFLECTION_OPTIONS = [
    {
      key: "understood",
      emoji: "😊",
      label: "よく分かった！",
      reply: "いい感じですね！\nその調子です 👍"
    },
    {
      key: "improved",
      emoji: "💡",
      label: "前より理解できた！",
      reply: "それ、大きな一歩です！\nちゃんと理解できています 👍"
    },
    {
      key: "misunderstood",
      emoji: "😮",
      label: "間違って覚えていた！",
      reply: "気づけたのが大きいです。\n次はきっと大丈夫！"
    },
    {
      key: "wantmore",
      emoji: "🔥",
      label: "もう少し頑張りたい！",
      reply: "その気持ちがあれば大丈夫。\nもう少しだけ一緒に頑張りましょう！"
    }
  ];

  function findReflectionOption(key) {
    for (var i = 0; i < REFLECTION_OPTIONS.length; i++) {
      if (REFLECTION_OPTIONS[i].key === key) return REFLECTION_OPTIONS[i];
    }
    return null;
  }

  // ⑦ 振り返り画面
  function viewReflect() {
    var s = state.session;
    var chosen = s.reflectionChoice;
    var isLast = s.currentIndex + 1 >= s.questions.length;

    var html = '<div class="screen screen--reflect">';
    html += '<h1 class="screen-title screen-title--left">振り返り</h1>';
    html += '<p class="screen-lead screen-lead--left">今回の問題、どうでしたか？</p>';
    html += '<div class="reflect-list">';
    REFLECTION_OPTIONS.forEach(function (opt) {
      var isSelected = chosen === opt.key;
      html +=
        '<button class="reflect-item' +
        (isSelected ? " is-selected" : "") +
        '"' +
        (chosen ? " disabled" : ' data-action="select-reflection" data-key="' + opt.key + '"') +
        ">" +
        '<span class="reflect-emoji">' +
        opt.emoji +
        "</span>" +
        '<span class="reflect-label">' +
        escapeHtml(opt.label) +
        "</span>" +
        "</button>";
    });
    html += "</div>";

    if (chosen) {
      var opt = findReflectionOption(chosen);
      html +=
        '<div class="reflect-reply">' +
        '<span class="reflect-reply-icon">' +
        appIconSvg("app-icon app-icon--mini") +
        "</span>" +
        '<span class="reflect-reply-text">' +
        (opt ? nl2br(escapeHtml(opt.reply)) + "<br>" : "") +
        "今日も一歩進みました。</span>" +
        "</div>";
      html +=
        '<button class="btn-pill btn-pill--block mt-20" data-action="next-after-reflection">' +
        (isLast ? "結果を見る" : "次の問題へ") +
        ' <span aria-hidden="true">→</span></button>';
    } else {
      html +=
        '<div class="reflect-reply reflect-reply--idle">' +
        '<span class="reflect-reply-icon">' +
        appIconSvg("app-icon app-icon--mini") +
        "</span>" +
        '<span class="reflect-reply-text">今日も一歩進みました。</span>' +
        "</div>";
      html +=
        '<button class="text-link mt-20" data-action="skip-reflection">スキップして' +
        (isLast ? "結果を見る" : "次の問題へ") +
        " →</button>";
    }

    html += "</div>";
    return html;
  }

  function selectReflection(key) {
    var s = state.session;
    if (!s || s.reflectionChoice) return;
    s.reflectionChoice = key;
    render({ keepScroll: true });
  }

  function proceedFromReflection() {
    var s = state.session;
    if (!s || !s.reflectionChoice) return;
    proceedToNext({ rating: s.reflectionChoice, reasons: [], comment: "" });
  }

  // ---------- ⑨ 結果 ----------

  function viewResult() {
    var data = state.lastSession;
    if (!data) {
      return '<div class="empty-state">結果データがありません。</div>' + backHomeButtonHtml();
    }
    var s = data.summary;
    var minutes = Math.floor(s.durationSec / 60);
    var seconds = s.durationSec % 60;
    var timeText = minutes > 0 ? minutes + "分" + seconds + "秒" : seconds + "秒";
    var mistakeCount = data.mistakes.length;

    var html = '<div class="screen screen--result">';
    html += '<h1 class="result-heading">今日の10問 終了！</h1>';
    html += ringHtml(s.correctCount, s.count, "ring--result");
    html += '<div class="result-accuracy">正答率 ' + s.accuracy + "%</div>";
    html += '<p class="result-time">学習時間 ' + timeText + "</p>";
    html += '<p class="result-message">今日もお疲れさまでした。<br>少しずつでも、ちゃんと前に進んでいます。</p>';

    if (mistakeCount > 0) {
      html +=
        '<div class="retry-card">' +
        '<div class="retry-card-top">' +
        '<span class="retry-card-icon">' +
        appIconSvg("app-icon app-icon--mini") +
        "</span>" +
        '<span class="retry-card-title">間違えた問題を<br>もう一度</span>' +
        "</div>" +
        '<p class="retry-card-sub">あと' +
        mistakeCount +
        "問、一緒に確認してみよう。</p>" +
        "</div>" +
        '<button class="btn-pill btn-pill--wide" data-action="open-mistakes">もう一度チャレンジ <span aria-hidden="true">→</span></button>';
    } else {
      html +=
        '<div class="retry-card retry-card--clear">' +
        '<span class="retry-card-title">🎉 10問すべて正解！</span>' +
        '<p class="retry-card-sub">この調子で、また明日も10問。</p>' +
        "</div>";
    }
    html += '<button class="text-link" data-action="go-home">ホームへ戻る</button>';
    html += "</div>";
    return html;
  }

  function backHomeButtonHtml() {
    return '<button class="text-link" data-action="go-home">ホームへ戻る</button>';
  }

  // ---------- ⑨ 間違い問題 ----------

  function viewMistakes() {
    var data = state.lastSession;
    var all = data ? data.mistakeAll : [];
    var total = data ? data.mistakeTotal || 0 : 0;
    var remaining = data ? data.mistakes.length : 0;
    var cleared = total - remaining;

    var html = '<div class="screen screen--list">';
    html += topBackHtml("go-home");
    html += '<h1 class="screen-title screen-title--left">間違い問題</h1>';
    html += '<p class="screen-lead screen-lead--left">間違えた問題を、もう一度。</p>';

    if (total === 0) {
      html +=
        '<div class="panel"><div class="empty-state">直近のセッションで間違えた問題はありません。<br>「今日の10問」を解くと、ここに表示されます。</div></div>';
      html += michitoTalkHtml("", "まずは今日の10問から。\n一緒に始めましょう。");
      html += backHomeButtonHtml();
      html += "</div>";
      return html;
    }

    html +=
      '<div class="panel progress-panel">' +
      '<div class="progress-panel-row"><span class="mistake-progress">' +
      total +
      "問中 " +
      cleared +
      "問クリア</span>" +
      '<span class="progress-panel-rest">' +
      (remaining > 0 ? "あと" + remaining + "問" : "すべてクリア") +
      "</span></div>" +
      '<div class="line-progress"><div class="line-progress-fill" style="width:' +
      Math.round((cleared / total) * 100) +
      '%"></div></div>' +
      "</div>";

    html += '<h2 class="list-label">直近の学習</h2>';
    html += '<div class="panel mistake-list">';
    all.forEach(function (m, idx) {
      var preview = m.question.length > 26 ? m.question.slice(0, 26) + "…" : m.question;
      var badge = m.cleared
        ? '<span class="status-badge status-badge--clear">✓ クリア</span>'
        : '<span class="status-badge status-badge--todo">' + (m.retryNeeded ? "もう一度" : "未クリア") + "</span>";
      var inner =
        '<span class="mistake-num">' +
        (idx + 1) +
        "</span>" +
        '<span class="mistake-body"><span class="mistake-title">第' +
        (m.questionNumber || idx + 1) +
        '問</span><span class="mistake-item-preview">' +
        escapeHtml(preview) +
        "</span></span>" +
        badge +
        '<span class="menu-chevron" aria-hidden="true">›</span>';
      if (m.cleared) {
        html += '<div class="mistake-item is-cleared">' + inner + "</div>";
      } else {
        html +=
          '<button class="mistake-item' +
          (m.retryNeeded ? " is-retry" : "") +
          '" data-action="open-mistake-solve" data-index="' +
          idx +
          '">' +
          inner +
          "</button>";
      }
    });
    html += "</div>";

    html += michitoTalkHtml(
      "",
      remaining > 0
        ? "あと" + remaining + "問です。\nミチトと一緒に、もう一度やってみましょう。"
        : "全部クリアしました！\nいい感じです。"
    );
    html += backHomeButtonHtml();
    html += "</div>";
    return html;
  }

  // 間違い問題の解き直し（選ぶ → 回答する → その場で判定と解説）
  function viewMistakeSolve() {
    var m = state.mistakeSolveSnapshot;
    var html = '<div class="screen screen--question screen--split">';
    html += topBackHtml("open-mistakes");
    html += '<div class="split-layout">';
    html += '<div class="split-main">';
    html += '<div class="question-number">第' + (m.questionNumber || "") + "問（復習）</div>";
    html += '<p class="question-text">' + escapeHtml(m.question) + "</p>";
    html += "</div>";
    html += '<div class="split-side">';

    if (!state.mistakeAnswered) {
      html += choiceListHtml(m.choices, state.mistakePending, "pick-mistake-choice");
      html +=
        '<div class="answer-bar"><button class="btn-pill btn-pill--block" data-action="submit-mistake-answer"' +
        (state.mistakePending === null ? " disabled" : "") +
        ">回答する</button></div>";
      html += "</div></div></div>";
      return html;
    }

    var isCorrect = state.mistakeSelected === m.correct;
    html +=
      '<div class="inline-verdict ' +
      (isCorrect ? "inline-verdict--correct" : "inline-verdict--incorrect") +
      '">' +
      '<span class="inline-verdict-icon">' +
      (isCorrect ? ICONS.check : "!") +
      "</span>" +
      '<span class="inline-verdict-title">' +
      (isCorrect ? "正解！" : "今回は惜しかったです。") +
      "</span>" +
      "</div>";
    html += explanationBodyHtml(m, isCorrect, state.mistakeSelected);
    if (isCorrect) {
      html +=
        '<p class="mistake-clear-note">いいですね！ 👍 ちゃんと理解できましたね。<br>この問題はクリアになりました。</p>';
    } else {
      html +=
        '<p class="mistake-retry-note">大丈夫です。もう一度だけ、一緒にやってみましょう。<br>この問題は引き続き一覧に残ります。</p>';
    }
    html += '<button class="btn-pill btn-pill--block mt-20" data-action="open-mistakes">一覧に戻る</button>';
    html += backHomeButtonHtml();
    html += "</div></div></div>";
    return html;
  }

  // ---------- ① トレーニングメモ ----------

  var TRAINING_ACTIVITIES = ["発進", "停止", "右左折", "車線変更", "駐車", "その他"];
  var TRAINING_MOODS = [
    { value: "great", emoji: "😊", label: "楽しかった" },
    { value: "normal", emoji: "🙂", label: "普通" },
    { value: "hard", emoji: "😐", label: "難しかった" },
    { value: "very_hard", emoji: "😣", label: "かなり難しかった" }
  ];

  var selectedMood = null;

  function viewTrainingNotes() {
    selectedMood = null;
    var html = '<div class="screen screen--memo">';
    html += '<h1 class="screen-title screen-title--left">トレーニングメモ</h1>';
    html += '<p class="screen-lead screen-lead--left">今日気づいたことや、覚えておきたいことを残しておこう。</p>';

    html += '<div class="memo-editor">';
    html +=
      '<textarea id="training-comment" class="comment-input" maxlength="' +
      NOTE_MAX_LENGTH +
      '" placeholder="メモを入力してください..."></textarea>';
    html += '<div class="memo-counter"><span id="memo-count">0</span>/' + NOTE_MAX_LENGTH + "</div>";
    html += "</div>";

    // 既存の記録項目（今日やったこと・今日の感想）は任意の追加項目として残す
    html += '<details class="memo-extra">';
    html += "<summary>今日やったこと・感想も記録する（任意）</summary>";
    html += '<div class="feedback-title">今日やったこと（複数選択可）</div>';
    html += '<div class="checkbox-grid">';
    TRAINING_ACTIVITIES.forEach(function (a) {
      html +=
        '<label><input type="checkbox" class="training-activity-checkbox" value="' +
        a +
        '"> ' +
        a +
        "</label>";
    });
    html += "</div>";
    html += '<div class="feedback-title">今日の感想</div>';
    html += '<div class="mood-row">';
    TRAINING_MOODS.forEach(function (m) {
      html +=
        '<button class="emoji-btn" data-action="select-mood" data-mood="' +
        m.value +
        '" title="' +
        m.label +
        '">' +
        '<span class="mood-emoji">' +
        m.emoji +
        "</span>" +
        '<span class="mood-label">' +
        escapeHtml(m.label) +
        "</span>" +
        "</button>";
    });
    html += "</div>";
    html += "</details>";

    html += '<button class="btn-pill btn-pill--block" data-action="submit-training-note">保存する</button>';

    // 最近のメモ（新しい順に3件）
    var notes = getLocal(STORAGE_KEYS.TRAINING_NOTES, []).slice().reverse();
    if (notes.length > 0) {
      html += '<h2 class="list-label">最近のメモ</h2>';
      html += '<div class="history-list">';
      notes.slice(0, 3).forEach(function (n) {
        html += trainingNoteItemHtml(n);
      });
      html += "</div>";
      html +=
        '<button class="text-link" data-action="open-training-note-history">過去のトレーニングメモをすべて見る →</button>';
    }

    html += "</div>";
    return html;
  }

  function handleSelectMood(el) {
    selectedMood = el.getAttribute("data-mood");
    var buttons = appEl.querySelectorAll(".mood-row .emoji-btn");
    buttons.forEach(function (b) {
      b.classList.toggle("is-selected", b === el);
    });
  }

  function submitTrainingNote() {
    var activities = [];
    appEl.querySelectorAll(".training-activity-checkbox:checked").forEach(function (cb) {
      activities.push(cb.value);
    });
    var commentEl = document.getElementById("training-comment");

    var note = {
      timestamp: new Date().toISOString(),
      activities: activities,
      mood: selectedMood,
      comment: commentEl ? commentEl.value.trim() : "",
      appVersion: APP_VERSION
    };

    var notes = getLocal(STORAGE_KEYS.TRAINING_NOTES, []);
    notes.push(note);
    setLocal(STORAGE_KEYS.TRAINING_NOTES, notes);

    showToast("保存しました");
    goHome();
  }

  function findTrainingMood(value) {
    for (var i = 0; i < TRAINING_MOODS.length; i++) {
      if (TRAINING_MOODS[i].value === value) return TRAINING_MOODS[i];
    }
    return null;
  }

  function formatNoteTimestamp(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso || "";
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    var hh = String(d.getHours()).padStart(2, "0");
    var mm = String(d.getMinutes()).padStart(2, "0");
    return d.getFullYear() + "/" + m + "/" + day + " " + hh + ":" + mm;
  }

  function openTrainingNoteHistory() {
    state.view = "trainingNoteHistory";
    render();
  }

  function trainingNoteItemHtml(n) {
    var mood = findTrainingMood(n.mood);
    var html = '<div class="training-note-item">';
    html += '<div class="training-note-date">' + escapeHtml(formatNoteTimestamp(n.timestamp)) + "</div>";
    if (n.comment) {
      html += '<div class="training-note-comment">' + escapeHtml(n.comment) + "</div>";
    }
    if (n.activities && n.activities.length > 0) {
      html += '<div class="training-note-activities">' + escapeHtml(n.activities.join("・")) + "</div>";
    }
    if (mood) {
      html += '<div class="training-note-mood">' + mood.emoji + " " + escapeHtml(mood.label) + "</div>";
    }
    html += "</div>";
    return html;
  }

  // ---------- 過去のトレーニングメモ ----------

  function viewTrainingNoteHistory() {
    // 日付が変わっても記録は消えず、新しい順に一覧表示する
    // （次の教習の待ち時間などに見返せるようにするための画面）
    var notes = getLocal(STORAGE_KEYS.TRAINING_NOTES, []).slice().reverse();
    var html = '<div class="screen screen--memo">';
    html += topBackHtml("open-training-notes");
    html += '<h1 class="screen-title screen-title--left">過去のトレーニングメモ</h1>';

    if (notes.length === 0) {
      html +=
        '<div class="panel"><div class="empty-state">まだトレーニングメモがありません。<br>「トレーニングメモ」から記録すると、ここに一覧で表示されます。</div></div>';
    } else {
      html += '<div class="history-list">';
      notes.forEach(function (n) {
        html += trainingNoteItemHtml(n);
      });
      html += "</div>";
    }
    html += "</div>";
    return html;
  }

  // ---------- 学習履歴 ----------

  function viewHistory() {
    var stats = computeHomeStats();
    var history = getLocal(STORAGE_KEYS.HISTORY, []).slice().reverse();
    var html = '<div class="screen screen--history">';
    html += '<h1 class="screen-title screen-title--left">学習履歴</h1>';
    html += '<p class="screen-lead screen-lead--left">これまでの歩みを確認する。</p>';

    html +=
      '<div class="stats-grid">' +
      '<div class="stat-box"><div class="stat-value">' +
      stats.todayCount +
      " / " +
      SESSION_SIZE +
      '</div><div class="stat-label">今日の学習</div></div>' +
      '<div class="stat-box"><div class="stat-value">' +
      stats.totalCount +
      '</div><div class="stat-label">累計</div></div>' +
      '<div class="stat-box"><div class="stat-value">' +
      stats.accuracyText +
      '</div><div class="stat-label">正答率</div></div>' +
      "</div>";

    if (history.length === 0) {
      html += '<div class="panel"><div class="empty-state">まだ学習履歴がありません。</div></div>';
    } else {
      html += '<div class="history-list">';
      history.forEach(function (h) {
        html +=
          '<div class="history-item">' +
          '<span class="history-date">' +
          escapeHtml(h.date) +
          "</span>" +
          '<span class="history-score">' +
          h.correctCount +
          "/" +
          h.count +
          "問正解（正答率" +
          h.accuracy +
          "%）</span>" +
          "</div>";
      });
      html += "</div>";
    }
    html += "</div>";
    return html;
  }

  // ---------- 設定（V4.1） ----------

  function openSettings() {
    state.view = "settings";
    render();
  }

  function settingOptionHtml(name, opt, current, inner) {
    var isSelected = opt.value === current;
    return (
      '<button class="option-card' +
      (isSelected ? " is-selected" : "") +
      '" aria-pressed="' +
      (isSelected ? "true" : "false") +
      '" data-action="set-setting" data-setting="' +
      name +
      '" data-value="' +
      opt.value +
      '">' +
      inner +
      (isSelected ? '<span class="option-check" aria-hidden="true">' + ICONS.check + "</span>" : "") +
      "</button>"
    );
  }

  function viewSettings() {
    var html = '<div class="screen screen--settings">';
    html += topBackHtml("go-home");
    html += '<h1 class="screen-title screen-title--left">設定</h1>';
    html += '<p class="screen-lead screen-lead--left">見やすい文字の大きさと色合いを選べます。選ぶとすぐに切り替わります。</p>';

    html += '<section class="settings-group">';
    html += '<h2 class="settings-label" id="settings-font-size">文字の大きさ</h2>';
    html += '<div class="option-grid" role="group" aria-labelledby="settings-font-size">';
    FONT_SIZE_OPTIONS.forEach(function (opt) {
      html += settingOptionHtml(
        "fontSize",
        opt,
        settings.fontSize,
        '<span class="option-sample ' +
          opt.sampleCls +
          '" aria-hidden="true">あ</span>' +
          '<span class="option-name">' +
          escapeHtml(opt.label) +
          "</span>"
      );
    });
    html += "</div>";
    html += "</section>";

    html += '<section class="settings-group">';
    html += '<h2 class="settings-label" id="settings-theme">テーマ</h2>';
    html += '<div class="option-list" role="group" aria-labelledby="settings-theme">';
    THEME_OPTIONS.forEach(function (opt) {
      html += settingOptionHtml(
        "theme",
        opt,
        settings.theme,
        '<span class="theme-swatch theme-swatch--' +
          opt.value +
          '" aria-hidden="true"><span></span><span></span><span></span></span>' +
          '<span class="option-body"><span class="option-name">' +
          escapeHtml(opt.label) +
          '</span><span class="option-desc">' +
          escapeHtml(opt.desc) +
          "</span></span>"
      );
    });
    html += "</div>";
    html += "</section>";

    // 見本：問題文と選択肢が今の設定でどう見えるか
    html += '<section class="settings-group">';
    html += '<h2 class="settings-label">表示の見本</h2>';
    html += '<div class="panel settings-preview" aria-hidden="true">';
    html += '<p class="question-text">この大きさ・色合いで、問題文や解説が表示されます。長い文章は画面の幅に合わせて折り返します。</p>';
    html +=
      '<div class="choice-btn is-selected"><span class="choice-letter">A</span><span class="choice-text">選んだ選択肢はこのように表示されます</span></div>';
    html += "</div>";
    html += "</section>";

    html += '<p class="settings-note">設定はこの端末にだけ保存されます。学習履歴やメモには影響しません。</p>';
    html += backHomeButtonHtml();
    html += "</div>";
    return html;
  }

  // ---------- 下部タブバー ----------

  var TAB_VIEWS = {
    home: "home",
    history: "history",
    trainingNotes: "memo",
    trainingNoteHistory: "memo"
  };

  function tabBarHtml(active) {
    function tab(key, action, icon, label) {
      return (
        '<button class="tab' +
        (active === key ? " is-active" : "") +
        '" data-action="' +
        action +
        '"' +
        (active === key ? ' aria-current="page"' : "") +
        ">" +
        icon +
        "<span>" +
        label +
        "</span></button>"
      );
    }
    return (
      '<nav class="tabbar" aria-label="メインメニュー">' +
      tab("home", "go-home", ICONS.tabHome, "ホーム") +
      tab("question", "open-start", ICONS.tabQuestion, "問題") +
      tab("history", "open-history", ICONS.tabHistory, "履歴") +
      tab("memo", "open-training-notes", ICONS.tabMemo, "メモ") +
      "</nav>"
    );
  }

  // ---------- レンダリング ----------

  function render(options) {
    var html = "";
    switch (state.view) {
      case "home":
        html = viewHome();
        break;
      case "start":
        html = viewStart();
        break;
      case "question":
        html = viewQuestion();
        break;
      case "result":
        html = viewResult();
        break;
      case "mistakes":
        html = viewMistakes();
        break;
      case "mistakeSolve":
        html = viewMistakeSolve();
        break;
      case "trainingNotes":
        html = viewTrainingNotes();
        break;
      case "trainingNoteHistory":
        html = viewTrainingNoteHistory();
        break;
      case "history":
        html = viewHistory();
        break;
      case "settings":
        html = viewSettings();
        break;
      default:
        html = viewHome();
    }

    var activeTab = TAB_VIEWS[state.view];
    if (activeTab) {
      html += tabBarHtml(activeTab);
    }
    document.body.classList.toggle("has-tabbar", !!activeTab);

    appEl.innerHTML = html;
    if (!(options && options.keepScroll)) {
      window.scrollTo(0, 0);
    }
  }

  // ---------- イベント委譲 ----------

  appEl.addEventListener("click", function (event) {
    var target = event.target.closest("[data-action]");
    if (!target || target.disabled) return;
    var action = target.getAttribute("data-action");

    switch (action) {
      case "open-start":
        openStart();
        break;
      case "start-session":
        startSession();
        break;
      case "pick-choice":
        pickChoice(parseInt(target.getAttribute("data-index"), 10));
        break;
      case "submit-answer":
        submitAnswer();
        break;
      case "show-explanation":
        setPhase("explain");
        break;
      case "back-to-verdict":
        setPhase("verdict");
        break;
      case "show-reflection":
        setPhase("reflect");
        break;
      case "select-reflection":
        selectReflection(target.getAttribute("data-key"));
        break;
      case "skip-reflection":
        proceedToNext(null);
        break;
      case "next-after-reflection":
        proceedFromReflection();
        break;
      case "open-mistakes":
        openMistakeList();
        break;
      case "open-mistake-solve":
        openMistakeSolve(parseInt(target.getAttribute("data-index"), 10));
        break;
      case "pick-mistake-choice":
        pickMistakeChoice(parseInt(target.getAttribute("data-index"), 10));
        break;
      case "submit-mistake-answer":
        submitMistakeAnswer();
        break;
      case "open-training-notes":
        openTrainingNotes();
        break;
      case "open-training-note-history":
        openTrainingNoteHistory();
        break;
      case "submit-training-note":
        submitTrainingNote();
        break;
      case "open-history":
        openHistory();
        break;
      case "go-home":
        goHome();
        break;
      case "select-mood":
        handleSelectMood(target);
        break;
      case "open-settings":
        openSettings();
        break;
      case "set-setting":
        updateSetting(target.getAttribute("data-setting"), target.getAttribute("data-value"));
        break;
      default:
        break;
    }
  });

  // トレーニングメモの文字数表示
  appEl.addEventListener("input", function (event) {
    if (event.target && event.target.id === "training-comment") {
      var countEl = document.getElementById("memo-count");
      if (countEl) countEl.textContent = String(event.target.value.length);
    }
  });

  // ---------- 初期化 ----------

  function init() {
    if (typeof questions === "undefined") {
      appEl.innerHTML = '<div class="empty-state">問題データを読み込めませんでした。</div>';
      return;
    }
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./service-worker.js").catch(function (err) {
        console.warn("Service Workerの登録に失敗しました", err);
      });
    }
    render();
  }

  init();
})();
