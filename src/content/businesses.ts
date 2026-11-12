/**
 * 사업영역별 대표 성과 4개씩 (출처: 사업현황 엑셀)
 *  - highlight: 카드 하단에 크게 보이는 자랑 포인트 (없으면 장소 표시)
 *  - image: public/works/ 에 사진을 넣고 "/works/파일명.jpg" 로 지정
 * 전체 목록은 projects.json → /works 페이지에 자동 표시됩니다.
 */
export type Work = {
  title: string;
  client: string;
  date: string;
  place?: string;
  highlight?: string;
  image?: string;
};

export type BusinessArea = { id: string; name: string; tagline: string; works: Work[] };

export const businessAreas: BusinessArea[] = [
  {
    id: "job",
    name: "직무 · 현직자 멘토링",
    tagline: "기업·현직자와 함께하는 직무체험 캠프와 연합 멘토링. 예스잡이 가장 많이 운영한 분야입니다.",
    works: [
      { title: "부산교통공사와 함께하는 휴메트로 직무체험 멘토링캠프", client: "부울경 대학 연합", date: "2025.12 · 2026.05 · 2026.10", place: "철도인재기술원(양산)", highlight: "3회 연속 · 9개 대학 연합" },
      { title: "지역정주형 부울경 연합 현직자 온라인 멘토링", client: "부울경 대학 연합", date: "2026.07", place: "온라인", highlight: "현직자 멘토 566명" },
      { title: "KAI와 함께하는 부울경연합 직무체험 멘토링 캠프", client: "부산대 · 국립부경대 · 한국해양대 · 경상국립대 · 동아대", date: "2026.06", place: "KB손해보험 인재니움 사천연수원", highlight: "5개 대학 연합" },
      { title: "대학연합 현직자 직무 토크콘서트", client: "경성대 · 동명대 · 동서대 · 동아대 · 동의대 · 신라대", date: "2026.06 · 2026.10", place: "서면 상상마당 · 아바니센트럴부산", highlight: "상·하반기 · 6개 대학 연합" },
    ],
  },
  {
    id: "employment",
    name: "취업 · 채용 연계",
    tagline: "박람회와 캠프, 기업설명회로 교육을 실제 채용까지 연결합니다.",
    works: [
      { title: "2026 국립한국해양대학교(KMOU) 취업박람회", client: "국립한국해양대학교 학생성장지원실", date: "2026.09", place: "도서관 신관 1층 · 실외 필로티" },
      { title: "2026 찾아가는 청끌기업 설명회", client: "부산경제진흥원 청년두드림센터", date: "2026.05~", highlight: "총 10회 진행" },
      { title: "2026 한달빛 연합 취업캠프", client: "대전보건대 · 광주보건대 · 대구보건대", date: "2026.06", place: "진주 라한호텔", highlight: "3개 보건대 연합" },
      { title: "생성형 AI 취업역량 UP 연합 경진대회", client: "부울경 전문대학 연합", date: "2026.07", place: "한화리조트(경주)" },
    ],
  },
  {
    id: "event",
    name: "행사 · 페스티벌",
    tagline: "디자인과 시설 레이아웃부터 현장 진행까지, 종합 행사 대행.",
    works: [
      { title: "BICAF 부산국제캐릭터&애니메이션페스티벌", client: "동서대학교 · 부산경상대학교", date: "2025.10 · 2026.10", place: "부산역 광장", highlight: "2년 연속 · 부산역 광장" },
      { title: "캡스톤 디자인 경진대회", client: "대전보건대학교 현장실습지원센터", date: "2025.11 · 2026.10", highlight: "2년 연속 운영" },
      { title: "2025 동아대학교 진로직업박람회", client: "동아대학교 진로개발센터", date: "2025.11", highlight: "승학·부민 2개 캠퍼스" },
      { title: "2025 국립부경대학교 창업 경진대회", client: "국립부경대학교 RISE사업단", date: "2025.12", place: "아쿠아팰리스호텔" },
    ],
  },
  {
    id: "career",
    name: "진로 · 전공 탐색",
    tagline: "고교생부터 재학생까지, 전공과 진로를 스스로 설계하도록.",
    works: [
      { title: "2026 PKNU 진로취창업 박람회", client: "국립부경대학교 학생성공지원과", date: "2026.05", place: "부경컨벤션홀 · 장보고관" },
      { title: "2026 DSU 학생성공비전페어", client: "동서대학교 대학일자리플러스센터", date: "2026.04", place: "뉴밀레니엄관 · U-IT관" },
      { title: "2025 국립부경대학교 전공박람회", client: "국립부경대학교 자유전공길라잡이센터", date: "2025.11", place: "부경 컨벤션홀" },
      { title: "고교생을 위한 나의 전공 찾기", client: "국립부경대학교 입학관리과", date: "2026.01", place: "부경 컨벤션홀" },
    ],
  },
  {
    id: "staff",
    name: "교직원 · 기관 역량강화",
    tagline: "청년을 지원하는 사람들의 역량까지 함께 키웁니다.",
    works: [
      { title: "진로취업지도 역량강화 캠프", client: "대전보건대학교 취업지원센터", date: "2026.01", place: "전주 라한호텔" },
      { title: "글로컬대학30 HIT 글로컬러닝센터 공유·확산", client: "대전보건대학교 HIT 글로컬러닝센터", date: "2026.01" },
      { title: "청년일자리 강소기업 인사담당자 역량강화 교육", client: "(사)벤처기업협회", date: "2026.05", place: "드리움(역삼동)" },
      { title: "새울 팀 투게더 게이미피케이션", client: "한국수력원자력 새울본부", date: "2026.06", place: "사내 강의장" },
    ],
  },
];
