import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBottomBar from "@/components/FixedBottomBar";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "홈", path: "/" },
  { name: "데이트·소개팅", path: "/date" },
]);

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";
const PHONE = "0507-1433-0614";

export const metadata: Metadata = {
  title: "건대 데이트 고기집 - 고기석 건대본점 통갈매기살 | 건대 소개팅 추천",
  description:
    "건대입구역 도보 1분, 데이트·소개팅 추천 고기석 건대본점. 통갈매기살 100g 7,000원 시그니처 메뉴와 셀프 그릴 방식으로 함께 굽는 재미. 100% 국내산, 첫 방문 꽃게전골 무료. 10인 룸 활용 시 프라이빗 데이트도 가능.",
  keywords:
    "건대 데이트 고기집, 건대 소개팅 고기집, 건대 분위기 좋은 식당, 건대 커플 고기집, 건대 2인 식당, 건대 데이트 코스",
  openGraph: {
    title: "건대 데이트 고기집 - 고기석 건대본점 통갈매기살",
    description:
      "건대입구역 도보 1분, 함께 구워 먹는 셀프 그릴 데이트. 통갈매기살 100g 7,000원 시그니처와 첫 방문 꽃게전골 무료.",
    type: "website",
    url: "https://bbq.gokiseok.com/date",
    images: [
      {
        url: "https://bbq.gokiseok.com/images/thumb-nail.jpg",
        width: 2400,
        height: 1792,
        alt: "건대 데이트 고기집 통갈매기살 - 고기석 건대본점",
      },
    ],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "건대 데이트 고기집 - 고기석 건대본점 통갈매기살",
    description:
      "건대입구역 도보 1분. 셀프 그릴 데이트, 통갈매기살 100g 7,000원, 첫 방문 꽃게전골 무료.",
    images: ["https://bbq.gokiseok.com/images/thumb-nail.jpg"],
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/date",
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://bbq.gokiseok.com/date#restaurant",
  name: "고기석 건대본점",
  description:
    "건대입구역 도보 1분, 데이트·소개팅 추천 통갈매기살 전문점. 셀프 그릴 방식으로 함께 구워 먹는 캐주얼 분위기.",
  url: "https://bbq.gokiseok.com/date",
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
  geo: { "@type": "GeoCoordinates", latitude: 37.54126, longitude: 127.070687 },
  hasMap: "https://naver.me/5mIWObsv",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:30",
      closes: "21:30",
    },
  ],
  acceptsReservations: "True",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://bbq.gokiseok.com/date#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "건대 데이트 고기집 어디가 좋은가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "고기석 건대본점은 건대입구역 도보 1분 거리의 통갈매기살 전문점입니다. 100g 7,000원 시그니처 메뉴와 셀프 그릴 방식으로 함께 구워 먹는 재미가 있어, 첫 데이트·소개팅 분위기를 자연스럽게 풀어 주는 고기집으로 추천됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "2인 예약도 가능한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, 2인 좌석도 일반석으로 자유롭게 이용 가능합니다. 보다 프라이빗한 데이트를 원하시면 10인석 룸을 사전 문의(0507-1433-0614)로 활용하실 수 있으며, 이 경우 인원·날짜에 따라 안내 드립니다.",
      },
    },
    {
      "@type": "Question",
      name: "1인 예산은 얼마인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "통갈매기살 100g 7,000원 기준으로 2인 식사·음료 포함 1인 약 18,000~22,000원 선이면 충분합니다. 정확한 메뉴 가격은 메뉴 페이지를 확인해 주세요.",
      },
    },
    {
      "@type": "Question",
      name: "분위기는 어떤가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "셀프 그릴 방식으로 직접 구워 먹는 캐주얼한 분위기입니다. 시그니처 통갈매기살을 함께 굽고 술 한잔 곁들이는 자연스러운 흐름으로 첫 데이트·소개팅 어색함을 풀기 좋습니다.",
      },
    },
    {
      "@type": "Question",
      name: "건대입구역에서 얼마나 걸리나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "지하철 2호선·7호선 건대입구역 2번 출구에서 도보 1분 거리입니다. 건대병원 맞은편에 위치해 양쪽 모두 만나기 편한 약속 장소로 적합합니다.",
      },
    },
    {
      "@type": "Question",
      name: "예약은 어떻게 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "2인 일반석은 워크인도 가능하며, 사전 예약을 원하시면 네이버 예약(https://booking.naver.com/booking/6/bizes/1095878) 또는 전화(0507-1433-0614)로 가능합니다. 룸 활용 데이트는 인원·일정에 따라 사전 전화 문의를 권장합니다.",
      },
    },
  ],
};

const SCENARIOS = [
  {
    title: "첫 데이트",
    sub: "가벼운 분위기 · 대화 풀기",
    desc: "셀프 그릴로 함께 굽는 동작이 자연스러운 대화 소재. 어색함이 빠르게 풀립니다.",
  },
  {
    title: "소개팅",
    sub: "안전한 메뉴 선택지",
    desc: "흔하지 않은 통갈매기살 시그니처로 메뉴 고민 없이 안전하게. 셀프 그릴로 손이 자연스럽게 움직입니다.",
  },
  {
    title: "기념일 데이트",
    sub: "10인 룸 프라이빗 활용",
    desc: "사전 문의 시 10인 룸을 2인 프라이빗 자리로 활용 가능. 다른 손님 신경 쓰지 않고 편하게.",
  },
];

const REASONS = [
  { icon: "🥩", title: "시그니처 통갈매기살", desc: "흔하지 않은 메뉴라 자연스러운 대화 소재. 100% 국내산 매일 신선 손질." },
  { icon: "🔥", title: "함께 굽는 셀프 그릴", desc: "직접 구워 먹는 재미. 첫 데이트·소개팅 어색함 풀기 좋음." },
  { icon: "💴", title: "100g 7,000원 합리적", desc: "1인 약 18,000~22,000원 선의 합리적 데이트 비용." },
  { icon: "🎁", title: "첫 방문 꽃게전골 무료", desc: "9,000원 상당 얼큰 꽃게 순두부전골 깜짝 제공. 서프라이즈 효과." },
  { icon: "🚇", title: "건대입구역 도보 1분", desc: "2호선·7호선 환승역 2번 출구 바로 앞. 약속 잡기 편한 위치." },
  { icon: "🪟", title: "10인 룸 프라이빗 옵션", desc: "사전 문의 시 룸 활용으로 둘만의 프라이빗 데이트도 가능." },
];

export default function DatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-20">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Date & Blind Date
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            건대 데이트 고기집 — 고기석 건대본점 통갈매기살
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            건대입구역 도보 1분, 함께 구워 먹는 셀프 그릴 데이트.
            시그니처 통갈매기살(100g 7,000원)로 자연스러운 대화와
            합리적인 데이트 비용을 동시에 챙기는 건대 데이트·소개팅 고기집입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              네이버 예약 →
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold text-sm tracking-wide hover:bg-gold hover:text-bg-base transition-colors"
            >
              📞 {PHONE}
            </a>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-bg-section py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Why It is Hard</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              건대 데이트 식사 장소, 매번 비슷한 곳만 가시나요?
            </h2>
            <ul className="flex flex-col gap-3 text-text-muted text-base leading-relaxed">
              <li>· 너무 격식 차린 곳은 부담</li>
              <li>· 너무 캐주얼한 곳은 성의 없어 보임</li>
              <li>· 흔한 메뉴는 대화가 안 풀림</li>
              <li>· 가격대도 부담스럽지 않아야</li>
              <li>· 양쪽 모두 만나기 편한 접근성</li>
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Why Gokiseok</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              데이트·소개팅에 적합한 이유
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-10 max-w-3xl">
              시그니처 메뉴 · 셀프 그릴 · 합리적 가격 · 깜짝 서비스 · 접근성.
              데이트 자리에서 챙겨야 할 다섯 가지를 한 곳에 담았습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {REASONS.map((r) => (
                <div
                  key={r.title}
                  className="bg-bg-card border border-white/5 p-6 flex flex-col gap-3"
                >
                  <div className="text-3xl">{r.icon}</div>
                  <p className="text-text-primary font-semibold">{r.title}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scenarios */}
        <section className="bg-bg-section py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">By Scenario</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">
              상황별 데이트 시나리오
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SCENARIOS.map((s) => (
                <div
                  key={s.title}
                  className="bg-bg-card border border-white/5 p-6 flex flex-col gap-3"
                >
                  <p className="text-gold text-xs tracking-widest uppercase">{s.sub}</p>
                  <p className="text-xl font-bold text-text-primary">{s.title}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-6">
              * 10인 룸 활용 데이트는 사전 전화 문의(0507-1433-0614)로 일정·인원 확인 후 안내해 드립니다.
            </p>
          </div>
        </section>

        {/* Review highlight */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Why Guests Choose Us</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              데이트 후기에서 자주 언급된 포인트
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-text-muted text-base leading-relaxed max-w-4xl">
              <p>✓ 깔끔한 매장 분위기</p>
              <p>✓ 합리적인 데이트 비용</p>
              <p>✓ 셀프 그릴로 함께 굽는 재미</p>
              <p>✓ 흔하지 않은 통갈매기살 메뉴</p>
              <p>✓ 첫 방문 꽃게전골 서프라이즈</p>
              <p>✓ 건대입구역 도보 1분 약속 편의성</p>
            </div>
            <Link href="/menu" className="inline-block mt-8 text-gold underline text-sm">
              전체 메뉴와 가격 보기 →
            </Link>
          </div>
        </section>

        {/* First visit bonus */}
        <section className="bg-bg-section py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="border border-gold/30 bg-bg-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="text-5xl">🎁</div>
              <div className="flex-1">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">
                  First Visit Bonus
                </p>
                <p className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                  첫 방문 시 얼큰 꽃게 순두부전골 무료 (9,000원 상당)
                </p>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  데이트 마무리에 깜짝 서비스로 좋은 인상을 더할 수 있습니다.
                  통갈매기살과 자연스럽게 이어지는 따뜻한 국물 메뉴.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Access & hours */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Access</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  건대입구역 2번 출구 도보 1분
                </h2>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  서울 광진구 동일로22길 117-13<br />
                  지하철 2호선·7호선 건대입구역 2번 출구 바로 앞 (건대병원 맞은편)
                </p>
                <Link href="/access" className="text-gold underline text-sm">
                  오시는 길 자세히 보기 →
                </Link>
              </div>
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Hours</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">매일 17:30 – 21:30</h2>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  연중무휴 기준 매일 저녁 영업합니다.
                  데이트 시간이 정해지면 미리 예약하시면 좌석 안내가 빠릅니다.
                </p>
                <a href={`tel:${PHONE}`} className="text-gold underline text-sm">
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">FAQ</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">
              건대 데이트 고기집 자주 묻는 질문
            </h2>
            <div className="flex flex-col gap-8">
              {faqSchema.mainEntity.map((qa) => (
                <div key={qa.name} className="border-b border-white/5 pb-8 last:border-b-0">
                  <h3 className="text-text-primary font-semibold text-lg mb-3">{qa.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
                    {qa.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-section py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              건대 데이트, 통갈매기살로 자연스럽게
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8">
              건대입구역 도보 1분, 함께 굽는 셀프 그릴로 어색함 없는 데이트.
              지금 예약하고 자리부터 잡으세요.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
              >
                네이버 예약 →
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold text-sm tracking-wide hover:bg-gold hover:text-bg-base transition-colors"
              >
                📞 데이트 자리 문의
              </a>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/menu" className="text-text-muted hover:text-gold">전체 메뉴</Link>
            <Link href="/access" className="text-text-muted hover:text-gold">오시는 길</Link>
            <Link href="/group-dining" className="text-text-muted hover:text-gold">단체회식</Link>
            <Link href="/faq" className="text-text-muted hover:text-gold">FAQ</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FixedBottomBar />
    </>
  );
}
