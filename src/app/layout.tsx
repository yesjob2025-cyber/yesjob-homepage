import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SideDots } from "@/components/side-dots";
import { KakaoFloating } from "@/components/kakao-button";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200..700&display=swap" rel="stylesheet" />
        <link rel="preload" href="/fonts/PretendardVariable.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>
        <SiteHeader />
        <SideDots />
        <main>{children}</main>
        <SiteFooter />
        <KakaoFloating />
      </body>
    </html>
  );
}
