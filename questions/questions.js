// MCT ○×教材200問。mock6問は出題対象外。追加教材は一次条文自己照合、第三者レビュー未実施。
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
    "explanation": "黄色は原則として停止です。ただし、黄色になったとき停止位置に近づいていて安全に停止できない場合には進行できます。",
    "source": "道路交通法施行令",
    "sourceVersion": "",
    "sourceSection": "第2条（信号の意味）",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 1,
    "tags": [
      "信号",
      "第1段階"
    ],
    "type": "truefalse"
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
    "explanation": "車両は停止位置で一時停止しなければなりません。停止後に安全を確認して進みます。黄色の点滅との違いです。",
    "source": "道路交通法施行令",
    "sourceVersion": "",
    "sourceSection": "第2条（信号の意味／点滅信号）",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "信号",
      "点滅信号"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C003",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "信号",
    "topic": "信号機の意味（矢印信号）",
    "question": "赤信号と右向きの青色矢印が出ているとき、普通乗用車は右折も直進もできる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "右向きの矢印はその方向への進行を認めるものです。直進の矢印がなければ直進できません。二段階右折する一般原付等とは区別します。",
    "source": "道路交通法施行令",
    "sourceVersion": "",
    "sourceSection": "第2条（信号の意味／矢印信号）",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "信号",
      "矢印信号"
    ],
    "type": "truefalse"
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
    "sourceVersion": "",
    "sourceSection": "第22条（最高速度）",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 1,
    "tags": [
      "標識",
      "速度"
    ],
    "type": "truefalse"
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
    "explanation": "指定場所での一時停止は見通しや車の有無に左右されません。停止線がない場合は交差点の直前で止まります。",
    "source": "道路交通法",
    "sourceVersion": "",
    "sourceSection": "第43条",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 1,
    "tags": [
      "標識",
      "一時停止"
    ],
    "type": "truefalse"
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
    "explanation": "車両進入禁止は車両の進入を禁止する標識で、歩行者の通行を禁止する標識ではありません。車両の対象や時間帯は補助標識も確認します。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceVersion": "",
    "sourceSection": "規制標識（車両進入禁止）",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 1,
    "tags": [
      "標識",
      "進入禁止"
    ],
    "type": "truefalse"
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
    "explanation": "左折は前もって左に寄り、左側端に沿って徐行します。寄せる前と曲がる前に二輪車・自転車等を確認し、巻込みを防ぎます。",
    "source": "道路交通法",
    "sourceVersion": "",
    "sourceSection": "第34条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "交差点",
      "左折"
    ],
    "type": "truefalse"
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
    "sourceVersion": "",
    "sourceSection": "道路交通法 第34条第2項・第4項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "交差点",
      "右折"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C009",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "交差点・右左折",
    "topic": "交差点の優先関係（左方優先）",
    "question": "交通整理がなく、道幅がほぼ同じで優先道路もない交差点では、右方から来る車の進行を妨げてはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この条件では左方から進行してくる車両の進行を妨げてはいけません。優先道路や明らかに広い道路がある場合は別の優先関係になります。右方の車を無視してよい意味ではなく、状況に応じた安全確認は必要です。",
    "source": "道路交通法",
    "sourceVersion": "",
    "sourceSection": "第36条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "交差点",
      "優先関係"
    ],
    "type": "truefalse"
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
    "sourceVersion": "",
    "sourceSection": "道路交通法 第36条第2項・第3項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "交差点",
      "優先関係"
    ],
    "type": "truefalse"
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
    "explanation": "見通しがきかない交差点は徐行場所です。ただし交通整理が行われている場合や優先道路を通行している場合は、この規定による徐行義務の例外です。安全確認は必要です。",
    "source": "道路交通法",
    "sourceVersion": "",
    "sourceSection": "第42条",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "徐行"
    ],
    "type": "truefalse"
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
    "explanation": "前の車に続く場合も、踏切直前、停止線があればその直前で止まり、安全を確認します。信号機の信号に従って通る場合は一時停止の例外があります。",
    "source": "道路交通法",
    "sourceVersion": "",
    "sourceSection": "第33条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 1,
    "tags": [
      "一時停止",
      "踏切"
    ],
    "type": "truefalse"
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
    "explanation": "横断中や横断しようとする歩行者がいるときは、横断歩道直前で一時停止し、通行を妨げてはいけません。歩行者に警音器で道を譲らせることはできません。",
    "source": "道路交通法",
    "sourceVersion": "",
    "sourceSection": "第38条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 1,
    "tags": [
      "一時停止",
      "横断歩道"
    ],
    "type": "truefalse"
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
    "explanation": "3以上の車両通行帯では、最も右側を除く通行帯を速度に応じて通行できます。追越しや右折等の適法な例外と、標識等による通行区分は別に確認します。",
    "source": "道路交通法",
    "sourceVersion": "",
    "sourceSection": "第20条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "車線",
      "通行区分"
    ],
    "type": "truefalse"
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
    "explanation": "追越しを理由に進路変更禁止を無視することはできません。工事等の障害でその通行帯を通れない場合など、法定の例外とは区別します。",
    "source": "道路標識、区画線及び道路標示に関する命令",
    "sourceVersion": "",
    "sourceSection": "道路交通法 第26条の2第3項／標示命令 規制標示102の2（進路変更禁止）",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "車線",
      "進路変更"
    ],
    "type": "truefalse"
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
    "explanation": "中央線等がない一般道路の自動車の法定最高速度は30km/hです。標識等による速度指定がある道路や高速道路、中央線等のある道路は同じ条件ではありません。",
    "source": "警察庁ウェブサイト「生活道路における自動車の法定速度が引き下げられます！！」",
    "sourceVersion": "令和8年9月1日施行（道路交通法施行令の一部改正）／交通の方法に関する教則も同日付で改正（令和8年7月17日付 令和8年国家公安委員会告示第32号）",
    "sourceSection": "道路交通法施行令 第11条",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "法改正",
      "2026年9月改正",
      "生活道路",
      "速度"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C017",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "速度",
    "topic": "生活道路と標識優先の関係",
    "question": "法定速度30km/hの生活道路でも、普通乗用車に最高速度50km/hの標識が適用される区間では、30km/hが優先される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "標識等で速度が指定されている場合は指定速度が適用されます。この場合の最高速度は50km/hですが、危険な状況でその速度を出してよいという意味ではありません。",
    "source": "警察庁ウェブサイト「生活道路における自動車の法定速度が引き下げられます！！」",
    "sourceVersion": "令和8年9月1日施行（道路交通法施行令の一部改正）／交通の方法に関する教則も同日付で改正（令和8年7月17日付 令和8年国家公安委員会告示第32号）",
    "sourceSection": "道路交通法 第22条第1項／道路交通法施行令 第11条",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "法改正",
      "2026年9月改正",
      "生活道路",
      "速度"
    ],
    "type": "truefalse"
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
    "explanation": "横断歩道がなくても、交差点またはその直近を横断する歩行者を妨げてはいけません。横断歩道での歩行者優先とは別に定められています。",
    "source": "道路交通法",
    "sourceVersion": "",
    "sourceSection": "第38条の2",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 1,
    "tags": [
      "歩行者",
      "安全運転"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C019",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "歩行者・自転車",
    "topic": "自転車の右側を通過するとき（2026年4月施行の新ルール）",
    "question": "自動車が車道上を同じ方向に進む自転車の右側を通過する際（追越しを除く）、十分な間隔をとれないときは、自転車が左側に寄っても、間隔に応じた安全な速度で進行する必要がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "追越しを除く側方通過について、自動車側には、十分な間隔がとれない場合に間隔に応じた安全な速度で進む義務があります。自転車側にもできる限り左側端に寄る義務がありますが、それによって自動車側の義務がなくなるわけではありません。",
    "source": "警察庁ウェブサイト「自動車等が自転車等の側方を通過する場合の通行方法」",
    "sourceVersion": "令和8年4月1日施行（改正道路交通法）",
    "sourceSection": "道路交通法 第18条第3項（自転車側は同条第4項）",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 3,
    "tags": [
      "法改正",
      "2026年4月施行",
      "自転車"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C020",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "安全運転",
    "topic": "悪天候時の運転",
    "question": "雨で路面が滑りやすいときでも、前の車と同じ速度なら、晴れの日と同じ車間距離でよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "雨の日は晴れの日より速度を落とし、車間距離を十分に取ります。路面が滑りやすくなるため、前の車と同じ速度でも短い車間距離では安全とは限りません。",
    "source": "交通の方法に関する教則",
    "sourceVersion": "",
    "sourceSection": "交通の方法に関する教則 第6章 第4節 1(2)（雨の日の運転）",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 1,
    "tags": [
      "安全運転",
      "悪天候"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C021",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "通行位置・車線",
    "topic": "通行位置・車線",
    "question": "普通乗用車で道路外の駐車場へ入るため歩道を横切るときは、歩行者が見えなくても歩道に入る直前で一時停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "歩道を横切る場合は、直前で一時停止し、歩行者の通行を妨げないようにします。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第17条第2項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "通行位置・車線"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C022",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "通行位置・車線",
    "topic": "通行位置・車線",
    "question": "歩道と車道が区別されている道路では、渋滞を避けるために普通乗用車で歩道を走ってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "普通乗用車は車道を通行します。渋滞を避ける目的で歩道を走ることはできません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第17条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "通行位置・車線"
    ],
    "type": "truefalse"
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
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第26条の2第2項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "進路変更"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C024",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "進路変更",
    "topic": "進路変更",
    "question": "道路外の店へ右折して入るときは、歩行者や他の車の正常な交通を妨げるおそれがあっても進んでよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路外へ出入りするための右左折でも、正常な交通を妨げるおそれがあるときは行えません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第25条の2第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "進路変更"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C025",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "追越し",
    "topic": "追越し",
    "question": "右折のため道路の中央に寄っている前の車を追い越すときは、周囲の安全を確認し、その車の左側を通る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "前車が右折などのため中央や右側端へ寄っている場合は、左側を通って追い越します。安全な速度と方法で行います。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第28条第2項・第4項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C026",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "追越し",
    "topic": "追越し",
    "question": "前の普通乗用車が別の自動車を追い越そうとしているときでも、その2台をまとめて追い越し始めてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "前車が他の自動車を追い越そうとしているときは、追越しを始めてはいけません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第29条",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C027",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "追越し",
    "topic": "追越し",
    "question": "車両通行帯のないトンネルでは、前を走る普通乗用車を追い越してはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車両通行帯が設けられていないトンネルは追越し禁止の場所です。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第30条第2号",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C028",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "追越し",
    "topic": "追越し",
    "question": "横断歩道の手前20mの場所では、歩行者がいなければ前を走る普通乗用車を追い越してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横断歩道とその手前30m以内では、普通乗用車などを追い越すことは禁止されています。歩行者の有無では変わりません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第30条第3号",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "type": "truefalse"
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
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第33条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "踏切"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C030",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "踏切",
    "topic": "踏切",
    "question": "踏切の警報機が鳴り始めても、遮断機がまだ上がっていれば踏切に入ってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "警報機が警報している間は進入できません。遮断機が上がっているかだけで判断しないようにします。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第33条第2項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "踏切"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C031",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "踏切",
    "topic": "踏切",
    "question": "前方の渋滞で踏切内に止まるおそれがあるときは、踏切に入ってはならない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "踏切内で停止してしまうおそれがあるときは進入できません。踏切の先に通過できる余地があるか確認します。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第33条第3項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "踏切"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C032",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "交差点・右左折",
    "topic": "交差点・右左折",
    "question": "交差点で右折するときは、対向する直進車より右折車が優先される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "交差点で右折する車は、直進または左折する車の進行を妨げてはいけません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第37条",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "交差点・右左折"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C033",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "歩行者・自転車",
    "topic": "歩行者・自転車",
    "question": "信号機のない横断歩道に近づき、横断する歩行者がいないことが明らかでないときは、直前で停止できる速度で進む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "横断する人がいないことが明らかな場合を除き、横断歩道の直前で止まれる速度にします。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第38条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "歩行者・自転車"
    ],
    "type": "truefalse"
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
    "explanation": "横断歩道の直前で止まっている車の側方を通過して前方へ出る前には、一時停止が必要です。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第38条第2項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "歩行者・自転車"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C035",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "緊急車両",
    "topic": "緊急車両",
    "question": "交差点付近で緊急自動車が近づいたときは、原則として交差点を避け、道路の左側に寄って一時停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点付近では交差点を避けて左側へ寄り、一時停止して道を譲ります。一方通行には右側へ寄る例外があります。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第40条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "緊急車両"
    ],
    "type": "truefalse"
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
    "explanation": "交差点付近以外でも、原則として左側へ寄って緊急自動車に進路を譲ります。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第40条第2項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "緊急車両"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C037",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "駐車・停車",
    "topic": "駐車・停車",
    "question": "交差点の側端から3mの場所では、法令上の例外や特別な許可がなければ、短時間の停車もできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交差点の側端から5m以内は駐停車禁止です。短時間でも停車できません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第44条第2号",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "駐車・停車"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C038",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "駐車・停車",
    "topic": "駐車・停車",
    "question": "横断歩道の前後3mの場所では、法令上の例外や特別な許可がなくても、人を降ろすためなら停車してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "横断歩道の前後5m以内は駐停車禁止です。乗降のための停車も原則できません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第44条第3号",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "駐車・停車"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C039",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "駐車・停車",
    "topic": "駐車・停車",
    "question": "踏切の前後8mの場所では、法令上の例外や特別な許可がなければ、駐車も停車もできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "踏切の前後10m以内は駐停車禁止です。踏切を通る車の安全と通行を確保します。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第44条第6号",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "駐車・停車"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C040",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "駐車・停車",
    "topic": "駐車・停車",
    "question": "駐車禁止の場所でも、運転者が車内にいれば時間制限なく客待ちのために駐車してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車内にいるかどうかだけで駐車か停車かは決まりません。客待ちによる継続的な停止も駐車に当たります。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第45条／第2条第1項第18号",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "駐車・停車"
    ],
    "type": "truefalse"
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
    "explanation": "酒気を帯びた状態での運転は禁止です。自分では大丈夫と思っても運転しないようにします。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第65条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "安全運転"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C042",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "安全運転",
    "topic": "安全運転",
    "question": "眠気や疲労で正常な運転ができないおそれがあっても、目的地が近ければ運転を続けてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "過労などで正常な運転ができないおそれがある状態では、運転してはいけません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第66条",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "安全運転"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C043",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "安全運転",
    "topic": "安全運転",
    "question": "車を運転するときは、道路や交通の状況に応じ、他人に危害を及ぼさない速度と方法で運転する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "法定速度を守るだけでは足りません。道路・交通・車両の状況に応じた安全な運転が必要です。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第70条",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "安全運転"
    ],
    "type": "truefalse"
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
    "explanation": "走行中に手で保持する携帯電話を通話に使うことは禁止です。救護等で緊急やむを得ない場合の例外とは区別します。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第71条第5号の5",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "安全運転"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C045",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "乗車・安全確認",
    "topic": "乗車・安全確認",
    "question": "シートベルトを備える普通乗用車では、免除される事情がなければ、一般道路でも後部座席の同乗者にシートベルトを着用させる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "後部座席も原則として着用が必要です。高速道路だけの義務ではありません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第71条の3第2項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "乗車・安全確認"
    ],
    "type": "truefalse"
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
    "explanation": "安全を確認せずにドアを開けたり降りたりしてはいけません。同乗者が危険を生じさせないための配慮も必要です。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第71条第4号の3",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "乗車・安全確認"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C047",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "乗車・安全確認",
    "topic": "乗車・安全確認",
    "question": "駐車して車を離れるときは、エンジンを止め、ブレーキを確実にかけるなど、車が動かないための措置をとる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "車を離れる際は、原動機を止めるなど停止状態を保つための措置が必要です。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第71条第5号",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "乗車・安全確認"
    ],
    "type": "truefalse"
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
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第54条第2項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "警音器"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C049",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "緊急時",
    "topic": "緊急時",
    "question": "交通事故を起こしたときは、直ちに停止し、負傷者の救護や道路の危険防止など必要な措置をとる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "事故の際は直ちに停止して救護・危険防止を行い、警察へ報告します。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第72条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "緊急時"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C050",
    "reviewStatus": "reviewed",
    "stage": "first",
    "category": "緊急時",
    "topic": "緊急時",
    "question": "人にけががない物損事故なら、相手と話し合えば警察への報告を省略してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "物損事故でも交通事故の報告が必要です。当事者間の話し合いだけでは省略できません。",
    "source": "e-Gov法令検索 道路交通法",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料・該当条文照合",
    "sourceSection": "道路交通法 第72条第1項",
    "lastVerifiedDate": "2026-10-02",
    "difficulty": 2,
    "tags": [
      "緊急時"
    ],
    "type": "truefalse"
  },
  {
    "id": "D-C051",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "中央線がある道路では、その線を基準に左側部分を通行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路全体の幅の中央とは限らず、中央線の位置が基準です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第17条第4項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C052",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "道路工事で左側を通れなくても、右側部分へは一切はみ出せない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "左側部分を通れない工事等は例外です。はみ出しを最小限にし安全確認します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第17条第5項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C053",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "一方通行では、中央から右側の部分も通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "左側通行の例外ですが、通行帯や標識の指定にも従います。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第17条第5項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C054",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "左側部分の幅が6m以上ある道路でも、追越しだけを理由に右側にはみ出せる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "追越しのためにはみ出せる例外は、左側部分が6m未満の場合です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第17条第5項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第17条第5項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第17条第5項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C057",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "歩行者がいない安全地帯にも、普通乗用車は入れない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "安全地帯は車両の通行のための部分ではありません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第17条第6項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C058",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通行位置",
    "question": "普通乗用車は、渋滞時に自転車道を迂回路として走れる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "自転車道を通行できません。道路外施設への出入りの横断は別の例外です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第17条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C059",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "歩行者の保護",
    "question": "歩行者の側方で安全な間隔を保てないときは、徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "側方通過では、安全な間隔を保つか徐行します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第18条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "普通乗用車は左側に寄ります。軽車両等の左側端という規定と区別します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第18条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "通行位置",
    "difficulty": 2,
    "tags": [
      "通行位置"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C061",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "車両通行帯",
    "question": "標識等で車種別の通行帯が指定されていれば、その指定に従う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "指定された通行区分を守ります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第20条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "車両通行帯",
    "difficulty": 2,
    "tags": [
      "車両通行帯"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C062",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "車両通行帯",
    "question": "片側3車線で特別な指定がなければ、最も右の車線を普通乗用車の常用車線にできる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "通常は最も右を除く通行帯を速度に応じて使います。追越し等は別です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第20条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "車両通行帯",
    "difficulty": 2,
    "tags": [
      "車両通行帯"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C063",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "車両通行帯",
    "question": "通行帯のある道路で追越すときは、現在の通行帯のすぐ右隣を使う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "追越しでは直近の右側の通行帯を使います。変更禁止等にも従います。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第20条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "車両通行帯",
    "difficulty": 2,
    "tags": [
      "車両通行帯"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C064",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "車両通行帯",
    "question": "追越しでは、一つ飛ばして右の通行帯に移るのが原則である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "直近の右側通行帯を使う規定です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第20条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "車両通行帯",
    "difficulty": 2,
    "tags": [
      "車両通行帯"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "左折等の横断は例外です。電車と周囲の安全を確かめます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第21条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C066",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "渋滞を避けるという理由だけで、普通乗用車は軌道敷内を走れる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "渋滞回避だけでは軌道敷内を通行できる例外に当たりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第21条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C067",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "道路工事で軌道敷外の左側を通れない場合、電車を妨げず軌道敷内を通行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "工事等で通れない場合は例外ですが、電車の通行を妨げてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第21条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C068",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "軌道敷を適法に走っていれば、後方から来る路面電車に道を空けなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "速やかに軌道敷外へ出る等、電車の正常な運行を妨げない措置が必要です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第21条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第22条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "速度",
    "difficulty": 2,
    "tags": [
      "速度"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C070",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "速度",
    "question": "後車に急かされたら、普通乗用車の指定最高速度を超えてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後車の行動で速度制限は変わりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第22条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "速度",
    "difficulty": 2,
    "tags": [
      "速度"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "法令による減速や危険防止の場合には例外があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第23条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "速度",
    "difficulty": 2,
    "tags": [
      "速度"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C072",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "速度",
    "question": "一般道路の最低速度指定があれば、赤信号でも停止できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "信号等の法令による減速は例外です。信号を守ります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第23条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "速度",
    "difficulty": 2,
    "tags": [
      "速度"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "危険防止のためやむを得ない場合は例外です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第24条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "ブレーキ",
    "difficulty": 2,
    "tags": [
      "ブレーキ"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C074",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "ブレーキ",
    "question": "後車を驚かせる目的でも、ぶつからなければ急ブレーキをかけてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "危険防止の必要がない急ブレーキは禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第24条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "ブレーキ",
    "difficulty": 2,
    "tags": [
      "ブレーキ"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C075",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "道路外への出入り",
    "question": "店舗へ左折して入るときも、あらかじめ左側端に寄り徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路外へ左折する場合にも、寄せ方と徐行の規定があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第25条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "道路外への出入り",
    "difficulty": 2,
    "tags": [
      "道路外への出入り"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C076",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "道路外への出入り",
    "question": "一方通行から店へ右折する普通乗用車は、左側端から横切るのが原則である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "一方通行では、あらかじめ右側端に寄り徐行します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第25条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "道路外への出入り",
    "difficulty": 2,
    "tags": [
      "道路外への出入り"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C077",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "道路外への出入り",
    "question": "前車が駐車場へ左折するため合図して寄るとき、急な速度・方向変更が必要な場合を除き、その移動を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "道路外へ出るための合図に伴う進路変更も保護されます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第25条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "道路外への出入り",
    "difficulty": 2,
    "tags": [
      "道路外への出入り"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C078",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "転回・後退",
    "question": "転回では、車同士がぶつからなければ歩行者の正常な通行を妨げてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "正常な交通を妨害するおそれがある転回は禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第25条の2第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "転回・後退",
    "difficulty": 2,
    "tags": [
      "転回・後退"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C079",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "転回・後退",
    "question": "転回禁止の場所では、他の交通がなくても転回できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "交通がないことは規制を無視する理由にはなりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第25条の2第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "転回・後退",
    "difficulty": 2,
    "tags": [
      "転回・後退"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C080",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "転回・後退",
    "question": "後退する車は、歩行者に避けてもらえば正常な通行を妨げてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後退も正常な交通を妨害するおそれがある場合は禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第25条の2第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "転回・後退",
    "difficulty": 2,
    "tags": [
      "転回・後退"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "前車の急停止に備えた必要な距離を保ちます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第26条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "車間距離",
    "difficulty": 2,
    "tags": [
      "車間距離"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "車種だけを理由に必要な車間距離を省略できません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第26条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "車間距離",
    "difficulty": 2,
    "tags": [
      "車間距離"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "合図を出しても、みだりな進路変更は禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第26条の2第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "進路変更",
    "difficulty": 2,
    "tags": [
      "進路変更"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C084",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "進路変更",
    "question": "進路変更禁止の道路標示は、工事で自分の通行帯が通れない場合にも一切越えられない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "道路工事等で通れない場合や緊急車両に譲る場合等に例外があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第26条の2第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "進路変更",
    "difficulty": 2,
    "tags": [
      "進路変更"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C085",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追い越されるとき",
    "question": "後車より遅い速度で走り続ける普通乗用車は、追いつかれた後、後車の追越しが終わるまで加速しない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "追い越される車が加速すると、追越しを妨げ危険になります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第27条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追い越されるとき",
    "difficulty": 2,
    "tags": [
      "追い越されるとき"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C086",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追い越されるとき",
    "question": "通行帯のない道で、遅い速度を続ける自車と中央の間に後車が通れる余地がなくても、左へ寄る必要はない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "条文の条件に該当する場合、左側端に寄って進路を譲ります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第27条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追い越されるとき",
    "difficulty": 2,
    "tags": [
      "追い越されるとき"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C087",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し",
    "question": "前車が右折のため中央等に寄る例外を除き、車の追越しは前車の右側を通る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "右側が原則です。右折待ちや路面電車等には別の規定があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第28条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追越し",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "路面電車は左側からが原則です。軌道が左側端に寄る場合は例外です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第28条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追越し",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "対向・後方・前車の前方を含め、安全を判断します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第28条第4項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追越し",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C090",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し",
    "question": "前車より速く走れるなら、前車の進路や道路の状況を考慮せず追い越せる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "前車の速度・進路や道路状況に応じ、安全な速度と方法で進みます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第28条第4項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追越し",
    "difficulty": 2,
    "tags": [
      "追越し"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "曲がり角付近は法律で定める追越し禁止場所です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C092",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し禁止",
    "question": "上り坂の頂上付近で対向車が見えなければ、普通乗用車を追い越してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "頂上付近は追越し禁止です。見えないことは安全の根拠になりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C093",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し禁止",
    "question": "勾配の急な下り坂では、普通乗用車の追越しは禁止される。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "急な下り坂は追越し禁止場所です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "踏切とその手前30m以内は追越し禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "自転車横断帯とその手前30m以内も禁止場所です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C096",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "追越し禁止",
    "question": "交通整理がなく優先道路でもない交差点の手前10mなら、普通乗用車を追い越せる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この条件では交差点とその手前30m以内が追越し禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第30条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "追越し禁止",
    "difficulty": 2,
    "tags": [
      "追越し禁止"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C097",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "安全地帯がなく乗客が乗降中の路面電車に追いついた場合、原則として後方で停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "乗降の終了等を待ちます。安全地帯等の例外がなければ停止します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第31条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C098",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "路面電車",
    "question": "安全地帯がある停車中の路面電車の左側は、減速せず通過できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "安全地帯がある場合でも、徐行して通過する規定です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第31条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "乗降する人がいないことと1.5m以上の間隔の両方が必要です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第31条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "路面電車",
    "difficulty": 2,
    "tags": [
      "路面電車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C100",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "バス",
    "question": "停留所から発進する路線バスが合図しても、後車はその進路変更を自由に妨げられる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後車が急な速度・方向変更を必要とする場合を除き、妨げてはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第31条の2第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "バス",
    "difficulty": 2,
    "tags": [
      "バス"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "法令等に従い停止・徐行する車や車列への割込みは禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第32条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "割込み",
    "difficulty": 2,
    "tags": [
      "割込み"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C102",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "割込み",
    "question": "危険を避けるため停止している前車なら、そのすぐ前を横切ってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "危険防止のため停止する車の前を横切ることも禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第32条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "割込み",
    "difficulty": 2,
    "tags": [
      "割込み"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C103",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "踏切",
    "question": "踏切に停止線がある場合、信号に従い停止せず通れる例外を除き、停止線の直前で止まる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "停止線がある場合、その直前が停止位置です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第33条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "踏切",
    "difficulty": 2,
    "tags": [
      "踏切"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C104",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "踏切",
    "question": "踏切内で動けなくなったら、車を動かし終えてから鉄道側へ知らせればよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "直ちに非常信号等で知らせる措置と、踏切外に移す措置が必要です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第33条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "踏切",
    "difficulty": 2,
    "tags": [
      "踏切"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C105",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "右左折",
    "question": "一方通行から普通乗用車で右折する場合、特別な通行方法の指定がなければ、あらかじめ右側端へ寄る。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "一方通行からは中央ではなく右側端に寄ります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第34条第4項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "右左折",
    "difficulty": 2,
    "tags": [
      "右左折"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C106",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "右左折",
    "question": "一方通行からの右折なら、普通乗用車は徐行せず曲がってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "一方通行からの右折でも徐行が必要です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第34条第4項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "右左折",
    "difficulty": 2,
    "tags": [
      "右左折"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C107",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "右左折",
    "question": "前車が左折の合図をして左へ寄るとき、急な速度・方向変更が必要な場合を除き、その移動を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "右左折の準備で合図した車の進路変更を妨げない規定があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第34条第6項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "右左折",
    "difficulty": 2,
    "tags": [
      "右左折"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "指定された進行方向別の通行区分を守ります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第35条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "進行方向別通行",
    "difficulty": 2,
    "tags": [
      "進行方向別通行"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C109",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "進行方向別通行",
    "question": "進行方向別の通行帯指定があっても、道路工事で通れずやむを得ない場合には例外がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "工事等のやむを得ない事情や緊急自動車に譲る場合等は例外です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第35条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "進行方向別通行",
    "difficulty": 2,
    "tags": [
      "進行方向別通行"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C110",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "交差点",
    "question": "中央線が交差点の手前まであるだけでも、必ず優先道路になる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "中央線等による優先道路の条件は、交差点内にも線等があることです。標識指定の場合もあります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第36条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "交差点",
    "difficulty": 2,
    "tags": [
      "交差点"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "相手の進行を妨げず、徐行も必要です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第36条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "交差点",
    "difficulty": 2,
    "tags": [
      "交差点"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C112",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "交差点",
    "question": "交差点に入った後は、横断歩行者への注意をやめて対向車だけを見ればよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "進入時も交差点内でも、歩行者や交差交通等に特に注意します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第36条第4項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "交差点",
    "difficulty": 2,
    "tags": [
      "交差点"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "自転車横断帯の横断者も保護の対象です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第38条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "自転車横断帯",
    "difficulty": 2,
    "tags": [
      "自転車横断帯"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C114",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "横断歩道",
    "question": "信号のない横断歩道の手前15mでは、車線を変えず普通乗用車の横を通って前へ出てよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "進路変更の有無に関係なく、手前30m以内でのこの通過は原則禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第38条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "横断歩道",
    "difficulty": 2,
    "tags": [
      "横断歩道"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C115",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "緊急自動車",
    "question": "一方通行で左へ寄ると緊急自動車を妨げる場合、交差点付近では右へ寄り、交差点を避け一時停止する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "一方通行で左寄せが妨げになる場合は右に寄る例外です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第40条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "緊急自動車",
    "difficulty": 2,
    "tags": [
      "緊急自動車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C116",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "緊急自動車",
    "question": "緊急自動車は赤信号でも、他の交通に注意せず普通の速度で進める。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "停止を要しない場合も、他の交通に注意して徐行します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第39条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "緊急自動車",
    "difficulty": 2,
    "tags": [
      "緊急自動車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C117",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "徐行",
    "question": "徐行の指定区間では、見通しがよくても徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "見通しがよいことだけで指定を省略できません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第42条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "徐行",
    "difficulty": 2,
    "tags": [
      "徐行"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C118",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "徐行",
    "question": "見通しのよい曲がり角付近には、法律上の徐行義務がない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "曲がり角付近は見通しに関係なく徐行する場所です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第42条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "徐行",
    "difficulty": 2,
    "tags": [
      "徐行"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C119",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "徐行",
    "question": "上り坂の頂上付近は、徐行しなければならない場所である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "上り坂の頂上付近と急な下り坂には徐行の規定があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第42条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "徐行",
    "difficulty": 2,
    "tags": [
      "徐行"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C120",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "一時停止",
    "question": "一時停止の標識があって停止線がなければ、交差点から離れた標識の真横で止まるだけでよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "停止線がなければ交差点の直前で停止します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第43条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "一時停止",
    "difficulty": 2,
    "tags": [
      "一時停止"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C121",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "一時停止",
    "question": "一時停止の標識に従って止まった後も、交差道路の車の進行を妨げない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "一時停止したことだけで優先権を得るわけではありません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第43条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "一時停止",
    "difficulty": 2,
    "tags": [
      "一時停止"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C122",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐停車",
    "question": "トンネルで、一般の普通乗用車は友人を降ろすための短時間停車ができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "法令等による停止の例外を除き、トンネルは駐停車禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第44条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐停車",
    "difficulty": 2,
    "tags": [
      "駐停車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C123",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐停車",
    "question": "法令等の例外がなければ、普通乗用車は急な上り坂でも駐停車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "駐停車禁止の急な坂は下りだけではありません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第44条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐停車",
    "difficulty": 2,
    "tags": [
      "駐停車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C124",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐停車",
    "question": "曲がり角から4mの場所は、交差点でなければ普通乗用車を自由に停車できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "曲がり角から5m以内も、例外を除き駐停車禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第44条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐停車",
    "difficulty": 2,
    "tags": [
      "駐停車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C125",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐停車",
    "question": "安全地帯の左側と、その前後の端から10m以内は、法令等の例外を除き駐停車禁止である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "安全地帯の左側には前後10mを含む禁止範囲があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第44条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐停車",
    "difficulty": 2,
    "tags": [
      "駐停車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C126",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐停車",
    "question": "運行時間中でもバス停の標示柱から8mなら、一般の普通乗用車で客待ちの駐車ができる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "運行時間中は10m以内が駐停車禁止です。路線バス等の例外とは別です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第44条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐停車",
    "difficulty": 2,
    "tags": [
      "駐停車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C127",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐停車",
    "question": "駐停車禁止の場所でも、歩行者との衝突を防ぐため一時停止できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "危険防止や法令、警察官の命令による一時停止は例外です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第44条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐停車",
    "difficulty": 2,
    "tags": [
      "駐停車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C128",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐車",
    "question": "車庫の自動車用出入口から2mでも、警察署長の許可なしで駐車できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "出入口から3m以内は駐車禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第45条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐車",
    "difficulty": 2,
    "tags": [
      "駐車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C129",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐車",
    "question": "工事区域の端から4mでは、警察署長の許可等の例外がなければ駐車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "工事区域の端から5m以内は駐車禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第45条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐車",
    "difficulty": 2,
    "tags": [
      "駐車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C130",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐車",
    "question": "消火栓から4mでも、駐車禁止の標識がなければ自由に駐車できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "標識がなくても5m以内は駐車禁止です。許可の例外は別です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第45条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐車",
    "difficulty": 2,
    "tags": [
      "駐車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C131",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐車",
    "question": "火災報知機から1m以内は、許可等の例外がなければ駐車できない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "火災報知機の周囲には1m以内の駐車禁止範囲があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第45条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐車",
    "difficulty": 2,
    "tags": [
      "駐車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C132",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐車",
    "question": "別の距離指定がなく、駐車後の右側に3mの余地しかなくても、客待ちなら常に駐車できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "原則3.5m以上が必要です。客待ちは貨物積卸しや救護等の例外とは違います。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第45条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐車",
    "difficulty": 2,
    "tags": [
      "駐車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C133",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐車",
    "question": "右側に残す余地の距離指定が標識等にあれば、その指定距離で判断する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "原則3.5mですが、標識等の距離指定があればその距離を使います。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第45条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐車",
    "difficulty": 2,
    "tags": [
      "駐車"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C134",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐停車の方法",
    "question": "歩道・路側帯のない道で人を降ろすときは、中央に短時間停車してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "できる限り左側端に沿い、他の交通を妨げず停車します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第47条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐停車の方法",
    "difficulty": 2,
    "tags": [
      "駐停車の方法"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C135",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐停車の方法",
    "question": "駐車できる場所でも、他の交通を妨げない方法で駐車する必要がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "禁止場所の規制だけでなく、駐車方法の規定も守ります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第47条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐停車の方法",
    "difficulty": 2,
    "tags": [
      "駐停車の方法"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "交差交通を妨げるおそれがあるなら、青信号でも進入しません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第50条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "渋滞",
    "difficulty": 2,
    "tags": [
      "渋滞"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第50条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "渋滞",
    "difficulty": 2,
    "tags": [
      "渋滞"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C138",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "灯火",
    "question": "法律上の夜間は、午後8時から翌朝6時までという固定時刻である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "夜間は日没から日の出までです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第52条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "灯火",
    "difficulty": 2,
    "tags": [
      "灯火"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C139",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "灯火",
    "question": "夜間、前照灯が前車の交通を妨げるおそれがあれば、減光等を適切に行う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "対向車だけでなく前車を妨げる場合も灯火を操作します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第52条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "灯火",
    "difficulty": 2,
    "tags": [
      "灯火"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C140",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "灯火",
    "question": "夜間でも、街灯で明るい道路なら普通乗用車は灯火をつけなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "街灯の明るさだけで夜間の所定の灯火を省略できません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第52条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "灯火",
    "difficulty": 2,
    "tags": [
      "灯火"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C141",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図",
    "question": "右左折の合図は、その右左折を終えるまで続ける。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "行為が終わるまで継続します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第53条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "合図",
    "difficulty": 2,
    "tags": [
      "合図"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C142",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図",
    "question": "右折しなくても、後車へのあいさつで右折の合図を出してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "対応する行為をしないのに合図を出してはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第53条第4項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "合図",
    "difficulty": 2,
    "tags": [
      "合図"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "行為を終えたときは合図をやめます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第53条第4項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "合図",
    "difficulty": 2,
    "tags": [
      "合図"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C144",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図",
    "question": "普通乗用車の後退には、法律上、合図が不要である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "後退も所定の合図をする行為に含まれます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第53条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "合図",
    "difficulty": 2,
    "tags": [
      "合図"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C145",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "警音器",
    "question": "警音器を鳴らす指定がある見通しの悪い曲がり角では、警音器を鳴らす。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "標識等で指定された見通しの悪い場所では使用義務があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第54条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "警音器",
    "difficulty": 2,
    "tags": [
      "警音器"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "あいさつは使用義務や危険防止の例外には当たりません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第54条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "警音器",
    "difficulty": 2,
    "tags": [
      "警音器"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C147",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "乗車・積載",
    "question": "荷物は、運転者の視野やハンドル操作を妨げないように積む。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "視野、操作、鏡の働き等を妨げる積載は禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第55条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "乗車・積載",
    "difficulty": 2,
    "tags": [
      "乗車・積載"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C148",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "乗車・積載",
    "question": "荷物で後ろの番号標が見えなくても、落ちなければ運転できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "外部から番号標や灯火等が確認できなくなる積載はできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第55条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "乗車・積載",
    "difficulty": 2,
    "tags": [
      "乗車・積載"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C149",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "乗車・積載",
    "question": "同乗者は、後写鏡の働きを妨げる位置や姿勢で乗らない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "運転者はそのような乗車をさせてはいけません。乗客にも規定があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第55条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "乗車・積載",
    "difficulty": 2,
    "tags": [
      "乗車・積載"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C150",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "乗車・積載",
    "question": "普通乗用車の屋根には、低速なら人を乗せて走れる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "乗車のために設備された場所以外に乗せて運転できません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第55条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "乗車・積載",
    "difficulty": 2,
    "tags": [
      "乗車・積載"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C151",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "黄色の点滅信号では、他の交通に注意して進行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "黄色の点滅は、他の交通に注意して進むことができる信号です。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C152",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "黄色の矢印信号が右を向いていれば、普通乗用車も右折できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "黄色の矢印は路面電車に対する信号です。普通乗用車には適用されません。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C153",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "交差点ですでに左折している車は、信号が赤に変わってもそのまま進行できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "すでに左折している車は、そのまま進行できます。安全を確認して交差点を抜けます。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C154",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "すでに右折中に信号が赤へ変わった普通乗用車は、新たに青信号で進む車の進行を妨げてもよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "すでに右折中なら進めますが、新たに青信号で進む車の進行を妨げてはいけません。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C155",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "歩行者用信号の青色が点滅し始めたら、歩行者は新しく横断を始めてはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "青色点滅では横断を始められません。横断中の人は速やかに横断を終えるか、引き返します。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C157",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "交差点以外にある信号で、停止線も横断歩道も踏切もない場合、停止位置は信号機の直前である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "この条件では、信号機の直前が停止位置です。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C158",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "車の停止線がある赤信号では、停止線を越えて横断歩道のすぐ前まで進んでから止まる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "停止線がある場合は、その停止線の直前で停止します。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "左折可の表示に従って左折できます。ただし、青信号で進む車や歩行者等の通行を妨げてはいけません。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第2条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C160",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "信号",
    "question": "バス専用と表示された信号は、普通乗用車にも常に同じ意味を表示する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "特定の車両に対する信号は、その表示の対象となる車両に適用されます。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第2条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "信号",
    "difficulty": 2,
    "tags": [
      "信号"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第21条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "合図の時期",
    "difficulty": 2,
    "tags": [
      "合図の時期"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C162",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図の時期",
    "question": "車線を変える合図は、変更しようとする30m手前に達したときに出す決まりである。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "進路変更の合図は、進路を変えようとする約3秒前に出します。右左折の30m手前と混同しないようにします。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第21条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "合図の時期",
    "difficulty": 2,
    "tags": [
      "合図の時期"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C163",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "合図の時期",
    "question": "同じ方向へ進みながら右へ進路を変えるときの合図は、変更を始める3秒前に出す。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "同じ方向へ進みながら進路を変える場合は、その行為の約3秒前に合図します。",
    "source": "道路交通法施行令（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335CO0000000270",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第21条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "合図の時期",
    "difficulty": 2,
    "tags": [
      "合図の時期"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法施行令 第21条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "合図の方法",
    "difficulty": 2,
    "tags": [
      "合図の方法"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "徐行は、直ちに停止できるような速度で進むことです。道路や交通の状況に応じて速度を調整します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "用語",
    "difficulty": 2,
    "tags": [
      "用語"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "徐行は一律に時速10kmと定められていません。直ちに停止できる速度にします。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "用語",
    "difficulty": 2,
    "tags": [
      "用語"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C167",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "用語",
    "question": "運転者が離れて直ちに運転できない状態で車を止めることも、駐車に当たる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "運転者が車を離れ、直ちに運転できない状態の停止も駐車です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "用語",
    "difficulty": 2,
    "tags": [
      "用語"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C168",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "用語",
    "question": "車が停止した時間が5分以内なら、どのような理由でも駐車には当たらない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "5分以内の貨物の積卸しのための停止などには例外がありますが、どんな停止でも5分以内なら駐車にならないわけではありません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "用語",
    "difficulty": 2,
    "tags": [
      "用語"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C169",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "用語",
    "question": "追越しとは、前車に追いつき、進路を変えてその横を通り前方へ出る行為である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "前車に追いつき、進路を変えて側方を通過し、前方へ出る行為が追越しです。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第2条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "用語",
    "difficulty": 2,
    "tags": [
      "用語"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C170",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "用語",
    "question": "側車も他車の牽引もない二輪自転車を押して歩く人は、歩行者として扱われない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "この条件の二輪自転車を押して歩く人は、歩行者として扱われます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第2条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "用語",
    "difficulty": 2,
    "tags": [
      "用語"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C171",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "免許",
    "question": "運転免許には、第一種、第二種、仮運転免許の区分がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "運転免許は第一種運転免許、第二種運転免許、仮運転免許に区分されます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第84条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "免許",
    "difficulty": 2,
    "tags": [
      "免許"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C172",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "仮免許",
    "question": "普通仮免許があれば、指導者を乗せずに一般道路で一人で練習できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "仮免許で道路を練習走行するときは、所定の資格がある指導者の同乗・指導が必要です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第87条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "仮免許",
    "difficulty": 2,
    "tags": [
      "仮免許"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "所定の資格がある指導者を運転者席の横の座席に乗せ、その指導を受けます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第87条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "仮免許",
    "difficulty": 2,
    "tags": [
      "仮免許"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C174",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "仮免許",
    "question": "仮免許で練習する車の標識は、前面だけに付ければよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "仮免許で練習中であることを示す標識は、車の前面と後面に付けます。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第87条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "仮免許",
    "difficulty": 2,
    "tags": [
      "仮免許"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C175",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "仮免許",
    "question": "普通仮免許で、タクシーの営業として旅客を運ぶ運転はできない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "仮免許では、第二種免許を要する旅客運送の運転はできません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第87条第4項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "仮免許",
    "difficulty": 2,
    "tags": [
      "仮免許"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "酒気を帯びて運転するおそれがある人に車を提供してはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第65条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "飲酒",
    "difficulty": 2,
    "tags": [
      "飲酒"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C177",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "飲酒",
    "question": "酒気を帯びて運転するおそれがある人に、お酒を提供したり飲酒をすすめたりしてはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "飲酒運転をするおそれがある人への酒類の提供や飲酒の勧奨も禁止されています。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第65条第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "飲酒",
    "difficulty": 2,
    "tags": [
      "飲酒"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C178",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "飲酒",
    "question": "酒気を帯びたことを知る友人に普通乗用車で送ってもらうよう頼み、その車に乗っても、同乗者には問題がない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "酒気を帯びたことを知りながら、その人に送迎を頼んで同乗することも禁止されています。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第65条第4項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "飲酒",
    "difficulty": 2,
    "tags": [
      "飲酒"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C179",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "体調",
    "question": "薬の影響で正常な運転ができないおそれがあるときは、車を運転してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "薬物の影響などで正常な運転ができないおそれがある状態では、運転してはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第66条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "体調",
    "difficulty": 2,
    "tags": [
      "体調"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C180",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "体調",
    "question": "病気で判断や操作が正常にできないおそれがあっても、ゆっくり走れば運転してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "病気などで正常な運転ができないおそれがある場合は、速度を落としても運転できません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第66条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "体調",
    "difficulty": 2,
    "tags": [
      "体調"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "水たまりやぬかるみでは、徐行するなどして泥や汚水を飛ばさないようにします。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C182",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "歩行者の保護",
    "question": "水たまりの泥を歩行者にかけても、車道内を走っていれば運転者は配慮する必要がない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "歩行者に泥や汚水を飛ばして迷惑をかけないよう、運転者の配慮が必要です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "explanation": "保護者の付き添いがない幼児などの通行を妨げないよう、一時停止または徐行します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C184",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "歩行者の保護",
    "question": "盲導犬を連れて歩く人の近くなら、犬が誘導するので速度への配慮をしなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "盲導犬を連れた視覚障害者などに対しても、一時停止または徐行して通行を妨げないようにします。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "歩行者の保護",
    "difficulty": 2,
    "tags": [
      "歩行者の保護"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C186",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "通学通園バス",
    "question": "児童の乗降で停車している所定の通学バスの横は、子どもが見えなければ減速せず通過できる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "児童等の乗降のため停車している所定の通学通園バスの側方では、徐行して安全を確認します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "通学通園バス",
    "difficulty": 2,
    "tags": [
      "通学通園バス"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C187",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "安全地帯",
    "question": "道路の左側にある安全地帯に歩行者がいる場合、その横を通るときは徐行する。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "左側にある安全地帯に歩行者がいる場合、その側方を通過するときは徐行します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "安全地帯",
    "difficulty": 2,
    "tags": [
      "安全地帯"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C188",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "乗車・積載",
    "question": "荷物が道路へ落ちた場合、その荷物の持ち主が後で回収すれば、運転者は何もしなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "積載物が転落・飛散したときは、運転者も速やかに必要な措置をとります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "乗車・積載",
    "difficulty": 2,
    "tags": [
      "乗車・積載"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C189",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "乗車・積載",
    "question": "同乗者がドアを開けて交通の危険を生じさせないよう、運転者は必要な措置をとる。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "ドアの開放や同乗者の乗降が危険を生じさせないよう、運転者は必要な措置をとります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "乗車・積載",
    "difficulty": 2,
    "tags": [
      "乗車・積載"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C190",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "駐車後の措置",
    "question": "車を離れるとき、他人が無断で運転できる状態でも、駐車ブレーキをかければ十分である。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "車を離れるときは、他人に無断で運転されないための措置も必要です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "駐車後の措置",
    "difficulty": 2,
    "tags": [
      "駐車後の措置"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C191",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "騒音",
    "question": "正当な理由なく、著しく他人に迷惑をかけるような空ぶかしをしてはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "正当な理由のない著しい迷惑となる急発進、急加速、空ぶかしは禁止されています。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "騒音",
    "difficulty": 2,
    "tags": [
      "騒音"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C192",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "初心者等の保護",
    "question": "初心者標識を付けた車には、運転を促すため幅寄せしてもよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "危険防止のためやむを得ない場合を除き、初心者標識等を付けた車への幅寄せや無理な割込みは禁止です。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "初心者等の保護",
    "difficulty": 2,
    "tags": [
      "初心者等の保護"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C193",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "画面の注視",
    "question": "普通乗用車の走行中、カーナビの画像を注視してはいけない。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "走行中に車載画像表示装置の画像を注視してはいけません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条（運転者の遵守事項）",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "画面の注視",
    "difficulty": 2,
    "tags": [
      "画面の注視"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C194",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "シートベルト",
    "question": "シートベルトの装備が必要な普通乗用車でも、免除事情がなく、近所への運転なら運転者は着用しなくてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "近所への短距離走行でも、免除される事情がなければ運転者はシートベルトを着用します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条の3第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "シートベルト",
    "difficulty": 2,
    "tags": [
      "シートベルト"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
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
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条の3第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "シートベルト",
    "difficulty": 2,
    "tags": [
      "シートベルト"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C196",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "チャイルドシート",
    "question": "チャイルドシートが必要な幼児も、大人が抱いていれば使用しないで乗せてよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "大人が抱くことは幼児用補助装置の代わりになりません。必要な幼児にはチャイルドシートを使用します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条の3第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "チャイルドシート",
    "difficulty": 2,
    "tags": [
      "チャイルドシート"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C197",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "チャイルドシート",
    "question": "チャイルドシートは、幼児の発育に応じた形状で、所定の基準に適合したものを使う。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "幼児の発育に応じた形状で、安全に関する所定の基準に適合する幼児用補助装置を使います。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第71条の3第3項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "チャイルドシート",
    "difficulty": 2,
    "tags": [
      "チャイルドシート"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C198",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "事故対応",
    "question": "事故現場に警察官がいない場合、警察への報告は翌日まで待ってよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "事故の日時、場所、負傷者などの事項は、直ちに最寄りの警察署等の警察官に報告します。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第72条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "事故対応",
    "difficulty": 2,
    "tags": [
      "事故対応"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C199",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "事故対応",
    "question": "事故後、警察官から到着まで現場を去らないよう命じられた場合は、その命令に従う必要がある。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 0,
    "explanation": "警察官は、到着まで現場を去らないよう運転者等に命令できます。その命令には従う必要があります。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第72条第2項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "事故対応",
    "difficulty": 2,
    "tags": [
      "事故対応"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  },
  {
    "id": "D-C200",
    "reviewStatus": "reviewed",
    "type": "truefalse",
    "category": "整備",
    "question": "制動装置の整備不良で交通の危険を生じるおそれがあっても、短い距離なら運転してよい。",
    "choices": [
      "○",
      "×"
    ],
    "correct": 1,
    "explanation": "制動装置などが保安基準に適合せず交通の危険等を生じるおそれがある車は、短距離でも運転できません。",
    "source": "道路交通法（e-Gov法令検索）",
    "sourceURL": "https://laws.e-gov.go.jp/law/335AC0000000105",
    "sourceVersion": "2026-10-02取得資料",
    "sourceSection": "道路交通法 第62条第1項",
    "lastVerifiedDate": "2026-10-03",
    "stage": "first",
    "topic": "整備",
    "difficulty": 2,
    "tags": [
      "整備"
    ],
    "reviewMethod": "一次条文への自己照合（独立レビュー未実施）"
  }
];
