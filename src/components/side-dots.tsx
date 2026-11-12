"use client";
import { usePathname } from "next/navigation";
import { SECTIONS } from "@/lib/sections";
import { useActiveSection } from "@/lib/use-active-section";

const IDS = ["top", ...SECTIONS.map((s) => s.id)];

/** 시안 1페이지 우측의 세로 점 내비게이션 */
export function SideDots() {
  const active = useActiveSection(IDS);
  if (usePathname() !== "/") return null;
  return (
    <nav aria-label="섹션 바로가기" className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
      {IDS.map((id) => (
        <a
          key={id}
          href={`/#${id}`}
          aria-label={id}
          className={`h-3 w-3 rounded-full transition ${active === id || (!active && id === "top") ? "bg-ink" : "bg-ink/20 hover:bg-ink/50"}`}
        />
      ))}
    </nav>
  );
}
