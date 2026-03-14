"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithFallback from "@/components/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";

const SPACES = [
  {
    seats: "10",
    label: "소규모",
    desc: "팀 회식, 가족 모임에 딱 맞는 아늑한 공간",
    img: "/images/space-10.jpg",
  },
  {
    seats: "14",
    label: "중규모",
    desc: "동아리, 부서 회식 등 중간 규모 모임",
    img: "/images/space-14.jpg",
  },
  {
    seats: "32",
    label: "단독 대관",
    desc: "2층 전체 대관. 프라이빗한 단체 행사",
    img: "/images/space-32.jpg",
  },
];

export default function GroupSpace() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".space-card", {
        opacity: 0,
        scale: 0.94,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".space-header > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="space" className="bg-bg-base py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* 헤더 */}
        <div className="space-header mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Group & Private
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
                단체 회식 &amp; 대관
              </h2>
              <p className="text-text-muted text-base max-w-lg">
                2층 단독 대관으로 프라이빗한 모임을 즐겨보세요.
                최대 32인까지 수용 가능합니다.
              </p>
            </div>
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold text-sm font-semibold tracking-wide hover:bg-gold hover:text-bg-base transition-all duration-300 self-start md:self-auto whitespace-nowrap"
            >
              단체·대관 예약
              <span>→</span>
            </a>
          </div>
        </div>

        {/* 공간 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {SPACES.map((space) => (
            <div
              key={space.seats}
              className="space-card group relative overflow-hidden bg-bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={space.img}
                  alt={`${space.seats}인석`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-gold text-xs tracking-widest uppercase mb-1">
                    {space.label}
                  </p>
                  <p className="text-text-primary text-3xl font-bold">
                    {space.seats}
                    <span className="text-lg font-normal ml-1">인석</span>
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-text-muted text-sm leading-relaxed">{space.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 배너 */}
        <div className="relative overflow-hidden bg-bg-card border border-gold/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-4xl">🏢</div>
            <div>
              <p className="text-text-primary font-bold text-xl mb-1">
                2층 단독 대관 가능
              </p>
              <p className="text-text-muted text-sm">
                기업 행사, 동문회, 생일파티 등 다양한 단체 모임
              </p>
            </div>
          </div>
          <a
            href={`tel:0507-1433-0614`}
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-gold text-bg-base font-semibold tracking-wide hover:bg-gold-light transition-colors duration-300"
          >
            📞 전화 문의
          </a>
        </div>
      </div>
    </section>
  );
}
