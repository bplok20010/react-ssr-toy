import React from "react";

interface TabItem {
	key: string;
	title: string;
	content: string;
}

export default function Home({ tabs }: { tabs: TabItem[]; [x: string]: any }) {
	const [activeTab, setTabActive] = React.useState(tabs[0]);

	const handleTabClick = (tab) => {
		setTabActive(tab);
	};

	return (
		<div>
			<div className="header">
				<div className="inner">
					<a href="/" className="active">
						首页
					</a>
					<a href="/news">新闻</a>
					<a href="/about">关于我们</a>
				</div>
			</div>
			<div className="main">
				<div className="tab">
					<div className="tab-header">
						{tabs.map((tab) => {
							return (
								<button
									key={tab.key}
									className={tab.key === activeTab.key ? "active" : ""}
									onClick={handleTabClick.bind(null, tab)}
								>
									{tab.title}
								</button>
							);
						})}
					</div>
					<div className="tab-content">{activeTab.content}</div>
				</div>
			</div>
		</div>
	);
}
