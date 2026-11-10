import {Capacitor} from '@capacitor/core';
import {Preferences} from '@capacitor/preferences';
import {FirebaseAnalytics} from '@capacitor-firebase/analytics';
import {FirebaseCrashlytics} from '@capacitor-firebase/crashlytics';
import {FirebasePerformance} from '@capacitor-firebase/performance';
import {LocalNotifications} from '@capacitor/local-notifications';
import {InAppReview} from '@capacitor-community/in-app-review';
window.Capacitor=Capacitor;
const owned=k=>k.startsWith('michito_')||k.startsWith('zerodora_');
const originalSet=Storage.prototype.setItem,originalRemove=Storage.prototype.removeItem;
let pending=Promise.resolve();
function persist(operation){pending=pending.then(operation).catch(()=>{window.dispatchEvent(new CustomEvent('michito-native-storage-error'));});}
if(Capacitor.isNativePlatform()){
  try{
    const {keys}=await Preferences.keys();
    for(const key of keys.filter(owned)){const {value}=await Preferences.get({key});if(value!==null)originalSet.call(localStorage,key,value);}
    for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(owned(key)&&!keys.includes(key))await Preferences.set({key,value:localStorage.getItem(key)});}
    Storage.prototype.setItem=function(key,value){originalSet.call(this,key,value);if(this===localStorage&&owned(String(key)))persist(()=>Preferences.set({key:String(key),value:String(value)}));};
    Storage.prototype.removeItem=function(key){originalRemove.call(this,key);if(this===localStorage&&owned(String(key)))persist(()=>Preferences.remove({key:String(key)}));};
  }catch(e){
    const warning=document.createElement('p');warning.setAttribute('role','alert');warning.textContent='学習の保存先を利用できません。アプリを再起動して確認してください。';document.body.prepend(warning);
  }
}
window.addEventListener('michito-native-storage-error',()=>{if(document.getElementById('native-storage-alert'))return;const p=document.createElement('p');p.id='native-storage-alert';p.setAttribute('role','alert');p.textContent='学習の保存ができません。アプリを閉じる前に保存先をご確認ください。';document.body.prepend(p);});
// 利用状況の集計（1.3）。設定で「送らない」にした人からは何も送らない。広告の識別子は使わない
if(Capacitor.isNativePlatform()){
  const setAll=on=>Promise.all([
    FirebaseAnalytics.setEnabled({enabled:on}),
    FirebaseCrashlytics.setEnabled({enabled:on}),
    FirebasePerformance.setEnabled({enabled:on})
  ]).catch(()=>{});
  let off=false;try{off=JSON.parse(localStorage.getItem('michito_analytics_off')||'false')===true;}catch(e){}
  setAll(!off);
  window.michitoSetAnalytics=on=>setAll(on);
  window.michitoLog=(name,params)=>{
    let o=false;try{o=JSON.parse(localStorage.getItem('michito_analytics_off')||'false')===true;}catch(e){}
    if(o)return;
    if(name==='screen'){FirebaseAnalytics.setCurrentScreen({screenName:String(params.name||'')}).catch(()=>{});return;}
    FirebaseAnalytics.logEvent({name,params}).catch(()=>{});
  };
}
// 1.2.2 学習の通知（端末の中だけで予約。どこにも送らない）と App Store の評価のお願い（Apple 標準）
if(Capacitor.isNativePlatform()){
  const ids=()=>LocalNotifications.getPending().then(r=>(r.notifications||[]).map(n=>({id:n.id}))).catch(()=>[]);
  const cancel=async()=>{const n=await ids();if(n.length)await LocalNotifications.cancel({notifications:n}).catch(()=>{});};
  let chain=Promise.resolve();
  window.michitoNotify={
    request:()=>LocalNotifications.requestPermissions().then(p=>p.display==='granted').catch(()=>false),
    cancel:()=>{chain=chain.then(cancel);return chain;},
    schedule:list=>{chain=chain.then(async()=>{await cancel();if(!list.length)return;
      await LocalNotifications.schedule({notifications:list.map((at,i)=>({id:2200+i,title:'ミチト',body:'今日の5問、やってみませんか？',schedule:{at:new Date(at),allowWhileIdle:true}}))}).catch(()=>{});});return chain;}
  };
  window.michitoReview=()=>InAppReview.requestReview().catch(()=>{});
}
const app=document.createElement('script');app.src='app.js';document.body.append(app);
