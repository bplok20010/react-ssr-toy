import express from "express";
import router from "./router";
import serveStatic from "serve-static";
import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore
global.React = React;
// @ts-ignore
global.ReactDOM = ReactDOM;

const PORT = 8000;

function bootstrap() {
	const app = express();

	app.use(serveStatic("./lib"));
	app.use(router);

	app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
}

bootstrap();
