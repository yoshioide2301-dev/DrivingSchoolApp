import {copyFileSync,writeFileSync,mkdirSync,readFileSync} from 'node:fs';
const target='ios/App/App/Assets.xcassets/AppIcon.appiconset';
mkdirSync(target,{recursive:true});
copyFileSync('assets/AppIcon-1024.png',target+'/AppIcon-1024.png');
writeFileSync(target+'/Contents.json',JSON.stringify({images:[{filename:'AppIcon-1024.png',idiom:'universal',platform:'ios',size:'1024x1024'}],info:{author:'xcode',version:1}},null,2));
copyFileSync('PrivacyInfo.xcprivacy','ios/App/App/PrivacyInfo.xcprivacy');
// A copied manifest is not automatically a target resource. Add an explicit file/build reference.
const path='ios/App/App.xcodeproj/project.pbxproj';let p=readFileSync(path,'utf8');
if(!p.includes('PrivacyInfo.xcprivacy')){
 const fid='AA0010000000000000000001',bid='AA0010000000000000000002';
 p=p.replace('/* Begin PBXBuildFile section */','/* Begin PBXBuildFile section */\n\t\t'+bid+' /* PrivacyInfo.xcprivacy in Resources */ = {isa = PBXBuildFile; fileRef = '+fid+' /* PrivacyInfo.xcprivacy */; };');
 p=p.replace('/* Begin PBXFileReference section */','/* Begin PBXFileReference section */\n\t\t'+fid+' /* PrivacyInfo.xcprivacy */ = {isa = PBXFileReference; lastKnownFileType = text.xml; path = PrivacyInfo.xcprivacy; sourceTree = "<group>"; };');
 p=p.replace(/(504EC3061FED79650016851F \/\* App \*\/ = \{[^]*?children = \(\s*)([^]*?Info.plist)/, '$1'+fid+' /* PrivacyInfo.xcprivacy */,\n$2');
 p=p.replace(/(isa = PBXResourcesBuildPhase;[^]*?files = \(\s*)/,'$1'+bid+' /* PrivacyInfo.xcprivacy in Resources */,\n');
 if(!p.includes(bid+' /* PrivacyInfo.xcprivacy in Resources */,')||!p.includes(fid+' /* PrivacyInfo.xcprivacy */,'))throw Error('Manifest integration failed');
 writeFileSync(path,p);
}
console.log('Icon and PrivacyInfo resources installed; inspect built bundle before submission.');
