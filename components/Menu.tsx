"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithFallback from "@/components/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_MENU = [
  {
    name: "통 갈매기살",
    tag: "BEST",
    price: "28,000",
    unit: "원 (한판 400g)",
    desc: "100% 국내산 돼지 갈매기살. 두툼하게 통으로 제공해 육즙과 식감이 살아있습니다.",
    img: "/images/menu-galmaegi.png",
  },
  {
    name: "가브리살",
    tag: "",
    price: "39,000",
    unit: "원 (한판 400g)",
    desc: "부드러운 결과 풍부한 마블링. 불 위에서 더욱 빛나는 가브리살.",
    img: "/images/menu-gabrisal.png",
  },
  {
    name: "목살",
    tag: "",
    price: "35,000",
    unit: "원 (한판 400g)",
    desc: "국내산 돼지 목살. 씹을수록 깊은 맛이 우러나는 고기석의 정석.",
    img: "/images/menu-moksal.png",
  },
  {
    name: "꽃게 순두부전골",
    tag: "무료",
    price: "9,000",
    unit: "원 (첫 방문 무료)",
    desc: "얼큰하고 시원한 국물. 첫 방문 고객 모두에게 무료로 제공합니다.",
    img: "/images/menu-jjigae.jpg",
  },
];

const ALL_MENU = {
  고기: [
    { name: "통 갈매기살", price: "28,000 / 14,000", note: "한판(400g) / 반판(200g)" },
    { name: "가브리살", price: "39,000 / 20,000", note: "한판(400g) / 반판(200g)" },
    { name: "목살", price: "35,000 / 18,000", note: "한판(400g) / 반판(200g)" },
    { name: "벌집 양념 돼지껍데기", price: "5,000", note: "" },
  ],
  식사: [
    { name: "치즈 폭탄 계란찜", price: "5,000", note: "" },
    { name: "고기석 비빔국수", price: "5,000", note: "" },
    { name: "얼큰 꽃게 순두부전골", price: "9,000", note: "첫 방문 무료" },
    { name: "공기밥", price: "1,000", note: "" },
  ],
  "주류·음료": [
    { name: "소주", price: "5,000", note: "" },
    { name: "맥주", price: "6,000", note: "" },
  ],
};

export default function Menu() {
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
        {/* 헤더 */}
        <div className="menu-section-title mb-16 md:mb-24">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Menu</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
              대표 메뉴
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold text-sm">
              🎁 첫 주문 시 꽃게 순두부전골 <strong>무료</strong> 증정
            </div>
          </div>
        </div>

        {/* 대표 메뉴 카드 */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24"
        >
          {FEATURED_MENU.map((item) => (
            <div
              key={item.name}
              className="menu-card group relative bg-bg-card overflow-hidden cursor-pointer"
            >
              {/* 이미지 */}
              <div className="relative aspect-[3/4] overflow-hidden bg-bg-base">
                <ImageWithFallback
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-bg-base/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <p className="text-text-muted text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    {item.desc}
                  </p>
                </div>
                {/* 태그 */}
                {item.tag && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-gold text-bg-base text-xs font-bold tracking-wide">
                    {item.tag}
                  </div>
                )}
              </div>
              {/* 정보 */}
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

        {/* 전체 메뉴판 */}
        <div className="border border-white/10 p-8 md:p-12">
          <h3 className="text-xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            전체 메뉴
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
                        {item.price}원
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-xs mt-8">
            * 고기 메뉴 가격: 한판(400g) / 반판(200g) 순. 가격은 변동될 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
