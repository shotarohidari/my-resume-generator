import type { dayRange, monthRange, yearRange } from "./constant.js";

type Enumerable<
	N extends number,
	Acc extends number[] = [],
> = N extends Acc["length"]
	? Acc[number]
	: Enumerable<N, [...Acc, Acc["length"]]>;

//TODO: 型プログラミングで型作れるように
type Year = (typeof yearRange)[number];
type Month = (typeof monthRange)[number];
type Day = (typeof dayRange)[number];

type FullName<
	SurName extends string = string,
	FirstName extends string = string,
> = `${SurName}　${FirstName}`;

type BirthDate<
	Y extends Year = Year,
	M extends Month = Month,
	D extends Day = Day,
> = `${Y}年${M}月${D}日`;

type ZipCode<
	First extends string = string, // Enumerable諦めた
	Second extends string = string, // Enumerable諦めた
> = `${First}-${Second}`; // padding諦めた

type Address = `${string}${Enumerable<10>}-${Enumerable<99>}-${Enumerable<99>}`;

// もうちょっと絞りたい
type Tel = `${string}-${string}-${string}`;

// もうちょっと絞れると思う
type Email<
	Username extends Exclude<string, "@"> = Exclude<string, "@">,
	MailServer extends Exclude<string, "@"> = Exclude<string, "@">,
> = `${Username}@${MailServer}`;

export type BasicInfo = {
	furigana: FullName;
	kanji: FullName;
	seinengappi: BirthDate;
	gendar: "男" | "女";
	zipcode: ZipCode;
	address: Address;
	tel: Tel;
	email: Email;
	nearestStation: string;
	commuteTime: number;
};

export type History = {
	year: Year;
	month: Month;
	description: string;
};
export type Resume = BasicInfo & { academicBackgrounds: History[] } & {
	workHistory: History[];
} & { qualifications: History[] };
