export default () => {
	return new Promise((resolve) => {
		const list: {
			id: number;
			title: string;
		}[] = [];
		for (let i = 1; i < 21; i++) {
			list.push({
				id: i,
				title: "新闻新闻新闻-" + i,
			});
		}

		setTimeout(() => {
			resolve(list);
		}, 100);
	});
};
