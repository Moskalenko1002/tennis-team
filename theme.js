(function () {
  var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'theme.css'; document.head.appendChild(l);
  document.head.insertAdjacentHTML('beforeend', '<meta name="theme-color" content="#101d2d">');
  document.addEventListener('DOMContentLoaded', function () {
    try {
      var logo = document.querySelector('.logo');
      if (logo) {
        logo.innerHTML = '<span class="bm">TT<span>•</span></span><span class="bc"><b>TENNIS TEAM</b><small>TABLE TENNIS CLUB</small></span>';
        logo.insertAdjacentHTML('afterend', '<a class="hcta" href="#schedule">Записатися ↗</a>');
      }
      var h = document.querySelector('.hero'); if (!h) return;
      var h1 = h.querySelector('h1');
      h1.innerHTML = 'ГРАЙ.<br><em>РОСТИ.</em><br>ПЕРЕМАГАЙ.';
      h1.insertAdjacentHTML('beforebegin', '<div class="eyebrow"><span></span>БІЛЬШЕ, НІЖ ПРОСТО ГРА</div>');
      var t = 'TRAIN HARD ✳ PLAY SMART ✳ BE A TEAM ✳ WIN TOGETHER ✳ ';
      var s = [[DATA.players.length, 'гравців'], [DATA.matches.length, 'матчів'], [DATA.tournaments.length, 'турнірів']];
      h.insertAdjacentHTML('afterend',
        '<div class="ticker" aria-hidden="true"><div>' + t.repeat(8) + '</div></div><div class="stats3">' +
        s.map(function (x) { return '<div><b data-n="' + x[0] + '">' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div>');
      document.querySelectorAll('.stats3 b').forEach(function (b) {
        var n = +b.dataset.n, t0 = performance.now();
        (function f(now) { var p = Math.min((now - t0) / 1100, 1); b.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(t0);
      });
    } catch (e) { console.warn('theme', e); }
  });
})();
