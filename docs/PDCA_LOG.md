# PDCA_LOG.md

プロジェクト運営上のPDCA（Plan / Do / Check / Act）記録。

## 2026-09-22（初期構築）

- **Plan**: ゼロドラ（仮称）の初期プロジェクト土台を構築する
- **Do**: 最小構成のディレクトリ・ファイル（プレースホルダー）と初期ドキュメント一式を作成
- **Check**: 人間による確認待ち（commit / push 前）
- **Act**: 内容確認OK。Step 3（MVP基本UI・学習導線）の実装指示を受領

## 2026-09-22（Step 3: MVP基本UI・学習導線）

- **Plan**: 仮問題データを用いて「今日の10問」の一連の学習導線（ホーム〜結果〜復習〜教習メモ〜学習履歴）を実装する
- **Do**:
  - app.js / style.css を新規作成し、Vanilla JSで画面遷移・回答処理・フィードバック・localStorage保存を実装
  - questions/questions.jsに`reviewStatus:"mock"`の仮問題6問（choices/correct形式）を追加
  - QUESTION_DATA_SCHEMA.mdを選択式スキーマに改訂
  - service-worker.jsに基本アセットのキャッシュ処理を追加
- **Check**:
  - node --check による構文チェック（app.js / service-worker.js）: OK
  - questions.jsのデータ整合性チェック（choices/correctの範囲）: OK
  - セッション構築ロジック・ホーム統計計算ロジックの単体テスト: OK
  - 実機・ブラウザでの目視確認は未実施（人間による確認待ち）
- **Act**: 人間の確認結果を受けて次の作業を決定（commit / push は未実施）

## 2026-09-22（Step 4: 実問題20問導入に向けた調査・計画）

- **Plan**: 実問題20問を導入する前に、現在の実装・スキーマ・法令一次資料を調査し、計画を作成する
- **Do**: index.html/app.js/questions.js/各docsを確認。2026年9月1日の生活道路法定速度変更（60→30km/h）を警察庁一次資料で確認。「2026年7月17日教則改正」は一次資料上で確認できず、Step5での要確認事項として報告
- **Check**: 出題ロジック（`buildSessionQuestions`）がmock/実問題を区別せず全問からシャッフルしている点を課題として特定
- **Act**: 人間の承認を受けてStep5へ

## 2026-09-23（Step 5: 実問題20問の導入）

- **Plan**: 実問題20問（D-C001〜D-C020）を一次資料に基づきオリジナル作成し、`reviewStatus === "reviewed"` のみを出題対象とする
- **Do**:
  - questions/questions.jsに20問を追加（19問reviewed、1問draft）
  - app.jsの出題ロジックをreviewed限定に変更
  - QUESTION_DATA_SCHEMA.md / CHANGELOG.mdを更新
  - 2026年9月1日法定速度改正を速度カテゴリに反映
  - 「令和8年国家公安委員会告示第32号」は一次資料で確認できず、出典として未使用
- **Check**:
  - node --check（app.js/questions.js/service-worker.js）: OK
  - ID重複なし、D-C001〜020全存在、4択・correct範囲、answer不使用: OK
  - reviewedのみ抽出、mock/draft混入なし、10問生成を10試行で確認: OK
  - 実機・ブラウザでの目視確認は未実施（人間による確認待ち）
- **Act**: 人間の確認結果を受けて次の作業を決定（commit / push は未実施）

## 2026-09-23（Step 5フォローアップ：一次資料の再確認・D-C019の見直し）

- **Plan**: 「令和8年7月17日教則改正」を警察庁の告示一覧ページで直接確認し、
  D-C019の根拠条文を追加確認する
- **Do**:
  - 警察庁 国家公安委員会告示一覧（npa.go.jp/laws/kaisei/kokuji/npsc.html）
    で「令和8年7月17日 交通の方法に関する教則の一部を改正する件（令和8年
    国家公安委員会告示第32号）」の掲載を確認し、本文PDFを取得
  - 内容が2026年9月1日の生活道路法定速度改正（D-C016・D-C017）と一致する
    ことを確認し、両問題の`sourceVersion`にこの告示を追記
  - D-C019の根拠（道路交通法第18条第3項・第4項、令和8年4月1日施行）を
    警察庁公式PDF・埼玉県警察公式ページで確認し、`reviewStatus`を
    `"reviewed"`へ変更
- **Check**: node --check（questions.js）OK。D-C問題20問すべてが
  `reviewStatus: "reviewed"`になったことを確認
- **Act**: 人間の確認結果を受けて次の作業を決定（commit / push は未実施）

## 2026-09-23（Step 5レビュー対応：D-C009・D-C014・D-C018の修正）

- **Plan**: レビューで指摘された3問（D-C009, D-C014, D-C018）の法令対応を
  見直し、道路交通法の現行条文に正確に対応する問題へ修正する
- **Do**:
  - 道路交通法の全条文（第36条・第20条・第38条の2）を一次資料で確認
  - D-C009を第36条第1項（左方優先）に対応する問題へ修正
  - D-C014を第20条第1項（3車線以上は右端を追い越し用に空ける）に対応する
    問題へ修正し、正解が一意に定まるよう選択肢を調整
  - D-C018を第38条の2（交差点又はその直近における歩行者優先）に対応する
    問題へ修正
- **Check**:
  - node --check（app.js/questions.js/service-worker.js）: OK
  - D-C001〜020存在・ID重複なし・4択・correct範囲: OK
  - reviewedのみ抽出、10試行でmock/draft混入なし、常に10問生成: OK
  - 画面遷移シミュレーション: OK
- **Act**: 人間の確認結果を受けて次の作業を決定（commit / push は未実施）
