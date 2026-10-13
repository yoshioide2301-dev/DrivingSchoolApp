// 標識一覧のデータ（signs/signs.js）を作る。使い方：node tools/build-signs.cjs <標識令の全文 hyo.txt> 
// カラーの図：tools/signs-color-commons.json（Wikimedia Commons のパブリックドメインSVG。法令の図と1枚ずつ目で照合済み 10/13）
// 図の対応：tools/signs-pairs-20260901.json（標識令 別表第二の表の行・列から、標識名と図のファイルを対応づけたもの）
const fs=require("fs");const hyo=process.argv[2];
const z2h=s=>s.replace(/[０-９Ａ-Ｚ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0xFEE0)).replace(/[―－]/g,"-");
const meaning={};
for(const line of fs.readFileSync(hyo,"utf8").split("\n")){const m=line.match(/^([^|]+?) \| （([０-９]+(?:の[０-９]+)?)[^）]*） \| ([^|]+?)(?: \||$)/);if(m){const key=z2h(m[2]);if(!meaning[key]){let t=m[3].trim();const i=t.lastIndexOf("道路標識により、");if(i>=0)t=t.slice(i+8);meaning[key]=t;}}}
const src=fs.readFileSync("questions/questions.js","utf8");const qs=eval(src.replace(/^[\s\S]*?const questions\s*=/,"(").replace(/;\s*$/,"")+")").filter(q=>q.kyoshu===3);
const cats={"1":"案内標識","2":"警戒標識","3":"規制標識","4":"指示標識","5":"補助標識"};
const color=JSON.parse(fs.readFileSync("tools/signs-color-commons.json","utf8"));
const out=[];const pairs=JSON.parse(fs.readFileSync("tools/signs-pairs-20260901.json","utf8"));
for(const p of pairs){const parts=p.name.split(/・(?=[^（]*（[０-９])/);const nm=parts[0].match(/^(.*?)（([^）]+)）/);if(!nm)continue;
 const no=z2h(nm[2]);const base=no.replace(/-.*$/,"");const cat=cats[base[0]];if(!cat)continue;
 const names=parts.map(x=>(x.match(/^(.*?)（/)||[,x])[1]);
 const kq=/^(規制|指示|警戒)/.test(cat)?qs.filter(q=>names.some(n=>n.length>=3&&q.question.includes(n))).map(q=>q.id):[];
 out.push({no,name:names.join("・"),cat,img:p.figs.map(f=>"signs/img/"+f),cimg:(color[no]||[]).map(c=>"signs/color/"+c.file),meaning:meaning[base]||"",kq});}
fs.writeFileSync("signs/signs.js","// 道路標識の一覧（v1.1）。図と意味：道路標識、区画線及び道路標示に関する命令 別表第一・第二（e-Gov 2026-09-01施行版、335M50004002003_20260901_508M60000802003）。\n// tools/build-signs.cjs で生成（意味は別表第一の「表示する意味」。根拠の条を示す前置きだけ省略）。手で書き換えない。\nconst SIGNS = "+JSON.stringify(out).replace(/\},\{/g,"},\n{")+";\n");
const by={};out.forEach(o=>by[o.cat]=(by[o.cat]||0)+1);console.log(out.length,by,"意味なし:",out.filter(o=>!o.meaning).map(o=>o.no).join(","),"問題に出る:",out.filter(o=>o.kq.length).map(o=>o.name).join("、"));
