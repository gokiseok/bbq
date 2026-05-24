import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBottomBar from "@/components/FixedBottomBar";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "홈", path: "/" },
  { name: "청첩장 모임", path: "/wedding-meet" },
]);

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";
const PHONE = "0507-1433-0614";

export const metadata: Metadata = {
  title: "건대 청첩장 모임 장소 - 고기석 건대본점 가성비 단체룸 | 친구·동료 청첩장 추천",
  description:
    "건대입구역 도보 1분, 친구·회사동료 청첩장 모임에 최적인 고기석 건대본점. 10·14·32인 단체룸과 2층 단독 대관, 통갈매기살 100g 7,000원 가성비. 첫 방문 꽃게전골 무료. 결혼 알리는 캐주얼한 자리에 적합.",
  keywords:
    "건대 청첩장 모임, 건대 친구 청첩장, 건대 회사동료 청첩장, 건대 청첩장 돌리기, 건대 청첩장 회식, 건대 결혼 알리는 자리, 건대 청첩장 식당",
  openGraph: {
    title: "건대 청첩장 모임 장소 - 고기석 건대본점 가성비 단체룸",
    description:
      "건대입구역 도보 1분. 10·14·32인 단체룸과 2층 단독 대관. 통갈매기살 100g 7,000원. 친구·회사동료 청첩장 캐주얼 모임에 최적. 첫 방문 꽃게전골 무료.",
    type: "website",
    url: "https://bbq.gokiseok.com/wedding-meet",
    images: [
      {
        url: "https://bbq.gokiseok.com/images/thumb-nail.jpg",
        width: 2400,
        height: 1792,
        alt: "건대 청첩장 모임 가성비 단체룸 - 고기석 건대본점",
      },
    ],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "건대 청첩장 모임 장소 - 고기석 건대본점 가성비 단체룸",
    description:
      "건대입구역 도보 1분. 10·14·32인 단체룸. 통갈매기살 100g 7,000원. 친구·동료 청첩장 캐주얼 자리.",
    images: ["https://bbq.gokiseok.com/images/thumb-nail.jpg"],
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/wedding-meet",
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://bbq.gokiseok.com/wedding-meet#restaurant",
  name: "고기석 건대본점",
  description:
    "건대입구역 도보 1분, 친구·회사동료 청첩장 모임에 최적인 통갈매기살 전문점. 10·14·32인 단체룸과 2층 단독 대관 운영.",
  url: "https://bbq.gokiseok.com/wedding-meet",
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
  "@id": "https://bbq.gokiseok.com/wedding-meet#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "건대에서 친구 청첩장 모임 하기 좋은 곳은 어디인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "고기석 건대본점은 건대입구역 도보 1분 거리에서 10·14·32인 단체룸을 운영하는 통갈매기살 전문점입니다. 가성비 좋은 메뉴(통갈매기살 100g 7,000원)와 셀프 그릴 방식으로 친구·동료 청첩장 자리에 캐주얼한 분위기 형성에 적합합니다.",
      },
    },
    {
      "@type": "Question",
      name: "회사동료 청첩장 자리로 적합한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, 10인석 룸이 부서·팀 단위 회사동료 청첩장 자리에 잘 맞습니다. 건대입구역 도보 1분이라 퇴근 후 모이기 편하고, 가성비 좋은 가격대로 1인 부담도 합리적입니다.",
      },
    },
    {
      "@type": "Question",
      name: "결혼 알리는 자리인데 너무 격식 차린 곳보다 편한 곳을 찾고 있어요. 분위기가 어떤가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "고기석 건대본점은 셀프 그릴 방식으로 직접 구워 드시는 캐주얼한 분위기의 매장입니다. 통갈매기살에 술 한잔 곁들이며 친구·동료들과 편하게 결혼 축하받는 자리에 잘 어울립니다.",
      },
    },
    {
      "@type": "Question",
      name: "1인 예산은 얼마쯤 잡으면 되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "통갈매기살 100g 7,000원 기준 식사·주류 포함 1인 약 20,000원 내외로 잡으시면 됩니다. 정확한 메뉴 가격은 메뉴 페이지를 확인해 주세요.",
      },
    },
    {
      "@type": "Question",
      name: "단체룸 인원별로 어떤 게 적합한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "10인석은 회사 부서·동네 친구 등 소규모, 14인석은 학교 친구·동아리 단위 중간 규모, 32인 단독 대관은 친구·지인 다 모이는 대규모 청첩장 자리에 적합합니다.",
      },
    },
    {
      "@type": "Question",
      name: "예약은 어떻게 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "10인 이상 단체석·32인 단독 대관은 전화(0507-1433-0614)로 인원·날짜를 먼저 문의해 주신 뒤 네이버 예약으로 확정하시는 방식을 권장합니다.",
      },
    },
  ],
};

const SCENARIOS = [
  {
    title: "회사동료 청첩장 모임",
    seats: "10인석",
    desc: "부서 동료들과 가볍게 결혼 소식 전하기. 평일 저녁 퇴근 후 모이기 좋은 위치와 시간대.",
  },
  {
    title: "학교 친구·동아리 청첩장",
    seats: "14인석",
    desc: "대학 친구, 동아리 친구들 모아서 결혼 알리는 자리. 함께 마주 앉아 진행 가능한 중간 규모 룸.",
  },
  {
    title: "동네 친구·중고등 친구 청첩장",
    seats: "10인석",
    desc: "오래 본 친구들과 편한 자리. 셀프 그릴에 술 한잔 곁들이는 캐주얼한 분위기.",
  },
  {
    title: "결혼 전 마지막 친구 모임",
    seats: "32인 단독 대관",
    desc: "결혼하면 자주 못 보는 친구들 한번에 모으기. 2층 전체 단독 사용으로 다른 손님 신경 안 쓰고 편하게 진행.",
  },
];

const REASONS = [
  { icon: "💰", title: "가성비 1인 부담 적정", desc: "통갈매기살 100g 7,000원, 식사·주류 포함 1인 약 20,000원 내외." },
  { icon: "🚪", title: "10·14·32인 단체룸", desc: "친구·동료 인원 규모에 맞춰 선택. 2층 단독 대관도 가능." },
  { icon: "🍻", title: "캐주얼 셀프 그릴 분위기", desc: "직접 구워 술 한잔 곁들이는 자리, 격식 없이 결혼 축하받기 좋음." },
  { icon: "🚇", title: "건대입구역 도보 1분", desc: "2호선·7호선 건대입구역 2번 출구 바로 앞, 친구·동료 모이기 편한 접근성." },
  { icon: "🎁", title: "첫 방문 꽃게전골 무료", desc: "9,000원 상당 얼큰 꽃게 순두부전골을 첫 방문 단체에게 무료 제공." },
];

export default function WeddingMeetPage() {
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
            Wedding Announcement Meet
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            건대 청첩장 모임 장소 — 고기석 건대본점 가성비 단체룸
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            친구·회사동료·학교 친구들에게 결혼 소식 알리는 자리.
            건대입구역 도보 1분, 통갈매기살 100g 7,000원 가성비와
            10·14·32인 단체룸으로 캐주얼하게 청첩장 돌리기 좋은 고기집입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              네이버 단체 예약 →
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
              청첩장 돌리는 자리, 정하기 쉽지 않으시죠?
            </h2>
            <ul className="flex flex-col gap-3 text-text-muted text-base leading-relaxed">
              <li>· 친구·동료 N명 부르는데 1인 부담 너무 크면 곤란</li>
              <li>· 너무 격식 차린 곳은 어색하고 분위기 안 풀림</li>
              <li>· 술 한잔 곁들이며 결혼 축하받고 싶은데 적당한 곳이 없음</li>
              <li>· 단체로 앉을 수 있는 룸이 있어야 편함</li>
              <li>· 친구·동료들 모이기 편한 접근성도 중요</li>
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Why Gokiseok</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              친구·동료 청첩장 모임에 필요한 조건, 모두 갖췄습니다
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-10 max-w-3xl">
              가성비·단체룸·접근성·캐주얼 분위기까지.
              청첩장 자리 정할 때 챙겨야 할 조건을 한 번에 해결합니다.
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
              상황별 청첩장 모임 추천
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SCENARIOS.map((s) => (
                <div
                  key={s.title}
                  className="bg-bg-card border border-white/5 p-6 flex flex-col gap-3"
                >
                  <p className="text-gold text-xs tracking-widest uppercase">{s.seats}</p>
                  <p className="text-xl font-bold text-text-primary">{s.title}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-6">
              * 32인 단독 대관(2층 전체)은 사전 전화 예약을 권장합니다.
              인원이 32인을 초과할 경우 별도 문의주세요.
            </p>
          </div>
        </section>

        {/* Review highlight */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Why Guests Choose Us</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              단체 방문 후기에서 자주 언급된 장점
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-text-muted text-base leading-relaxed max-w-4xl">
              <p>✓ 1인 부담이 합리적인 가성비</p>
              <p>✓ 단체룸 프라이버시 보장</p>
              <p>✓ 셀프 그릴로 편한 분위기</p>
              <p>✓ 통갈매기살 시그니처의 특별함</p>
              <p>✓ 친절한 응대와 빠른 세팅</p>
              <p>✓ 첫 방문 꽃게전골 깜짝 제공</p>
            </div>
            <Link
              href="/group-dining"
              className="inline-block mt-8 text-gold underline text-sm"
            >
              단체회식 종합 안내 보기 →
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
                  첫 방문 청첩장 단체에게 얼큰 꽃게 순두부전골 무료
                </p>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  9,000원 상당의 꽃게 순두부전골을 첫 방문 시 무료로 제공합니다.
                  술자리 후반 따뜻한 국물로 마무리하기 좋습니다.
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
                  단체 예약 시 시작 시각을 미리 알려주시면 자리를 준비해 드립니다.
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
              건대 청첩장 모임 자주 묻는 질문
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
              친구·동료에게 결혼 소식, 편안한 자리에서
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8">
              건대입구역 도보 1분, 가성비 단체룸으로 캐주얼한 청첩장 자리.
              인원에 맞춰 가장 효율적인 룸을 안내해 드립니다.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
              >
                네이버 단체 예약 →
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold text-sm tracking-wide hover:bg-gold hover:text-bg-base transition-colors"
              >
                📞 청첩장 단체 문의
              </a>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/rooms" className="text-text-muted hover:text-gold">단체룸 상세</Link>
            <Link href="/menu" className="text-text-muted hover:text-gold">전체 메뉴</Link>
            <Link href="/group-dining" className="text-text-muted hover:text-gold">단체회식 종합</Link>
            <Link href="/access" className="text-text-muted hover:text-gold">오시는 길</Link>
            <Link href="/faq" className="text-text-muted hover:text-gold">FAQ</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FixedBottomBar />
    </>
  );
}
