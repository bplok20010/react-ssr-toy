import React from "react";

export default function ({ data }: { data: string; [x: string]: any }) {
	return (
		<div>
			<div className="header">
				<div className="inner">
					<a href="/">首页</a>
					<a href="/news" className="active">
						新闻
					</a>
					<a href="/about">关于我们</a>
				</div>
			</div>
			<div className="main">
				<div>{data}</div>
			</div>
		</div>
	);
}
