import type { Resume } from "./type.js";

export default {
	furigana: "タナカ　タロウ",
	kanji: "田中　太朗",
	seinengappi: "1900年10月10日",
	gendar: "男",
	zipcode: "163-0081",
	address: "東京都新宿区西新宿1-1-1",
	tel: "03-0000-1111",
	email: "hogehoge@gmail.com",
	nearestStation: "五反田",
	commuteTime: 30,
	academicBackgrounds: [
		{
			year: 2020,
			month: 4,
			description: "山田大学入学",
		},
		{
			year: 2024,
			month: 3,
			description: "山田大学卒業",
		},
	],
	workHistory: [
		{
			year: 2024,
			month: 4,
			description: "山田カンパニー入社",
		},
	],
	qualifications: [
		{
			year: 2025,
			month: 10,
			description: "山田技術者試験",
		},
	],
} satisfies Resume;
