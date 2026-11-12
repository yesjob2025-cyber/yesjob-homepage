import fs from "node:fs";
import path from "node:path";

export type WeeklyItem = {
  category: "취업" | "진로" | "창업" | "정책" | string;
  title: string;
  source: string;
  url: string;
  deadline?: string;
  summary?: string;
};
export type WeeklyIssue = { week: string; title: string; sample?: boolean; items: WeeklyItem[] };

const DIR = path.join(process.cwd(), "src/content/weekly");

/** 최신 주차가 앞에 오도록 전체 주간 정보를 불러옵니다. (빌드 시 읽음) */
export function getAllWeeklyIssues(): WeeklyIssue[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f))
    .sort()
    .reverse()
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as WeeklyIssue)
    .map((w) => ({ ...w, items: w.items.filter((i) => i.title?.trim()) }));
}

export function getLatestWeeklyIssue(): WeeklyIssue | null {
  return getAllWeeklyIssues()[0] ?? null;
}
