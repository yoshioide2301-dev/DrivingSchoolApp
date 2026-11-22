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
  G.AnimeCore = { mount: mount };
})(typeof window !== "undefined" ? window : this);
