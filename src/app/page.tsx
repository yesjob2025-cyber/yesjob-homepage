import Link from "next/link";
import { company } from "@/content/company";
import { businessAreas } from "@/content/businesses";
import { history } from "@/content/history";
import { organization } from "@/content/organization";
import { programs } from "@/content/programs";
import { getLatestWeeklyIssue } from "@/lib/weekly";
import { WeeklyList } from "@/components/weekly-list";

const CARD_TINTS = ["bg-brand-100", "bg-cream-200", "bg-brand-50", "bg-cream-300"];

export default function HomePage() {
  const weekly = getLatestWeeklyIssue();

  return (
    <>
      {/* ① 회사소개 (히어로) */}
      <section className="relative overflow-hidden bg-cream-100">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-200/60 blur-3xl" />
        <div className="container-page relative py-20 sm:py-28">
          <p className="eyebrow">{company.nameEn}</p>
          <h1 className="mt-4 whitespace-pre-line text-4xl font-black leading-tight sm:text-6xl">{company.slogan}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{company.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#works" className="rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream-50 hover:bg-ink-soft">사업 실적 보기</a>
            <a href="#contact" className="rounded-full border border-ink px-6 py-3 text-sm font-bold hover:bg-white">사업 문의</a>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {company.stats.map((s) => (
              <div key={s.label} className="card p-5">
                <dt className="text-sm text-ink-muted">{s.label}</dt>
                <dd className="mt-1 text-2xl font-extrabold sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title">{company.about.title}</h2>
            {company.about.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-ink-soft">{p}</p>
            ))}
          </div>
          <ul className="grid gap-4">
            {company.about.values.map((v, i) => (
              <li key={v.title} className="card flex items-start gap-4 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-300 font-black">{i + 1}</span>
                <div>
                  <p className="text-lg font-bold">{v.title}</p>
                  <p className="mt-1 text-sm text-ink-muted">{v.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ② 사업영역별 대표 성과 (영역당 4개) */}
      <section id="works" className="section bg-white">
        <div className="container-page">
          <p className="eyebrow">Business</p>
          <h2 className="section-title">사업영역별 대표 성과</h2>
          <nav className="mt-6 flex flex-wrap gap-2">
            {businessAreas.map((a) => (
              <a key={a.id} href={`#area-${a.id}`} className="rounded-full border border-ink-line px-4 py-1.5 text-sm font-semibold hover:bg-cream-100">
                {a.icon} {a.name}
              </a>
            ))}
          </nav>
          <div className="mt-12 space-y-16">
            {businessAreas.map((area) => (
              <div key={area.id} id={`area-${area.id}`}>
                <div className="flex flex-wrap items-end justify-between gap-2 border-b border-ink-line pb-3">
                  <h3 className="text-xl font-extrabold sm:text-2xl"><span aria-hidden>{area.icon}</span> {area.name}</h3>
                  <p className="text-sm text-ink-muted">{area.tagline}</p>
                </div>
                <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {area.works.slice(0, 4).map((w, i) => (
                    <li key={w.title} className="card flex flex-col overflow-hidden">
                      {w.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={w.image} alt={w.title} className="aspect-[4/3] w-full object-cover" />
                      ) : (
                        <div className={`grid aspect-[4/3] place-items-center text-5xl ${CARD_TINTS[i % 4]}`} aria-hidden>{area.icon}</div>
                      )}
                      <div className="flex flex-1 flex-col p-5">
                        <p className="text-xs font-semibold text-ink-muted">{w.year} · {w.client}</p>
                        <p className="mt-1.5 font-bold leading-snug">{w.title}</p>
                        <p className="mt-1.5 text-sm text-ink-muted">{w.summary}</p>
                        <p className="mt-auto pt-4 text-sm font-extrabold text-brand-500">{w.result}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ③ 주요 연혁 */}
      <section id="history" className="section">
        <div className="container-page">
          <p className="eyebrow">History</p>
          <h2 className="section-title">주요 연혁</h2>
          <ol className="mt-10 border-l-2 border-brand-300">
            {history.map((h) => (
              <li key={h.year} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-cream-50 bg-brand-400" />
                <p className="text-2xl font-black">{h.year}</p>
                <ul className="mt-2 space-y-1.5 text-ink-soft">
                  {h.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ④ 조직도 */}
      <section id="organization" className="section bg-white">
        <div className="container-page">
          <p className="eyebrow">Organization</p>
          <h2 className="section-title">조직도</h2>
          <div className="mt-12 flex flex-col items-center">
            <div className="rounded-xl bg-ink px-8 py-4 text-center text-cream-50">
              <p className="text-lg font-extrabold">{organization.head.title}</p>
              {organization.head.name && <p className="text-sm text-cream-300">{organization.head.name}</p>}
            </div>
            <div className="relative flex w-full justify-center">
              <div className="h-10 w-0.5 bg-ink-line" />
              <div className="absolute left-1/2 top-1/2 flex items-center">
                <div className="h-0.5 w-8 bg-ink-line sm:w-16" />
                <div className="rounded-lg border border-dashed border-ink-muted bg-cream-50 px-4 py-2 text-center text-sm">
                  <p className="font-bold">{organization.advisory.title}</p>
                  <p className="hidden text-xs text-ink-muted sm:block">{organization.advisory.desc}</p>
                </div>
              </div>
            </div>
            <div className="h-6 w-0.5 bg-ink-line" />
            <ul className="grid w-full gap-4 border-t-2 border-ink-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {organization.departments.map((d) => (
                <li key={d.name} className="card bg-cream-50 p-5 text-center">
                  <p className="font-extrabold">{d.name}</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-muted">
                    {d.roles.map((r) => <li key={r}>{r}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ⑤ 주요 프로그램 */}
      <section id="programs" className="section">
        <div className="container-page">
          <p className="eyebrow">Programs</p>
          <h2 className="section-title">주요 프로그램</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <li key={p.name} className="card p-6">
                <p className="text-xs font-bold text-brand-500">{p.target}</p>
                <p className="mt-1 text-lg font-extrabold">{p.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <span key={t} className="rounded-full bg-cream-200 px-2.5 py-0.5 text-xs font-semibold text-ink-soft">#{t}</span>)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ⑥ 주간 취업·진로·창업 정보 */}
      <section id="weekly" className="section bg-brand-50">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Weekly</p>
              <h2 className="section-title">이번 주 취업·진로·창업 정보</h2>
              {weekly && (
                <p className="mt-2 text-sm text-ink-muted">
                  {weekly.title} · {weekly.week} 업데이트
                  {weekly.sample && <span className="ml-2 rounded bg-ink px-1.5 py-0.5 text-xs text-cream-50">샘플</span>}
                </p>
              )}
            </div>
            <Link href="/weekly" className="text-sm font-bold underline underline-offset-4">지난 주 정보 보기 →</Link>
          </div>
          <div className="mt-8">
            {weekly ? <WeeklyList issue={weekly} /> : <p className="text-ink-muted">곧 업데이트됩니다.</p>}
          </div>
        </div>
      </section>
    </>
  );
}
