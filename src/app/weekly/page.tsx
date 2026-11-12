import type { Metadata } from "next";
import { getAllWeeklyIssues } from "@/lib/weekly";
import { WeeklyList } from "@/components/weekly-list";

export const metadata: Metadata = { title: "주간 취업·진로·창업 정보" };

export default function WeeklyArchivePage() {
  const issues = getAllWeeklyIssues();
  return (
    <section className="section">
      <div className="container-page">
        <p className="eyebrow">Weekly</p>
        <h1 className="section-title">주간 취업·진로·창업 정보</h1>
        <p className="mt-2 text-ink-muted">매주 월요일, 청년에게 필요한 채용·진로·창업·정책 정보를 모아 전합니다.</p>
        <div className="mt-12 space-y-16">
          {issues.map((w) => (
            <div key={w.week} id={w.week}>
              <h2 className="mb-5 text-xl font-extrabold">
                {w.title} <span className="ml-2 text-sm font-medium text-ink-muted">{w.week}</span>
              </h2>
              <WeeklyList issue={w} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
