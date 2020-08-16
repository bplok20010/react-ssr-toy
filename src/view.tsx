import React from "react";
import ReactDOMServer from "react-dom/server";

export default (path: string, data: Record<any, any> = {}) => {
	const Page = require(`./pages/${path}.js`).default;

	const content = ReactDOMServer.renderToString(<Page {...data} />);
	const dataToLocal = JSON.stringify(data, null, 2);

	const html = `
    <!DOCTYPE html><html lang="en"><head>
    <title>${data.title || "SSR Demo"}</title>
    <link rel="stylesheet" href="/pages/style/common.css"/>
    <script crossorigin src="https://unpkg.com/react@16.13.1/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16.13.1/umd/react-dom.development.js"></script>
     <script>
        //hook
        function require(name) {
            if(name === 'react') return React;
            if(name === 'react-dom') return ReactDOM;
            return  window[name];
        }
        var exports = {};
    </script>
    <script crossorigin src="/pages/${path}.js"></script>
    </head><body>
    <div id="root">${content}</div>
    <script>
        const _data = ${dataToLocal};
        ReactDOM.hydrate(React.createElement(exports.default, _data), root);
    </script>
    </body></html>
    `;

	return html;
};
