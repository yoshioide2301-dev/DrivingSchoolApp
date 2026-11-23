import {readFileSync,writeFileSync,mkdirSync,copyFileSync,readdirSync} from 'node:fs';
import {build} from 'esbuild';
const files=['app.js','support.js','style.css','manifest.json','privacy.html','questions/questions.js','questions/furigana.js','questions/figures.js','questions/anime-core.js','questions/anime.js','signs/signs.js','signs/tips.js'];
mkdirSync('www/questions',{recursive:true});mkdirSync('www/signs/img',{recursive:true});mkdirSync('www/signs/color',{recursive:true});
for(const f of readdirSync('../signs/img'))copyFileSync('../signs/img/'+f,'www/signs/img/'+f);
for(const f of readdirSync('../signs/color'))copyFileSync('../signs/color/'+f,'www/signs/color/'+f);
mkdirSync('www/guide',{recursive:true});for(const f of readdirSync('../guide'))copyFileSync('../guide/'+f,'www/guide/'+f);
mkdirSync('www/audio/anime',{recursive:true});for(const f of readdirSync('../audio/anime'))if(f.endsWith('.m4a'))copyFileSync('../audio/anime/'+f,'www/audio/anime/'+f);  // 1.2.5 🔊 の声
for(const file of files)copyFileSync('../'+file,'www/'+file);
let html=readFileSync('../index.html','utf8').replace('<script src="app.js"></script>','<script type="module" src="native-bootstrap.js"></script>');
writeFileSync('www/index.html',html);
await build({entryPoints:['native-bootstrap.js'],outfile:'www/native-bootstrap.js',bundle:true,format:'esm',platform:'browser',target:'safari15',sourcemap:false,define:{__MICHITO_DEV__:process.env.MICHITO_DEV==='1'?'true':'false'}}); // M-54：開発用アプリ（ミチト開発）では利用状況を送らない
console.log('Bundled offline learning assets. Run Capacitor sync and verify with Xcode.');
