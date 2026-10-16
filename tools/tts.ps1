# 読み上げの声を WAV にする（Windows に入っている日本語の声 Haruka）。ショート動画の試作用
# 使い方: powershell -File tools/tts.ps1 <文字のファイル(UTF-8)> <出力WAV>
param([string]$TextFile, [string]$OutWav)
Add-Type -AssemblyName System.Speech
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
$s.SelectVoice('Microsoft Haruka Desktop')
$s.Rate = 2
$s.SetOutputToWaveFile($OutWav)
$s.Speak([System.IO.File]::ReadAllText($TextFile, [System.Text.Encoding]::UTF8))
$s.Dispose()
