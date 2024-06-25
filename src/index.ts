import { writeFile } from "node:fs/promises";
import { chromium } from "playwright";
import { generateResume } from "./generator.js";
import resume from "./secret.config.sample.js";
const browser = await chromium.launch();
const page = await browser.newPage();

const html = await generateResume(resume);

await page.setContent(html);

// scaleをいい感じに調整する必要あり
const pdfBuffer = await page.pdf({
	printBackground: true,
	width: "21cm",
	height: "29.7cm",
	scale: 0.95,
	margin: { top: 10, bottom: 10 },
});

await writeFile("build/履歴書.pdf", pdfBuffer);

await browser.close();
