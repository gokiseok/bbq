import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBottomBar from "@/components/FixedBottomBar";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "홈", path: "/" },
  { name: "메뉴", path: "/menu" },
]);

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";

export const metadata: Metadata = {
  title: "고기석 건대본점 전체 메뉴 - 통갈매기살·가브리살·목살 가격표 | 건대 갈매기살 맛집",
  description:
    "건대 갈매기살 맛집 고기석 건대본점 전체 메뉴. 통갈매기살 100g 7,000원(한판 400g 28,000원), 가브리살 한판 39,000원·반판 20,000원, 목살 한판 35,000원·반판 18,000원. 첫 방문 꽃게 순두부전골 무료. 모두 100% 국내산.",
  keywords:
    "고기석 메뉴, 건대 갈매기살, 건대 통갈매기살, 통갈매기살 가격, 가브리살 가격, 건대고기집 메뉴, 건대입구 고기집 가격",
  openGraph: {
    title: "고기석 건대본점 전체 메뉴 - 통갈매기살 100g 7,000원",
    description:
      "100% 국내산 통갈매기살 100g 7,000원. 가브리살·목살·꽃게전골까지 전체 가격표.",
    type: "website",
    url: "https://bbq.gokiseok.com/menu",
    images: [{ url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "고기석 건대본점 메뉴" }],
    locale: "ko_KR",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/menu",
    languages: {
      ko: "https://bbq.gokiseok.com/menu",
      en: "https://bbq.gokiseok.com/en/menu",
      "x-default": "https://bbq.gokiseok.com/menu",
    },
  },
};

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": "https://bbq.gokiseok.com/menu#menu",
  name: "고기석 건대본점 메뉴",
  inLanguage: "ko",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "고기 (한판 400g · 반판 200g)",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "통 갈매기살 (한판 400g)",
          description: "100% 국내산 돼지 갈매기살. 두툼하게 통으로 제공하는 시그니처 메뉴.",
          offers: { "@type": "Offer", price: "28000", priceCurrency: "KRW" },
        },
        {
          "@type": "MenuItem",
          name: "통 갈매기살 (반판 200g)",
          offers: { "@type": "Offer", price: "14000", priceCurrency: "KRW" },
        },
        {
          "@type": "MenuItem",
          name: "가브리살 (한판 400g)",
          description: "부드러운 결과 풍부한 마블링.",
          offers: { "@type": "Offer", price: "39000", priceCurrency: "KRW" },
        },
        {
          "@type": "MenuItem",
          name: "가브리살 (반판 200g)",
          offers: { "@type": "Offer", price: "20000", priceCurrency: "KRW" },
        },
        {
          "@type": "MenuItem",
          name: "목살 (한판 400g)",
          description: "국내산 돼지 목살. 씹을수록 깊은 맛.",
          offers: { "@type": "Offer", price: "35000", priceCurrency: "KRW" },
        },
        {
          "@type": "MenuItem",
          name: "목살 (반판 200g)",
          offers: { "@type": "Offer", price: "18000", priceCurrency: "KRW" },
        },
        {
          "@type": "MenuItem",
          name: "벌집 양념 돼지껍데기",
          offers: { "@type": "Offer", price: "5000", priceCurrency: "KRW" },
        },
      ],
    },
    {
      "@type": "MenuSection",
      name: "식사",
      hasMenuItem: [
        { "@type": "MenuItem", name: "치즈 폭탄 계란찜", offers: { "@type": "Offer", price: "5000", priceCurrency: "KRW" } },
        { "@type": "MenuItem", name: "고기석 비빔국수", offers: { "@type": "Offer", price: "5000", priceCurrency: "KRW" } },
        {
          "@type": "MenuItem",
          name: "얼큰 꽃게 순두부전골",
          description: "첫 방문 고객 무료 증정.",
          offers: { "@type": "Offer", price: "9000", priceCurrency: "KRW" },
        },
        { "@type": "MenuItem", name: "공기밥", offers: { "@type": "Offer", price: "1000", priceCurrency: "KRW" } },
      ],
    },
    {
      "@type": "MenuSection",
      name: "주류·음료",
      hasMenuItem: [
        { "@type": "MenuItem", name: "소주", offers: { "@type": "Offer", price: "5000", priceCurrency: "KRW" } },
        { "@type": "MenuItem", name: "맥주", offers: { "@type": "Offer", price: "6000", priceCurrency: "KRW" } },
      ],
    },
  ],
};

const MEAT = [
  { name: "통 갈매기살", full: "28,000", half: "14,000", note: "시그니처 · 100% 국내산", best: true },
  { name: "가브리살", full: "39,000", half: "20,000", note: "부드러운 결, 풍부한 마블링" },
  { name: "목살", full: "35,000", half: "18,000", note: "씹을수록 깊은 맛" },
  { name: "벌집 양념 돼지껍데기", full: "5,000", half: "-", note: "" },
];

const MEAL = [
  { name: "치즈 폭탄 계란찜", price: "5,000" },
  { name: "고기석 비빔국수", price: "5,000" },
  { name: "얼큰 꽃게 순두부전골", price: "9,000", note: "첫 방문 무료" },
  { name: "공기밥", price: "1,000" },
];

const DRINK = [
  { name: "소주", price: "5,000" },
  { name: "맥주", price: "6,000" },
];

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Menu</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            고기석 건대본점 전체 메뉴
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            건대 갈매기살 맛집 고기석 건대본점의 전체 메뉴와 가격표입니다.
            모든 고기는 100% 국내산이며 셀프 그릴 방식으로 직접 구워 드시는 매장입니다.
            첫 방문 고객 모두에게 얼큰 꽃게 순두부전골(9,000원 상당)을 무료로 제공합니다.
          </p>
        </section>

        {/* 고기 메뉴 */}
        <section className="bg-bg-section py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">고기 메뉴</h2>
            <p className="text-text-muted text-sm mb-10">한판 400g · 반판 200g · 100% 국내산</p>
            <div className="border border-white/10 divide-y divide-white/5">
              <div className="hidden md:grid grid-cols-12 px-6 py-3 bg-bg-card text-text-muted text-xs uppercase tracking-widest">
                <div className="col-span-6">메뉴</div>
                <div className="col-span-3 text-right">한판 (400g)</div>
                <div className="col-span-3 text-right">반판 (200g)</div>
              </div>
              {MEAT.map((m) => (
                <div key={m.name} className="grid grid-cols-12 gap-3 px-6 py-5 items-center">
                  <div className="col-span-12 md:col-span-6">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-text-primary font-semibold">{m.name}</p>
                      {m.best && (
                        <span className="px-2 py-0.5 bg-gold text-bg-base text-xs font-bold">BEST</span>
                      )}
                    </div>
                    {m.note && <p className="text-text-muted text-xs">{m.note}</p>}
                  </div>
                  <div className="col-span-6 md:col-span-3 md:text-right">
                    <span className="md:hidden text-text-muted text-xs">한판&nbsp;</span>
                    <span className="text-gold font-semibold">{m.full}원</span>
                  </div>
                  <div className="col-span-6 md:col-span-3 md:text-right">
                    <span className="md:hidden text-text-muted text-xs">반판&nbsp;</span>
                    <span className="text-gold font-semibold">{m.half}{m.half !== "-" ? "원" : ""}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-4">
              * 통 갈매기살 100g 환산 7,000원. 가격은 변동될 수 있습니다.
            </p>
          </div>
        </section>

        {/* 식사 + 주류 */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">식사</h2>
              <ul className="border border-white/10 divide-y divide-white/5">
                {MEAL.map((m) => (
                  <li key={m.name} className="flex justify-between items-start px-5 py-4">
                    <div>
                      <p className="text-text-primary text-sm">{m.name}</p>
                      {m.note && <p className="text-text-muted text-xs mt-0.5">{m.note}</p>}
                    </div>
                    <span className="text-gold text-sm font-semibold whitespace-nowrap ml-4">
                      {m.price}원
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">주류·음료</h2>
              <ul className="border border-white/10 divide-y divide-white/5">
                {DRINK.map((d) => (
                  <li key={d.name} className="flex justify-between items-start px-5 py-4">
                    <p className="text-text-primary text-sm">{d.name}</p>
                    <span className="text-gold text-sm font-semibold whitespace-nowrap ml-4">
                      {d.price}원
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 시그니처 강조 */}
        <section className="bg-bg-section py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Signature</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              시그니처, 통 갈매기살
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-3xl">
              고기석 건대본점의 대표 메뉴 통 갈매기살은 100% 국내산 돼지 갈매기살을
              두툼하게 통으로 제공해 육즙과 식감이 살아있는 것이 특징입니다.
              매일 아침 신선하게 손질한 고기를 당일 소진하며, 매장에서 직접 손질합니다.
              <br />
              <strong className="text-text-primary">100g 7,000원</strong>으로 건대 상권에서 합리적인 갈매기살 가격대입니다.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 text-center border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              메뉴 확인하셨다면, 자리부터 잡으세요
            </h2>
            <p className="text-text-muted text-sm md:text-base mb-8">
              매일 17:30~21:30 영업 · 건대입구역 2번 출구 도보 1분
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
              <Link
                href="/group-dining"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold text-sm tracking-wide hover:bg-gold hover:text-bg-base transition-colors"
              >
                단체 회식 안내 →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/group-dining" className="text-text-muted hover:text-gold">단체 회식</Link>
            <Link href="/rooms" className="text-text-muted hover:text-gold">단체룸 상세</Link>
            <Link href="/reservation" className="text-text-muted hover:text-gold">예약 방법</Link>
            <Link href="/access" className="text-text-muted hover:text-gold">오시는 길</Link>
            <Link href="/faq" className="text-text-muted hover:text-gold">FAQ</Link>
            <Link href="/#menu" className="text-text-muted hover:text-gold">메인 메뉴 섹션</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FixedBottomBar />
    </>
  );
}
