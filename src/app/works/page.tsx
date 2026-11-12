import type { Metadata } from "next";
import projects from "@/content/projects.json";
import { WorksTable, type Project } from "@/components/works-table";

export const metadata: Metadata = { title: "전체 사업실적" };

export default function WorksPage() {
  return (
    <section className="section">
      <div className="container-page">
        <span className="dome-label">selected works</span>
        <h1 className="mt-6 font-kr text-3xl font-light tracking-tight sm:text-5xl">전체 사업실적</h1>
        <p className="mt-3 font-kr text-ink-muted">2025년 10월 이후 수행·예정 사업 {projects.length}건 (최신순)</p>
        <WorksTable projects={projects as Project[]} />
      </div>
    </section>
  );
}
