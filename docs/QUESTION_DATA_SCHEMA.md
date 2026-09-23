# QUESTION_DATA_SCHEMA.md

問題データの基本スキーマを記録する。
Step 5時点で、実問題20問（D-C001〜D-C020）がこのスキーマに沿って
`questions/questions.js` に追加されている。

## 想定フィールド（Step 5改訂版：フィールド追加）

出題形式は選択式（4択）に統一し、`choices` / `correct` を使用する。
`answer` フィールドは**使用しない**（廃止・Step3時点から変更なし）。

既存フィールド（Step3〜4から変更なし）：

| フィールド名 | 型 | 説明 |
|---|---|---|
| `id` | string | 問題を一意に識別するID。実問題は `D-C001`〜`D-C020` のように採番し、以後IDは変更しない |
| `reviewStatus` | string | データの状態。`"mock"`（UI確認用仮問題）／`"draft"`（作成中・一次資料照合未完了）／`"reviewed"`（照合済み・出題可） |
| `category` | string | 出題カテゴリ（例: 信号, 標識・標示, 交差点・右左折 等） |
| `question` | string | 問題文 |
| `choices` | string[] | 選択肢の配列（実問題は4択で統一） |
| `correct` | number | 正解の選択肢インデックス（0始まり）。`choices` の要素数に収まる値であること |
| `explanation` | string | 解説文 |
| `source` | string | 出典・根拠となる法令・資料名 |
| `sourceUrl` | string（任意） | 出典の参照URL |
| `lastVerifiedDate` | string（YYYY-MM-DD） | 内容を最後に確認した日付 |
| `difficulty` | 任意 | 難易度。Step5では数値（1〜3）で運用（1: 易しい〜3: 難しい） |
| `tags` | string[]（任意） | 検索・分類用のタグ |

Step 5で追加したフィールド（任意項目）：

| フィールド名 | 型 | 説明 |
|---|---|---|
| `stage` | string（任意） | 教習段階。例: `"first"`（第1段階相当）／`"second"`（第2段階相当） |
| `topic` | string（任意） | `category` より細かい小項目（例: 「信号機の意味（黄色信号）」） |
| `sourceVersion` | string（任意） | 根拠とした法令・告示の改正日や版（例: 「令和8年9月1日施行」）。改正の反映がない場合は空文字でよい |
| `sourceSection` | string（任意） | 出典の該当条文・節（例: 「第43条」） |

## 出題対象の判定ルール（app.js側の実装）

- 「今日の10問」の出題対象は `reviewStatus === "reviewed"` の問題**のみ**
- `"mock"`（UI確認用仮問題）・`"draft"`（検証未完了の実問題）は出題対象に含めない
- reviewed問題が `SESSION_SIZE`（10）未満の場合は、reviewed問題内で繰り返して10問を構成する
- reviewed問題が10問以上そろっている場合は、その中からランダムに10問を選ぶ（カテゴリ別の出題比率制御などは未実装）

## 想定データ形式（実データ例）

```js
{
  id: "D-C001",
  reviewStatus: "reviewed",
  stage: "first",
  category: "信号",
  topic: "信号機の意味（黄色信号）",
  question: "対面する信号が黄色に変わったとき、車はどうするべき？",
  choices: [
    "安全に停止できる場合は停止しなければならない",
    "必ず一時停止しなければならない",
    "そのまま進行してよい",
    "対向車がいなければ進行してよい"
  ],
  correct: 0,
  explanation: "黄色信号は原則として「止まれ」を意味します。安全に停止できない場合のみ進行できます。",
  source: "道路交通法施行令",
  sourceVersion: "",
  sourceSection: "第2条（信号の意味）",
  lastVerifiedDate: "2026-09-23",
  difficulty: 1,
  tags: ["信号", "第1段階"]
}
```

## 注意事項

- 実データの作成にあたっては `docs/LEGAL_SOURCE_POLICY.md` の方針に従うこと
- `answer` フィールドは過去のスキーマ案で使用していたが、選択式への統一に伴い廃止した。既存データ・コードで `answer` を参照しないこと
- `lastVerifiedDate` のフィールド名は固定とし、`lastVerified` 等への変更は行わない
- Step3で追加したmock問題（`mock_001`〜`mock_006`、`reviewStatus: "mock"`）はUI確認用データとして引き続き残すが、出題対象には含めない
