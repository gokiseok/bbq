import type { Metadata } from "next";
import Link from "next/link";
import HeaderEn from "@/components/en/HeaderEn";
import FooterEn from "@/components/en/FooterEn";
import FixedBottomBarEn from "@/components/en/FixedBottomBarEn";

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";

export const metadata: Metadata = {
  title: "Full Menu — Whole Skirt Meat / Pork Collar / Pork Neck | Gokiseok Konkuk",
  description:
    "Gokiseok Konkuk Main Branch full menu. Whole Skirt Meat (galmaegisal) at ₩7,000 / 100g (full plate 400g ₩28,000). Pork Collar ₩39,000 / ₩20,000. Pork Neck ₩35,000 / ₩18,000. 100% domestic Korean pork. Complimentary Spicy Crab Tofu Stew on first visit.",
  keywords:
    "Gokiseok menu, Konkuk Korean BBQ menu, galmaegisal price, pork skirt meat Seoul, Korean BBQ price Konkuk",
  openGraph: {
    title: "Gokiseok Konkuk — Full Menu",
    description: "Whole Skirt Meat ₩7,000 / 100g. Pork Collar, Pork Neck, sides and drinks.",
    type: "website",
    url: "https://bbq.gokiseok.com/en/menu",
    images: [{ url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "Gokiseok menu" }],
    locale: "en_US",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/en/menu",
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
  "@id": "https://bbq.gokiseok.com/en/menu#menu",
  name: "Gokiseok Konkuk Main Branch — Full Menu",
  inLanguage: "en",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Meat (Full plate 400g / Half plate 200g)",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Whole Skirt Meat — Full plate (400g)",
          description: "100% domestic Korean pork skirt meat. Cut thick to preserve juice and texture. Signature dish.",
          offers: { "@type": "Offer", price: "28000", priceCurrency: "KRW" },
        },
        { "@type": "MenuItem", name: "Whole Skirt Meat — Half plate (200g)", offers: { "@type": "Offer", price: "14000", priceCurrency: "KRW" } },
        {
          "@type": "MenuItem",
          name: "Pork Collar (Gabrisal) — Full plate (400g)",
          description: "Tender grain and rich marbling.",
          offers: { "@type": "Offer", price: "39000", priceCurrency: "KRW" },
        },
        { "@type": "MenuItem", name: "Pork Collar (Gabrisal) — Half plate (200g)", offers: { "@type": "Offer", price: "20000", priceCurrency: "KRW" } },
        {
          "@type": "MenuItem",
          name: "Pork Neck (Moksal) — Full plate (400g)",
          description: "Domestic pork neck with deep, lingering flavour.",
          offers: { "@type": "Offer", price: "35000", priceCurrency: "KRW" },
        },
        { "@type": "MenuItem", name: "Pork Neck (Moksal) — Half plate (200g)", offers: { "@type": "Offer", price: "18000", priceCurrency: "KRW" } },
        { "@type": "MenuItem", name: "Honeycomb Marinated Pork Skin", offers: { "@type": "Offer", price: "5000", priceCurrency: "KRW" } },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Sides & Meals",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Cheese Bomb Steamed Egg", offers: { "@type": "Offer", price: "5000", priceCurrency: "KRW" } },
        { "@type": "MenuItem", name: "Gokiseok Bibim Noodles", offers: { "@type": "Offer", price: "5000", priceCurrency: "KRW" } },
        {
          "@type": "MenuItem",
          name: "Spicy Crab Tofu Stew",
          description: "Complimentary on first visit.",
          offers: { "@type": "Offer", price: "9000", priceCurrency: "KRW" },
        },
        { "@type": "MenuItem", name: "Steamed Rice", offers: { "@type": "Offer", price: "1000", priceCurrency: "KRW" } },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Drinks",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Soju", offers: { "@type": "Offer", price: "5000", priceCurrency: "KRW" } },
        { "@type": "MenuItem", name: "Beer", offers: { "@type": "Offer", price: "6000", priceCurrency: "KRW" } },
      ],
    },
  ],
};

const MEAT = [
  { name: "Whole Skirt Meat (Galmaegisal)", full: "28,000", half: "14,000", note: "Signature · 100% domestic Korean pork", best: true },
  { name: "Pork Collar (Gabrisal)", full: "39,000", half: "20,000", note: "Tender grain, rich marbling" },
  { name: "Pork Neck (Moksal)", full: "35,000", half: "18,000", note: "Deep, lingering flavour" },
  { name: "Honeycomb Marinated Pork Skin", full: "5,000", half: "-", note: "" },
];

const MEAL = [
  { name: "Cheese Bomb Steamed Egg", price: "5,000" },
  { name: "Gokiseok Bibim Noodles", price: "5,000" },
  { name: "Spicy Crab Tofu Stew", price: "9,000", note: "Complimentary on first visit" },
  { name: "Steamed Rice", price: "1,000" },
];

const DRINK = [
  { name: "Soju", price: "5,000" },
  { name: "Beer", price: "6,000" },
];

export default function MenuEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
      <HeaderEn />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Menu</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Gokiseok Konkuk Main Branch — Full Menu
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            Complete menu and pricing for Gokiseok Konkuk Main Branch.
            All pork is 100% domestic Korean and this is a self-grill restaurant — guests grill at the table.
            First-time visitors receive a complimentary Spicy Crab Tofu Stew worth ₩9,000.
          </p>
        </section>

        <section className="bg-bg-section py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Meat</h2>
            <p className="text-text-muted text-sm mb-10">Full plate 400g · Half plate 200g · 100% domestic Korean pork</p>
            <div className="border border-white/10 divide-y divide-white/5">
              <div className="hidden md:grid grid-cols-12 px-6 py-3 bg-bg-card text-text-muted text-xs uppercase tracking-widest">
                <div className="col-span-6">Item</div>
                <div className="col-span-3 text-right">Full (400g)</div>
                <div className="col-span-3 text-right">Half (200g)</div>
              </div>
              {MEAT.map((m) => (
                <div key={m.name} className="grid grid-cols-12 gap-3 px-6 py-5 items-center">
                  <div className="col-span-12 md:col-span-6">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-text-primary font-semibold">{m.name}</p>
                      {m.best && <span className="px-2 py-0.5 bg-gold text-bg-base text-xs font-bold">BEST</span>}
                    </div>
                    {m.note && <p className="text-text-muted text-xs">{m.note}</p>}
                  </div>
                  <div className="col-span-6 md:col-span-3 md:text-right">
                    <span className="md:hidden text-text-muted text-xs">Full&nbsp;</span>
                    <span className="text-gold font-semibold">₩{m.full}</span>
                  </div>
                  <div className="col-span-6 md:col-span-3 md:text-right">
                    <span className="md:hidden text-text-muted text-xs">Half&nbsp;</span>
                    <span className="text-gold font-semibold">{m.half === "-" ? "-" : `₩${m.half}`}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-4">* Whole Skirt Meat = ₩7,000 per 100g. Prices subject to change.</p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Sides & Meals</h2>
              <ul className="border border-white/10 divide-y divide-white/5">
                {MEAL.map((m) => (
                  <li key={m.name} className="flex justify-between items-start px-5 py-4">
                    <div>
                      <p className="text-text-primary text-sm">{m.name}</p>
                      {m.note && <p className="text-text-muted text-xs mt-0.5">{m.note}</p>}
                    </div>
                    <span className="text-gold text-sm font-semibold whitespace-nowrap ml-4">₩{m.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Drinks</h2>
              <ul className="border border-white/10 divide-y divide-white/5">
                {DRINK.map((d) => (
                  <li key={d.name} className="flex justify-between items-start px-5 py-4">
                    <p className="text-text-primary text-sm">{d.name}</p>
                    <span className="text-gold text-sm font-semibold whitespace-nowrap ml-4">₩{d.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-bg-section py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Signature</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Signature — Whole Skirt Meat</h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-3xl">
              Our signature whole skirt meat (galmaegisal) is 100% domestic Korean pork,
              cut thick and served whole to preserve juice and texture.
              Hand-trimmed fresh every morning and served the same day.
              <br />
              <strong className="text-text-primary">₩7,000 per 100g</strong> — a fair, accessible price for the Konkuk area.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 text-center border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready? Grab your table.</h2>
            <p className="text-text-muted text-sm md:text-base mb-8">
              Open daily 17:30–21:30 · 1 minute from Konkuk Station Exit 2
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors">
                Reserve via Naver →
              </a>
              <Link href="/en/group-dining" className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold text-sm tracking-wide hover:bg-gold hover:text-bg-base transition-colors">
                Group Dining →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/en/group-dining" className="text-text-muted hover:text-gold">Group Dining</Link>
            <Link href="/en/rooms" className="text-text-muted hover:text-gold">Private Rooms</Link>
            <Link href="/en/reservation" className="text-text-muted hover:text-gold">How to Book</Link>
            <Link href="/en/access" className="text-text-muted hover:text-gold">Access</Link>
            <Link href="/en/faq" className="text-text-muted hover:text-gold">FAQ</Link>
            <Link href="/en#menu" className="text-text-muted hover:text-gold">Menu section</Link>
          </div>
        </section>
      </main>
      <FooterEn />
      <FixedBottomBarEn />
    </>
  );
}
