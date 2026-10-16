// MCT ○×教材 仮免の範囲（学科教本 第1段階の教習番号1〜10）。v15 の200問＋M7 の問題（D-M）。10/15 出題ちょうど500問（独立照合3〜6と本人の判断を反映。外した問題は reviewStatus が excluded）。mock6問は出題対象外。根拠は ref（条・項・号）。
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
    "question": "信号機のない横断歩道に横断しようとする歩行者がいるときは、徐行でその前を通過する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横断しようとする歩行者がいるときは、横断歩道の直前で一時停止して、歩行者の通行を妨げないようにします。",
    "source": "道路交通法",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第38条第1項後段",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "一時停止",
      "横断歩道"
    ],
    "type": "truefalse",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第38条第1項後段",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用） ／ 10/15 ×の言い換え（照合3の直し案、本人OK）",
    "quote": "横断歩道又は自転車横断帯（以下この条において「横断歩道等」という。）……この場合において、横断歩道等によりその進路の前方を横断し、又は横断しようとする歩行者等があるときは、当該横断歩道等の直前で一時停止し、かつ、その通行を妨げないようにしなければならない。"
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
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "pairGroup": "P12"
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
    "question": "横断者の有無が明らかでない横断歩道では、歩行者を確認した時点から停止できる速度に調整する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横断者がいないことが明らかでなければ、横断歩道に近づく段階から直前で停止できる速度で進みます。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第38条第1項前段",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 2,
    "tags": [
      "歩行者・自転車"
    ],
    "type": "truefalse",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "ref": "道路交通法 第38条第1項前段",
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用） ／ 10/15 ×の言い換え（照合3の直し案、本人OK）",
    "quote": "車両等は、横断歩道又は自転車横断帯……に接近する場合には、当該横断歩道等を通過する際に当該横断歩道等によりその進路の前方を横断しようとする歩行者又は自転車……がないことが明らかな場合を除き、当該横断歩道等の直前……で停止することができるような速度で進行しなければならない。"
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
    "ref": "道路交通法 第20条第2項",
    "pairGroup": "P11"
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
    "ref": "道路交通法 第20条第1項",
    "pairGroup": "P12"
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
    "reviewStatus": "excluded",
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
    "lastVerifiedDate": "2026-10-15",
    "stage": "first",
    "topic": "車両通行帯",
    "difficulty": 2,
    "tags": [
      "車両通行帯"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第20条第3項",
    "excludedReason": "D-C063 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
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
    "reviewStatus": "excluded",
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
    "lastVerifiedDate": "2026-10-15",
    "stage": "first",
    "topic": "速度",
    "difficulty": 2,
    "tags": [
      "速度"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第23条",
    "excludedReason": "D-C071 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
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
    "ref": "道路交通法 第25条の2第2項",
    "pairGroup": "P15"
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
    "question": "普通乗用車が後ろの車に追いつかれ、その車より遅い速度で進み続けるときは、後ろの車の追越しが終わる前でも速度を上げてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後ろの車に追いつかれ、その車より遅い速度で進み続けるときは、後ろの車が追越しを終えるまで速度を上げてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第27条第1項",
    "lastVerifiedDate": "2026-10-15",
    "stage": "first",
    "topic": "追い越されるとき",
    "difficulty": 2,
    "tags": [
      "追い越されるとき"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用） ／ 10/15 本人の例文をもとに書き直し（照合3・本人の Excel の判断）",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "ref": "道路交通法 第27条第1項",
    "quote": "車両（……乗合自動車……及びトロリーバスを除く。）は、……最高速度……が高い車両に追いつかれたときは、その追いついた車両が当該車両の追越しを終わるまで速度を増してはならない。最高速度が同じであるか又は低い車両に追いつかれ、かつ、その追いついた車両の速度よりもおそい速度で引き続き進行しようとするときも、同様とする。"
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
    "ref": "道路交通法 第28条第3項",
    "pairGroup": "P13"
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
    "ref": "道路交通法 第28条第4項",
    "pairGroup": "P02"
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
    "ref": "道路交通法 第28条第4項",
    "pairGroup": "P02"
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
    "ref": "道路交通法 第31条",
    "pairGroup": "P14"
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
    "question": "普通乗用車が一方通行の道路で右折するときは、前もってできるだけ右端に寄り、指定がなければ交差点の中心の外側を徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "一方通行の道路で右折するときは、前もってできるだけ道路の右端に寄り、交差点の中心の内側（通行する部分の指定があればその部分）を徐行しなければなりません。外側ではありません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第34条第4項",
    "lastVerifiedDate": "2026-10-15",
    "stage": "first",
    "topic": "右左折",
    "difficulty": 2,
    "tags": [
      "右左折"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用） ／ 10/15 本人の例文をもとに書き直し（照合3・本人の Excel の判断）",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "ref": "道路交通法 第34条第4項",
    "quote": "自動車、一般原動機付自転車又はトロリーバスは、一方通行となつている道路において右折するときは、第二項の規定にかかわらず、あらかじめその前からできる限り道路の右側端に寄り、かつ、交差点の中心の内側（道路標識等により通行すべき部分が指定されているときは、その指定された部分）を徐行しなければならない。"
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
    "question": "普通乗用車は、道路の曲がり角付近では、見通しがよくても徐行しなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路の曲がり角付近は、見通しがよくても徐行しなければならない場所です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第42条第2号",
    "lastVerifiedDate": "2026-10-15",
    "stage": "first",
    "topic": "徐行",
    "difficulty": 2,
    "tags": [
      "徐行"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用） ／ 10/15 本人の例文をもとに書き直し（照合3・本人の Excel の判断）",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "ref": "道路交通法 第42条第2号",
    "quote": "車両等は、道路標識等により徐行すべきことが指定されている道路の部分を通行する場合及び次に掲げるその他の場合においては、徐行しなければならない。……二道路のまがりかど附近、上り坂の頂上附近又は勾こう配の急な下り坂を通行するとき。"
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
    "question": "環状交差点以外で、普通乗用車の右折の合図を続ける期間は、右折を始めるまでである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "右折の合図は、右折が終わるまで続けます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "sourceSection": "道路交通法 第53条第1項",
    "lastVerifiedDate": "2026-10-15",
    "stage": "first",
    "topic": "合図",
    "difficulty": 2,
    "tags": [
      "合図"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用） ／ 10/15 ×の言い換え（照合3の直し案、本人OK）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法 第53条第1項",
    "quote": "車両（自転車以外の軽車両を除く。次項及び第四項において同じ。）の運転者は、左折し、右折し、転回し、徐行し、停止し、後退し、又は同一方向に進行しながら進路を変えるときは、手、方向指示器又は灯火により合図をし、かつ、これらの行為が終わるまで当該合図を継続しなければならない。"
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
    "ref": "道路交通法施行令 第2条第1項",
    "pairGroup": "P04"
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
    "ref": "道路交通法施行令 第2条第1項",
    "pairGroup": "P03"
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
    "reviewStatus": "excluded",
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
    "lastVerifiedDate": "2026-10-15",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "ref": "道路交通法施行令 第2条第1項",
    "excludedReason": "D-M033 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
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
    "reviewStatus": "excluded",
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
    "lastVerifiedDate": "2026-10-15",
    "stage": "first",
    "topic": "合図の時期",
    "difficulty": 2,
    "tags": [
      "合図の時期"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "ref": "道路交通法施行令 第21条第1項",
    "excludedReason": "D-C163 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
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
    "ref": "道路交通法 第2条第1項第20号",
    "pairGroup": "P05"
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
    "ref": "道路交通法 第2条第1項第20号",
    "pairGroup": "P05"
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
    "ref": "道路交通法 第2条第1項第21号",
    "pairGroup": "P06"
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
    "reviewStatus": "excluded",
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
    "lastVerifiedDate": "2026-10-15",
    "stage": "first",
    "topic": "仮免許",
    "difficulty": 2,
    "tags": [
      "仮免許"
    ],
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "ref": "道路交通法 第87条第2項",
    "excludedReason": "D-C172 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
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
    "ref": "道路交通法 第71条第1号",
    "pairGroup": "P01"
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
    "ref": "道路交通法 第71条第1号",
    "pairGroup": "P01"
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
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "pairGroup": "P07"
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
    "question": "道路標識（交通の規制や指示を表示する標示板）は、本標識と補助標識に分けられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路標識は、本標識と補助標識に分けられます。補助標識は、本標識に付けてその意味を補うものです。なお、路面に描かれた線や記号、文字は「道路標示」といい、道路標識とは別のものです。",
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
    "question": "道路標識の本標識は、規制標識と指示標識の2種類だけで、案内標識と警戒標識は本標識に含まれない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "本標識は、案内標識・警戒標識・規制標識・指示標識の4種類です。2つ（規制標示と指示標示）に分けられるのは、路面に描かれる「道路標示」のほうです。",
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
    "question": "道路標示（路面に描かれた線や記号、文字）は、規制標示と指示標示に分けられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路標示は、規制標示と指示標示の2つに分けられます。標示板である「道路標識」（本標識は4種類）とは別のものです。",
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
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "pairGroup": "P08"
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
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "pairGroup": "P07"
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
    "question": "普通仮免許は、18歳にならなければ受けることができない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通仮免許は、17歳6か月から受けることができます。なお、普通免許を受けられるのは18歳からです。",
    "ref": "道路交通法 第88条第2項",
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
    "reviewMethod": "v15 案：条文の引用を機械照合・Claude の独立確認・本人の決まり1〜10で見直し（GPT 照合前、テスト配布用）",
    "pairGroup": "P09"
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
  },
  {
    "id": "D-M001",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "普通乗用車では、座席でない場所に人を乗せて運転してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "人は乗車用に設けられた場所に乗せます。座席でない場所への乗車は認められません。",
    "ref": "道路交通法 第55条第1項",
    "quote": "車両の運転者は、当該車両の乗車のために設備された場所以外の場所に乗車させ、又は乗車若しくは積載のために設備された場所以外の場所に積載して車両を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第55条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M002",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "荷物で前方が見えにくくなっても、ゆっくり走れば運転してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "運転者の視野を妨げる積み方では運転できません。速度を落としても同じです。",
    "ref": "道路交通法 第55条第2項",
    "quote": "車両の運転者は、運転者の視野若しくはハンドルその他の装置の操作を妨げ、後写鏡の効用を失わせ、車両の安定を害し、又は外部から当該車両の方向指示器、車両の番号標、制動灯、尾灯若しくは後部反射器を確認することができないこととなるような乗車をさせ、又は積載をして車両を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第55条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M003",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "荷物で後写鏡が使えなくなる状態では、普通乗用車を運転できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "後写鏡の働きを失わせる積み方で運転してはいけません。",
    "ref": "道路交通法 第55条第2項",
    "quote": "車両の運転者は、運転者の視野若しくはハンドルその他の装置の操作を妨げ、後写鏡の効用を失わせ、車両の安定を害し、又は外部から当該車両の方向指示器、車両の番号標、制動灯、尾灯若しくは後部反射器を確認することができないこととなるような乗車をさせ、又は積載をして車両を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第55条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M004",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "車両の乗車人員の制限は、近距離なら超えてもよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "近距離であることを理由に、定められた乗車人員の制限を超えることはできません。",
    "ref": "道路交通法 第57条第1項",
    "quote": "車両（軽車両を除く。以下この項及び第五十八条の二から第五十八条の五までにおいて同じ。）の運転者は、当該車両について政令で定める乗車人員又は積載物の重量、大きさ若しくは積載の方法（以下この条において「積載重量等」という。）の制限を超えて乗車をさせ、又は積載をして車両を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第57条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M005",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "制限外許可証を受けた車両では、その許可証を運転中に携帯する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "制限外の許可を受けた車両を運転するときは、許可証を携帯します。",
    "ref": "道路交通法 第58条第2項",
    "quote": "前項の規定により許可証の交付を受けた車両の運転者は、当該許可に係る車両の運転中、当該許可証を携帯していなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第58条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M006",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "乗る人も、乗車場所や積み方の決まりに運転者が違反するような乗り方をしてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "乗る人も、座席以外に乗ったり、運転者の視野や操作を妨げたりするなど、運転者が違反になるような乗り方をしてはいけません。",
    "ref": "道路交通法 第55条第3項",
    "quote": "車両に乗車する者は、当該車両の運転者が前二項の規定に違反することとなるような方法で乗車をしてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第55条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M007",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "積み荷は、走行中に落ちたり飛び散ったりしないよう確実に積む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "積み荷の転落や飛散を防ぐため、確実に積載する必要があります。",
    "ref": "道路交通法 第71条第4号",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……四乗降口のドアを閉じ、貨物の積載を確実に行う等当該車両等に乗車している者の転落又は積載している物の転落若しくは飛散を防ぐため必要な措置を講ずること。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第4号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M008",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "積み荷が道路へ落ちたときは、そのまま走り去ってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "落ちた物を速やかに除去するなど、道路の危険を防ぐ措置が必要です。",
    "ref": "道路交通法 第71条第4号の2",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……四の二車両等に積載している物が道路に転落し、又は飛散したときは、速やかに転落し、又は飛散した物を除去する等道路における危険を防止するため必要な措置を講ずること。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第4号の2",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M009",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "車から離れるときは、エンジンを止め、停止を保つ措置をとる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "エンジンを止めてブレーキを確実にかけるなど、車が動かないようにします。",
    "ref": "道路交通法 第71条第5号",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……五車両等を離れるときは、その原動機を止め、完全にブレーキをかける等当該車両等が停止の状態を保つため必要な措置を講ずること。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第5号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M010",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "短時間なら、他人に無断で運転されるのを防がず車を離れてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "短時間でも、他人に無断で運転されないための措置が必要です。",
    "ref": "道路交通法 第71条第5号の2",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……五の二自動車又は原動機付自転車を離れるときは、その車両の装置に応じ、その車両が他人に無断で運転されることがないようにするため必要な措置を講ずること。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第5号の2",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-010",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M011",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "正当な理由なく、著しく他人に迷惑となる騒音を出す方法で急発進してはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "正当な理由なく、周囲に著しい迷惑となる騒音を出して急発進してはいけません。",
    "ref": "道路交通法 第71条第5号の3",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……五の三正当な理由がないのに、著しく他人に迷惑を及ぼすこととなる騒音を生じさせるような方法で、自動車若しくは原動機付自転車を急に発進させ、若しくはその速度を急激に増加させ、又は自動車若しくは原動機付自転車の原動機の動力を車輪に伝達させないで原動機の回転数を増加させないこと。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第5号の3",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-011",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M012",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "停車中なら、正当な理由なく、著しく他人に迷惑となる空ぶかしをしてもよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "停止中でも、正当な理由なく著しい迷惑となる空ぶかしをしてはいけません。",
    "ref": "道路交通法 第71条第5号の3",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……五の三正当な理由がないのに、著しく他人に迷惑を及ぼすこととなる騒音を生じさせるような方法で、自動車若しくは原動機付自転車を急に発進させ、若しくはその速度を急激に増加させ、又は自動車若しくは原動機付自転車の原動機の動力を車輪に伝達させないで原動機の回転数を増加させないこと。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第5号の3",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-012",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "D-C191 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
  },
  {
    "id": "D-M013",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "荷物で方向指示器が外から見えなくても、昼間なら運転してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "昼間でも、方向指示器が外から確認できない積み方で運転してはいけません。",
    "ref": "道路交通法 第55条第2項",
    "quote": "車両の運転者は、運転者の視野若しくはハンドルその他の装置の操作を妨げ、後写鏡の効用を失わせ、車両の安定を害し、又は外部から当該車両の方向指示器、車両の番号標、制動灯、尾灯若しくは後部反射器を確認することができないこととなるような乗車をさせ、又は積載をして車両を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第55条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-013",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M014",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "車のドアを閉じ、乗っている人の転落を防ぐ措置をとる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "運転者はドアを閉じるなど、乗っている人が転落しないようにします。",
    "ref": "道路交通法 第71条第4号",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……四乗降口のドアを閉じ、貨物の積載を確実に行う等当該車両等に乗車している者の転落又は積載している物の転落若しくは飛散を防ぐため必要な措置を講ずること。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第4号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-014",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M015",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "装置が法令で定める基準に適合せず、他人に迷惑を及ぼすおそれのある車両は運転できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "装置が法令の基準に合わないため、危険や迷惑を及ぼすおそれがある車両は運転できません。",
    "ref": "道路交通法 第62条",
    "quote": "車両等の使用者その他車両等の装置の整備について責任を有する者又は運転者は、その装置が道路運送車両法第三章若しくはこれに基づく命令の規定……に定めるところに適合しないため交通の危険を生じさせ、又は他人に迷惑を及ぼすおそれがある車両等……を運転させ、又は運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第62条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-01-015",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M016",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "交通事故が起きたとき、運転者は原則として直ちに車の運転を停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交通事故が起きたときは、原則として直ちに運転を止め、負傷者の救護などをします。",
    "ref": "道路交通法 第72条第1項",
    "quote": "交通事故があつたときは、当該交通事故に係る車両等の運転者その他の乗務員（以下この節において「運転者等」という。）は、直ちに車両等の運転を停止して、負傷者を救護し、道路における危険を防止する等必要な措置を講じなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第72条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-01-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M017",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "負傷者がいる事故では、運転を止めて警察へ報告し、その後に負傷者を救護する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "事故時は直ちに運転を止め、救護と危険防止の措置を講じます。救護を警察への報告後まで待ちません。",
    "ref": "道路交通法 第72条第1項前段",
    "quote": "交通事故があつたときは、当該交通事故に係る車両等の運転者その他の乗務員（以下この節において「運転者等」という。）は、直ちに車両等の運転を停止して、負傷者を救護し、道路における危険を防止する等必要な措置を講じなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第72条第1項前段",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-01-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK） ／ 10/15 ×の言い換え（照合3の直し案、本人OK）"
  },
  {
    "id": "D-M018",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "交通事故の現場では、道路上の危険を防ぐために必要な措置をとる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "事故後は、二次事故など道路上の危険を防ぐために必要な措置をとります。",
    "ref": "道路交通法 第72条第1項",
    "quote": "道路における危険を防止する等必要な措置を講じなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第72条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-01-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M019",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "交通事故の現場に警察官がいないときは、最寄りの警察署の警察官へ報告する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "現場に警察官がいないときは、直ちに最寄りの警察署の警察官へ報告します。",
    "ref": "道路交通法 第72条第1項",
    "quote": "この場合において、当該車両等の運転者……は、警察官が現場にいるときは当該警察官に、警察官が現場にいないときは直ちに最寄りの警察署（派出所又は駐在所を含む。同項において同じ。）の警察官に……を報告しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第72条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-01-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M020",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "交通事故を警察へ報告するとき、負傷者の負傷の程度は伝えなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "事故の報告では、負傷者の負傷の程度も伝えます。",
    "ref": "道路交通法 第72条第1項",
    "quote": "この場合において、当該車両等の運転者……は、……警察官に当該交通事故が発生した日時及び場所、当該交通事故における死傷者の数及び負傷者の負傷の程度……を報告しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第72条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-01-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M021",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "事故後に警察官から現場に残るよう命じられても、報告を終えれば立ち去ってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "現場に残るよう警察官から命じられたときは、その命令に従います。",
    "ref": "道路交通法 第72条第2項",
    "quote": "警察官が現場に到着するまで現場を去つてはならない旨を命ずることができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第72条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-01-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M022",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "事故車の同乗者は、運転者が警察へ事故を報告するのを妨げてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "同乗者は、運転者などが事故を報告するのを妨げてはいけません。",
    "ref": "道路交通法 第73条",
    "quote": "交通事故があつた場合において、当該交通事故に係る車両等の運転者等以外の者で当該車両等に乗車しているものがあるときは、その者は、当該車両等の運転者等が第七十二条第一項前段に規定する措置を講じ、又は同項後段に規定する報告をするのを妨げてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第73条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-01-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M023",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "普通自動二輪車の運転者は、乗車用ヘルメットをかぶらなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "普通自動二輪車を運転するときは、乗車用ヘルメットを着用します。",
    "ref": "道路交通法 第71条の4第1項",
    "quote": "大型自動二輪車又は普通自動二輪車の運転者は、乗車用ヘルメットをかぶらないで大型自動二輪車若しくは普通自動二輪車を運転し、又は乗車用ヘルメットをかぶらない者を乗車させて大型自動二輪車若しくは普通自動二輪車を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条の4第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-01-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M024",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "一般原動機付自転車は、低速ならヘルメットをかぶらずに運転してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "一般原動機付自転車は、速度にかかわらず乗車用ヘルメットが必要です。",
    "ref": "道路交通法 第71条の4第2項",
    "quote": "乗車用ヘルメットをかぶらないで一般原動機付自転車を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条の4第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-01-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M025",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "特定小型原動機付自転車の運転者には、ヘルメットをかぶる努力義務がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "特定小型原動機付自転車では、乗車用ヘルメットをかぶるよう努めます。",
    "ref": "道路交通法 第71条の4第3項",
    "quote": "特定小型原動機付自転車の運転者は、乗車用ヘルメットをかぶるよう努めなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条の4第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-01-010",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M026",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "普通自動二輪車の同乗者は、運転者だけがヘルメットをかぶれば、ヘルメットなしでよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通自動二輪車では、同乗者にも乗車用ヘルメットをかぶらせます。",
    "ref": "道路交通法 第71条の4第1項",
    "quote": "乗車用ヘルメットをかぶらない者を乗車させて大型自動二輪車若しくは普通自動二輪車を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条の4第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-01-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M027",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "青信号では、歩行者は進むことができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "青信号では、歩行者は進むことができます。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "青色の灯火一　歩行者及び遠隔操作型小型車（遠隔操作により道路を通行しているものに限る。）（以下この条において「歩行者等」という。）は、進行することができること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M028",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "黄色信号では、歩行者は新たに道路の横断を始めてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "黄色信号になったら、歩行者は新たに横断を始めてはいけません。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "黄色の灯火一　歩行者等は、道路の横断を始めてはならず、また、道路を横断している歩行者等は、速やかに、その横断を終わるか、又は横断をやめて引き返さなければならないこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M029",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "黄色信号になったとき横断中の歩行者は、速やかに横断を終えるか、横断をやめて引き返す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断中なら、速やかに渡り終えるか、横断をやめて引き返します。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "黄色の灯火一　歩行者等は、道路の横断を始めてはならず、また、道路を横断している歩行者等は、速やかに、その横断を終わるか、又は横断をやめて引き返さなければならないこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M030",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "赤信号では、歩行者は車が来ていなければ横断してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車が見えなくても、赤信号では道路を横断できません。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "赤色の灯火一　歩行者等は、道路を横断してはならないこと。二　車両等は、停止位置を越えて進行してはならないこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M031",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "青色の矢印や左折可の表示がない赤信号では、交差点へ入る前の車は停止位置を越えてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "青色の矢印や左折可の表示がない赤信号では、停止位置を越えて進めません。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "赤色の灯火一　歩行者等は、道路を横断してはならないこと。二　車両等は、停止位置を越えて進行してはならないこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M032",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "赤信号へ変わったとき、右折中の自転車はその地点で停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "右折中の自転車は、赤信号になったら右折地点で停止します。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "赤色の灯火……五　交差点において既に右折している多通行帯道路等通行一般原動機付自転車、特定小型原動機付自転車及び軽車両は、その右折している地点において停止しなければならないこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M033",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "歩行者用の青信号点滅では、歩行者は新たに横断を始めてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "青信号が点滅したら、歩行者は新たに横断を始めてはいけません。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "人の形の記号を有する青色の灯火の点滅一　歩行者等は、道路の横断を始めてはならず、また、道路を横断している歩行者等は、速やかに、その横断を終わるか、又は横断をやめて引き返さなければならないこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M034",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "歩行者用の赤信号では、歩行者は道路を横断してはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "人の形の赤信号では、歩行者は道路を横断できません。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "人の形の記号を有する赤色の灯火一　歩行者等は、道路を横断してはならないこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M035",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "青色の右向き矢印では、赤信号でも普通乗用車は右折できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "青色矢印が右を示していれば、赤信号でも普通乗用車は右折できます。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "青色の灯火の矢印車両は、黄色の灯火又は赤色の灯火の信号にかかわらず、矢印の方向に進行することができること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-010",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M036",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "黄色の矢印信号で、普通乗用車は矢印方向へ進むことができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "黄色の矢印で進めるのは路面電車です。普通乗用車には適用されません。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "黄色の灯火の矢印路面電車は、黄色の灯火又は赤色の灯火の信号にかかわらず、矢印の方向に進行することができること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-011",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "pairGroup": "P03"
  },
  {
    "id": "D-M037",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "黄色の点滅信号では、普通乗用車は他の交通に注意して進める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "黄色の点滅では、他の交通に注意しながら進むことができます。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "黄色の灯火の点滅歩行者等及び車両等は、他の交通に注意して進行することができること。赤色の灯火の点滅一　歩行者等は、他の交通に注意して進行することができること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-012",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "pairGroup": "P04"
  },
  {
    "id": "D-M038",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "赤色の点滅信号では、歩行者も必ず一時停止しなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩行者は他の交通に注意して進めます。一時停止が必要なのは車両等です。",
    "ref": "道路交通法施行令 第2条第1項",
    "quote": "赤色の灯火の点滅一　歩行者等は、他の交通に注意して進行することができること。二　車両等は、停止位置において一時停止しなければならないこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-013",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M039",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "警察官が腕を横に上げたとき、その腕に対面する交通は青信号と同じである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横に上げた腕に対面する交通は、赤信号と同じ意味です。",
    "ref": "道路交通法施行令 第4条第1項",
    "quote": "腕を横に水平にあげた状態……二　横に水平にあげた腕に対面する交通については、第二条第一項の表に掲げる赤色の灯火の信号の意味に同じ。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第4条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-02-015",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M040",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "警察官が灯火を頭上に上げたとき、その直前まで灯火と交差していた交通は青信号と同じである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "直前まで灯火が振られた方向と交差していた交通は、赤信号と同じ意味です。",
    "ref": "道路交通法施行令 第5条第1項",
    "quote": "灯火を頭上にあげている状態一　灯火を頭上にあげる前の状態における灯火の振られていた方向に進行する交通については、第二条第一項の表に掲げる黄色の灯火の信号の意味に同じ。二　灯火を頭上にあげる前の状態における灯火の振られていた方向に進行する交通とその灯火による信号により交通整理が行なわれている場所において交差する交通については、第二条第一項の表に掲げる赤色の灯火の信号の意味に同じ。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第5条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M041",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "車両用信号の表示順は、青から赤、次に黄色である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車両用信号は、青、黄色、赤の順に表示されます。",
    "ref": "道路交通法施行令 第3条第2項第1号",
    "quote": "青色の灯火、黄色の灯火及び赤色の灯火の信号の順とすること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第3条第2項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M042",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "歩行者用信号の表示順は、青、青の点滅、赤である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩行者用信号は、青、青の点滅、赤の順に表示されます。",
    "ref": "道路交通法施行令 第3条第2項第2号",
    "quote": "人の形の記号を有する青色の灯火、人の形の記号を有する青色の灯火の点滅及び人の形の記号を有する赤色の灯火の信号の順とすること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第3条第2項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M043",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "警察官が腕を垂直に上げたとき、直前までその腕に平行していた交通は青信号と同じである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "直前まで腕に平行していた交通は、黄色信号と同じ意味です。",
    "ref": "道路交通法施行令 第4条第1項",
    "quote": "腕を垂直にあげた状態……一　腕を垂直にあげる前の状態における水平にあげた腕に平行する交通については、第二条第一項の表に掲げる黄色の灯火の信号の意味に同じ。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第4条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M044",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "警察官が腕を垂直に上げたとき、直前までその腕に対面していた交通は赤信号と同じである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "直前まで腕に対面していた交通は、赤信号と同じ意味です。",
    "ref": "道路交通法施行令 第4条第1項",
    "quote": "腕を垂直にあげた状態……二　腕を垂直にあげる前の状態における水平にあげた腕に対面する交通については、第二条第一項の表に掲げる赤色の灯火の信号の意味に同じ。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第4条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M045",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "警察官が灯火を横に振ると、その振られている方向の交通は青信号と同じである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "灯火が振られている方向の交通は、青信号と同じ意味です。",
    "ref": "道路交通法施行令 第5条第1項",
    "quote": "灯火が振られている方向に進行する交通については、第二条第一項の表に掲げる青色の灯火の信号の意味に同じ。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第5条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M046",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "警察官が横に振る灯火と交差する交通は、青信号と同じである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横に振る灯火と交差する交通は、赤信号と同じ意味です。",
    "ref": "道路交通法施行令 第5条第1項",
    "quote": "灯火を横に振つている状態一　灯火が振られている方向に進行する交通については、第二条第一項の表に掲げる青色の灯火の信号の意味に同じ。二　灯火が振られている方向に進行する交通とその灯火により交通整理が行なわれている場所において交差する交通については、第二条第一項の表に掲げる赤色の灯火の信号の意味に同じ。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第5条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M047",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "警察官が灯火を頭上に上げると、直前まで灯火が振られていた方向の交通は黄色信号と同じである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "直前まで灯火が振られていた方向の交通は、黄色信号と同じ意味です。",
    "ref": "道路交通法施行令 第5条第1項",
    "quote": "灯火を頭上にあげる前の状態における灯火の振られていた方向に進行する交通については、第二条第一項の表に掲げる黄色の灯火の信号の意味に同じ。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第5条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M048",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "警察官の手信号で赤信号と同じ意味になり、停止線がない場合は、警察官の1m手前で止まる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "停止線などがない場所では、手信号を行う警察官の1m手前が停止位置です。",
    "ref": "道路交通法施行令 第4条第1項備考",
    "quote": "備考　第二条第一項の表に掲げる黄色の灯火又は赤色の灯火の信号の意味と同じ意味を表示する手信号の意味に係る停止位置は、同表の備考の三に規定する場所にあつては、手信号を行なつている警察官又は法第百十四条の四第一項に規定する交通巡視員（以下「警察官等」という。）の一メートル手前の場所とする。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第4条第1項備考",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-010",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "1m手前になる場所の条件（交差点以外で、停止線・横断歩道・自転車横断帯・踏切がない）をすべて書くと、設問が長く読みにくい（独立照合で答えが分かれた問題）"
  },
  {
    "id": "D-M049",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "交差点以外で停止線がなく横断歩道があるとき、信号の停止位置は横断歩道の直前である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点以外で停止線がない場合、横断歩道があればその直前で止まります。",
    "ref": "道路交通法施行令 第2条第1項表備考第2号",
    "quote": "備考　この表において「停止位置」とは、次に掲げる位置（道路標識等による停止線が設けられているときは、その停止線の直前）をいう。……二　交差点以外の場所で横断歩道等又は踏切がある場所にあつては、横断歩道等又は踏切の直前",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項表備考第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-011",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M050",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "交差点の手前に停止線がないとき、信号の停止位置は交差点を通過した先である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "停止線がない交差点では、交差点の直前が停止位置です。",
    "ref": "道路交通法施行令 第2条第1項表備考第1号",
    "quote": "交差点（交差点の直近に横断歩道等がある場合においては、その横断歩道等の外側までの道路の部分を含む。以下この表において同じ。）の手前の場所にあつては、交差点の直前",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項表備考第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-02-012",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M051",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "信号機が青でも、警察官が手信号で停止を示しているときは、その手信号に従う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "信号機と警察官の手信号が異なるときは、警察官の手信号に従います。",
    "ref": "道路交通法 第7条",
    "quote": "道路を通行する歩行者等又は車両等は、信号機の表示する信号又は警察官等の手信号等（前条第一項後段の場合においては、当該手信号等）に従わなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第7条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-02-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M052",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "重量制限の標識では、表示重量を超える総重量の車両は通行できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "標識に示された重量を超える総重量の車両は通行できません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・重量制限（３２０）",
    "quote": "標示板に表示される重量を超える総重量の車両の通行を禁止すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・重量制限（３２０）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-03-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M053",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "最大幅の標識では、積み荷の幅を含めず車体の幅だけで判断する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "最大幅は、車体だけでなく積み荷の幅も含めて判断します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・最大幅（３２２）",
    "quote": "積載した貨物の幅を含む。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・最大幅（３２２）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-03-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M054",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "最低速度の標識は、自動車の最高速度を指定する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "最低速度の標識が指定するのは、自動車の最低速度です。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・最低速度（３２４）",
    "quote": "自動車の最低速度を指定すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・最低速度（３２４）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-03-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M055",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "自動車専用の標識は、自動車専用道路などであることを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "高速自動車国道または自動車専用道路であることを示します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・自動車専用（３２５）",
    "quote": "高速自動車国道又は自動車専用道路であること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・自動車専用（３２５）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-03-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M056",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "歩行者等専用の標識は、車両専用道路であることを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩行者等専用は、歩行者専用道路であることを示します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・歩行者等専用（３２５の４）",
    "quote": "歩行者専用道路であること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・歩行者等専用（３２５の４）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-03-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M057",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "警笛鳴らせの標識は、警音器を鳴らす場所を指定する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "標識で指定された場所では、警音器を鳴らします。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・警笛鳴らせ（３２８）",
    "quote": "警音器を鳴らさなければならない場所を指定すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・警笛鳴らせ（３２８）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-03-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M058",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「学校、幼稚園、保育所等あり」の標識は、学校などがあるため注意が必要なことを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "学校などがあり、道路交通上の注意が必要な場所の手前などに設置されます。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1・学校、幼稚園、保育所等あり（208）",
    "quote": "学校、幼稚園、保育所等があるため道路交通上注意の必要があると認められる地点",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1・学校、幼稚園、保育所等あり（208）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-03-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M059",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「信号機あり」の標識は、前方に信号機がないことを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "前方に信号機があり、注意が必要なことを示す標識です。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1・信号機あり（208の2）",
    "quote": "信号機があるため道路交通上注意の必要があると認められる地点",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1・信号機あり（208の2）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-03-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M060",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「道路工事中」の標識は、工事や作業をしている道路の区間を知らせる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路で工事や作業をしている区間と、その手前に設置される標識です。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1・道路工事中（213）",
    "quote": "道路における工事中又は作業中である区間",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1・道路工事中（213）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-03-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M061",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「その他の危険」の標識は、運転上の注意が必要な場所を示すものではない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車などの運転上、注意が必要な場所の手前に設置される標識です。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1・その他の危険（215）",
    "quote": "車両又は路面電車の運転上注意の必要があると認められる箇所",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1・その他の危険（215）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-03-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M062",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「転回禁止」の標識がある区間では、車両は転回してはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "転回禁止の標識は、車両の転回を禁止します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1 転回禁止（313）",
    "quote": "交通法第二十五条の二第二項の道路標識により、車両の転回を禁止すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1 転回禁止（313）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-03-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "pairGroup": "P15"
  },
  {
    "id": "D-M063",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「横断歩道」の指示標識は、その場所が横断歩道であることを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断歩道の指示標識は、その場所に横断歩道があることを示します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第1 横断歩道（407-A・B）",
    "quote": "交通法第二条第一項第四号に規定する横断歩道であること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第1 横断歩道（407-A・B）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-03-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M064",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「自転車横断帯」の指示標識は、その場所が歩行者だけの横断歩道であることを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この標識は、自転車が横断するための自転車横断帯を示します。",
    "ref": "道路交通法 第2条第1項第4号の2",
    "quote": "四の二自転車横断帯道路標識等により自転車の横断の用に供するための場所であることが示されている道路の部分をいう。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第2条第1項第4号の2",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-03-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M065",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "路面の「停止線」は、車両が停止する場合の位置を示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "停止線は、車が停止するときの位置を示します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第5 停止線（203）",
    "quote": "車両が停止する場合の位置であること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第5 停止線（203）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-03-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M066",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "路面の「進行方向」の道路標示は、車両が進めない方向を示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "進行方向の道路標示は、車が進むことのできる方向を示します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第5 進行方向（204）",
    "quote": "車両が進行することができる方向であること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第5 進行方向（204）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-03-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M067",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "道路外の店へ入るため歩道を横切るとき、歩行者の通行を妨げてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩道を横切る場合でも、歩行者の通行を妨げてはいけません。",
    "ref": "道路交通法 第17条第2項",
    "quote": "歩行者の通行を妨げないようにしなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第17条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-04-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M068",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "普通乗用車は、道路外の駐車場へ入るためやむを得ないときは、自転車道を横断できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路外の場所へ入るためやむを得ないときは、自転車道を横断できます。",
    "ref": "道路交通法 第17条第3項",
    "quote": "道路外の施設又は場所に出入するためやむを得ないときは、自転車道を横断することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第17条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-04-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M069",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "道路の左側部分が車の通行に十分でないときも、右側へはみ出せない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "左側部分の幅が通行に足りないときは、右側部分へはみ出せます。",
    "ref": "道路交通法 第17条第5項第2号",
    "quote": "車両は、次の各号に掲げる場合においては、前項の規定にかかわらず、道路の中央から右の部分（以下「右側部分」という。）にその全部又は一部をはみ出して通行することができる。……二当該道路の左側部分の幅員が当該車両の通行のため十分なものでないとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第17条第5項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-04-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M070",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "急な坂の曲がり角付近で通行方法が指定されていれば、その指定に従う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路標識などで通行方法が指定されている場所では、その指定に従います。",
    "ref": "道路交通法 第17条第5項第5号",
    "quote": "車両は、次の各号に掲げる場合においては、前項の規定にかかわらず、道路の中央から右の部分（以下「右側部分」という。）にその全部又は一部をはみ出して通行することができる。……五勾こう配の急な道路のまがりかど附近について、道路標識等により通行の方法が指定されている場合において、当該車両が当該指定に従い通行するとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第17条第5項第5号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-04-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M071",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "片側に二つの車両通行帯があり、通行区分の指定がない道路では、普通乗用車は右側の通行帯を通常走行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "指定がなければ、原則として左側から一番目の車両通行帯を通行します。",
    "ref": "道路交通法 第20条第1項",
    "quote": "道路の左側端から数えて一番目の車両通行帯を通行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第20条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-04-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M072",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "道路標識で通行区分が指定された車両は、原則としてその区分に従う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "通常の通行方法と異なる指定があるときは、原則として指定された通行帯を通ります。",
    "ref": "道路交通法 第20条第2項",
    "quote": "車両は、車両通行帯の設けられた道路において、道路標識等により前項に規定する通行の区分と異なる通行の区分が指定されているときは、当該通行の区分に従い、当該車両通行帯を通行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第20条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-04-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "pairGroup": "P11"
  },
  {
    "id": "D-M073",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "渋滞で出られなくなると分かっていても、普通乗用車はバス優先通行帯を通れる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後方からバスが来ても渋滞で通行帯から出られない状況では、最初から通行できません。",
    "ref": "道路交通法 第20条の2第1項",
    "quote": "……の優先通行帯であることが道路標識等により表示されている車両通行帯が設けられている道路においては、自動車（路線バス等を除く。以下この条において同じ。）は、路線バス等が後方から接近してきた場合に当該道路における交通の混雑のため当該車両通行帯から出ることができないこととなるときは、当該車両通行帯を通行してはならず",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第20条の2第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-04-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "例外（ほかの決まりで通る場合・やむを得ない場合）をすべて除くと、設問が長く読みにくい"
  },
  {
    "id": "D-M074",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "軌道敷内を適法に通る車両も、路面電車の通行を妨げてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "軌道敷内を通行できる場合でも、路面電車の通行を妨げてはいけません。",
    "ref": "道路交通法 第21条第2項",
    "quote": "車両は、路面電車の通行を妨げてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第21条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-04-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M075",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "交差点では、危険防止などの例外を除き、停車も駐車もしてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点は、原則として停車も駐車も禁止される場所です。",
    "ref": "道路交通法 第44条第1項第1号",
    "quote": "車両は、道路標識等により停車及び駐車が禁止されている道路の部分及び次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……一交差点、横断歩道、自転車横断帯、踏切、軌道敷内、坂の頂上付近、勾配の急な坂又はトンネル",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-04-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M076",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "道路の曲がり角から3m離れていれば、停車や駐車をしてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路の曲がり角から5m以内は、原則として停車も駐車もできません。",
    "ref": "道路交通法 第44条第1項第2号",
    "quote": "車両は、道路標識等により停車及び駐車が禁止されている道路の部分及び次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……二交差点の側端又は道路の曲がり角から五メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-04-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M077",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "横断歩道の前後5m以内は、危険防止などの例外を除き停車も駐車もできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断歩道の前後5m以内は、原則として停車も駐車も禁止です。",
    "ref": "道路交通法 第44条第1項第3号",
    "quote": "車両は、道路標識等により停車及び駐車が禁止されている道路の部分及び次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……三横断歩道又は自転車横断帯の前後の側端からそれぞれ前後に五メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第3号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-04-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M078",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "バス停の標示板から10m以内は、運行時間外でも停車や駐車が禁止される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "バス停付近の禁止は、その路線バスの運行時間中に限られます。",
    "ref": "道路交通法 第44条第1項第5号",
    "quote": "車両は、道路標識等により停車及び駐車が禁止されている道路の部分及び次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……五乗合自動車の停留所又はトロリーバス若しくは路面電車の停留場を表示する標示柱又は標示板が設けられている位置から十メートル以内の部分（当該停留所又は停留場に係る運行系統に属する乗合自動車、トロリーバス又は路面電車の運行時間中に限る。）",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第5号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-04-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M079",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "踏切の前後10m以内は、危険防止などの例外を除き停車も駐車もできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "踏切の前後10m以内は、原則として停車も駐車も禁止です。",
    "ref": "道路交通法 第44条第1項第6号",
    "quote": "車両は、道路標識等により停車及び駐車が禁止されている道路の部分及び次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……六踏切の前後の側端からそれぞれ前後に十メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第6号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-04-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M080",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "警察署長の許可を受けた場合を除き、道路に接する自動車用の出入口から3m以内の場所には駐車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "警察署長の許可を受けた場合を除き、自動車用の出入口から3m以内は駐車できません。",
    "ref": "道路交通法 第45条第1項第1号",
    "quote": "車両は、道路標識等により駐車が禁止されている道路の部分及び次に掲げるその他の道路の部分においては、駐車してはならない。ただし、公安委員会の定めるところにより警察署長の許可を受けたときは、この限りでない。……一人の乗降、貨物の積卸し、駐車又は自動車の格納若しくは修理のため道路外に設けられた施設又は場所の道路に接する自動車用の出入口から三メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第45条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-04-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK） ／ 10/15 本人の例文をもとに書き直し（照合3・本人の Excel の判断）"
  },
  {
    "id": "D-M081",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "消火栓から5m以内では、警察署長の許可がなければ駐車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "消火栓から5m以内は、原則として駐車禁止です。",
    "ref": "道路交通法 第45条第1項第4号",
    "quote": "車両は、道路標識等により駐車が禁止されている道路の部分及び次に掲げるその他の道路の部分においては、駐車してはならない。ただし、公安委員会の定めるところにより警察署長の許可を受けたときは、この限りでない。……四消火栓、指定消防水利の標識が設けられている位置又は消防用防火水槽そうの吸水口若しくは吸管投入孔から五メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第45条第1項第4号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-04-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M082",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "警察署長の許可を受けた場合を除き、火災報知機から3m以内の場所には駐車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "警察署長の許可を受けた場合を除き、駐車できないのは火災報知機から1m以内の場所です。3mではありません。",
    "ref": "道路交通法 第45条第1項第5号",
    "quote": "車両は、道路標識等により駐車が禁止されている道路の部分及び次に掲げるその他の道路の部分においては、駐車してはならない。ただし、公安委員会の定めるところにより警察署長の許可を受けたときは、この限りでない。……五火災報知機から一メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第45条第1項第5号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-04-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK） ／ 10/15 本人の例文をもとに書き直し（照合3・本人の Excel の判断）"
  },
  {
    "id": "D-M083",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "人を降ろすため停車するときは、できる限り道路の左側端に沿う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "人の乗り降りで停車するときは、できる限り道路の左側端に沿います。",
    "ref": "道路交通法 第47条第1項",
    "quote": "車両は、人の乗降又は貨物の積卸しのため停車するときは、できる限り道路の左側端に沿い、かつ、他の交通の妨害とならないようにしなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第47条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-04-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "路側帯や停車方法の指定の場合を除くと、設問が長く読みにくい"
  },
  {
    "id": "D-M084",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "道路で駐車するときは、他の交通を妨げないよう道路の中央寄りに止める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路で駐車するときは、左側端に沿い、他の交通を妨げないようにします。",
    "ref": "道路交通法 第47条第2項",
    "quote": "車両は、駐車するときは、道路の左側端に沿い、かつ、他の交通の妨害とならないようにしなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第47条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-04-010",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK） ／ 10/15 ×の言い換え（照合3の直し案、本人OK）"
  },
  {
    "id": "D-M085",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "駐車方法の指定がある道路でも、左側端に沿っていれば指定と異なる方法で駐車する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "駐車方法が標識等で指定されているときは、その指定された方法に従います。",
    "ref": "道路交通法 第48条",
    "quote": "車両は、道路標識等により停車又は駐車の方法が指定されているときは、前条の規定にかかわらず、当該方法によつて停車し、又は駐車しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第48条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-04-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK） ／ 10/15 ×の言い換え（照合3の直し案、本人OK）"
  },
  {
    "id": "D-M086",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "パーキング・メーターが設置された時間制限駐車区間では、少しであれば、標識に表示された時間を超えて続けて駐車してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "時間制限駐車区間では、パーキング・メーターが車を感知した時から、標識などに表示された時間を超えて続けて駐車してはいけません。少しであってもできません。",
    "ref": "道路交通法 第49条の3第2項",
    "quote": "車両……は、時間制限駐車区間においては、当該駐車につき第四十九条第一項のパーキング・メーターが車両を感知した時又は同項のパーキング・チケット発給設備によりパーキング・チケットの発給を受けた時から、それぞれ道路標識等により表示されている時間を超えて引き続き駐車してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第49条の3第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-04-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK） ／ 10/15 本人の例文をもとに書き直し（照合3・本人の Excel の判断）"
  },
  {
    "id": "D-M087",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "信号機の表示に従って踏切を進む場合も、踏切直前で必ず一時停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "信号機の表示に従う場合は、踏切の直前で停止せず進むことができます。",
    "ref": "道路交通法 第33条第1項ただし書",
    "quote": "信号機の表示する信号に従うときは、踏切の直前で停止しないで進行することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第33条第1項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-05-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "pairGroup": "P10"
  },
  {
    "id": "D-M088",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "踏切の遮断機が閉じ始めたときは、まだ通れそうでも踏切に入らない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "遮断機が閉じようとしている間は、踏切に入ってはいけません。",
    "ref": "道路交通法 第33条第2項",
    "quote": "車両等は、踏切を通過しようとする場合において、踏切の遮しや断機が閉じようとし、若しくは閉じている間又は踏切の警報機が警報している間は、当該踏切に入つてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第33条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-05-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M089",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "左折方法が道路標識で指定されているときは、指定された部分を通る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "左折する場所に通行部分の指定があれば、その部分を通って徐行します。",
    "ref": "道路交通法 第34条第1項",
    "quote": "車両は、左折するときは、あらかじめその前からできる限り道路の左側端に寄り、かつ、できる限り道路の左側端に沿つて（道路標識等により通行すべき部分が指定されているときは、その指定された部分を通行して）徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第34条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-05-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M090",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "普通乗用車の右折方法が標識で指定されても、必ず交差点中心の直近内側を通る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "右折する部分が指定されているときは、その指定された部分を通ります。",
    "ref": "道路交通法 第34条第2項",
    "quote": "自動車、一般原動機付自転車又はトロリーバスは、右折するときは、あらかじめその前からできる限り道路の中央に寄り、かつ、交差点の中心の直近の内側（道路標識等により通行すべき部分が指定されているときは、その指定された部分）を徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第34条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-05-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M091",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "右折の合図をして中央へ寄る車を、後車は無条件で妨げてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後車が急に速度や方向を変えなければならない場合は、妨げない義務の例外です。",
    "ref": "道路交通法 第34条第6項",
    "quote": "左折又は右折しようとする車両が、前各項の規定により、それぞれ道路の左側端、中央又は右側端に寄ろうとして手又は方向指示器による合図をした場合においては、その後方にある車両は、その速度又は方向を急に変更しなければならないこととなる場合を除き、当該合図をした車両の進路の変更を妨げてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第34条第6項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-05-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M092",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "環状交差点で右折するときは、あらかじめ道路の右側端へ寄る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "環状交差点では、右折でもあらかじめ左側端へ寄ります。",
    "ref": "道路交通法 第35条の2第1項",
    "quote": "車両は、環状交差点において左折し、又は右折するときは、第三十四条第一項から第五項までの規定にかかわらず、あらかじめその前からできる限り道路の左側端に寄り……徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第35条の2第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-05-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M093",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "通行部分の指定がない環状交差点で直進するときは、できる限り環状交差点の側端に沿って徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "指定がなければ、直進でも、できる限り環状交差点の側端に沿って徐行します。",
    "ref": "道路交通法 第35条の2第2項",
    "quote": "車両は、環状交差点において直進し、又は転回するときは、あらかじめその前からできる限り道路の左側端に寄り、かつ、できる限り環状交差点の側端に沿つて（道路標識等により通行すべき部分が指定されているときは、その指定された部分を通行して）徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第35条の2第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-05-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M094",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "交差点内では、反対方向から右折してくる車にも注意して進む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点では、対向方向から右折する車にも特に注意して、安全な方法で進みます。",
    "ref": "道路交通法 第36条第4項",
    "quote": "車両等は、交差点に入ろうとし、及び交差点内を通行するときは、当該交差点の状況に応じ、交差道路を通行する車両等、反対方向から進行してきて右折する車両等及び当該交差点又はその直近で道路を横断する歩行者に特に注意し、かつ、できる限り安全な速度と方法で進行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第36条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-05-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M095",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "交差点で右折するときは、対向して左折する車の進行も妨げてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "右折車は、対向して直進または左折する車の進行を妨げてはいけません。",
    "ref": "道路交通法 第37条",
    "quote": "車両等は、交差点で右折する場合において、当該交差点において直進し、又は左折しようとする車両等があるときは、当該車両等の進行妨害をしてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第37条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-05-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M096",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "環状交差点へ入る車は、すでに交差点内を通行する車の進行を妨げてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "環状交差点では、すでに交差点内を通行する車の進行を妨げてはいけません。",
    "ref": "道路交通法 第37条の2第1項",
    "quote": "当該環状交差点内を通行する車両等の進行妨害をしてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第37条の2第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-05-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M097",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "環状交差点へ入るときは、見通しがよくても徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "環状交差点へ入るときは、見通しにかかわらず徐行します。",
    "ref": "道路交通法 第37条の2第2項",
    "quote": "車両等は、環状交差点に入ろうとするときは、第三十六条第三項の規定にかかわらず、徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第37条の2第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-05-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M098",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "環状交差点へ入るときは、これから交差点へ入ろうとする他の車に注意しなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "環状交差点へ入るときは、ほかに入ろうとする車にも特に注意します。",
    "ref": "道路交通法 第37条の2第3項",
    "quote": "当該環状交差点に入ろうとする車両等、当該環状交差点内を通行する車両等及び当該環状交差点又はその直近で道路を横断する歩行者に特に注意し",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第37条の2第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-05-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M099",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "環状交差点内では、同じ交差点内を通行する他の車にも特に注意する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "環状交差点内では、その中を通行しているほかの車にも特に注意します。",
    "ref": "道路交通法 第37条の2第3項",
    "quote": "当該環状交差点に入ろうとする車両等、当該環状交差点内を通行する車両等及び当該環状交差点又はその直近で道路を横断する歩行者に特に注意し",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第37条の2第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-05-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M100",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "環状交差点の直近を横断する歩行者には、特に注意しなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "環状交差点やその直近を横断する歩行者には、特に注意します。",
    "ref": "道路交通法 第37条の2第3項",
    "quote": "当該環状交差点に入ろうとする車両等、当該環状交差点内を通行する車両等及び当該環状交差点又はその直近で道路を横断する歩行者に特に注意し",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第37条の2第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-05-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M101",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "通行部分の指定がない環状交差点で左折するときは、できる限り環状交差点の側端に沿って徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "指定がなければ、できる限り道路の左側端に寄り、できる限り環状交差点の側端に沿って徐行します。",
    "ref": "道路交通法 第35条の2第1項",
    "quote": "車両は、環状交差点において左折し、又は右折するときは、第三十四条第一項から第五項までの規定にかかわらず、あらかじめその前からできる限り道路の左側端に寄り、かつ、できる限り環状交差点の側端に沿つて（道路標識等により通行すべき部分が指定されているときは、その指定された部分を通行して）徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第35条の2第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-05-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M102",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "環状交差点で転回するときは、道路の右側端に寄ってから進む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "環状交差点で転回するときは、できる限り道路の左側端に寄ります。",
    "ref": "道路交通法 第35条の2第2項",
    "quote": "車両は、環状交差点において直進し、又は転回するときは、あらかじめその前からできる限り道路の左側端に寄り",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第35条の2第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-05-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M103",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "信号機の信号に従って踏切を通るときは、踏切直前の一時停止を省略できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "信号機の信号に従う踏切では、直前で停止せずに進むことができます。",
    "ref": "道路交通法 第33条第1項ただし書",
    "quote": "信号機の表示する信号に従うときは、踏切の直前で停止しないで進行することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第33条第1項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-05-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "pairGroup": "P10"
  },
  {
    "id": "D-M104",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "踏切内で故障した車は、非常信号だけ行えば踏切内に残したままでよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "知らせる措置に加え、車を踏切以外の場所へ移すために必要な措置もとります。",
    "ref": "道路交通法 第33条第3項",
    "quote": "当該車両等を踏切以外の場所に移動するため必要な措置を講じなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第33条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-05-010",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M105",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "中央線がある一般道路で速度指定がなければ、他の車を牽引していない普通乗用車の最高速度は60km/hである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "中央線がある一般道路では、速度指定がなく、他の車を牽引していなければ、最高速度は60km/hです。",
    "ref": "道路交通法施行令 第11条第1号ハ",
    "quote": "最高速度は、自動車にあつては次の各号に掲げる一般道路の区分に応じ当該各号に定める速度……一次に掲げる一般道路六十キロメートル毎時……ハ道路標識等による中央線又は車両通行帯が設けられている一般道路",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第11条第1号ハ",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-06-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M106",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "往復の方向別に構造上分離された一般道路の法定最高速度は、他の車を牽引していない普通乗用車で60km/hである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "往復方向が構造上分離された一般道路では、他の車を牽引していない普通乗用車の法定最高速度は60km/hです。",
    "ref": "道路交通法施行令 第11条第1号ニ",
    "quote": "最高速度は、自動車にあつては次の各号に掲げる一般道路の区分に応じ当該各号に定める速度……一次に掲げる一般道路六十キロメートル毎時……ニ道路の構造上又は柵その他の内閣府令で定める工作物により自動車の通行が往復の方向別に分離されている一般道路",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第11条第1号ニ",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-06-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M107",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "中央線も車両通行帯もない一般道路では、普通乗用車の法定最高速度は60km/hである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "他の60km/h区分に当たらなければ、普通乗用車の法定最高速度は30km/hです。",
    "ref": "道路交通法施行令 第11条第2号",
    "quote": "最高速度は、自動車にあつては次の各号に掲げる一般道路の区分に応じ当該各号に定める速度……一次に掲げる一般道路六十キロメートル毎時……ハ道路標識等による中央線又は車両通行帯が設けられている一般道路ニ道路の構造上又は柵その他の内閣府令で定める工作物により自動車の通行が往復の方向別に分離されている一般道路……二前号に掲げる一般道路以外の一般道路三十キロメートル毎時",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第11条第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-06-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "60km/hになる道路の区分をすべて除くと、設問が長く読みにくい"
  },
  {
    "id": "D-M108",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "他の車を牽引していない一般原動機付自転車の、一般道路での法定最高速度は30km/hである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "他の車を牽引していない一般原動機付自転車の、一般道路での法定最高速度は30km/hです。",
    "ref": "道路交通法施行令 第11条柱書",
    "quote": "……一般道路……を通行する場合の最高速度は、自動車にあつては次の各号に掲げる一般道路の区分に応じ当該各号に定める速度、原動機付自転車にあつては三十キロメートル毎時とする。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第11条柱書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-06-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M109",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "緊急自動車が一般道路を緊急走行するときの最高速度は60km/hである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "緊急自動車が一般道路を通行する場合の最高速度は、原則として80km/hです。",
    "ref": "道路交通法施行令 第12条第3項",
    "quote": "法第三十九条第一項の緊急自動車が一般道路を通行する場合の最高速度は、前条及び前二項の規定にかかわらず、八十キロメートル毎時とする。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第12条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-06-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M110",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "最低速度の指定道路では、法令により減速する場合も最低速度を下回れない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "法令により速度を落とす場合は、指定された最低速度を下回ることができます。",
    "ref": "道路交通法 第23条",
    "quote": "自動車は、道路標識等によりその最低速度が指定されている道路（第七十五条の四に規定する高速自動車国道の本線車道を除く。）においては、法令の規定により速度を減ずる場合及び危険を防止するためやむを得ない場合を除き、その最低速度に達しない速度で進行してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第23条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-06-010",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M111",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "危険防止の必要がないのに、車を急に停止させる急ブレーキをかけてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "危険防止のためやむを得ない場合を除き、急停止させる急ブレーキは禁止です。",
    "ref": "道路交通法 第24条",
    "quote": "車両等の運転者は、危険を防止するためやむを得ない場合を除き、その車両等を急に停止させ、又はその速度を急激に減ずることとなるような急ブレーキをかけてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第24条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-06-011",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M112",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "勾配の急な下り坂では、見通しがよくても徐行しなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "勾配の急な下り坂は、見通しの良し悪しにかかわらず徐行する場所です。",
    "ref": "道路交通法 第42条第2号",
    "quote": "車両等は、道路標識等により徐行すべきことが指定されている道路の部分を通行する場合及び次に掲げるその他の場合においては、徐行しなければならない。……二道路のまがりかど附近、上り坂の頂上附近又は勾こう配の急な下り坂を通行するとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第42条第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-06-012",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M113",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "運転者は、ハンドルやブレーキなどを確実に操作しなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "安全に運転するため、ハンドルやブレーキなどを確実に操作します。",
    "ref": "道路交通法 第70条",
    "quote": "ハンドル、ブレーキその他の装置を確実に操作し",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第70条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-06-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M114",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "制限速度以内なら、道路の状態に応じて速度を調整する必要はない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "制限速度以内でも、道路の状態に応じた安全な速度と方法で運転します。",
    "ref": "道路交通法 第70条",
    "quote": "車両等の運転者は、当該車両等のハンドル、ブレーキその他の装置を確実に操作し、かつ、道路、交通及び当該車両等の状況に応じ、他人に危害を及ぼさないような速度と方法で運転しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第70条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-06-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "D-C043 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
  },
  {
    "id": "D-M115",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "交通が混雑しているときは、その状況に応じた安全な速度と方法で運転する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交通の状況に合わせ、他人に危害を及ぼさない速度と方法で運転します。",
    "ref": "道路交通法 第70条",
    "quote": "車両等の運転者は、当該車両等のハンドル、ブレーキその他の装置を確実に操作し、かつ、道路、交通及び当該車両等の状況に応じ、他人に危害を及ぼさないような速度と方法で運転しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第70条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-06-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M116",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "車の状態が悪くても、道路が空いていれば同じ速度で走り続けてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車の状態も考え、他人に危害を及ぼさない速度と方法で運転します。",
    "ref": "道路交通法 第70条",
    "quote": "車両等の運転者は、当該車両等のハンドル、ブレーキその他の装置を確実に操作し、かつ、道路、交通及び当該車両等の状況に応じ、他人に危害を及ぼさないような速度と方法で運転しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第70条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-06-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M117",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "安全な速度で走っていれば、他人に危害を及ぼす運転方法でもよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "速度だけでなく、他人に危害を及ぼさない方法で運転しなければなりません。",
    "ref": "道路交通法 第70条",
    "quote": "他人に危害を及ぼさないような速度と方法で運転しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第70条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-06-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M118",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "低速で走っていれば、前車が急停止しても追突を避けられる車間距離は必要ない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "速度が低くても、前車が急停止したときに追突を避けられる距離を保ちます。",
    "ref": "道路交通法 第26条",
    "quote": "車両等は、同一の進路を進行している他の車両等の直後を進行するときは、その直前の車両等が急に停止したときにおいてもこれに追突するのを避けることができるため必要な距離を、これから保たなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第26条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-06-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M119",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩道も、歩行者が通るのに十分な幅の路側帯もない道路では、歩行者は原則として道路の右側端を通行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩道も十分な幅の路側帯もない道路では、歩行者は原則として右側端を通ります。",
    "ref": "道路交通法 第10条第1項",
    "quote": "歩行者等は、歩道又は歩行者等の通行に十分な幅員を有する路側帯（次項及び次条において「歩道等」という。）と車道の区別のない道路においては、道路の右側端に寄つて通行しなければならない。ただし、道路の右側端を通行することが危険であるときその他やむを得ないときは、道路の左側端に寄つて通行することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第10条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-07-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M120",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩道と車道が分かれた道路では、歩行者は、車道を横断するときや道路工事などやむを得ないとき以外でも、車道を通行してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩道と車道が分かれた道路では、歩行者は、車道を横断するときや、道路工事などで歩道を通れないなどやむを得ないときを除き、歩道を通行しなければなりません。",
    "ref": "道路交通法 第10条第2項",
    "quote": "歩行者等は、歩道等と車道の区別のある道路においては、次の各号に掲げる場合を除き、歩道等を通行しなければならない。……一車道を横断するとき。……二道路工事等のため歩道等を通行することができないとき、その他やむを得ないとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第10条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-07-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK） ／ 10/15 本人の例文をもとに書き直し（照合3・本人の Excel の判断）"
  },
  {
    "id": "D-M121",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩道を通る歩行者は、自転車通行指定部分をできるだけ避けるよう努める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩道に自転車通行指定部分があるときは、歩行者はできるだけそこを避けます。",
    "ref": "道路交通法 第10条第3項",
    "quote": "当該普通自転車通行指定部分をできるだけ避けて通行するように努めなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第10条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-07-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M122",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "横断歩道の近くでも、歩行者は好きな場所から道路を横断できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横断歩道の近くでは、その横断歩道を使って道路を横断します。",
    "ref": "道路交通法 第12条第1項",
    "quote": "歩行者等は、道路を横断しようとするときは、横断歩道がある場所の付近においては、その横断歩道によつて道路を横断しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第12条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-07-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M123",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "交差点では、斜め横断可の指定がなくても歩行者は斜めに横断できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "斜め横断可の指定がない交差点では、斜めに横断してはいけません。",
    "ref": "道路交通法 第12条第2項",
    "quote": "歩行者等は、交差点において道路標識等により斜めに道路を横断することができることとされている場合を除き、斜めに道路を横断してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第12条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-07-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M124",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩行者は、信号に従って横断するときも車の直前を横断してはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "信号に従って横断する場合は、車の直前・直後の横断禁止の例外です。",
    "ref": "道路交通法 第13条第1項ただし書",
    "quote": "ただし、横断歩道によつて道路を横断するとき、又は信号機の表示する信号若しくは警察官等の手信号等に従つて道路を横断するときは、この限りでない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第13条第1項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-07-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M125",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "横断禁止の道路標識がある部分では、歩行者は道路を横断できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路標識などで横断が禁止された部分では、歩行者は横断できません。",
    "ref": "道路交通法 第13条第2項",
    "quote": "歩行者等は、道路標識等によりその横断が禁止されている道路の部分においては、道路を横断してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第13条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-07-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M126",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "目が見えない人は、道路通行時に定められたつえか盲導犬を用いる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路を通るときは、定められたつえを携えるか、定められた盲導犬を連れます。",
    "ref": "道路交通法 第14条第1項",
    "quote": "目が見えない者（目が見えない者に準ずる者を含む。以下同じ。）は、道路を通行するときは、政令で定めるつえを携え、又は政令で定める盲導犬を連れていなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第14条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-07-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M127",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "保護者は、交通のひんぱんな道路で幼児を一人で歩かせてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "交通のひんぱんな道路では、保護者などが付き添わず幼児を歩かせてはいけません。",
    "ref": "道路交通法 第14条第3項",
    "quote": "監護者が付き添わないで幼児を歩行させてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第14条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-07-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M128",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "目が見える人は、目が見えない人用のつえを自由に携えて道路を通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "対象外の人は、目が見えない人用として定められたつえを携えて通行できません。",
    "ref": "道路交通法 第14条第2項",
    "quote": "目が見えない者以外の者（耳が聞こえない者及び政令で定める程度の身体の障害のある者を除く。）は、政令で定めるつえを携え、又は政令で定める用具を付けた犬を連れて道路を通行してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第14条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-07-010",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "耳が聞こえない人などの例外をすべて書くと、設問が長く読みにくい"
  },
  {
    "id": "D-M129",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩道も、歩行者が通るのに十分な幅の路側帯もない道路で、右側端を歩くことが危険なときは、歩行者は左側端を通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "右側端を歩くのが危険なときなどは、左側端を通行できます。",
    "ref": "道路交通法 第10条第1項ただし書",
    "quote": "ただし、道路の右側端を通行することが危険であるときその他やむを得ないときは、道路の左側端に寄つて通行することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第10条第1項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-07-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M130",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "道路工事で歩道を通れないときも、歩行者は車道へ出てはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路工事などで歩道を通れないときは、車道を通ることができます。",
    "ref": "道路交通法 第10条第2項第2号",
    "quote": "歩行者等は、歩道等と車道の区別のある道路においては、次の各号に掲げる場合を除き、歩道等を通行しなければならない。……二道路工事等のため歩道等を通行することができないとき、その他やむを得ないとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第10条第2項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-07-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M131",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "目が見えない人などが道路で用いる所定のつえは、白色または黄色である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路で用いる所定のつえの色は、白色または黄色です。",
    "ref": "道路交通法施行令 第8条第1項",
    "quote": "法第十四条第一項及び第二項の政令で定めるつえは、白色又は黄色のつえとする。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第8条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-07-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "D-M303 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
  },
  {
    "id": "D-M132",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "盲導犬には、法令で定める白色または黄色の用具を付ける。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "盲導犬には、定められた白色または黄色の用具を付けます。",
    "ref": "道路交通法施行令 第8条第2項",
    "quote": "法第十四条第一項の政令で定める盲導犬は、……内閣府令で定める白色又は黄色の用具を付けたものとする。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第8条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-07-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M133",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "通学中の児童を安全に通行させるため必要な場所では、居合わせた人も適切な措置に努める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "必要な場所では、居合わせた人も誘導や合図などで安全な通行を助けるよう努めます。",
    "ref": "道路交通法 第14条第4項",
    "quote": "児童又は幼児が小学校、幼稚園、幼保連携型認定こども園その他の教育又は保育のための施設に通うため道路を通行している場合において、誘導、合図その他適当な措置をとることが必要と認められる場所については、警察官等その他その場所に居合わせた者は、これらの措置をとることにより、児童又は幼児が安全に道路を通行することができるように努めなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第14条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-07-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M134",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "高齢の歩行者から横断の手助けを求められても、居合わせた人は何もしなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "手助けを求められたときなどは、安全に横断できるよう助けるよう努めます。",
    "ref": "道路交通法 第14条第5項",
    "quote": "高齢の歩行者、身体の障害のある歩行者その他の歩行者でその通行に支障のあるものが道路を横断し、又は横断しようとしている場合において、当該歩行者から申出があつたときその他必要があると認められるときは、警察官等その他その場所に居合わせた者は、誘導、合図その他適当な措置をとることにより、当該歩行者が安全に道路を横断することができるように努めなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第14条第5項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-07-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M135",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "環状交差点以外の交差点で左折するときは、方向指示器などで合図をしなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "環状交差点以外で左折するときは、手や方向指示器などで合図をする必要があります。",
    "ref": "道路交通法 第53条第1項",
    "quote": "車両（自転車以外の軽車両を除く。次項及び第四項において同じ。）の運転者は、左折し、右折し、転回し、徐行し、停止し、後退し、又は同一方向に進行しながら進路を変えるときは、手、方向指示器又は灯火により合図をし、かつ、これらの行為が終わるまで当該合図を継続しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第53条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-08-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M136",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "左折の合図は、左折を始めたらすぐにやめてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "左折の合図は、左折が終わるまで続けなければなりません。",
    "ref": "道路交通法 第53条第1項",
    "quote": "車両（自転車以外の軽車両を除く。次項及び第四項において同じ。）の運転者は、左折し、右折し、転回し、徐行し、停止し、後退し、又は同一方向に進行しながら進路を変えるときは、手、方向指示器又は灯火により合図をし、かつ、これらの行為が終わるまで当該合図を継続しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第53条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-08-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M137",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "環状交差点から出るときは、合図をしなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "環状交差点から出るときは、手や方向指示器などで合図をします。",
    "ref": "道路交通法 第53条第2項",
    "quote": "車両の運転者は、環状交差点においては、前項の規定にかかわらず、当該環状交差点を出るとき、又は当該環状交差点において徐行し、停止し、若しくは後退するときは、手、方向指示器又は灯火により合図をし、かつ、これらの行為が終わるまで当該合図を継続しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第53条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-08-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M138",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "運転中に停止するときは、周りにほかの車がいなければ、停止の合図は不要である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "停止するときは、周りに車がいなくても合図をし、停止が終わるまで続けます。",
    "ref": "道路交通法 第53条第1項",
    "quote": "車両（自転車以外の軽車両を除く。次項及び第四項において同じ。）の運転者は、左折し、右折し、転回し、徐行し、停止し、後退し、又は同一方向に進行しながら進路を変えるときは、手、方向指示器又は灯火により合図をし、かつ、これらの行為が終わるまで当該合図を継続しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第53条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-08-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK） ／ 10/15 本人の例文をもとに書き直し（照合3・本人の Excel の判断）"
  },
  {
    "id": "D-M139",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "徐行の合図は、徐行が終わるまで続けなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "徐行するときは合図をし、徐行が終わるまで続けます。",
    "ref": "道路交通法 第53条第1項",
    "quote": "車両（自転車以外の軽車両を除く。次項及び第四項において同じ。）の運転者は、左折し、右折し、転回し、徐行し、停止し、後退し、又は同一方向に進行しながら進路を変えるときは、手、方向指示器又は灯火により合図をし、かつ、これらの行為が終わるまで当該合図を継続しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第53条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-08-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M140",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "交差点で右折する合図は、交差点の手前の側端から30m手前に達したときに始める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点で右折するときは、交差点の手前の側端から30m手前で合図を始めます。",
    "ref": "道路交通法施行令 第21条第1項表",
    "quote": "右折し、又は転回するとき。その行為をしようとする地点（交差点において右折する場合にあつては、当該交差点の手前の側端）から三十メートル手前の地点に達したとき。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-08-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M141",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "右折の方向指示器は、車の左側を操作する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "右折するときは、右側の方向指示器を操作します。",
    "ref": "道路交通法施行令 第21条第1項表",
    "quote": "右側の方向指示器を操作すること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-08-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M142",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "同じ方向へ進みながら左へ進路変更するときは、変更の3秒前に合図を始める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "左への進路変更は、変更を始める3秒前に合図を出します。",
    "ref": "道路交通法施行令 第21条第1項表",
    "quote": "同一方向に進行しながら進路を左方に変えるとき。その行為をしようとする時の三秒前のとき。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-08-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M143",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "同じ方向へ進みながら右へ進路変更するときは、変更の30m手前で合図を始める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "右への進路変更は、距離ではなく変更を始める3秒前に合図を出します。",
    "ref": "道路交通法施行令 第21条第1項表",
    "quote": "同一方向に進行しながら進路を右方に変えるとき。その行為をしようとする時の三秒前のとき。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-08-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "D-C163 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
  },
  {
    "id": "D-M144",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "徐行の合図は、徐行を始めようとするときに行う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "徐行の合図は、徐行を始めようとするときに行います。",
    "ref": "道路交通法施行令 第21条第1項表",
    "quote": "徐行し、又は停止するとき。その行為をしようとするとき。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-08-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M145",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "停止の合図には、制動灯をつける方法がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "停止するときは、制動灯をつける方法で合図できます。",
    "ref": "道路交通法施行令 第21条第1項表",
    "quote": "徐行し、又は停止するとき。その行為をしようとするとき。腕を車体の外に出して斜め下に伸ばすこと、又は車両の保安基準に関する規定若しくはトロリーバスの保安基準に関する規定により設けられる制動灯をつけること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-08-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M146",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "後退の手による合図は、腕を水平に伸ばしたまま動かさない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後退の手合図は、腕を斜め下に伸ばし、手のひらを後ろへ向けて前後に動かします。",
    "ref": "道路交通法施行令 第21条第1項表",
    "quote": "後退するとき。その行為をしようとするとき。腕を車体の外に出して斜め下に伸ばし、かつ、手のひらを後ろに向けてその腕を前後に動かすこと、又は車両の保安基準に関する規定に定める後退灯を備える自動車にあつてはその後退灯を……それぞれつけること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-08-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M147",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "後退灯を備えた自動車は、後退灯をつける方法で後退の合図をすることができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "後退灯を備えた自動車は、後退灯をつけて合図できます。腕による合図も認められています。",
    "ref": "道路交通法施行令 第21条第1項表",
    "quote": "後退するとき。その行為をしようとするとき。腕を車体の外に出して斜め下に伸ばし、かつ、手のひらを後ろに向けてその腕を前後に動かすこと、又は車両の保安基準に関する規定に定める後退灯を備える自動車にあつてはその後退灯を……それぞれつけること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-08-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M148",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "環状交差点で、入った直後の出口以外から出るときは、出る一つ前の出口の側方を通過したときに合図を始める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "入った直後の出口から出るときは、環状交差点に入ったときに合図を始めます。それ以外は、出る一つ前の出口の側方を通過したときです。",
    "ref": "道路交通法施行令 第21条第2項表",
    "quote": "環状交差点を出るとき。その行為をしようとする地点の直前の出口の側方を通過したとき（環状交差点に入つた直後の出口を出る場合にあつては、当該環状交差点に入つたとき）。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第2項表",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-08-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M149",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "環状交差点に入ってすぐの出口を出るときは、交差点に入った時点で合図を始める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "入ってすぐの出口を出る場合は、環状交差点へ入ったときに合図を始めます。",
    "ref": "道路交通法施行令 第21条第2項表",
    "quote": "環状交差点に入つた直後の出口を出る場合にあつては、当該環状交差点に入つたとき",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第2項表",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-08-010",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M150",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "右左折や進路変更をしないのに、方向指示器で合図を出してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "実際に右左折や進路変更などをしないときは、その合図を出してはいけません。",
    "ref": "道路交通法 第53条第4項",
    "quote": "合図に係る行為をしないのにかかわらず、当該合図をしてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第53条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-08-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "合図が要る行為（転回・環状交差点から出るなど）をすべて書くと、設問が長く読みにくい"
  },
  {
    "id": "D-M151",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "路面電車を追い越すときは、原則としてその左側を通行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "路面電車を追い越すときは、原則として左側を通ります。",
    "ref": "道路交通法 第28条第3項",
    "quote": "路面電車の左側を通行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第28条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-09-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "pairGroup": "P13"
  },
  {
    "id": "D-M152",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "軌道が道路の左側端にある場合も、路面電車の左側を必ず通行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "軌道が道路の左側端にある場合は、左側を通る決まりの例外です。",
    "ref": "道路交通法 第28条第3項ただし書",
    "quote": "ただし、軌道が道路の左側端に寄つて設けられているときは、この限りでない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第28条第3項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-09-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M153",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "追越しでは、前車の速度や進路、道路の状況に応じた安全な方法で進む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "追越しは、前車の動きや道路状況に合わせた安全な速度と方法で行います。",
    "ref": "道路交通法 第28条第4項",
    "quote": "前三項の場合においては、追越しをしようとする車両（次条において「後車」という。）は、反対の方向又は後方からの交通及び前車又は路面電車の前方の交通にも十分に注意し、かつ、前車又は路面電車の速度及び進路並びに道路の状況に応じて、できる限り安全な速度と方法で進行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第28条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-09-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M154",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "普通乗用車が、最高速度が高い後続車に追いつかれても、その車が追越し中に速度を上げてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通乗用車は、追いついた車が追越しを終えるまで速度を上げてはいけません。",
    "ref": "道路交通法 第27条第1項",
    "quote": "車両（……乗合自動車……及びトロリーバスを除く。）は、第二十二条第一項の規定に基づく政令で定める最高速度……が高い車両に追いつかれたときは、その追いついた車両が当該車両の追越しを終わるまで速度を増してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第27条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-09-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "普通乗用車より最高速度が高い車はほぼ無く、普通仮免の場面にならない。同じ条文（第27条第1項）は D-C085 で問う（10/15 本人の Excel の判断を受けて Claude が判断）"
  },
  {
    "id": "D-M155",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "車両通行帯のない道路で、普通乗用車が最高速度が高い車に追いつかれ、道路の中央との間に通れる余地がないときは、できる限り左端に寄って譲る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路の中央（一方通行では右側端）との間に通る余地がないときは、できる限り左端に寄って譲ります。",
    "ref": "道路交通法 第27条第2項",
    "quote": "車両（乗合自動車及びトロリーバスを除く。）は、車両通行帯の設けられた道路を通行する場合を除き、最高速度が高い車両に追いつかれ、かつ、道路の中央（当該道路が一方通行となつているときは、当該道路の右側端。以下この項において同じ。）との間にその追いついた車両が通行するのに十分な余地がない場合においては、第十八条第一項の規定にかかわらず、できる限り道路の左側端に寄つてこれに進路を譲らなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第27条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-09-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M156",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "一方通行でも、左に寄ると緊急自動車を妨げる場合は必ず左に寄る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "左に寄ると妨げる一方通行では、道路の右側に寄ります。",
    "ref": "道路交通法 第40条第1項",
    "quote": "交差点又はその附近において、緊急自動車が接近してきたときは、路面電車は交差点を避けて、車両（緊急自動車を除く。以下この条において同じ。）は交差点を避け、かつ、道路の左側（一方通行となつている道路においてその左側に寄ることが緊急自動車の通行を妨げることとなる場合にあつては、道路の右側。次項において同じ。）に寄つて一時停止しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第40条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-09-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "excludedReason": "D-C115 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
  },
  {
    "id": "D-M157",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "優先道路を通行中でも、その優先道路にある交差点では追越しが一律に禁止される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "優先道路を通行している場合、その優先道路にある交差点は一律の追越し禁止から除かれます。",
    "ref": "道路交通法 第30条第3号",
    "quote": "当該車両が第三十六条第二項に規定する優先道路を通行している場合における当該優先道路にある交差点を除く。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第30条第3号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-09-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M158",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "道路の曲がり角付近の追越し禁止は、特定小型原動機付自転車等を追い越す場合にも同じように適用される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この場所の追越し禁止では、特定小型原動機付自転車等は対象から除かれています。",
    "ref": "道路交通法 第30条本文",
    "quote": "車両は、道路標識等により追越しが禁止されている道路の部分及び次に掲げるその他の道路の部分においては、他の車両（特定小型原動機付自転車等を除く。）を追い越すため、進路を変更し、又は前車の側方を通過してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第30条本文",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-09-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M159",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "前車に追いつき、進路を変えてその前へ出る行為は追越しに当たる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "前車に追いつき、進路を変えて、その側方を通過し前方に出る行為が追越しです。",
    "ref": "道路交通法 第2条第1項第21号",
    "quote": "この法律において、次の各号に掲げる用語の意義は、それぞれ当該各号に定めるところによる。……二十一追越し車両が他の車両等に追い付いた場合において、その進路を変えてその追い付いた車両等の側方を通過し、かつ、当該車両等の前方に出ることをいう。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第2条第1項第21号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-09-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "pairGroup": "P06"
  },
  {
    "id": "D-M160",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "緊急自動車は、やむを得ない必要があっても道路の右側部分へはみ出せない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "緊急自動車は、追越しなどやむを得ない必要があるとき、右側部分へはみ出せます。",
    "ref": "道路交通法 第39条第1項",
    "quote": "緊急自動車（消防用自動車、救急用自動車その他の政令で定める自動車で、当該緊急用務のため、政令で定めるところにより、運転中のものをいう。以下同じ。）は、第十七条第五項に規定する場合のほか、追越しをするためその他やむを得ない必要があるときは、同条第四項の規定にかかわらず、道路の右側部分にその全部又は一部をはみ出して通行することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第39条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-09-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M161",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "交差点付近以外で消防用車両が接近しても、普通乗用車はその通行を妨げてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "交差点付近以外でも、消防用車両の通行を妨げてはいけません。",
    "ref": "道路交通法 第41条の2第2項",
    "quote": "前項以外の場所において、消防用車両が接近してきたときは、車両（緊急自動車及び消防用車両を除く。）は、当該消防用車両の通行を妨げてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第41条の2第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-09-006",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M162",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "安全地帯がなく、停車中の路面電車で乗客がまだ乗り降りしているときは、普通乗用車はその後方で停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "乗り降りの間は、路面電車の後方で停止します。乗り降りが終わっても、降りた人が前方で路面電車の左側を横断している間は停止を続けます。",
    "ref": "道路交通法 第31条",
    "quote": "車両は、乗客の乗降のため停車中の路面電車に追いついたときは、当該路面電車の乗客が乗降を終わり、又は当該路面電車から降りた者で当該車両の前方において当該路面電車の左側を横断し、若しくは横断しようとしているものがいなくなるまで、当該路面電車の後方で停止しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第31条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-09-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "pairGroup": "P14"
  },
  {
    "id": "D-M163",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "安全地帯がなく、路面電車から降りた人が前方で左側を横断中でも、その横を通ってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "降りた人が前方で左側を横断している間は、原則として路面電車の後方で停止します。",
    "ref": "道路交通法 第31条",
    "quote": "車両は、乗客の乗降のため停車中の路面電車に追いついたときは、当該路面電車の乗客が乗降を終わり、又は当該路面電車から降りた者で当該車両の前方において当該路面電車の左側を横断し、若しくは横断しようとしているものがいなくなるまで、当該路面電車の後方で停止しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第31条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-09-008",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M164",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "自動車を運転するには、原則として公安委員会の運転免許を受けなければならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "自動車を運転するには、原則として公安委員会の運転免許が必要です。",
    "ref": "道路交通法 第84条第1項",
    "quote": "自動車及び一般原動機付自転車（以下「自動車等」という。）を運転しようとする者は、公安委員会の運転免許（以下「免許」という。）を受けなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第84条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M165",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "第一種免許は、全部で五種類に分かれている。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "第一種免許は、五種類ではなく十種類に分かれています。",
    "ref": "道路交通法 第84条第3項",
    "quote": "第一種免許を分けて、大型自動車免許……及び牽けん引免許の十種類とする。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第84条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M166",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "第二種免許は、全部で五種類に分かれている。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "第二種免許は、全部で五種類に分かれています。",
    "ref": "道路交通法 第84条第4項",
    "quote": "第二種免許を分けて、大型自動車第二種免許（以下「大型第二種免許」という。）、中型自動車第二種免許（以下「中型第二種免許」という。）、普通自動車第二種免許（以下「普通第二種免許」という。）、大型特殊自動車第二種免許（以下「大型特殊第二種免許」という。）及び牽けん引第二種免許の五種類とする。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第84条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M167",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "仮免許は、大型・中型・準中型・普通の四種類である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "仮免許は、大型・中型・準中型・普通の四種類です。",
    "ref": "道路交通法 第84条第5項",
    "quote": "仮免許を分けて、大型自動車仮免許（以下「大型仮免許」という。）、中型自動車仮免許（以下「中型仮免許」という。）、準中型自動車仮免許（以下「準中型仮免許」という。）及び普通自動車仮免許（以下「普通仮免許」という。）の四種類とする。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第84条第5項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M168",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通免許では、小型特殊自動車を運転できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通免許では、小型特殊自動車も運転できます。",
    "ref": "道路交通法 第85条第2項",
    "quote": "普通免許小型特殊自動車及び一般原動機付自転車",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第85条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-005",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M169",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "第一種免許だけで、事業の旅客を運ぶ目的の旅客自動車を運転できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "事業の旅客を運ぶ目的では、対応する第二種免許が必要です。",
    "ref": "道路交通法 第86条第1項",
    "quote": "次の表の上欄に掲げる自動車で旅客自動車であるものを旅客自動車運送事業に係る旅客を運送する目的で運転しようとする者は、当該自動車の種類に応じ、それぞれ同表の下欄に掲げる第二種免許を受けなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第86条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-007",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M170",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "免許には、運転できる自動車の種類を限定する条件が付くことがある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "安全のため、運転できる自動車の種類を限定する条件が付くことがあります。",
    "ref": "道路交通法 第91条",
    "quote": "公安委員会は、道路における危険を防止し、その他交通の安全を図るため必要があると認めるときは、必要な限度において、免許に、その免許に係る者の身体の状態又は運転の技能に応じ、その者が運転することができる自動車等の種類を限定し、その他自動車等を運転するについて必要な条件を付し、及びこれを変更することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第91条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-009",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M171",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通仮免許で練習するときは、普通自動車を運転できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "普通仮免許では、条件を満たして普通自動車を練習運転できます。",
    "ref": "道路交通法 第87条第2項",
    "quote": "大型仮免許を受けた者は大型自動車、中型自動車、準中型自動車又は普通自動車を、中型仮免許を受けた者は中型自動車、準中型自動車又は普通自動車を、準中型仮免許を受けた者は準中型自動車又は普通自動車を、普通仮免許を受けた者は普通自動車を、練習のため又は試験等において運転することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第87条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-010",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M172",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "仮免許で、運転代行の普通自動車を運転できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "仮免許では、運転代行の普通自動車を運転できません。",
    "ref": "道路交通法 第87条第5項",
    "quote": "仮免許を受けた者は、第二項の規定にかかわらず、代行運転普通自動車を運転することはできない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第87条第5項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-011",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M173",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "仮免許の有効期間は、原則として適性試験を受けた日から六か月である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "仮免許の有効期間は、原則として適性試験を受けた日から六か月です。",
    "ref": "道路交通法 第87条第6項",
    "quote": "仮免許の有効期間は、……を受けた日から起算して六月とする。ただし、当該期間が満了するまでの間に、……又は普通仮免許を受けた者が大型自動車、中型自動車、準中型自動車若しくは普通自動車を運転することができる第一種免許若しくは第二種免許を受けたときは、当該仮免許は、その効力を失う。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第87条第6項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-012",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M174",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通免許は、17歳6か月になれば受けられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通免許は18歳未満では受けられません。17歳6か月は普通仮免許の年齢です。",
    "ref": "道路交通法 第88条第1項第1号",
    "quote": "次の各号のいずれかに該当する者に対しては、第一種免許又は第二種免許を与えない。……準中型免許、普通免許、大型特殊免許、大型二輪免許及び牽けん引免許にあつては十八歳に、普通二輪免許、小型特殊免許及び原付免許にあつては十六歳に、それぞれ満たない者",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第88条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-013",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M175",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通仮免許は、17歳6か月未満では受けられない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "普通仮免許は、17歳6か月未満では受けられません。",
    "ref": "道路交通法 第88条第2項",
    "quote": "大型仮免許にあつては二十一歳（政令で定める者にあつては、十九歳）に、中型仮免許にあつては二十歳（政令で定める者にあつては、十九歳）に、準中型仮免許及び普通仮免許にあつては十七歳六か月に、それぞれ満たない者に対しては、仮免許を与えない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第88条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-014",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）",
    "pairGroup": "P09"
  },
  {
    "id": "D-M176",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "現在受けている免許と同じ種類の免許を、重ねて受けられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "現在受けている免許と同じ種類の免許を重ねて受けることはできません。",
    "ref": "道路交通法 第88条第3項",
    "quote": "当該免許と同一の種類の免許を重ねて受けることができない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第88条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7-10-015",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M177",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "大型特殊免許は、18歳未満では受けられない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "大型特殊免許を受けられる年齢は18歳からです。",
    "ref": "道路交通法 第88条第1項第1号",
    "quote": "次の各号のいずれかに該当する者に対しては、第一種免許又は第二種免許を与えない。……準中型免許、普通免許、大型特殊免許、大型二輪免許及び牽けん引免許にあつては十八歳に、普通二輪免許、小型特殊免許及び原付免許にあつては十六歳に、それぞれ満たない者",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第88条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-10-001",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M178",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "大型二輪免許は、16歳になれば受けられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "大型二輪免許は18歳未満では受けられません。",
    "ref": "道路交通法 第88条第1項第1号",
    "quote": "次の各号のいずれかに該当する者に対しては、第一種免許又は第二種免許を与えない。……準中型免許、普通免許、大型特殊免許、大型二輪免許及び牽けん引免許にあつては十八歳に、普通二輪免許、小型特殊免許及び原付免許にあつては十六歳に、それぞれ満たない者",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第88条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-10-002",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M179",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通二輪免許は、16歳未満では受けられない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "普通二輪免許を受けられる年齢は16歳からです。",
    "ref": "道路交通法 第88条第1項第1号",
    "quote": "次の各号のいずれかに該当する者に対しては、第一種免許又は第二種免許を与えない。……準中型免許、普通免許、大型特殊免許、大型二輪免許及び牽けん引免許にあつては十八歳に、普通二輪免許、小型特殊免許及び原付免許にあつては十六歳に、それぞれ満たない者",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第88条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-10-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M180",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "原付免許は、15歳で受けることができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "原付免許は16歳未満では受けられません。",
    "ref": "道路交通法 第88条第1項第1号",
    "quote": "次の各号のいずれかに該当する者に対しては、第一種免許又は第二種免許を与えない。……準中型免許、普通免許、大型特殊免許、大型二輪免許及び牽けん引免許にあつては十八歳に、普通二輪免許、小型特殊免許及び原付免許にあつては十六歳に、それぞれ満たない者",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第88条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7B-10-004",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M181",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "普通仮免許の有効期間内に普通免許を受けても、その仮免許は6か月間そのまま有効である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通免許など所定の上位免許を受けると、有効期間内でも普通仮免許は効力を失います。",
    "ref": "道路交通法 第87条第6項ただし書",
    "quote": "普通自動車を運転することができる第一種免許若しくは第二種免許を受けたときは、当該仮免許は、その効力を失う。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第87条第6項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7C-10-003",
    "reviewMethod": "M7：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → 本人が取捨（2026-10-13）／M7 独立照合（GPT、2026-10-14）を受けて引用・根拠欄・設問を直す（本人OK）"
  },
  {
    "id": "D-M182",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "正当な理由なく、著しく迷惑な騒音を出す方法で急加速してはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "周囲に著しい迷惑をかける騒音を出す急加速は禁止されています。",
    "ref": "道路交通法 第71条第5号の3",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……五の三正当な理由がないのに、著しく他人に迷惑を及ぼすこととなる騒音を生じさせるような方法で、……その速度を急激に増加させ、……ないこと。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第5号の3",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-01-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M183",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "道路交通法上の夜間とは、日没時から翌日の日出時までをいう。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "夜間は、日が沈んでから翌朝に日が出るまでです。",
    "ref": "道路交通法 第52条第1項",
    "quote": "夜間（日没時から日出時までの時間をいう。以下この条及び第六十三条の九第二項において同じ。）",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第52条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M184",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "夜間に道路を走る普通乗用車は、前照灯や尾灯などをつける。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "夜間に道路上を走る車は、定められた灯火を点灯します。",
    "ref": "道路交通法 第52条第1項",
    "quote": "車両等は、夜間……、道路にあるときは、政令で定めるところにより、前照灯、車幅灯、尾灯その他の灯火をつけなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第52条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-002",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M185",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "夜間に対向車と行き違う際、相手の通行を妨げるおそれがあれば、減光などをする。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "強い光で対向車を妨げるおそれがある場合は、灯火を減光するなど操作します。",
    "ref": "道路交通法 第52条第2項",
    "quote": "車両等が、夜間……、他の車両等と行き違う場合……において、他の車両等の交通を妨げるおそれがあるときは、……灯火を消し、灯火の光度を減ずる等灯火を操作しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第52条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-003",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M186",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "夜間に前車の直後を走り、光で前車を妨げるおそれがあるときは、灯火を操作する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "前車の直後でも、光が交通を妨げるおそれがあれば減光などが必要です。",
    "ref": "道路交通法 第52条第2項",
    "quote": "車両等が、夜間……他の車両等の直後を進行する場合において、他の車両等の交通を妨げるおそれがあるときは、……灯火を消し、灯火の光度を減ずる等灯火を操作しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第52条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-004",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M187",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "警音器使用区間の見通しがきかない交差点では、警音器を鳴らす。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "指定区間内の見通しがきかない交差点では、警音器を使います。",
    "ref": "道路交通法 第54条第1項第2号",
    "quote": "車両等……の運転者は、次の各号に掲げる場合においては、警音器を鳴らさなければならない。……道路標識等により指定された区間における左右の見とおしのきかない交差点……を通行しようとするとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第54条第1項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-005",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M188",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "警音器使用区間の見通しがきかない上り坂の頂上では、警音器を鳴らす。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "指定区間内の見通しがきかない上り坂の頂上では、警音器を使います。",
    "ref": "道路交通法 第54条第1項第2号",
    "quote": "車両等……の運転者は、次の各号に掲げる場合においては、警音器を鳴らさなければならない。……道路標識等により指定された区間における……見とおしのきかない上り坂の頂上を通行しようとするとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第54条第1項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-007",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M189",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "普通自動車対応免許を持つ75歳以上の人は、普通車の前後に所定の標識を付ける。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "75歳以上の運転者は、普通車の前面と後面に高齢運転者標識を表示します。",
    "ref": "道路交通法 第71条の5第3項",
    "quote": "普通自動車を運転することができる免許……を受けた者で七十五歳以上のものは、……普通自動車の前面及び後面に内閣府令で定める様式の標識を付けないで普通自動車を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条の5第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-008",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）",
    "excludedReason": "道路交通法 附則で第71条の5第3項は当分の間適用しないため、答え○は誤り（照合6で GPT が指摘、10/15 本人OK）"
  },
  {
    "id": "D-M190",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "政令で定める程度の聴覚障害を理由に条件が付いた普通免許の人は、普通車の前後に所定の標識を付ける。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "政令で定める程度の聴覚障害を理由に免許に条件が付いた人は、普通車の前面と後面に所定の標識（聴覚障害者標識）を表示します。",
    "ref": "道路交通法 第71条の6第2項",
    "quote": "普通自動車対応免許を受けた者で政令で定める程度の聴覚障害のあることを理由に当該普通自動車対応免許に条件を付されているものは、……普通自動車の前面及び後面に内閣府令で定める様式の標識を付けないで普通自動車を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条の6第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-009",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M191",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "肢体不自由を理由に免許条件があり、運転へ影響するおそれがある人は、普通車の前後に標識を付けるよう努める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "身体機能が運転へ影響するおそれがある場合は、身体障害者標識の表示に努めます。",
    "ref": "道路交通法 第71条の6第3項",
    "quote": "普通自動車対応免許を受けた者で肢体不自由であることを理由に当該普通自動車対応免許に条件を付されているものは、当該肢体不自由が自動車の運転に影響を及ぼすおそれがあるときは、……普通自動車の前面及び後面に……標識を付けて普通自動車を運転するように努めなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条の6第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-010",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M192",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "疾病のため座席ベルトの装着が療養上適当でない運転者は、装着義務の例外になる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "病気のためベルトの装着が療養上適切でない場合は、運転者の装着義務に例外があります。",
    "ref": "道路交通法 第71条の3第1項ただし書",
    "quote": "自動車……の運転者は、……座席ベルト……を装着しないで自動車を運転してはならない。ただし、疾病のため座席ベルトを装着することが療養上適当でない者が自動車を運転するとき、……は、この限りでない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条の3第1項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-011",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M193",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "免許歴などの除外条件に当たらない普通免許取得後1年未満の人は、普通車の前後に初心者標識を付ける。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "普通免許を受けてから通算1年未満の人は、原則として普通車の前後に初心者標識を表示します。",
    "ref": "道路交通法 第71条の5第2項",
    "quote": "準中型自動車免許又は普通自動車免許を受けた者で、……免許を受けていた期間……が通算して一年に達しないもの（……を除く。）は、……普通自動車の前面及び後面に……標識を付けないで普通自動車を運転してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条の5第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-01-012",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M194",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "自転車横断帯の上では、危険防止などの例外を除き、停車も駐車もできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "自転車横断帯は、原則として停車も駐車も禁止される場所です。",
    "ref": "道路交通法 第44条第1項第1号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……一交差点、横断歩道、自転車横断帯、踏切、軌道敷内、坂の頂上付近、勾配の急な坂又はトンネル",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M195",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "軌道敷内では、危険防止などの例外を除き、停車も駐車もできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "軌道敷内は、原則として停車も駐車も禁止される場所です。",
    "ref": "道路交通法 第44条第1項第1号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……一交差点、横断歩道、自転車横断帯、踏切、軌道敷内、坂の頂上付近、勾配の急な坂又はトンネル",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-002",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M196",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "坂の頂上付近では、危険防止などの例外を除き、停車も駐車もできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "坂の頂上付近は、原則として停車も駐車も禁止される場所です。",
    "ref": "道路交通法 第44条第1項第1号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……一交差点、横断歩道、自転車横断帯、踏切、軌道敷内、坂の頂上付近、勾配の急な坂又はトンネル",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-003",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M197",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "勾配の急な坂では、上り坂だけが駐停車禁止で、下り坂は駐停車できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "勾配の急な坂は、上り下りを問わず、原則として停車も駐車も禁止です。",
    "ref": "道路交通法 第44条第1項第1号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……一交差点、横断歩道、自転車横断帯、踏切、軌道敷内、坂の頂上付近、勾配の急な坂又はトンネル",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-004",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M198",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "トンネル内では、危険防止などの例外を除き、停車も駐車もできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "トンネル内は、車両通行帯の有無にかかわらず、原則として停車も駐車も禁止です。",
    "ref": "道路交通法 第44条第1項第1号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……一交差点、横断歩道、自転車横断帯、踏切、軌道敷内、坂の頂上付近、勾配の急な坂又はトンネル",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-005",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M199",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "交差点の側端から4mの場所では、危険防止などの例外を除き停車も駐車もできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点の側端から5m以内は、原則として停車も駐車も禁止です。",
    "ref": "道路交通法 第44条第1項第2号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……二交差点の側端又は道路の曲がり角から五メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-006",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M200",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "自転車横断帯の前後4m以内では、危険防止などの例外を除き停車も駐車もできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "自転車横断帯の前後5m以内は、原則として停車も駐車も禁止です。",
    "ref": "道路交通法 第44条第1項第3号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……三横断歩道又は自転車横断帯の前後の側端からそれぞれ前後に五メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第3号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-007",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M201",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "安全地帯の左側部分の前後9m以内では、危険防止などの例外を除き、歩行者がいなくても停車や駐車はできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "安全地帯の左側部分と、その前後10m以内は、歩行者の有無にかかわらず原則として駐停車禁止です。",
    "ref": "道路交通法 第44条第1項第4号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、法令の規定若しくは警察官の命令により、又は危険を防止するため一時停止する場合のほか、停車し、又は駐車してはならない。……四安全地帯が設けられている道路の当該安全地帯の左側の部分及び当該部分の前後の側端からそれぞれ前後に十メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第44条第1項第4号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-008",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M202",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "道路工事区域の側端から4mの場所では、警察署長の許可がなければ駐車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路工事区域の側端から5m以内は、原則として駐車禁止です。",
    "ref": "道路交通法 第45条第1項第2号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、駐車してはならない。ただし、公安委員会の定めるところにより警察署長の許可を受けたときは、この限りでない。……二道路工事が行なわれている場合における当該工事区域の側端から五メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第45条第1項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-009",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M203",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "消防用機械器具の置場の側端から4mの場所では、許可がなければ駐車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "消防用機械器具の置場の側端から5m以内は、原則として駐車禁止です。",
    "ref": "道路交通法 第45条第1項第3号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、駐車してはならない。ただし、公安委員会の定めるところにより警察署長の許可を受けたときは、この限りでない。……三消防用機械器具の置場若しくは消防用防火水槽そうの側端又はこれらの道路に接する出入口から五メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第45条第1項第3号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-010",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M204",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "指定消防水利の標識から4mの場所では、警察署長の許可がなければ駐車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "指定消防水利の標識から5m以内は、原則として駐車禁止です。",
    "ref": "道路交通法 第45条第1項第4号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、駐車してはならない。ただし、公安委員会の定めるところにより警察署長の許可を受けたときは、この限りでない。……四消火栓、指定消防水利の標識が設けられている位置又は消防用防火水槽そうの吸水口若しくは吸管投入孔から五メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第45条第1項第4号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-011",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M205",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "消防用防火水槽の吸水口から4mの場所では、許可がなければ駐車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "消防用防火水槽の吸水口から5m以内は、原則として駐車禁止です。",
    "ref": "道路交通法 第45条第1項第4号",
    "quote": "車両は、……次に掲げるその他の道路の部分においては、駐車してはならない。ただし、公安委員会の定めるところにより警察署長の許可を受けたときは、この限りでない。……四消火栓、指定消防水利の標識が設けられている位置又は消防用防火水槽そうの吸水口若しくは吸管投入孔から五メートル以内の部分",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第45条第1項第4号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-012",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M206",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "ほかの駐車禁止に当たらず、貨物の積卸し中に運転者が車を離れない場合、右側に3.5mの余地がなくても駐車できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "ほかの駐車禁止に当たらず、積卸し中に運転者が車を離れない場合は、右側の余地に関する例外があります。",
    "ref": "道路交通法 第45条第2項ただし書",
    "quote": "車両は、……当該車両の右側の道路上に三・五メートル……以上の余地がないこととなる場所においては、駐車してはならない。ただし、貨物の積卸しを行なう場合で運転者がその車両を離れないとき、……は、この限りでない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第45条第2項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-013",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M207",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "ほかの駐車禁止に当たらず、傷病者を救護するためやむを得ない場合でも、右側に3.5mの余地がなければ駐車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "ほかの駐車禁止に当たらない場合、傷病者の救護のためやむを得ないときは右側の余地に関する例外があります。",
    "ref": "道路交通法 第45条第2項ただし書",
    "quote": "車両は、……当該車両の右側の道路上に三・五メートル……以上の余地がないこととなる場所においては、駐車してはならない。ただし、……傷病者の救護のためやむを得ないときは、この限りでない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第45条第2項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-04-014",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M208",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "歩道とは、歩行者が通るため、縁石や柵などで区画された道路の部分をいう。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩道は、歩行者の通行用に工作物で区切られた道路部分です。",
    "ref": "道路交通法 第2条第1項第2号",
    "quote": "二歩道歩行者の通行の用に供するため縁石線又は柵その他これに類する工作物によつて区画された道路の部分をいう。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第2条第1項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M209",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "路側帯は、歩道がある側の道路にも必ず設けられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "路側帯は、歩道のない道路や、歩道のない側の路端寄りに設けられます。",
    "ref": "道路交通法 第2条第1項第3号の4",
    "quote": "三の四路側帯歩行者の通行の用に供し、又は車道の効用を保つため、歩道の設けられていない道路又は道路の歩道の設けられていない側の路端寄りに設けられた帯状の道路の部分で、道路標示によつて区画されたものをいう。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第2条第1項第3号の4",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-002",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M210",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "車両通行帯は、道路標示によって車両が通る部分を示した道路の部分である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車両通行帯は、路面の道路標示によって通行部分が示されたものです。",
    "ref": "道路交通法 第2条第1項第7号",
    "quote": "七車両通行帯車両が道路の定められた部分を通行すべきことが道路標示により示されている場合における当該道路標示により示されている道路の部分をいう。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第2条第1項第7号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-003",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M211",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "運転者が車を離れず、貨物の積卸しだけで5分以内の停止なら、駐車には当たらない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "貨物の積卸しだけで5分以内の停止は、駐車の定義から除かれます。",
    "ref": "道路交通法 第2条第1項第18号",
    "quote": "十八駐車車両等が……貨物の積卸し、故障その他の理由により継続的に停止すること（貨物の積卸しのための停止で五分を超えない時間内のもの及び人の乗降のための停止を除く。）",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第2条第1項第18号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-004",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M212",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "運転者が車を離れず、人を乗り降りさせるためだけに停止する場合は、駐車に当たらない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "人の乗降だけを目的とする停止は、駐車の定義から除かれます。",
    "ref": "道路交通法 第2条第1項第18号",
    "quote": "十八駐車車両等が……継続的に停止すること（貨物の積卸しのための停止で五分を超えない時間内のもの及び人の乗降のための停止を除く。）",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第2条第1項第18号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-005",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M213",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "車を止めて運転者が離れ、直ちに運転できない状態は、短時間でも駐車に当たる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "時間の長さよりも、運転者がすぐ運転できない状態かどうかで駐車になります。",
    "ref": "道路交通法 第2条第1項第18号",
    "quote": "十八駐車車両等が……又は車両等が停止……をし、かつ、当該車両等の運転をする者……がその車両等を離れて直ちに運転することができない状態にあることをいう。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第2条第1項第18号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-006",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M214",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "停車とは、車両が停止することのうち、駐車に当たらないものをいう。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "停車は、停止のうち駐車の定義に当たらないものです。",
    "ref": "道路交通法 第2条第1項第19号",
    "quote": "十九停車車両等が停止することで駐車以外のものをいう。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第2条第1項第19号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-007",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M215",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "車両通行禁止の対象となる車は、警察署長の許可を受けていなければ、その道路を通行できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "標識などで車両の通行が禁止された道路は、許可などがなければ通れません。",
    "ref": "道路交通法 第8条第1項・第2項",
    "quote": "歩行者等又は車両等は、道路標識等によりその通行を禁止されている道路又はその部分を通行してはならない。……警察署長が政令で定めるやむを得ない理由があると認めて許可をしたときは、……通行することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第8条第1項・第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-008",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M216",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "中央線がない道路で、軌道が道路の端に寄っているときは、軌道敷を除いた部分の中央を道路の中央とする。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "中央線がなければ、左側通行の基準となる中央は、端に寄った軌道敷を除いて判断します。",
    "ref": "道路交通法 第17条第4項",
    "quote": "車両は、道路……の中央（軌道が道路の側端に寄つて設けられている場合においては当該道路の軌道敷を除いた部分の中央とし、道路標識等による中央線が設けられているときはその中央線の設けられた道路の部分を中央とする。……）から左の部分……を通行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第17条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-010",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M217",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "標識などで車両の通行用でないと示された道路部分には、車両で入ってはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "安全地帯と同様に、車両用でないと示された部分には入れません。",
    "ref": "道路交通法 第17条第6項",
    "quote": "車両は、安全地帯又は道路標識等により車両の通行の用に供しない部分であることが表示されているその他の道路の部分に入つてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第17条第6項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-011",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M218",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "追越しや道路事情でやむを得ない場合を除き、車両通行帯のない道路では、自転車は道路の左側端に寄って通行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "自転車などの軽車両は、車両通行帯のない道路では、追越しのときなどを除き、左側端に寄って通行します。",
    "ref": "道路交通法 第18条第1項",
    "quote": "車両（トロリーバスを除く。）は、車両通行帯の設けられた道路を通行する場合を除き、……特定小型原動機付自転車及び軽車両……にあつては道路の左側端に寄つて、それぞれ当該道路を通行しなければならない。ただし、追越しをするとき、……又は道路の状況その他の事情によりやむを得ないときは、この限りでない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第18条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-012",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M219",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "車両通行帯のない道路でも、追越し中は道路の左側寄りを外れることがある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "追越しをするときは、左側寄り通行の例外になります。",
    "ref": "道路交通法 第18条第1項ただし書",
    "quote": "自動車及び一般原動機付自転車……にあつては道路の左側に寄つて……通行しなければならない。ただし、追越しをするとき、……は、この限りでない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第18条第1項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-013",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M220",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "車道を同方向に進む自転車の右側を、自動車が追越し以外で通過するとき、自転車はできる限り左端に寄る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "右側を通過される自転車なども、できる限り左側端に寄って通行します。",
    "ref": "道路交通法 第18条第4項",
    "quote": "前項に規定する場合においては、当該特定小型原動機付自転車等は、できる限り道路の左側端に寄つて通行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第18条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-014",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M221",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "右折するために軌道敷を横切る場合は、軌道敷内通行禁止の例外になる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "右折のため軌道敷を横切ることは認められています。",
    "ref": "道路交通法 第21条第1項",
    "quote": "車両……は、左折し、右折し、横断し、若しくは転回するため軌道敷を横切る場合又は危険防止のためやむを得ない場合を除き、軌道敷内を通行してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第21条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-015",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M222",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "道路を横断するため軌道敷を横切る場合も、軌道敷内通行禁止の例外にならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路を横断するため軌道敷を横切る場合は、禁止の例外です。",
    "ref": "道路交通法 第21条第1項",
    "quote": "車両……は、左折し、右折し、横断し、若しくは転回するため軌道敷を横切る場合又は危険防止のためやむを得ない場合を除き、軌道敷内を通行してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第21条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-016",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M223",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "転回するため軌道敷を横切る場合は、軌道敷内通行禁止の例外になる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "転回のため軌道敷を横切ることは認められています。",
    "ref": "道路交通法 第21条第1項",
    "quote": "車両……は、左折し、右折し、横断し、若しくは転回するため軌道敷を横切る場合又は危険防止のためやむを得ない場合を除き、軌道敷内を通行してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第21条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-017",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M224",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "軌道敷を除いた左側部分が通行に狭すぎるときは、路面電車を妨げず軌道敷内を通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "左側の通行部分が十分でない場合は、路面電車を妨げないことを条件に通行できます。",
    "ref": "道路交通法 第21条第2項第1号",
    "quote": "車両は、次の各号に掲げる場合においては、前項の規定にかかわらず、軌道敷内を通行することができる。この場合において、車両は、路面電車の通行を妨げてはならない。……当該道路の左側部分から軌道敷を除いた部分の幅員が当該車両の通行のため十分なものでないとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第21条第2項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-018",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M225",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "標識などで軌道敷内の通行を認められた自動車は、路面電車を妨げず通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "標識などで認められた自動車も、路面電車を妨げないことが条件です。",
    "ref": "道路交通法 第21条第2項第3号",
    "quote": "車両は、次の各号に掲げる場合においては、前項の規定にかかわらず、軌道敷内を通行することができる。この場合において、車両は、路面電車の通行を妨げてはならない。……道路標識等により軌道敷内を通行することができることとされている自動車が通行するとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第21条第2項第3号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-019",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M226",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "一方通行でない道路から普通乗用車で駐車場へ右折するときは、道路の中央へ寄り徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "一方通行でない道路では、右折前に中央へ寄り、徐行します。",
    "ref": "道路交通法 第25条第2項",
    "quote": "車両……は、道路外に出るため右折するときは、あらかじめその前からできる限り道路の中央（当該道路が一方通行となつているときは、当該道路の右側端）に寄り、かつ、徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第25条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-020",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M227",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "駐車禁止場所の一部でも、標識などで駐車できると示されていれば駐車できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "禁止場所でも、標識などで駐車可能とされた部分には例外があります。",
    "ref": "道路交通法 第46条",
    "quote": "車両は、……駐車を禁止する道路の部分の一部について、道路標識等により停車又は駐車をすることができることとされているときは、これらの規定にかかわらず、停車し、又は駐車することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第46条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-04-021",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M228",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "優先道路のない同程度の道幅で交通整理のない交差点を普通乗用車で通るとき、交差道路の路面電車を妨げてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "この条件で普通乗用車が交差点を通るときは、交差道路を通る路面電車の進行を妨げないようにします。",
    "ref": "道路交通法 第36条第1項第1号",
    "quote": "車両等は、交通整理の行なわれていない交差点においては、次項の規定が適用される場合を除き、……進行妨害をしてはならない。……一車両である場合……交差道路を通行する路面電車",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第36条第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-05-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M229",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "優先道路のない同程度の道幅で交通整理のない交差点で路面電車同士が交わるときは、右方から来る路面電車を優先する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この条件では、左方から来る路面電車の進行を妨げてはいけません。",
    "ref": "道路交通法 第36条第1項第2号",
    "quote": "車両等は、交通整理の行なわれていない交差点においては、次項の規定が適用される場合を除き、……進行妨害をしてはならない。……二路面電車である場合交差道路を左方から進行してくる路面電車",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第36条第1項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-05-002",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M230",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "自分が優先道路でない、交通整理のない交差点で、交差道路が明らかに広いときは、進入時に徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "自分が優先道路でなく、交差道路が明らかに広いときは、交差点へ入る際に徐行します。",
    "ref": "道路交通法 第36条第3項",
    "quote": "車両等（優先道路を通行している車両等を除く。）は、交通整理の行なわれていない交差点に入ろうとする場合において、……その通行している道路の幅員よりも交差道路の幅員が明らかに広いものであるときは、徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第36条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-05-003",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M231",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "交差点に入るときは、交差道路を通行する車にも特に注意する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点に入るときは、交差道路を通る車の動きに特に注意し、安全な速度と方法で進みます。",
    "ref": "道路交通法 第36条第4項",
    "quote": "車両等は、交差点に入ろうとし、及び交差点内を通行するときは、……交差道路を通行する車両等、……に特に注意し、かつ、できる限り安全な速度と方法で進行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第36条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-05-004",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M232",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "交差点内では、状況に応じて、できる限り安全な速度と方法で進む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点では周囲の状況に合わせ、安全な速度と方法で進まなければなりません。",
    "ref": "道路交通法 第36条第4項",
    "quote": "車両等は、交差点に入ろうとし、及び交差点内を通行するときは、当該交差点の状況に応じ、……できる限り安全な速度と方法で進行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第36条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-05-005",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M233",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "踏切の遮断機が完全に閉じている間は、警報音が止まっていても踏切に入ってはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "遮断機が閉じている間は、警報音の有無にかかわらず踏切へ入れません。",
    "ref": "道路交通法 第33条第2項",
    "quote": "車両等は、踏切を通過しようとする場合において、踏切の遮しや断機が閉じようとし、若しくは閉じている間又は踏切の警報機が警報している間は、当該踏切に入つてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第33条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-05-006",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M234",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "自分が進めば、他車が危険回避のため急に減速するおそれがある状態は、進行妨害に当たる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "相手が危険を避けるため急に速度を変えるおそれがあれば、進行妨害に当たります。",
    "ref": "道路交通法 第2条第1項第22号",
    "quote": "二十二進行妨害車両等が、進行を継続し、又は始めた場合においては危険を防止するため他の車両等がその速度又は方向を急に変更しなければならないこととなるおそれがあるときに、その進行を継続し、又は始めることをいう。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第2条第1項第22号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-05-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M235",
    "reviewStatus": "excluded",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "右折方法の指定がない一方通行から普通乗用車で右折するときは、交差点中心の内側を徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "一方通行でも、右折時は交差点中心の内側を徐行します。",
    "ref": "道路交通法 第34条第4項",
    "quote": "自動車、一般原動機付自転車又はトロリーバスは、一方通行となつている道路において右折するときは、……交差点の中心の内側……を徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第34条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-05-002",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）",
    "excludedReason": "D-M236 とほぼ同じ問題（GPT の500問点検 10/15、本人OK）"
  },
  {
    "id": "D-M236",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "普通乗用車が一方通行の道路で右折するときは、交差点の中心の内側（通行部分の指定があればその部分）を徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "一方通行の道路で右折するときは、あらかじめ道路の右側端に寄り、交差点の中心の内側（指定があればその部分）を徐行します。",
    "ref": "道路交通法 第34条第4項",
    "quote": "自動車、一般原動機付自転車又はトロリーバスは、一方通行となつている道路において右折するときは、……あらかじめその前からできる限り道路の右側端に寄り、かつ、交差点の中心の内側（道路標識等により通行すべき部分が指定されているときは、その指定された部分）を徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第34条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-05-003",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M237",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "環状交差点では、状況に応じて、できる限り安全な速度と方法で進む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "進入時も交差点内でも、周囲の状況に応じた安全な速度と方法が必要です。",
    "ref": "道路交通法 第37条の2第3項",
    "quote": "車両等は、環状交差点に入ろうとし、及び環状交差点内を通行するときは、……当該環状交差点の状況に応じ、……できる限り安全な速度と方法で進行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第37条の2第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-05-004",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M238",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "渋滞で自転車横断帯の上に止まるおそれがあるときは、その中へ入ってはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "自転車横断帯をふさぐおそれがある場合は、手前で待ちます。",
    "ref": "道路交通法 第50条第2項",
    "quote": "車両等は、その進行しようとする進路の前方の車両等の状況により、横断歩道、自転車横断帯、踏切又は道路標示によつて区画された部分に入つた場合においてはその部分で停止することとなるおそれがあるときは、これらの部分に入つてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第50条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-05-005",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M239",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 5,
    "kyoshuName": "交差点・踏切",
    "category": "交差点・踏切",
    "topic": "交差点・踏切",
    "question": "前の車の状況により停止禁止部分の中で止まってしまうおそれがあるときでも、渋滞していればその中へ入ってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "前の車の状況により、道路標示で区画された部分（停止禁止部分など）の中で止まってしまうおそれがあるときは、渋滞していてもその部分に入ってはいけません。",
    "ref": "道路交通法 第50条第2項",
    "quote": "車両等は、その進行しようとする進路の前方の車両等の状況により、横断歩道、自転車横断帯、踏切又は道路標示によつて区画された部分に入つた場合においてはその部分で停止することとなるおそれがあるときは、これらの部分に入つてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第50条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "交差点・踏切",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-05-006",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14） ／ 10/15 本人の例文をもとに書き直し（照合3・本人の Excel の判断）",
    "pairGroup": "P08"
  },
  {
    "id": "D-M240",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "交通整理がなく、自分が優先道路を通行していない交差点内で、左右の見通しがきかない部分を通るときは徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交通整理がなく優先道路を通行していない場合、交差点内の見通しがきかない部分では徐行します。",
    "ref": "道路交通法 第42条第1号",
    "quote": "車両等は、……次に掲げるその他の場合においては、徐行しなければならない。……交差点内で左右の見とおしがきかない部分を通行しようとするとき（当該交差点において交通整理が行なわれている場合及び優先道路を通行している場合を除く。）。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第42条第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-06-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M241",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "自転車横断帯に近づき、横断する自転車がいないことが明らかでないときは、直前で停止できる速度で進む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断する自転車がいないことが明らかでなければ、直前で止まれる速度に落とします。",
    "ref": "道路交通法 第38条第1項",
    "quote": "車両等は、横断歩道又は自転車横断帯（以下この条において「横断歩道等」という。）に接近する場合には、……歩行者又は自転車……がないことが明らかな場合を除き、……停止することができるような速度で進行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第38条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-07-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M242",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "停止線がある横断歩道で歩行者が横断しようとしているときは、停止線の直前で一時停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "停止線がある場合は、横断しようとする歩行者の通行を妨げないよう、停止線の直前で一時停止します。",
    "ref": "道路交通法 第38条第1項",
    "quote": "車両等は、……当該横断歩道等の直前（道路標識等による停止線が設けられているときは、その停止線の直前。以下この項において同じ。）……横断しようとする歩行者等があるときは、当該横断歩道等の直前で一時停止し、かつ、その通行を妨げないようにしなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第38条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-07-002",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M243",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "横断が禁止されていない自転車横断帯の直前で車が止まっているとき、その横から前へ出る前に一時停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断が禁止されていない場合、止まっている車の横から前へ出る前に一時停止します。",
    "ref": "道路交通法 第38条第2項",
    "quote": "車両等は、横断歩道等（……歩行者等の横断が禁止されているものを除く。……）……停止している車両等の側方を通過してその前方に出ようとするときは、その前方に出る前に一時停止しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第38条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-07-003",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M244",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "横断歩道や自転車横断帯とその手前30m以内では、前を走っている自動車の横を通って、その前に出てはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断歩道・自転車横断帯とその手前30m以内の場所では、前を走っている車の横を通り過ぎて、その前に出てはいけません。",
    "ref": "道路交通法 第38条第3項",
    "quote": "車両等は、横断歩道等及びその手前の側端から前に三十メートル以内の道路の部分においては、第三十条第三号の規定に該当する場合のほか、その前方を進行している他の車両等（特定小型原動機付自転車等を除く。）の側方を通過してその前方に出てはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第38条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-07-004",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14） ／ 10/15 本人の例文をもとに書き直し（照合3・本人の Excel の判断）"
  },
  {
    "id": "D-M245",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "身体障害者用の車が通行しているときは、一時停止か徐行をして、その通行を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "身体障害者用の車を利用する人の通行を妨げないよう、一時停止か徐行をします。",
    "ref": "道路交通法 第71条第2号",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……二身体障害者用の車が通行しているとき、……は、一時停止し、又は徐行して、その通行又は歩行を妨げないようにすること。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-07-005",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M246",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "目が見えないことを示すつえを持つ人が通行しているときは、一時停止か徐行をして通行を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "目が見えないことを示すつえを持つ人の通行を妨げないよう、一時停止か徐行をします。",
    "ref": "道路交通法 第71条第2号",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……目が見えない者が第十四条第一項の規定に基づく政令で定めるつえを携え、……通行しているとき、……は、一時停止し、又は徐行して、その通行又は歩行を妨げないようにすること。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-07-006",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M247",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "保護者が付き添っていない児童が歩いているときは、一時停止か徐行をして歩行を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "付き添いのない児童の歩行を妨げないよう、一時停止か徐行をします。",
    "ref": "道路交通法 第71条第2号",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……監護者が付き添わない児童若しくは幼児が歩行しているとき……は、一時停止し、又は徐行して、その通行又は歩行を妨げないようにすること。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-07-007",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M248",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩行に支障のある身体障害者が通行しているときは、一時停止か徐行をして通行を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩行に支障のある人の通行を妨げないよう、一時停止か徐行をします。",
    "ref": "道路交通法 第71条第2号の2",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……二の二前号に掲げるもののほか、高齢の歩行者、身体の障害のある歩行者その他の歩行者でその通行に支障のあるものが通行しているとき……は、一時停止し、又は徐行して、その通行を妨げないようにすること。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第2号の2",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-07-008",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M249",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "許可を受けて歩行者用道路を通る車は、歩行者に特に注意して徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "例外的に通行できる車も、歩行者の安全に特に注意して徐行します。",
    "ref": "道路交通法 第9条",
    "quote": "車両は、歩行者の通行の安全と円滑を図るため車両の通行が禁止されていることが道路標識等により表示されている道路……を、前条第二項の許可を受け、又はその禁止の対象から除外されていることにより通行するときは、特に歩行者に注意して徐行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第9条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-07-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M250",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "普通自転車歩道通行可の標識がある歩道では、警察官の禁止指示がなければ普通自転車で通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "標識で認められた歩道は、警察官から禁止を指示されていなければ通行できます。",
    "ref": "道路交通法 第63条の4第1項第1号",
    "quote": "普通自転車は、次に掲げるときは、……歩道を通行することができる。ただし、警察官等が……当該歩道を通行してはならない旨を指示したときは、この限りでない。……道路標識等により普通自転車が当該歩道を通行することができることとされているとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第63条の4第1項第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-07-002",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M251",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "児童が普通自転車を運転する場合は、警察官の禁止指示がなければ歩道を通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "児童など、車道通行が危険と認められる人には歩道通行の例外があります。",
    "ref": "道路交通法 第63条の4第1項第2号",
    "quote": "普通自転車は、次に掲げるときは、……歩道を通行することができる。ただし、警察官等が……当該歩道を通行してはならない旨を指示したときは、この限りでない。……当該普通自転車の運転者が、児童、幼児その他の……政令で定める者であるとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第63条の4第1項第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-07-003",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M252",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "車道の状況から安全確保のためやむを得ないときは、禁止指示がなければ普通自転車で歩道を通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車道の状況から歩道通行がやむを得ない場合には例外があります。",
    "ref": "道路交通法 第63条の4第1項第3号",
    "quote": "普通自転車は、次に掲げるときは、……歩道を通行することができる。ただし、警察官等が……当該歩道を通行してはならない旨を指示したときは、この限りでない。……車道又は交通の状況に照らして……歩道を通行することがやむを得ないと認められるとき。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第63条の4第1項第3号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-07-004",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M253",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩道を通る普通自転車は、指定部分がなければ歩道中央から車道寄りを通る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "指定部分がない歩道では、中央より車道側を通ります。",
    "ref": "道路交通法 第63条の4第2項",
    "quote": "前項の場合において、普通自転車は、当該歩道の中央から車道寄りの部分（道路標識等により普通自転車が通行すべき部分として指定された部分……があるときは、当該普通自転車通行指定部分）を徐行しなければならず",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第63条の4第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-07-005",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M254",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "普通自転車通行指定部分がある歩道では、普通自転車はその指定部分を通る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩道に自転車の指定部分があるときは、その部分を通行します。",
    "ref": "道路交通法 第63条の4第2項",
    "quote": "普通自転車は、当該歩道の中央から車道寄りの部分（道路標識等により普通自転車が通行すべき部分として指定された部分……があるときは、当該普通自転車通行指定部分）を徐行しなければならず",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第63条の4第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-07-006",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M255",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "普通自転車で歩道を通るときは、指定部分を通行中・通行予定の歩行者がいない場合を除き徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩道では原則として徐行し、指定部分に歩行者がいない場合だけ例外があります。",
    "ref": "道路交通法 第63条の4第2項",
    "quote": "普通自転車は、……普通自転車通行指定部分……があるときは、当該普通自転車通行指定部分）を徐行しなければならず、……ただし、普通自転車通行指定部分については、……歩行者がないときは、歩道の状況に応じた安全な速度と方法で進行することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第63条の4第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-07-007",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M256",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩道を通る普通自転車が歩行者を妨げることになるときは、一時停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩行者の通行を妨げる場合は、徐行だけでなく一時停止が必要です。",
    "ref": "道路交通法 第63条の4第2項",
    "quote": "前項の場合において、普通自転車は、……徐行しなければならず、また、普通自転車の進行が歩行者の通行を妨げることとなるときは、一時停止しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第63条の4第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-07-008",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M257",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "車から降りるときは、安全を確認しないまま降りてはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車から降りる前に周囲の安全を確認し、交通の危険を生じさせないようにします。",
    "ref": "道路交通法 第71条第4号の3",
    "quote": "車両等の運転者は、次に掲げる事項を守らなければならない。……四の三安全を確認しないで、……車両等から降りないようにし、……交通の危険を生じさせないようにするため必要な措置を講ずること。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第4号の3",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-08-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M258",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "危険防止の場合を除き、初心者標識車が必要な車間距離を保てなくなる進路変更をしてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "初心者標識を付けた普通自動車が必要な車間距離を保てなくなる進路変更は禁止です。",
    "ref": "道路交通法 第71条第5号の4",
    "quote": "自動車を運転する場合において、……表示自動車（……第七十一条の五第二項から第四項まで……に規定する標識を付けた普通自動車をいう。……）……危険防止のためやむを得ない場合を除き、……後方から進行してくる表示自動車が……必要な距離を保つことができないこととなるときは進路を変更しないこと。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第71条第5号の4",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-08-002",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M259",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "道路外の施設へ入るためでも、横断して他の車の正常な交通を妨げるおそれがあれば横断できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路外へ入る目的でも、歩行者や他の車の正常な交通を妨げる横断は禁止です。",
    "ref": "道路交通法 第25条の2第1項",
    "quote": "車両は、歩行者又は他の車両等の正常な交通を妨害するおそれがあるときは、道路外の施設若しくは場所に出入するための左折若しくは右折をし、横断し、転回し、又は後退してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第25条の2第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-08-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M260",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "道路標識などで横断が禁止された道路部分でも、交通がなければ横断できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "周囲の交通の有無にかかわらず、指定された道路部分では横断できません。",
    "ref": "道路交通法 第25条の2第2項",
    "quote": "車両は、道路標識等により横断、転回又は後退が禁止されている道路の部分においては、当該禁止された行為をしてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第25条の2第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-08-002",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M261",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "道路標識などで後退が禁止された道路部分では、周囲が安全でも後退してはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "安全に見えても、標識などで後退が禁止された部分では後退できません。",
    "ref": "道路交通法 第25条の2第2項",
    "quote": "車両は、道路標識等により横断、転回又は後退が禁止されている道路の部分においては、当該禁止された行為をしてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第25条の2第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-08-003",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M262",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "一方通行で右折のため右端に寄っている前車を追い越すときは、その左側を通る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "右折のため右端へ寄った前車は、例外として左側から追い越します。",
    "ref": "道路交通法 第28条第2項",
    "quote": "車両は、他の車両を追い越そうとする場合において、前車が第二十五条第二項又は第三十四条第二項若しくは第四項の規定により道路の中央又は右側端に寄つて通行しているときは、前項の規定にかかわらず、その左側を通行しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第28条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7D-09-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M263",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "危険防止のため停止している車に追いついたとき、その車の前方を横切ってはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "危険防止などで停止する車列に追いついたときは、その前を横切れません。",
    "ref": "道路交通法 第32条",
    "quote": "車両は、法令の規定若しくは警察官の命令により、又は危険を防止するため、停止し、若しくは停止しようとして徐行している車両等……に追いついたときは、……その前方を横切つてはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第32条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-14",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7E-09-001",
    "reviewMethod": "M7 第4・5弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人OK（2026-10-14）"
  },
  {
    "id": "D-M264",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "貨物を積んだ貨物自動車では、その貨物を見守る最小限の人を荷台に乗せて運転できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "貨物を積んだ貨物自動車では、その貨物を見守るために必要な最小限の人を荷台に乗せて運転できます。",
    "ref": "道路交通法 第55条第1項ただし書",
    "quote": "ただし、もつぱら貨物を運搬する構造の自動車（以下次条及び第五十七条において「貨物自動車」という。）で貨物を積載しているものにあつては、当該貨物を看守するため必要な最小限度の人員をその荷台に乗車させて運転することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第55条第1項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7F-01-001",
    "reviewMethod": "M7 第6弾（○の新問題）：照合3：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M265",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "出発地の警察署長が場所を指定して許可したときは、車の積載設備以外の指定場所に積載できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車の構造や交通の状況に支障がないとして、出発地の警察署長が場所を指定して許可した場合に限ります。",
    "ref": "道路交通法 第56条第1項",
    "quote": "車両の運転者は、当該車両の出発地を管轄する警察署長……が当該車両の構造又は道路若しくは交通の状況により支障がないと認めて積載の場所を指定して許可をしたときは、前条第一項の規定にかかわらず、当該車両の乗車又は積載のために設備された場所以外の場所で指定された場所に積載して車両を運転することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第56条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7F-01-002",
    "reviewMethod": "M7 第6弾（○の新問題）：照合3：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M266",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "出発地の警察署長が人員を限って許可したときは、その範囲内で貨物自動車の荷台に人を乗せられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路や交通に支障がないとして、出発地の警察署長が人員を限って許可した範囲内に限ります。",
    "ref": "道路交通法 第56条第2項",
    "quote": "貨物自動車の運転者は、出発地警察署長が道路又は交通の状況により支障がないと認めて人員を限つて許可をしたときは、前条第一項の規定にかかわらず、当該許可に係る人員の範囲内で当該貨物自動車の荷台に乗車させて貨物自動車を運転することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第56条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7F-01-003",
    "reviewMethod": "M7 第6弾（○の新問題）：照合3：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M267",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "分割できない貨物で、出発地の警察署長が限度を定めて許可したときは、その範囲内で積載制限を超えられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "分割できない貨物について、車の構造や交通に支障がないとして限度を定めた許可がある場合に限ります。",
    "ref": "道路交通法 第57条第3項",
    "quote": "貨物が分割できないものであるため……出発地警察署長が当該車両の構造又は道路若しくは交通の状況により支障がないと認めて積載重量等を限つて許可をしたときは、……車両の運転者は、前二項の規定にかかわらず、当該許可に係る積載重量等の範囲内で当該制限を超える積載をして車両を運転することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第57条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7F-01-004",
    "reviewMethod": "M7 第6弾（○の新問題）：照合3：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M268",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "救急車など業務中の緊急自動車が事故を起こし、運転を続ける必要があるときは、他の乗務員に救護や報告をさせて運転を続けられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "業務中の緊急自動車で、引き続き運転する必要があるときは、ほかの乗務員に負傷者の救護などの措置をさせたり、警察への報告をさせたりして、運転を続けることができます。",
    "ref": "道路交通法 第72条第4項",
    "quote": "緊急自動車……で当該業務に従事中のものの運転者は、当該業務のため引き続き当該車両等を運転する必要があるときは、第一項の規定にかかわらず、その他の乗務員に第一項前段に規定する措置を講じさせ、又は同項後段に規定する報告をさせて、当該車両等の運転を継続することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第72条第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7F-01-005",
    "reviewMethod": "M7 第6弾（○の新問題）：照合3：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M269",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "普通乗用車の積み荷の長さの通常の上限は、車の長さの1.1倍である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "通常の上限は車の長さにその2割を加えた長さ、つまり1.2倍です。",
    "ref": "道路交通法施行令 第22条第3号イ",
    "quote": "自動車の……積載物の……大きさ……の制限は、次の各号に定めるところによる。……三積載物の長さ、幅又は高さは、それぞれ次に掲げる長さ、幅又は高さを超えないこと。イ長さ自動車の長さにその長さの十分の二の長さを加えたもの",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第22条第3号イ",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7H-01-001",
    "reviewMethod": "M7 第8弾：照合5：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M270",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "普通乗用車の積み荷の幅の通常の上限は、車の幅の1.1倍である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "通常の上限は車の幅にその2割を加えた幅、つまり1.2倍です。",
    "ref": "道路交通法施行令 第22条第3号ロ",
    "quote": "自動車の……積載物の……大きさ……の制限は、次の各号に定めるところによる。……三積載物の長さ、幅又は高さは、それぞれ次に掲げる長さ、幅又は高さを超えないこと。……ロ幅自動車の幅にその幅の十分の二の幅を加えたもの",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第22条第3号ロ",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7H-01-002",
    "reviewMethod": "M7 第8弾：照合5：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M271",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "普通乗用車の積み荷が車体の前後へはみ出す長さの通常の上限は、それぞれ車長の2割である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "前後それぞれのはみ出しの通常の上限は、車の長さの1割です。",
    "ref": "道路交通法施行令 第22条第4号イ",
    "quote": "自動車の……積載の方法の制限は、次の各号に定めるところによる。……四積載物は、次に掲げる制限を超えることとなるような方法で積載しないこと。……イ自動車の車体の前後から自動車の長さの十分の一の長さ……を超えてはみ出さないこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第22条第4号イ",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7H-01-003",
    "reviewMethod": "M7 第8弾：照合5：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M272",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "普通乗用車の積み荷が車体の左右へはみ出す幅の通常の上限は、それぞれ車幅の2割である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "左右それぞれのはみ出しの通常の上限は、車の幅の1割です。",
    "ref": "道路交通法施行令 第22条第4号ロ",
    "quote": "自動車の……積載の方法の制限は、次の各号に定めるところによる。……四積載物は、次に掲げる制限を超えることとなるような方法で積載しないこと。……ロ自動車の車体の左右から自動車の幅の十分の一の幅……を超えてはみ出さないこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第22条第4号ロ",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7H-01-004",
    "reviewMethod": "M7 第8弾：照合5：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M273",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "赤・黄・青の灯火を横に並べる信号機は、左から赤・黄・青の順に配列する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横に並べる場合は、右から赤・黄・青の順です。",
    "ref": "道路交通法施行令 第3条第1項",
    "quote": "信号機の灯火の配列は、赤色、黄色及び青色の灯火を備えるものにあつては、その灯火を横に配列する場合は右から赤色、黄色及び青色の順、縦に配列する場合は上から赤色、黄色及び青色の順とし",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第3条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-02-001",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M274",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "赤・黄・青の灯火を縦に並べる信号機は、下から赤・黄・青の順に配列する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "縦に並べる場合は、上から赤・黄・青の順です。",
    "ref": "道路交通法施行令 第3条第1項",
    "quote": "信号機の灯火の配列は、赤色、黄色及び青色の灯火を備えるものにあつては、その灯火を横に配列する場合は右から赤色、黄色及び青色の順、縦に配列する場合は上から赤色、黄色及び青色の順とし",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第3条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-02-002",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M275",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "赤・青の2灯を縦に並べる信号機は、上から赤・青の順に配列する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "赤・青の2灯を縦に並べる場合も、上が赤、下が青です。",
    "ref": "道路交通法施行令 第3条第1項",
    "quote": "信号機の灯火の配列は、……赤色及び青色の灯火を備えるものにあつては、その灯火を横に配列する場合は右から赤色及び青色の順、縦に配列する場合は上から赤色及び青色の順とする。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第3条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-02-003",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M276",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "警察官が腕を横に水平に上げたとき、その腕に平行する交通は赤信号と同じ意味になる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "水平に上げた腕に平行する交通は、青信号と同じ意味です。",
    "ref": "道路交通法施行令 第4条第1項表・腕を横に水平にあげた状態第1号",
    "quote": "腕を横に水平にあげた状態……一　横に水平にあげた腕……に平行する交通については、第二条第一項の表に掲げる青色の灯火の信号の意味に同じ。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第4条第1項表・腕を横に水平にあげた状態第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-02-004",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M277",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "普通自転車は、人の形の青信号で横断歩道から普通車と同じ小回りで右折できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "人の形の青信号では、横断歩道を直進又は左折できます。普通車と同じ小回りの右折はできません。",
    "ref": "道路交通法施行令 第2条第1項表・人の形の記号を有する青色の灯火第2号",
    "quote": "人の形の記号を有する青色の灯火……普通自転車……は、横断歩道において直進をし、又は左折することができること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第1項表・人の形の記号を有する青色の灯火第2号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-02-005",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M278",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "歩行者・自転車専用信号と一般の車両用信号が同時に表示されるとき、自転車は一般の信号に従う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩行者・自転車専用信号が同時に表示されているときは、自転車はその専用信号に従います。車両用信号は自転車に意味を表示しません。",
    "ref": "道路交通法施行令 第2条第4項柱書・第5項",
    "quote": "当該信号機の信号が歩行者等、特定小型原動機付自転車及び自転車に対して意味を表示するものである旨を……５ 特定の交通についてのみ意味が表示される信号が他の信号と同時に表示されている場合における当該他の信号の意味は、当該特定の交通について表示されないものとする。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第2条第4項柱書・第5項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-02-006",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M279",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 2,
    "kyoshuName": "信号",
    "category": "信号",
    "topic": "信号",
    "question": "警察官が水平に上げた腕を下ろし、体の向きを変えず交通整理を続けるとき、直前の手信号の意味は続く。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "腕を下ろしても、体の向きを変えずに交通整理を続けている間は、横に腕を上げた状態に含まれます。",
    "ref": "道路交通法施行令 第4条第1項表・腕を横に水平にあげた状態",
    "quote": "腕を横に水平にあげた状態（横に水平にあげた腕をおろし、引き続き身体の方向を変えないで交通整理をしている状態を含む。）",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第4条第1項表・腕を横に水平にあげた状態",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7H-02-001",
    "reviewMethod": "M7 第8弾：照合5：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M280",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "歩道のない側の路端寄りの車道外側線は、破線で表示されたものが路側帯の道路標示とみなされる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "路側帯の道路標示とみなされる車道外側線は、歩道のない側に設けられ、実線で表示されたものです。",
    "ref": "道路標識、区画線及び道路標示に関する命令 第7条表・車道外側線",
    "quote": "次の表の上欄に掲げる種類の区画線は、……それぞれ同表の下欄に掲げる種類の道路標示とみなす。……「車道外側線」を表示するもの（歩道の設けられていない道路又は道路の歩道の設けられていない側の路端寄りに設けられ、かつ、実線で表示されるものに限る。）「路側帯」を表示するもの",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 第7条表・車道外側線",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-03-001",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M281",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "二段停止線がある場所で停止するとき、普通乗用車の停止位置は前方の線である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通乗用車は後方の線が停止位置です。前方の線は二輪車・原付・軽車両の停止位置です。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第五・二段停止線（203の2）",
    "quote": "二段停止線 | （２０３の２） | 二輪の自動車、原動機付自転車及び軽車両（以下この項において「二輪」という。）が停止する場合の位置及び二輪以外の車両が停止する場合の位置が、それぞれ二本の線のうちより前方の線の位置及びより後方の線の位置であること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第五・二段停止線（203の2）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7H-03-001",
    "reviewMethod": "M7 第8弾：照合5：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M282",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「二輪の自動車・一般原動機付自転車通行止め」は、特定小型原付の通行も禁止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "標識が禁止するのは二輪の自動車と一般原付です。特定小型原付は、この標識の禁止対象には含まれません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・二輪の自動車・一般原動機付自転車通行止め（３０７）",
    "quote": "二輪の自動車・一般原動機付自転車通行止め | （３０７） | 交通法第八条第一項の道路標識により、二輪の自動車及び一般原動機付自転車……の通行を禁止すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・二輪の自動車・一般原動機付自転車通行止め（３０７）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-002",
    "reviewMethod": "M7 第9弾：照合6：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M283",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「特定小型原動機付自転車・自転車通行止め」は、一般原付の通行も禁止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この標識の禁止対象は特定小型原付と自転車です。一般原付は含まれません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・特定小型原動機付自転車・自転車通行止め（３０９）",
    "quote": "特定小型原動機付自転車・自転車通行止め | （３０９） | 交通法第八条第一項の道路標識により、特定小型原動機付自転車……及び自転車の通行を禁止すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・特定小型原動機付自転車・自転車通行止め（３０９）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-003",
    "reviewMethod": "M7 第9弾：照合6：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M284",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「特定小型原動機付自転車・自転車専用」の標識は、自転車歩行者専用道路を示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この標識が示すのは自転車道です。自転車歩行者専用道路とは区別します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・特定小型原動機付自転車・自転車専用（３２５の２）",
    "quote": "特定小型原動機付自転車・自転車専用 | （３２５の２） | 自転車道であること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・特定小型原動機付自転車・自転車専用（３２５の２）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-004",
    "reviewMethod": "M7 第9弾：照合6：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M285",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「普通自転車等及び歩行者等専用」の標識は、普通自転車が通れる歩道を示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この標識が示すのは自転車歩行者専用道路です。普通自転車で通れる歩道を示す標識とは区別します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・普通自転車等及び歩行者等専用（３２５の３）",
    "quote": "普通自転車等及び歩行者等専用 | （３２５の３） | 道路法第四十八条の十四第二項に規定する自転車歩行者専用道路であること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・普通自転車等及び歩行者等専用（３２５の３）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-005",
    "reviewMethod": "M7 第9弾：照合6：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M286",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「特定小型原動機付自転車・自転車一方通行」は、一般原付にも矢印の逆方向への通行を禁止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この標識の禁止対象は特定小型原付と自転車です。一般原付は含まれません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・特定小型原動機付自転車・自転車一方通行（３２６の２―Ａ・Ｂ）",
    "quote": "特定小型原動機付自転車・自転車一方通行 | （３２６の２―Ａ・Ｂ） | 道路法第四十六条第一項の規定に基づき、標示板の矢印が示す方向の反対方向にする特定小型原動機付自転車及び自転車の通行を禁止すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・特定小型原動機付自転車・自転車一方通行（３２６の２―Ａ・Ｂ）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-006",
    "reviewMethod": "M7 第9弾：照合6：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M287",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「平行駐車」の標識は、道路の側端に対して平行に駐車することを指定する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路の側端に沿って、車を平行に駐車します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・平行駐車（３２７の１１）",
    "quote": "平行駐車 | （３２７の１１） | ……車両が道路の側端……に対し平行に駐車すべきこと……を指定すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・平行駐車（３２７の１１）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-007",
    "reviewMethod": "M7 第9弾：照合6の直し案：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M288",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「規制予告」の標識は、その道路の前方で行われている規制をあらかじめ示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "前方にある交通規制を知らせる標識です。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・規制予告（４０９―Ａ・Ｂ）",
    "quote": "規制予告 | （４０９―Ａ・Ｂ） | 標示板に表示される交通の規制が当該道路の前方の場所において行なわれていることをあらかじめ示すこと。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・規制予告（４０９―Ａ・Ｂ）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-010",
    "reviewMethod": "M7 第9弾：照合6の直し案：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M289",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「駐車時間制限」の補助標識は、チケットの表示時刻から引き続き駐車できる時間を示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "引き続き駐車できるのは、チケットなどに表示された時刻までの時間です。表示時刻からの時間ではありません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・駐車時間制限（５０４の２）",
    "quote": "駐車時間制限 | （５０４の２） | 車両が引き続き駐車することができる時間がパーキング・メーター又はパーキング・チケットに表示された時刻までの時間であることを示すこと。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・駐車時間制限（５０４の２）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-012",
    "reviewMethod": "M7 第9弾：照合6：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M290",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「中央線」の指示標識は、道路の中央または標識による中央線であることを示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路の中央を示す場合と、標識により中央線を示す場合があります。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・中央線（４０６）",
    "quote": "中央線 | （４０６） | 道路の中央であること又は交通法第十七条第四項の道路標識による中央線であること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・中央線（４０６）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-015",
    "reviewMethod": "M7 第9弾：照合6：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M291",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「横断歩道・自転車横断帯」の標識は、近接して設けられた横断歩道と自転車横断帯を示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断歩道と自転車横断帯が近接して設けられた場所を示します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・横断歩道・自転車横断帯（４０７の３）",
    "quote": "横断歩道・自転車横断帯 | （４０７の３） | 近接して設けられた交通法第二条第一項第四号に規定する横断歩道及び同項第四号の二に規定する自転車横断帯であること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・横断歩道・自転車横断帯（４０７の３）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-016",
    "reviewMethod": "M7 第9弾：照合6：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M292",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "駐停車禁止場所でも、標識等で停車を認められた部分には、その表示に従って停車できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "禁止場所の一部でも、標識等が停車を認める部分では、その表示に従って停車できます。",
    "ref": "道路交通法 第46条",
    "quote": "前条第一項に規定するもののほか、車両は、第四十四条第一項又は第四十五条第一項の規定による停車及び駐車を禁止する道路の部分又は駐車を禁止する道路の部分の一部について、道路標識等により停車又は駐車をすることができることとされているときは、これらの規定にかかわらず、停車し、又は駐車することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第46条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7F-04-001",
    "reviewMethod": "M7 第6弾（○の新問題）：照合3：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M293",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "歩行者が通る路側帯で、駐停車禁止の標示がなくても車を中に入れない幅の上限は0.5mである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩行者が通る路側帯で車を中に入れて駐停車しない幅の上限は、0.75mです。0.5mではありません。",
    "ref": "道路交通法施行令 第14条の6第1項",
    "quote": "法第四十七条第三項の政令で定めるものは、歩行者の通行の用に供する路側帯で、幅員が〇・七五メートル以下のものとする。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第14条の6第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-04-001",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M294",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "歩行者が通る路側帯に車の一部を入れて駐車するときは、標示と平行にし、車の左側に0.5mの余地をとる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩行者の通行に使う路側帯に入って駐車する場合は、車の左側に0.75mの余地を残します。",
    "ref": "道路交通法施行令 第14条の6第2項柱書・第1号前段",
    "quote": "歩行者の通行の用に供する路側帯に入つて停車し、又は駐車する場合当該路側帯を区画している道路標示と平行になり、かつ、当該車両の左側に歩行者の通行の用に供するため〇・七五メートルの余地をとること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第14条の6第2項柱書・第1号前段",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-04-002",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M295",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "歩行者が通る路側帯に車全体が入り、左に0.75mを超える余地が残るときは、路側帯の左端に沿って駐車する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩行者の通行に使う路側帯に車全体が入り、その左に0.75mを超える余地が残る場合は、路側帯と車道を区切る道路標示に沿って駐車します。",
    "ref": "道路交通法施行令 第14条の6第2項第1号後段",
    "quote": "歩行者の通行の用に供する路側帯に入つて停車し、又は駐車する場合当該路側帯を区画している道路標示……当該路側帯に当該車両の全部が入つた場合においてもその左側に〇・七五メートルをこえる余地をとることができるときは、当該道路標示に沿うこと。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第14条の6第2項第1号後段",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-04-004",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M296",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 4,
    "kyoshuName": "通行するところ",
    "category": "通行するところ",
    "topic": "通行するところ",
    "question": "通常の時間制限駐車で発給されたパーキング・チケットは、車の後面の見やすい所に掲示する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "駐車中の掲示位置は、車の前面の見やすい所です。",
    "ref": "道路交通法 第49条の3第4項",
    "quote": "車両の運転者は、時間制限駐車区間において車両を駐車したときは、……パーキング・チケットの発給を直ちに受けて、これを当該車両が駐車している間……当該車両の前面の見やすい箇所に掲示しなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第49条の3第4項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "通行するところ",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7H-04-001",
    "reviewMethod": "M7 第8弾：照合5：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M297",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 6,
    "kyoshuName": "速度と車間距離",
    "category": "速度と車間距離",
    "topic": "速度と車間距離",
    "question": "一般道路の最低速度指定は、普通乗用車と同じく自転車にも適用される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "最低速度の指定によるこの義務の対象は自動車です。自転車は含まれません。",
    "ref": "道路交通法 第23条",
    "quote": "自動車は、道路標識等によりその最低速度が指定されている道路……においては、法令の規定により速度を減ずる場合及び危険を防止するためやむを得ない場合を除き、その最低速度に達しない速度で進行してはならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第23条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "速度と車間距離",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-06-001",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M298",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩行者を著しく妨げず、通行禁止の標示もない左側の路側帯は、軽車両で通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "軽車両は、禁止標示がない左側の路側帯を通行できます。歩行者の通行を妨げない速度と方法で進みます。",
    "ref": "道路交通法 第17条の3第1項",
    "quote": "特例特定小型原動機付自転車及び軽車両は、第十七条第一項の規定にかかわらず、著しく歩行者の通行を妨げることとなる場合を除き、道路の左側部分に設けられた路側帯（特例特定小型原動機付自転車及び軽車両の通行を禁止することを表示する道路標示によつて区画されたものを除く。）を通行することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第17条の3第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7F-07-001",
    "reviewMethod": "M7 第6弾（○の新問題）：照合3：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M299",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "並進可の標識等がある道路では、普通自転車は2台まで横に並んで通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "並進可の指定がある道路では普通自転車2台まで並進できますが、3台以上は並べません。",
    "ref": "道路交通法 第63条の5",
    "quote": "普通自転車は、道路標識等により並進することができることとされている道路においては、第十九条の規定にかかわらず、他の普通自転車と並進することができる。ただし、普通自転車が三台以上並進することとなる場合においては、この限りでない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第63条の5",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7F-07-002",
    "reviewMethod": "M7 第6弾（○の新問題）：照合3：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M300",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "普通自転車で歩道を通ることができる場合に、普通自転車通行指定部分を通っている歩行者も、通ろうとしている歩行者もいなければ、その指定部分を歩道の状況に応じた安全な速度と方法で進むことができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩道を通る普通自転車は原則として徐行しますが、普通自転車通行指定部分では、そこを通っている歩行者も通ろうとしている歩行者もいないときは、歩道の状況に応じた安全な速度と方法で進めます。普通自転車通行指定部分は、道路標識等で普通自転車が通る部分として指定された部分です。",
    "ref": "道路交通法 第63条の4第2項ただし書",
    "quote": "ただし、普通自転車通行指定部分については、当該普通自転車通行指定部分を通行し、又は通行しようとする歩行者がないときは、歩道の状況に応じた安全な速度と方法で進行することができる。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第63条の4第2項ただし書",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-17",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7F-07-003",
    "reviewMethod": "M7 第6弾（○の新問題）：照合3：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15） ／ 10/15 照合3の直した後の文に戻す（GPT の500問点検で D-M255 との食い違い、本人OK） ／ 10/16 本人の Excel の指摘で書き直し（主語（普通自転車で歩道を通るとき）が抜けて状況が分かりにくい） ／ 10/17 GPT の照合の指摘で直す（歩道を通れる場合という前提を設問に・「指定部分は」を「指定部分を」に・用語の説明を解説に・引用はただし書だけ）"
  },
  {
    "id": "D-M301",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩行者の保護に関する規定でいう児童は、6歳以上12歳未満の者である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "児童は6歳以上13歳未満の者です。",
    "ref": "道路交通法 第14条第3項",
    "quote": "児童（六歳以上十三歳未満の者をいう。以下同じ。）",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第14条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-07-001",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M302",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "歩行者の保護に関する規定でいう幼児は、7歳未満の者である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "幼児は6歳未満の者です。",
    "ref": "道路交通法 第14条第3項",
    "quote": "幼児（六歳未満の者をいう。以下同じ。）",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第14条第3項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-07-002",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M303",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 7,
    "kyoshuName": "歩行者の保護",
    "category": "歩行者の保護",
    "topic": "歩行者の保護",
    "question": "目が見えない人が道路を通るときに用いる所定のつえは、白色又は黄色である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "所定のつえの色は白色又は黄色です。",
    "ref": "道路交通法施行令 第8条第1項",
    "quote": "法第十四条第一項及び第二項の政令で定めるつえは、白色又は黄色のつえとする。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第8条第1項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "歩行者の保護",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-07-003",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M304",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "左折の手による合図には、右腕を車体の右側の外に出して水平に伸ばす方法がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "左折は左腕を左側へ水平に伸ばします。右腕を右側へ水平に伸ばすのは右折等の合図です。",
    "ref": "道路交通法施行令 第21条第1項表・左折するとき",
    "quote": "左折するとき。……左腕を車体の左側の外に出して水平に伸ばし、若しくは右腕を車体の右側の外に出して肘を垂直に上に曲げること、又は左側の方向指示器を操作すること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表・左折するとき",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-08-001",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M305",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "右折の手による合図には、左腕を車体の左側の外に出して肘を垂直に下に曲げる方法がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "左腕を左側へ出す右折の手合図では、肘を垂直に上に曲げます。",
    "ref": "道路交通法施行令 第21条第1項表・右折し、又は転回するとき",
    "quote": "右折し、又は転回するとき。……右腕を車体の右側の外に出して水平に伸ばし、若しくは左腕を車体の左側の外に出して肘を垂直に上に曲げること、又は右側の方向指示器を操作すること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表・右折し、又は転回するとき",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-08-002",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M306",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 8,
    "kyoshuName": "安全確認・合図・進路変更",
    "category": "安全確認・合図・進路変更",
    "topic": "安全確認・合図・進路変更",
    "question": "停止の手による合図には、腕を車体の外に出して斜め下に伸ばす方法がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "停止の合図は、腕を車体の外へ斜め下に伸ばす方法でも行えます。",
    "ref": "道路交通法施行令 第21条第1項表・徐行し、又は停止するとき",
    "quote": "徐行し、又は停止するとき。……腕を車体の外に出して斜め下に伸ばすこと、又は車両の保安基準に関する規定若しくはトロリーバスの保安基準に関する規定により設けられる制動灯をつけること。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第21条第1項表・徐行し、又は停止するとき",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "安全確認・合図・進路変更",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-08-003",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M307",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "一方通行でない道路の交差点付近以外で緊急自動車が近づいたら、普通乗用車は右側に寄り進路を譲る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "一方通行でない道路では左側に寄り、緊急自動車に進路を譲ります。",
    "ref": "道路交通法 第40条第1項括弧書・第2項",
    "quote": "道路の左側（一方通行となつている道路においてその左側に寄ることが緊急自動車の通行を妨げることとなる場合にあつては、道路の右側。次項において同じ。）……前項以外の場所において、緊急自動車が接近してきたときは、車両は、道路の左側に寄つて、これに進路を譲らなければならない。",
    "source": "道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceSection": "道路交通法 第40条第1項括弧書・第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-09-001",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M308",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 10,
    "kyoshuName": "運転免許制度",
    "category": "運転免許制度",
    "topic": "運転免許制度",
    "question": "仮免許練習標識の表示位置は、地上0.4m以上1.5m以下と定められている。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "仮免許練習標識の表示位置は、地上0.4m以上1.2m以下です。",
    "ref": "道路交通法施行規則 第15条の3",
    "quote": "法第八十七条第三項に規定する標識は、地上〇・四メートル以上一・二メートル以下の位置に前方又は後方から見やすいように表示するものとする。",
    "source": "道路交通法施行規則",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50000002060",
    "sourceSection": "道路交通法施行規則 第15条の3",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転免許制度",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7G-10-009",
    "reviewMethod": "M7 第7弾：照合4：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ → GPT の独立照合（別チャット）→ 本人の判断（2026-10-15）"
  },
  {
    "id": "D-M309",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「直角駐車」の標識は、道路の側端に対して直角に駐車することを指定する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路の側端を基準にして、車を直角に駐車します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・直角駐車（３２７の１２）",
    "quote": "直角駐車 | （３２７の１２） | ……車両が道路の側端に対し直角に駐車すべきこと……を指定すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・直角駐車（３２７の１２）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-008",
    "reviewMethod": "M7 第9弾：照合6の直し案（500問点検で外した重複の補充、本人OK 2026-10-15）"
  },
  {
    "id": "D-M310",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「斜め駐車」の標識は、道路の側端に対して斜めに駐車することを指定する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路の側端を基準にして、車を斜めに駐車します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・斜め駐車（３２７の１３）",
    "quote": "斜め駐車 | （３２７の１３） | ……車両が道路の側端に対し斜めに駐車すべきこと……を指定すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・斜め駐車（３２７の１３）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-009",
    "reviewMethod": "M7 第9弾：照合6の直し案（500問点検で外した重複の補充、本人OK 2026-10-15）"
  },
  {
    "id": "D-M311",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「車両の種類」の補助標識は、本標識の規制の対象となる車両を特定する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "本標識の規制がどの車両に適用されるかを示します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・車両の種類（５０３―Ａ）",
    "quote": "車両の種類 | （５０３―Ａ） | 本標識が表示する交通の規制の対象となる車両を特定するため必要な事項を示すこと。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・車両の種類（５０３―Ａ）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-011",
    "reviewMethod": "M7 第9弾：照合6の直し案（500問点検で外した重複の補充、本人OK 2026-10-15）"
  },
  {
    "id": "D-M312",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "施設の案内に付く「距離・区域」の補助標識は、その施設までの距離を示す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "案内されている施設まで、あとどのくらいの距離があるかを示します。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・距離・区域（５０１）",
    "quote": "距離・区域 | （５０１） | 本標識が表示する施設若しくは場所までの距離、本標識が表示する交通の規制が行なわれている区間若しくは場所についての必要な距離又は本標識が表示する交通の規制が行なわれている区域を示すこと。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・距離・区域（５０１）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7I-03-013",
    "reviewMethod": "M7 第9弾：照合6の直し案（500問点検で外した重複の補充、本人OK 2026-10-15）"
  },
  {
    "id": "D-M313",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "普通乗用車を後退させるため運転するときは、運転者の座席ベルト装着義務が免除される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "後退させるために運転するときは、運転者の装着義務の例外です。",
    "ref": "道路交通法施行令 第26条の3の2第1項柱書・第3号",
    "quote": "法第七十一条の三第一項ただし書の政令で定めるやむを得ない理由があるときは、次に掲げるとおりとする。……三自動車を後退させるため当該自動車を運転するとき。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第26条の3の2第1項柱書・第3号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7J-01-001",
    "reviewMethod": "M7 第10弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ（12問から7問を選択）→ 本人の確認と GPT の独立照合（予定）"
  },
  {
    "id": "D-M314",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "妊娠中であることにより座席ベルトを装着することが健康保持上適当でない人が普通乗用車を運転するときは、座席ベルトを装着しなくてもよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "妊娠中であることにより、座席ベルトの装着が健康保持上適当でない人が運転するときは、装着しなくてもよい例外に当たります。",
    "ref": "道路交通法施行令 第26条の3の2第1項柱書・第1号",
    "quote": "法第七十一条の三第一項ただし書の政令で定めるやむを得ない理由があるときは、次に掲げるとおりとする。……一負傷若しくは障害のため又は妊娠中であることにより座席ベルトを装着することが療養上又は健康保持上適当でない者が自動車を運転するとき。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第26条の3の2第1項柱書・第1号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-16",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7J-01-002",
    "reviewMethod": "M7 第10弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ（12問から7問を選択）→ 本人の確認と GPT の独立照合（予定） ／ 10/16 本人の Excel の指摘で書き直し（設問と解説が整合せず、○と判定しにくい）"
  },
  {
    "id": "D-M315",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 1,
    "kyoshuName": "運転者の心得",
    "category": "運転者の心得",
    "topic": "運転者の心得",
    "question": "応急の救護で幼児を医療機関へ緊急搬送する普通乗用車では、その幼児のチャイルドシート使用義務が免除される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "応急の救護のため緊急に搬送する必要がある幼児を、その搬送のため乗せるときは例外です。",
    "ref": "道路交通法施行令 第26条の3の2第3項柱書・第8号",
    "quote": "法第七十一条の三第三項ただし書の政令で定めるやむを得ない理由があるときは、次に掲げるとおりとする。……八応急の救護のため医療機関、官公署その他の場所へ緊急に搬送する必要がある幼児を当該搬送のため乗車させるとき。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第26条の3の2第3項柱書・第8号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "運転者の心得",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7J-01-004",
    "reviewMethod": "M7 第10弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ（12問から7問を選択）→ 本人の確認と GPT の独立照合（予定）"
  },
  {
    "id": "D-M316",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「大型乗用自動車等通行止め」の標識は、普通乗用車の通行も禁止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この標識が禁止する対象は、大型乗用自動車と特定中型乗用自動車です。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・大型乗用自動車等通行止め（３０６）",
    "quote": "大型乗用自動車等通行止め | （３０６） | 交通法第八条第一項の道路標識により、大型乗用自動車及び特定中型乗用自動車の通行を禁止すること。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・大型乗用自動車等通行止め（３０６）",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7J-03-003",
    "reviewMethod": "M7 第10弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ（12問から7問を選択）→ 本人の確認と GPT の独立照合（予定）"
  },
  {
    "id": "D-M317",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 3,
    "kyoshuName": "標識・標示",
    "category": "標識・標示",
    "topic": "標識・標示",
    "question": "「二輪の自動車以外の自動車通行止め」の標識は、一般原付の通行も禁止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この標識が禁止するのは、二輪の自動車以外の自動車です。一般原付は、ここでいう自動車に含まれません。",
    "ref": "道路標識、区画線及び道路標示に関する命令 別表第一・二輪の自動車以外の自動車通行止め（３０４）／道路交通法 第2条第1項第9号",
    "quote": "二輪の自動車以外の自動車通行止め | （３０４） | ……二輪の自動車……以外の自動車の通行を禁止すること。／（道路交通法 第2条第1項第9号）九自動車原動機を用い、かつ、レール又は架線によらないで運転する車又は特定自動運行を行う車であつて、原動機付自転車……以外のものをいう。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335M50004002003",
    "sourceSection": "道路標識、区画線及び道路標示に関する命令 別表第一・二輪の自動車以外の自動車通行止め（３０４）／道路交通法 第2条第1項第9号",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "標識・標示",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7J-03-004",
    "reviewMethod": "M7 第10弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ（12問から7問を選択）→ 本人の確認と GPT の独立照合（予定） ／ 10/15 照合7：問題なし10・要修正1（この問題。自動車の定義の引用を追加）"
  },
  {
    "id": "D-M318",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "昼間、濃霧の暗い一般道路で灯火が必要となる視界の基準は、100m以下である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "一般道路での基準は視界50m以下です。昼間でも、このような暗い場所では灯火が必要です。",
    "ref": "道路交通法施行令 第19条",
    "quote": "法第五十二条第一項後段の政令で定める場合は、……濃霧がかかつている場所……で、視界が……その他の道路においては五十メートル以下であるような暗い場所を通行する場合……とする。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第19条",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-15",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7J-09-001",
    "reviewMethod": "M7 第10弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ（12問から7問を選択）→ 本人の確認と GPT の独立照合（予定）"
  },
  {
    "id": "D-M319",
    "reviewStatus": "reviewed",
    "stage": "first",
    "kyoshu": 9,
    "kyoshuName": "優先・追越し・行き違い",
    "category": "優先・追越し・行き違い",
    "topic": "優先・追越し・行き違い",
    "question": "夜間、幅が5.5m以上の一般道路に普通乗用車を駐車するとき、後方50mから車がはっきり見える程度に照明がある場所なら、ハザードランプや尾灯をつけなくてもよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "このような照明がある場所なら、非常点滅表示灯（ハザードランプ）や尾灯をつけなくてもかまいません。夜間、幅が5.5m以上の道路に停車・駐車するときは、原則としてハザードランプか尾灯をつけますが、高速道路や自動車専用道路以外の道路で、後方50mから車がはっきり見える程度に照明がある場所は例外です。",
    "ref": "道路交通法施行令 第18条第2項ただし書",
    "quote": "夜間、道路（歩道又は路側帯と車道の区別のある道路においては、車道）の幅員が五・五メートル以上の道路に停車し、又は駐車しているときは、車両の保安基準に関する規定により設けられる非常点滅表示灯又は尾灯をつけなければならない。ただし、……高速自動車国道及び自動車専用道路以外の道路において後方五十メートルの距離から当該自動車が明りように見える程度に照明が行われている場所に停車し、若しくは駐車しているとき、……は、この限りでない。",
    "source": "道路交通法施行令",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceSection": "道路交通法施行令 第18条第2項",
    "sourceVersion": "e-Gov 現行版（道路交通法 2026-07-21・施行令 2026-09-01・施行規則 2026-09-01・標識令 2026-09-01 施行）",
    "lastVerifiedDate": "2026-10-17",
    "difficulty": 1,
    "tags": [
      "優先・追越し・行き違い",
      "第1段階"
    ],
    "type": "truefalse",
    "draftId": "M7J-09-003",
    "reviewMethod": "M7 第10弾：GPT の下書き → 引用を条文と機械照合・Claude の読み合わせ（12問から7問を選択）→ 本人の確認と GPT の独立照合（予定） ／ 10/16 本人の Excel の指摘で書き直し（前提条件（夜間・幅5.5m以上の道路に駐車）が抜けて何の話か伝わらない） ／ 10/17 GPT の照合の指摘で直す（例外の条件を設問に入れる・解説を答えの理由から始める・引用の途中切れを直す） ／ 10/17 本人の提案で、例外（照明がある場所）を問う○の問題に作り替え（「例外に当たらなければ」では何の例外か分からないため）"
  }
];
