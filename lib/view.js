"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(path, data) {
  if (data === void 0) {
    data = {};
  }

  var Page = require("./pages/" + path + ".js").default;

  var content = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(Page, data));

  var dataToLocal = JSON.stringify(data, null, 2);
  var html = "\n    <!DOCTYPE html><html lang=\"en\"><head>\n    <title>" + (data.title || "SSR Demo") + "</title>\n    <link rel=\"stylesheet\" href=\"/pages/style/common.css\"/>\n    <script crossorigin src=\"https://unpkg.com/react@16.13.1/umd/react.development.js\"></script>\n    <script crossorigin src=\"https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js\"></script>\n     <script>\n        //hook\n        function require(name) {\n            if(name === 'react') return React;\n            if(name === 'react-dom') return ReactDOM;\n            return  window[name];\n        }\n        var exports = {};\n    </script>\n    <script crossorigin src=\"/pages/" + path + ".js\"></script>\n    </head><body>\n    <div id=\"root\">" + content + "</div>\n    <script>\n        const _data = " + dataToLocal + ";\n        ReactDOM.hydrate(React.createElement(exports.default, _data), root);\n    </script>\n    </body></html>\n    ";
  return html;
};

exports.default = _default;