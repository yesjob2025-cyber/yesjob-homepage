"use client";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/#about", label: "회사소개" },
  { href: "/#works", label: "사업실적" },
  { href: "/#history", label: "연혁" },
  { href: "/#organization", label: "조직도" },
  { href: "/#programs", label: "프로그램" },
  { href: "/#weekly", label: "주간 정보" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-cream-50/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-sm font-black text-brand-300">Y</span>
          <span className="text-lg font-extrabold tracking-tight">YESJOB</span>
        </Link>
        <nav className="hidden gap-7 text-sm font-semibold text-ink-soft md:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-ink">{n.label}</Link>
          ))}
        </nav>
        <a href="/#contact" className="hidden rounded-full bg-ink px-4 py-2 text-sm font-bold text-cream-50 hover:bg-ink-soft md:inline-block">
          사업 문의
        </a>
        <button className="p-2 md:hidden" aria-label="메뉴 열기" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </div>
      {open && (
        <nav className="border-t border-ink-line bg-cream-50 md:hidden">
          <div className="container-page flex flex-col py-2">
            {[...NAV, { href: "/#contact", label: "사업 문의" }].map((n) => (
              <Link key={n.href} href={n.href} className="py-3 font-semibold" onClick={() => setOpen(false)}>{n.label}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
