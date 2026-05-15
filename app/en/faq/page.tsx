import type { Metadata } from "next";
import Link from "next/link";
import HeaderEn from "@/components/en/HeaderEn";
import FooterEn from "@/components/en/FooterEn";
import FixedBottomBarEn from "@/components/en/FixedBottomBarEn";

export const metadata: Metadata = {
  title: "FAQ — Gokiseok Konkuk Main Branch | Korean BBQ Near Konkuk",
  description:
    "Frequently asked questions about Gokiseok Konkuk Main Branch: group dining, whole skirt meat, private rooms, reservations, and access. Whole Skirt Meat ₩7,000 / 100g. 1 minute from Konkuk Station Exit 2. Private rooms for 10 / 14 / 32. Complimentary stew on first visit.",
  keywords:
    "Gokiseok FAQ, Konkuk Korean BBQ FAQ, group dining Konkuk questions, Konkuk private room booking",
  openGraph: {
    title: "Gokiseok Konkuk — FAQ",
    description: "Group dining, menu, private rooms, reservation, access.",
    type: "website",
    url: "https://bbq.gokiseok.com/en/faq",
    images: [{ url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "Gokiseok FAQ" }],
    locale: "en_US",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/en/faq",
    languages: {
      ko: "https://bbq.gokiseok.com/faq",
      en: "https://bbq.gokiseok.com/en/faq",
      "x-default": "https://bbq.gokiseok.com/faq",
    },
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "Where is the best Korean BBQ near Konkuk University for a group dinner?",
    a: "Gokiseok Konkuk Main Branch is a whole skirt meat (galmaegisal) specialist just 1 minute from Konkuk University Station Exit 2. With 10- and 14-seat private rooms and a full 32-guest 2nd-floor buyout, it is a strong choice for company dinners, alumni reunions, and engagement parties near Konkuk.",
  },
  {
    q: "What is galmaegisal (skirt meat)?",
    a: "Galmaegisal is a premium pork cut — the diaphragm skirt — known for its deep flavour and tender texture. At Gokiseok it is sourced 100% domestically, hand-trimmed each morning, and served the same day.",
  },
  {
    q: "What are the signature items and prices?",
    a: "The signature dish is Whole Skirt Meat at ₩7,000 per 100g (full plate 400g ₩28,000, half plate 200g ₩14,000). Pork Collar (Gabrisal) is ₩39,000 / ₩20,000 and Pork Neck (Moksal) is ₩35,000 / ₩18,000. Sides include Cheese Bomb Steamed Egg and Gokiseok Bibim Noodles (₩5,000 each), Spicy Crab Tofu Stew (₩9,000, complimentary on first visit), and Steamed Rice (₩1,000).",
  },
  {
    q: "How is the meat cooked at the table?",
    a: "Gokiseok is a self-grill restaurant. Guests grill the meat themselves at the table.",
  },
  {
    q: "How do I reserve?",
    a: "For 1–6 guest tables, please use Naver Booking: https://booking.naver.com/booking/6/bizes/1095878. For 10+ guests or the 32-guest full-floor buyout, please phone +82-507-1433-0614 first to confirm date availability, then finalise via Naver Booking.",
  },
  {
    q: "How big can a private room be?",
    a: "Three options: a 10-seat private room, a 14-seat private room, and a 32-guest exclusive 2nd-floor buyout. We match the room to your party size for company dinners, alumni reunions, engagement parties, and large department events.",
  },
  {
    q: "Are there first-visit benefits?",
    a: "Yes. First-time visiting groups receive a complimentary Spicy Crab Tofu Stew worth ₩9,000 — a warm savoury dish that pairs nicely toward the end of a meal.",
  },
  {
    q: "What are the opening hours?",
    a: "Open every day, 17:30–21:30. For groups, share your arrival time and we'll prepare the room in advance.",
  },
  {
    q: "Where is it located?",
    a: "117-13, Dongil-ro 22-gil, Gwangjin-gu, Seoul — right at Konkuk University Station Exit 2 (Subway Lines 2 & 7), opposite Konkuk University Hospital. Just 1 minute on foot from the exit, making it easy for groups to gather.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://bbq.gokiseok.com/en/faq#faq",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeaderEn />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        <section className="max-w-3xl mx-auto px-6 pb-12 md:pb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            The most common questions about Gokiseok Konkuk Main Branch —
            group dining, menu, private rooms, reservations, and access.
          </p>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto px-6 flex flex-col gap-8">
            {FAQS.map((f) => (
              <div key={f.q} className="border-b border-white/5 pb-8 last:border-b-0">
                <h2 className="text-text-primary font-semibold text-lg mb-3">{f.q}</h2>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/en/group-dining" className="text-text-muted hover:text-gold">Group Dining</Link>
            <Link href="/en/menu" className="text-text-muted hover:text-gold">Full Menu</Link>
            <Link href="/en/rooms" className="text-text-muted hover:text-gold">Private Rooms</Link>
            <Link href="/en/reservation" className="text-text-muted hover:text-gold">How to Book</Link>
            <Link href="/en/access" className="text-text-muted hover:text-gold">Access</Link>
          </div>
        </section>
      </main>
      <FooterEn />
      <FixedBottomBarEn />
    </>
  );
}
