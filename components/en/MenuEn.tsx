"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithFallback from "@/components/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_MENU = [
  {
    name: "Whole Skirt Meat (Galmaegisal)",
    tag: "BEST",
    price: "28,000",
    unit: "₩ (400g plate)",
    desc: "100% Korean pork skirt meat. Served whole and thick to preserve all the juices and texture.",
    img: "/images/menu-galmaegi.png",
  },
  {
    name: "Pork Collar (Gabrisal)",
    tag: "",
    price: "39,000",
    unit: "₩ (400g plate)",
    desc: "Tender grain with rich marbling. Shines brilliantly over charcoal flame.",
    img: "/images/menu-gabrisal.png",
  },
  {
    name: "Pork Neck (Moksal)",
    tag: "",
    price: "35,000",
    unit: "₩ (400g plate)",
    desc: "Domestic pork neck. The more you chew, the deeper the flavor — a Gokiseok classic.",
    img: "/images/menu-moksal.png",
  },
  {
    name: "Spicy Crab Tofu Stew",
    tag: "FREE",
    price: "9,000",
    unit: "₩ (free on first visit)",
    desc: "Bold, refreshing broth. Complimentary for all first-time guests.",
    img: "/images/menu-jjigae.jpg",
  },
];

const ALL_MENU = {
  Meat: [
    { name: "Whole Skirt Meat (Galmaegisal)", price: "28,000 / 14,000", note: "400g plate / 200g half" },
    { name: "Pork Collar (Gabrisal)", price: "39,000 / 20,000", note: "400g plate / 200g half" },
    { name: "Pork Neck (Moksal)", price: "35,000 / 18,000", note: "400g plate / 200g half" },
    { name: "Seasoned Pork Skin", price: "5,000", note: "" },
  ],
  "Rice & Sides": [
    { name: "Cheese Bomb Egg Custard", price: "5,000", note: "" },
    { name: "Gokiseok Bibim Noodles", price: "5,000", note: "" },
    { name: "Spicy Crab Tofu Stew", price: "9,000", note: "Free on first visit" },
    { name: "Steamed Rice", price: "1,000", note: "" },
  ],
  "Drinks": [
    { name: "Soju", price: "5,000", note: "" },
    { name: "Beer", price: "6,000", note: "" },
  ],
};

export default function MenuEn() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".menu-card", {
        opacity: 0,
        y: 50,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".menu-section-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="menu" className="bg-bg-section py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="menu-section-title mb-16 md:mb-24">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Menu</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
              Signature Menu
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-sm">
              🎁 Free Crab Tofu Stew on your <strong>first order</strong>
            </div>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24"
        >
          {FEATURED_MENU.map((item) => (
            <div
              key={item.name}
              className="menu-card group relative bg-bg-card overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-bg-base">
                <ImageWithFallback
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-bg-base/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <p className="text-text-muted text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    {item.desc}
                  </p>
                </div>
                {item.tag && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-gold text-bg-base text-xs font-bold tracking-wide">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-text-primary font-semibold text-base mb-1">
                  {item.name}
                </h3>
                <p className="text-gold text-sm">
                  {item.price}
                  <span className="text-text-muted text-xs ml-1">{item.unit}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-white/10 p-8 md:p-12">
          <h3 className="text-xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Full Menu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {Object.entries(ALL_MENU).map(([category, items]) => (
              <div key={category}>
                <p className="text-gold text-xs tracking-widest uppercase mb-4">
                  {category}
                </p>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-start border-b border-white/5 pb-3"
                    >
                      <div>
                        <span className="text-text-primary text-sm">{item.name}</span>
                        {item.note && (
                          <span className="block text-text-muted text-xs mt-0.5">{item.note}</span>
                        )}
                      </div>
                      <span className="text-text-muted text-xs whitespace-nowrap ml-4 pt-0.5">
                        ₩{item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-xs mt-8">
            * Meat prices listed as: 400g plate / 200g half plate. Prices subject to change.
          </p>
        </div>
      </div>
    </section>
  );
}
