# ミチト iOSクラウド準備
手元Macを使わず、GitHub ActionsのmacOS runnerで生成・コンパイルする候補。公開Site v0.15ソース498aa85に基づく。GitHub masterは別の古い状態のため、この候補ブランチを基準にする。

## 実施済み
npm installによるpackage-lock固定、prepare:webで教材と画面同梱、cap add ios、cap sync ios、アイコンとPrivacyInfo.xcprivacyのXcode資産登録（繰返しても重複なし）。Linuxで生成まで確認、Xcodeコンパイルは未実行。

## 手動クラウド検証
.github/workflows/michito-ios-unsigned.ymlはworkflow_dispatchのみ。default branchへレビュー統合した後、Actionsから『Michito iOS unsigned validation』をRun workflow。署名なしApp.appはiPhoneへ配布できない。Apple uploadや定期実行はない。node22、lockに固定されたCapacitor8.5.2/Preferences8.0.1等を使用する。

## 加入有効化後
仮Bundle ID com.yoshioide2301.michitoを正式登録値と照合。Team ID、配布証明書、プロファイル、APIキーを秘密管理で設定。初回App Store Versionは1.0、Build1を候補とする（Web0.15とは別）。最終版番号・署名・地域等確定後に設定する。

## リリース前の実機検証
10問と模試の保存/復帰/期限、アプリ更新後の履歴、機内モード学習、投稿失敗時の入力保持、画像選択/返信希望/同意/CORS、プライバシーURL、文字サイズ/テーマ、iPhone/iPad縦横とVoiceOver。Safariとアプリの学習履歴は別領域。自動移行なし。
Preferencesの順序付き書込と終了直前の保存を実機確認。提出バンドルでmanifestの統合と全SDKの理由/通信を確認。
アイコンは元のホームの『左手前から街へ向かう道』を参考にした正方形案。ホームイラストを差替えていない。スプラッシュの独自仕上げと提出スクリーンショットは未完成。

## アイコン維持方針（2026-10-03）
既存WebのappIconSvgによる「Mと道路」を使用する。色・形を変更しない。1024pxの不透明PNGへ書き出し、背景の角丸はiOSのマスクに任せる。ホームの道路から街へ向かうイラストも維持する。
