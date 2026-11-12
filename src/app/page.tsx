import Link from "next/link";
import { company } from "@/content/company";
import { businessAreas } from "@/content/businesses";
import { history } from "@/content/history";
import { organization } from "@/content/organization";
import { programAreas } from "@/content/programs";
import projects from "@/content/projects.json";
import { getLatestWeeklyIssue } from "@/lib/weekly";
import { SECTIONS } from "@/lib/sections";
import { WeeklyList } from "@/components/weekly-list";
import { Stone } from "@/components/stone";
import { SoftIcon } from "@/components/soft-icon";

const nn = (i: number) => String(i + 1).padStart(2, "0");

function SectionHead({ en, title, children }: { en: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span className="dome-label">{en.toLowerCase()}</span>
        <h2 className="mt-6 font-kr text-3xl font-light tracking-tight sm:text-5xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function HomePage() {
  const weekly = getLatestWeeklyIssue();
  const { hero } = company;

  return (
    <>
      {/* ───────── HERO (시안 1p) ───────── */}
      <section id="top" className="relative -mt-[73px] overflow-hidden bg-[linear-gradient(180deg,#FFF48C_0%,#FFF48C_55%,#C9C9C4_100%)] pt-[73px]">
        <div className="container-page relative flex min-h-[calc(100svh-73px)] flex-col">
          <p className="pt-6 font-kr text-sm sm:text-base">{hero.kicker}</p>

          {/* 가운데 오브제: 돌 + 스크린 + 돌 */}
          <div className="relative mx-auto mt-2 flex w-full max-w-[min(640px,88vh)] flex-1 flex-col items-center justify-center">
            <Stone variant={0} rotate={-6} className="relative z-10 -mb-8 w-[46%] sm:-mb-10" />
            <div className="relative z-20 w-full">
              <div className="aspect-[16/10] rounded-[14px] border-[6px] border-[#2a2a2a] bg-black p-[3%] shadow-2xl">
                <div className="relative h-full overflow-hidden rounded-md bg-[linear-gradient(160deg,#000_20%,#5a5a5a_45%,#111_60%,#000_80%)]">
                  <dl className="absolute inset-0 grid grid-cols-2 content-center gap-x-6 gap-y-4 p-[7%] font-kr text-white sm:gap-y-8">
                    {company.stats.map((s) => (
                      <div key={s.label}>
                        <dt className="text-[10px] text-white/60 sm:text-sm">{s.label}</dt>
                        <dd className="font-sans text-xl font-extralight sm:text-4xl">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="mx-[-6%] h-3 rounded-b-xl bg-gradient-to-b from-[#9a9a9a] to-[#5d5d5d] sm:h-4" />
            </div>
            <Stone variant={2} rotate={8} className="absolute -bottom-6 left-1/2 z-0 w-[70%] -translate-x-1/2 opacity-60 [mask-image:linear-gradient(180deg,#000,transparent)]" />
          </div>

          {/* 큰 타이포: YES (JOB) 청년의 내일을 잇다 */}
          <h1 className="relative z-30 flex flex-wrap items-end gap-x-[0.18em] pb-8 pt-4 text-[clamp(3rem,min(10.5vw,17vh),10.5rem)] font-extralight leading-[0.95] tracking-[-0.03em]">
            <span>{hero.lead}</span>
            <span className="rounded-t-full bg-ink px-[0.3em] pt-[0.18em] text-lemon">{hero.dome}</span>
            <span className="font-kr text-[0.62em] font-extralight tracking-[-0.04em]">{hero.tail}</span>
          </h1>
        </div>
      </section>

      {/* ───────── CONTENTS (시안 2p) ───────── */}
      <section id="contents" className="pb-10 pt-20">
        <div className="container-page">
          <span className="dome-label">contents</span>
        </div>
        <ol className="mt-16 border-t border-ink-line">
          {SECTIONS.slice(1).map((s, i) => (
            <li key={s.id} className="border-b border-ink-line">
              <a href={`#${s.id}`} className="container-page group grid grid-cols-[3rem_1fr] items-center py-5 transition hover:bg-lemon/40 md:grid-cols-2">
                <span className="text-2xl">{nn(i)}</span>
                <span className="flex flex-wrap items-start gap-x-5 gap-y-1">
                  <span className="font-kr text-2xl font-light sm:text-4xl">{s.label}</span>
                  <span className="pt-1 font-kr text-sm text-ink-muted sm:text-base">{s.sub}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────── WHO WE ARE (시안 3p) ───────── */}
      <section id="about" className="section">
        <div className="container-page">
          <div className="flex flex-col items-start gap-3 font-kr">
            {company.about.lines.map((l) => (
              <span key={l} className="rule-line text-4xl font-light tracking-tight sm:text-6xl">{l}</span>
            ))}
          </div>
          <div className="mt-16 lg:ml-[26%]">
            <div className="max-w-2xl space-y-3 font-kr text-lg leading-relaxed text-ink-soft">
              {company.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <p className="mt-12 font-kr text-sm font-medium text-ink-muted">예스잡의 장점 ① 사람 그리고 기업</p>
            <ul className="mt-4 grid gap-5 md:grid-cols-3">
              {company.about.strengths.map((v) => (
                <li key={v.title} className="outline-card flex flex-col items-center px-7 pb-9 pt-10 font-kr">
                  <SoftIcon name={v.icon} />
                  <span className="pill mt-6 px-6 py-2 text-xl font-normal">{v.title}</span>
                  <ul className="mt-6 w-full space-y-2 text-[15px] leading-relaxed text-ink-muted">
                    {v.points.map((pt) => (
                      <li key={pt} className="flex gap-2"><span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-ink-muted" />{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 예스잡의 장점 ② Total JOB & EDU */}
        <div className="container-page mt-20">
          <p className="font-kr text-sm font-medium text-ink-muted lg:ml-[26%]">예스잡의 장점 ② Total JOB &amp; EDU</p>
        </div>
        <ol className="mt-4 border-t border-ink-line font-kr">
          {company.about.total.map((t, i) => (
            <li key={t.title} className="border-b border-ink-line">
              <div className="container-page grid gap-4 py-8 lg:grid-cols-[26%_1fr_1fr]">
                <span className="font-sans text-2xl">{nn(i)}</span>
                <span className="text-2xl font-light sm:text-3xl">{t.title}</span>
                <ul className="space-y-1.5 text-ink-soft">
                  {t.points.map((pt) => <li key={pt}>· {pt}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────── SELECTED WORKS (시안 4p) ───────── */}
      <div id="works">
      <section className="relative overflow-hidden bg-[linear-gradient(90deg,#DADADA,#EEEEEE)]">
        <div className="container-page grid min-h-[720px] items-center gap-10 py-20 lg:grid-cols-[1fr_minmax(0,420px)_1fr]">
          <div className="flex h-full flex-col justify-between gap-10 font-kr">
            <div className="flex flex-col items-start gap-3 pt-10 lg:pt-40">
              <span className="rule-line text-4xl font-light tracking-tight sm:text-5xl">사업영역별</span>
              <span className="rule-line text-4xl font-light tracking-tight sm:text-5xl">대표 성과</span>
            </div>
            <p className="max-w-sm leading-relaxed text-ink-soft">
              2025년 10월 이후 대학·공공기관·기업과 함께 {projects.length}건의 사업을 수행·예정하고 있습니다. 영역별 대표 사례 4개씩을 소개합니다.
            </p>
            <Link href="/works" className="pill w-fit border-ink hover:bg-ink hover:text-lemon">전체 사업실적 {projects.length}건 보기 →</Link>
          </div>
          <div className="relative hidden h-full flex-col items-center justify-center lg:flex" aria-hidden>
            {[1, 3, 2, 0].map((v, i) => (
              <Stone key={i} variant={v} rotate={[-14, 10, -4, 16][i]} className={`w-[92%] ${i ? "-mt-12" : ""}`} />
            ))}
          </div>
          <ol className="space-y-5 font-kr">
            {businessAreas.map((a, i) => (
              <li key={a.id}>
                <a href={`#area-${a.id}`} className="group grid grid-cols-[3.5rem_1fr] items-baseline text-xl sm:text-2xl">
                  <span className="font-sans">{nn(i)}</span>
                  <span className="border-b border-transparent transition group-hover:border-ink">{a.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── 영역별 4개 (시안 5·6p 'Project 0N') ───────── */}
      {businessAreas.map((area, ai) => (
        <section key={area.id} id={`area-${area.id}`} className="py-20 sm:py-24">
          <div className="container-page">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="rule-line text-5xl font-light tracking-tight sm:text-6xl">Business {nn(ai)}</h3>
                <div className="mt-4"><span className="pill bg-paper-light font-kr text-lg font-normal">{area.name}</span></div>
              </div>
              <p className="font-kr text-lg leading-relaxed text-ink-soft lg:pt-2">{area.tagline}</p>
            </div>

            <ul className="mt-12 grid gap-5 font-kr md:grid-cols-12">
              {area.works.slice(0, 4).map((w, i) => {
                const dark = i === 0 || i === 3;
                const span = [7, 5, 5, 7][i];
                return (
                  <li
                    key={w.title}
                    className={`relative flex min-h-[300px] flex-col overflow-hidden rounded-[28px] p-7 sm:p-9 ${
                      span === 7 ? "md:col-span-7" : "md:col-span-5"
                    } ${dark ? "bg-ink text-white" : "border border-ink-line bg-paper-light"}`}
                  >
                    {w.image && (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={w.image} alt="" className="absolute inset-0 h-full w-full object-cover grayscale" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
                      </>
                    )}
                    {!w.image && dark && <Stone variant={i + ai} rotate={-12} className="absolute -right-12 -top-10 w-[38%] opacity-50" />}
                    <div className={`relative ${w.image ? "text-white" : ""}`}>
                      <p className={`text-sm ${dark || w.image ? "text-white/60" : "text-ink-muted"}`}>{w.date}</p>
                      <p className="mt-2 max-w-lg text-xl font-medium leading-snug sm:text-2xl">{w.title}</p>
                      <p className={`mt-2 max-w-md text-[15px] ${dark || w.image ? "text-white/70" : "text-ink-muted"}`}>{w.client}</p>
                    </div>
                    <div className="relative mt-auto pt-10">
                      {w.highlight ? (
                        <p className={`text-3xl font-light tracking-tight sm:text-4xl ${w.image ? "text-white" : ""}`}>{w.highlight}</p>
                      ) : null}
                      {w.place && (
                        <p className={`mt-2 text-sm ${dark || w.image ? "text-white/60" : "text-ink-muted"}`}>📍 {w.place}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}
      </div>

      {/* ───────── HISTORY ───────── */}
      <section id="history" className="section bg-paper-light">
        <div className="container-page">
          <SectionHead en="history" title="주요 연혁" />
        </div>
        <ol className="mt-14 border-t border-ink-line">
          {history.map((h) => (
            <li key={h.year} className="border-b border-ink-line">
              <div className="container-page grid gap-3 py-8 md:grid-cols-2">
                <span className="text-5xl font-extralight tracking-tight sm:text-6xl">{h.year}</span>
                <ul className="space-y-2.5 font-kr text-lg text-ink-soft md:pt-3">
                  {h.items.map((it, j) => (
                    <li key={j} className="grid grid-cols-[2.5rem_1fr] gap-2"><span className="font-sans text-ink-muted">{it.month}</span>{it.text}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────── ORGANIZATION ───────── */}
      <section id="organization" className="section">
        <div className="container-page">
          <SectionHead en="our teams" title="조직도" />
          <div className="mt-14 grid gap-10 font-kr lg:grid-cols-[300px_1fr]">
            {/* 대표 소개 */}
            <div className="outline-card flex flex-col justify-between gap-8 bg-paper-light p-8">
              <div>
                <p className="text-sm text-ink-muted">CEO</p>
                <p className="mt-1 text-3xl font-light">{organization.ceo.name} <span className="text-lg text-ink-muted">{organization.ceo.title}</span></p>
              </div>
              <ul className="space-y-1.5 text-[15px] text-ink-soft">
                {organization.ceo.career.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            {/* 조직 트리 */}
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-ink px-10 py-4 text-xl text-lemon">대표이사</div>
              <div className="relative h-14 w-px bg-ink">
                <div className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center">
                  <div className="h-px w-8 bg-ink sm:w-14" />
                  <div className="whitespace-nowrap rounded-full bg-lemon px-5 py-2 text-sm font-medium">{organization.support}</div>
                </div>
              </div>
              <div className="hidden h-px w-1/2 bg-ink md:block" />
              <div className="grid w-full gap-8 md:grid-cols-2">
                {organization.divisions.map((d) => (
                  <div key={d.name} className="flex flex-col items-center">
                    <div className="hidden h-6 w-px bg-ink md:block" />
                    <div className="pill border-ink px-8 py-2.5 text-lg font-medium">{d.name}</div>
                    <div className="h-6 w-px bg-ink" />
                    <ul className="grid w-full gap-3 border-t border-ink pt-4 sm:grid-cols-3">
                      {d.teams.map((t) => (
                        <li key={t.name} className="outline-card px-4 pb-6 pt-5 text-center">
                          <p className="font-medium">{t.name}</p>
                          <ul className="mt-3 space-y-1 text-sm text-ink-muted">
                            {t.roles.map((r) => <li key={r}>{r}</li>)}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PROGRAMS ───────── */}
      <section id="programs" className="section bg-paper-light">
        <div className="container-page">
          <SectionHead en="programs" title="주요 프로그램">
            <p className="max-w-md font-kr text-ink-muted">성장하는 커리어, 도전하는 비즈니스, 함께하는 이벤트. 6개 영역의 프로그램을 기관 맞춤형으로 설계·운영합니다.</p>
          </SectionHead>
        </div>
        <ol className="mt-14 border-t border-ink-line font-kr">
          {programAreas.map((a, i) => (
            <li key={a.name} className="border-b border-ink-line">
              <details className="group">
                <summary className="container-page grid cursor-pointer list-none items-baseline gap-3 py-8 transition hover:bg-lemon/40 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.3fr)_2rem] [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-2xl">{nn(i)}</span>
                  <span>
                    <span className="text-3xl font-light sm:text-4xl">{a.name}</span>
                    <span className="ml-3 font-sans text-base text-ink-muted">{a.en}</span>
                  </span>
                  <span>
                    <span className="block text-lg text-ink-soft">{a.tagline}</span>
                    <span className="mt-3 flex flex-wrap gap-1.5">
                      {a.summary.map((t) => <span key={t} className="pill py-1 text-sm">{t}</span>)}
                    </span>
                  </span>
                  <span className="hidden text-2xl transition group-open:rotate-45 md:block">+</span>
                </summary>
                <div className="container-page pb-10">
                  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:ml-16">
                    {a.programs.map((p) => (
                      <li key={p.name} className="outline-card bg-paper p-6">
                        <p className="text-lg font-medium">{p.name}</p>
                        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-ink-muted">
                          {p.points.map((pt) => <li key={pt}>· {pt}</li>)}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </section>

      {/* ───────── WEEKLY ───────── */}
      <section id="weekly" className="section">
        <div className="container-page">
          <SectionHead en="weekly" title="이번 주 취업·진로·창업 정보">
            <div className="flex flex-col items-start gap-3 font-kr lg:items-end">
              {weekly && (
                <p className="text-ink-muted">
                  {weekly.title} · {weekly.week} 업데이트
                  {weekly.sample && <span className="ml-2 rounded-full bg-ink px-2 py-0.5 text-xs text-lemon">샘플</span>}
                </p>
              )}
              <Link href="/weekly" className="pill border-ink hover:bg-ink hover:text-lemon">지난 주 정보 전체보기 →</Link>
            </div>
          </SectionHead>
          <div className="mt-12">
            {weekly ? <WeeklyList issue={weekly} /> : <p className="font-kr text-ink-muted">곧 업데이트됩니다.</p>}
          </div>
        </div>
      </section>
    </>
  );
}
