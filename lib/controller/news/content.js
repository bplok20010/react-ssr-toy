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
    var content = (0, _view.default)("news/content", {
      title: "新闻内容",
      data: "这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！"
    });
    res.send(content);
  });
};

exports.default = _default;