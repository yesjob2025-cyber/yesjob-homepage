import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllWeeklyIssues } from "@/lib/weekly";
import { WEEKLY_ENABLED } from "@/lib/sections";
import { WeeklyList } from "@/components/weekly-list";

export const metadata: Metadata = { title: "주간 취업·진로·창업 정보" };

export default function WeeklyArchivePage() {
  if (!WEEKLY_ENABLED) notFound();
  const issues = getAllWeeklyIssues();
  return (
    <section className="section">
      <div className="container-page">
        <span className="dome-label">weekly</span>
        <h1 className="mt-6 font-kr text-3xl font-light tracking-tight sm:text-5xl">주간 취업·진로·창업 정보</h1>
        <p className="mt-3 font-kr text-ink-muted">매주 월요일, 청년에게 필요한 채용·진로·창업·정책 정보를 모아 전합니다.</p>
        <div className="mt-14 space-y-16">
          {issues.map((w) => (
            <div key={w.week} id={w.week}>
              <h2 className="mb-6 border-b border-ink-line pb-3 font-kr text-2xl font-light">
                {w.title} <span className="ml-2 font-sans text-base text-ink-muted">{w.week}</span>
              </h2>
              <WeeklyList issue={w} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
