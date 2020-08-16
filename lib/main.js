"use strict";

var _express = _interopRequireDefault(require("express"));

var _router = _interopRequireDefault(require("./router"));

var _serveStatic = _interopRequireDefault(require("serve-static"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
global.React = _react.default; // @ts-ignore

global.ReactDOM = _reactDom.default;
var PORT = 8000;

function bootstrap() {
  var app = (0, _express.default)();
  app.use((0, _serveStatic.default)("./lib"));
  app.use(_router.default);
  app.listen(PORT, function () {
    return console.log("app listening on port " + PORT + "!");
  });
}

bootstrap();