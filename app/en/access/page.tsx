import type { Metadata } from "next";
import Link from "next/link";
import HeaderEn from "@/components/en/HeaderEn";
import FooterEn from "@/components/en/FooterEn";
import FixedBottomBarEn from "@/components/en/FixedBottomBarEn";
import { breadcrumbSchema } from "@/lib/breadcrumb";

const breadcrumb = breadcrumbSchema([
  { name: "Home", path: "/en" },
  { name: "Access", path: "/en/access" },
]);

const PHONE = "0507-1433-0614";

export const metadata: Metadata = {
  title: "Access — 1 Minute from Konkuk University Station Exit 2 | Gokiseok Konkuk",
  description:
    "Gokiseok Konkuk Main Branch is located at 117-13, Dongil-ro 22-gil, Gwangjin-gu, Seoul — right at Konkuk University Station Exit 2 (Lines 2 & 7), opposite Konkuk University Hospital. 1-minute walk. Open daily 17:30–21:30. ₩7,000 / 100g whole skirt meat.",
  keywords:
    "Gokiseok location, Konkuk University Station Korean BBQ, Konkuk Exit 2, near Konkuk University Hospital BBQ",
  openGraph: {
    title: "Access — Gokiseok Konkuk Main Branch",
    description: "1 minute from Konkuk University Station Exit 2. 117-13, Dongil-ro 22-gil, Gwangjin-gu, Seoul.",
    type: "website",
    url: "https://bbq.gokiseok.com/en/access",
    images: [{ url: "https://bbq.gokiseok.com/images/thumb-nail.jpg", width: 2400, height: 1792, alt: "Gokiseok access" }],
    locale: "en_US",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/en/access",
    languages: {
      ko: "https://bbq.gokiseok.com/access",
      en: "https://bbq.gokiseok.com/en/access",
      "x-default": "https://bbq.gokiseok.com/access",
    },
  },
};

export default function AccessEnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <HeaderEn />
      <main className="bg-bg-base text-text-primary pt-24 md:pt-32">
        <section className="max-w-5xl mx-auto px-6 pb-12 md:pb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Access</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            1 Minute from Konkuk University Station Exit 2
          </h1>
          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            Gokiseok Konkuk Main Branch is right at the entrance of Konkuk University Station Exit 2
            (Lines 2 &amp; 7), directly opposite Konkuk University Hospital —
            the most convenient meeting point on the line for group dinners.
          </p>
        </section>

        <section className="bg-bg-section py-14 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="w-full aspect-[4/3] overflow-hidden bg-bg-card border border-white/5">
                <iframe
                  src="https://maps.google.com/maps?q=37.541260,127.070687&z=17&output=embed&hl=en"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  title="Gokiseok Konkuk Main Branch map"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">Address</p>
                  <p className="text-text-primary text-base font-medium">
                    117-13, Dongil-ro 22-gil, Gwangjin-gu, Seoul
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    (Right at Konkuk University Station Exit 2 · Opposite Konkuk University Hospital)
                  </p>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">Transit</p>
                  <ul className="text-text-primary text-sm leading-relaxed flex flex-col gap-1">
                    <li>Subway Line 2 · Konkuk University Station · Exit 2 (1 min walk)</li>
                    <li>Subway Line 7 · Konkuk University Station · Exit 2 (1 min walk)</li>
                    <li>Bus stops at Konkuk University Station nearby</li>
                  </ul>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">Hours</p>
                  <p className="text-text-primary text-base font-medium">Daily 17:30 – 21:30</p>
                </div>
                <div className="w-full h-px bg-white/5" />
                <div>
                  <p className="text-gold text-xs tracking-widest uppercase mb-2">Phone</p>
                  <a href={`tel:${PHONE}`} className="text-text-primary text-base hover:text-gold transition-colors w-fit">
                    +82-507-1433-0614
                  </a>
                </div>
                <a href="https://naver.me/5mIWObsv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors w-full sm:w-auto">
                  Open on Naver Map →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Walking from Konkuk University Station</h2>
            <ol className="flex flex-col gap-4 text-text-muted text-sm md:text-base leading-relaxed">
              <li>
                <span className="text-gold font-semibold mr-2">1.</span>
                Take <strong className="text-text-primary">Exit 2</strong> from Konkuk University Station (Lines 2 &amp; 7).
              </li>
              <li>
                <span className="text-gold font-semibold mr-2">2.</span>
                The exit faces Konkuk University Hospital — look for our signage on the side alley directly across.
              </li>
              <li>
                <span className="text-gold font-semibold mr-2">3.</span>
                About a 1-minute walk. Enter and check in at the reception desk to be seated.
              </li>
            </ol>
          </div>
        </section>

        <section className="py-12 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link href="/en/group-dining" className="text-text-muted hover:text-gold">Group Dining</Link>
            <Link href="/en/rooms" className="text-text-muted hover:text-gold">Private Rooms</Link>
            <Link href="/en/menu" className="text-text-muted hover:text-gold">Full Menu</Link>
            <Link href="/en/reservation" className="text-text-muted hover:text-gold">How to Book</Link>
            <Link href="/en/faq" className="text-text-muted hover:text-gold">FAQ</Link>
            <Link href="/en#location" className="text-text-muted hover:text-gold">Location section</Link>
          </div>
        </section>
      </main>
      <FooterEn />
      <FixedBottomBarEn />
    </>
  );
}
