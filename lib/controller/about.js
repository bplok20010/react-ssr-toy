"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = _interopRequireDefault(require("../view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(req, res) {
  var content = (0, _view.default)("about", {
    title: "联系我们"
  });
  res.send(content);
};

exports.default = _default;