"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return new Promise(function (resolve) {
    var list = [];

    for (var i = 1; i < 21; i++) {
      list.push({
        id: i,
        title: "新闻新闻新闻-" + i
      });
    }

    setTimeout(function () {
      resolve(list);
    }, 100);
  });
};

exports.default = _default;