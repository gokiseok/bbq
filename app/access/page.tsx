import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBottomBar from "@/components/FixedBottomBar";

const PHONE = "0507-1433-0614";

export const metadata: Metadata = {
  title: "고기석 건대본점 오시는 길 - 건대입구역 2번 출구 도보 1분 | 건대 고기집",
  description:
    "고기석 건대본점은 서울 광진구 동일로22길 117-13, 지하철 2호선·7호선 건대입구역 2번 출구 바로 앞 (도보 1분, 건대병원 맞은편). 매일 17:30~21:30 영업. 통갈매기살 100g 7,000원.",
  keywords:
    "고기석 위치, 건대입구역 고기집, 건대입구역 2번 출구, 건대 고기집 위치, 건대병원 맞은편 고기집",
  openGraph: {
    title: "고기석 건대본점 오시는 길",
    description: "건대입구역 2번 출구 도보 1분. 서울 광진구 동일로22길 117-13.",
    type: "website",
    url: "https://bbq.gokiseok.com/access",
    images: [{ url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "고기석 위치" }],
    locale: "ko_KR",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/access",
    languages: {
      ko: "https://bbq.gokiseok.com/access",
      en: "https://bbq.gokiseok.com/en/access",
      "x-default": "https://bbq.gokiseok.com/access",
    },
  },
};

const placeSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://bbq.gokiseok.com/access#restaurant",
  name: "고기석 건대본점",
  url: "https://bbq.gokiseok.com/",
  telephone: "+82-507-1433-0614",
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
  hasMap: "https://naver.me/5mIWObsv",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:30",
      closes: "21:30",
    },
  ],
};

export default function AccessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <Header />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Access</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            오시는 길 — 건대입구역 2번 출구 도보 1분
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            고기석 건대본점은 지하철 2호선·7호선 건대입구역 2번 출구 바로 앞,
            건대병원 맞은편에 위치합니다. 환승역 도보권에 있어 회식 모임원이
            모이기 가장 편한 입지입니다.
          </p>
        </section>

        {/* 지도 + 정보 */}
        <section className="bg-bg-section py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="w-full aspect-[4/3] overflow-hidden bg-bg-card border border-white/5">
                <iframe
                  src="https://maps.google.com/maps?q=37.541260,127.070687&z=17&output=embed&hl=ko"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title="고기석 건대본점 지도"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">주소</p>
                  <p className="text-text-primary text-base font-medium">
                    서울 광진구 동일로22길 117-13
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    (건대입구역 2번 출구 바로 앞 · 건대병원 맞은편)
                  </p>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">대중교통</p>
                  <ul className="text-text-primary text-sm leading-relaxed flex flex-col gap-1">
                    <li>지하철 2호선 건대입구역 · 2번 출구 도보 1분</li>
                    <li>지하철 7호선 건대입구역 · 2번 출구 도보 1분</li>
                    <li>광역버스·시내버스 건대입구 정류장 도보권</li>
                  </ul>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">영업시간</p>
                  <p className="text-text-primary text-base font-medium">매일 17:30 – 21:30</p>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">전화</p>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-text-primary text-base hover:text-gold transition-colors w-fit"
                  >
                    {PHONE}
                  </a>
                </div>
                <a
                  href="https://naver.me/5mIWObsv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors w-full sm:w-auto"
                >
                  네이버 지도에서 보기 →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 경로 안내 */}
        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">건대입구역에서 걸어오시는 길</h2>
            <ol className="flex flex-col gap-4 text-text-muted text-sm md:text-base leading-relaxed">
              <li>
                <span className="text-gold font-semibold mr-2">1.</span>
                지하철 2호선·7호선 건대입구역 <strong className="text-text-primary">2번 출구</strong>로 나옵니다.
              </li>
              <li>
                <span className="text-gold font-semibold mr-2">2.</span>
                출구 바로 앞 건대병원 맞은편 골목을 살피면 매장 간판이 보입니다.
              </li>
              <li>
                <span className="text-gold font-semibold mr-2">3.</span>
                도보 약 1분, 입구로 들어와 안내데스크로 오시면 자리 안내해 드립니다.
              </li>
            </ol>
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/group-dining" className="text-text-muted hover:text-gold">단체 회식 안내</Link>
            <Link href="/rooms" className="text-text-muted hover:text-gold">단체룸 상세</Link>
            <Link href="/menu" className="text-text-muted hover:text-gold">전체 메뉴</Link>
            <Link href="/reservation" className="text-text-muted hover:text-gold">예약 방법</Link>
            <Link href="/faq" className="text-text-muted hover:text-gold">FAQ</Link>
            <Link href="/#location" className="text-text-muted hover:text-gold">메인 위치 섹션</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FixedBottomBar />
    </>
  );
}
