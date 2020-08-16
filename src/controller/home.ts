import { Request, Response } from "express";
import view from "../view";

export default (req: Request, res: Response) => {
	const content = view("home", {
		title: "首页",
		tabs: [
			{
				key: "news",
				title: "热搜",
				content:
					"这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！这是热搜内容！",
			},
			{
				key: "about",
				title: "投稿",
				content: "联系我们：xxx-xxxx-xxxx",
			},
		],
	});

	res.send(content);
};
