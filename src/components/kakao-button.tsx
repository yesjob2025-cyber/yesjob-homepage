import { company } from "@/content/company";

function Bubble({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.84 5.31 4.6 6.73l-.93 3.4a.4.4 0 0 0 .6.45l4.05-2.68c.55.07 1.11.1 1.68.1 5.52 0 10-3.58 10-8S17.52 3 12 3z" />
    </svg>
  );
}

/** 화면 오른쪽 아래에 떠 있는 카카오톡 문의 버튼 */
export function KakaoFloating() {
  if (!company.kakao) return null;
  return (
    <a
      href={company.kakao}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡으로 문의하기"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#FEE500] px-5 py-3.5 font-kr text-sm font-semibold text-[#191919] shadow-[0_8px_24px_rgba(0,0,0,.18)] transition hover:-translate-y-0.5 xl:right-12"
    >
      <Bubble className="h-5 w-5" />
      <span className="hidden sm:inline">카카오톡 문의</span>
    </a>
  );
}

/** 문의 영역에 들어가는 카카오톡 버튼 */
export function KakaoButton() {
  if (!company.kakao) return null;
  return (
    <a
      href={company.kakao}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-6 py-3 text-sm font-semibold text-[#191919] hover:brightness-95"
    >
      <Bubble className="h-4 w-4" /> 카카오톡 문의
    </a>
  );
}
