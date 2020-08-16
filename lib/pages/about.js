"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, "\u9996\u9875"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/news"
  }, "\u65B0\u95FB"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/about",
    className: "active"
  }, "\u5173\u4E8E\u6211\u4EEC"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "main"
  }, "\u8054\u7CFB\u6211\u4EEC\uFF1Axxx-xxxx-xxxx"));
}