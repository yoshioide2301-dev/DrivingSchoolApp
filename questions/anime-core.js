// アニメ動画の共通の部品（11/20）。1つの「場面の台本」から、ショートの冒頭（q）・解答（a）・アプリの解答の動きを出す。
// ブラウザだけで動く（node の部品を使わない）。時刻 t を渡すと、その瞬間の絵を決まった形で描く（同じ t なら必ず同じ絵）。
// 使い方：const A = AnimeCore.mount(要素, 図のSVG文字列, 台本, "q" か "a"); A.seek(t); A.dur
// 台本（scenes/D-xxxx.json）の座標はすべて図の座標（viewBox 320×200）。
(function (G) {
  var NS = "http://www.w3.org/2000/svg", ME = "#0E7C86";
  function ease(k, u) { return k === "in" ? u * u : k === "out" ? 1 - (1 - u) * (1 - u) : k === "io" ? (u < .5 ? 2 * u * u : 1 - 2 * (1 - u) * (1 - u)) : u; }
  function el(tag, at, parent) { var e = document.createElementNS(NS, tag); for (var k in at) e.setAttribute(k, at[k]); if (parent) parent.appendChild(e); return e; }
  function cars(svg) { return [].slice.call(svg.querySelectorAll("g[transform]")).filter(function (g) { var r = g.querySelector(":scope > rect"); return r && r.getAttribute("width") === "16" && r.getAttribute("height") === "26"; }); }
  function pos(g) { var m = /translate\(([-\d.]+)[ ,]+([-\d.]+)\)(?:\s*rotate\(([-\d.]+)\))?/.exec(g.getAttribute("transform")); return { x: +m[1], y: +m[2], r: +(m[3] || 0) }; }
  function isMe(g) { return (g.querySelector(":scope > rect").getAttribute("fill") || "").toUpperCase() === ME; }
  // 答えにあたる物などを消す
  function strip(svg, rules, log) {
    (rules || []).forEach(function (R) {
      if (R.text) [].slice.call(svg.querySelectorAll("text")).forEach(function (t) {
        if (!new RegExp(R.text).test(t.textContent)) return; var bg = t.previousElementSibling;
        if (R.replace != null) { t.textContent = R.replace; if (bg && bg.tagName === "rect") { var w = +bg.getAttribute("width"), nw = R.replace.length * (+t.getAttribute("font-size")) + 10; bg.setAttribute("x", +bg.getAttribute("x") + (w - nw) / 2); bg.setAttribute("width", nw); } log.push("札:" + R.replace); return; }
        if (bg && bg.tagName === "rect" && bg.getAttribute("fill") === "#fff") bg.remove(); t.remove(); log.push("消:" + t.textContent);
      });
      if (R.color) [].slice.call(svg.querySelectorAll("line,rect,path,circle")).forEach(function (e) { var c = ((e.getAttribute("stroke") || "") + (e.getAttribute("fill") || "")).toUpperCase(); if (new RegExp(R.color, "i").test(c)) { e.remove(); log.push("消:色" + R.color); } });
      if (R.okmark) [].slice.call(svg.querySelectorAll("circle[fill='none']")).forEach(function (c) { c.remove(); log.push("消:○印"); });
      if (R.sw) [].slice.call(svg.querySelectorAll("line")).forEach(function (l) { if (l.getAttribute("stroke-width") === String(R.sw)) { l.remove(); log.push("消:線" + R.sw); } });
      if (R.peds) [].slice.call(svg.querySelectorAll("g[fill='#3B4A5C']")).forEach(function (g) { g.remove(); log.push("消:歩行者"); });
      if (R.arrows) [].slice.call(svg.querySelectorAll("path[marker-end]")).forEach(function (p) { if (!R.arrows.length || R.arrows.indexOf(p.getAttribute("stroke").toUpperCase()) >= 0) { p.remove(); log.push("消:矢印" + p.getAttribute("stroke")); } });
    });
  }
  function mount(host, svgText, scene, mode) {
    if (scene.kind === "card") return mountCard(host, scene, mode);   // 11/25 C 段（制度・数字のカード）は別の描き方。車の動きの問題には関係しない
    host.innerHTML = scene.svg || svgText; var svg = host.querySelector("svg"), log = [], S = scene[mode] || {};
    strip(svg, (scene.strip || {})[mode], log);
    // 自分の車：元の車と「あなた」の札を消し、動く車と札を描き直す
    var me = cars(svg).filter(isMe)[0], p0 = pos(me), meRot = p0.r; me.remove();
    [].slice.call(svg.querySelectorAll("text")).forEach(function (t) { if (t.textContent === "あなた") { var bg = t.previousElementSibling; if (bg && bg.tagName === "rect") bg.remove(); t.remove(); } });
    var top = el("g", {}, svg), hl = el("rect", { fill: "none", stroke: "#FFD66B", "stroke-width": 3, rx: 5, display: "none" }, top);
    var others = cars(svg).filter(function (g) { return !isMe(g); });
    var base = others.map(pos);   // 動かす前の位置（点滅の枠に使う）
    var peds = [].slice.call(svg.querySelectorAll("g[fill='#3B4A5C']"));
    var moves = (S.moves || []).map(function (m) { var g = (m.sel === "ped" ? peds : others)[m.i || 0]; return { g: g, keys: m.keys, t0: g ? (g.getAttribute("transform") || "") : "" }; });
    var mg = el("g", {}, top), car = el("g", {}, mg), sig = [];
    el("rect", { x: -8, y: -13, width: 16, height: 26, rx: 4, fill: ME }, car); el("rect", { x: -6, y: -9, width: 12, height: 6, rx: 1.5, fill: "#fff", opacity: ".85" }, car);
    if (S.signal) { var sx = S.signal.side === "left" ? -8 : 8; sig = [el("circle", { cx: sx, cy: -11, r: 3.2, fill: "#FFB000", stroke: "#fff", "stroke-width": 1 }, car), el("circle", { cx: sx, cy: 11, r: 3.2, fill: "#FFB000", stroke: "#fff", "stroke-width": 1 }, car)]; }
    var L = scene.label || {}, lab = el("g", {}, mg), ls = L.size || 12, lw = 3 * ls + 12;
    el("rect", { x: -lw / 2, y: -ls + 1, width: lw, height: ls + 7, rx: 6, fill: "#fff", stroke: "#0A192F", "stroke-width": 1.4 }, lab);
    var lt = el("text", { x: 0, y: ls * .35 + 1, "font-size": ls, "font-weight": 800, fill: ME, "text-anchor": "middle" }, lab); lt.textContent = "あなた";
    // 吹き出しの札（解答の「一時停止」など）
    var tags = (S.labels || []).map(function (b) {
      var g = el("g", { display: "none" }, top), lines = b.text.split("\n"), fs = b.size || 12, w = Math.max.apply(0, lines.map(function (s) { return s.length; })) * fs + 14, h = lines.length * fs * 1.3 + 8;
      var st = { stop: ["#0E7C86", "#fff", "#fff"], check: ["#FFD66B", "#0A192F", "#0A192F"], go: ["#fff", "#0E7C86", "#0E7C86"], ng: ["#E5243B", "#fff", "#fff"] }[b.kind || "go"];
      el("rect", { x: b.x - w / 2, y: b.y - h / 2, width: w, height: h, rx: 6, fill: st[0], stroke: st[2], "stroke-width": 1.4 }, g);
      lines.forEach(function (s, i) { var t = el("text", { x: b.x, y: b.y - h / 2 + 4 + fs * (i + 1) * 1.3 - fs * .3, "font-size": fs, "font-weight": 900, fill: st[1], "text-anchor": "middle" }, g); t.textContent = s; });
      return { g: g, b: b, box: [b.x - w / 2, b.y - h / 2, w, h] };
    });
    var keys = S.keys || [[0, 0, 0]], dur = S.dur || keys[keys.length - 1][0];
    // 相手の動き：keys [時刻, dx, dy, 動き方, 回す角度（度・元の向きに足す）]（11/20 回転を追加）
    function at2(keys, t) { var R = function (k) { return k[4] || 0; }; if (t <= keys[0][0]) return { dx: keys[0][1], dy: keys[0][2], r: R(keys[0]) }; for (var i = 1; i < keys.length; i++) if (t <= keys[i][0]) { var a = keys[i - 1], b = keys[i], u = ease(b[3] || "lin", (t - a[0]) / (b[0] - a[0] || 1)); return { dx: a[1] + (b[1] - a[1]) * u, dy: a[2] + (b[2] - a[2]) * u, r: R(a) + (R(b) - R(a)) * u }; } var z = keys[keys.length - 1]; return { dx: z[1], dy: z[2], r: R(z) }; }
    function at(t) { // keys: [時刻, dx, dy, 動き方(lin/in/out/io), 向き(度)]
      if (t <= keys[0][0]) return { dx: keys[0][1], dy: keys[0][2], r: keys[0][4] != null ? keys[0][4] : meRot };
      for (var i = 1; i < keys.length; i++) if (t <= keys[i][0]) { var a = keys[i - 1], b = keys[i], u = ease(b[3] || "lin", (t - a[0]) / (b[0] - a[0] || 1));
        var ra = a[4] != null ? a[4] : meRot, rb = b[4] != null ? b[4] : ra; return { dx: a[1] + (b[1] - a[1]) * u, dy: a[2] + (b[2] - a[2]) * u, r: ra + (rb - ra) * u }; }
      var z = keys[keys.length - 1]; return { dx: z[1], dy: z[2], r: z[4] != null ? z[4] : meRot };
    }
    function on(ws, t) { return (ws || []).some(function (w) { return t >= w[0] && t < w[1]; }); }
    function fade(f, y) { return f ? Math.max(0, Math.min(1, (y - f[0]) / f[1])) : 1; }
    function seek(t) {
      var q = at(t), x = p0.x + q.dx, y = p0.y + q.dy, fin = S.fadeIn ? Math.min(1, t / S.fadeIn) : 1;
      car.setAttribute("transform", "translate(" + x + " " + y + ") rotate(" + q.r + ")");
      var lx = x + (L.dx != null ? L.dx : 0), ly = y + (L.dy != null ? L.dy : 24);
      lab.setAttribute("transform", "translate(" + lx + " " + ly + ")");
      car.setAttribute("opacity", Math.min(fin, fade(S.fadeCar, y))); lab.setAttribute("opacity", Math.min(fin, fade(S.fadeLabel, ly)));
      if (S.blink && others.length) { var bi = S.blinkIndex || 0, o = base[bi], mv = moves.filter(function (m) { return m.g === others[bi]; })[0]; if (mv) { var dd = at2(mv.keys, t); o = { x: o.x + dd.dx, y: o.y + dd.dy, r: o.r }; } var v = Math.abs(o.r % 180) === 90; hl.setAttribute("x", o.x - (v ? 18 : 12)); hl.setAttribute("y", o.y - (v ? 12 : 18)); hl.setAttribute("width", v ? 36 : 24); hl.setAttribute("height", v ? 24 : 36); hl.setAttribute("display", on(S.blink, t) ? "inline" : "none"); }
      if (S.blinkBox) { var bb = S.blinkBox; hl.setAttribute("x", bb[0]); hl.setAttribute("y", bb[1]); hl.setAttribute("width", bb[2]); hl.setAttribute("height", bb[3]); hl.setAttribute("display", on(S.blink, t) ? "inline" : "none"); }
      // 方向指示器：合図の間、1秒に約1.5回点滅（0.33秒ついて0.33秒消える）
      sig.forEach(function (c) { var w = S.signal.t, lit = t >= w[0] && t < w[1] && Math.floor((t - w[0]) / 0.33) % 2 === 0; c.setAttribute("display", lit ? "inline" : "none"); });
      moves.forEach(function (m) { if (!m.g) return; var d = at2(m.keys, t); m.g.setAttribute("transform", "translate(" + d.dx + " " + d.dy + ") " + m.t0 + (d.r ? " rotate(" + d.r + ")" : "")); });
      tags.forEach(function (k) { k.g.setAttribute("display", on([k.b.t], t) ? "inline" : "none"); });
      return { me: [x, y], label: [lx - lw / 2, ly - ls + 1, lw, ls + 7], tags: tags.filter(function (k) { return on([k.b.t], t); }).map(function (k) { return k.box; }) };
    }
    seek(0);
    return { seek: seek, dur: dur, log: log, svg: svg };
  }
  // 11/25 C 段：制度・数字・書類の問題のカード型。台本の例（a）：
  //  {"kind":"card","a":{"dur":6.5,"title":"仮免で練習するときは？","seats":{"left":"指導者","right":"練習する人","hl":"left","t":[1,2.2]},
  //   "cards":[{"t":1.4,"text":"第一種免許を 通算3年以上","em":"3年"}],"ref":"道路交通法 第87条第2項","refT":4.4,"band":{"t":4.8,"text":"○ 指導者を横に乗せて","kind":"ok"}}}
  //  座席は日本の車（運転席が右）。right＝運転者席、left＝助手席。文は解説の文から取り、新しい事実は足さない。
  function mountCard(host, scene, mode) {
    var S = scene[mode] || {}, cl = function (x) { return Math.max(0, Math.min(1, x)); }, eo = function (x) { return 1 - Math.pow(1 - cl(x), 3); };
    host.innerHTML = '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"></svg>';
    var svg = host.querySelector("svg"), dur = S.dur || 6, items = [];
    el("rect", { x: 0, y: 0, width: 320, height: 200, fill: "#F4F8FB" }, svg);
    var tt = el("text", { x: 160, y: 24, "font-size": S.titleSize || 15, "font-weight": 900, fill: "#123", "text-anchor": "middle" }, svg); tt.textContent = S.title || "";
    var seat = S.seats, mk2 = S.marks, sg = S.sign || S.signSvg, cx = (seat || mk2 || sg) ? 118 : 20, cw = (seat || mk2 || sg) ? 192 : 280;
    if (sg) {   // 11/25 B 段：標識を左に大きく（sign＝アプリの signs/color の絵のパス、signSvg＝100×100 の中に描いた絵。数字を問題に合わせるとき）
      var sgG = el("g", {}, svg), box;
      if (S.signSvg) { box = el("svg", { x: 18, y: 42, width: 90, height: 90, viewBox: "0 0 100 100" }, sgG); box.innerHTML = S.signSvg; }
      else el("image", { x: 18, y: 42, width: 90, height: 90, href: S.signSrc || S.sign }, sgG);
      if (S.signName) { var sn = el("text", { x: 63, y: 150, "font-size": Math.min(11, 96 / S.signName.length), "font-weight": 800, fill: "#123", "text-anchor": "middle" }, sgG); sn.textContent = S.signName; }
      items.push(function (t) { var k = eo((t - (S.signT || 0.3)) / 0.5), sc = 0.7 + 0.3 * k + (S.signPulse && t > S.signPulse[0] && t < S.signPulse[1] ? 0.06 * Math.sin(t * 8) : 0); sgG.setAttribute("opacity", k); sgG.setAttribute("transform", "translate(63 87) scale(" + sc + ") translate(-63 -87)"); });
    }
    if (mk2) {   // 11/25 上から見た車（上が前）の前と後ろに札が付く（標識の絵柄は描かず、名前の文字で示す）
      var mg2 = el("g", {}, svg);
      el("rect", { x: 33, y: 52, width: 60, height: 92, rx: 16, fill: "#0E7C86" }, mg2); el("rect", { x: 41, y: 66, width: 44, height: 18, rx: 4, fill: "#fff", opacity: ".85" }, mg2);
      var ft = el("text", { x: 63, y: 48, "font-size": 9, "font-weight": 800, fill: "#567", "text-anchor": "middle" }, mg2); ft.textContent = "前";
      var rt2 = el("text", { x: 63, y: 158, "font-size": 9, "font-weight": 800, fill: "#567", "text-anchor": "middle" }, mg2); rt2.textContent = "後ろ";
      items.push(function (t) { var k = eo((t - 0.3) / 0.5); mg2.setAttribute("opacity", k); });
      [["front", 56], ["rear", 128]].forEach(function (a) { var m = mk2[a[0]]; if (!m) return; var g = el("g", {}, svg), w = m.text.length * 8 + 10;
        // 11/26 m.svg があれば、名前の札の代わりに標識の絵そのもの（様式どおりに描いた絵、m.vb の座標）を置く（あなたの 1.2.7 の指摘）
        if (m.svg) { var bw = m.w || 34, bh = m.h || 20, cy2 = a[1] + (a[0] === "front" ? 9 : -6), box2 = el("svg", { x: 63 - bw / 2, y: cy2 - bh / 2, width: bw, height: bh, viewBox: m.vb || "0 0 100 100" }, g); box2.innerHTML = m.svg;
          items.push(function (t) { var k = eo((t - m.t) / 0.35), sc = 0.6 + 0.4 * k; g.setAttribute("opacity", k); g.setAttribute("transform", "translate(63 " + a[1] + ") scale(" + sc + ") translate(-63 " + (-a[1]) + ")"); }); return; }
        el("rect", { x: 63 - w / 2, y: a[1] - 9, width: w, height: 16, rx: 4, fill: "#FFE07A", stroke: "#E0A800", "stroke-width": 1.5 }, g);
        var tx = el("text", { x: 63, y: a[1] + 3, "font-size": 8, "font-weight": 900, fill: "#432", "text-anchor": "middle" }, g); tx.textContent = m.text;
        items.push(function (t) { var k = eo((t - m.t) / 0.35), sc = 0.6 + 0.4 * k; g.setAttribute("opacity", k); g.setAttribute("transform", "translate(63 " + a[1] + ") scale(" + sc + ") translate(-63 " + (-a[1]) + ")"); }); });
    }
    if (seat) {
      var cg = el("g", {}, svg);
      el("rect", { x: 20, y: 40, width: 86, height: 108, rx: 18, fill: "#fff", stroke: "#33AA66", "stroke-width": 3 }, cg);
      var mk = function (x, txt, on) { var g = el("g", {}, cg), r = el("rect", { x: x, y: 64, width: 30, height: 34, rx: 8, fill: on ? "#FFE07A" : "#DDDDEE", stroke: on ? "#E0A800" : "none", "stroke-width": 2 }, g);
        txt.split("\n").forEach(function (s, i, a) { var t = el("text", { x: x + 15, y: 81 - (a.length - 1) * 5.5 + i * 11 + 3.5, "font-size": 9.5, "font-weight": 800, fill: "#334", "text-anchor": "middle" }, g); t.textContent = s; }); return g; };
      var gl = mk(28, seat.left || "", seat.hl === "left"), gr = mk(64, seat.right || "", seat.hl === "right");
      var lb = el("text", { x: 63, y: 140, "font-size": 9.5, "font-weight": 800, fill: "#33AA66", "text-anchor": "middle" }, cg); lb.textContent = seat.caption || "運転者席の横に";
      var hg = seat.hl === "left" ? gl : seat.hl === "right" ? gr : null, hx = seat.hl === "left" ? 43 : 79;
      items.push(function (t) { var k = eo((t - 0.3) / 0.5); cg.setAttribute("opacity", k); cg.setAttribute("transform", "translate(0 " + (1 - k) * 20 + ")");
        if (hg) { var w = seat.t || [1, 2.2], on = t > w[0] && t < w[1], sc = on ? 1 + 0.12 * (0.5 + 0.5 * Math.sin(t * 8)) : 1; hg.setAttribute("transform", "translate(" + hx + " 81) scale(" + sc + ") translate(" + (-hx) + " -81)"); } });
    }
    (S.cards || []).forEach(function (c, i) {
      var y = (S.cardTop || 40) + i * (S.cardGap || 40), g = el("g", {}, svg), txt = c.text, n = txt.length, fs = Math.min(c.size || 12, (cw - 18) / (n + 1));
      el("rect", { x: cx, y: y, width: cw, height: 34, rx: 8, fill: c.ng ? "#FFF0F2" : "#fff", stroke: c.ng ? "#E5243B" : "#9DB7D5", "stroke-width": 2 }, g);
      var t = el("text", { x: cx + 9, y: y + 17 + fs * 0.36, "font-size": fs, "font-weight": 800, fill: "#123" }, g), em = c.em || "", k0 = em ? txt.indexOf(em) : -1;
      var part = function (s, red) { if (!s) return; var sp = el("tspan", red ? { fill: "#D00033", "font-size": fs * 1.25, "font-weight": 900 } : {}, t); sp.textContent = s; };
      if (k0 >= 0) { part(txt.slice(0, k0)); part(em, true); part(txt.slice(k0 + em.length)); } else part(txt);
      items.push(function (tm) { var k = eo((tm - c.t) / 0.45); g.setAttribute("opacity", k); g.setAttribute("transform", "translate(" + (1 - k) * 40 + " 0)"); });
    });
    if (S.big) { var bgt = el("text", { x: 0, y: 0, "font-size": S.big.size || 34, "font-weight": 900, fill: S.big.color || "#D00033", "text-anchor": "middle" }, svg); bgt.textContent = S.big.text;   // 冒頭の大きな問い（ショートの q 用）
      items.push(function (t) { var k = eo((t - (S.big.t || 0.2)) / 0.4), sc = k * (1 + 0.06 * Math.sin(t * 7)); bgt.setAttribute("opacity", k); bgt.setAttribute("transform", "translate(" + (S.big.x || 160) + " " + (S.big.y || 112) + ") scale(" + sc + ")"); }); }
    if (S.ref) { var rf = el("text", { x: 312, y: 162, "font-size": 9.5, fill: "#567", "text-anchor": "end" }, svg); rf.textContent = "根拠：" + S.ref; var rt = S.refT != null ? S.refT : dur - 2; items.push(function (t) { rf.setAttribute("opacity", eo((t - rt) / 0.4)); }); }
    if (S.band) { var bg = el("g", {}, svg), col = S.band.kind === "ng" ? "#C8102E" : "#1F6FB2";
      el("rect", { x: 0, y: 170, width: 320, height: 30, fill: col }, bg); var bt = el("text", { x: 160, y: 190, "font-size": Math.min(13, 300 / (S.band.text.length + 1)), "font-weight": 900, fill: "#fff", "text-anchor": "middle" }, bg); bt.textContent = S.band.text;
      items.push(function (t) { bg.setAttribute("transform", "translate(0 " + (1 - eo((t - S.band.t) / 0.4)) * 30 + ")"); }); }
    function seek(t) { items.forEach(function (f) { f(t); }); return { me: null, label: null, tags: [] }; }
    seek(0);
    return { seek: seek, dur: dur, log: [], svg: svg };
  }
  G.AnimeCore = { mount: mount };
})(typeof window !== "undefined" ? window : this);
