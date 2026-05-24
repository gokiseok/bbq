import type { Metadata } from "next";
import Link from "next/link";
import HeaderEn from "@/components/en/HeaderEn";
import FooterEn from "@/components/en/FooterEn";
import FixedBottomBarEn from "@/components/en/FixedBottomBarEn";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/en" },
  { name: "Group Dining", path: "/en/group-dining" },
]);

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";
const PHONE = "0507-1433-0614";

export const metadata: Metadata = {
  title: "Konkuk Group Dining Venue — Gokiseok Private Rooms (10 / 14 / 32 Guests)",
  description:
    "Gokiseok Konkuk Main Branch is the top group dining venue near Konkuk University Station — just 1 minute on foot from Exit 2. Whole pork skirt meat (galmaegisal) at ₩7,000 / 100g. Private rooms for 10 and 14, plus a 32-guest private 2nd-floor buyout for company dinners, alumni gatherings, and engagement parties. Daily 17:30–21:30.",
  keywords:
    "Konkuk group dining, Konkuk private room, Konkuk 32 person rental, company dinner Konkuk, Korean BBQ group reservation Seoul, Gokiseok group dining",
  openGraph: {
    title: "Konkuk Group Dining — Gokiseok Private Rooms",
    description:
      "1 minute from Konkuk University Station Exit 2. Rooms for 10, 14, and a 32-guest private 2nd-floor buyout. ₩7,000 / 100g whole skirt meat. Complimentary Spicy Crab Tofu Stew on first visit.",
    type: "website",
    url: "https://bbq.gokiseok.com/en/group-dining",
    images: [
      { url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "Gokiseok Konkuk group dining" },
    ],
    locale: "en_US",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/en/group-dining",
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
  "@id": "https://bbq.gokiseok.com/en/group-dining#service",
  name: "Gokiseok Konkuk — Group Dining & Private Buyout",
  serviceType: "Group Dining / Private Dining",
  provider: {
    "@type": "Restaurant",
    "@id": "https://bbq.gokiseok.com/#restaurant",
    name: "Gokiseok Konkuk Main Branch",
    telephone: "+82-507-1433-0614",
    url: "https://bbq.gokiseok.com/en",
  },
  areaServed: { "@type": "Place", name: "Konkuk University area, Gwangjin-gu, Seoul" },
  description:
    "Private rooms for 10 and 14 guests, plus an exclusive 2nd-floor buyout for up to 32 guests, designed for company dinners, alumni reunions, and engagement parties near Konkuk University Station.",
  url: "https://bbq.gokiseok.com/en/group-dining",
  offers: { "@type": "Offer", priceCurrency: "KRW", availability: "https://schema.org/InStock" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://bbq.gokiseok.com/en/group-dining#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a Korean BBQ near Konkuk that can host 32 people?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gokiseok Konkuk Main Branch offers an exclusive 2nd-floor buyout that seats up to 32 guests in a single private space — ideal for company-wide dinners, alumni reunions, and larger department events.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book the whole place for a private group near Konkuk Station?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Gokiseok offers a full 2nd-floor private buyout for groups up to 32, just 1 minute from Konkuk University Station Exit 2. We recommend phoning +82-507-1433-0614 first to confirm date availability, then finalising the booking via Naver Booking.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical per-person budget for a group dinner here?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A common 4-person combo — one full plate of Whole Skirt Meat (400g, ₩28,000) + one full plate of Pork Collar (400g, ₩39,000) + 2 bottles of soju (₩10,000) + a complimentary Spicy Crab Tofu Stew on first visit — totals ₩77,000, roughly ₩19,000–20,000 per person.",
      },
    },
    {
      "@type": "Question",
      name: "How are the private rooms organised by size?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three options: a 10-seat room (small teams, family gatherings), a 14-seat room (clubs, mid-size department dinners), and an exclusive 32-seat 2nd-floor buyout (corporate events, alumni gatherings).",
      },
    },
    {
      "@type": "Question",
      name: "How do I make a group reservation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For groups of 10 or more, please phone +82-507-1433-0614 to confirm date and headcount, then finalise via Naver Booking (https://booking.naver.com/booking/6/bizes/1095878). Full 32-guest buyouts require advance phone reservation.",
      },
    },
    {
      "@type": "Question",
      name: "Does the complimentary stew apply to group bookings too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the complimentary Spicy Crab Tofu Stew (worth ₩9,000) is offered to first-visit groups as well. It's a warm broth dish that pairs nicely toward the end of the meal.",
      },
    },
  ],
};

const ROOMS = [
  {
    range: "6–10 guests",
    seats: "10-seat room",
    use: "Small team dinners, family gatherings, small department meals",
    note: "Intimate private space for relaxed conversation.",
  },
  {
    range: "10–14 guests",
    seats: "14-seat room",
    use: "Clubs, mid-size department dinners, engagement parties",
    note: "Everyone seated face-to-face in a single room.",
  },
  {
    range: "15–32 guests",
    seats: "32-seat 2nd-floor buyout",
    use: "Corporate events, alumni reunions, large department dinners",
    note: "Exclusive use of the entire 2nd floor — no other guests share the space.",
  },
];

const COMBO = [
  { label: "Whole Skirt Meat — Full plate (400g)", price: "₩28,000" },
  { label: "Pork Collar — Full plate (400g)", price: "₩39,000" },
  { label: "Spicy Crab Tofu Stew (Complimentary on first visit)", price: "₩0" },
  { label: "Soju × 2 bottles", price: "₩10,000" },
];

export default function GroupDiningEnPage() {
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
      <HeaderEn />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-20">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Group Dining</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Konkuk Group Dining — Gokiseok Private Rooms
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            Located 1 minute on foot from Konkuk University Station Exit 2,
            Gokiseok Konkuk Main Branch is a whole skirt meat (galmaegisal) specialist
            offering 10- and 14-seat private rooms plus a full 32-guest 2nd-floor
            buyout for company dinners, alumni reunions, clubs, and engagement parties.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
            >
              Reserve via Naver →
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold text-sm tracking-wide hover:bg-gold hover:text-bg-base transition-colors"
            >
              📞 +82-507-1433-0614
            </a>
          </div>
        </section>

        <section className="bg-bg-section py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">By Group Size</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">Rooms by Headcount</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ROOMS.map((room) => (
                <div key={room.seats} className="bg-bg-card border border-white/5 p-6 flex flex-col gap-3">
                  <p className="text-gold text-xs tracking-widest uppercase">{room.range}</p>
                  <p className="text-2xl font-bold text-text-primary">{room.seats}</p>
                  <p className="text-text-primary text-sm leading-relaxed">{room.use}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{room.note}</p>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-6">
              * Full 32-guest buyouts require advance phone reservation. For groups larger than 32, please enquire separately.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Recommended Combo</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Suggested 4-person combo (estimate)
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-10 max-w-3xl">
              Based on Whole Skirt Meat + Pork Collar + complimentary stew + 2 bottles of soju.
              Per-person budget will vary with headcount and drinks.
            </p>
            <div className="border border-white/10 divide-y divide-white/5 max-w-3xl">
              {COMBO.map((item) => (
                <div key={item.label} className="flex justify-between items-center px-6 py-4">
                  <span className="text-text-primary text-sm md:text-base">{item.label}</span>
                  <span className="text-gold text-sm md:text-base font-semibold whitespace-nowrap ml-4">{item.price}</span>
                </div>
              ))}
              <div className="flex justify-between items-center px-6 py-4 bg-bg-card">
                <span className="text-text-primary font-bold">Total (4 people)</span>
                <span className="text-gold font-bold">₩77,000 · ~₩19,000 / person</span>
              </div>
            </div>
            <p className="text-text-muted text-xs mt-6 max-w-3xl">
              * Self-grill restaurant — guests grill at the table. Prices are subject to change; see the{" "}
              <Link href="/en/menu" className="text-gold underline">menu page</Link> for the latest pricing.
            </p>
          </div>
        </section>

        <section className="bg-bg-section py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">How to Book</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">Group Reservation Steps</h2>
            <ol className="flex flex-col gap-6 max-w-3xl">
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">1</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">Phone first</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Call <a href={`tel:${PHONE}`} className="text-gold">+82-507-1433-0614</a> with your headcount, preferred date and time, and whether you want a full 2nd-floor buyout.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">2</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">Finalise on Naver Booking</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Once we confirm availability, lock in the reservation via{" "}
                    <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="text-gold underline">Naver Booking</a>.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">3</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">Visit & enjoy</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Arrive at your booked time — we&apos;ll seat you in the prepared private room and serve a complimentary Spicy Crab Tofu Stew on first visit (worth ₩9,000).
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="border border-gold/30 bg-bg-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="text-5xl">🎁</div>
              <div className="flex-1">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">First Visit Bonus</p>
                <p className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                  Complimentary Spicy Crab Tofu Stew for First-Visit Groups
                </p>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  Worth ₩9,000, served on the first visit. A warm, savoury broth that wraps the meal nicely.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bg-section py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Access</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">1 minute from Konkuk Station Exit 2</h2>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  117-13, Dongil-ro 22-gil, Gwangjin-gu, Seoul<br />
                  Right at Konkuk University Station Exit 2 (Lines 2 & 7), opposite Konkuk University Hospital.
                </p>
                <Link href="/en/access" className="text-gold underline text-sm">More on access →</Link>
              </div>
              <div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Hours</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Daily 17:30 – 21:30</h2>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  Open every evening. For group bookings, please share your arrival time so we can prepare the room in advance.
                </p>
                <a href={`tel:${PHONE}`} className="text-gold underline text-sm">+82-507-1433-0614</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">FAQ</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">Group Dining — FAQ</h2>
            <div className="flex flex-col gap-8">
              {faqSchema.mainEntity.map((qa) => (
                <div key={qa.name} className="border-b border-white/5 pb-8 last:border-b-0">
                  <h3 className="text-text-primary font-semibold text-lg mb-3">{qa.name}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{qa.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/en/menu" className="text-text-muted hover:text-gold">Full Menu</Link>
            <Link href="/en/rooms" className="text-text-muted hover:text-gold">Private Rooms</Link>
            <Link href="/en/reservation" className="text-text-muted hover:text-gold">How to Book</Link>
            <Link href="/en/access" className="text-text-muted hover:text-gold">Access</Link>
            <Link href="/en/faq" className="text-text-muted hover:text-gold">FAQ</Link>
            <Link href="/en#about" className="text-text-muted hover:text-gold">About</Link>
          </div>
        </section>
      </main>
      <FooterEn />
      <FixedBottomBarEn />
    </>
  );
}
