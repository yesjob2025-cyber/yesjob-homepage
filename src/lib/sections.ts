/** 주간 취업·진로·창업 정보 공개 여부 (false 면 메뉴·목차·홈 섹션·/weekly 페이지 모두 숨김) */
export const WEEKLY_ENABLED = false;

/** 헤더 메뉴 · 우측 점 내비게이션 · 목차가 함께 쓰는 섹션 목록 */
const ALL_SECTIONS = [
  { id: "contents", label: "목차", en: "Contents", sub: "한눈에 보는 예스잡" },
  { id: "about", label: "회사소개", en: "Who we are", sub: "사람 그리고 기업, Total JOB & EDU" },
  { id: "works", label: "사업실적", en: "Selected works", sub: "영역별 대표 성과 · 전체 사업실적" },
  { id: "history", label: "연혁", en: "History", sub: "예스잡이 걸어온 길" },
  { id: "organization", label: "조직도", en: "Our teams", sub: "함께 일하는 조직" },
  { id: "programs", label: "프로그램", en: "Programs", sub: "취업 · 진로 · 창업 · 직무 · 행사 · 글로벌" },
  { id: "weekly", label: "주간정보", en: "Weekly", sub: "매주 업데이트되는 취업·진로·창업 정보" },
] as const;

export const SECTIONS = ALL_SECTIONS.filter((s) => WEEKLY_ENABLED || s.id !== "weekly");
