import { company } from "@/content/company";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-cream-200">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-2xl font-extrabold text-cream-50">함께할 사업을 기다립니다</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream-300">
            채용박람회, 멘토링, 취업·창업 교육 등 청년 일자리 사업의 기획·운영을 문의해 주세요.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${company.email}?subject=${encodeURIComponent("[예스잡 홈페이지] 사업 문의")}`} className="rounded-full bg-brand-300 px-5 py-2.5 text-sm font-bold text-ink hover:bg-brand-200">
              이메일 문의
            </a>
            <a href={`tel:${company.phone.replace(/-/g, "")}`} className="rounded-full border border-cream-300/40 px-5 py-2.5 text-sm font-bold text-cream-50 hover:bg-white/10">
              전화 {company.phone}
            </a>
          </div>
        </div>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
          <dt className="text-cream-300">상호</dt><dd>{company.name}</dd>
          <dt className="text-cream-300">대표</dt><dd>{company.ceo}</dd>
          <dt className="text-cream-300">주소</dt><dd>{company.address}</dd>
          <dt className="text-cream-300">이메일</dt><dd>{company.email}</dd>
          <dt className="text-cream-300">사업자</dt><dd>{company.bizNo}</dd>
        </dl>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-5 text-xs text-cream-300">© {new Date().getFullYear()} {company.nameEn} All rights reserved.</p>
      </div>
    </footer>
  );
}
