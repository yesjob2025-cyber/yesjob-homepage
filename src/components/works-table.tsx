"use client";
import { useMemo, useState } from "react";

export type Project = { type: string; category: string; date: string; title: string; org: string; dept: string; place: string };

const LABEL: Record<string, string> = { 직원: "교직원·기관", 특수: "행사·페스티벌" };
const label = (c: string) => LABEL[c] ?? c;

export function WorksTable({ projects }: { projects: Project[] }) {
  const cats = useMemo(() => {
    const m = new Map<string, number>();
    projects.forEach((p) => m.set(p.category, (m.get(p.category) ?? 0) + 1));
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [projects]);
  const [cat, setCat] = useState<string>("");
  const list = cat ? projects.filter((p) => p.category === cat) : projects;

  return (
    <div className="mt-10 font-kr">
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setCat("")} className={`pill ${!cat ? "border-ink bg-ink text-lemon" : "hover:bg-white"}`}>전체 {projects.length}</button>
        {cats.map(([c, n]) => (
          <button key={c} onClick={() => setCat(c)} className={`pill ${cat === c ? "border-ink bg-ink text-lemon" : "hover:bg-white"}`}>
            {label(c)} {n}
          </button>
        ))}
      </div>
      <ol className="mt-8 border-t border-ink-line">
        {list.map((p, i) => (
          <li key={i} className="grid gap-x-6 gap-y-1 border-b border-ink-line py-5 md:grid-cols-[6.5rem_minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <span className="font-sans text-ink-muted">{p.date.replace(/-/g, ".")}</span>
            <span>
              <span className="mr-2 inline-block rounded-full bg-lemon px-2 py-0.5 align-middle text-xs">{label(p.category)}</span>
              <span className="mr-2 inline-block rounded-full border border-ink-line px-2 py-0.5 align-middle text-xs text-ink-muted">{p.type}</span>
              <span className="align-middle text-lg">{p.title}</span>
            </span>
            <span className="text-ink-soft">
              {p.org}
              {p.dept && <span className="block text-sm text-ink-muted">{p.dept}</span>}
            </span>
            <span className="text-sm text-ink-muted">{p.place}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
