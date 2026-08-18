function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// bm-tweaks.jsx, Tweaks panel for Be Maith landing
// Lets the user pick a sans-serif font family in real-time.

var FONT_OPTIONS = {
  "Geist": '"Geist", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  "Manrope": '"Manrope", -apple-system, system-ui, sans-serif',
  "DM Sans": '"DM Sans", -apple-system, system-ui, sans-serif',
  "Plus Jakarta": '"Plus Jakarta Sans", -apple-system, system-ui, sans-serif',
  "Outfit": '"Outfit", -apple-system, system-ui, sans-serif',
  "Sora": '"Sora", -apple-system, system-ui, sans-serif'
};
var BM_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "fontSans": "DM Sans",
  "ambientLights": true,
  "lightsIntensity": 65
} /*EDITMODE-END*/;
function BMTweaks() {
  var _useTweaks = useTweaks(BM_TWEAK_DEFAULTS),
    _useTweaks2 = _slicedToArray(_useTweaks, 2),
    t = _useTweaks2[0],
    setTweak = _useTweaks2[1];
  React.useEffect(function () {
    var stack = FONT_OPTIONS[t.fontSans] || FONT_OPTIONS["Geist"];
    document.documentElement.style.setProperty('--font-sans', stack);
  }, [t.fontSans]);
  React.useEffect(function () {
    var a = document.body;
    a.classList.toggle('no-ambient', !t.ambientLights);
    document.documentElement.style.setProperty('--ambient-opacity', String((t.lightsIntensity || 0) / 100));
  }, [t.ambientLights, t.lightsIntensity]);
  return /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Tipografia"
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Fonte sans",
    value: t.fontSans,
    options: Object.keys(FONT_OPTIONS),
    onChange: function onChange(v) {
      return setTweak('fontSans', v);
    }
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Atmosfera"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Pontos de luz",
    value: t.ambientLights,
    onChange: function onChange(v) {
      return setTweak('ambientLights', v);
    }
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Intensidade",
    value: t.lightsIntensity,
    min: 0,
    max: 100,
    step: 5,
    unit: "%",
    onChange: function onChange(v) {
      return setTweak('lightsIntensity', v);
    }
  }));
}
Object.assign(window, {
  BMTweaks: BMTweaks
});