import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/content/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yesjob.kr"),
  title: { default: `${company.name} | 청년 취업·진로·창업 지원`, template: `%s | ${company.name}` },
  description: company.intro,
  openGraph: { title: company.name, description: company.intro, url: "https://www.yesjob.kr", locale: "ko_KR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
