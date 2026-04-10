import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "건대입구 고기집 고기석 건대본점 - 통갈매기살 전문 | 건대 회식 추천",
  description:
    "서울 건대입구역 도보 5분, 통갈매기살 전문점 고기석 건대본점. 건대 회식·단체모임·청첩장모임 추천. 갈매기살 100g 7,000원.",
  keywords: "건대고기집, 건대회식, 건대입구고기집, 건대갈매기살, 건대단체식당, 고기석, 통갈매기살",
  openGraph: {
    title: "고기석 건대본점 - 건대입구 통갈매기살 전문점",
    description: "건대 회식하면 고기석. 통갈매기살 100g 7,000원.",
    type: "website",
    url: "https://bbq.gokiseok.com",
    images: [{ url: "https://bbq.gokiseok.com/og-image.jpg" }],
    locale: "ko_KR",
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "고기석 건대본점",
  alternateName: ["Gokiseok Konkuk Main", "고기석"],
  description: "서울 건대입구역 인근 통갈매기살 전문 고기집. 회식·단체모임 특화.",
  image: ["https://bbq.gokiseok.com/og-image.jpg"],
  url: "https://bbq.gokiseok.com",
  telephone: "+82-507-1433-0614",
  priceRange: "₩₩",
  servesCuisine: ["Korean BBQ", "한식", "고기구이"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "동일로22길 117-13",
    addressLocality: "광진구",
    addressRegion: "서울특별시",
    postalCode: "05017",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.54126,
    longitude: 127.070687,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "17:30",
      closes: "21:30",
    },
  ],
  menu: "https://bbq.gokiseok.com/#menu",
  acceptsReservations: "True",
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: {
      "@type": "MenuSection",
      name: "대표 메뉴",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "통갈매기살",
          description: "고기석 시그니처 메뉴, 100g 7,000원",
          offers: { "@type": "Offer", price: "7000", priceCurrency: "KRW" },
        },
        {
          "@type": "MenuItem",
          name: "가브리살",
          offers: { "@type": "Offer", price: "10000", priceCurrency: "KRW" },
        },
        {
          "@type": "MenuItem",
          name: "목살",
          offers: { "@type": "Offer", price: "10000", priceCurrency: "KRW" },
        },
      ],
    },
  },
  sameAs: [
    "https://map.naver.com/p/search/고기석%20건대본점",
    "https://www.instagram.com/gokiseok/",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "건대입구에서 회식하기 좋은 고기집은 어디인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "고기석 건대본점은 건대입구역 도보 5분 거리에 위치한 통갈매기살 전문점으로, 단체석을 갖추고 있어 건대 회식 장소로 추천됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "건대에서 갈매기살 맛집은 어디인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "고기석 건대본점은 통갈매기살을 시그니처 메뉴로 하는 전문점입니다. 100g 7,000원으로 건대 상권에서 가장 가성비 좋은 갈매기살을 제공합니다.",
      },
    },
    {
      "@type": "Question",
      name: "고기석 건대본점은 어떤 메뉴가 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "대표 메뉴는 통갈매기살(100g 7,000원)이며, 가브리살·목살도 함께 제공합니다. 모든 고기는 국내산이며, 매장에서 직접 손질합니다.",
      },
    },
    {
      "@type": "Question",
      name: "고기석 건대본점은 예약이 가능한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, 단체 예약 가능합니다. 10인 이상 단체석은 전화 예약을 권장합니다.",
      },
    },
    {
      "@type": "Question",
      name: "고기석 건대본점 위치는 어디인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "서울 광진구 건대입구역 인근, 지하철 2호선·7호선 건대입구역에서 도보 1분 거리입니다.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
