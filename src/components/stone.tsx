/**
 * 시안의 흑백 돌 오브제를 SVG 로 만든 장식 요소.
 * 실제 사진을 쓰고 싶으면 public/ 에 이미지를 넣고 <img> 로 바꾸면 됩니다.
 */
const SHAPES = [
  "M30 70 L80 25 L170 10 L250 35 L290 90 L270 150 L190 185 L90 180 L25 140 Z",
  "M20 90 L60 30 L140 15 L230 20 L285 70 L280 130 L220 175 L120 190 L45 160 Z",
  "M15 110 L50 45 L120 20 L210 30 L275 60 L290 120 L240 170 L140 185 L60 170 Z",
  "M40 60 L110 20 L200 25 L270 55 L285 120 L230 180 L130 190 L50 160 L20 110 Z",
];

export function Stone({ variant = 0, className = "", rotate = 0 }: { variant?: number; className?: string; rotate?: number }) {
  const v = variant % SHAPES.length;
  const id = `stone-${v}`;
  return (
    <svg viewBox="0 0 300 200" className={className} style={{ transform: `rotate(${rotate}deg)` }} aria-hidden>
      <defs>
        <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency={0.85 + v * 0.05} numOctaves={4} seed={v * 7 + 3} />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.55" />
          </feComponentTransfer>
        </filter>
        <linearGradient id={`${id}-light`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".35" />
          <stop offset=".45" stopColor="#fff" stopOpacity=".04" />
          <stop offset="1" stopColor="#000" stopOpacity=".5" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <path d={SHAPES[v]} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="300" height="200" fill="#1d1d1d" />
        <rect width="300" height="200" filter={`url(#${id}-grain)`} />
        <rect width="300" height="200" fill={`url(#${id}-light)`} />
        {/* 단면 느낌의 각진 면 */}
        <path d="M80 25 L150 110 L90 180" stroke="#000" strokeOpacity=".35" strokeWidth="6" fill="none" />
        <path d="M170 10 L150 110 L270 150" stroke="#fff" strokeOpacity=".08" strokeWidth="4" fill="none" />
      </g>
    </svg>
  );
}
