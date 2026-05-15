import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBottomBar from "@/components/FixedBottomBar";
import ImageWithFallback from "@/components/ImageWithFallback";

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";
const PHONE = "0507-1433-0614";

export const metadata: Metadata = {
  title: "고기석 건대본점 단체룸 - 10인·14인·32인 단독 대관 | 건대 단체식당",
  description:
    "건대 단체식당 고기석 건대본점 단체룸 안내. 10인 소규모 회식룸, 14인 부서 회식룸, 32인 2층 단독 대관까지. 건대입구역 2번 출구 도보 1분, 회사 회식·동문회·청첩장 모임에 최적.",
  keywords:
    "건대 단체룸, 건대 단체식당, 건대 32인 대관, 건대 동문회 장소, 건대 부서회식, 건대입구 단체석, 건대 회식 룸",
  openGraph: {
    title: "고기석 건대본점 단체룸 — 10·14·32인",
    description: "10인·14인 단체룸과 2층 단독 대관(32인). 건대입구역 도보 1분.",
    type: "website",
    url: "https://bbq.gokiseok.com/rooms",
    images: [{ url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "고기석 단체룸" }],
    locale: "ko_KR",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/rooms",
    languages: {
      ko: "https://bbq.gokiseok.com/rooms",
      en: "https://bbq.gokiseok.com/en/rooms",
      "x-default": "https://bbq.gokiseok.com/rooms",
    },
  },
};

const ROOMS = [
  {
    id: "room-10",
    seats: 10,
    label: "10인 단체룸",
    range: "6~10명",
    img: "/images/space-10.png",
    use: ["팀 회식", "가족 모임", "소규모 부서 회식", "청첩장 소모임"],
    desc: "10명 내외 인원이 편하게 둘러앉을 수 있는 아늑한 단체룸. 소규모 팀 회식과 가족 모임에 적합합니다.",
  },
  {
    id: "room-14",
    seats: 14,
    label: "14인 단체룸",
    range: "10~14명",
    img: "/images/space-14.png",
    use: ["부서 회식", "동아리·동호회", "청첩장 모임", "중간 규모 단체 행사"],
    desc: "14명까지 한 룸에서 함께 마주 앉아 진행 가능한 중간 규모 단체룸. 부서 회식·동아리 모임에 적합합니다.",
  },
  {
    id: "room-32",
    seats: 32,
    label: "32인 단독 대관 (2층 전체)",
    range: "15~32명",
    img: "/images/space-32.png",
    use: ["기업 행사", "동문회·동창회", "대규모 부서 회식", "단체 송년회"],
    desc: "2층 전체를 단독으로 사용하는 프라이빗 단체 공간. 다른 손님과 섞이지 않아 기업 행사·동문회 같은 큰 모임에 최적입니다.",
  },
];

const placeSchemas = ROOMS.map((room) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": `https://bbq.gokiseok.com/rooms#${room.id}`,
  name: `고기석 건대본점 ${room.label}`,
  maximumAttendeeCapacity: room.seats,
  containedInPlace: {
    "@type": "Restaurant",
    "@id": "https://bbq.gokiseok.com/#restaurant",
    name: "고기석 건대본점",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "수용 인원", value: `${room.seats}인` },
    { "@type": "LocationFeatureSpecification", name: "용도", value: room.use.join(", ") },
  ],
  description: room.desc,
}));

export default function RoomsPage() {
  return (
    <>
      {placeSchemas.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Private Rooms</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            건대 단체룸 — 10·14·32인 룸과 2층 단독 대관
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            고기석 건대본점은 인원 규모별 단체룸 3종을 운영합니다.
            건대입구역 2번 출구 도보 1분 거리에서 회사 회식·동문회·청첩장 모임 등
            건대 단체식당이 필요한 모든 자리에 맞춰 안내해 드립니다.
          </p>
        </section>

        {ROOMS.map((room, idx) => (
          <section
            key={room.id}
            id={room.id}
            className={`${idx % 2 === 0 ? "bg-bg-section" : "bg-bg-base"} py-16 md:py-24`}
          >
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="relative aspect-[4/3] bg-bg-card overflow-hidden">
                  <ImageWithFallback
                    src={room.img}
                    alt={room.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">{room.range}</p>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">{room.label}</h2>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
                    {room.desc}
                  </p>
                  <p className="text-gold text-xs tracking-widest uppercase mb-3">적합한 모임</p>
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {room.use.map((u) => (
                      <li key={u} className="px-3 py-1.5 border border-white/10 text-text-primary text-xs">
                        {u}
                      </li>
                    ))}
                  </ul>
                  <p className="text-text-muted text-sm">
                    수용 인원 <span className="text-text-primary font-semibold">{room.seats}명</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* 대관 안내 */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
              단체룸 예약 안내
            </h2>
            <ul className="flex flex-col gap-4 text-text-muted text-sm md:text-base leading-relaxed">
              <li>• 10인 이상 단체석 예약은 전화 또는 네이버 예약으로 받습니다.</li>
              <li>• 32인 단독 대관은 일정 가능 여부를 사전 전화로 확인하는 것을 권장합니다.</li>
              <li>• 첫 방문 단체에게 얼큰 꽃게 순두부전골(9,000원 상당)을 무료로 제공합니다.</li>
              <li>• 영업시간 매일 17:30~21:30. 단체 시작 시각을 미리 알려주시면 자리를 준비해 둡니다.</li>
              <li>• 셀프 그릴 방식으로 직접 구워 드시는 매장입니다.</li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
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
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/group-dining" className="text-text-muted hover:text-gold">단체 회식 안내</Link>
            <Link href="/menu" className="text-text-muted hover:text-gold">전체 메뉴</Link>
            <Link href="/reservation" className="text-text-muted hover:text-gold">예약 방법</Link>
            <Link href="/access" className="text-text-muted hover:text-gold">오시는 길</Link>
            <Link href="/faq" className="text-text-muted hover:text-gold">FAQ</Link>
            <Link href="/#space" className="text-text-muted hover:text-gold">메인 단체룸 섹션</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FixedBottomBar />
    </>
  );
}
