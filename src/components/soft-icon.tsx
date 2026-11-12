/** 시안의 흐릿한 흑백 3D 느낌 아이콘 */
export function SoftIcon({ name }: { name: string }) {
  return (
    <div className="relative grid h-28 w-28 place-items-center" aria-hidden>
      <div className="absolute inset-3 rounded-3xl bg-gradient-to-br from-white to-paper-dark shadow-[0_10px_30px_rgba(0,0,0,.12)]" />
      <svg viewBox="0 0 64 64" className="relative h-14 w-14 drop-shadow-[0_4px_6px_rgba(0,0,0,.25)]">
        <defs>
          <linearGradient id="soft-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#555" />
            <stop offset="1" stopColor="#111" />
          </linearGradient>
        </defs>
        {name === "link" && (
          <g fill="none" stroke="url(#soft-g)" strokeWidth="7" strokeLinecap="round">
            <path d="M27 37 L37 27" />
            <path d="M24 30 l-6 6 a8.5 8.5 0 0 0 12 12 l6-6" />
            <path d="M40 34 l6-6 a8.5 8.5 0 0 0 -12 -12 l-6 6" />
          </g>
        )}
        {name === "pin" && (
          <g fill="url(#soft-g)">
            <path d="M32 6c-10 0-18 7.8-18 17.6C14 37 32 58 32 58s18-21 18-34.4C50 13.8 42 6 32 6zm0 25a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
          </g>
        )}
        {name === "chart" && (
          <g fill="url(#soft-g)">
            <rect x="10" y="34" width="11" height="20" rx="3" />
            <rect x="26.5" y="22" width="11" height="32" rx="3" />
            <rect x="43" y="10" width="11" height="44" rx="3" />
          </g>
        )}
      </svg>
    </div>
  );
}
