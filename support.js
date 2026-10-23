(function(){
  // 意見・不具合・アンケートはメールで送る（ゼロナビと共通方式。サーバーなし）
  var MAIL='zg.dev2301@gmail.com', context={};
  var choices=[['daily','今日の10問'],['exam','模試'],['explanation','解説'],['review','復習'],['graph','成長グラフ'],['stock','問題数'],['signs','標識・画像問題'],['operation','操作性']];
  var categoryLabels={suggestion:'改善の提案',bug:'不具合・問題の誤り',question:'質問'};
  var intentionLabels={yes:'また使いたい',unsure:'まだ分からない',no:'使い続けにくい'};
  var sourceLabels={family:'家族・友人',store:'App Storeなどの検索',sns:'SNS',school:'教習所',college:'大学・学校',other:'その他',unknown:'覚えていない'};
  var questionLabels={helpful:'役立ったものは？（複数選択可）',needs:'もっと良くしてほしいところは？（複数選択可）',continue:'またミチトを使いたいですか？'};
  function getQuestion(){try{var n=Number(localStorage.getItem('michito_support_survey_round')||0);return ['helpful','needs','continue'][n%3];}catch(e){return 'helpful';}}
  function esc(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function view(){var q=getQuestion();
    return '<section class="panel support-panel"><h1>意見・不具合を送る</h1><p>ご協力は任意です。回答しなくても無料で使えます。</p><form id="support-form"><label>送る内容<select name="kind" id="support-kind"><option value="feedback">意見・不具合</option><option value="survey">かんたんアンケート</option></select></label><div id="support-feedback"><label>種類<select name="category"><option value="suggestion">改善の提案</option><option value="bug">不具合・問題の誤り</option><option value="question">質問</option></select></label><label>コメント（1,000文字まで）<textarea name="message" maxlength="1000" rows="4" placeholder="どの画面で、何が起きましたか？"></textarea></label><p class="settings-note">スクリーンショットを送りたいときは、開いたメールに添付してください。</p></div><div id="support-survey" hidden><fieldset><legend>'+questionLabels[q]+'</legend>'+(q==='continue'?'<select name="intention"><option value="">選んでください</option><option value="yes">また使いたい</option><option value="unsure">まだ分からない</option><option value="no">使い続けにくい</option></select>':choices.map(o=>'<label class="support-chip"><input type="checkbox" name="selected" value="'+o[0]+'">'+o[1]+'</label>').join(''))+'</fieldset><input name="surveyQuestion" type="hidden" value="'+q+'"></div><label id="support-source-label">ミチトを知ったきっかけ（任意）<select name="source"><option value="">選ばなくても送れます</option><option value="family">家族・友人</option><option value="store">App Storeなどの検索</option><option value="sns">SNS</option><option value="school">教習所</option><option value="college">大学・学校</option><option value="other">その他</option><option value="unknown">覚えていない</option></select></label><p class="settings-note">送る画面：'+esc(context.screen)+' ／ 問題ID：'+esc(context.questionId||'なし')+' ／ v'+esc(context.appVersion)+'</p><p class="settings-note"><a href="privacy.html">データの取り扱い</a>：「メールで送る」を押すと、内容を書き込んだメールが開きます。送信すると、内容と上の画面情報、あなたのメールアドレスが運営者に届きます。送らずに閉じることもできます。</p><p id="support-status" role="status" aria-live="polite"></p><button class="btn-pill" type="submit" id="support-send">メールで送る</button></form></section>';
  }
  window.MctSupport={setContext:function(c){context=c;},view:view};
  document.addEventListener('change',function(e){if(!document.getElementById('support-form'))return;
    if(e.target.id==='support-kind'){var survey=e.target.value==='survey';document.getElementById('support-feedback').hidden=survey;document.getElementById('support-survey').hidden=!survey;}
  });
  document.addEventListener('submit',function(e){if(e.target.id!=='support-form')return;e.preventDefault();
    var f=e.target,status=document.getElementById('support-status'),values=new FormData(f),kind=String(values.get('kind'));status.textContent='';
    var message=String(values.get('message')||'').trim(),q=String(values.get('surveyQuestion')||''),selected=values.getAll('selected'),intention=String(values.get('intention')||''),source=String(values.get('source')||'');
    if(kind==='feedback'&&!message){status.textContent='コメントを入力してください。';return;}
    if(kind==='survey'&&(q==='continue'?!intention:!selected.length)){status.textContent='該当する回答を選んでください。';return;}
    var lines=[],subject;
    if(kind==='survey'){
      subject='【ミチト】アンケート';
      lines.push('質問：'+questionLabels[q]);
      lines.push('回答：'+(q==='continue'?intentionLabels[intention]:selected.map(v=>(choices.find(o=>o[0]===v)||[v,v])[1]).join('、')));
    }else{
      subject='【ミチト】'+categoryLabels[values.get('category')]+(context.questionId?' '+context.questionId:'');
      lines.push('種類：'+categoryLabels[values.get('category')]);
      lines.push('コメント：'+message);
    }
    lines.push('知ったきっかけ：'+(sourceLabels[source]||'（未回答）'));
    lines.push('');
    lines.push('画面：'+(context.screen||'')+' ／ 問題ID：'+(context.questionId||'なし')+' ／ ミチト v'+(context.appVersion||''));
    lines.push('日時：'+new Date().toLocaleString('ja-JP'));
    if(kind==='survey'){try{localStorage.setItem('michito_support_survey_round',String(Number(localStorage.getItem('michito_support_survey_round')||0)+1));}catch(e){}}
    location.href='mailto:'+MAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n'));
    var panel=document.querySelector('.support-panel');panel.innerHTML='<h1>メールを開きました</h1><p>メールアプリで送信すると、運営者に届きます。ご協力ありがとうございます。</p><button class="btn-pill" data-action="go-home">ホームへ戻る</button>';
  });
})();
