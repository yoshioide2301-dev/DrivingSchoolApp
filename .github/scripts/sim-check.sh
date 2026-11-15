#!/bin/bash
# シミュレーターの点検（11/16）。native-ios/selftest/mself.js が出す「MSELF:」の合図を見て、写真を撮り、iOS の許可の画面で「許可」を押す。
# 使い方：sim-check.sh <App.app のパス> <写真の置き場>
set -u
APP="$1"; OUT="$2"; mkdir -p "$OUT"
BUNDLE=com.yoshioide2301.michito
UDID=$(xcrun simctl list devices available -j | python3 -c "import json,sys;d=json.load(sys.stdin)['devices'];print([x['udid'] for k,v in d.items() if 'iOS' in k for x in v if x['name'].startswith('iPhone')][-1])")
echo "シミュレーター：$UDID"
xcrun simctl boot "$UDID" || true
xcrun simctl bootstatus "$UDID" -b
xcrun simctl install "$UDID" "$APP"
# 試験の起動を利用状況の集計に混ぜない（アプリの「送らない」を先に入れておく）
xcrun simctl spawn "$UDID" defaults write "$BUNDLE" CapacitorStorage.michito_analytics_off -string true
LOG="$OUT/app-log.txt"; : > "$LOG"
xcrun simctl launch --terminate-running-process --stdout="$LOG" --stderr="$LOG" "$UDID" "$BUNDLE"
SEEN=0; END=$((SECONDS+420))
while [ $SECONDS -lt $END ]; do
  sleep 1
  # 合図はアプリの画面出力（Capacitor の [log]）から読む（11/16：UserDefaults は外から読めなかった）
  LINES=$(grep -a -o 'MSELF:.*' "$LOG" | tail -n +$((SEEN+1)))
  [ -z "$LINES" ] && continue
  while IFS= read -r L; do
    SEEN=$((SEEN+1)); echo "$L"
    case "$L" in
      MSELF:SHOT:*) xcrun simctl io "$UDID" screenshot "$OUT/${L#MSELF:SHOT:}.png" >/dev/null 2>&1 ;;
      MSELF:WAIT_PERMISSION)
        sleep 3; xcrun simctl io "$UDID" screenshot "$OUT/03_iOSの許可の画面.png" >/dev/null 2>&1
        # 「許可」（英語の環境では Allow）のボタンを探して押す
        for i in 1 2 3 4 5 6; do
          XY=$(idb ui describe-all --udid "$UDID" --json 2>/dev/null | python3 -c "
import json,sys
for e in json.load(sys.stdin):
    l=(e.get('AXLabel') or '')
    if l in ('Allow','許可'):
        f=e['frame'];print(int(f['x']+f['width']/2),int(f['y']+f['height']/2));break")
          if [ -n "$XY" ]; then idb ui tap --udid "$UDID" $XY && echo "許可を押した：$XY" && break; fi
          sleep 2
        done ;;
      MSELF:DONE) END=0 ;;
    esac
  done <<< "$LINES"
done
grep -a -o 'MSELF:RESULT:.*' "$LOG" > "$OUT/results.txt" || true
grep -a -q 'MSELF:DONE' "$LOG" || echo 'MSELF:RESULT:FAIL:台本が最後まで進まなかった（時間切れ）:' >> "$OUT/results.txt"
cat "$OUT/results.txt"
