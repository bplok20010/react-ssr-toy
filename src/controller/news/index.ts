import { Request, Response } from "express";
import view from "../../view";
import getList from "../../model/news";

export default (req: Request, res: Response) => {
	getList().then((data) => {
		const content = view("news/index", {
			title: "新闻列表",
			data,
		});

		res.send(content);
	});
};
