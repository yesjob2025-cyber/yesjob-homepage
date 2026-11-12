/**
 * 주요 사업영역 + 영역별 대표 성과 4개씩
 * ⚠️ 예시 데이터입니다. 영역 이름과 사업 내용을 실제로 바꿔 주세요.
 *  - image: public/ 폴더에 사진을 넣고 "/works/파일명.jpg" 처럼 적으면 표시됩니다. (없으면 색상 카드)
 */
export type Work = {
  title: string;
  client: string; // 발주처·협력기관
  year: string;
  summary: string;
  result: string; // 성과 한 줄 (자랑 포인트)
  image?: string;
};

export type BusinessArea = {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  works: Work[];
};

export const businessAreas: BusinessArea[] = [
  {
    id: "jobfair",
    name: "채용박람회 · 잡페스티벌",
    tagline: "기업과 청년이 직접 만나는 현장",
    icon: "🎪",
    works: [
      { title: "OO대학교 잡페스티벌", client: "OO대학교", year: "2026", summary: "기업 부스·현장면접·직무특강 통합 운영", result: "참여기업 00개 · 방문 0,000명" },
      { title: "부울경 연합 채용박람회", client: "OO시", year: "2025", summary: "지역 강소기업 중심 채용박람회 기획·운영", result: "현장채용 00명" },
      { title: "온라인 채용설명회", client: "OO기관", year: "2025", summary: "비대면 기업설명회 및 Q&A 라이브", result: "누적 시청 0,000회" },
      { title: "공공기관 채용설명회", client: "OO공사", year: "2024", summary: "공공기관 직무·전형 안내 설명회", result: "만족도 4.8 / 5.0" },
    ],
  },
  {
    id: "mentoring",
    name: "현직자 멘토링 · 진로",
    tagline: "먼저 간 선배가 길을 알려줍니다",
    icon: "🤝",
    works: [
      { title: "부울경 연합 현직자 온라인 멘토링", client: "부울경 7개 대학", year: "2026", summary: "실시간 Q&A + 릴레이 토크콘서트 45회", result: "멘토 566명 · 질문 0,000건" },
      { title: "직무 토크콘서트", client: "OO대학교", year: "2025", summary: "산업·직무별 현직자 토크콘서트", result: "참여 학생 000명" },
      { title: "1:1 진로 컨설팅", client: "OO대학교", year: "2025", summary: "저학년 대상 진로설계 개별 컨설팅", result: "000명 컨설팅" },
      { title: "선배 멘토링 캠프", client: "OO기관", year: "2024", summary: "1박 2일 직무 멘토링 캠프", result: "재참여 희망 00%" },
    ],
  },
  {
    id: "education",
    name: "취업 교육 · 캠프",
    tagline: "서류부터 면접까지 실전 대비",
    icon: "📚",
    works: [
      { title: "AI 면접 대비 특강", client: "OO대학교", year: "2026", summary: "AI 역량검사·면접 실전 트레이닝", result: "수강생 000명" },
      { title: "자소서 클리닉", client: "OO대학교", year: "2025", summary: "현직 인사담당자 1:1 첨삭", result: "첨삭 000건" },
      { title: "공기업 NCS 집중캠프", client: "OO기관", year: "2025", summary: "NCS 필기·면접 집중 과정", result: "최종합격 00명" },
      { title: "직무 역량 부트캠프", client: "OO시", year: "2024", summary: "산업별 직무 실습 중심 교육", result: "수료율 00%" },
    ],
  },
  {
    id: "startup",
    name: "창업 지원",
    tagline: "아이디어를 사업으로",
    icon: "🚀",
    works: [
      { title: "청년 창업 아이디어 경진대회", client: "OO대학교", year: "2026", summary: "예선·본선·데모데이 운영", result: "참가팀 00팀" },
      { title: "예비창업자 교육", client: "OO센터", year: "2025", summary: "비즈니스모델·사업계획서 교육", result: "정부지원사업 선정 00팀" },
      { title: "창업 멘토링 매칭", client: "OO기관", year: "2025", summary: "선배 창업가 1:1 멘토링", result: "매칭 00건" },
      { title: "로컬 창업 투어", client: "OO시", year: "2024", summary: "지역 창업 공간·기업 탐방", result: "참여 000명" },
    ],
  },
];
