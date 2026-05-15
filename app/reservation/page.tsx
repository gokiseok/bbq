import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBottomBar from "@/components/FixedBottomBar";

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";
const PHONE = "0507-1433-0614";

export const metadata: Metadata = {
  title: "고기석 건대본점 예약 - 네이버 예약 · 전화 단체 예약 | 건대 회식 예약",
  description:
    "고기석 건대본점 예약 방법. 1~6인 일반석은 네이버 예약, 10인 이상 단체·32인 단독 대관은 전화(0507-1433-0614) 사전 문의 후 네이버 예약 확정. 매일 17:30~21:30 영업, 건대입구역 2번 출구 도보 1분.",
  keywords:
    "고기석 예약, 건대 회식 예약, 건대 단체 예약, 네이버 예약 고기석, 건대고기집 예약",
  openGraph: {
    title: "고기석 건대본점 예약",
    description: "네이버 예약 + 전화 단체 예약. 매일 17:30~21:30.",
    type: "website",
    url: "https://bbq.gokiseok.com/reservation",
    images: [{ url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "고기석 예약" }],
    locale: "ko_KR",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/reservation",
    languages: {
      ko: "https://bbq.gokiseok.com/reservation",
      en: "https://bbq.gokiseok.com/en/reservation",
      "x-default": "https://bbq.gokiseok.com/reservation",
    },
  },
};

const reserveSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://bbq.gokiseok.com/reservation#restaurant",
  name: "고기석 건대본점",
  url: "https://bbq.gokiseok.com/",
  telephone: "+82-507-1433-0614",
  acceptsReservations: "True",
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: RESERVATION_URL,
      inLanguage: "ko-KR",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "고기석 건대본점 좌석 예약",
    },
  },
};

export default function ReservationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reserveSchema) }}
      />
      <Header />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Reservation</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            고기석 건대본점 예약 방법
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            인원에 따라 예약 방법을 안내해 드립니다.
            소규모는 네이버 예약 한 번이면 끝나고,
            단체 회식·단독 대관은 전화로 일정 가능 여부를 먼저 확인하시는 것이 안전합니다.
          </p>
        </section>

        {/* 1~6인 일반석 */}
        <section className="bg-bg-section py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-gold text-xs tracking-widest uppercase mb-2">Standard</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">1~6인 일반 예약</h2>
                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
                  소규모 방문은 네이버 예약으로 바로 예약 가능합니다.
                  날짜·시간·인원을 선택해 확정해 주세요.
                </p>
                <a
                  href={RESERVATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
                >
                  네이버 예약 바로가기 →
                </a>
              </div>
              <div className="bg-bg-card border border-white/10 p-6">
                <p className="text-text-primary font-semibold mb-2">예약 시 확인사항</p>
                <ul className="text-text-muted text-sm leading-relaxed flex flex-col gap-2">
                  <li>• 영업시간: 매일 17:30 – 21:30</li>
                  <li>• 첫 방문 시 얼큰 꽃게 순두부전골(9,000원 상당) 무료 증정</li>
                  <li>• 셀프 그릴 방식 (직접 구워 드시는 매장)</li>
                  <li>• 건대입구역 2번 출구 도보 1분</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10인 이상 단체 */}
        <section className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Group</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">10인 이상 단체 회식·대관 예약</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
              10인 이상 단체석과 32인 단독 대관은 일정 가능 여부를 먼저 전화로 확인한 뒤,
              네이버 예약으로 확정하시는 방식을 권장합니다.
            </p>
            <ol className="flex flex-col gap-6 max-w-3xl">
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">1</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">전화 사전 문의</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    인원·희망 일자·시간을{" "}
                    <a href={`tel:${PHONE}`} className="text-gold">{PHONE}</a>로 확인하세요.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">2</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">네이버 예약으로 확정</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    일정 확정 후{" "}
                    <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="text-gold underline">
                      네이버 예약
                    </a>
                    에서 예약을 마무리합니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">3</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">방문</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    예약 시각에 맞춰 방문하시면 안내된 단체룸으로 모십니다.
                  </p>
                </div>
              </li>
            </ol>
            <div className="mt-10 flex flex-wrap gap-3">
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
          </div>
        </section>

        {/* 네이버 예약 임베드 */}
        <section className="bg-bg-section py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">네이버 예약</h2>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              아래 링크에서 바로 예약 페이지로 이동합니다.
            </p>
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-white/10 hover:border-gold/40 p-8 transition-colors group"
            >
              <p className="text-gold text-xs tracking-widest uppercase mb-2">Naver Booking</p>
              <p className="text-text-primary text-lg font-semibold group-hover:text-gold transition-colors break-all">
                {RESERVATION_URL}
              </p>
              <p className="text-text-muted text-xs mt-2">새 탭에서 네이버 예약 페이지가 열립니다.</p>
            </a>
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/group-dining" className="text-text-muted hover:text-gold">단체 회식 안내</Link>
            <Link href="/rooms" className="text-text-muted hover:text-gold">단체룸 상세</Link>
            <Link href="/menu" className="text-text-muted hover:text-gold">전체 메뉴</Link>
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
