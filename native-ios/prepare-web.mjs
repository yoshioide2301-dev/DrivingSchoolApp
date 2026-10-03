import {readFileSync,writeFileSync,mkdirSync,copyFileSync} from 'node:fs';
import {build} from 'esbuild';
const files=['app.js','support.js','style.css','manifest.json','privacy.html','questions/questions.js'];
mkdirSync('www/questions',{recursive:true});
for(const file of files)copyFileSync('../'+file,'www/'+file);
let html=readFileSync('../index.html','utf8').replace('<script src="app.js"></script>','<script type="module" src="native-bootstrap.js"></script>').replace('ミチト 試用版 v0.15｜○×200問','ミチト｜仮免の基礎200問');
writeFileSync('www/index.html',html);
await build({entryPoints:['native-bootstrap.js'],outfile:'www/native-bootstrap.js',bundle:true,format:'esm',platform:'browser',target:'safari15',sourcemap:false});
console.log('Bundled offline learning assets. Run Capacitor sync and verify with Xcode.');
