import type { Metadata } from "next";
import Link from "next/link";
import HeaderEn from "@/components/en/HeaderEn";
import FooterEn from "@/components/en/FooterEn";
import FixedBottomBarEn from "@/components/en/FixedBottomBarEn";
import ImageWithFallback from "@/components/ImageWithFallback";

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";
const PHONE = "0507-1433-0614";

export const metadata: Metadata = {
  title: "Private Rooms — 10 / 14 / 32-Guest Buyout | Gokiseok Konkuk",
  description:
    "Gokiseok Konkuk private rooms: 10-seat room for small teams, 14-seat room for clubs and departments, and a full 2nd-floor buyout for up to 32 guests. Ideal for company dinners, alumni reunions, and engagement parties. 1 minute from Konkuk Station Exit 2.",
  keywords:
    "Konkuk private room, Konkuk Korean BBQ private dining, 32 person buyout Seoul, group dining Konkuk, alumni dinner Konkuk",
  openGraph: {
    title: "Gokiseok Konkuk — Private Rooms",
    description: "10 / 14 / 32-guest private rooms. 1 minute from Konkuk Station Exit 2.",
    type: "website",
    url: "https://bbq.gokiseok.com/en/rooms",
    images: [{ url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "Gokiseok private rooms" }],
    locale: "en_US",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/en/rooms",
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
    label: "10-seat private room",
    range: "6–10 guests",
    img: "/images/space-10.png",
    use: ["Small team dinners", "Family gatherings", "Small department meals", "Small engagement parties"],
    desc: "An intimate private room for groups of around 10. Ideal for small teams and family gatherings.",
  },
  {
    id: "room-14",
    seats: 14,
    label: "14-seat private room",
    range: "10–14 guests",
    img: "/images/space-14.png",
    use: ["Department dinners", "Clubs & societies", "Engagement parties", "Mid-size group events"],
    desc: "A mid-size private room that seats up to 14 guests face-to-face in a single space.",
  },
  {
    id: "room-32",
    seats: 32,
    label: "32-guest 2nd-floor buyout",
    range: "15–32 guests",
    img: "/images/space-32.png",
    use: ["Corporate events", "Alumni reunions", "Large department dinners", "Year-end parties"],
    desc: "An exclusive use of the entire 2nd floor for groups up to 32. No other guests share the space — fully private.",
  },
];

const placeSchemas = ROOMS.map((room) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  "@id": `https://bbq.gokiseok.com/en/rooms#${room.id}`,
  name: `Gokiseok Konkuk — ${room.label}`,
  maximumAttendeeCapacity: room.seats,
  containedInPlace: {
    "@type": "Restaurant",
    "@id": "https://bbq.gokiseok.com/#restaurant",
    name: "Gokiseok Konkuk Main Branch",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Capacity", value: `${room.seats} guests` },
    { "@type": "LocationFeatureSpecification", name: "Best for", value: room.use.join(", ") },
  ],
  description: room.desc,
}));

export default function RoomsEnPage() {
  return (
    <>
      {placeSchemas.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HeaderEn />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Private Rooms</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Private Rooms — 10, 14, and a 32-Guest Buyout
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            Gokiseok Konkuk operates three private spaces matched to your group size,
            just 1 minute on foot from Konkuk University Station Exit 2 —
            built for company dinners, alumni reunions, and engagement parties.
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
                  <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">{room.desc}</p>
                  <p className="text-gold text-xs tracking-widest uppercase mb-3">Best for</p>
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {room.use.map((u) => (
                      <li key={u} className="px-3 py-1.5 border border-white/10 text-text-primary text-xs">{u}</li>
                    ))}
                  </ul>
                  <p className="text-text-muted text-sm">Capacity <span className="text-text-primary font-semibold">{room.seats} guests</span></p>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Room Booking Notes</h2>
            <ul className="flex flex-col gap-4 text-text-muted text-sm md:text-base leading-relaxed">
              <li>• Groups of 10 or more can book by phone or via Naver Booking.</li>
              <li>• The 32-guest full-floor buyout requires advance phone confirmation.</li>
              <li>• First-visit groups receive a complimentary Spicy Crab Tofu Stew worth ₩9,000.</li>
              <li>• Open daily 17:30 – 21:30. Share your arrival time and we&apos;ll prepare the room.</li>
              <li>• Self-grill restaurant — guests grill at the table.</li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors">
                Reserve via Naver →
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold text-sm tracking-wide hover:bg-gold hover:text-bg-base transition-colors">
                📞 +82-507-1433-0614
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/en/group-dining" className="text-text-muted hover:text-gold">Group Dining</Link>
            <Link href="/en/menu" className="text-text-muted hover:text-gold">Full Menu</Link>
            <Link href="/en/reservation" className="text-text-muted hover:text-gold">How to Book</Link>
            <Link href="/en/access" className="text-text-muted hover:text-gold">Access</Link>
            <Link href="/en/faq" className="text-text-muted hover:text-gold">FAQ</Link>
            <Link href="/en#space" className="text-text-muted hover:text-gold">Rooms section</Link>
          </div>
        </section>
      </main>
      <FooterEn />
      <FixedBottomBarEn />
    </>
  );
}
