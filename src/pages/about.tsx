import React from "react";

export default function ({ data }: { data: string; [x: string]: any }) {
	return (
		<div>
			<div className="header">
				<div className="inner">
					<a href="/">首页</a>
					<a href="/news">新闻</a>
					<a href="/about" className="active">
						关于我们
					</a>
				</div>
			</div>
			<div className="main">联系我们：xxx-xxxx-xxxx</div>
		</div>
	);
}
