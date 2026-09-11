import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kunny — 교실과 코드 사이",
  description:
    "국제교류수업을 만드는 초등교사이자, 그 경험을 게임으로 옮기는 1인 개발자 Kunny의 프로젝트 모음.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
