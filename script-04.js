function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* global React, TagLabel, CTA, Photo, AvatarCluster, LaptopMock, PhoneMock, TabletMock, SectionHeadCenter, Divider, IconChevL, IconChevR, IconCheck, IconArrowUR, IconPlay, IconPlus */
var _React = React,
  useStateBM = _React.useState,
  useRefBM = _React.useRef;

/* ═══════════════ 01 HERO QUALIFICADOR ═══════════════ */
var BMHero = function BMHero() {
  var _window$__resources;
  return /*#__PURE__*/React.createElement("section", {
    className: "section bm-hero-nofoto",
    style: {
      paddingTop: 32,
      paddingBottom: 56,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-edge-rail"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 32,
      borderBottom: "1px solid var(--gold-line)",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== "undefined" && ((_window$__resources = window.__resources) === null || _window$__resources === void 0 ? void 0 : _window$__resources["logo"]) || "assets/logo.png?v=2",
    alt: "Be Maith",
    style: {
      height: 96,
      width: 96,
      objectFit: "contain",
      filter: "invert(0.88) sepia(0.6) saturate(6) hue-rotate(315deg)",
      display: "block",
      marginLeft: -14
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-top-meta",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      fontSize: 12,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-dim)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "AG\xCANCIA 360\xB0"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: "50%",
      background: "var(--gold-line-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "BRASIL + EUA"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: "50%",
      background: "var(--gold-line-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "EST. 2019"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 1100,
      margin: "0 auto",
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "8px 16px 8px 8px",
      borderRadius: 999,
      border: "1px solid var(--gold-line)",
      background: "rgba(255,255,255,0.55)",
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "5px 14px",
      borderRadius: 999,
      background: "linear-gradient(135deg, #6E1825 0%, #4E0F1A 100%)",
      color: "#FBF7EC",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, "Be Maith"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-dim)",
      letterSpacing: "0.02em"
    }
  }, "Marketing 360\xB0 para marcas que querem crescer")), /*#__PURE__*/React.createElement("h1", {
    className: "h-display hero-display-xl",
    style: {
      marginBottom: 28,
      maxWidth: 980,
      marginLeft: "auto",
      marginRight: "auto",
      textWrap: "balance"
    }
  }, "Voc\xEA j\xE1 \xE9 bom no que faz.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "A gente mostra isso pro mundo.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-lead",
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      maxWidth: 720,
      margin: "0 auto 40px",
      color: "var(--text-dim)",
      textWrap: "pretty"
    }
  }, "Be Maith vem de ", /*#__PURE__*/React.createElement("em", {
    className: "serif-italic",
    style: {
      color: "var(--text)"
    }
  }, "\"seja bom\""), ", em irland\xEAs. Trabalhamos com empresas que j\xE1 entregam valor de verdade, e fazemos esse valor chegar at\xE9 quem precisa, no digital, com ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text)"
    }
  }, "estrat\xE9gia personalizada"), " e ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text)"
    }
  }, "marketing de ponta a ponta.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "QUERO FALAR COM A BIA E A BRU")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-dim)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text)"
    }
  }, "+50 marcas atendidas"), " no Brasil e exterior"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-keywords",
    style: {
      marginTop: 64,
      display: "none",
      flexWrap: "wrap",
      gap: "10px 18px",
      alignItems: "center",
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--text-dim)",
      paddingTop: 24,
      borderTop: "1px solid var(--gold-line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold)"
    }
  }, "\u25CF "), /*#__PURE__*/React.createElement("span", null, "Estrat\xE9gia"), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      opacity: 0.5
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Branding"), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      opacity: 0.5
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Conte\xFAdo"), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      opacity: 0.5
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Tr\xE1fego"), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      opacity: 0.5
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Audiovisual"), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      opacity: 0.5
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Eventos"), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      opacity: 0.5
    }
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Atendimento direto com fundadoras"))), /*#__PURE__*/React.createElement("style", null, "\n      .hero-display-xl {\n        font-size: clamp(40px, 5.6vw, 84px) !important;\n        line-height: 1.02 !important;\n        letter-spacing: -0.022em !important;\n      }\n      @media (max-width: 900px) {\n        .hero-body-grid { grid-template-columns: 1fr !important; gap: 32px !important; }\n        .hero-top-meta { display: none !important; }\n        .bm-hero-nofoto { padding-top: 32px !important; padding-bottom: 56px !important; }\n      }\n    "));
};

/* ═══════════════ 02 BARRA DE PROVA SOCIAL ═══════════════ */
var BMProvaSocial = function BMProvaSocial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section prova-social-section",
    style: {
      paddingTop: 24,
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prova-social-bar",
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px 32px",
      padding: "20px 24px",
      borderTop: "1px solid var(--gold-line)",
      borderBottom: "1px solid var(--gold-line)",
      fontSize: 14.5,
      color: "var(--text-dim)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "prova-lead"
  }, "J\xE1 operamos com"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text)"
    }
  }, "iFood"), /*#__PURE__*/React.createElement("span", {
    className: "prova-dot",
    style: {
      color: "var(--gold-line-strong)"
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text)"
    }
  }, "+50 marcas"), /*#__PURE__*/React.createElement("span", {
    className: "prova-dot",
    style: {
      color: "var(--gold-line-strong)"
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text)"
    }
  }, "20 segmentos"), /*#__PURE__*/React.createElement("span", {
    className: "prova-dot",
    style: {
      color: "var(--gold-line-strong)"
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text)"
    }
  }, "eventos de 2.000 pessoas"), /*#__PURE__*/React.createElement("span", {
    className: "prova-dot",
    style: {
      color: "var(--gold-line-strong)"
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text)"
    }
  }, "6 estados + EUA"))), /*#__PURE__*/React.createElement("style", null, "\n      @media (max-width: 768px) {\n        .prova-social-bar {\n          flex-direction: column !important;\n          gap: 14px 0 !important;\n          padding: 24px 20px !important;\n          font-size: 13px !important;\n        }\n        .prova-social-bar .prova-dot { display: none !important; }\n        .prova-social-bar .prova-lead {\n          font-size: 11px !important;\n          letter-spacing: 0.18em;\n          text-transform: uppercase;\n          color: var(--gold-line-strong) !important;\n          margin-bottom: 4px;\n        }\n        .prova-social-bar strong {\n          font-size: 15px;\n          line-height: 1.3;\n        }\n      }\n    "));
};

/* ═══════════════ 02.5 QUEM SOMOS ═══════════════ */
var BMQuemSomos = function BMQuemSomos() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 56,
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 80,
      alignItems: "start"
    },
    className: "quemsomos-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TagLabel, null, "QUEM SOMOS"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      marginTop: 18,
      textWrap: "balance"
    }
  }, "Uma ag\xEAncia ", /*#__PURE__*/React.createElement("span", {
    className: "serif-italic gold"
  }, "apaixonada por marcas"), " que querem evoluir")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22,
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6
    }
  }, "A ", /*#__PURE__*/React.createElement("strong", null, "Be Maith"), " \xE9 uma ag\xEAncia de marketing 360\xB0. Cuidamos da comunica\xE7\xE3o digital de empresas que entregam valor de verdade. Queremos que esse valor seja visto, sentido e ", /*#__PURE__*/React.createElement("strong", null, "convertido"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--text-dim)"
    }
  }, "Somos um time de especialistas apaixonado por pessoas e por comunica\xE7\xE3o, com foco em ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text)"
    }
  }, "transforma\xE7\xE3o e evolu\xE7\xE3o cont\xEDnua"), " das marcas que atendemos. Trabalhamos lado a lado com cada cliente, do diagn\xF3stico \xE0 execu\xE7\xE3o, do branding ao audiovisual, do conte\xFAdo ao tr\xE1fego pago."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--text-dim)"
    }
  }, "Nada engessado, nada terceirizado. Estrat\xE9gia que vive, ajusta e cresce junto com a sua marca."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "QUERO SABER MAIS"))))), /*#__PURE__*/React.createElement("style", null, "\n      @media (max-width: 900px) {\n        .quemsomos-grid { grid-template-columns: 1fr !important; gap: 32px !important; }\n      }\n    "));
};

/* ═══════════════ 02.7 CLIENTES (carrossel) ═══════════════ */
var BMClientes = function BMClientes() {
  var clients = [{
    slug: "ifood",
    name: "iFood Brasil",
    handle: "@ifoodbrasil",
    service: "Campanhas de Carnaval e Copa do Mundo 2022"
  }, {
    slug: "seminario-de-maes",
    name: "Seminário de Mães",
    handle: "@seminariodemaes",
    service: "Estratégia digital completa & gerenciamento mensal"
  }, {
    slug: "ale-prates",
    name: "Alê Prates",
    handle: "@alepratesoficial",
    service: "Estratégia digital completa & gerenciamento mensal"
  }, {
    slug: "fernanda-teles",
    name: "Fernanda Teles",
    handle: "@fernandateles",
    service: "Estratégia digital completa & gerenciamento mensal"
  }, {
    slug: "elen-lisboa",
    name: "Elen Lisboa",
    handle: "@elen_lisboa",
    service: "Estratégia digital completa & gerenciamento mensal"
  }, {
    slug: "caroline-constante",
    name: "Dra. Caroline Constante",
    handle: "@dracarolineconstante",
    service: "Estratégia digital completa & gerenciamento mensal"
  }, {
    slug: "mulher-brilhante",
    name: "Mulher Brilhante",
    handle: "@mulherbrilhante",
    service: "Cobertura digital do evento"
  }, {
    slug: "prih",
    name: "Priscilah Plaça",
    handle: "@priscilah.vendadevalor",
    service: "Estratégia digital completa & gerenciamento mensal"
  }];

  // Duplicate for seamless loop
  var loop = [].concat(clients, clients);
  var stats = [{
    big: "+50",
    lbl: "marcas atendidas"
  }, {
    big: "+20",
    lbl: "segmentos"
  }, {
    big: "+4",
    lbl: "anos de mercado"
  }, {
    big: "+6",
    lbl: "estados + EUA"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section warm-panel",
    style: {
      paddingTop: 64,
      paddingBottom: 64,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(TagLabel, null, "QUEM J\xC1 CONFIOU"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      marginTop: 18,
      textWrap: "balance",
      maxWidth: 880,
      marginInline: "auto"
    }
  }, "Marcas que ", /*#__PURE__*/React.createElement("span", {
    className: "serif-italic gold"
  }, "cresceram com a gente")))), /*#__PURE__*/React.createElement("div", {
    className: "clientes-marquee",
    style: {
      position: "relative",
      overflow: "hidden",
      marginBottom: 56,
      maskImage: "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "clientes-track",
    style: {
      display: "flex",
      gap: 24,
      width: "max-content",
      animation: "clientesScroll 60s linear infinite"
    }
  }, loop.map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: "0 0 auto",
        width: 280,
        padding: "28px 24px",
        background: "rgba(255,255,255,0.555)",
        border: "1px solid var(--gold-line)",
        borderRadius: 14,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 92,
        height: 92,
        borderRadius: "50%",
        backgroundImage: function (_window$__resources2) {
          var cacheBust = {
            "ale-prates": "ale-prates-v2",
            "elen-lisboa": "elen-lisboa-v2",
            "caroline-constante": "caroline-constante-v2"
          };
          var key = cacheBust[c.slug] || c.slug;
          var url = typeof window !== "undefined" && ((_window$__resources2 = window.__resources) === null || _window$__resources2 === void 0 ? void 0 : _window$__resources2["cliente-".concat(key)]) || "assets/cliente-".concat(key, "-sq.png");
          return "url(\"".concat(url, "\")");
        }(),
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "2px solid var(--gold-line-strong)",
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: "var(--text)",
        letterSpacing: "0.01em"
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--gold-secondary)",
        marginTop: 2,
        letterSpacing: "0.02em"
      }
    }, c.handle)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-dim)",
        lineHeight: 1.4,
        paddingTop: 12,
        borderTop: "1px solid var(--gold-line)",
        width: "100%",
        textWrap: "pretty"
      }
    }, c.service));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "QUERO SABER MAIS")), /*#__PURE__*/React.createElement("div", {
    className: "stats-inline",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0,
      paddingTop: 40,
      borderTop: "1px solid var(--gold-line)"
    }
  }, stats.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        textAlign: "center",
        borderRight: i < stats.length - 1 ? "1px solid var(--gold-line)" : "none",
        padding: "0 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "clamp(36px,4vw,56px)",
        fontWeight: 300,
        lineHeight: 1,
        color: "var(--gold)",
        letterSpacing: "-0.02em"
      }
    }, s.big), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--text-dim)"
      }
    }, s.lbl));
  }))), /*#__PURE__*/React.createElement("style", null, "\n        @keyframes clientesScroll {\n          from { transform: translateX(0); }\n          to { transform: translateX(calc(-50% - 12px)); }\n        }\n        .clientes-marquee:hover .clientes-track { animation-play-state: paused; }\n        @media (max-width: 900px) {\n          .stats-inline { grid-template-columns: repeat(2, 1fr) !important; gap: 32px 0 !important; }\n          .stats-inline > div { border-right: none !important; border-bottom: 1px solid var(--gold-line); padding-bottom: 24px !important; }\n          .stats-inline > div:nth-last-child(-n+2) { border-bottom: none !important; }\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .clientes-track { animation: none !important; }\n        }\n      "));
};

/* ═══════════════ 03 PARA QUEM É (E PRA QUEM NÃO É) ═══════════════ */
var BMParaQuem = function BMParaQuem() {
  var sim = ["Sua marca ou serviço já tem qualidade reconhecida pelos clientes", "Sua agenda é curta e você precisa de quem resolva, não de quem pergunte", "Você quer marketing como assessoria, não como pacote fechado", "Você quer estar próximo de quem está conduzindo a estratégia"];
  var nao = ["Ainda não tem produto ou serviço definido e está só começando", "Prefere continuar postando no improviso, sem estratégia", "Busca fórmula mágica e resultado da noite pro dia", "Quer o menor preço, não o melhor trabalho"];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pq-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "rgba(246,235,221,0.85)",
      marginBottom: 18
    }
  }, "N\xE3o continue rolando essa p\xE1gina, sem antes entender se\u2026"), /*#__PURE__*/React.createElement("h2", {
    className: "pq-hero-title"
  }, "A BE MAITH \xC9", /*#__PURE__*/React.createElement("br", null), "PARA VOC\xCA?"), /*#__PURE__*/React.createElement("div", {
    className: "pq-hero-chevron",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pq-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pq-card pq-card--sim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pq-badge pq-badge--sim"
  }, "\xC9 pra voc\xEA que:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, sim.map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "pq-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pq-ico pq-ico--sim"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 6L9 17l-5-5"
    }))), /*#__PURE__*/React.createElement("span", null, c));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pq-card pq-card--nao"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pq-badge pq-badge--nao"
  }, "N\xE3o \xE9 pra voc\xEA que:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, nao.map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "pq-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pq-ico pq-ico--nao"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 6L6 18M6 6l12 12"
    }))), /*#__PURE__*/React.createElement("span", null, c));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "QUERO ENTENDER COMO FUNCIONA"))), /*#__PURE__*/React.createElement("style", null, "\n        .pq-hero {\n          background: linear-gradient(170deg, #4E0F1A 0%, #3D0A13 100%);\n          border-radius: 28px;\n          padding: 56px 40px 64px;\n          text-align: center;\n          position: relative;\n          margin-bottom: 26px;\n        }\n        .pq-hero-title {\n          font-family: var(--font-display);\n          font-size: clamp(38px, 5.5vw, 64px);\n          line-height: 1.08;\n          letter-spacing: 0.02em;\n          color: #F6EBDD;\n          margin: 0;\n        }\n        .pq-hero-chevron {\n          position: absolute;\n          left: 50%; bottom: -14px;\n          transform: translateX(-50%);\n          width: 64px; height: 28px;\n          border-radius: 999px;\n          background: #F6EBDD;\n          color: #4E0F1A;\n          display: grid; place-items: center;\n          box-shadow: 0 6px 18px rgba(78,15,26,0.25);\n        }\n        .pq-grid {\n          display: grid;\n          grid-template-columns: 1fr 1fr;\n          gap: 22px;\n        }\n        .pq-card {\n          border-radius: 22px;\n          padding: 34px 30px;\n        }\n        .pq-card--sim { background: #F7F4EE; border: 1px solid rgba(78,15,26,0.08); }\n        .pq-card--nao { background: #FBE9E7; border: 1px solid rgba(78,15,26,0.1); }\n        .pq-badge {\n          display: inline-block;\n          font-size: 17px;\n          font-weight: 700;\n          color: var(--text);\n          padding: 10px 18px;\n          border-radius: 12px;\n          margin-bottom: 24px;\n        }\n        .pq-badge--sim { background: #FFFFFF; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }\n        .pq-badge--nao { background: #F8D7D4; }\n        .pq-row {\n          display: flex; gap: 14px; align-items: flex-start;\n          font-size: 15px; line-height: 1.55; color: var(--text-dim);\n        }\n        .pq-ico {\n          flex: 0 0 auto;\n          width: 26px; height: 26px;\n          border-radius: 8px;\n          display: grid; place-items: center;\n          margin-top: 1px;\n        }\n        .pq-ico--sim { background: #F3D9CE; color: #7A1F2B; }\n        .pq-ico--nao { background: #F3C2BE; color: #7A1F2B; }\n        @media (max-width: 820px) { .pq-grid { grid-template-columns: 1fr; } }\n      "));
};

/* ═══════════════ 04 O PROBLEMA (PAS) ═══════════════ */
var BMProblema = function BMProblema() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(TagLabel, null, "NOSSO LUGAR"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Marketing como ", /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "sociedade,"), " n\xE3o como pacote."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      maxWidth: 720
    }
  }, "A gente sabe que sua empresa s\xF3 continua com a gente se a gente trouxer retorno. ", /*#__PURE__*/React.createElement("strong", null, "Por isso pensamos como s\xF3cios."), " Estrat\xE9gia, conte\xFAdo, tr\xE1fego, automa\xE7\xE3o e capta\xE7\xE3o: tudo conectado ao que faz seu neg\xF3cio crescer."), /*#__PURE__*/React.createElement("p", {
    className: "serif-italic",
    style: {
      fontSize: 26,
      color: "var(--gold-secondary)",
      maxWidth: 720,
      lineHeight: 1.3
    }
  }, "Mais de 2 anos \xE9 a m\xE9dia de perman\xEAncia dos nossos clientes."))));
};

/* ═══════════════ 05 NOSSO PAPEL, 4 PILARES ═══════════════ */
var BMPilares = function BMPilares() {
  var items = [{
    t: "Estratégia personalizada",
    d: "Estratégia desenhada pro seu momento, revisada todo mês. Se surgir um tema em alta ou uma Black Friday no meio do caminho, a gente ajusta, nada engessado."
  }, {
    t: "Conteúdo com antecedência",
    d: "Calendário, design, copy e edição entregues com folga. Você aprova, a gente posta, e o conteúdo conversa com o nível de consciência de cada cliente seu."
  }, {
    t: "Tráfego e automação",
    d: "Impulsionamento que aumenta alcance, engajamento e seguidores. Automações que levam o lead do comentário ao WhatsApp, conforme a jornada de compra real do seu cliente."
  }, {
    t: "Captação presencial",
    d: "Vídeos, eventos, palestras: a gente vai até você com o equipamento, capta o material do mês inteiro e edita. Stories ao vivo no dia, se for o caso."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section warm-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeadCenter, {
    tag: "COMO ATUAMOS"
  }, "Marketing de ponta a ponta, ", /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "com estrat\xE9gia que vive.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 18
    },
    className: "pilares-grid"
  }, items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card",
      style: {
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "serif-italic",
      style: {
        fontSize: 44,
        lineHeight: 1,
        color: "var(--gold-secondary)",
        opacity: 0.7
      }
    }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 22
      }
    }, it.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5
      }
    }, it.d));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "QUERO ESSE TIPO DE OPERA\xC7\xC3O"))), /*#__PURE__*/React.createElement("style", null, "\n        @media (max-width: 1000px) { .pilares-grid { grid-template-columns: 1fr 1fr !important; } }\n        @media (max-width: 600px) { .pilares-grid { grid-template-columns: 1fr !important; } }\n      "));
};

/* ═══════════════ 06 COMO FUNCIONA, PROCESSO ═══════════════ */
var BMComoFunciona = function BMComoFunciona() {
  // Iconos SVG simples (linha dourada) para cada etapa
  var IconDiag = function IconDiag() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 32 32",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "13",
      cy: "13",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.5 18.5 L25 25"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 13h6 M13 10v6"
    }));
  };
  var IconStrat = function IconStrat() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 32 32",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 22V8l5 3 5-3 5 3 5-3v14l-5 3-5-3-5 3-5-3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 11v14 M21 11v14"
    }));
  };
  var IconExec = function IconExec() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 32 32",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 10v6l4 3"
    }));
  };
  var IconLeitura = function IconLeitura() {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 32 32",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 22V9l11-3 11 3v13"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 22l11 4 11-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 6v20"
    }));
  };
  var etapas = [{
    n: "1",
    w: "Início",
    t: "Diagnóstico",
    d: "Reunião direta com Bia e Bru pra entender seu negócio, seus objetivos e seu momento. Aqui fica claro o que vamos construir junto.",
    Icon: IconDiag,
    pos: "top"
  }, {
    n: "2",
    w: "Semanas seguintes",
    t: "Estratégia",
    d: "Plano personalizado pra sua realidade (marca, conteúdo, tráfego, automações), amarrado à jornada do seu cliente real.",
    Icon: IconStrat,
    pos: "right"
  }, {
    n: "3",
    w: "Operação",
    t: "Execução",
    d: "Calendário, design, copy e captação prontos com folga. Aprovação centralizada, sem grupo confuso. Você fala direto com a gente.",
    Icon: IconExec,
    pos: "bottom"
  }, {
    n: "4",
    w: "Todo mês",
    t: "Leitura",
    d: "Revisão do que funcionou e do que não. Ajustes na estratégia conforme seu negócio pede. Quinzenal ou semanal, se necessário.",
    Icon: IconLeitura,
    pos: "left"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 24,
      gap: 18,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(TagLabel, null, "PROCESSO"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "A jornada de ", /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "4 etapas.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 620
    }
  }, "Voc\xEA ter\xE1 acesso a um m\xE9todo estruturado, do primeiro diagn\xF3stico ao encontro mensal de leitura. Quem te recebeu na reuni\xE3o \xE9 quem te acompanha no dia a dia.")), /*#__PURE__*/React.createElement("div", {
    className: "journey-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "journey-ring"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 600",
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      inset: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "jring",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#A6303F",
    stopOpacity: "0.85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.5",
    stopColor: "#7A1F2B",
    stopOpacity: "0.95"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#4E0F1A",
    stopOpacity: "0.9"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "jringInner",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6E1825",
    stopOpacity: "1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#4E0F1A",
    stopOpacity: "1"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "300",
    r: "230",
    fill: "none",
    stroke: "url(#jring)",
    strokeWidth: "48"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "300",
    r: "208",
    fill: "none",
    stroke: "rgba(194,87,99,0.18)",
    strokeWidth: "1",
    strokeDasharray: "2 5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "300",
    r: "252",
    fill: "none",
    stroke: "rgba(194,87,99,0.12)",
    strokeWidth: "1",
    strokeDasharray: "2 8"
  }), /*#__PURE__*/React.createElement("g", {
    opacity: "0.18",
    stroke: "#F2DFD0",
    strokeWidth: "0.7",
    fill: "none"
  }, Array.from({
    length: 48
  }).map(function (_, i) {
    var a = i / 48 * Math.PI * 2;
    var r1 = 210,
      r2 = 250;
    var x1 = 300 + Math.cos(a) * r1,
      y1 = 300 + Math.sin(a) * r1;
    var x2 = 300 + Math.cos(a) * r2,
      y2 = 300 + Math.sin(a) * r2;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2
    });
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "300",
    r: "186",
    fill: "url(#jringInner)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "journey-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker gold",
    style: {
      letterSpacing: "0.18em"
    }
  }, "BE MAITH"), /*#__PURE__*/React.createElement("div", {
    className: "journey-center-title"
  }, "do diagn\xF3stico", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "ao resultado."))), etapas.map(function (e, i) {
    var E = e.Icon;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "journey-node journey-node-".concat(e.pos)
    }, /*#__PURE__*/React.createElement("div", {
      className: "journey-num"
    }, e.n)), /*#__PURE__*/React.createElement("div", {
      className: "journey-icon journey-icon-".concat(e.pos)
    }, /*#__PURE__*/React.createElement(E, null)));
  })), etapas.map(function (e, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "journey-card journey-card-".concat(e.pos)
    }, /*#__PURE__*/React.createElement("div", {
      className: "journey-card-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "kicker gold"
    }, e.t.toUpperCase()), /*#__PURE__*/React.createElement("span", {
      className: "journey-dotline",
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("p", {
      className: "journey-card-text"
    }, e.d));
  })), /*#__PURE__*/React.createElement("div", {
    className: "journey-mobile"
  }, etapas.map(function (e, i) {
    var E = e.Icon;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "journey-mobile-step"
    }, /*#__PURE__*/React.createElement("div", {
      className: "journey-mobile-bullet"
    }, /*#__PURE__*/React.createElement("div", {
      className: "journey-mobile-num"
    }, e.n), /*#__PURE__*/React.createElement("div", {
      className: "journey-mobile-icon"
    }, /*#__PURE__*/React.createElement(E, null))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "kicker gold"
    }, e.t.toUpperCase()), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        marginTop: 6
      }
    }, e.d)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "QUERO MARCAR O DIAGN\xD3STICO"))), /*#__PURE__*/React.createElement("style", null, "\n        .journey-stage {\n          position: relative;\n          width: 100%;\n          max-width: 1100px;\n          margin: 0 auto;\n          aspect-ratio: 1100 / 720;\n        }\n        .journey-ring {\n          position: absolute;\n          left: 50%; top: 50%;\n          width: min(640px, 70%);\n          aspect-ratio: 1;\n          transform: translate(-50%, -50%);\n        }\n        .journey-center {\n          position: absolute;\n          left: 50%; top: 50%;\n          transform: translate(-50%, -50%);\n          text-align: center;\n          display: flex; flex-direction: column; gap: 10px; align-items: center;\n          width: 60%;\n          z-index: 2;\n        }\n        .journey-center .kicker { white-space: nowrap; color: #EFC9B8; }\n        .journey-center-title {\n          font-family: var(--font-display);\n          font-size: clamp(20px, 2.4vw, 30px);\n          line-height: 1.05;\n          color: #F6EBDD;\n          letter-spacing: -0.01em;\n        }\n        .journey-center-title em {\n          font-style: italic;\n          background: linear-gradient(135deg,#F6E3D2 0%,#E8C0AC 60%,#D99CA6 100%);\n          -webkit-background-clip: text; background-clip: text; color: transparent;\n        }\n\n        /* n\xF3s (n\xFAmeros), na borda externa do anel (raio 230 / 600 \u2248 38.33%) */\n        .journey-node {\n          position: absolute;\n          width: 56px; height: 56px;\n          border-radius: 50%;\n          background: linear-gradient(160deg, #7A1F2B, #4E0F1A);\n          border: 1.5px solid rgba(194,87,99,0.55);\n          box-shadow: 0 0 0 6px rgba(20,9,10,0.6), 0 8px 24px rgba(0,0,0,0.5);\n          display: grid; place-items: center;\n          z-index: 3;\n          transform: translate(-50%, -50%);\n        }\n        .journey-num {\n          font-family: var(--font-sans);\n          font-weight: 600;\n          font-size: 22px;\n          color: #F2DFD0;\n          letter-spacing: -0.02em;\n        }\n\n        /* \xEDcones internos, raio ~150 / 600 \u2248 25% (dentro do miolo escuro) */\n        .journey-icon {\n          position: absolute;\n          width: 70px; height: 70px;\n          border-radius: 50%;\n          background: linear-gradient(160deg, #5C1420, #4E0F1A);\n          border: 1px solid rgba(246,235,221,0.3);\n          display: grid; place-items: center;\n          color: #F2DFD0;\n          z-index: 2;\n          transform: translate(-50%, -50%);\n        }\n        .journey-icon svg { width: 30px; height: 30px; }\n\n        /* posicionamento absoluto dos 4 pontos cardeais (relativo ao .journey-ring) */\n        .journey-node-top    { left: 50%;     top: 11.67%;  }\n        .journey-node-right  { left: 88.33%;  top: 50%;     }\n        .journey-node-bottom { left: 50%;     top: 88.33%;  }\n        .journey-node-left   { left: 11.67%;  top: 50%;     }\n\n        .journey-icon-top    { left: 50%;  top: 25%;  }\n        .journey-icon-right  { left: 75%;  top: 50%;  }\n        .journey-icon-bottom { left: 50%;  top: 75%;  }\n        .journey-icon-left   { left: 25%;  top: 50%;  }\n\n        /* cards de texto, nas 4 quinas (relativos ao .journey-stage) */\n        .journey-card {\n          position: absolute;\n          width: 240px;\n          display: flex; flex-direction: column; gap: 10px;\n          z-index: 1;\n        }\n        .journey-card-head {\n          display: flex; align-items: center; gap: 10px;\n        }\n        .journey-dotline {\n          flex: 1;\n          height: 1px;\n          background-image: radial-gradient(circle, var(--gold-secondary) 1px, transparent 1.4px);\n          background-size: 6px 1px;\n          background-repeat: repeat-x;\n          opacity: 0.7;\n        }\n        .journey-card-text {\n          font-size: 14px;\n          line-height: 1.55;\n          color: var(--muted);\n        }\n\n        .journey-card-top    { left: 2%;  top: 8%;  text-align: right;  align-items: flex-end; }\n        .journey-card-top .journey-card-head { flex-direction: row-reverse; }\n        .journey-card-right  { right: 2%; top: 8%;  text-align: left; }\n        .journey-card-bottom { right: 2%; bottom: 6%; text-align: left; }\n        .journey-card-left   { left: 2%;  bottom: 6%; text-align: right; align-items: flex-end; }\n        .journey-card-left .journey-card-head { flex-direction: row-reverse; }\n\n        .journey-mobile { display: none; }\n\n        @media (max-width: 1024px) {\n          .journey-card { width: 200px; }\n          .journey-card-text { font-size: 13px; }\n        }\n        @media (max-width: 860px) {\n          .journey-stage { display: none; }\n          .journey-mobile {\n            display: flex; flex-direction: column; gap: 28px;\n            max-width: 560px; margin: 12px auto 0;\n          }\n          .journey-mobile-step {\n            display: grid;\n            grid-template-columns: 72px 1fr;\n            gap: 18px;\n            align-items: start;\n          }\n          .journey-mobile-bullet {\n            position: relative;\n            width: 72px; height: 72px;\n          }\n          .journey-mobile-num {\n            position: absolute; top: -6px; right: -6px;\n            width: 30px; height: 30px; border-radius: 50%;\n            background: linear-gradient(160deg, #7A1F2B, #4E0F1A);\n            border: 1.5px solid rgba(194,87,99,0.55);\n            display: grid; place-items: center;\n            font-family: var(--font-sans); font-weight: 600;\n            color: var(--gold); font-size: 14px;\n            z-index: 2;\n          }\n          .journey-mobile-icon {\n            width: 72px; height: 72px;\n            border-radius: 50%;\n            background: linear-gradient(160deg, #1f1308, #0d0705);\n            border: 1px solid rgba(194,87,99,0.25);\n            display: grid; place-items: center;\n            color: var(--gold);\n          }\n          .journey-mobile-icon svg { width: 32px; height: 32px; }\n        }\n      "));
};

/* ═══════════════ 07 CASES & NÚMEROS ═══════════════ */
var BMNumeros = function BMNumeros() {
  var stats = [{
    big: "+50",
    lbl: "marcas atendidas",
    d: "No Brasil e no exterior, com operação digital escalada por times completos."
  }, {
    big: "+20",
    lbl: "segmentos",
    d: "Da saúde à engenharia, da educação ao financeiro, com vocabulário e estratégia adaptados a cada nicho."
  }, {
    big: "iFood",
    lbl: "campanhas nacionais",
    d: "Copa 2022 e Carnaval 2023: projetos de alcance nacional ao lado de uma das maiores marcas do país."
  }, {
    big: "50–2.000",
    lbl: "pessoas por evento",
    d: "Captação, posicionamento e conteúdo para eventos como O Mulher Brilhante e Seminário Internacional de Mães."
  }, {
    big: "+05",
    lbl: "anos de experiência",
    d: "Atendendo clientes com qualidade, excelência e entregas que sustentam crescimento real."
  }, {
    big: "6 estados\n+ EUA",
    lbl: "alcance geográfico",
    d: "Clientes em SP, RJ, MG, RN, PA e nos Estados Unidos."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section deep-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeadCenter, {
    tag: "PROVA"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "+50 marcas."), " 20 segmentos. 6 anos no mercado."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 18
    },
    className: "numeros-grid"
  }, stats.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card",
      style: {
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        minHeight: 240
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "gold-grad-text",
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 52,
        fontWeight: 600,
        lineHeight: 1,
        letterSpacing: "-0.03em",
        whiteSpace: "pre-line"
      }
    }, s.big), /*#__PURE__*/React.createElement("div", {
      className: "kicker",
      style: {
        color: "var(--gold-secondary)"
      }
    }, s.lbl), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        marginTop: 4
      }
    }, s.d));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "VER MAIS RESULTADOS"))), /*#__PURE__*/React.createElement("style", null, "\n        @media (max-width: 1000px) { .numeros-grid { grid-template-columns: 1fr 1fr !important; } }\n        @media (max-width: 600px) { .numeros-grid { grid-template-columns: 1fr !important; } }\n        @media (max-width: 768px) {\n          .numeros-grid .card {\n            min-height: 0 !important;\n            padding: 22px !important;\n            gap: 10px !important;\n          }\n          .numeros-grid .card .gold-grad-text {\n            font-size: 44px !important;\n            line-height: 1 !important;\n          }\n        }\n      "));
};

/* ═══════════════ 08 SERVIÇOS, CARDS ═══════════════ */
var BMServicos = function BMServicos() {
  var services = [{
    name: "Branding",
    desc: "Construímos a base estratégica da sua marca: paleta, tipografia, logo e elementos gráficos guiados por estudo de público, percepção de valor e intenção de posicionamento.",
    icon: "branding"
  }, {
    name: "Estratégia",
    desc: "Planejamos o caminho completo da sua marca no digital, considerando canal, objetivo e comportamento da sua audiência.",
    icon: "estrategia"
  }, {
    name: "Copy",
    desc: "Escrita profissional que traduz sua autoridade, conecta com a audiência e acelera decisões.",
    icon: "copy"
  }, {
    name: "Tráfego",
    desc: "Campanhas no Instagram, Facebook e Google focadas em ampliar alcance e atrair clientes qualificados.",
    icon: "trafego"
  }, {
    name: "Automação",
    desc: "Automações no Instagram e WhatsApp e IA para ensaios fotográficos hiper-realistas, vídeos personalizados e bancos visuais completos.",
    icon: "automacao"
  }, {
    name: "Vídeo",
    desc: "Cortes inteligentes, motion design, ritmo de narrativa e estética nativa de plataformas para vídeos que prendem do início ao fim.",
    icon: "video"
  }, {
    name: "Captação",
    desc: "Captação profissional de eventos, palestras e vídeos estratégicos com leitura técnica de luz, enquadramento e narrativa.",
    icon: "captacao"
  }, {
    name: "Parceiros",
    desc: "Profissionais de confiança para sites, ensaios fotográficos e demandas complementares. Coordenamos todo o ecossistema.",
    icon: "parceiros"
  }];
  var P = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  var icons = {
    branding: /*#__PURE__*/React.createElement("svg", _objectSpread({
      width: "26",
      height: "26",
      viewBox: "0 0 24 24"
    }, P), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 3a9 9 0 0 1 0 18"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    estrategia: /*#__PURE__*/React.createElement("svg", _objectSpread({
      width: "26",
      height: "26",
      viewBox: "0 0 24 24"
    }, P), /*#__PURE__*/React.createElement("path", {
      d: "M4 20 L4 12 M10 20 L10 7 M16 20 L16 10 M22 20 L22 4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.5 4 L22 4 L22 7.5"
    })),
    copy: /*#__PURE__*/React.createElement("svg", _objectSpread({
      width: "26",
      height: "26",
      viewBox: "0 0 24 24"
    }, P), /*#__PURE__*/React.createElement("path", {
      d: "M16 3l5 5L8 21H3v-5L16 3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.5 5.5l5 5"
    })),
    trafego: /*#__PURE__*/React.createElement("svg", _objectSpread({
      width: "26",
      height: "26",
      viewBox: "0 0 24 24"
    }, P), /*#__PURE__*/React.createElement("path", {
      d: "M3 11l17-7-6 17-2.6-7.4L3 11z"
    })),
    automacao: /*#__PURE__*/React.createElement("svg", _objectSpread({
      width: "26",
      height: "26",
      viewBox: "0 0 24 24"
    }, P), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"
    })),
    video: /*#__PURE__*/React.createElement("svg", _objectSpread({
      width: "26",
      height: "26",
      viewBox: "0 0 24 24"
    }, P), /*#__PURE__*/React.createElement("rect", {
      x: "2.5",
      y: "5.5",
      width: "13",
      height: "13",
      rx: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.5 10l6-3.5v11l-6-3.5"
    })),
    captacao: /*#__PURE__*/React.createElement("svg", _objectSpread({
      width: "26",
      height: "26",
      viewBox: "0 0 24 24"
    }, P), /*#__PURE__*/React.createElement("path", {
      d: "M4 8h3l2-2.5h6L17 8h3a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 8z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "13.5",
      r: "3.5"
    })),
    parceiros: /*#__PURE__*/React.createElement("svg", _objectSpread({
      width: "26",
      height: "26",
      viewBox: "0 0 24 24"
    }, P), /*#__PURE__*/React.createElement("path", {
      d: "M8 12l3-3 3.5 3.5a2 2 0 0 0 2.8 0L20 10l-4.5-4.5a3 3 0 0 0-4.2 0L8 8.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 10l4.5-4.5M4 14l4 4a2 2 0 0 0 2.8 0M8 18.5l1.5 1.5a2 2 0 0 0 2.8 0"
    }))
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section servicos-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(TagLabel, null, "ESCOPO"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Tudo que sua marca precisa, em ", /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "um \xFAnico contrato.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 620
    }
  }, "Oito frentes integradas: voc\xEA passa a falar com uma equipe s\xF3, com uma estrat\xE9gia s\xF3, com um ponto de contato s\xF3."))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-cards"
  }, services.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "svc-card2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "svc-card2-top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "svc-card2-icon"
    }, icons[s.icon]), /*#__PURE__*/React.createElement("div", {
      className: "svc-card2-num"
    }, String(i + 1).padStart(2, "0"))), /*#__PURE__*/React.createElement("div", {
      className: "svc-card2-name"
    }, s.name), /*#__PURE__*/React.createElement("p", {
      className: "svc-card2-desc"
    }, s.desc));
  }))), /*#__PURE__*/React.createElement("style", null, "\n        .svc-cards {\n          display: grid;\n          grid-template-columns: repeat(4, 1fr);\n          gap: 18px;\n        }\n        .svc-card2 {\n          background: linear-gradient(165deg, #6E1825 0%, #4E0F1A 100%);\n          border: 1px solid rgba(246,235,221,0.14);\n          border-radius: 18px;\n          padding: 26px 24px 28px;\n          display: flex; flex-direction: column;\n          transition: transform 0.25s ease, box-shadow 0.25s ease;\n        }\n        .svc-card2:hover {\n          transform: translateY(-4px);\n          box-shadow: 0 22px 46px -18px rgba(78,15,26,0.5);\n        }\n        .svc-card2-top {\n          display: flex; align-items: center; justify-content: space-between;\n          margin-bottom: 20px;\n        }\n        .svc-card2-icon {\n          width: 52px; height: 52px;\n          border-radius: 14px;\n          display: grid; place-items: center;\n          background: rgba(246,235,221,0.1);\n          border: 1px solid rgba(246,235,221,0.2);\n          color: #F2DFD0;\n        }\n        .svc-card2-num {\n          font-family: var(--font-display);\n          font-style: italic;\n          font-size: 30px;\n          color: rgba(246,235,221,0.4);\n          line-height: 1;\n        }\n        .svc-card2-name {\n          font-size: 19px;\n          font-weight: 600;\n          color: #F6EBDD;\n          margin-bottom: 8px;\n        }\n        .svc-card2-desc {\n          font-size: 13.5px;\n          line-height: 1.6;\n          color: rgba(246,235,221,0.78);\n          margin: 0;\n        }\n        @media (max-width: 1100px) { .svc-cards { grid-template-columns: repeat(2, 1fr); } }\n        @media (max-width: 620px) { .svc-cards { grid-template-columns: 1fr; } }\n      "));
};

/* ═══════════════ 08.5 PORTFOLIO, FEEDS DOS CLIENTES ═══════════════ */
var BMPortfolio = function BMPortfolio() {
  // Prints dos feeds, substituir os placeholders pelos screenshots reais
  var feeds = [{
    slug: "ale-prates",
    name: "Alê Prates",
    handle: "@alepratesoficial",
    followers: "156 mil seguidores",
    img: "assets/feed-ale-prates.jpg",
    desc: "Palestrante de liderança e gestão, Top 10 Global em Educação Corporativa. Nosso trabalho é aumentar a autoridade do perfil, e o resultado aparece em mais fechamentos de palestras todos os meses."
  }, {
    slug: "fernanda-teles",
    name: "Fernanda Teles",
    handle: "@fernandateles",
    followers: "83,8 mil seguidores",
    img: "assets/feed-fernanda-teles.jpg",
    desc: "Referência em educação parental e CEO do maior seminário de mães do mundo. Com a estratégia de founder, estamos elevando a autoridade dela como rosto do movimento."
  }, {
    slug: "elen-lisboa",
    name: "Elen Lisboa",
    handle: "@elen_lisboa",
    followers: "80 mil seguidores",
    img: "assets/feed-elen-lisboa.jpg",
    desc: "Terapeuta há mais de 17 anos, com agenda cheia. O foco virou escala: estratégia de conteúdo que aumenta a venda de infoprodutos sem depender do atendimento um a um."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section servicos-wine"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 56,
      gap: 18,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(TagLabel, null, "TRABALHOS"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Feito aqui dentro, ", /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "com nossas m\xE3os.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 640
    }
  }, "Feeds que a gente constr\xF3i e cuida todos os dias: estrat\xE9gia, design e conte\xFAdo refletidos direto no perfil dos nossos clientes.")), /*#__PURE__*/React.createElement("div", {
    className: "feeds-list"
  }, feeds.map(function (f, i) {
    var _window$__resources3, _window$__resources4;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "feed-row ".concat(i % 2 === 1 ? "feed-row--reverse" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "iphone-mock"
    }, /*#__PURE__*/React.createElement("div", {
      className: "iphone-screen"
    }, typeof window !== "undefined" && (_window$__resources3 = window.__resources) !== null && _window$__resources3 !== void 0 && _window$__resources3["portfolio-".concat(f.slug)] || f.img ? /*#__PURE__*/React.createElement("img", {
      src: typeof window !== "undefined" && ((_window$__resources4 = window.__resources) === null || _window$__resources4 === void 0 ? void 0 : _window$__resources4["portfolio-".concat(f.slug)]) || f.img,
      alt: "Feed ".concat(f.name),
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center top"
      }
    }) : /*#__PURE__*/React.createElement("div", {
      className: "iphone-placeholder"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "38",
      height: "38",
      viewBox: "0 0 32 32",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "4",
      width: "24",
      height: "24",
      rx: "6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "16",
      r: "6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.5",
      cy: "8.5",
      r: "1.2",
      fill: "currentColor",
      stroke: "none"
    })), /*#__PURE__*/React.createElement("div", {
      className: "kicker gold",
      style: {
        marginTop: 12,
        letterSpacing: "0.14em"
      }
    }, "PRINT DO FEED"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--text-dim)",
        marginTop: 4
      }
    }, "adicionar screenshot")))), /*#__PURE__*/React.createElement("div", {
      className: "feed-desc"
    }, /*#__PURE__*/React.createElement("div", {
      className: "kicker gold",
      style: {
        letterSpacing: "0.16em"
      }
    }, f.followers), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 26,
        fontWeight: 500,
        color: "var(--text)",
        margin: "10px 0 2px"
      }
    }, f.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--gold-secondary)",
        marginBottom: 16
      }
    }, f.handle), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "var(--text-dim)",
        maxWidth: 460
      }
    }, f.desc)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "QUERO SABER MAIS"))), /*#__PURE__*/React.createElement("style", null, "\n        .feeds-list { display: flex; flex-direction: column; gap: 64px; }\n        .feed-row {\n          display: grid;\n          grid-template-columns: 300px 1fr;\n          gap: 56px;\n          align-items: center;\n          justify-content: center;\n          max-width: 880px;\n          margin: 0 auto;\n        }\n        .feed-row--reverse { grid-template-columns: 1fr 300px; }\n        .feed-row--reverse .iphone-mock { order: 2; }\n        .feed-row--reverse .feed-desc { order: 1; text-align: right; }\n        .feed-row--reverse .feed-desc p { margin-left: auto; }\n\n        .iphone-mock {\n          position: relative;\n          width: 280px;\n          aspect-ratio: 9 / 19;\n          border-radius: 44px;\n          background: #0a0604;\n          border: 2px solid #2a1a10;\n          padding: 10px;\n          box-shadow: 0 30px 70px -25px rgba(60,30,20,0.35), 0 0 0 1px rgba(110,24,37,0.2);\n          margin: 0 auto;\n        }\n        .iphone-notch {\n          position: absolute;\n          top: 20px; left: 50%;\n          transform: translateX(-50%);\n          width: 30%; height: 20px;\n          background: #000;\n          border-radius: 12px;\n          z-index: 5;\n        }\n        .iphone-screen {\n          width: 100%; height: 100%;\n          border-radius: 34px;\n          overflow: hidden;\n          position: relative;\n          background: linear-gradient(160deg, #241408 0%, #120a05 100%);\n        }\n        .iphone-placeholder {\n          position: absolute; inset: 0;\n          display: flex; flex-direction: column;\n          align-items: center; justify-content: center;\n          color: rgba(194,87,99,0.6);\n          text-align: center;\n          border: 1px dashed rgba(194,87,99,0.25);\n          border-radius: 34px;\n          margin: 8px;\n        }\n\n        @media (max-width: 820px) {\n          .feed-row, .feed-row--reverse {\n            grid-template-columns: 1fr !important;\n            gap: 28px;\n            text-align: center;\n          }\n          .feed-row--reverse .iphone-mock { order: 1; }\n          .feed-row--reverse .feed-desc { order: 2; text-align: center; }\n          .feed-desc p { margin: 0 auto !important; }\n          .iphone-mock { width: 240px; }\n        }\n      "));
};

/* ═══════════════ CTA FIXO LATERAL ═══════════════ */
var BMFloatCTA = function BMFloatCTA() {
  return /*#__PURE__*/React.createElement("a", {
    href: "#form",
    className: "float-cta",
    onClick: function onClick(e) {
      var t = document.getElementById("form");
      if (t) {
        e.preventDefault();
        window.scrollTo({
          top: t.getBoundingClientRect().top + window.scrollY - 20,
          behavior: "smooth"
        });
      }
    }
  }, /*#__PURE__*/React.createElement("span", null, "QUERO SABER MAIS"), /*#__PURE__*/React.createElement("span", {
    className: "float-cta-arrow"
  }, /*#__PURE__*/React.createElement(IconArrowUR, null)), /*#__PURE__*/React.createElement("style", null, "\n      .float-cta {\n        position: fixed;\n        right: 20px;\n        bottom: 24px;\n        z-index: 9000;\n        display: inline-flex;\n        align-items: center;\n        gap: 10px;\n        padding: 14px 20px;\n        border-radius: 999px;\n        background: linear-gradient(90deg, #5C1420 0%, #6E1825 100%);\n        color: #FBF7EC;\n        font-weight: 700;\n        font-size: 13px;\n        letter-spacing: 0.08em;\n        text-transform: uppercase;\n        text-decoration: none;\n        box-shadow: 0 12px 40px -8px rgba(138,36,52,0.5), 0 4px 16px rgba(60,30,20,0.2);\n        transition: transform 0.25s ease, box-shadow 0.25s ease;\n      }\n      .float-cta:hover {\n        transform: translateY(-2px);\n        box-shadow: 0 18px 50px -8px rgba(138,36,52,0.65), 0 6px 20px rgba(60,30,20,0.25);\n      }\n      .float-cta-arrow {\n        width: 24px; height: 24px;\n        display: grid; place-items: center;\n        border-radius: 50%;\n        background: rgba(60,13,20,0.92);\n        color: #C25763;\n      }\n      @media (max-width: 768px) {\n        .float-cta { right: 14px; bottom: 16px; padding: 12px 16px; font-size: 12px; }\n      }\n    "));
};

/* ═══════════════ 09 SOBRE FUNDADORAS ═══════════════ */
var BMSobre = function BMSobre() {
  var _window$__resources5;
  return /*#__PURE__*/React.createElement("section", {
    className: "section warm-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "split-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "founders-photo-wrap founders-photo-wrap--framed"
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== "undefined" && ((_window$__resources5 = window.__resources) === null || _window$__resources5 === void 0 ? void 0 : _window$__resources5["quem-conduz-bia-bru"]) || "assets/quem-conduz-bia-bru.png",
    alt: "Bia e Bru, fundadoras da Be Maith",
    className: "founders-photo founders-photo--framed"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(TagLabel, null, "QUEM CONDUZ"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "Prazer,"), " Bia e Bru."), /*#__PURE__*/React.createElement("p", {
    className: "serif-italic",
    style: {
      fontSize: 20,
      color: "var(--text-dim)",
      margin: 0
    }
  }, "Advogadas de forma\xE7\xE3o. Estrategistas por escolha."), /*#__PURE__*/React.createElement("p", null, "Bia conduz estrat\xE9gia e gest\xE3o. Bru conduz design e experi\xEAncia do cliente. Constru\xEDmos a Be Maith pra ser a ag\xEAncia que ", /*#__PURE__*/React.createElement("strong", null, "a gente mesmo gostaria de contratar:"), " pr\xF3xima, transparente e comprometida com o resultado de quem confia na gente."), /*#__PURE__*/React.createElement("p", null, "Atendemos pessoalmente cada cliente, do diagn\xF3stico \xE0 execu\xE7\xE3o. ", /*#__PURE__*/React.createElement("strong", null, "Marcas que ficam em m\xE9dia mais de 2 anos com a gente"), " s\xE3o a melhor prova de que esse jeito funciona."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "QUERO FALAR COM AS FUNDADORAS"))))));
};

/* ═══════════════ 10 DEPOIMENTOS ═══════════════ */
var BMDepoimentos = function BMDepoimentos() {
  var _window$__resources6, _window$__resources7, _window$__resources8;
  var deps = [{
    name: "Caroline Constante",
    handle: "@dracarolineconstante",
    photo: typeof window !== "undefined" && ((_window$__resources6 = window.__resources) === null || _window$__resources6 === void 0 ? void 0 : _window$__resources6["avatar-carol"]) || "assets/avatar-carol-sq.jpg",
    body: "Estão me ajudando demais com a estratégia e produção de conteúdo desde março. Engajamento cresceu muito, distribuição dando muito mais resultado, crescendo em seguidores e o principal: o Workshop que fiz como lançamento pago do meu produto Sol deu um resultado excelente!"
  }, {
    name: "Alê Prates",
    handle: "@alepratesoficial",
    photo: typeof window !== "undefined" && ((_window$__resources7 = window.__resources) === null || _window$__resources7 === void 0 ? void 0 : _window$__resources7["avatar-ale"]) || "assets/avatar-ale-sq.jpg",
    body: "Captaram muito bem o conceito da liberdade profissional e das angústias do ambiente corporativo. Minha melhor performance no Instagram da história. Alcance máximo chegou a 3MM. Devemos chegar a 44MM essa semana."
  }, {
    name: "Dani Gomes",
    handle: "@danigomes",
    photo: typeof window !== "undefined" && ((_window$__resources8 = window.__resources) === null || _window$__resources8 === void 0 ? void 0 : _window$__resources8["avatar-dani"]) || "assets/avatar-dani-sq.jpg",
    body: "Eu tinha zero procura via Instagram, e isso já aumentou significativamente. Pelo menos 1 vez por semana recebo pedidos novos. Hoje fechei com um casal exatamente com o público que estamos almejando. Graças ao trabalho de vocês."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHeadCenter, {
    tag: "O QUE DIZEM"
  }, "Quem chega aqui, ", /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "costuma ficar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 22
    },
    className: "deps-grid"
  }, deps.map(function (d, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "card",
      style: {
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "36",
      height: "28",
      viewBox: "0 0 36 28",
      fill: "none",
      style: {
        color: "var(--gold-secondary)",
        opacity: 0.5
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 28 L0 14 C0 6 6 0 14 0 L14 6 C10 6 6 10 6 14 L14 14 L14 28 Z M22 28 L22 14 C22 6 28 0 36 0 L36 6 C32 6 28 10 28 14 L36 14 L36 28 Z",
      fill: "currentColor"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: "var(--text)",
        lineHeight: 1.6,
        flex: 1
      }
    }, "\"", d.body, "\""), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        paddingTop: 12,
        borderTop: "1px solid var(--gold-line)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        backgroundImage: "url('".concat(d.photo, "')"),
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid var(--gold-line-strong)",
        boxShadow: "0 0 0 3px rgba(20,9,10,0.6)"
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 15
      }
    }, d.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--gold-secondary)",
        letterSpacing: "0.02em"
      }
    }, d.handle))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "QUERO SABER MAIS"))), /*#__PURE__*/React.createElement("style", null, "\n        @media (max-width: 1000px) { .deps-grid { grid-template-columns: 1fr !important; } }\n      "));
};

/* ═══════════════ 10.5 INSTAGRAM ═══════════════ */
var BMInstagram = function BMInstagram() {
  var posts = Array.from({
    length: 6
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      paddingTop: 56,
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      marginBottom: 40,
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TagLabel, null, "NO INSTAGRAM"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      marginTop: 18,
      textWrap: "balance",
      maxWidth: 720
    }
  }, "Acompanhe a gente ", /*#__PURE__*/React.createElement("span", {
    className: "serif-italic gold"
  }, "por dentro"))), /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/bemaithagencia",
    target: "_blank",
    rel: "noopener",
    className: "btn-cta",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, "@bemaithagencia"), /*#__PURE__*/React.createElement("span", {
    className: "arrow-box"
  }, /*#__PURE__*/React.createElement(IconArrowUR, null)))), /*#__PURE__*/React.createElement("div", {
    className: "ig-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 8
    }
  }, posts.map(function (_, i) {
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "https://instagram.com/bemaithagencia",
      target: "_blank",
      rel: "noopener",
      style: {
        aspectRatio: "1/1",
        background: "var(--bg-warm)",
        border: "1px solid var(--gold-line)",
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-dim)",
        fontSize: 11,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        textDecoration: "none"
      }
    }, "POST ", i + 1);
  }))), /*#__PURE__*/React.createElement("style", null, "\n        @media (max-width: 900px) { .ig-grid { grid-template-columns: repeat(3, 1fr) !important; } }\n      "));
};

/* ═══════════════ 11 FAQ ═══════════════ */
var BMFAQ = function BMFAQ() {
  var _useStateBM = useStateBM(0),
    _useStateBM2 = _slicedToArray(_useStateBM, 2),
    open = _useStateBM2[0],
    setOpen = _useStateBM2[1];
  var faqs = [{
    q: "Como funciona o investimento?",
    a: "O plano é montado conforme o seu momento, modelo de negócio e o que faz sentido pra você agora. Na conversa de diagnóstico a gente desenha o escopo certo, pode ser uma frente específica ou marketing de ponta a ponta."
  }, {
    q: "Vocês entendem do meu segmento?",
    a: "Já atendemos +20 segmentos, da saúde ao financeiro, de produto a infoproduto. Antes de propor qualquer estratégia, a gente mergulha no seu negócio pra entender vocabulário, jornada de compra e o que diferencia você no seu mercado."
  }, {
    q: "Em quanto tempo eu vejo resultado?",
    a: "Primeiros sinais (engajamento, qualidade de lead, percepção de marca) aparecem nas primeiras semanas. Resultado financeiro consistente costuma vir entre o terceiro e o sexto mês. Por isso revisamos a estratégia mensalmente: pra acelerar o que está funcionando."
  }, {
    q: "E se eu já tenho time de tráfego ou comercial?",
    a: "Ótimo. A gente conversa direto com seu time. Indica criativo, pede teste, acompanha custo por lead, sugere ajuste de público. A ideia é somar, não disputar, você está pagando pra todo mundo remar junto."
  }, {
    q: "Posso começar com uma frente só?",
    a: "Pode. Cada plano é flexível. A gente sugere o que faz sentido pro seu momento. Não vamos te oferecer tudo só porque temos tudo. Se for melhor começar por conteúdo ou tráfego e expandir depois, é por aí que vamos."
  }, {
    q: "Quem é o ponto de contato no dia a dia?",
    a: "Você fala com Bia e Bru. Do diagnóstico ao encontro mensal, passando pelo grupo de WhatsApp. A gente não te coloca num grupo com pessoas aleatórias, quem te recebeu na reunião é quem te acompanha na execução."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section warm-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 56,
      gap: 18,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(TagLabel, null, "D\xDAVIDAS HONESTAS"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Algumas coisas que ", /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "a gente costuma esclarecer antes."))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      borderTop: "1px solid var(--gold-line)"
    }
  }, faqs.map(function (f, i) {
    var isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--gold-line)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setOpen(isOpen ? -1 : i);
      },
      style: {
        width: "100%",
        padding: "24px 0",
        display: "flex",
        alignItems: "center",
        gap: 24,
        textAlign: "left",
        background: "transparent",
        border: 0,
        color: "inherit"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 19,
        fontWeight: 500,
        color: isOpen ? "var(--gold-secondary)" : "var(--text)",
        lineHeight: 1.35
      }
    }, f.q), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: "50%",
        border: "1px solid var(--gold-line-strong)",
        display: "grid",
        placeItems: "center",
        flexShrink: 0,
        transform: isOpen ? "rotate(45deg)" : "none",
        transition: "transform 0.3s",
        color: "var(--gold-secondary)"
      }
    }, /*#__PURE__*/React.createElement(IconPlus, null))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 300 : 0,
        overflow: "hidden",
        transition: "max-height 0.4s ease"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        paddingBottom: 24,
        paddingRight: 56,
        fontSize: 15.5,
        color: "var(--text-dim)",
        lineHeight: 1.65
      }
    }, f.a)));
  }))));
};

/* ═══════════════ 12 CTA FINAL + FORMULÁRIO ═══════════════ */
var BMForm = function BMForm() {
  var _useStateBM3 = useStateBM(false),
    _useStateBM4 = _slicedToArray(_useStateBM3, 2),
    submitted = _useStateBM4[0],
    setSubmitted = _useStateBM4[1];
  var _useStateBM5 = useStateBM(false),
    _useStateBM6 = _slicedToArray(_useStateBM5, 2),
    sending = _useStateBM6[0],
    setSending = _useStateBM6[1];
  var _useStateBM7 = useStateBM(null),
    _useStateBM8 = _slicedToArray(_useStateBM7, 2),
    error = _useStateBM8[0],
    setError = _useStateBM8[1];
  var _useStateBM9 = useStateBM({
      nome: "",
      sobrenome: "",
      email: "",
      whatsapp: "",
      instagram: "",
      mensagem: ""
    }),
    _useStateBM0 = _slicedToArray(_useStateBM9, 2),
    data = _useStateBM0[0],
    setData = _useStateBM0[1];
  var update = function update(k) {
    return function (e) {
      return setData(_objectSpread(_objectSpread({}, data), {}, _defineProperty({}, k, e.target.value)));
    };
  };
  var submit = /*#__PURE__*/function () {
    var _submit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var res, _j$errors, j, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            setSending(true);
            setError(null);
            _context.p = 1;
            _context.n = 2;
            return fetch("https://formspree.io/f/mkoynvzw", {
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                nome: data.nome,
                sobrenome: data.sobrenome,
                email: data.email,
                whatsapp: data.whatsapp,
                instagram: data.instagram,
                mensagem: data.mensagem,
                _subject: "Be Maith: novo contato de ".concat(data.nome, " ").concat(data.sobrenome)
              })
            });
          case 2:
            res = _context.v;
            if (!res.ok) {
              _context.n = 3;
              break;
            }
            setSubmitted(true);
            _context.n = 5;
            break;
          case 3:
            _context.n = 4;
            return res.json()["catch"](function () {
              return {};
            });
          case 4:
            j = _context.v;
            setError(((_j$errors = j.errors) === null || _j$errors === void 0 || (_j$errors = _j$errors[0]) === null || _j$errors === void 0 ? void 0 : _j$errors.message) || "Não conseguimos enviar agora. Tente de novo em instantes.");
          case 5:
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            setError("Sem conexão. Verifique sua internet e tente novamente.");
          case 7:
            _context.p = 7;
            setSending(false);
            return _context.f(7);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6, 7, 8]]);
    }));
    function submit(_x) {
      return _submit.apply(this, arguments);
    }
    return submit;
  }();
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg, #4E0F1A 0%, #5C1420 60%, #6E1825 100%)",
      border: "1px solid var(--gold-line-strong)",
      borderRadius: 28,
      padding: "64px 56px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(80% 60% at 50% 0%, rgba(110,24,37,0.16) 0%, transparent 65%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: 56,
      alignItems: "start"
    },
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(TagLabel, null, "PR\xD3XIMO PASSO"), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, "Vamos ", /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, "conversar?")), /*#__PURE__*/React.createElement("p", null, "Conta um pouco sobre sua marca, seu momento e o que voc\xEA est\xE1 buscando. ", /*#__PURE__*/React.createElement("strong", null, "Bia e Bru leem cada mensagem"), " e respondem pessoalmente."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, "A primeira conversa \xE9 um diagn\xF3stico real, n\xE3o uma apresenta\xE7\xE3o de proposta. Voc\xEA sai com clareza, mesmo que a gente n\xE3o trabalhe junto."), /*#__PURE__*/React.createElement("div", {
    className: "kicker dim",
    style: {
      marginTop: 8
    }
  }, "\uD83D\uDD12 SEUS DADOS EST\xC3O SEGUROS")), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: "center",
      border: "1px solid var(--gold-line-strong)",
      borderRadius: 16,
      background: "rgba(110,24,37,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--gold-secondary)",
      color: "#FBF7EC",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 18px"
    }
  }, /*#__PURE__*/React.createElement(IconCheck, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    className: "serif-italic gold",
    style: {
      fontSize: 28,
      marginBottom: 10
    }
  }, "Recebemos, ", data.nome || "tudo certo", "!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Em at\xE9 24h Bia ou Bru entram em contato com voc\xEA.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(BMInput, {
    label: "Nome",
    value: data.nome,
    onChange: update("nome")
  }), /*#__PURE__*/React.createElement(BMInput, {
    label: "Sobrenome",
    value: data.sobrenome,
    onChange: update("sobrenome")
  })), /*#__PURE__*/React.createElement(BMInput, {
    label: "E-mail",
    type: "email",
    value: data.email,
    onChange: update("email")
  }), /*#__PURE__*/React.createElement(BMInput, {
    label: "WhatsApp",
    value: data.whatsapp,
    onChange: update("whatsapp"),
    placeholder: "+55 (11) 9 0000-0000"
  }), /*#__PURE__*/React.createElement(BMInput, {
    label: "@ do Instagram da sua marca",
    value: data.instagram,
    onChange: update("instagram"),
    placeholder: "@suamarca"
  }), /*#__PURE__*/React.createElement(BMInput, {
    label: "Conte sobre sua marca e seu momento",
    multiline: true,
    value: data.mensagem,
    onChange: update("mensagem"),
    placeholder: "Faturamento aproximado, principal trava hoje, o que j\xE1 tentou..."
  }), error && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderRadius: 8,
      background: "rgba(220,80,60,0.12)",
      border: "1px solid rgba(220,80,60,0.4)",
      color: "#ffb4a8",
      fontSize: 13
    }
  }, error), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: sending,
    className: "btn-cta",
    style: {
      marginTop: 8,
      justifyContent: "center",
      opacity: sending ? 0.7 : 1,
      cursor: sending ? "wait" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", null, sending ? "ENVIANDO..." : "QUERO FALAR COM A BIA E A BRU"), /*#__PURE__*/React.createElement("span", {
    className: "arrow-box"
  }, /*#__PURE__*/React.createElement(IconArrowUR, null)))))))), /*#__PURE__*/React.createElement("style", null, "\n        @media (max-width: 900px) { .form-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }\n        #form h2 { color: #F6EBDD; }\n        #form .form-grid p { color: rgba(246,235,221,0.85); }\n        #form .form-grid p strong { color: #FFFFFF; }\n        #form .kicker.dim { color: rgba(246,235,221,0.6); }\n        #form .gold, #form .serif-italic { color: #E8C9A6; }\n        #form .btn-cta { background: #F2DFD0; color: #4E0F1A; }\n        #form .btn-cta .arrow-box { background: #5C1420; color: #F2DFD0; }\n        #form .tag-label { background: rgba(255,255,255,0.12); color: #F2DFD0; border-color: rgba(246,235,221,0.3); }\n      "));
};
var BMInput = function BMInput(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "text" : _ref$type,
    placeholder = _ref.placeholder,
    multiline = _ref.multiline;
  var _useStateBM1 = useStateBM(false),
    _useStateBM10 = _slicedToArray(_useStateBM1, 2),
    focus = _useStateBM10[0],
    setFocus = _useStateBM10[1];
  var filled = !!value;
  var Cmp = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 16,
      top: filled || focus ? 8 : multiline ? 18 : "50%",
      transform: filled || focus ? "translateY(0)" : multiline ? "none" : "translateY(-50%)",
      fontSize: filled || focus ? 10 : 13.5,
      letterSpacing: filled || focus ? "0.16em" : "0.04em",
      textTransform: filled || focus ? "uppercase" : "none",
      color: filled || focus ? "var(--gold-secondary)" : "var(--text-dim)",
      transition: "all 0.2s ease",
      pointerEvents: "none",
      background: "transparent"
    }
  }, label), /*#__PURE__*/React.createElement(Cmp, {
    type: type,
    value: value,
    onChange: onChange,
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: function onBlur() {
      return setFocus(false);
    },
    placeholder: focus ? placeholder : "",
    rows: multiline ? 4 : undefined,
    style: {
      width: "100%",
      background: "rgba(255,255,255,0.92)",
      border: "1px solid ".concat(focus ? "var(--gold-secondary)" : "var(--gold-line-strong)"),
      borderRadius: 12,
      color: "var(--text)",
      fontFamily: "inherit",
      fontSize: 15,
      padding: multiline ? "26px 16px 14px" : "22px 16px 8px",
      outline: "none",
      transition: "border-color 0.2s",
      resize: multiline ? "vertical" : "none",
      minHeight: multiline ? 120 : "auto"
    }
  }));
};

/* ═══════════════ RODAPÉ ═══════════════ */
var BMFooter = function BMFooter() {
  var _window$__resources9;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--gold-line)",
      paddingTop: 80,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 48,
      marginBottom: 56
    },
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== "undefined" && ((_window$__resources9 = window.__resources) === null || _window$__resources9 === void 0 ? void 0 : _window$__resources9["logo"]) || "assets/logo.png?v=2",
    alt: "Be Maith",
    style: {
      height: 120,
      width: 120,
      objectFit: "contain",
      filter: "invert(0.88) sepia(0.6) saturate(6) hue-rotate(315deg)",
      display: "block",
      marginLeft: -20,
      alignSelf: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      maxWidth: 360
    }
  }, "Be Maith vem de \"seja bom\" em irland\xEAs. Trabalhamos com marcas que j\xE1 s\xE3o boas no que fazem, e fazemos elas chegarem mais longe, no digital, com estrat\xE9gia personalizada e atendimento direto das fundadoras.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker gold",
    style: {
      marginBottom: 18
    }
  }, "SEDES"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-dim)",
      lineHeight: 1.9
    }
  }, "Rio de Janeiro", /*#__PURE__*/React.createElement("br", null), "S\xE3o Paulo", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text)"
    }
  }, "Atendimento Brasil & Exterior"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker gold",
    style: {
      marginBottom: 18
    }
  }, "CONTATO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-dim)",
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:contato@bemaithagencia.com",
    style: {
      color: "var(--text)",
      borderBottom: "1px solid var(--gold-line)"
    }
  }, "contato@bemaithagencia.com"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5521965394532",
    style: {
      color: "var(--text)",
      borderBottom: "1px solid var(--gold-line)"
    }
  }, "+55 21 96539-4532")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(CTA, null, "MARCAR CONVERSA")))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 32,
      borderTop: "1px solid var(--gold-line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker dim"
  }, "\xA9 2026 \u2022 AG\xCANCIA BE MAITH. TODOS OS DIREITOS RESERVADOS."), /*#__PURE__*/React.createElement("div", {
    className: "serif-italic",
    style: {
      fontSize: 14,
      color: "var(--gold-secondary)"
    }
  }, "seja bom. e deixe o mundo ver."))), /*#__PURE__*/React.createElement("style", null, "\n      @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr !important; } }\n    "));
};
Object.assign(window, {
  BMHero: BMHero,
  BMProvaSocial: BMProvaSocial,
  BMParaQuem: BMParaQuem,
  BMProblema: BMProblema,
  BMPilares: BMPilares,
  BMComoFunciona: BMComoFunciona,
  BMNumeros: BMNumeros,
  BMServicos: BMServicos,
  BMPortfolio: BMPortfolio,
  BMFloatCTA: BMFloatCTA,
  BMSobre: BMSobre,
  BMDepoimentos: BMDepoimentos,
  BMFAQ: BMFAQ,
  BMForm: BMForm,
  BMFooter: BMFooter
});