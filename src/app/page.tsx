import Link from "next/link";
import { company } from "@/content/company";
import { businessAreas } from "@/content/businesses";
import { history } from "@/content/history";
import { organization } from "@/content/organization";
import { programs } from "@/content/programs";
import { getLatestWeeklyIssue } from "@/lib/weekly";
import { SECTIONS } from "@/lib/sections";
import { WeeklyList } from "@/components/weekly-list";
import { Stone } from "@/components/stone";
import { SoftIcon } from "@/components/soft-icon";

const nn = (i: number) => String(i + 1).padStart(2, "0");

/** "참여기업 00개 · 방문 0,000명" → 숫자 부분만 굵게 */
function Emph({ text }: { text: string }) {
  return (
    <>
      {text.split(/([\d,.]+[^\s·/]*|0+[^\s·/]*)/).map((part, i) =>
        /\d/.test(part) ? <b key={i} className="font-bold">{part}</b> : <span key={i}>{part}</span>,
      )}
    </>
  );
}

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
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {company.about.values.map((v) => (
                <li key={v.title} className="outline-card flex flex-col items-center px-7 pb-9 pt-10 text-center font-kr">
                  <SoftIcon name={v.icon} />
                  <span className="pill mt-6 px-6 py-2 text-xl font-normal">{v.title}</span>
                  <p className="mt-5 text-left text-[15px] leading-relaxed text-ink-muted">{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
              채용박람회부터 멘토링, 교육, 창업까지. 예스잡이 기획하고 운영해 온 사업 가운데 영역별 대표 사례 4개씩을 소개합니다.
            </p>
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
                    {!w.image && dark && <Stone variant={i + ai} rotate={-12} className="absolute -right-10 -top-6 w-1/2 opacity-70" />}
                    <div className={`relative ${w.image ? "text-white" : ""}`}>
                      <p className={`text-sm ${dark || w.image ? "text-white/60" : "text-ink-muted"}`}>{w.year} · {w.client}</p>
                      <p className="mt-2 text-xl font-medium sm:text-2xl">{w.title}</p>
                      <p className={`mt-2 max-w-md text-[15px] ${dark || w.image ? "text-white/70" : "text-ink-muted"}`}>{w.summary}</p>
                    </div>
                    <p className={`relative mt-auto pt-10 text-3xl font-extralight tracking-tight sm:text-[2.6rem] ${w.image ? "text-white" : ""}`}>
                      <Emph text={w.result} />
                    </p>
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
                <ul className="space-y-2 font-kr text-lg text-ink-soft md:pt-3">
                  {h.items.map((it) => (
                    <li key={it} className="flex gap-3"><span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />{it}</li>
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
          <div className="mt-16 flex flex-col items-center font-kr">
            <div className="rounded-full bg-ink px-10 py-4 text-center text-xl text-lemon">
              {organization.head.title}
              {organization.head.name && <span className="ml-2 text-base text-white/70">{organization.head.name}</span>}
            </div>
            <div className="relative h-16 w-px bg-ink">
              <div className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center">
                <div className="h-px w-8 bg-ink sm:w-16" />
                <div className="whitespace-nowrap rounded-full border border-dashed border-ink-muted bg-paper px-5 py-2 text-sm">
                  {organization.advisory.title}
                  <span className="ml-2 hidden text-ink-muted sm:inline">{organization.advisory.desc}</span>
                </div>
              </div>
            </div>
            <div className="hidden h-px w-[75%] bg-ink lg:block" />
            <ul className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {organization.departments.map((d) => (
                <li key={d.name} className="flex flex-col items-center">
                  <div className="hidden h-8 w-px bg-ink lg:block" />
                  <div className="outline-card w-full px-6 pb-8 pt-8 text-center">
                    <span className="pill px-6 py-2 text-lg font-normal">{d.name}</span>
                    <ul className="mt-5 space-y-1.5 text-ink-muted">
                      {d.roles.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── PROGRAMS ───────── */}
      <section id="programs" className="section bg-paper-light">
        <div className="container-page">
          <SectionHead en="programs" title="주요 프로그램" />
        </div>
        <ol className="mt-14 border-t border-ink-line font-kr">
          {programs.map((p, i) => (
            <li key={p.name} className="border-b border-ink-line transition hover:bg-lemon/40">
              <div className="container-page grid items-baseline gap-3 py-7 md:grid-cols-[4rem_1fr_1fr]">
                <span className="font-sans text-2xl">{nn(i)}</span>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-2xl font-light sm:text-3xl">{p.name}</span>
                  <span className="pill py-1 text-sm">{p.target}</span>
                </div>
                <div>
                  <p className="leading-relaxed text-ink-soft">{p.desc}</p>
                  <p className="mt-2 text-sm text-ink-muted">{p.tags.map((t) => `#${t}`).join("  ")}</p>
                </div>
              </div>
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
