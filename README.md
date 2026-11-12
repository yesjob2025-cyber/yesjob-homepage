# 예스잡 공식 홈페이지 (yesjob.kr)

Next.js 15 + Tailwind CSS 정적 사이트. Vercel 배포 → 카페24 도메인 연결.

## 실행
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## 디자인
시안(옐로우·라이트그레이·블랙, 얇은 Raleway 타이포, 흑백 돌 오브제) 기준.
- 색상/폰트 토큰: `tailwind.config.ts` (paper · lemon · ink)
- 돌 오브제는 SVG(`src/components/stone.tsx`) — 실제 사진으로 바꾸려면 `public/`에 이미지 추가
- 한글 폰트 Pretendard는 `public/fonts/`에 자체 호스팅

## 홈페이지 구성 (순서)
1. 히어로 → 목차 → 회사소개
2. 사업영역별 대표 성과 — 영역마다 4개
3. 주요 연혁
4. 조직도
5. 주요 프로그램
6. 주간 취업·진로·창업 정보 (`/weekly` 에 지난 주차 보관)

## 내용 수정 — 코드 대신 아래 파일만 고치면 됩니다
| 섹션 | 파일 |
|------|------|
| 회사 정보·소개·수치 | `src/content/company.ts` |
| 사업영역·성과(4개씩) | `src/content/businesses.ts` (사진은 `public/works/`에 넣고 `image: "/works/파일.jpg"`) |
| 연혁 | `src/content/history.ts` |
| 조직도 | `src/content/organization.ts` |
| 주요 프로그램 | `src/content/programs.ts` |
| 주간 정보 | `src/content/weekly/YYYY-MM-DD.json` (월요일 날짜) |

> 현재 들어간 문구·수치는 **예시**입니다(OO, 000 표시). 실제 내용으로 교체해 주세요.

## 주간 정보 업데이트
```bash
npm run new-week   # 이번 주 월요일 날짜로 빈 템플릿 생성
```
생성된 JSON에 항목(category: 취업/진로/창업/정책, title, source, url, deadline, summary)을 채워 커밋하면,
Vercel이 자동 재배포하고 홈페이지에는 가장 최신 주차가 표시됩니다.
