import type { WeeklyIssue } from "@/lib/weekly";

export function WeeklyList({ issue }: { issue: WeeklyIssue }) {
  return (
    <ul className="grid gap-4 font-kr md:grid-cols-2 xl:grid-cols-3">
      {issue.items.map((it, i) => (
        <li key={i}>
          <a
            href={it.url}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-card group flex h-full flex-col bg-paper-light/60 p-6 transition hover:-translate-y-0.5 hover:bg-white"
          >
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className={`pill py-1 font-medium ${it.category === "취업" ? "border-ink bg-ink text-lemon" : ""}`}>{it.category}</span>
              {it.deadline && <span className="text-ink-muted">마감 {it.deadline}</span>}
            </div>
            <p className="mt-4 text-lg font-medium leading-snug">{it.title}</p>
            {it.summary && <p className="mt-2 text-sm leading-relaxed text-ink-muted">{it.summary}</p>}
            <p className="mt-auto flex items-center justify-between pt-5 text-sm text-ink-soft">
              {it.source}
              <span className="grid h-8 w-8 place-items-center rounded-full border border-ink-line transition group-hover:border-ink group-hover:bg-lemon">↗</span>
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
