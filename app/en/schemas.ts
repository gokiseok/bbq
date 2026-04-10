export const restaurantSchemaEn = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Gokiseok Konkuk Main Branch",
  alternateName: ["고기석 건대본점", "고기석", "Gokiseok"],
  description:
    "Korean BBQ pork skirt meat (galmaegisal) specialist near Konkuk University Station, Seoul. Ideal for group dinners, company dining, and private events.",
  image: ["https://bbq.gokiseok.com/og-image.jpg"],
  url: "https://bbq.gokiseok.com/en",
  telephone: "+82-507-1433-0614",
  priceRange: "$$",
  servesCuisine: ["Korean BBQ", "한식", "고기구이"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "117-13, Dongil-ro 22-gil",
    addressLocality: "Gwangjin-gu",
    addressRegion: "Seoul",
    postalCode: "05017",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.54126,
    longitude: 127.070687,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "17:30",
      closes: "21:30",
    },
  ],
  menu: "https://bbq.gokiseok.com/en#menu",
  acceptsReservations: "True",
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: {
      "@type": "MenuSection",
      name: "Signature Menu",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "Whole Skirt Meat (Galmaegisal)",
          description: "Gokiseok signature dish — 100% domestic Korean pork skirt meat, ₩7,000/100g",
          offers: { "@type": "Offer", price: "7000", priceCurrency: "KRW" },
        },
        {
          "@type": "MenuItem",
          name: "Pork Collar (Gabrisal)",
          offers: { "@type": "Offer", price: "10000", priceCurrency: "KRW" },
        },
        {
          "@type": "MenuItem",
          name: "Pork Neck (Moksal)",
          offers: { "@type": "Offer", price: "10000", priceCurrency: "KRW" },
        },
      ],
    },
  },
  sameAs: [
    "https://bbq.gokiseok.com/",
    "https://map.naver.com/p/search/고기석%20건대본점",
    "https://www.instagram.com/gokiseok/",
  ],
};

export const faqSchemaEn = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is the best Korean BBQ near Konkuk University?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gokiseok Konkuk Main Branch is a Korean pork skirt meat (galmaegisal) specialist located just 1 minute on foot from Konkuk University Station Exit 2. With private group seating and a dedicated 2nd floor, it is widely recommended as the top Korean BBQ spot near Konkuk for company dinners, club gatherings, and special occasions.",
      },
    },
    {
      "@type": "Question",
      name: "What is galmaegisal (skirt meat)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Galmaegisal is a premium cut of pork — the diaphragm skirt — known for its deep, rich flavor and tender texture. At Gokiseok, it is sourced 100% domestically, hand-trimmed fresh each morning, and served the same day.",
      },
    },
    {
      "@type": "Question",
      name: "What are the signature menu items?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The signature dish is Whole Skirt Meat (통갈매기살) at ₩7,000 per 100g. Other popular cuts include Pork Collar (가브리살) and Pork Neck (목살). On your first order, all guests receive a complimentary Spicy Crab Tofu Stew worth ₩9,000.",
      },
    },
    {
      "@type": "Question",
      name: "Can I make a group reservation at Gokiseok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, group reservations are available. For parties of 10 or more, you can reserve via the booking button on this page or by calling directly. The entire 2nd floor can be rented exclusively for up to 32 guests.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get to Gokiseok Konkuk Main Branch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gokiseok is located in Gwangjin-gu, Seoul, just a 1-minute walk from Konkuk University Station (Seoul Metro Lines 2 & 7), Exit 2. Address: 117-13, Dongil-ro 22-gil, Gwangjin-gu, Seoul.",
      },
    },
  ],
};
