import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBottomBar from "@/components/FixedBottomBar";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "홈", path: "/" },
  { name: "FAQ", path: "/faq" },
]);

export const metadata: Metadata = {
  title: "고기석 건대본점 FAQ - 건대 회식·갈매기살·단체룸 자주 묻는 질문",
  description:
    "건대 회식·갈매기살·단체룸·예약·위치 등 고기석 건대본점 관련 자주 묻는 질문 모음. 통갈매기살 100g 7,000원, 건대입구역 2번 출구 도보 1분, 10·14·32인 단체룸 운영, 첫 방문 꽃게전골 무료.",
  keywords:
    "고기석 FAQ, 건대 회식 질문, 건대 갈매기살 가격, 건대고기집 자주 묻는 질문",
  openGraph: {
    title: "고기석 건대본점 자주 묻는 질문",
    description: "건대 회식·갈매기살·단체룸·예약·위치 FAQ.",
    type: "website",
    url: "https://bbq.gokiseok.com/faq",
    images: [{ url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "고기석 FAQ" }],
    locale: "ko_KR",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/faq",
    languages: {
      ko: "https://bbq.gokiseok.com/faq",
      en: "https://bbq.gokiseok.com/en/faq",
      "x-default": "https://bbq.gokiseok.com/faq",
    },
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "건대입구에서 회식하기 좋은 고기집은 어디인가요?",
    a: "고기석 건대본점은 건대입구역 2번 출구 도보 1분 거리에 위치한 통갈매기살 전문점입니다. 10인·14인 단체룸과 2층 단독 대관(최대 32인)을 갖추고 있어 회사 회식·동문회·청첩장 모임 등 건대 회식 장소로 추천됩니다.",
  },
  {
    q: "건대에서 갈매기살 맛집은 어디인가요?",
    a: "고기석 건대본점은 통갈매기살을 시그니처 메뉴로 하는 전문점입니다. 100% 국내산 갈매기살을 100g 7,000원(한판 400g 28,000원, 반판 200g 14,000원) 가격으로 제공합니다.",
  },
  {
    q: "고기석 건대본점은 어떤 메뉴가 있나요?",
    a: "대표 메뉴는 통 갈매기살(한판 400g 28,000원·반판 200g 14,000원)이며 가브리살(한판 39,000원·반판 20,000원), 목살(한판 35,000원·반판 18,000원), 벌집 양념 돼지껍데기(5,000원)가 함께 제공됩니다. 식사로는 치즈 폭탄 계란찜·고기석 비빔국수(각 5,000원), 얼큰 꽃게 순두부전골(9,000원, 첫 방문 무료) 등이 있습니다.",
  },
  {
    q: "고기는 어떤 방식으로 구워 먹나요?",
    a: "고기석 건대본점은 셀프 그릴 방식으로, 손님이 직접 테이블에서 구워 드시는 매장입니다.",
  },
  {
    q: "예약은 어떻게 하나요?",
    a: "1~6인 일반 예약은 네이버 예약(https://booking.naver.com/booking/6/bizes/1095878)을 이용해 주세요. 10인 이상 단체석·32인 단독 대관은 전화(0507-1433-0614)로 먼저 일정 가능 여부를 확인하신 뒤 네이버 예약으로 확정하시는 방식을 권장합니다.",
  },
  {
    q: "단체룸은 몇 인까지 수용 가능한가요?",
    a: "10인 단체룸, 14인 단체룸, 그리고 2층 전체 단독 대관(최대 32인) 3가지 옵션을 운영합니다. 회사 회식·동문회·청첩장 모임·기업 행사 등 인원 규모에 맞춰 안내해 드립니다.",
  },
  {
    q: "첫 방문 고객 혜택이 있나요?",
    a: "네, 첫 방문 고객 모두에게 얼큰 꽃게 순두부전골(9,000원 상당)을 무료로 증정합니다. 회식 마무리에 어울리는 따뜻한 국물 메뉴입니다.",
  },
  {
    q: "영업시간이 어떻게 되나요?",
    a: "매일 17:30~21:30 영업합니다. 단체 예약 시 시작 시각을 미리 알려주시면 자리를 준비해 둡니다.",
  },
  {
    q: "위치는 어디인가요?",
    a: "서울 광진구 동일로22길 117-13. 지하철 2호선·7호선 건대입구역 2번 출구 바로 앞, 건대병원 맞은편에 위치합니다. 환승역 도보 1분 거리라 모임원이 모이기 편한 입지입니다.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://bbq.gokiseok.com/faq#faq",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
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
        <section className="max-w-3xl mx-auto px-6 pb-12 md:pb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            자주 묻는 질문
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            고기석 건대본점에 자주 들어오는 질문을 모았습니다.
            회식·메뉴·예약·위치 관련 궁금증을 빠르게 해결해 드립니다.
          </p>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto px-6 flex flex-col gap-8">
            {FAQS.map((f) => (
              <div key={f.q} className="border-b border-white/5 pb-8 last:border-b-0">
                <h2 className="text-text-primary font-semibold text-lg mb-3">{f.q}</h2>
                <p className="text-text-muted text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/group-dining" className="text-text-muted hover:text-gold">단체 회식 안내</Link>
            <Link href="/menu" className="text-text-muted hover:text-gold">전체 메뉴</Link>
            <Link href="/rooms" className="text-text-muted hover:text-gold">단체룸 상세</Link>
            <Link href="/reservation" className="text-text-muted hover:text-gold">예약 방법</Link>
            <Link href="/access" className="text-text-muted hover:text-gold">오시는 길</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FixedBottomBar />
    </>
  );
}
