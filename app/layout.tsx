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
      <body className="min-h-full flex flex-col font-serif">{children}</body>
    </html>
  );
}
