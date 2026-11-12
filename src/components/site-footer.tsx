import { company } from "@/content/company";

/** 시안 7p(FAQ) 스타일 — 큰 원형 글자 + 초대형 문장 */
export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-ink-line bg-paper pt-24">
      <div className="container-page">
        <div className="flex gap-3 sm:gap-5" aria-hidden>
          {["Y", "E", "S"].map((c) => (
            <span key={c} className="grid h-28 w-24 place-items-center rounded-full border border-ink-line text-6xl font-light sm:h-48 sm:w-40 sm:text-8xl">
              <span className="border-b-2 border-ink-line px-3 leading-tight">{c}</span>
            </span>
          ))}
        </div>
        <p className="mt-8 border-b-2 border-ink-line pb-4 font-kr text-[clamp(2rem,6.4vw,6.5rem)] font-extralight leading-[1.1] tracking-[-0.04em]">
          함께할 사업을 기다립니다.
        </p>

        <div className="grid gap-10 py-12 font-kr md:grid-cols-2">
          <div>
            <p className="max-w-md leading-relaxed text-ink-soft">
              채용박람회, 멘토링, 취업·창업 교육 등 청년 일자리 사업의 기획·운영을 문의해 주세요.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${company.email}?subject=${encodeURIComponent("[예스잡 홈페이지] 사업 문의")}`} className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-lemon hover:bg-ink-soft">
                이메일 문의
              </a>
              <a href={`tel:${company.phone.replace(/-/g, "")}`} className="pill border-ink px-6 py-3 text-sm hover:bg-lemon">
                전화 {company.phone}
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-[5.5rem_1fr] gap-y-2 text-sm text-ink-soft">
            <dt className="text-ink-muted">상호</dt><dd>{company.name}</dd>
            <dt className="text-ink-muted">대표</dt><dd>{company.ceo}</dd>
            <dt className="text-ink-muted">본사</dt><dd>{company.address}</dd>
            <dt className="text-ink-muted">지사</dt><dd>{company.branch.replace("서울지사 · ", "서울 ")}</dd>
            <dt className="text-ink-muted">이메일</dt><dd>{company.email}</dd>
            <dt className="text-ink-muted">사업자번호</dt><dd>{company.bizNo}</dd>
          </dl>
        </div>
      </div>
      <div className="border-t border-ink-line">
        <p className="container-page py-6 text-xs text-ink-muted">© {new Date().getFullYear()} {company.nameEn} All rights reserved.</p>
      </div>
    </footer>
  );
}
