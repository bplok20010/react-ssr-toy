"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = _interopRequireDefault(require("../../view"));

var _news = _interopRequireDefault(require("../../model/news"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(req, res) {
  (0, _news.default)().then(function (data) {
    var content = (0, _view.default)("news/index", {
      title: "新闻列表",
      data: data
    });
    res.send(content);
  });
};

exports.default = _default;