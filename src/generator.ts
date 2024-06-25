import { readFile } from "node:fs/promises";
import {
	academicBackgrounds,
	basicInfo,
	qualifications,
	workHistory,
} from "./template.js";
import type { Resume } from "./type.js";
import { todayStr } from "./util.js";

export async function generateResume(resume: Resume) {
	return `<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>履歴書</title>
    <style>
    ${await readFile("./src/styles/resume.css", "utf-8")}
    </style>
</head>

<body>
    <div id="output">
        <div class="center-container">
            <div class="stack">
                <h1>履歴書</h1>
                <div>${todayStr()}</div>
                ${basicInfo(resume)}
                ${academicBackgrounds(resume.academicBackgrounds)}
                ${workHistory(resume.workHistory)}
                ${qualifications(resume.qualifications)}
            </div>
        </div>
    </div>
</body>

</html>`;
}
