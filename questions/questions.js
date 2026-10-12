// MCT ○×教材 仮免の範囲200問（v15 案、学科教本 第1段階の教習番号1〜10）。mock6問は出題対象外。根拠は ref（条・項・号）。GPT の照合前（TestFlight でのテスト配布用）。
const questions = [
  {
    "id": "mock_001",
    "reviewStatus": "mock",
    "category": "仮データ",
    "question": "（仮問題）信号が黄色に変わったとき、原則としてどうするべき？",
    "choices": [
      "安全に停止できる場合は停止する",
      "必ず加速して通過する",
      "無視してそのまま進む"
    ],
    "correct": 0,
    "explanation": "（仮解説）黄色信号は「止まれ」が原則です。安全に停止できない場合のみ進行できます。正式な解説は別工程で作成します。",
    "source": "",
    "lastVerifiedDate": ""
  },
  {
    "id": "mock_002",
    "reviewStatus": "mock",
    "category": "仮データ",
    "question": "（仮問題）横断歩道に歩行者がいるとき、車はどうするべき？",
    "choices": [
      "歩行者の横断が終わるまで一時停止する",
      "クラクションを鳴らして通過する",
      "スピードを上げて先に通過する"
    ],
    "correct": 0,
    "explanation": "（仮解説）横断歩道を渡ろうとする歩行者がいる場合、車は一時停止して道を譲る必要があります。",
    "source": "",
    "lastVerifiedDate": ""
  },
  {
    "id": "mock_003",
    "reviewStatus": "mock",
    "category": "仮データ",
    "question": "（仮問題）運転中にシートベルトはどうするべき？",
    "choices": [
      "運転席・同乗者ともに着用する",
      "運転席のみ着用すればよい",
      "近距離なら着用しなくてよい"
    ],
    "correct": 0,
    "explanation": "（仮解説）原則として運転者・同乗者ともにシートベルトを着用する必要があります。",
    "source": "",
    "lastVerifiedDate": ""
  },
  {
    "id": "mock_004",
    "reviewStatus": "mock",
    "category": "仮データ",
    "question": "（仮問題）「一時停止」の標識がある場所ではどうするべき？",
    "choices": [
      "必ず停止線の直前で一時停止する",
      "徐行すれば停止しなくてよい",
      "見通しが良ければ停止しなくてよい"
    ],
    "correct": 0,
    "explanation": "（仮解説）一時停止の標識がある場所では、周囲の状況にかかわらず必ず一時停止する必要があります。",
    "source": "",
    "lastVerifiedDate": ""
  },
  {
    "id": "mock_005",
    "reviewStatus": "mock",
    "category": "仮データ",
    "question": "（仮問題）雨天時の運転で特に注意すべきことは？",
    "choices": [
      "車間距離を通常より広くとる",
      "車間距離を通常より詰める",
      "速度を上げて早く目的地に着く"
    ],
    "correct": 0,
    "explanation": "（仮解説）雨天時は路面が滑りやすく制動距離が伸びるため、車間距離を広くとることが重要です。",
    "source": "",
    "lastVerifiedDate": ""
  },
  {
    "id": "mock_006",
    "reviewStatus": "mock",
    "category": "仮データ",
    "question": "（仮問題）駐車禁止の標識がある場所に短時間だけ車を止めてもよい？",
    "choices": [
      "原則として止めてはいけない",
      "5分以内なら止めてよい",
      "ハザードランプをつければ止めてよい"
    ],
    "correct": 0,
    "explanation": "（仮解説）駐車禁止の標識がある場所では、短時間であっても原則として駐車してはいけません。",
    "source": "",
    "lastVerifiedDate": ""
  },
  {
    "id": "D-C001",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "信号",
    "topic": "信号機の意味（黄色信号）",
    "question": "対面する信号が黄色に変わったとき、停止位置に近づいていて安全に停止できない場合は、そのまま進むことができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "黄色の灯火では、車両は停止位置を越えて進んではいけません。ただし、黄色に変わった時に停止位置に近づいていて安全に停止できない場合は除かれるので、そのまま進むことができます。",
    "source": "道路交通法施行令",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第2条（信号の意味）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C002",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "信号",
    "topic": "信号機の意味（点滅信号）",
    "question": "対面する信号が赤色の点滅のとき、他の車が見えなければ徐行だけで進むことができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "赤色の灯火の点滅では、車両は停止位置で一時停止しなければなりません。他の車が見えなくても、徐行だけで進むことはできません。なお、黄色の灯火の点滅なら、他の交通に注意して進むことができます。",
    "source": "道路交通法施行令",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第2条（信号の意味／点滅信号）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "信号",
      "点滅信号"
    ],
    "type": "truefalse",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C003",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "信号",
    "topic": "信号機の意味（矢印信号）",
    "question": "交差点に進入する前、赤信号と右向きだけの青色矢印が表示されているとき、普通乗用車は右折も直進もできる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "青色の矢印が出ていれば、赤信号でも矢印の方向には進めます。しかし、赤信号では停止位置を越えて進めないので、矢印が右向きだけなら直進はできません。",
    "source": "道路交通法施行令",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第2条（信号の意味／矢印信号）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "信号",
      "矢印信号"
    ],
    "type": "truefalse",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C004",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "標識・標示",
    "topic": "最高速度標識",
    "question": "普通乗用車に適用される最高速度40km/hの標識がある道路では、40km/hを超えて走行してはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "最高速度が標識等で指定されていれば、その指定に従います。40km/hで常に走る義務ではなく、状況に応じてさらに速度を落とします。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第22条（最高速度）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識",
      "速度"
    ],
    "type": "truefalse",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第22条第1項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C005",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "標識・標示",
    "topic": "一時停止標識",
    "question": "交通整理がなく、一時停止の標識と停止線がある交差点では、交差する車が見えなくても停止線の直前で一時停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "一時停止の標識による停止義務は、見通しや交差する車の有無に左右されません。停止線があればその直前で一時停止します。停止線がなければ交差点の直前で止まります。一時停止した後も、交差道路を通行する車両等の進行を妨げてはいけません。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第43条",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識",
      "一時停止"
    ],
    "type": "truefalse",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第43条",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C006",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "標識・標示",
    "topic": "車両進入禁止標識",
    "question": "車両進入禁止の標識がある入口では、その規制により歩行者も通行できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車両進入禁止の標識は、車両が禁止された方向へ進入することを禁止するものです。歩行者の通行を禁止するものではありません。歩行者等・車両・路面電車の通行をすべて禁止するのは「通行止め」の標識です。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "規制標識（車両進入禁止）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識",
      "進入禁止"
    ],
    "type": "truefalse",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C007",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "交差点・右左折",
    "topic": "左折の方法",
    "question": "通行方法の指定がない交差点を普通乗用車で左折するときは、あらかじめできる限り左側端に寄り、左側端に沿って徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "左折するときは、あらかじめその前からできる限り道路の左側端に寄り、できる限り道路の左側端に沿って徐行します。道路標識等で通る部分が指定されているときは、その部分を通ります。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第34条第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "交差点",
      "左折"
    ],
    "type": "truefalse",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第34条第1項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C008",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "交差点・右左折",
    "topic": "右折の方法",
    "question": "通行方法の指定がない交差点を普通乗用車で右折するときは、交差点の中心の外側を大きく回って徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "原則は交差点の中心のすぐ内側を徐行します。前もって道路の中央、一方通行なら右側端に寄ります。標識等で指定があるときはその指定に従います。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第34条第2項・第4項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "交差点",
      "右折"
    ],
    "type": "truefalse",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第34条第2項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C009",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "交差点・右左折",
    "topic": "交差点の優先関係（左方優先）",
    "question": "交通整理が行われていない交差点（環状交差点を除く）で、道幅がほぼ同じで優先道路もないときは、左方から進行してくる車両よりも、右方から進行してくる車両が優先する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この交差点では、左方から進行してくる車両の進行を妨げてはいけません。右方の車両が優先するのではありません。また、交差点に入るときや交差点内を通るときは、交差道路を通る車両等に特に注意し、できる限り安全な速度と方法で進みます。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第36条第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "交差点",
      "優先関係"
    ],
    "type": "truefalse",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第36条第1項第1号・第36条第4項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C010",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "交差点・右左折",
    "topic": "交差点の優先関係（広い道路優先）",
    "question": "自分の道路が優先道路でない、交通整理のない交差点では、明らかに広い交差道路の車の進行を妨げてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "優先道路を通行している場合を除き、明らかに広い交差道路の車を妨げてはいけません。安全確認に加えて徐行も必要です。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第36条第2項・第3項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "交差点",
      "優先関係"
    ],
    "type": "truefalse",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第36条第2項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C011",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "徐行・一時停止",
    "topic": "徐行すべき場所",
    "question": "左右の見通しがきかない交差点で、交通整理が行われておらず、自分が優先道路を通行していない場合は、徐行しなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "左右の見通しがきかない交差点では、徐行しなければなりません。ただし、信号機などで交通整理が行われている交差点や、優先道路を通っている場合は、徐行しなくてもかまいません。その場合も、安全の確認は必要です。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第42条",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "徐行"
    ],
    "type": "truefalse",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第42条第1号",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C012",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "徐行・一時停止",
    "topic": "踏切の一時停止",
    "question": "信号機のない踏切では、前の車に続いて通る場合、一時停止を省略できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "前の車に続いて通るときも、踏切の直前で止まり、安全を確かめなければなりません。停止線があるときは、その直前で止まります。一時停止しなくてよいのは、信号機のある踏切で、信号に従って通るときです。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第33条第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "一時停止",
      "踏切"
    ],
    "type": "truefalse",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第33条第1項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C013",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "徐行・一時停止",
    "topic": "横断歩道の歩行者優先",
    "question": "信号機のない横断歩道を渡ろうとする歩行者がいるときは、警音器で知らせて車が先に通ってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横断している歩行者や横断しようとしている歩行者がいるときは、横断歩道の直前で一時停止し、その通行を妨げてはいけません。また、警音器は、鳴らすよう決められた場所や、危険を防ぐためにやむを得ないとき以外は鳴らしてはいけません。歩行者に道を譲らせるために使うことはできません。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第38条第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "一時停止",
      "横断歩道"
    ],
    "type": "truefalse",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第38条第1項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C014",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "通行位置・車線",
    "topic": "車両通行帯の原則（3車線以上）",
    "question": "標識等による特別な通行区分の指定がない、片側3つの車両通行帯がある道路では、普通乗用車は最も右側を除く車両通行帯を速度に応じて通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "片側に3つ以上の車両通行帯がある道路では、自動車は速度に応じて、最も右側の通行帯以外の通行帯を通ることができます。標識等で通行区分が指定されているときは、その指定に従います。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第20条第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "車線",
      "通行区分"
    ],
    "type": "truefalse",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第20条第1項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C015",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "通行位置・車線",
    "topic": "進路変更禁止の道路標示",
    "question": "進路変更禁止の黄色の線がある車両通行帯でも、追越しのためならその線を越えて車線変更できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "追越しのためであっても、進路変更禁止の黄色の線を越えて進路を変えることはできません。この線を越えてよいのは、緊急自動車に進路を譲るために左や右に寄るとき、道路の損壊や工事などでその通行帯を通れないとき、そのために通れなかった通行帯へ戻るときに限られます。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第26条の2第3項／標示命令 規制標示102の2（進路変更禁止）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "車線",
      "進路変更"
    ],
    "type": "truefalse",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第26条の2第3項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C016",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "速度",
    "topic": "生活道路の法定速度（2026年9月改正）",
    "question": "中央線・車両通行帯がなく、往復の通行が分離されておらず、高速道路・自動車専用道路でもない一般道路では、速度指定がなければ普通乗用車の最高速度は30km/hである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "中央線や車両通行帯がなく、往復の方向別にも分離されていない一般道路では、自動車の最高速度は30km/hと定められています。中央線などがある一般道路や自動車専用道路は60km/hです。",
    "source": "警察庁ウェブサイト「生活道路における自動車の法定速度が引き下げられます！！」",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第11条",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "法改正",
      "2026年9月改正",
      "生活道路",
      "速度"
    ],
    "type": "truefalse",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法施行令 第11条第2号",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270_20260901_506CO0000000248",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C017",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "速度",
    "topic": "生活道路と標識優先の関係",
    "question": "中央線や車両通行帯がなく、往復の方向別に分離されてもいないため法定最高速度が30km/hとなる一般道路でも、普通乗用車に最高速度50km/hの標識が適用される区間では、30km/hが優先される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "標識等で最高速度が指定されている道路では、その指定された速度が最高速度になります。そのため、中央線などがなく本来は30km/hまでの一般道路でも、50km/hの標識がある区間の最高速度は50km/hです。ただし、危険な状況でもその速度を出してよいという意味ではありません。",
    "source": "警察庁ウェブサイト「生活道路における自動車の法定速度が引き下げられます！！」",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第22条第1項／道路交通法施行令 第11条",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "法改正",
      "2026年9月改正",
      "生活道路",
      "速度"
    ],
    "type": "truefalse",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第22条第1項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C018",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "歩行者・自転車",
    "topic": "横断歩道のない交差点における歩行者の優先",
    "question": "横断歩道がない交差点やその直近を歩行者が横断しているとき、車はその通行を妨げてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断歩道がない場所でも、交差点やそのすぐ近くを歩行者が横断しているときは、その歩行者の通行を妨げてはいけません。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "第38条の2",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "歩行者",
      "安全運転"
    ],
    "type": "truefalse",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第38条の2",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C019",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "歩行者・自転車",
    "topic": "自転車の右側を通過するとき（2026年4月施行の新ルール）",
    "question": "自動車が車道上を同じ方向に進む自転車の右側を通過する際（追越しを除く）、自転車が道路の左側端に寄った後も十分な間隔がとれないときは、間隔に応じた安全な速度で進行しなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "同じ方向に進む自転車の右側を、追い越さずに通り過ぎるときに十分な間隔がとれなければ、自動車は、その間隔に応じた安全な速度で進まなければなりません。自転車にもできる限り道路の左端に寄る義務がありますが、自転車が左に寄ったからといって、自動車が速度に気を付けなくてよくなるわけではありません。",
    "source": "警察庁ウェブサイト「自動車等が自転車等の側方を通過する場合の通行方法」",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第18条第3項（自転車側は同条第4項）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 3,
    "tags": [
      "法改正",
      "2026年4月施行",
      "自転車"
    ],
    "type": "truefalse",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第18条第3項",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105_20260721_508AC0000000052",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C020",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "安全運転",
    "topic": "悪天候時の運転",
    "question": "路面が滑りやすいときでも、晴れの日と同じ車間距離をとっていれば、前の車が急に止まったときに追突を避けられるかどうかを考えなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "前の車の直後を進むときは、前の車が急に停止しても追突を避けられるだけの必要な距離を保たなければなりません。決まった距離をとればよいのではないので、晴れの日と同じ距離で足りるとは限りません。また、道路や交通の状況に応じ、他人に危害を及ぼさないような速度と方法で運転しなければなりません。",
    "source": "交通の方法に関する教則",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "交通の方法に関する教則 第6章 第4節 1(2)（雨の日の運転）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "安全運転",
      "悪天候"
    ],
    "type": "truefalse",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第26条・第70条",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C021",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "通行位置・車線",
    "topic": "通行位置・車線",
    "question": "道路外の駐車場へ入るため普通乗用車で歩道を横切るとき、歩行者がいないことを確認できれば、一時停止せずに進んでよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路外の駐車場などに出入りするため歩道や路側帯を横切る場合は、歩行者が見えなくても、その直前で一時停止する。歩行者の通行も妨げない。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第17条第2項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "通行位置・車線"
    ],
    "type": "truefalse",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第17条第2項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C022",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "通行位置・車線",
    "topic": "通行位置・車線",
    "question": "歩道と車道が分かれている道路で車道が渋滞しているときは、歩行者に危険がないことを確認すれば、普通乗用車で歩道を通って渋滞を避けてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩道と車道が分かれている道路では、普通乗用車は車道を通ります。渋滞していても、安全を確かめても、渋滞を避けるために歩道を通ることはできません。歩道を通れるのは、道路の外にある駐車場などに出入りするために横切る場合などに限られます。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第17条第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "通行位置・車線"
    ],
    "type": "truefalse",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第17条第1項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C023",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "進路変更",
    "topic": "進路変更",
    "question": "進路変更によって後方の車に急なブレーキや急な方向変更をさせるおそれがあるときは、進路変更してはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "合図を出すだけで優先されるわけではありません。後方の車が速度や方向を急に変えるおそれがある変更は禁止です。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第26条の2第2項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "進路変更"
    ],
    "type": "truefalse",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第26条の2第2項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C024",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "進路変更",
    "topic": "進路変更",
    "question": "道路外の駐車場へ右折して入るとき、歩行者の正常な通行を妨げるおそれがあるなら、方向指示器で合図を出していても右折してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路外への出入りの右左折でも、歩行者などの正常な交通を妨害するおそれがあるときは行えない。合図でこの義務がなくなることはない。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第25条の2第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "進路変更"
    ],
    "type": "truefalse",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第25条の2第1項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C025",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "追越し",
    "topic": "追越し",
    "question": "右折のため道路の中央に寄っている前の車を追い越すときも、その車の右側を通る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "右折のため道路の中央等に寄っている前車を追い越す場合は、その左側を通る。周囲に注意し、安全な速度と方法で行う。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第28条第2項・第4項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "type": "truefalse",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第28条第2項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C026",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "追越し",
    "topic": "追越し",
    "question": "前の普通乗用車が別の自動車を追い越そうとしているときは、その前車を追い越し始めてはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "前の車がほかの自動車を追い越そうとしているときは、その前の車を追い越し始めてはいけません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第29条",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "type": "truefalse",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第29条",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C027",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "追越し",
    "topic": "追越し",
    "question": "車両通行帯のないトンネルでも、対向車が来ていなければ、前を走る普通乗用車を追い越してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車両通行帯のないトンネルは追越しが禁止されている場所なので、対向車がいなくても、前を走る普通乗用車を追い越してはいけない。車両通行帯のあるトンネルでも、道路標識などで追越しが禁止されていれば追い越せない。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第30条第2号",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "type": "truefalse",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第30条第2号",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C028",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "追越し",
    "topic": "追越し",
    "question": "横断歩道の手前20mでは、歩行者がいなくても、前を走る普通乗用車を追い越してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断歩道とその手前30m以内では、普通乗用車などの追越しが禁止される。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第30条第3号",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "type": "truefalse",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第30条第3号",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C029",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "踏切",
    "topic": "踏切",
    "question": "信号機のない踏切を通過するときは、一時停止するだけでなく、安全を確認してから進む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "踏切では停止と安全確認の両方が必要です。一時停止をしただけでは進めません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第33条第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "踏切"
    ],
    "type": "truefalse",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第33条第1項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C030",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "踏切",
    "topic": "踏切",
    "question": "踏切の遮断機がまだ上がっていても、警報機が鳴り始めたら、踏切に入ってはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "警報機が警報している間は踏切に入れない。遮断機が閉じ始める前でも同じ。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第33条第2項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "踏切"
    ],
    "type": "truefalse",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第33条第2項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C031",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "踏切",
    "topic": "踏切",
    "question": "踏切の先が渋滞していて踏切内に止まるおそれがあっても、前の車が進めば、そのまま続いて踏切に入ってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "前の車の状況によっては踏切の中で止まってしまうおそれがあるときは、前の車が進んでも、続いて踏切に入ってはいけない。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第33条第3項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "踏切"
    ],
    "type": "truefalse",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第50条第2項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C032",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "交差点・右左折",
    "topic": "交差点・右左折",
    "question": "交差点で右折するときは、対向する直進車の進行を妨げてはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点で右折するときは、その交差点を直進したり左折したりしようとする車があれば、その進行を妨げてはいけません。対向する直進車もこれに当たります。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第37条",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "交差点・右左折"
    ],
    "type": "truefalse",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第37条",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C033",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "歩行者・自転車",
    "topic": "歩行者・自転車",
    "question": "信号機のない横断歩道に近づくとき、横断する人がいないことが明らかでなくても、人が実際に見えるまでは停止できる速度に落とさなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横断する歩行者等がいないことが明らかな場合を除き、横断歩道等の直前で停止できる速度で進む。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第38条第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "歩行者・自転車"
    ],
    "type": "truefalse",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第38条第1項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C034",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "歩行者・自転車",
    "topic": "歩行者・自転車",
    "question": "信号機のない横断歩道の直前で停止している車の横を通って前に出るときは、徐行だけでよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横断歩道や自転車横断帯、またはその手前で止まっている車があり、その横を通ってその車の前に出るときは、徐行するだけでは足りず、前に出る前に一時停止しなければなりません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第38条第2項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "歩行者・自転車"
    ],
    "type": "truefalse",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第38条第2項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C035",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "緊急車両",
    "topic": "緊急車両",
    "question": "交差点付近で緊急自動車が近づいたときは、交差点を避けず、交差点内で左側に寄って一時停止するのが原則である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "原則は交差点を避けて道路の左側へ寄り、一時停止する。一方通行で左へ寄ると緊急自動車を妨げる場合は右側へ寄る。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第40条第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "緊急車両"
    ],
    "type": "truefalse",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第40条第1項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C036",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "緊急車両",
    "topic": "緊急車両",
    "question": "交差点付近以外では、緊急自動車が近づいても自分が先に進めるなら道を譲らなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "交差点付近以外でも、緊急自動車が近づいてきたら、自分が先に進めるかどうかに関係なく、道路の左側に寄って進路を譲らなければなりません（一方通行の道路で左に寄ると妨げになる場合は右側に寄ります）。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第40条第2項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "緊急車両"
    ],
    "type": "truefalse",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第40条第2項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C041",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "安全運転",
    "topic": "安全運転",
    "question": "少量でも酒気を帯びた状態では、普通乗用車を運転してはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "何人も、酒気を帯びて車両等を運転してはなりません。お酒の量が少なくても、酒気を帯びていれば運転してはいけません。呼気中のアルコール濃度の数値は、罰則の対象になるかどうかを分ける基準です。その数値より少なければ運転してよい、という意味ではありません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第65条第1項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "安全運転"
    ],
    "type": "truefalse",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第65条第1項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C042",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "安全運転",
    "topic": "安全運転",
    "question": "眠気や疲労で正常な運転ができないおそれがあるときは、目的地が近くても運転を続けてはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "過労などで正常な運転ができないおそれがある状態では運転してはいけない。距離の短さは例外の理由ではない。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第66条",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "安全運転"
    ],
    "type": "truefalse",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第66条",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C043",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "安全運転",
    "topic": "安全運転",
    "question": "普通乗用車で適用される最高速度を守っていれば、路面や見通しが悪くても、その速度で走り続けてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "最高速度以下でも、道路・交通・車両の状況に応じて、他人に危害を及ぼさない速度と方法で運転する必要がある。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第70条",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "安全運転"
    ],
    "type": "truefalse",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第70条",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C044",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "安全運転",
    "topic": "安全運転",
    "question": "走行中でも、スマートフォンを手に持ち短時間だけ通話するなら、緊急の必要がなくてもよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "停止中を除き、手で保持しなければ通話できない携帯電話を運転中に通話に使うことは、短時間でも禁止です。例外は、傷病者の救護や公共の安全の維持のため緊急やむを得ず行う通話に限られます。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条第5号の5",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "安全運転"
    ],
    "type": "truefalse",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第71条第5号の5",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C045",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "乗車・安全確認",
    "topic": "乗車・安全確認",
    "question": "免除される事情がなくても、一般道路を短い距離だけ走るなら、座席ベルトを着けていない人を普通乗用車の後部座席に乗せて運転してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "座席ベルトを備えなければならない後部座席に人を乗せて運転するときは、病気など定められた事情がない限り、座席ベルトを着けさせなければなりません。一般道路を走ることや、走る距離が短いことは、着けなくてよい理由になりません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条の3第2項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "乗車・安全確認"
    ],
    "type": "truefalse",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第71条の3第2項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C046",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "乗車・安全確認",
    "topic": "乗車・安全確認",
    "question": "車のドアを開けるときは、停止中なら後方から来る自転車などの安全を確認しなくてもよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "停止中であっても、安全を確認せずにドアを開けたり降りたりしてはいけません。同乗者が危険を生じさせないよう必要な措置をとることも必要です。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条第4号の3",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "乗車・安全確認"
    ],
    "type": "truefalse",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第71条第4号の3",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C048",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "警音器",
    "topic": "警音器",
    "question": "危険を避ける必要がなくても、前の車を急がせるために警音器を鳴らしてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "警音器は指定された場面や危険防止のためやむを得ない場合に使います。前の車を急がせる目的では使えません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第54条第2項",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 2,
    "tags": [
      "警音器"
    ],
    "type": "truefalse",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第54条第2項",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-C051",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "中央線が道路の幅の真ん中からずれて引かれている場合、普通乗用車は、中央線ではなく道路の幅の真ん中を基準にして、その左側を通行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "中央線が引かれている道路では、その中央線が道路の中央になります。中央線が道路の幅の真ん中からずれていても、中央線より左側の部分を通行します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第17条第4項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第17条第4項"
  },
  {
    "id": "D-C052",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "道路工事で道路の左側部分を通れない場合は、はみ出し方をできるだけ少なくして右側部分へはみ出せる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車は道路の中央から左の部分を通るのが原則ですが、道路工事などで左の部分を通れないときは、右の部分にはみ出して通行できます。このときは、はみ出し方をできるだけ少なくしなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第17条第5項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第17条第5項第3号"
  },
  {
    "id": "D-C053",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "一方通行の道路でも、道路の中央から右側の部分を通行することは一切できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "一方通行の道路では、道路の中央から右側の部分も通行できます。この場合は、はみ出し方を少なくする必要もありません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第17条第5項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第17条第5項第1号"
  },
  {
    "id": "D-C054",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "左側部分の幅が6m以上ある道路では、追越しだけを理由として道路の右側部分へはみ出すことはできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "追越しのために道路の右側部分へはみ出せるのは、左側部分の幅が6m未満の道路で、右側部分を見通すことができ、対向車の通行を妨げるおそれがなく、標識などで禁止されていない場合に限られます。左側部分の幅が6m以上あれば、追越しを理由にはみ出すことはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第17条第5項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第17条第5項第4号"
  },
  {
    "id": "D-C055",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "左側部分が6m未満でも、対向交通を妨げるおそれがあれば追越しのためにはみ出せない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "幅だけでなく、見通しや対向交通を妨げない条件も必要です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第17条第5項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第17条第5項第4号"
  },
  {
    "id": "D-C056",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "左側部分が6m未満なら、追越しのためのはみ出し禁止規制を無視できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "はみ出し禁止の規制がある場合は、その指定に従います。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第17条第5項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第17条第5項第4号"
  },
  {
    "id": "D-C057",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "道路の安全地帯に歩行者がいなければ、普通乗用車がその中を通過してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通乗用車は安全地帯に入ってはいけない。歩行者がいないことだけで通行できる場所にはならない。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第17条第6項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第17条第6項"
  },
  {
    "id": "D-C058",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "普通乗用車は、渋滞を避けるために自転車道を迂回路として通行してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "普通乗用車は自転車道を通行できません。認められているのは、道路外の施設や場所に出入りするためにやむを得ず自転車道を横断することだけです。渋滞を避けるために自転車道を走ることはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第17条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第17条第3項"
  },
  {
    "id": "D-C059",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "歩行者の保護",
    "question": "車両が歩行者の側方を通過するとき、安全な間隔を保てない場合は徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車両が歩行者の側方を通過するときは、安全な間隔を保つか、徐行する必要があります。安全な間隔を保てない場合は徐行します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第18条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第18条第2項"
  },
  {
    "id": "D-C060",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "車両通行帯のない道路で、普通乗用車は必ず左側端ぎりぎりを走る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車両通行帯のない道路では、普通乗用車などの自動車は道路の左側に寄って通行します。道路の左側端に寄って通行するのは、特定小型原動機付自転車や、自転車などの軽車両です。また、追越しをするときや、道路の状況などでやむを得ないときは、左側に寄らなくてもよいとされています。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第18条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第18条第1項"
  },
  {
    "id": "D-C061",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "車両通行帯",
    "question": "片側3車線の道路で、普通乗用車に適用される車両通行帯の通行区分が道路標識等で指定されていても、速度に応じて、その指定と異なる車両通行帯をふだんから通行してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路標識等で車両通行帯の通行区分が指定されているときは、その指定に従って通行しなければなりません。片側3車線以上の道路では、ふつうは速度に応じて最も右側以外の車両通行帯を選んで通行できます。しかし、通行区分が指定されている道路では、速度に応じて自由に選ぶことはできず、指定された車両通行帯を通行します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第20条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "車両通行帯",
    "difficulty": 2,
    "tags": [
      "車両通行帯"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第20条第2項"
  },
  {
    "id": "D-C062",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "車両通行帯",
    "question": "片側3車線の道路で特別な指定がなければ、普通乗用車は最も右側の車両通行帯を通常の走行車線として通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "片側3車線以上の道路で特別な指定がなければ、普通乗用車は速度に応じて、最も右側以外の車両通行帯を通行します。最も右側の車両通行帯は追越しをするときなどに通る車両通行帯で、ふだん走る車線として使うことはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第20条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "車両通行帯",
    "difficulty": 2,
    "tags": [
      "車両通行帯"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第20条第1項"
  },
  {
    "id": "D-C063",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "車両通行帯",
    "question": "車両通行帯のある道路で、前を直進する普通乗用車を追い越すときは、直近の右側ではなく、一つ飛ばした右側の通行帯を使うのが原則である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車両通行帯のある道路で追越しをするときは、いま通っている車両通行帯のすぐ右隣（直近の右側）の車両通行帯を通らなければなりません。一つ飛ばした車両通行帯を使って追い越すことはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第20条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "車両通行帯",
    "difficulty": 2,
    "tags": [
      "車両通行帯"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第20条第3項"
  },
  {
    "id": "D-C064",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "車両通行帯",
    "question": "車両通行帯のある道路で普通乗用車が追越しをするときは、直近の右側ではなく、一つ飛ばした右側の通行帯を使うのが原則である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車両通行帯のある道路で追越しをするときは、いま通っている車両通行帯のすぐ右隣（直近の右側）の車両通行帯を通らなければなりません。一つ飛ばした車両通行帯を使って追い越すことはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第20条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "車両通行帯",
    "difficulty": 2,
    "tags": [
      "車両通行帯"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第20条第3項"
  },
  {
    "id": "D-C065",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "普通乗用車は、左折のため路面電車の軌道敷を横切れる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車は原則として軌道敷内を通ってはいけません。ただし、左折・右折・横断・転回のために軌道敷を横切ることはできます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第21条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第21条第1項"
  },
  {
    "id": "D-C066",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "道路標識などで軌道敷内の通行が認められていない道路では、軌道敷外を通行できる普通乗用車は、渋滞を避けるという理由だけで路面電車の軌道敷内を走ってはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車は原則として軌道敷内を通ってはいけません。通れるのは、右左折・横断・転回のために横切るとき、危険を防ぐためやむを得ないとき、軌道敷を除いた部分の幅が足りないとき、道路工事などで軌道敷の外を通れないとき、標識などで通行が認められた自動車が通るときに限られます。渋滞を避けたいという理由は、このどれにも当たりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第21条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第21条第1項"
  },
  {
    "id": "D-C067",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "道路工事で軌道敷外の左側部分を通れない場合でも、普通乗用車が軌道敷内を通行することは一切できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路工事などの障害のため、道路の左側部分のうち軌道敷を除いた部分を通れないときは、軌道敷内を通行できます。このときも、路面電車の通行を妨げてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第21条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第21条第2項第2号"
  },
  {
    "id": "D-C068",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "軌道敷内を適法に通行しているときでも、後方から路面電車が近づいたら、運行を妨げないよう速やかに軌道敷外へ出るか、必要な距離を保つ。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "軌道敷内を通行してよい場合でも、後ろから路面電車が近づいてきたら、路面電車の運行の妨げにならないよう、すぐに軌道敷の外に出るか、路面電車との間に必要な距離をとらなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第21条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第21条第3項"
  },
  {
    "id": "D-C069",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "速度",
    "question": "普通乗用車が追越しをする間も、適用される最高速度を守る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "追越しは最高速度を超えてよい理由にはなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第22条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "速度",
    "difficulty": 2,
    "tags": [
      "速度"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第22条第1項"
  },
  {
    "id": "D-C070",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "速度",
    "question": "後ろの車に急かされたときは、道路標識等で指定された最高速度を超えて走ってもよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後ろの車に急かされても、指定された最高速度（指定がない道路では政令で定める最高速度）を超えて走ってはいけません。急かされたからといって、最高速度を超えてよいことにはなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第22条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "速度",
    "difficulty": 2,
    "tags": [
      "速度"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第22条第1項"
  },
  {
    "id": "D-C071",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "速度",
    "question": "一般道路の最低速度指定があっても、危険防止でやむを得ないときは下回れる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "最低速度が指定された道路（高速自動車国道の本線車道を除く）でも、法令の規定により速度を減ずる場合と、危険を防止するためやむを得ない場合は、最低速度を下回って進行できます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第23条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "速度",
    "difficulty": 2,
    "tags": [
      "速度"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第23条"
  },
  {
    "id": "D-C072",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "速度",
    "question": "一般道路に最低速度の指定があっても、危険防止のためやむを得ない場合には、その速度を下回れる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "最低速度が指定された道路（高速自動車国道の本線車道を除く）でも、法令の規定により速度を落とす場合や、危険を防止するためやむを得ない場合には、最低速度を下回って進行できます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第23条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "速度",
    "difficulty": 2,
    "tags": [
      "速度"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第23条"
  },
  {
    "id": "D-C073",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "ブレーキ",
    "question": "歩行者との衝突を防ぐためやむを得ないときは、急ブレーキをかけられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "急ブレーキは原則として禁止されています。ただし、歩行者との衝突を避けるなど、危険を防止するためやむを得ない場合は、急ブレーキをかけることができます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第24条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "ブレーキ",
    "difficulty": 2,
    "tags": [
      "ブレーキ"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第24条"
  },
  {
    "id": "D-C074",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "ブレーキ",
    "question": "後続車へ注意を促す目的だけで、危険防止のためやむを得ない事情がないのに急ブレーキをかけてはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "急ブレーキをかけてよいのは、危険を防止するためやむを得ない場合だけです。後ろの車に注意を促すためだけに急ブレーキをかけてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第24条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "ブレーキ",
    "difficulty": 2,
    "tags": [
      "ブレーキ"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第24条"
  },
  {
    "id": "D-C075",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "道路外への出入り",
    "question": "店舗へ左折して入るときも、あらかじめできる限り道路の左側端に寄り、徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "店舗の駐車場など道路の外へ左折して出るときは、手前からできる限り道路の左端に寄り、徐行しなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第25条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "道路外への出入り",
    "difficulty": 2,
    "tags": [
      "道路外への出入り"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第25条第1項"
  },
  {
    "id": "D-C076",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "道路外への出入り",
    "question": "一方通行の道路から普通乗用車で右折して店へ入るときは、あらかじめできる限り右側端へ寄り、徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路の外へ右折して出るときは、手前からできる限り道路の中央に寄り、徐行します。一方通行の道路では、中央ではなく道路の右端に寄ります。なお、歩行者や他の車などの通行を妨げるおそれがあるときは、店などに出入りするための右折をしてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第25条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "道路外への出入り",
    "difficulty": 2,
    "tags": [
      "道路外への出入り"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第25条第2項"
  },
  {
    "id": "D-C077",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "道路外への出入り",
    "question": "前車が道路外の駐車場へ入るため合図して左側端へ寄るときは、その移動を妨げないため、後車は急ブレーキが必要でも必ず道を譲る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路外に出るため合図をして左側端へ寄る前車の進路変更を、後車は原則として妨げてはならない。ただし、後車が速度や方向を急に変更しなければならない場合は例外であり、急ブレーキをかけてまで必ず譲る義務はないので×。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第25条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "道路外への出入り",
    "difficulty": 2,
    "tags": [
      "道路外への出入り"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第25条第3項"
  },
  {
    "id": "D-C078",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "転回・後退",
    "question": "転回によって歩行者の正常な通行を妨げることになっても、歩行者と接触するおそれがなければ、その転回を始めてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩行者や他の車などの通行を妨げるおそれがあるときは、転回してはいけません。歩行者とぶつかるおそれがないというだけでは、転回してよいことにはなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第25条の2第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "転回・後退",
    "difficulty": 2,
    "tags": [
      "転回・後退"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第25条の2第1項"
  },
  {
    "id": "D-C079",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "転回・後退",
    "question": "転回禁止が指定された道路でも、周囲に歩行者や他の車がいなければ転回してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路標識等で転回が禁止されている場所では、周りに歩行者や他の車がいなくても転回してはいけません。周りの交通の状況にかかわらず、禁止は守らなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第25条の2第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "転回・後退",
    "difficulty": 2,
    "tags": [
      "転回・後退"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第25条の2第2項"
  },
  {
    "id": "D-C080",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "転回・後退",
    "question": "駐車場から後退して道路に出るとき、歩行者に避けてもらえれば、その正常な通行を妨げても後退してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後退でも、歩行者などの正常な交通を妨害するおそれがあるときは行えません。歩行者に避けてもらうことを前提に後退するのではなく、通行を妨げない状況で行います。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第25条の2第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "転回・後退",
    "difficulty": 2,
    "tags": [
      "転回・後退"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第25条の2第1項"
  },
  {
    "id": "D-C081",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "車間距離",
    "question": "前車の直後では、前車が急停止しても追突を避けられる距離を保つ。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "同じ進路を進む車のすぐ後ろを走るときは、前の車が急に止まっても追突を避けられるだけの距離を保たなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第26条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "車間距離",
    "difficulty": 2,
    "tags": [
      "車間距離"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第26条"
  },
  {
    "id": "D-C082",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "車間距離",
    "question": "前車が大型車なら急停止できないので、車間距離を短くしてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "同じ進路を進む車のすぐ後ろを走るときは、前の車が急に止まっても追突を避けられるだけの距離を保たなければなりません。前の車が大型車でも同じです。大型車だから急に止まれないと考えて、車間距離を短くしてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第26条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "車間距離",
    "difficulty": 2,
    "tags": [
      "車間距離"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第26条"
  },
  {
    "id": "D-C083",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "進路変更",
    "question": "理由なく車線を頻繁に変えることは、みだりな進路変更に当たる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "必要もないのにむやみに進路を変えることは禁止されています。理由もなく車線を何度も変えることは、これに当たります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第26条の2第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "進路変更",
    "difficulty": 2,
    "tags": [
      "進路変更"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第26条の2第1項"
  },
  {
    "id": "D-C084",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "進路変更",
    "question": "進路変更禁止の道路標示で区画された車両通行帯を通行していても、道路工事のためその車両通行帯を通行できないときは、その標示をこえて進路を変更することができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "進路変更禁止の道路標示で区切られた車両通行帯を走っていても、道路の損壊や道路工事などでその車両通行帯を通れないときは、標示をこえて進路を変えることができます。ただし、進路を変えると、変更先を後ろから来る車の速度や方向を急に変えさせるおそれがあるときは、進路を変えてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第26条の2第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "進路変更",
    "difficulty": 2,
    "tags": [
      "進路変更"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第26条の2第3項第1号"
  },
  {
    "id": "D-C085",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追い越されるとき",
    "question": "後車より遅い速度で進み続ける普通乗用車は、後車が追越しを始めたら、並んで走る時間を短くするために加速してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後ろの車に追いつかれ、その車より遅い速度で進み続けるときは、後ろの車が追越しを終えるまで速度を上げてはいけません。並んで走る時間を短くするためでも、加速はできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第27条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追い越されるとき",
    "difficulty": 2,
    "tags": [
      "追い越されるとき"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第27条第1項"
  },
  {
    "id": "D-C086",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追い越されるとき",
    "question": "車両通行帯のない道路で、普通乗用車が、後車より遅い速度で引き続き進もうとしてその後車に追いつかれた。自車と道路中央の間に後車が通行する十分な余地がなくても、できる限り左側端へ寄って進路を譲る必要はない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車両通行帯のない道路で後ろの車に追いつかれ、その車より遅い速度で進み続けるときに、道路の中央との間に後ろの車が通れる十分な余地がなければ、できる限り道路の左側端に寄って進路を譲らなければなりません。普通乗用車も同じです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第27条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追い越されるとき",
    "difficulty": 2,
    "tags": [
      "追い越されるとき"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第27条第2項"
  },
  {
    "id": "D-C087",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し",
    "question": "車を追い越すときは、原則として前の車の右側を通る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車を追い越すときは、前の車の右側を通るのが原則です。ただし、前の車が右折するために道路の中央や右側端に寄って走っているときは、その左側を通ります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第28条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追越し",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第28条第1項"
  },
  {
    "id": "D-C088",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し",
    "question": "軌道が道路の左側端に寄っていなくても、路面電車の追越しは必ず右側を通る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "路面電車を追い越すときは、原則として左側を通ります。左側を通らなくてよいのは、軌道が道路の左側端に寄って設けられている場合だけです。軌道が左側端に寄っていないときは、左側を通ります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第28条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追越し",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第28条第3項"
  },
  {
    "id": "D-C089",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し",
    "question": "追越し前には、対向車だけでなく後方交通や前車の前方にも注意する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "追越しをするときは、反対の方向や後方からの交通、前の車の前方の交通にも十分に注意しなければなりません。そのうえで、前の車の速度・進路や道路の状況に応じて、できる限り安全な速度と方法で進みます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第28条第4項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追越し",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第28条第4項"
  },
  {
    "id": "D-C090",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し",
    "question": "追越しのとき、対向車が来ないことを確認できれば、前の車の進路や後方からの交通は確認しなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "追越しでは、対向交通だけでなく、後方交通や前車の前方にも十分注意し、前車の速度・進路や道路状況に応じて安全な速度と方法で進む必要があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第28条第4項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追越し",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第28条第4項"
  },
  {
    "id": "D-C091",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し禁止",
    "question": "道路の曲がり角付近では、前の普通乗用車を追い越してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路の曲がり角付近は、標識がなくても追越しが禁止されている場所です。普通乗用車を追い越すことはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第30条第1号"
  },
  {
    "id": "D-C092",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し禁止",
    "question": "上り坂の頂上付近では、対向車が見えなくても、前を走る普通乗用車を追い越してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "上り坂の頂上付近は、標識がなくても追越しが禁止されている場所です。対向車が見えなくても、普通乗用車を追い越すことはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第30条第1号"
  },
  {
    "id": "D-C093",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し禁止",
    "question": "勾配の急な下り坂でも、前の普通乗用車が遅ければ、安全を確認して追い越してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "勾配の急な下り坂は、標識がなくても追越しが禁止されている場所です。前の車が遅くても、安全を確認しても、普通乗用車を追い越すことはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第30条第1号"
  },
  {
    "id": "D-C094",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し禁止",
    "question": "踏切の手前25mなら、直前ではないので普通乗用車を追い越せる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "踏切と、その手前30m以内の部分は、追越しが禁止されています。手前25mはこの範囲に入るので、踏切の直前でなくても追い越すことはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第30条第3号"
  },
  {
    "id": "D-C095",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し禁止",
    "question": "自転車横断帯の手前30m以内で、普通乗用車を追い越してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "自転車横断帯と、その手前30m以内の部分は、追越しが禁止されています。この範囲では、普通乗用車を追い越すことはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第30条第3号"
  },
  {
    "id": "D-C096",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し禁止",
    "question": "優先道路を通行していないとき、交差点の手前10mでは、普通乗用車を追い越してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点と、その手前30m以内の部分は、追越しが禁止されています。手前10mはこの範囲に入ります。ただし、優先道路を通行しているときは、その優先道路にある交差点では、この禁止は当てはまりません。設問は優先道路を通行していない場合なので、追い越すことはできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第30条第3号"
  },
  {
    "id": "D-C097",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "安全地帯がなく、乗客が乗降中の路面電車に追いついたときは、左側に1.5m以上の間隔があれば、徐行して左側を通過してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "安全地帯がないときに、路面電車の左側に1.5m以上の間隔を保って徐行で通過できるのは、乗り降りする人がいない場合だけです。乗客が乗り降りしているときは、路面電車の後方で止まらなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第31条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第31条"
  },
  {
    "id": "D-C098",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "乗客の乗降のため停車中の路面電車に安全地帯があるときは、徐行してその左側を通過することができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "乗客の乗り降りのために止まっている路面電車に追いついたときは、原則として後方で止まらなければなりません。ただし、安全地帯があるときは、徐行して路面電車の左側を通過できます。乗り降りする人がいなくて、路面電車の左側に1.5m以上の間隔を保てるときも同じです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第31条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第31条"
  },
  {
    "id": "D-C099",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "停車中の路面電車に乗降する人がなく、左側に1.5m以上の間隔を保てれば、徐行して左側を通過できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "原則は路面電車の後方で停止します。ただし、乗降する人がおらず、左側に1.5m以上の間隔を保てるときは、徐行して左側を通過できます（安全地帯があるときも徐行して通過できます）。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第31条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第31条"
  },
  {
    "id": "D-C100",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "バス",
    "question": "停留所から発進する路線バスが進路変更の合図をしたとき、後車は、速度や方向を急に変えなければならない場合を除き、その変更を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "停留所で乗客の乗り降りのために止まっていた路線バスが、発進するために手や方向指示器で合図をしたときは、後ろの車は、速度や方向を急に変えなければならない場合を除き、バスの進路変更を妨げてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第31条の2第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "バス",
    "difficulty": 2,
    "tags": [
      "バス"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第31条の2"
  },
  {
    "id": "D-C101",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "割込み",
    "question": "赤信号で止まろうとして徐行する車列の横を通り、先頭へ割り込んではならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "赤信号で止まるのは、法令の決まりによる停止です。法令に従って止まっている車や、止まろうとして徐行している車、それに続いて止まったり徐行したりしている車に追いついたときは、その横を通って前に割り込んではいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第32条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "割込み",
    "difficulty": 2,
    "tags": [
      "割込み"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第32条"
  },
  {
    "id": "D-C102",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "割込み",
    "question": "危険を防ぐため停止している車に追いついたときは、その横を通って前に割り込んではいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "危険を防ぐために止まっている車や、止まろうとして徐行している車に追いついたときは、その横を通って前に割り込んではいけません。また、その車の前を横切ることも禁止されています。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第32条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "割込み",
    "difficulty": 2,
    "tags": [
      "割込み"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第32条"
  },
  {
    "id": "D-C103",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "踏切",
    "question": "停止線がある信号機のない踏切では、停止線の直前よりも踏切に近いところまで進んでから止まるのが正しい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "停止線がある踏切では、停止線の直前で一時停止し、安全を確かめてから進みます。停止線を越えて踏切に近づいてから止まるのは誤りです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第33条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "踏切",
    "difficulty": 2,
    "tags": [
      "踏切"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第33条第1項"
  },
  {
    "id": "D-C104",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "踏切",
    "question": "踏切内で故障して動けなくなったときは、直ちに非常信号を行うなどして、踏切に止まっている車があることを鉄道の係員や警察官に知らせる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "踏切で車が故障などで動けなくなったときは、直ちに非常信号を行うなどして、踏切に止まっている車があることを鉄道の係員や警察官に知らせます。あわせて、車を踏切の外へ移すために必要なことも行います。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第33条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "踏切",
    "difficulty": 2,
    "tags": [
      "踏切"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第33条第3項"
  },
  {
    "id": "D-C105",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "右左折",
    "question": "一方通行の道路で普通乗用車が右折するときは、道路標識等による通行区分の指定がなければ、あらかじめできる限り道路の右側端に寄る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "一方通行の道路で右折するときは、道路の中央ではなく、あらかじめできる限り道路の右端に寄り、交差点の中心の内側を徐行します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第34条第4項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "右左折",
    "difficulty": 2,
    "tags": [
      "右左折"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第34条第4項"
  },
  {
    "id": "D-C106",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "右左折",
    "question": "一方通行の道路で右折するときは、普通乗用車は徐行しないで曲がってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "一方通行の道路で右折するときは、前もってできるだけ道路の右端に寄り、交差点の中心の内側を徐行しなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第34条第4項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "右左折",
    "difficulty": 2,
    "tags": [
      "右左折"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第34条第4項"
  },
  {
    "id": "D-C107",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "右左折",
    "question": "前の車が左折の合図をして道路の左端に寄ろうとしているとき、後ろの車は、自分が急に速度や方向を変えなければならなくなる場合でも、その進路の変更を妨げてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "左折や右折のために合図をして、道路の端や中央に寄ろうとしている前の車がいるときは、後ろの車はその進路の変更を妨げてはいけません。ただし、そのために後ろの車が急に速度や方向を変えなければならなくなる場合は除かれます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第34条第6項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "右左折",
    "difficulty": 2,
    "tags": [
      "右左折"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第34条第6項"
  },
  {
    "id": "D-C108",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "進行方向別通行",
    "question": "普通乗用車は、直進専用の通行帯からも合図だけで右折できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車両通行帯のある道路で、交差点で進む方向ごとに通る通行帯が標識や標示で決められているときは、その区分に従って通行帯を通らなければなりません。例外は、緊急自動車に道を譲るときや、道路の損壊・道路工事などでやむを得ないときだけです。合図をしただけでは、直進専用の通行帯から右折できません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第35条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "進行方向別通行",
    "difficulty": 2,
    "tags": [
      "進行方向別通行"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第35条第1項"
  },
  {
    "id": "D-C109",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "進行方向別通行",
    "question": "進行方向別の車両通行帯の指定は、道路工事で指定の通行帯を通れずやむを得ない場合でも、例外なく守らなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "交差点で進む方向ごとに通る通行帯が決められていても、道路の損壊や道路工事などのためにやむを得ないときは、決められた通行帯を通らなくてもかまいません。緊急自動車に道を譲るときも同じです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第35条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "進行方向別通行",
    "difficulty": 2,
    "tags": [
      "進行方向別通行"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第35条第1項"
  },
  {
    "id": "D-C110",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "交差点",
    "question": "標識で優先道路に指定されていない道路は、中央線が交差点の手前まであるだけでは、優先道路にはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "優先道路とは、標識などで優先道路に指定されている道路と、交差点の中まで中央線や車両通行帯が引かれている道路のことです。中央線が交差点の手前で途切れている道路は、優先道路に当たりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第36条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "交差点",
    "difficulty": 2,
    "tags": [
      "交差点"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第36条第2項"
  },
  {
    "id": "D-C111",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "交差点",
    "question": "自車側が優先道路ではなく、交通整理もない交差点で、交差道路が優先道路なら進入時に徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差する道路が優先道路のときは、その道路を通る車などの進行を妨げてはいけません。また、交差点に入ろうとするときは徐行しなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第36条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "交差点",
    "difficulty": 2,
    "tags": [
      "交差点"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第36条第3項"
  },
  {
    "id": "D-C112",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "交差点",
    "question": "交差点に入る直前に左右の安全を確認したので、交差点内では横断歩行者への注意を続けなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "交差点に入ろうとするときだけでなく、交差点内を通行するときも、交差道路の車両、反対方向から来て右折する車両、交差点やその近くを横断する歩行者に特に注意し、できる限り安全な速度と方法で進む必要があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第36条第4項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "交差点",
    "difficulty": 2,
    "tags": [
      "交差点"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第36条第4項"
  },
  {
    "id": "D-C113",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "自転車横断帯",
    "question": "信号のない自転車横断帯を渡ろうとする自転車がいるとき、車は直前で一時停止して通行を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "自転車横断帯を渡ろうとしている自転車がいるときは、横断歩道の歩行者のときと同じく、その直前（停止線があるときは停止線の直前）で一時停止し、通行を妨げてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第38条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "自転車横断帯",
    "difficulty": 2,
    "tags": [
      "自転車横断帯"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第38条第1項"
  },
  {
    "id": "D-C114",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "横断歩道",
    "question": "信号のない横断歩道の手前15mでは、前を進行している普通乗用車の横を通って前へ出る行為は、車線を変えなくても禁止される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断歩道や自転車横断帯と、その手前30m以内では、追越しが禁止されているだけでなく、前を進んでいる車の横を通ってその前に出ることも禁止されています。隣の車線を走っていて、車線を変えずに前に出る場合も同じです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第38条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "横断歩道",
    "difficulty": 2,
    "tags": [
      "横断歩道"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第38条第3項"
  },
  {
    "id": "D-C115",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "緊急自動車",
    "question": "一方通行の道路の交差点付近で緊急自動車が近づいてきたときは、左側に寄るとかえって緊急自動車の通行を妨げる場合でも、必ず道路の左側に寄って一時停止しなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "交差点やその付近で緊急自動車が近づいてきたときは、交差点を避けて道路の左側に寄り、一時停止します。ただし、一方通行の道路で左側に寄るとかえって緊急自動車の通行を妨げるときは、道路の右側に寄って一時停止します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第40条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "緊急自動車",
    "difficulty": 2,
    "tags": [
      "緊急自動車"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第40条第1項"
  },
  {
    "id": "D-C116",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "緊急自動車",
    "question": "緊急自動車は、赤信号で止まらずに進むときでも、他の交通に注意して徐行しなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "緊急自動車は、赤信号など法令で止まらなければならない場面でも、止まらずに進むことができます。ただし、そのときは他の交通に注意して徐行しなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第39条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "緊急自動車",
    "difficulty": 2,
    "tags": [
      "緊急自動車"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第39条第2項"
  },
  {
    "id": "D-C117",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "徐行",
    "question": "徐行の指定がある道路の区間でも、見通しがよく他の車がいなければ、徐行しなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "標識や標示で徐行するよう指定されている区間では、見通しがよくても、ほかの車がいなくても、徐行しなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第42条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "徐行",
    "difficulty": 2,
    "tags": [
      "徐行"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第42条"
  },
  {
    "id": "D-C118",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "徐行",
    "question": "見通しのよい道路の曲がり角付近では、徐行しなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路の曲がり角付近は、見通しがよくても徐行しなければならない場所です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第42条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "徐行",
    "difficulty": 2,
    "tags": [
      "徐行"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第42条第2号"
  },
  {
    "id": "D-C119",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "徐行",
    "question": "上り坂の頂上付近でも、見通しがよければ徐行する必要はない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "上り坂の頂上付近は、見通しがよくても徐行しなければならない場所です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第42条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "徐行",
    "difficulty": 2,
    "tags": [
      "徐行"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第42条第2号"
  },
  {
    "id": "D-C120",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "一時停止",
    "question": "交通整理のない交差点に一時停止の標識があり、停止線がないときは、交差点の直前で一時停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交通整理が行われていない交差点で一時停止の標識があるときは、停止線があればその直前、なければ交差点の直前で一時停止します。そのうえで、交差する道路を通る車などの進行を妨げてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第43条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "一時停止",
    "difficulty": 2,
    "tags": [
      "一時停止"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第43条"
  },
  {
    "id": "D-C121",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "一時停止",
    "question": "一時停止の標識に従って止まった後も、交差道路を通行する車の進行を妨げてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "一時停止の標識に従って停止した後も、交差道路を通行する車や路面電車の進行を妨げてはいけません。一時停止したからといって、先に進めるようになるわけではありません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第43条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "一時停止",
    "difficulty": 2,
    "tags": [
      "一時停止"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第43条後段"
  },
  {
    "id": "D-C136",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "渋滞",
    "question": "青信号なら、交差点内に取り残されて交差交通をふさぐおそれがあっても進入できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "前の車の状況から、交差点に入ると中で止まってしまい、交差する道路の通行を妨げるおそれがあるときは、青信号でも交差点に入ってはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第50条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "渋滞",
    "difficulty": 2,
    "tags": [
      "渋滞"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第50条第1項"
  },
  {
    "id": "D-C137",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "渋滞",
    "question": "渋滞で横断歩道上に止まるおそれがあるときは、横断歩道に入らない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断歩道等の上に取り残されるおそれがあるときは進入禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第50条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "渋滞",
    "difficulty": 2,
    "tags": [
      "渋滞"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "ref": "道路交通法 第50条第2項"
  },
  {
    "id": "D-C141",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図",
    "question": "右折の合図は、曲がり始める直前まで続ければよく、右折を始めたら消してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "右左折等の合図は、その行為が終わるまで継続する。行為が終わったときはやめる。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第53条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "合図",
    "difficulty": 2,
    "tags": [
      "合図"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第53条第1項"
  },
  {
    "id": "D-C142",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図",
    "question": "右折を取りやめて直進するときも、後続車が合図を見た後なら、右折の方向指示器をつけたまま直進してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "合図をした行為をしないのに、その合図をしてはいけません。右折を取りやめて直進するときは、後続車が合図を見た後であっても、右折の合図をつけたまま直進してはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第53条第4項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "合図",
    "difficulty": 2,
    "tags": [
      "合図"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第53条第4項"
  },
  {
    "id": "D-C143",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図",
    "question": "進路変更を終えたら、その合図をやめる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "進路変更などの合図は、その行為が終わるまで続けます。行為が終わったら、合図をやめなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第53条第4項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "合図",
    "difficulty": 2,
    "tags": [
      "合図"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第53条第4項"
  },
  {
    "id": "D-C144",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図",
    "question": "普通乗用車で後退するときも、法令で定められた方法により合図をする必要がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "後退は合図が必要な行為に含まれる。方向指示器だけが合図ではなく、政令に定める後退灯等の方法もある。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第53条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "合図",
    "difficulty": 2,
    "tags": [
      "合図"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第53条第1項"
  },
  {
    "id": "D-C145",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "警音器",
    "question": "警音器を鳴らすよう指定された見通しの悪い曲がり角でも、他の車が見えなければ警音器を省略できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路標識等で指定された見通しのきかない曲がり角などを通るときは、他の車が見えなくても警音器を鳴らさなければなりません。他の車が見えないからといって、鳴らさなくてよいことにはなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第54条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "警音器",
    "difficulty": 2,
    "tags": [
      "警音器"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第54条第1項第1号"
  },
  {
    "id": "D-C146",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "警音器",
    "question": "友人へのあいさつは、法律で認められた警音器の使用理由である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "警音器は、法令で鳴らすよう定められた場合と、危険を防止するためやむを得ない場合を除き、鳴らしてはいけません。あいさつはどちらにも当たりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第54条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "警音器",
    "difficulty": 2,
    "tags": [
      "警音器"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第54条第2項"
  },
  {
    "id": "D-C151",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "普通乗用車で黄色の点滅信号に対面したときは、赤色の点滅と同じく、停止位置で必ず一時停止してから進む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "黄色の点滅は他の交通に注意して進行できる信号。一時停止が義務付けられる赤色点滅の意味と区別する。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項"
  },
  {
    "id": "D-C152",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "黄色の矢印信号は路面電車に対するものであり、普通乗用車はその矢印だけを根拠に右折できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "黄色の矢印は路面電車の進行を認める信号。車両に対する青色矢印との違いを確認する。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項"
  },
  {
    "id": "D-C153",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "交差点ですでに左折している普通乗用車は、信号が赤に変わったら、交差点内でそのまま停止しなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "交差点ですでに左折している車は、信号が赤に変わってもそのまま進むことができます。赤信号で止まらなければならないのは、まだ停止位置を越えていない車です。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項"
  },
  {
    "id": "D-C154",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "交差点ですでに右折中に信号が赤へ変わった普通乗用車は、そのまま進行できるが、新たに青信号で進む車の進行を妨げてはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点ですでに右折している普通乗用車は、信号が赤に変わってもそのまま進むことができます。ただし、青信号に従って進んでくる車の進行を妨げてはいけません。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項"
  },
  {
    "id": "D-C155",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "歩行者用信号が青色点滅でも、歩行者は急いで渡り切れると判断すれば、新たに横断を始めてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩行者用信号の青色点滅では、新たな横断を始めてはいけない。横断中の人は速やかに終えるか引き返す。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項"
  },
  {
    "id": "D-C156",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "青色の矢印が左を向いているとき、普通乗用車はその矢印だけを根拠に直進できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "青色の矢印は、矢印の方向に進行できる信号です。左の矢印だけでは直進できません。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項"
  },
  {
    "id": "D-C157",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "交差点以外にある信号で停止線・横断歩道等・踏切がない場合、停止位置は信号機を通り過ぎた直後である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この条件での停止位置は信号機の直前。停止線がある場合や横断歩道等がある場合と区別する。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項"
  },
  {
    "id": "D-C158",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "信号が赤で停止線があるときは、停止線を越えて横断歩道のすぐ手前まで進んで止まってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "停止線がある場合は、その停止線の直前で停止します。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項"
  },
  {
    "id": "D-C159",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "公安委員会が設置した左折可の表示がある交差点では、赤信号でもその表示に従って左折できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "左折できることが表示されている交差点では、黄色や赤色の信号で本来は停止位置を越えて進めない車も、左折することができます。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第2条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第2項"
  },
  {
    "id": "D-C160",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "公安委員会がバス専用であることを所定の方法で表示した信号は、普通乗用車に対して意味を表示するものではない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "特定の交通だけに向けた信号であることが表示されている信号は、その交通だけに対する信号です。バス専用の信号は、普通乗用車に向けた信号ではありません。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第2条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第3項"
  },
  {
    "id": "D-C161",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図の時期",
    "question": "交差点で左折するときの合図は、交差点の手前の端から30m手前に達したときに出す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "左折の合図は、交差点の手前の端から30m手前に達したときに出します。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第21条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "合図の時期",
    "difficulty": 2,
    "tags": [
      "合図の時期"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法施行令 第21条第1項"
  },
  {
    "id": "D-C162",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図の時期",
    "question": "車線を変える合図は、変更しようとする地点の30m手前に達したときに出す決まりである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "進路を変える合図は、進路を変えようとする時の3秒前に出します。右左折や転回の合図（30m手前）と混同しないようにしましょう。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第21条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "合図の時期",
    "difficulty": 2,
    "tags": [
      "合図の時期"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法施行令 第21条第1項"
  },
  {
    "id": "D-C163",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図の時期",
    "question": "同じ方向へ進みながら右へ車線を変えるときの合図は、変更を始める30m手前で出す決まりである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "同じ方向に進みながら右へ進路を変えるときの合図は、進路を変えようとする時の3秒前に出します。30m手前で合図を出すのは、右折や転回をするときです。この30mは、右折や転回をしようとする地点から数えます。交差点で右折するときは、交差点の手前の端から数えます。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第21条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "合図の時期",
    "difficulty": 2,
    "tags": [
      "合図の時期"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法施行令 第21条第1項"
  },
  {
    "id": "D-C164",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図の方法",
    "question": "普通乗用車で転回する合図は、左側の方向指示器を操作するのが決まりである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "方向指示器で転回の合図をするときは、右側を操作します。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法施行令 第21条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "合図の方法",
    "difficulty": 2,
    "tags": [
      "合図の方法"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法施行令 第21条第1項"
  },
  {
    "id": "D-C165",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "用語",
    "question": "徐行とは、車が直ちに停止できるような速度で進むことである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "徐行とは、車がすぐに止まることができるような速度で進むことです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "用語",
    "difficulty": 2,
    "tags": [
      "用語"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第2条第1項第20号"
  },
  {
    "id": "D-C166",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "用語",
    "question": "徐行は、道路の状況に関係なく必ず時速10kmで走ることである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "徐行とは、すぐに止まることができるような速度で進むことです。時速10kmのように決まった速度があるわけではありません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "用語",
    "difficulty": 2,
    "tags": [
      "用語"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第2条第1項第20号"
  },
  {
    "id": "D-C169",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "用語",
    "question": "前の車に追い付いたとき、進路を変えずにその横を通って前に出ることは、追越しに当たる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "追越しとは、進路を変えて、追い付いた車の横を通り、その前に出ることです。進路を変えずに横を通って前に出ることは、追越しに当たりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第2条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "用語",
    "difficulty": 2,
    "tags": [
      "用語"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第2条第1項第21号"
  },
  {
    "id": "D-C170",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "用語",
    "question": "側車が付いておらず、ほかの車を引いてもいない二輪の自転車を押して歩いている人は、歩行者として扱われない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "二輪や三輪の自転車を押して歩いている人は、歩行者として扱われます。ただし、側車が付いている自転車や、ほかの車を引いている自転車を押している場合は除かれます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第2条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "用語",
    "difficulty": 2,
    "tags": [
      "用語"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第2条第3項第2号"
  },
  {
    "id": "D-C171",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "免許",
    "question": "道路交通法でいう運転免許の区分は第一種と第二種だけで、仮運転免許はこの区分に含まれない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "運転免許は、第一種運転免許、第二種運転免許、仮運転免許の3つに分けられています。仮運転免許も区分の一つです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第84条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "免許",
    "difficulty": 2,
    "tags": [
      "免許"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "ref": "道路交通法 第84条第2項"
  },
  {
    "id": "D-C172",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "仮免許",
    "question": "普通仮免許で練習のため運転するときは、所定の指導者を運転者席の横に同乗させ、その指導の下で運転する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "仮免許で練習のため運転するときは、次のいずれかの人を運転者席の横に乗せ、その指導を受けながら運転します。①その車を運転できる第一種免許を、通算3年以上受けている人（免許の効力が停止されていた期間は数えません。免許の効力が停止中の人は除きます）。②その車を運転できる第二種免許を受けている人（免許の効力が停止中の人と、21歳未満の人は除きます）。③技能教習をしている教習指導員（免許の効力が停止中の人は除きます）。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第87条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "仮免許",
    "difficulty": 2,
    "tags": [
      "仮免許"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "ref": "道路交通法 第87条第2項・道路交通法施行令 第32条の6"
  },
  {
    "id": "D-C173",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "仮免許",
    "question": "仮免許で練習するとき、所定の指導者は運転者席の横の座席に同乗する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "仮免許で練習運転するときは、所定の資格（その車を運転できる免許を一定期間以上受けている人など）を持つ指導者を運転者席の横に同乗させ、その指導を受けながら運転します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第87条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "仮免許",
    "difficulty": 2,
    "tags": [
      "仮免許"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "ref": "道路交通法 第87条第2項"
  },
  {
    "id": "D-C174",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "仮免許",
    "question": "仮免許で練習するときは、所定の仮免許練習標識を車の前面と後面に付ける。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "仮免許で練習運転するときは、決められた様式の仮免許練習標識を、車の前と後ろの両方に付けます。前だけに付けるのでは足りません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第87条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "仮免許",
    "difficulty": 2,
    "tags": [
      "仮免許"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "ref": "道路交通法 第87条第3項"
  },
  {
    "id": "D-C175",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "仮免許",
    "question": "普通仮免許を持ち、所定の指導者が同乗していれば、タクシーの営業として旅客を運ぶ運転ができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "仮免許では、タクシーなどの営業でお客を運ぶために車を運転することはできません。指導者が同乗していても同じです。タクシーの営業運転には、普通第二種免許などの第二種免許が必要です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第87条第4項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "仮免許",
    "difficulty": 2,
    "tags": [
      "仮免許"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "ref": "道路交通法 第87条第4項"
  },
  {
    "id": "D-C176",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "飲酒",
    "question": "酒気を帯びた友人が運転するおそれがあっても、自分が運転しないなら車を貸してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "自分が運転しなくても、酒気を帯びて運転するおそれがある人に車を提供してはいけません（車両等提供の禁止）。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第65条第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "飲酒",
    "difficulty": 2,
    "tags": [
      "飲酒"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第65条第2項"
  },
  {
    "id": "D-C177",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "飲酒",
    "question": "これから車を運転する人に対しても、自分が運転しないのであれば、飲酒をすすめてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "自分が運転しない人でも、酒気を帯びて車を運転するおそれがある人に、飲酒をすすめてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第65条第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "飲酒",
    "difficulty": 2,
    "tags": [
      "飲酒"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第65条第3項"
  },
  {
    "id": "D-C178",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "飲酒",
    "question": "友人が酒気を帯びていることを知りながら、その友人に普通乗用車で送ってもらうよう頼み、その友人が酒気を帯びて運転する車に同乗してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "運転者の酒気帯びを知りながら、自分を運ぶよう要求・依頼して、その酒気帯び運転の車に同乗することは禁止される。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第65条第4項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "飲酒",
    "difficulty": 2,
    "tags": [
      "飲酒"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第65条第4項"
  },
  {
    "id": "D-C179",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "体調",
    "question": "薬の影響で正常な運転ができないおそれがあっても、処方された薬なら普通乗用車を運転してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "薬物の影響などで正常な運転ができないおそれがある状態では運転できない。処方薬であることだけでは例外にならない。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第66条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "体調",
    "difficulty": 2,
    "tags": [
      "体調"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第66条"
  },
  {
    "id": "D-C180",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "体調",
    "question": "病気で正常な判断や操作ができないおそれがあるときは、ゆっくり走るつもりでも運転してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "病気などで正常な運転ができないおそれがある状態では運転できない。速度を落とすつもりであっても禁止は解除されない。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第66条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "体調",
    "difficulty": 2,
    "tags": [
      "体調"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第66条"
  },
  {
    "id": "D-C181",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "歩行者の保護",
    "question": "水たまりを通るときは、徐行するなどして歩行者へ汚水を飛ばさないようにする。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "ぬかるみや水たまりを通るときは、泥よけ器を付けたり徐行したりするなどして、泥や汚水を飛ばして他人に迷惑をかけないようにします。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第71条第1号"
  },
  {
    "id": "D-C182",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "歩行者の保護",
    "question": "水たまりを通るとき、泥や汚水が歩行者にかかるおそれがあっても、速度や通り方を変える必要はない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "ぬかるみや水たまりを通るときは、泥よけ器を付けるか徐行するなどして、泥や汚水を飛ばして他人に迷惑をかけないようにしなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第71条第1号"
  },
  {
    "id": "D-C183",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "歩行者の保護",
    "question": "保護者の付き添いがない幼児が歩いているときは、一時停止か徐行をして、その歩行を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "保護者が付き添っていない子どもや幼児が歩いているときは、一時停止するか徐行して、その歩行を妨げないようにします。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第71条第2号"
  },
  {
    "id": "D-C184",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "歩行者の保護",
    "question": "盲導犬を連れて通行する目の見えない人がいるときは、一時停止か徐行をして、その通行を妨げないようにする。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "盲導犬を連れて通行している目の見えない人がいるときは、一時停止するか徐行して、その通行を妨げないようにします。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第71条第2号"
  },
  {
    "id": "D-C185",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "歩行者の保護",
    "question": "歩行に支障がある高齢者が通行しているときは、一時停止か徐行をして、その通行を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩行に支障がある高齢者の通行を妨げないよう、一時停止または徐行します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第71条第2号の2"
  },
  {
    "id": "D-C186",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通学通園バス",
    "question": "児童、幼児等の乗降のため停車している通学通園バスの側方を通過するときは、子どもの姿が見えなければ、徐行しないで通過してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "児童、幼児等の乗降のため停車している通学通園バスの側方を通過するときは、徐行して安全を確認しなければなりません。子どもの姿が見えなくても同じです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "通学通園バス",
    "difficulty": 2,
    "tags": [
      "通学通園バス"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第71条第2号の3"
  },
  {
    "id": "D-C187",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "安全地帯",
    "question": "道路の左側部分に設けられた安全地帯に歩行者がいる場合、その側方を通過するときは徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路の左側部分に設けられた安全地帯の側方を通過するとき、その安全地帯に歩行者がいれば、徐行しなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "安全地帯",
    "difficulty": 2,
    "tags": [
      "安全地帯"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第71条第3号"
  },
  {
    "id": "D-C189",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "乗車・積載",
    "question": "同乗者がドアを開けるときの安全確認は同乗者だけの責任なので、運転者は交通の危険を防ぐ措置をとる必要がない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "運転者は、自分が安全を確かめずにドアを開けたり降りたりしないことに加えて、同乗者がドアを開けるなどして交通の危険を生じさせないよう、必要な措置をとらなければなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "乗車・積載",
    "difficulty": 2,
    "tags": [
      "乗車・積載"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第71条第4号の3"
  },
  {
    "id": "D-C191",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "騒音",
    "question": "車が停止していれば、正当な理由がなくても、著しく他人に迷惑をかけるような空ぶかしをしてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "正当な理由がないのに、著しく他人に迷惑をかける騒音を出すような空ぶかしをしてはいけません。車が止まっていても同じです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "騒音",
    "difficulty": 2,
    "tags": [
      "騒音"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第71条第5号の3"
  },
  {
    "id": "D-C192",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "初心者等の保護",
    "question": "危険防止のためやむを得ない場合でなくても、進行している初心者標識を付けた普通自動車の側方に幅寄せをしてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "初心者標識などを付けた普通自動車が進行しているときは、危険防止のためやむを得ない場合を除き、その側方に幅寄せをしてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "初心者等の保護",
    "difficulty": 2,
    "tags": [
      "初心者等の保護"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第71条第5号の4"
  },
  {
    "id": "D-C193",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "画面の注視",
    "question": "普通乗用車の走行中でも、進む方向を確認する目的なら、カーナビの画像を注視してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車が止まっているときを除き、カーナビなどの画面に表示された画像を注視してはいけません。道順を確かめるためでも同じです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "画面の注視",
    "difficulty": 2,
    "tags": [
      "画面の注視"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第71条第5号の5"
  },
  {
    "id": "D-C194",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "シートベルト",
    "question": "座席ベルトの装備が必要な普通乗用車の運転者は、免除される事情がなければ、近所への運転でもシートベルトを着用する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "運転者は、シートベルトを着用して運転しなければなりません。近所までの短い運転でも同じです。着用しなくてよいのは、病気のため着用が療養上適当でないときなど、法令で定める場合に限られます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条の3第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "シートベルト",
    "difficulty": 2,
    "tags": [
      "シートベルト"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第71条の3第1項"
  },
  {
    "id": "D-C195",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "シートベルト",
    "question": "シートベルトを備える助手席にも、免除される事情がなければ同乗者を着用させる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "免除される事情がなければ、シートベルトを備える座席の同乗者にも着用させます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105#Mp-At_71_3",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条の3第2項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "シートベルト",
    "difficulty": 2,
    "tags": [
      "シートベルト"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第71条の3第2項"
  },
  {
    "id": "D-C196",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "チャイルドシート",
    "question": "幼児用補助装置（チャイルドシート）を使用させる必要がある幼児でも、大人が抱いていれば、使用させないで自動車に乗せてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "幼児を乗せて自動車を運転するときは、幼児用補助装置を使用させなければなりません。大人が抱いていることは、使用させなくてよい場合として定められていません。使用させなくてよいのは、法令で定める場合に限られます。たとえば、疾病のため療養上適当でないとき、負傷や障害のため療養上・健康保持上適当でないとき、運転者以外の人が補助装置を使わせたままではできない授乳などの世話をしているとき、一般旅客自動車運送事業の自動車で旅客の幼児を乗せるとき、応急の救護のため緊急に搬送するときなどです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条の3第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "チャイルドシート",
    "difficulty": 2,
    "tags": [
      "チャイルドシート"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第71条の3第3項・道路交通法施行令 第26条の3の2第3項"
  },
  {
    "id": "D-C197",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "チャイルドシート",
    "question": "幼児用補助装置（チャイルドシート）は、道路運送車両法の規定に適合し、幼児の発育の程度に応じた形状のものを使う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "幼児用補助装置（チャイルドシート）は、座席に固定して、座席ベルトの代わりに幼児の安全を守る装置です。道路運送車両法の規定に適合し、しかも幼児の発育の程度に応じた形のものを使います。幼児を乗せて自動車を運転するときは、これを使用させます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第71条の3第3項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "チャイルドシート",
    "difficulty": 2,
    "tags": [
      "チャイルドシート"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第71条の3第3項"
  },
  {
    "id": "D-C200",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "整備",
    "question": "制動装置が所定の基準に適合せず交通の危険を生じるおそれがある普通乗用車は、短い距離でも運転してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "ブレーキなどの装置が基準に合っておらず、交通の危険を生じさせたり他人に迷惑をかけたりするおそれがある車は、運転してはいけません。また、他人に運転させてもいけません。短い距離でも同じです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第62条第1項",
    "lastVerifiedDate": "2026-10-12",
    "stage": "first",
    "topic": "整備",
    "difficulty": 2,
    "tags": [
      "整備"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "ref": "道路交通法 第62条"
  },
  {
    "id": "D-N001",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「通行止め」の標識がある道路では、車両だけでなく歩行者も通行することができない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「通行止め」の標識は、歩行者等、車両、路面電車のすべての通行を禁止しています。車だけでなく、歩いている人も通れません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N002",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「車両通行止め」の標識がある道路では、普通乗用車は通行することができない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「車両通行止め」の標識は、車両の通行を禁止しています。普通乗用車は車両なので、この道路は通れません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N003",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "矢印が直進だけを示している「指定方向外進行禁止」の標識がある交差点でも、普通乗用車は左折することができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「指定方向外進行禁止」の標識は、標示板の矢印が示す方向以外へ車両が進むことを禁止しています。矢印が直進だけを示していれば、左折はできません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N004",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「車両横断禁止」の標識がある区間でも、道路外の駐車場に入るために左折して道路を横断することは禁止されていない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「車両横断禁止」の標識は車両の横断を禁止していますが、道路外の施設や場所に出入りするための左折を伴う横断は、禁止の対象から外されています。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N005",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「追越し禁止」の標識がある区間でも、道路の右側部分にはみ出さなければ、前を走る普通乗用車を追い越してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「追越し禁止」の標識は、車両の追越しそのものを禁止しています。右側部分にはみ出すかどうかに関係なく、この区間では追越しできません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N006",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「駐停車禁止」の標識がある区間では、駐車だけでなく停車も禁止されている。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「駐停車禁止」の標識は、車両の駐車と停車の両方を禁止しています。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N007",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「駐車禁止」の標識は、車両の駐車と停車の両方を禁止するものである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「駐車禁止」の標識が禁止しているのは、車両の駐車です。駐車と停車の両方を禁止するのは「駐停車禁止」の標識です。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N008",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「駐車余地」の標識がある区間で駐車するときは、車の右側の道路上に、標識が示す距離をあけなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「駐車余地」の標識は、駐車するときに車の右側の道路上にあけておかなければならない距離を指定しています。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N009",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「警笛区間」の標識がある区間では、見通しのよい直線の道路を通るときも、警音器を鳴らさなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「警笛区間」の標識がある区間で警音器を鳴らさなければならないのは、左右の見通しのきかない交差点、見通しのきかない曲がり角、見通しのきかない上り坂の頂上を通るときです。見通しのよい直線の道路は、警音器を鳴らさなければならない場所ではありません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N010",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「前方優先道路」の標識は、その標識が立っている道路が優先道路であることを示している。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「前方優先道路」の標識は、その道路と交差する前方の道路が優先道路であることを示しています。標識が立っている道路が優先道路という意味ではありません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N011",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「一方通行」の標識がある道路では、標示板の矢印が示す方向と反対の方向へ車両が通行することは禁止されている。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「一方通行」の標識は、標示板の矢印が示す方向と反対の方向へ車両が通行することを禁止しています。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N012",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「高さ制限」の標識がある道路では、屋根に荷物を積んでいる車の場合、荷物の高さも含めた高さが標識の数値を超えると通行できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「高さ制限」の標識は、標示板に表示された高さを超える車両の通行を禁止しています。この高さには、積んだ荷物の高さも含まれます。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N013",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「軌道敷内通行可」の標識がある区間では、自動車は路面電車の軌道敷内を通行することができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「軌道敷内通行可」の標識は、自動車が軌道敷内を通行できることを示しています。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N014",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「すべりやすい」の標識は、路面がすべりやすく運転に注意が必要な箇所の手前に設置される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「すべりやすい」の標識は、路面がすべりやすく運転に注意が必要な箇所の手前30mから200mまでの地点の、道路の左側の端に設置されます。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N015",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「踏切あり」の標識は、踏切を渡り終えた先に設置される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「踏切あり」の標識は、鉄道や軌道（道路上を走る併用軌道を除きます）と交差する地点の手前50mから120mまでの地点の、道路の左側の端に設置されます。踏切を渡った先ではなく、手前で踏切があることを知らせる標識です。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N016",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "道路標識は、本標識と補助標識に分けられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路標識には、本標識と補助標識の2つがあります。補助標識は、本標識に付けて、その意味を補うものです。",
    "ref": "道路標識、区画線及び道路標示に関する命令 第1条第1項",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 第1条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N017",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "道路標識のうち本標識は、規制標識と指示標識の2種類だけである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "本標識は、案内標識、警戒標識、規制標識、指示標識の4種類です。規制標識と指示標識の2種類だけではありません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 第1条第2項",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 第1条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N018",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "道路標示は、規制標示と指示標示に分けられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路標示は、規制標示と指示標示の2つに分けられます。",
    "ref": "道路標識、区画線及び道路標示に関する命令 第8条",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 第8条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N019",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「停止禁止部分」の道路標示がある場所では、前方の車の状況によってその部分で止まってしまうおそれがあるときは、その部分に入ってはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「停止禁止部分」の道路標示で区切られた部分には、前方の車などの状況によってそこで止まることになりそうなときは、入ってはいけません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N020",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「立入り禁止部分」の道路標示で示された部分は、車が通行してよい部分である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「立入り禁止部分」の道路標示は、その部分が車の通行に使わない部分であることを示しています。車は通行できません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N021",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「導流帯」の道路標示は、車が安全かつ円滑に走れるように誘導するために設けられた場所であることを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「導流帯」の道路標示は、車が安全かつ円滑に走れるよう、その流れを誘導するために設けられた場所であることを示しています。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N022",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「右側通行」の道路標示は、勾配の急な道路の曲がり角付近で、車が道路の中央から右の部分を通行することを禁止するものである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「右側通行」の道路標示は、勾配の急な道路の曲がり角付近で、車が道路の中央から右の部分を通行できることを示しています。禁止するものではありません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N023",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「前方優先道路」の道路標示は、その道路と交差する前方の道路が優先道路であることを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「前方優先道路」の道路標示は、この先で交わる道路が優先道路であることを、前もって知らせるものです。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N024",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「横断歩道又は自転車横断帯あり」の道路標示は、前方に横断歩道または自転車横断帯があることを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "この道路標示は、この先に横断歩道または自転車横断帯があることを、前もって知らせるものです。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N025",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「斜め横断可」の道路標示がある交差点では、歩行者等が斜めに道路を横断することができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「斜め横断可」の道路標示がある交差点では、歩行者等が交差点を斜めに横断することが認められています。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N026",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「最高速度」の規制標示による規制が行われている区間に示される「終わり」の道路標示は、その区間の始まりを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「終わり」の道路標示は、その規制が行われている道路の区間が終わる地点を示しています。始まりを示すものではありません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第5",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N027",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「日・時間」の補助標識は、本標識が表示する交通の規制が行われている日または時間を示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "「日・時間」の補助標識は、本標識の規制が行われる日や時間を示します。示された日や時間に、その規制が行われます。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N028",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「区間内」の補助標識は、本標識が表示する交通の規制が行われている区間の終わりを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「区間内」の補助標識は、そこが本標識の規制が行われている区間の中であることを示します。区間の終わりを示すものではありません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N029",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「駐車余地」の補助標識は、駐車するときに、その車の左側の道路上に空けておかなければならない余地を示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "「駐車余地」の補助標識は、駐車するときに、その車の右側の道路上に空けておかなければならない余地を示します。左側ではありません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N030",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通免許を受けた人が普通乗用車を運転するときは、その車を運転できる免許証を携帯していなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "免許を受けた人が車を運転するときは、その車を運転できる免許証を持っていなければなりません。免許を受けていても、免許証を持たずに運転してはいけません。",
    "ref": "道路交通法 第95条第1項",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第95条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N031",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通乗用車を運転しているときに、警察官から免許証の提示を求められたら、それを提示しなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車を運転しているときに警察官から免許証を見せるよう求められたら、免許証を見せなければなりません。",
    "ref": "道路交通法 第95条第2項",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第95条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N032",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通免許を受けた人は、一般原動機付自転車も運転することができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "普通免許を受けた人は、普通自動車のほかに、小型特殊自動車と一般原動機付自転車も運転できます。",
    "ref": "道路交通法 第85条第2項",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第85条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N033",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通免許は、17歳の人でも受けることができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通免許は、18歳にならないと受けられません。17歳の人には普通免許は与えられません。",
    "ref": "道路交通法 第88条第1項第1号",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第88条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  },
  {
    "id": "D-N034",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通仮免許を受けた人は、練習のためであれば、準中型自動車を運転することができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通仮免許で練習のために運転できるのは普通自動車だけです。準中型自動車を練習のために運転することはできません。",
    "ref": "道路交通法 第87条第2項",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第87条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-12",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）"
  }
];
