import { Request, Response } from "express";
import view from "../view";

export default (req: Request, res: Response) => {
	const content = view("about", {
		title: "联系我们",
	});

	res.send(content);
};
