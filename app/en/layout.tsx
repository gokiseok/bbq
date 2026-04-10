import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Gokiseok Konkuk Main Branch — Korean BBQ Skirt Meat Specialist | Konkuk Group Dining",
  description:
    "Gokiseok Konkuk Main Branch: Seoul's top Korean BBQ pork skirt meat (galmaegisal) specialist near Konkuk University Station. Group dinners, private floor rentals, fresh domestic pork. ₩7,000/100g.",
  keywords: "Korean BBQ Konkuk, galmaegisal, skirt meat Seoul, Konkuk restaurant, group dining Seoul, Gokiseok",
  openGraph: {
    title: "Gokiseok Konkuk Main Branch — Korean BBQ Skirt Meat Specialist",
    description: "Best Korean BBQ near Konkuk University. Whole skirt meat ₩7,000/100g. Group reservations available.",
    type: "website",
    url: "https://bbq.gokiseok.com/en",
    images: [{ url: "https://bbq.gokiseok.com/og-image.jpg" }],
    locale: "en_US",
  },
  alternates: {
    canonical: "https://bbq.gokiseok.com/en",
    languages: {
      ko: "https://bbq.gokiseok.com/",
      en: "https://bbq.gokiseok.com/en",
      "x-default": "https://bbq.gokiseok.com/",
    },
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
