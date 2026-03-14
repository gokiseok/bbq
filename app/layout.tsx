import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "고기석 | 통 갈매기살 전문점",
  description:
    "신선함이 맛을 만들고, 손질이 깊이를 더합니다. 건대입구역 인근 갈매기살 전문점 고기석. 첫 주문 시 꽃게 순두부전골 무료 제공.",
  keywords: "고기석, 갈매기살, 건대, 고기집, 단체회식, 예약",
  openGraph: {
    title: "고기석 | 통 갈매기살 전문점",
    description: "건대입구역 인근 갈매기살 전문점. 첫 방문 꽃게 순두부전골 무료.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
