import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBottomBar from "@/components/FixedBottomBar";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "홈", path: "/" },
  { name: "단체회식", path: "/group-dining" },
]);

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";
const PHONE = "0507-1433-0614";

export const metadata: Metadata = {
  title: "건대 회식 장소 추천 - 고기석 건대본점 단체룸 10·14·32인 | 건대입구역 도보 1분",
  description:
    "건대 회식 장소 1순위. 고기석 건대본점은 건대입구역 2번 출구 도보 1분 거리, 통갈매기살 100g 7,000원 전문점. 10인·14인 단체룸과 2층 단독 대관(최대 32인)으로 회사 회식·부서 회식·동문회·청첩장 모임까지. 첫 방문 꽃게 순두부전골 무료. 매일 17:30~21:30 영업.",
  keywords:
    "건대회식, 건대 회식, 건대회식장소, 건대 회식 장소, 건대 단체식당, 건대 단체룸, 건대입구 회식, 건대 32인 대관, 건대 부서회식, 건대 동문회 장소, 건대고기집 단체",
  openGraph: {
    title: "건대 회식 장소 - 고기석 건대본점 단체룸",
    description:
      "건대입구역 2번 출구 도보 1분. 10·14·32인 단체룸과 2층 단독 대관. 통갈매기살 100g 7,000원. 첫 방문 꽃게전골 무료. 회사 회식·동문회·청첩장 모임에 최적.",
    type: "website",
    url: "https://bbq.gokiseok.com/group-dining",
    images: [
      {
        url: "https://bbq.gokiseok.com/images/thumb-nail.jpg",
        width: 2400,
        height: 1792,
        alt: "고기석 건대본점 - 건대 회식 단체룸",
      },
    ],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "건대 회식 장소 - 고기석 건대본점 단체룸",
    description:
      "건대입구역 2번 출구 도보 1분. 10·14·32인 단체룸. 통갈매기살 100g 7,000원. 첫 방문 꽃게전골 무료.",
    images: ["https://bbq.gokiseok.com/images/thumb-nail.jpg"],
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/group-dining",
    languages: {
      ko: "https://bbq.gokiseok.com/group-dining",
      en: "https://bbq.gokiseok.com/en/group-dining",
      "x-default": "https://bbq.gokiseok.com/group-dining",
    },
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://bbq.gokiseok.com/group-dining#service",
  name: "고기석 건대본점 단체 회식 · 대관 서비스",
  serviceType: "Group Dining / Private Dining",
  provider: {
    "@type": "Restaurant",
    "@id": "https://bbq.gokiseok.com/#restaurant",
    name: "고기석 건대본점",
    telephone: "+82-507-1433-0614",
    url: "https://bbq.gokiseok.com/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "동일로22길 117-13",
      addressLocality: "광진구",
      addressRegion: "서울특별시",
      postalCode: "05017",
      addressCountry: "KR",
    },
  },
  areaServed: { "@type": "Place", name: "건대입구, 광진구, 서울" },
  description:
    "10인·14인 단체룸과 2층 전체 단독 대관(최대 32인)을 통해 회사 회식, 부서 회식, 동아리·동문회, 청첩장 모임 등 건대 단체 회식을 전문으로 진행합니다.",
  url: "https://bbq.gokiseok.com/group-dining",
  offers: { "@type": "Offer", priceCurrency: "KRW", availability: "https://schema.org/InStock" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://bbq.gokiseok.com/group-dining#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "건대에서 32인까지 회식 가능한 고기집이 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, 고기석 건대본점은 2층을 단독 대관할 수 있어 최대 32인까지 한 공간에서 회식이 가능합니다. 기업 행사·동문회·동창회처럼 인원이 많은 모임에 적합하며, 단독 대관 시 다른 손님과 섞이지 않는 프라이빗 회식이 가능합니다.",
      },
    },
    {
      "@type": "Question",
      name: "건대입구에서 단독 대관 가능한 고기집은 어디인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "고기석 건대본점은 건대입구역 2번 출구 도보 1분 거리에서 2층 전체 단독 대관이 가능합니다. 최대 32인까지 수용 가능하며, 회식·청첩장 모임·기업 행사 등 프라이빗한 단체 행사를 진행할 수 있습니다. 단독 대관은 사전 전화 예약(0507-1433-0614)을 권장합니다.",
      },
    },
    {
      "@type": "Question",
      name: "건대 회식 1인 예산은 보통 얼마인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "고기석 건대본점 기준으로 4인 회식 시 통갈매기살 한판(400g, 28,000원) + 가브리살 한판(400g, 39,000원) + 소주 2병(10,000원) + 무료 꽃게 순두부전골을 합치면 총 77,000원, 1인 약 19,000~20,000원 선에서 회식이 가능합니다. 인원과 주류량에 따라 달라질 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "단체룸 인원은 어떻게 구분되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "고기석 건대본점은 10인석(소규모 팀 회식·가족 모임), 14인석(동아리·부서 회식), 32인석(2층 단독 대관, 기업 행사·동문회) 세 가지 단체 공간을 운영합니다. 인원에 맞춰 가장 효율적인 룸을 안내해 드립니다.",
      },
    },
    {
      "@type": "Question",
      name: "단체 예약은 어떻게 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "10인 이상 단체석·대관은 전화(0507-1433-0614)로 인원·날짜·예상 시간을 먼저 문의해 주신 뒤, 네이버 예약(https://booking.naver.com/booking/6/bizes/1095878)으로 확정하시는 방식을 권장합니다. 단독 대관(32인)은 사전 예약 필수입니다.",
      },
    },
    {
      "@type": "Question",
      name: "단체 회식에도 첫 방문 꽃게전골 혜택이 적용되나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네, 첫 방문 고객에게 제공되는 얼큰 꽃게 순두부전골(9,000원 상당)은 단체 회식 시에도 동일하게 무료 증정됩니다. 회식 도중 따뜻한 국물 메뉴로 마무리에 잘 어울립니다.",
      },
    },
  ],
};

const ROOMS = [
  {
    range: "6~10명",
    seats: "10인석",
    use: "팀 회식, 가족 모임, 소규모 부서 회식",
    note: "아늑한 단체 공간에서 편안하게 즐기는 회식",
  },
  {
    range: "10~14명",
    seats: "14인석",
    use: "동아리·동호회, 중간 규모 부서 회식, 청첩장 모임",
    note: "한 룸에서 인원 모두가 함께 마주 앉아 진행 가능",
  },
  {
    range: "15~32명",
    seats: "32인석 (2층 단독 대관)",
    use: "기업 행사, 동문회, 동창회, 대규모 부서 회식",
    note: "2층 전체를 단독으로 사용하는 프라이빗 회식",
  },
];

const COMBO = [
  { label: "통 갈매기살 한판 (400g)", price: "28,000원" },
  { label: "가브리살 한판 (400g)", price: "39,000원" },
  { label: "얼큰 꽃게 순두부전골 (첫 방문 무료)", price: "0원" },
  { label: "소주 2병", price: "10,000원" },
];

export default function GroupDiningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
            Group Dining
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            건대 회식 장소 — 고기석 건대본점 단체룸
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            건대입구역 2번 출구 도보 1분, 통갈매기살 전문 고기석 건대본점은
            10인·14인 단체룸과 2층 단독 대관(최대 32인)을 갖춘
            건대 회식 전문 고기집입니다. 회사 회식, 부서 회식, 동아리·동문회,
            청첩장 모임까지 인원에 맞춰 안내해 드립니다.
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

        {/* 인원별 추천 룸 */}
        <section className="bg-bg-section py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">By Group Size</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">
              인원별 추천 단체룸
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ROOMS.map((room) => (
                <div
                  key={room.seats}
                  className="bg-bg-card border border-white/5 p-6 flex flex-col gap-3"
                >
                  <p className="text-gold text-xs tracking-widest uppercase">
                    {room.range}
                  </p>
                  <p className="text-2xl font-bold text-text-primary">
                    {room.seats}
                  </p>
                  <p className="text-text-primary text-sm leading-relaxed">
                    {room.use}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {room.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-6">
              * 32인 단독 대관은 사전 전화 예약을 권장합니다.
              인원이 32인을 초과할 경우 별도 문의주세요.
            </p>
          </div>
        </section>

        {/* 회식 추천 메뉴 조합 (4인 기준) */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Recommended Combo</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              4인 회식 추천 메뉴 (예상 견적)
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-10 max-w-3xl">
              통갈매기살 + 가브리살 + 첫 방문 무료 꽃게전골 + 소주 2병 기준.
              인원과 주류·식사 추가량에 따라 1인 예산은 달라질 수 있습니다.
            </p>
            <div className="border border-white/10 divide-y divide-white/5 max-w-3xl">
              {COMBO.map((item) => (
                <div key={item.label} className="flex justify-between items-center px-6 py-4">
                  <span className="text-text-primary text-sm md:text-base">
                    {item.label}
                  </span>
                  <span className="text-gold text-sm md:text-base font-semibold whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center px-6 py-4 bg-bg-card">
                <span className="text-text-primary font-bold">합계 (4인 기준)</span>
                <span className="text-gold font-bold">77,000원 · 1인 약 19,000원</span>
              </div>
            </div>
            <p className="text-text-muted text-xs mt-6 max-w-3xl">
              * 셀프 그릴 방식으로 직접 구워 드시는 매장입니다.
              가격은 변동될 수 있으며 최신 가격은{" "}
              <Link href="/menu" className="text-gold underline">메뉴 페이지</Link>를 확인해 주세요.
            </p>
          </div>
        </section>

        {/* 단체 예약 절차 */}
        <section className="bg-bg-section py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">How to Book</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">
              단체 예약 절차
            </h2>
            <ol className="flex flex-col gap-6 max-w-3xl">
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">1</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">전화 우선 문의</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    인원, 희망 일자·시간, 단독 대관 여부를{" "}
                    <a href={`tel:${PHONE}`} className="text-gold">{PHONE}</a>로
                    먼저 확인합니다. 32인 단독 대관은 일정 가능 여부를 우선 확인하는 것이 안전합니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">2</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">네이버 예약으로 확정</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    가능 일정 확인 후{" "}
                    <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="text-gold underline">
                      네이버 예약
                    </a>
                    으로 예약을 확정합니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">3</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">방문 & 회식 진행</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    예약 시각에 맞춰 방문하시면 안내된 단체룸으로 모시며,
                    첫 방문 시 얼큰 꽃게 순두부전골(9,000원 상당)을 무료로 제공합니다.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* 첫 방문 무료 꽃게전골 강조 */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="border border-gold/30 bg-bg-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="text-5xl">🎁</div>
              <div className="flex-1">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">First Visit Bonus</p>
                <p className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                  첫 방문 단체에게 얼큰 꽃게 순두부전골 무료 증정
                </p>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  9,000원 상당의 꽃게 순두부전골을 첫 방문 시 무료로 제공합니다.
                  회식 후반 따뜻한 국물로 마무리하기에 좋습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 위치 & 영업시간 */}
        <section className="bg-bg-section py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Access</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">건대입구역 2번 출구 도보 1분</h2>
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

        {/* FAQ (UI) */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">FAQ</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">건대 회식 자주 묻는 질문</h2>
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
              건대 회식, 단체룸으로 편안하게
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8">
              10·14·32인 단체룸과 2층 단독 대관까지.
              인원에 맞춰 가장 효율적인 회식 공간을 안내해 드립니다.
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
                📞 단체 문의 전화
              </a>
            </div>
          </div>
        </section>

        {/* Related links */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/menu" className="text-text-muted hover:text-gold">전체 메뉴 보기</Link>
            <Link href="/rooms" className="text-text-muted hover:text-gold">단체룸 상세</Link>
            <Link href="/reservation" className="text-text-muted hover:text-gold">예약 방법</Link>
            <Link href="/access" className="text-text-muted hover:text-gold">오시는 길</Link>
            <Link href="/faq" className="text-text-muted hover:text-gold">FAQ</Link>
            <Link href="/#about" className="text-text-muted hover:text-gold">매장 소개</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FixedBottomBar />
    </>
  );
}
