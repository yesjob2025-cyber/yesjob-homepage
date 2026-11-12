import type { WeeklyIssue } from "@/lib/weekly";

const CAT_STYLE: Record<string, string> = {
  취업: "bg-blue-50 text-blue-800",
  진로: "bg-emerald-50 text-emerald-800",
  창업: "bg-orange-50 text-orange-800",
  정책: "bg-violet-50 text-violet-800",
};

export function WeeklyList({ issue }: { issue: WeeklyIssue }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {issue.items.map((it, i) => (
        <li key={i}>
          <a href={it.url} target="_blank" rel="noopener noreferrer" className="card flex h-full flex-col p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className={`rounded-full px-2.5 py-1 font-bold ${CAT_STYLE[it.category] ?? "bg-cream-200 text-ink-soft"}`}>{it.category}</span>
              {it.deadline && <span className="text-ink-muted">마감 {it.deadline}</span>}
            </div>
            <p className="mt-3 font-bold leading-snug">{it.title}</p>
            {it.summary && <p className="mt-1.5 text-sm text-ink-muted">{it.summary}</p>}
            <p className="mt-auto pt-3 text-xs font-semibold text-ink-soft">{it.source} ↗</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
