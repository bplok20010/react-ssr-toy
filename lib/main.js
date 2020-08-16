"use strict";

var _express = _interopRequireDefault(require("express"));

var _router = _interopRequireDefault(require("./router"));

var _serveStatic = _interopRequireDefault(require("serve-static"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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