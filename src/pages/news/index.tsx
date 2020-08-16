import React from "react";

export default function ({ data }: { data: { id: number; title: string }[]; [x: string]: any }) {
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
				<h3>新闻列表</h3>
				{data.map((item, i) => {
					return (
						<div className="news-list" key={item.id}>
							<a href={`/news/${item.id}`}>- {item.title}</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
