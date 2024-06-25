export function todayStr() {
	const today = new Date();
	return `${today.getFullYear()}年${
		today.getMonth() + 1
	}月${today.getDay()}日現在時点`;
}
