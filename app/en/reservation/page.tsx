import type { Metadata } from "next";
import Link from "next/link";
import HeaderEn from "@/components/en/HeaderEn";
import FooterEn from "@/components/en/FooterEn";
import FixedBottomBarEn from "@/components/en/FixedBottomBarEn";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/en" },
  { name: "Reservation", path: "/en/reservation" },
]);

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";
const PHONE = "0507-1433-0614";

export const metadata: Metadata = {
  title: "How to Book — Naver Booking + Group Phone Reservation | Gokiseok Konkuk",
  description:
    "How to reserve at Gokiseok Konkuk Main Branch. 1–6 guest tables: use Naver Booking. Groups of 10+ or full 32-guest buyout: phone +82-507-1433-0614 first to confirm date, then finalise via Naver Booking. Open daily 17:30–21:30, 1 minute from Konkuk Station Exit 2.",
  keywords:
    "Gokiseok reservation, Konkuk Korean BBQ booking, Konkuk group reservation, Naver Booking Gokiseok",
  openGraph: {
    title: "Gokiseok Konkuk — How to Book",
    description: "Naver Booking + group phone reservation. Open daily 17:30–21:30.",
    type: "website",
    url: "https://bbq.gokiseok.com/en/reservation",
    images: [{ url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "Gokiseok reservation" }],
    locale: "en_US",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/en/reservation",
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
  "@id": "https://bbq.gokiseok.com/en/reservation#restaurant",
  name: "Gokiseok Konkuk Main Branch",
  url: "https://bbq.gokiseok.com/en",
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
    result: { "@type": "Reservation", name: "Gokiseok Konkuk seating reservation" },
  },
};

export default function ReservationEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reserveSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <HeaderEn />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Reservation</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            How to Book at Gokiseok Konkuk
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            Two paths, depending on group size. Small parties go straight to Naver Booking.
            Larger groups and full-floor buyouts are safer with a quick phone call first to confirm availability.
          </p>
        </section>

        <section className="bg-bg-section py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-gold text-xs tracking-widest uppercase mb-2">Standard</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">1–6 guests</h2>
                <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
                  Smaller parties can reserve directly through Naver Booking — pick a date, time, and party size to confirm.
                </p>
                <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors">
                  Open Naver Booking →
                </a>
              </div>
              <div className="bg-bg-card border border-white/10 p-6">
                <p className="text-text-primary font-semibold mb-2">Before you book</p>
                <ul className="text-text-muted text-sm leading-relaxed flex flex-col gap-2">
                  <li>• Hours: daily 17:30 – 21:30</li>
                  <li>• Complimentary Spicy Crab Tofu Stew on first visit (worth ₩9,000)</li>
                  <li>• Self-grill restaurant — guests grill at the table</li>
                  <li>• 1 minute from Konkuk University Station Exit 2</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-widest uppercase mb-2">Group</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Groups of 10+ / Full-floor buyout</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
              For groups of 10 or more — including the 32-guest full 2nd-floor buyout — please phone to confirm date and headcount first, then lock in via Naver Booking.
            </p>
            <ol className="flex flex-col gap-6 max-w-3xl">
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">1</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">Phone first</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Call <a href={`tel:${PHONE}`} className="text-gold">+82-507-1433-0614</a> with party size, preferred date, and arrival time.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">2</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">Finalise on Naver Booking</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Once we confirm the slot,{" "}
                    <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="text-gold underline">finalise via Naver Booking</a>.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 bg-gold text-bg-base font-bold flex items-center justify-center">3</span>
                <div>
                  <p className="text-text-primary font-semibold mb-1">Visit</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Arrive at your booked time — we&apos;ll seat you in the prepared private room.
                  </p>
                </div>
              </li>
            </ol>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors">
                Naver Booking →
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold text-sm tracking-wide hover:bg-gold hover:text-bg-base transition-colors">
                📞 +82-507-1433-0614
              </a>
            </div>
          </div>
        </section>

        <section className="bg-bg-section py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Naver Booking</h2>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              The link below opens the Naver Booking reservation page in a new tab.
            </p>
            <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="block border border-white/10 hover:border-gold/40 p-8 transition-colors group">
              <p className="text-gold text-xs tracking-widest uppercase mb-2">Naver Booking</p>
              <p className="text-text-primary text-lg font-semibold group-hover:text-gold transition-colors break-all">{RESERVATION_URL}</p>
              <p className="text-text-muted text-xs mt-2">Opens in a new tab.</p>
            </a>
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/en/group-dining" className="text-text-muted hover:text-gold">Group Dining</Link>
            <Link href="/en/rooms" className="text-text-muted hover:text-gold">Private Rooms</Link>
            <Link href="/en/menu" className="text-text-muted hover:text-gold">Full Menu</Link>
            <Link href="/en/access" className="text-text-muted hover:text-gold">Access</Link>
            <Link href="/en/faq" className="text-text-muted hover:text-gold">FAQ</Link>
          </div>
        </section>
      </main>
      <FooterEn />
      <FixedBottomBarEn />
    </>
  );
}
