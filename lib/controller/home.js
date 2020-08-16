"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = _interopRequireDefault(require("../view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(req, res) {
  var content = (0, _view.default)("home", {
    title: "首页",
    tabs: [{
      key: "news",
      title: "热搜",
      content: "这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！"
    }, {
      key: "about",
      title: "投稿",
      content: "联系我们：xxx-xxxx-xxxx"
    }]
  });
  res.send(content);
};

exports.default = _default;