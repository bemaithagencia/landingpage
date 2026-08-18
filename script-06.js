function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* global React */
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;

/* ─────────── Icons ─────────── */
var IconDoorTag = function IconDoorTag(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 14 : _ref$size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 1.5 L2 12.5 M2 1.5 L8 1.5 M2 12.5 L8 12.5",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6.5",
    cy: "7",
    r: "0.6",
    fill: "currentColor"
  }));
};
var IconArrowUR = function IconArrowUR(_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 14 : _ref2$size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 10.5 L10.5 3.5 M5 3.5 L10.5 3.5 L10.5 9",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var IconCheck = function IconCheck(_ref3) {
  var _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? 16 : _ref3$size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5 L6.5 12 L13 4.5",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var IconX = function IconX(_ref4) {
  var _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 16 : _ref4$size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4 L12 12 M12 4 L4 12",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }));
};
var IconChevL = function IconChevL() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 4 L6 9 L11 14",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var IconChevR = function IconChevR() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 4 L12 9 L7 14",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var IconGift = function IconGift(_ref5) {
  var _ref5$size = _ref5.size,
    size = _ref5$size === void 0 ? 12 : _ref5$size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6 H12 V12 H2 Z M7 6 V12 M2 6 V4.5 H12 V6 M5 4.5 C5 3 4 3 3.5 3 C3 3 2.8 3.5 3.2 4 C3.6 4.5 5 4.5 5 4.5 Z M9 4.5 C9 3 10 3 10.5 3 C11 3 11.2 3.5 10.8 4 C10.4 4.5 9 4.5 9 4.5 Z",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinejoin: "round"
  }));
};
var IconPlay = function IconPlay(_ref6) {
  var _ref6$size = _ref6.size,
    size = _ref6$size === void 0 ? 24 : _ref6$size;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5 L19 12 L8 19 Z"
  }));
};
var IconPlus = function IconPlus() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2 V12 M2 7 H12",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }));
};

/* ─────────── Tag-label "porta aberta" ─────────── */
var TagLabel = function TagLabel(_ref7) {
  var children = _ref7.children;
  return /*#__PURE__*/React.createElement("span", {
    className: "tag-label"
  }, /*#__PURE__*/React.createElement(IconDoorTag, null), " ", children);
};

/* ─────────── CTA ─────────── */
var CTA = function CTA(_ref8) {
  var _ref8$children = _ref8.children,
    children = _ref8$children === void 0 ? "QUERO ME TORNAR ALUNA" : _ref8$children,
    onClick = _ref8.onClick,
    _ref8$href = _ref8.href,
    href = _ref8$href === void 0 ? "#form" : _ref8$href;
  var handleClick = function handleClick(e) {
    if (onClick) {
      onClick(e);
      if (e.defaultPrevented) return;
    }
    if (href && href.startsWith("#")) {
      var target = document.getElementById(href.slice(1));
      if (target) {
        e.preventDefault();
        var y = target.getBoundingClientRect().top + window.scrollY - 20;
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    }
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: "btn-cta",
    onClick: handleClick
  }, /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    className: "arrow-box"
  }, /*#__PURE__*/React.createElement(IconArrowUR, null)));
};

/* ─────────── Editorial photo placeholder ─────────── */
var Photo = function Photo(_ref9) {
  var _ref9$label = _ref9.label,
    label = _ref9$label === void 0 ? "editorial portrait" : _ref9$label,
    _ref9$className = _ref9.className,
    className = _ref9$className === void 0 ? "" : _ref9$className,
    style = _ref9.style,
    _ref9$modifier = _ref9.modifier,
    modifier = _ref9$modifier === void 0 ? "" : _ref9$modifier,
    src = _ref9.src,
    alt = _ref9.alt;
  return /*#__PURE__*/React.createElement("div", {
    className: "ph ".concat(modifier, " ").concat(className),
    style: _objectSpread(_objectSpread({}, style), src ? {
      backgroundImage: "url(\"".concat(src, "\")"),
      backgroundSize: "cover",
      backgroundPosition: "center"
    } : null)
  }, !src && /*#__PURE__*/React.createElement("span", {
    className: "ph-label"
  }, "// ", label), src && alt && /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, alt));
};

/* ─────────── Avatar Cluster ─────────── */
var AvatarCluster = function AvatarCluster() {
  return /*#__PURE__*/React.createElement("span", {
    className: "avatar-cluster"
  }, /*#__PURE__*/React.createElement("span", {
    className: "av"
  }), /*#__PURE__*/React.createElement("span", {
    className: "av"
  }), /*#__PURE__*/React.createElement("span", {
    className: "av"
  }), /*#__PURE__*/React.createElement("span", {
    className: "av"
  }));
};

/* ─────────── Mockups ─────────── */
var LaptopMock = function LaptopMock(_ref0) {
  var children = _ref0.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "laptop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "notch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "base"
  }));
};
var PhoneMock = function PhoneMock(_ref1) {
  var children = _ref1.children,
    style = _ref1.style;
  return /*#__PURE__*/React.createElement("div", {
    className: "phone",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "island"
  }), /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, children));
};
var TabletMock = function TabletMock(_ref10) {
  var children = _ref10.children,
    style = _ref10.style;
  return /*#__PURE__*/React.createElement("div", {
    className: "tablet",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, children));
};

/* ─────────── Section header center ─────────── */
var SectionHeadCenter = function SectionHeadCenter(_ref11) {
  var tag = _ref11.tag,
    children = _ref11.children,
    sub = _ref11.sub;
  return /*#__PURE__*/React.createElement("div", {
    className: "section-head-center"
  }, tag && /*#__PURE__*/React.createElement(TagLabel, null, tag), /*#__PURE__*/React.createElement("h2", {
    className: "h-section"
  }, children), sub && /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, sub));
};
var Divider = function Divider() {
  return /*#__PURE__*/React.createElement("div", {
    className: "divider",
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  });
};
Object.assign(window, {
  IconDoorTag: IconDoorTag,
  IconArrowUR: IconArrowUR,
  IconCheck: IconCheck,
  IconX: IconX,
  IconChevL: IconChevL,
  IconChevR: IconChevR,
  IconGift: IconGift,
  IconPlay: IconPlay,
  IconPlus: IconPlus,
  TagLabel: TagLabel,
  CTA: CTA,
  Photo: Photo,
  AvatarCluster: AvatarCluster,
  LaptopMock: LaptopMock,
  PhoneMock: PhoneMock,
  TabletMock: TabletMock,
  SectionHeadCenter: SectionHeadCenter,
  Divider: Divider
});