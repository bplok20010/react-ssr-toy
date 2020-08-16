"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _home = _interopRequireDefault(require("./controller/home"));

var _news = _interopRequireDefault(require("./controller/news"));

var _content = _interopRequireDefault(require("./controller/news/content"));

var _about = _interopRequireDefault(require("./controller/about"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get("/", _home.default);
router.get("/news", _news.default);
router.get("/news/:id", _content.default);
router.get("/about", _about.default);
var _default = router;
exports.default = _default;