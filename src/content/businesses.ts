/**
 * 사업영역별 대표 실적 (회사소개서 6개 영역 · 사업현황 엑셀 기준)
 *  - highlight: 카드 하단에 크게 보이는 자랑 포인트
 *  - image: public/works/ 의 사진
 */
export type Work = { title: string; client: string; date?: string; place?: string; highlight?: string; image?: string };
export type BusinessArea = { id: string; name: string; tagline: string; works: Work[] };

export const businessAreas: BusinessArea[] = [
  {
    id: "employment",
    name: "취업",
    tagline: "교육을 넘어 채용까지, 박람회·캠프·기업설명회로 실제 채용에 연결합니다.",
    works: [
      { title: "국립한국해양대학교(KMOU) 취업박람회", client: "국립한국해양대학교 학생성장지원실", date: "2026.09", place: "도서관 신관 · 실외 필로티" },
      { title: "찾아가는 청끌기업 설명회", client: "부산경제진흥원 청년두드림센터", date: "2026.05~", highlight: "총 10회 진행" },
      { title: "한달빛 연합 취업캠프", client: "대전보건대 · 광주보건대 · 대구보건대", date: "2026.06", place: "진주 라한호텔", highlight: "3개 보건대 연합" },
      { title: "KMOU 면접 마스터 · 면접완전정복 캠프", client: "국립한국해양대학교 학생성장지원실", date: "2025.11 · 2026.09", highlight: "2년 연속 운영" },
    ],
  },
  {
    id: "career",
    name: "진로",
    tagline: "고교생부터 재학생까지, 전공과 진로를 스스로 설계하도록.",
    works: [
      { title: "PKNU 진로취창업 박람회", client: "국립부경대학교 학생성공지원과", date: "2026.05", place: "부경컨벤션홀 · 장보고관" },
      { title: "DSU 학생성공비전페어", client: "동서대학교 대학일자리플러스센터", date: "2026.04", place: "뉴밀레니엄관 · U-IT관" },
      { title: "국립부경대학교 전공박람회", client: "국립부경대학교 자유전공길라잡이센터", date: "2025.11", place: "부경 컨벤션홀" },
      { title: "고교생을 위한 나의 전공 찾기", client: "국립부경대학교 입학관리과", date: "2026.01", place: "부경 컨벤션홀" },
    ],
  },
  {
    id: "startup",
    name: "창업",
    tagline: "생각을 넘어 리얼리티 창업, 기업가 정신이 실현되는 과정.",
    works: [
      { title: "국립부경대학교 창업 경진대회", client: "국립부경대학교 RISE사업단", date: "2025.12", place: "아쿠아팰리스호텔" },
      { title: "학생 창업유망팀 육성 · 창업동아리 지원", client: "부울경 대학 창업동아리", highlight: "창업유망팀 300+" },
      { title: "창업 리얼리티 캠퍼스", client: "대학 창업지원 부서", highlight: "시제품 제작 · 팝업스토어" },
    ],
  },
  {
    id: "event",
    name: "행사",
    tagline: "디자인에서 시설 레이아웃, 진행까지 종합 행사 대행 서비스.",
    works: [
      { title: "BICAF 부산국제캐릭터&애니메이션페스티벌", client: "동서대학교 · 부산경상대학교", date: "2025.10 · 2026.10", place: "부산역 광장", highlight: "2년 연속 · 부산역 광장" },
      { title: "캡스톤 디자인 경진대회", client: "대전보건대학교 현장실습지원센터", date: "2025.11 · 2026.10", highlight: "2년 연속 운영" },
      { title: "동아대학교 진로직업박람회", client: "동아대학교 진로개발센터", date: "2025.11", highlight: "승학·부민 2개 캠퍼스", image: "/works/job-fair.jpg" },
      { title: "제4회 지산관학 성과포럼", client: "경복대학교 혁신지원사업단", date: "2025.11", place: "교내 실내체육관" },
    ],
  },
  {
    id: "global",
    name: "글로벌",
    tagline: "더 넓은 세상으로 나아가는 글로벌 취업 지원.",
    works: [
      { title: "외국인 유학생을 위한 취업역량강화캠프", client: "동의대학교 글로벌혁신센터", date: "2025.12", place: "마우나리조트" },
      { title: "인제대학교 개발협력 위크", client: "인제대학교 산학협력단", date: "2025.11", place: "인당관(본관)" },
      { title: "동서한국어교육원 유학생 체육대회", client: "동서대학교 동서한국어교육원", date: "2026.05", place: "동서대학교 야외 운동장" },
    ],
  },
  {
    id: "job",
    name: "직무",
    tagline: "현직자가 직접 전하는 현장, 현장에서 인정하는 경험.",
    works: [
      { title: "부산교통공사와 함께하는 휴메트로 직무체험 멘토링캠프", client: "부울경 대학 연합", date: "2025.12 · 2026.05 · 2026.10", place: "철도인재기술원(양산)", highlight: "3회 연속 · 9개 대학 연합" },
      { title: "대학연합 현직자 직무 토크콘서트", client: "경성대 · 동명대 · 동서대 · 동아대 · 동의대 · 신라대", date: "2026.06 · 2026.10", highlight: "상·하반기 · 6개 대학 연합", image: "/works/talk-concert.jpg" },
      { title: "KAI와 함께하는 부울경연합 직무체험 멘토링 캠프", client: "부산대 · 국립부경대 · 한국해양대 · 경상국립대 · 동아대", date: "2026.06", place: "KB손해보험 인재니움 사천연수원", highlight: "5개 대학 연합", image: "/works/kai-camp.jpg" },
      { title: "LIG D&A와 함께하는 직무체험 멘토링캠프", client: "국립부경대 · 국립한국해양대 · 동아대 · 부산대", date: "2026.07", place: "한화리조트(경주)", highlight: "4개 대학 연합" },
    ],
  },
];
