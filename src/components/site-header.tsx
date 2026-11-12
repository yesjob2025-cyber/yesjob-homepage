"use client";
import Link from "next/link";
import { useState } from "react";
import { SECTIONS } from "@/lib/sections";
import { useActiveSection } from "@/lib/use-active-section";

const IDS = SECTIONS.map((s) => s.id);

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  return (
    <header className="sticky top-0 z-50 border-b border-ink/80 bg-paper/70 backdrop-blur-md">
      {/* 시안처럼 양 끝이 노랗게 번지는 헤더 */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,244,140,.55),transparent_25%,transparent_75%,rgba(255,244,140,.9))]" />
      <div className="container-page relative flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="shrink-0 text-lg font-normal tracking-tight" onClick={() => setOpen(false)}>
          YESJOB <span className="hidden font-kr text-sm text-ink-muted sm:inline">주식회사 예스잡</span>
        </Link>
        <nav className="hidden items-center gap-1 font-kr text-[15px] lg:flex">
          {SECTIONS.map((s) => (
            <Link
              key={s.id}
              href={`/#${s.id}`}
              className={`border-b-2 px-3 py-1.5 transition ${active === s.id ? "border-ink font-semibold" : "border-transparent hover:border-ink-line"}`}
            >
              {s.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="/#contact" className="rounded-full bg-ink px-5 py-2.5 font-kr text-sm font-medium text-lemon hover:bg-ink-soft">
            사업 문의
          </a>
          <button className="p-2 lg:hidden" aria-label="메뉴 열기" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="block h-px w-6 bg-ink" />
            <span className="mt-2 block h-px w-6 bg-ink" />
            <span className="mt-2 block h-px w-6 bg-ink" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="relative border-t border-ink-line bg-paper lg:hidden">
          <ul className="container-page py-2 font-kr">
            {SECTIONS.map((s, i) => (
              <li key={s.id} className="border-b border-ink-line last:border-0">
                <Link href={`/#${s.id}`} className="flex items-baseline gap-4 py-3.5" onClick={() => setOpen(false)}>
                  <span className="font-sans text-sm text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg">{s.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
