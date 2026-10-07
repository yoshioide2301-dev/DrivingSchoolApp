import {Capacitor} from '@capacitor/core';
import {Preferences} from '@capacitor/preferences';
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
const app=document.createElement('script');app.src='app.js';document.body.append(app);
