function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _React = React,
  useEffect = _React.useEffect;
function App() {
  // Scroll reveal observer
  useEffect(function () {
    var io = new IntersectionObserver(function (entries) {
      var _iterator = _createForOfIteratorHelper(entries),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var e = _step.value;
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08
    });
    var enroll = function enroll() {
      var targets = document.querySelectorAll('section.section .container > *, section.section .card, section.section .card-vertical, section.section .split-2 > *, .section-head-center, footer .container > *');
      targets.forEach(function (el, i) {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal');
          el.style.transitionDelay = "".concat(Math.min(i % 6, 5) * 60, "ms");
          io.observe(el);
        }
      });
    };
    var t = setTimeout(enroll, 80);
    return function () {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  // Hero parallax
  useEffect(function () {
    var onScroll = function onScroll() {
      var el = document.querySelector('.hero-bg-frame .ph');
      if (!el) return;
      var rect = el.getBoundingClientRect();
      var offset = Math.max(-60, Math.min(60, rect.top * -0.06));
      el.style.transform = "scale(1.08) translateY(".concat(offset, "px)");
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BMHero, null), /*#__PURE__*/React.createElement(BMClientes, null), /*#__PURE__*/React.createElement(BMQuemSomos, null), /*#__PURE__*/React.createElement(BMParaQuem, null), /*#__PURE__*/React.createElement(BMServicos, null), /*#__PURE__*/React.createElement(BMPortfolio, null), /*#__PURE__*/React.createElement(BMComoFunciona, null), /*#__PURE__*/React.createElement(BMSobre, null), /*#__PURE__*/React.createElement(BMDepoimentos, null), /*#__PURE__*/React.createElement(BMForm, null), /*#__PURE__*/React.createElement(BMFooter, null), /*#__PURE__*/React.createElement(BMFloatCTA, null), /*#__PURE__*/React.createElement(BMTweaks, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));