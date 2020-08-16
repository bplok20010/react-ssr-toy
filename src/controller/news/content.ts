import { Request, Response } from "express";
import view from "../../view";
import getList from "../../model/news";

export default (req: Request, res: Response) => {
	getList().then((data) => {
		const content = view("news/content", {
			title: "新闻内容",
			data:
				"这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！这是新闻内容！",
		});

		res.send(content);
	});
};
