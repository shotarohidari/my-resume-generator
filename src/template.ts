import type { BasicInfo, History } from "./type.js";

export function basicInfo(info: BasicInfo) {
	return `<section class="basic-info">
                      <h2>基本情報</h2>
                      <table>
                          <tr>
                              <th>フリガナ</th>
                              <td>${info.furigana}</td>
                          </tr>
                          <tr>
                              <th>氏名</th>
                              <td>${info.kanji}</td>
                          </tr>
                          <tr>
                              <th>生年月日</th>
                              <td>${info.seinengappi}</td>
                          </tr>
                          <tr>
                              <th>性別</th>
                              <td>${info.gendar}</td>
                          </tr>
                          <tr>
                              <th>郵便番号</th>
                              <td>${info.zipcode}</td>
                          </tr>
                          <tr>
                              <th>住所</th>
                              <td>${info.address}</td>
                          </tr>
                          <tr>
                              <th>電話番号</th>
                              <td>
                                  <tel>${info.tel}</tel>
                              </td>
                          </tr>
                          <tr>
                              <th>メールアドレス</th>
                              <td>${info.email}</td>
                          </tr>
                          <tr>
                              <th>最寄り駅</th>
                              <td>${info.nearestStation}</td>
                          </tr>
                          <tr>
                              <th>通勤時間</th>
                              <td>${info.commuteTime}分</td>
                          </tr>
                      </table>
                  </section>`;
}

export function academicBackgrounds(backgrounds: History[]) {
	return `<section class="academic-background">
                      <h2>学歴</h2>
                      <table>
                          <thead>
                              <tr>
                                  <th>年</th>
                                  <th>月</th>
                                  <th>学歴</th>
                              </tr>
                          </thead>
                          <tbody>
                              ${backgrounds
																.map((background) => {
																	return `<tr><td>${background.year}</td><td>${background.month}</td><td>${background.description}</td></tr>`;
																})
																.join("\n")}
                          </tbody>
                      </table>
                  </section>`;
}

export function workHistory(history: History[]) {
	return `<section class="work-history">
                      <h2>職歴</h2>
                      <table>
                          <thead>
                              <tr>
                                  <th>年</th>
                                  <th>月</th>
                                  <th>職歴</th>
                              </tr>
                          </thead>
                          <tbody>
                              ${history
																.map((his) => {
																	return `<tr><td>${his.year}</td><td>${his.month}</td><td>${his.description}</td></tr>`;
																})
																.join("\n")}
                          </tbody>
                      </table>
                  </section>`;
}

export function qualifications(history: History[]) {
	return `<section class="qualification-history">
                      <h2>保有資格</h2>
                      <table>
                          <thead>
                              <tr>
                                  <th>年</th>
                                  <th>月</th>
                                  <th>資格</th>
                              </tr>
                          </thead>
                          <tbody>
                              ${history
																.map((his) => {
																	return `<tr><td>${his.year}</td><td>${his.month}</td><td>${his.description}</td></tr>`;
																})
																.join("\n")}
                          </tbody>
                      </table>
                  </section>`;
}
