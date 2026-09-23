// app.js
//
// ミチト MVP v0.1 - Step 6 + UI/ブランド移行 v1
// 「今日の10問」の基本UI・学習導線 ＋ 実問題20問（D-C001〜D-C020）の出題。
// Step 6-A: 間違えた問題の復習UX改善（正解するたびに一覧から消える）
// Step 6-B: 問題後の振り返り（旧フィードバック機能を「寄り添いアンケート」へ変更）
//
// 方針:
// - Vanilla JS のみ（フレームワーク・ビルド環境なし）
// - questions/questions.js のうち reviewStatus === "reviewed" の問題のみを
//   「今日の10問」の出題対象とする（"mock"・"draft" は出題対象に含めない）
// - Google Sheets 等の外部送信は未実装。振り返り・教習メモは localStorage のみに保存
// - バックエンド、認証、広告、課金、AI機能は未実装
//
// 問題データの構造（QUESTION_DATA_SCHEMA.md 準拠）:
//   { id, reviewStatus, category, question, choices: [...], correct: <index>, explanation,
//     source, sourceVersion, sourceSection, lastVerifiedDate, stage, topic, difficulty, tags }
//   ※ app.js が実際に参照するのは id / reviewStatus / question / choices / correct / explanation

(function () {
  "use strict";

  var APP_VERSION = "0.1.0-step6";
  var SESSION_SIZE = 10;

  var STORAGE_KEYS = {
    HISTORY: "zerodora_history",
    FEEDBACK: "zerodora_feedback",
    TRAINING_NOTES: "zerodora_training_notes"
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
      return Object.assign({}, q, { _instanceKey: q.id + "_" + idx });
    });
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

  // ---------- 画面遷移 ----------

  function goHome() {
    state.view = "home";
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
      reflectionChoice: null
    };
    state.view = "question";
    render();
  }

  function selectChoice(choiceIndex) {
    var s = state.session;
    if (!s || s.answeredCurrent) return;
    s.selectedIndex = choiceIndex;
    s.answeredCurrent = true;
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
      selectedAnswer: s.selectedIndex,
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
          selectedAnswer: a.selectedAnswer
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
      mistakeTotal: mistakes.length // 復習の進捗表示用（正解して一覧から消えても変化しない当初件数）
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
    state.mistakeSolveSnapshot = data.mistakes[index];
    state.mistakeAnswered = false;
    state.mistakeSelected = null;
    state.view = "mistakeSolve";
    render();
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

  // ---------- ビュー: ホーム ----------

  function viewHome() {
    var stats = computeHomeStats();
    return (
      '<div class="header">' +
      '<div class="app-title">ミチト</div>' +
      '<div class="app-tagline">今日も、少しずつ。</div>' +
      "</div>" +
      '<div class="card">' +
      '<div class="home-card-title">今日の10問</div>' +
      '<div class="home-card-subtitle">今日も10問、一緒にやろう。</div>' +
      '<button class="btn btn-primary mt-16" data-action="start-session">はじめる →</button>' +
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
      "</div>" +
      "</div>" +
      '<div class="link-row">' +
      '<button data-action="open-mistakes">' +
      '<span class="home-card-link-title">間違い問題</span>' +
      '<span class="home-card-link-subtitle">間違えた問題を、もう一度。</span>' +
      "</button>" +
      '<button data-action="open-training-notes">' +
      '<span class="home-card-link-title">トレーニングメモ</span>' +
      '<span class="home-card-link-subtitle">今日気づいたことや、覚えておきたいことを残しておこう。</span>' +
      "</button>" +
      '<button data-action="open-history">' +
      '<span class="home-card-link-title">学習履歴</span>' +
      '<span class="home-card-link-subtitle">これまでの歩みを振り返ってみよう。</span>' +
      "</button>" +
      "</div>"
    );
  }

  // ---------- ビュー: 問題（回答前／回答後を含む） ----------

  function viewQuestion() {
    var s = state.session;
    var q = s.questions[s.currentIndex];
    var progressPercent = Math.round((s.currentIndex / s.questions.length) * 100);

    var html =
      '<div class="progress-label">今日の10問　' +
      (s.currentIndex + 1) +
      " / " +
      s.questions.length +
      "</div>" +
      '<div class="progress-bar"><div class="progress-bar-fill" style="width:' +
      progressPercent +
      '%"></div></div>' +
      '<div class="card">';

    html += '<div class="question-number">第' + (s.currentIndex + 1) + "問</div>";

    if (q.reviewStatus === "mock") {
      html += '<div class="mock-badge">仮問題（UI確認用）</div>';
    }

    html += '<div class="question-text">' + escapeHtml(q.question) + "</div>";
    html += '<div class="choice-list">';

    q.choices.forEach(function (choice, idx) {
      var cls = "choice-btn";
      var disabledAttr = "";
      if (s.answeredCurrent) {
        disabledAttr = "disabled";
        if (idx === q.correct) {
          cls += " is-correct";
        } else if (idx === s.selectedIndex) {
          cls += " is-incorrect";
        }
      }
      html +=
        '<button class="' +
        cls +
        '" data-action="select-choice" data-index="' +
        idx +
        '" ' +
        disabledAttr +
        ">" +
        escapeHtml(choice) +
        "</button>";
    });

    html += "</div>"; // choice-list
    html += "</div>"; // card

    if (s.answeredCurrent) {
      var isCorrect = s.selectedIndex === q.correct;
      html +=
        '<div class="result-banner ' +
        (isCorrect ? "correct" : "incorrect") +
        '">' +
        (isCorrect ? "正解！ 🎉" : "今回は惜しかったです。") +
        "</div>";

      html +=
        '<div class="answer-message">' +
        (isCorrect
          ? "いいですね。<br>ちゃんと理解できています 👍"
          : "大丈夫。<br>ここで覚えておけばOKです。") +
        "</div>";

      if (!isCorrect) {
        html +=
          '<p style="text-align:center;margin-top:-6px;">正解：' +
          escapeHtml(q.choices[q.correct]) +
          "</p>";
      }

      html += '<div class="feedback-title mt-16">解説</div>';
      html += '<div class="explanation-box">' + escapeHtml(q.explanation || "") + "</div>";

      html += viewReflectionForm();
    }

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

  function viewReflectionForm() {
    var s = state.session;
    var chosen = s.reflectionChoice;

    var html = '<div class="card feedback-section">';
    html += '<div class="feedback-title">振り返り</div>';
    html += '<div class="reflect-intro">今回の問題、どうでしたか？</div>';
    html += '<div class="reflect-grid">';

    REFLECTION_OPTIONS.forEach(function (opt) {
      var isSelected = chosen === opt.key;
      var cls = "reflect-btn" + (isSelected ? " is-selected" : "");
      var disabledAttr = chosen ? "disabled" : "";
      var actionAttr = chosen ? "" : ' data-action="select-reflection" data-key="' + opt.key + '"';
      html +=
        "<button class=\"" +
        cls +
        "\"" +
        actionAttr +
        " " +
        disabledAttr +
        ">" +
        '<span class="reflect-emoji">' +
        opt.emoji +
        "</span>" +
        '<span class="reflect-label">' +
        escapeHtml(opt.label) +
        "</span>" +
        "</button>";
    });

    html += "</div>"; // reflect-grid

    if (!chosen) {
      html += '<button class="btn btn-ghost mt-16" data-action="skip-reflection">スキップして次へ</button>';
    } else {
      var opt = findReflectionOption(chosen);
      var replyHtml = opt ? escapeHtml(opt.reply).replace(/\n/g, "<br>") : "";
      html += '<div class="zerodora-reply">' + replyHtml + "<br>今日も一歩進みました。</div>";
      html += '<button class="btn btn-primary mt-16" data-action="next-after-reflection">次の問題へ</button>';
    }

    html += "</div>"; // card
    return html;
  }

  function selectReflection(key) {
    var s = state.session;
    if (!s || s.reflectionChoice) return;
    s.reflectionChoice = key;
    render();
  }

  function proceedFromReflection() {
    var s = state.session;
    if (!s || !s.reflectionChoice) return;
    proceedToNext({ rating: s.reflectionChoice, reasons: [], comment: "" });
  }

  // ---------- ビュー: 結果 ----------

  function viewResult() {
    var data = state.lastSession;
    if (!data) {
      return '<div class="empty-state">結果データがありません。</div>' + backHomeButtonHtml();
    }
    var s = data.summary;
    var minutes = Math.floor(s.durationSec / 60);
    var seconds = s.durationSec % 60;
    var timeText = minutes > 0 ? minutes + "分" + seconds + "秒" : seconds + "秒";

    var html =
      '<div class="header"><div class="app-title">今日の10問 終了！</div></div>' +
      '<div class="card result-score">' +
      '<div class="big-number">' +
      s.correctCount +
      " / " +
      s.count +
      "</div>" +
      '<div class="accuracy">正答率 ' +
      s.accuracy +
      "%</div>" +
      '<p style="margin-top:10px;">学習時間：' +
      timeText +
      "</p>" +
      "</div>";

    if (data.mistakes.length === 0) {
      html +=
        '<div class="card answer-message">🎉 すべて正解！<br>今日もしっかり前に進みました。</div>';
    } else {
      html +=
        '<div class="card answer-message">今日もお疲れさまでした。<br>少しずつでも、ちゃんと前に進んでいます。<br><br>あと' +
        data.mistakes.length +
        "問、一緒に確認してみよう。</div>";
    }

    html += '<div class="card">';
    if (data.mistakes.length === 0) {
      html += '<div class="empty-state">今回は間違えた問題がありませんでした 🎉</div>';
    } else {
      html += '<div class="feedback-title">間違えた問題（' + data.mistakes.length + "問）</div>";
      html += '<div class="mistake-list">';
      data.mistakes.forEach(function (m) {
        html += '<div class="mistake-item">' + escapeHtml(m.question) + "</div>";
      });
      html += "</div>";
    }
    html += "</div>";

    html += '<div class="btn-block-group">';
    if (data.mistakes.length > 0) {
      html += '<button class="btn btn-secondary" data-action="open-mistakes">間違えた問題を復習</button>';
    }
    html += '<button class="btn btn-ghost" data-action="go-home">ホームへ</button>';
    html += "</div>";

    return html;
  }

  function backHomeButtonHtml() {
    return '<div class="btn-block-group mt-16"><button class="btn btn-ghost" data-action="go-home">ホームへ</button></div>';
  }

  // ---------- ビュー: 間違えた問題 ----------

  function viewMistakes() {
    var data = state.lastSession;
    var mistakes = data ? data.mistakes : [];
    var total = data ? data.mistakeTotal || 0 : 0;
    var remaining = mistakes.length;
    var cleared = total - remaining;

    var html = '<div class="header"><div class="app-title">間違い問題</div>';
    html += '<div class="app-tagline">間違えた問題を、もう一度。</div>';
    if (total > 0 && remaining > 0) {
      html +=
        '<div class="mistake-progress">' +
        total +
        "問中 " +
        cleared +
        "問クリア</div>" +
        '<div class="mistake-progress-sub">あと' +
        remaining +
        "問です。ミチトと一緒に、もう一度やってみましょう。</div>";
    }
    html += "</div>";

    if (total === 0) {
      html +=
        '<div class="card"><div class="empty-state">直近のセッションで間違えた問題はありません。<br>「今日の10問」を解くと、ここに表示されます。</div></div>';
    } else if (remaining === 0) {
      html +=
        '<div class="card text-center">' +
        '<div style="font-size:32px;">🎉</div>' +
        '<div class="feedback-title" style="margin-top:8px;">すべてクリア！</div>' +
        "<p>間違えた問題を全部解決しました。<br>いい感じです！</p>" +
        "</div>";
    } else {
      html += '<div class="card"><div class="mistake-list">';
      mistakes.forEach(function (m, idx) {
        var preview = m.question.length > 28 ? m.question.slice(0, 28) + "…" : m.question;
        html +=
          '<button class="mistake-item' +
          (m.retryNeeded ? " is-retry" : "") +
          '" data-action="open-mistake-solve" data-index="' +
          idx +
          '">' +
          '<span class="mistake-item-top">' +
          '<span class="mistake-item-id">' +
          escapeHtml(m.questionId) +
          "</span>" +
          (m.retryNeeded ? '<span class="mistake-retry-badge">もう一度チャレンジ</span>' : "") +
          "</span>" +
          '<span class="mistake-item-preview">' +
          escapeHtml(preview) +
          "</span>" +
          '<span class="mistake-item-cta">もう一度解く →</span>' +
          "</button>";
      });
      html += "</div></div>";
    }

    html += backHomeButtonHtml();
    return html;
  }

  function viewMistakeSolve() {
    var m = state.mistakeSolveSnapshot;

    var html = '<div class="header"><div class="app-title">復習</div></div>';
    html += '<div class="card">';
    html += '<div class="question-text">' + escapeHtml(m.question) + "</div>";
    html += '<div class="choice-list">';

    m.choices.forEach(function (choice, idx) {
      var cls = "choice-btn";
      var disabledAttr = "";
      if (state.mistakeAnswered) {
        disabledAttr = "disabled";
        if (idx === m.correct) {
          cls += " is-correct";
        } else if (idx === state.mistakeSelected) {
          cls += " is-incorrect";
        }
      }
      html +=
        '<button class="' +
        cls +
        '" data-action="select-mistake-choice" data-index="' +
        idx +
        '" ' +
        disabledAttr +
        ">" +
        escapeHtml(choice) +
        "</button>";
    });

    html += "</div></div>";

    if (state.mistakeAnswered) {
      var isCorrect = state.mistakeSelected === m.correct;
      html +=
        '<div class="result-banner ' +
        (isCorrect ? "correct" : "incorrect") +
        '">' +
        (isCorrect ? "正解！ 🎉" : "今回は惜しかったです。") +
        "</div>";
      html += '<div class="explanation-box">' + escapeHtml(m.explanation || "") + "</div>";

      if (isCorrect) {
        html +=
          '<p class="mistake-clear-note">いいですね！ 👍 ちゃんと理解できましたね。<br>この問題は一覧から外れました。</p>';
      } else {
        html +=
          '<p class="mistake-retry-note">大丈夫です。もう一度だけ、一緒にやってみましょう。<br>この問題は引き続き一覧に残ります。</p>';
      }
    }

    html += '<div class="btn-block-group">';
    html += '<button class="btn btn-secondary" data-action="open-mistakes">一覧に戻る</button>';
    html += '<button class="btn btn-ghost" data-action="go-home">ホームへ</button>';
    html += "</div>";

    return html;
  }

  // ---------- ビュー: 教習メモ ----------

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
    var html = '<div class="header"><div class="app-title">トレーニングメモ</div>';
    html += '<div class="app-tagline">今日気づいたことや、覚えておきたいことを残しておこう。</div>';
    html += "</div>";
    html += '<div class="card">';
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
        m.emoji +
        "</button>";
    });
    html += "</div>";

    html += '<div class="feedback-title">一言（任意）</div>';
    html += '<textarea id="training-comment" class="comment-input" placeholder="自由にどうぞ"></textarea>';

    html += '<button class="btn btn-primary" data-action="submit-training-note">入力完了</button>';
    html += "</div>";

    html += '<div class="link-row">';
    html += '<button data-action="open-training-note-history">過去のトレーニングメモを見る</button>';
    html += "</div>";

    html += backHomeButtonHtml();
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

  // ---------- ビュー: 過去の教習メモ ----------

  function viewTrainingNoteHistory() {
    // 日付が変わっても記録は消えず、新しい順に一覧表示する
    // （次の教習の待ち時間などに見返せるようにするための画面）
    var notes = getLocal(STORAGE_KEYS.TRAINING_NOTES, []).slice().reverse();
    var html = '<div class="header"><div class="app-title">過去のトレーニングメモ</div></div>';

    if (notes.length === 0) {
      html +=
        '<div class="card"><div class="empty-state">まだトレーニングメモがありません。<br>「トレーニングメモ」から記録すると、ここに一覧で表示されます。</div></div>';
    } else {
      html += '<div class="card"><div class="history-list">';
      notes.forEach(function (n) {
        var mood = findTrainingMood(n.mood);
        html += '<div class="training-note-item">';
        html += '<div class="training-note-date">' + escapeHtml(formatNoteTimestamp(n.timestamp)) + "</div>";

        if (n.activities && n.activities.length > 0) {
          html +=
            '<div class="training-note-activities">' +
            escapeHtml(n.activities.join("・")) +
            "</div>";
        }

        if (mood) {
          html +=
            '<div class="training-note-mood">' +
            mood.emoji +
            " " +
            escapeHtml(mood.label) +
            "</div>";
        }

        if (n.comment) {
          html += '<div class="training-note-comment">' + escapeHtml(n.comment) + "</div>";
        }

        html += "</div>"; // training-note-item
      });
      html += "</div></div>";
    }

    html += '<div class="btn-block-group">';
    html += '<button class="btn btn-secondary" data-action="open-training-notes">トレーニングメモを書く</button>';
    html += '<button class="btn btn-ghost" data-action="go-home">ホームへ</button>';
    html += "</div>";

    return html;
  }

  // ---------- ビュー: 学習履歴 ----------

  function viewHistory() {
    var history = getLocal(STORAGE_KEYS.HISTORY, []).slice().reverse();
    var html = '<div class="header"><div class="app-title">学習の記録</div>';
    html += '<div class="app-tagline">これまでの歩みを振り返ってみよう。</div>';
    html += "</div>";

    if (history.length === 0) {
      html += '<div class="card"><div class="empty-state">まだ学習履歴がありません。</div></div>';
    } else {
      html += '<div class="card"><div class="history-list">';
      history.forEach(function (h) {
        html +=
          '<div class="history-item">' +
          escapeHtml(h.date) +
          "　" +
          h.correctCount +
          "/" +
          h.count +
          "問正解（正答率" +
          h.accuracy +
          "%）</div>";
      });
      html += "</div></div>";
    }

    html += backHomeButtonHtml();
    return html;
  }

  // ---------- レンダリング ----------

  function render() {
    var html = "";
    switch (state.view) {
      case "home":
        html = viewHome();
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
      default:
        html = viewHome();
    }
    appEl.innerHTML = html;
    window.scrollTo(0, 0);
  }

  // ---------- イベント委譲 ----------

  appEl.addEventListener("click", function (event) {
    var target = event.target.closest("[data-action]");
    if (!target) return;
    var action = target.getAttribute("data-action");

    switch (action) {
      case "start-session":
        startSession();
        break;
      case "select-choice":
        selectChoice(parseInt(target.getAttribute("data-index"), 10));
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
      case "select-mistake-choice":
        selectMistakeChoice(parseInt(target.getAttribute("data-index"), 10));
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
      default:
        break;
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
