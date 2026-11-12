// 이번 주(월요일 기준) 주간 정보 파일을 만듭니다.  사용법: npm run new-week
import fs from "node:fs";
import path from "node:path";

const now = new Date();
const monday = new Date(now);
monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
const ymd = monday.toISOString().slice(0, 10);
const weekNo = Math.ceil(monday.getDate() / 7);
const file = path.join("src/content/weekly", `${ymd}.json`);

if (fs.existsSync(file)) {
  console.log(`이미 있습니다: ${file}`);
  process.exit(0);
}
const tpl = {
  week: ymd,
  title: `${monday.getMonth() + 1}월 ${weekNo}주차 취업·진로·창업 정보`,
  items: [
    { category: "취업", title: "", source: "", url: "", deadline: "", summary: "" },
    { category: "진로", title: "", source: "", url: "", deadline: "", summary: "" },
    { category: "창업", title: "", source: "", url: "", deadline: "", summary: "" },
    { category: "정책", title: "", source: "", url: "", deadline: "", summary: "" },
  ],
};
fs.writeFileSync(file, JSON.stringify(tpl, null, 2) + "\n");
console.log(`생성됨: ${file}`);
