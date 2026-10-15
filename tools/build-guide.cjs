// 「使い方」の絵（guide/step1.png〜）を、本物の画面から自動で撮る（10/15 本人：文字ではなく、押す場所を赤い丸で示す）。
// 画面を直したら、これを動かして撮り直す。Windows の Edge（headless）を使う。
// 使い方: node tools/build-guide.cjs
const fs = require('fs'), path = require('path'), os = require('os'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'guide');
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'michito-guide-'));
// 各手順：開く前の記録（試しの記録）、順に押すボタン、赤い丸を付ける場所。文は app.js の GUIDE_STEPS
const STEPS = [
  { clicks: [], target: '[data-action="open-start"]' },
  { clicks: ['[data-action="open-start"]'], target: '[data-action="start-chapter"]' },
  { clicks: ['[data-action="open-start"]', '[data-action="start-chapter"]'], target: '[data-action="pick-choice"]' },
  { clicks: ['[data-action="open-start"]', '[data-action="start-chapter"]', '[data-action="pick-choice"]', '[data-action="show-explanation"]'], target: '.explain-section' },
  { sample: true, clicks: ['[data-action="open-progress"]'], target: '.kp-focus-btn' },
  { clicks: [], target: '[data-action="mock-open"]' }
];
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const base = 'file:///' + ROOT.replace(/\\/g, '/') + '/';
fs.mkdirSync(OUT, { recursive: true });
STEPS.forEach((st, i) => {
  const pre = 'localStorage.clear();localStorage.setItem("michito_guide_seen","true");' + (st.sample ? 'localStorage.setItem("michito_dev_sample_progress","true");' : '');
  const run = `
    function mark(){var el=document.querySelector(${JSON.stringify(st.target)});if(!el)return;var rr=el.getBoundingClientRect();if(rr.bottom>innerHeight-40)window.scrollTo(0,rr.top+scrollY-innerHeight/2+rr.height/2);
      var r=el.getBoundingClientRect(),pad=10,d=document.createElement("div");
      d.style.cssText="position:fixed;z-index:9999;pointer-events:none;border:6px solid #E5243B;border-radius:999px;box-shadow:0 0 0 3px #fff;left:"+(r.left-pad)+"px;top:"+(r.top-pad)+"px;width:"+(r.width+pad*2-12)+"px;height:"+(r.height+pad*2-12)+"px";
      document.body.appendChild(d);
      var n=document.createElement("div");n.textContent="${i + 1}";
      n.style.cssText="position:fixed;z-index:10000;width:40px;height:40px;border-radius:50%;background:#E5243B;color:#fff;font:800 24px/40px sans-serif;text-align:center;box-shadow:0 0 0 3px #fff;left:"+Math.max(4,r.left-24)+"px;top:"+Math.max(4,r.top-28)+"px";
      document.body.appendChild(n);}
    var c=${JSON.stringify(st.clicks)};
    function step(k){if(k>=c.length){setTimeout(mark,700);return;}var e=document.querySelector(c[k]);if(e)e.click();setTimeout(function(){step(k+1)},250);}
    setTimeout(function(){step(0)},300);`;
  const page = html.replace('<head>', '<head><base href="' + base + '"><script>' + pre + '</script>').replace('</body>', '<script>' + run + '</script></body>');
  const f = path.join(TMP, 'step' + (i + 1) + '.html');
  fs.writeFileSync(f, page);
  const png = path.join(OUT, 'step' + (i + 1) + '.png');
  try { fs.unlinkSync(png); } catch (e) {}
  try { execFileSync(EDGE, ['--headless=new', '--disable-gpu', '--allow-file-access-from-files', '--hide-scrollbars', '--force-device-scale-factor=1.5', '--window-size=520,980', '--virtual-time-budget=5000', '--screenshot=' + png, 'file:///' + f.replace(/\\/g, '/')], { stdio: 'ignore' }); } catch (e) {}
  console.log(fs.existsSync(png) ? '作成' : '失敗', 'step' + (i + 1));
});
fs.rmSync(TMP, { recursive: true, force: true });
