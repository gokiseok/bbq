"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".location-content > *", {
        opacity: 0,
        y: 30,
        stagger: 0.12,
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
    <section ref={sectionRef} id="location" className="bg-bg-base py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Location</p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            오시는 길
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* 지도 */}
          <div className="w-full aspect-[4/3] overflow-hidden bg-bg-card border border-white/5">
            <iframe
              src="https://maps.google.com/maps?q=37.54092,127.07123&z=17&output=embed&hl=ko"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="고기석 지도"
            />
          </div>

          {/* 정보 */}
          <div className="location-content flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <p className="text-gold text-xs tracking-widest uppercase mb-1">주소</p>
              <p className="text-text-primary text-base">
                서울 광진구 동일로22길 117-13
              </p>
              <p className="text-text-muted text-sm">건대입구역 2번 출구 바로 앞 (건대병원 맞은편)</p>
            </div>

            <div className="w-full h-px bg-white/5" />

            <div className="flex flex-col gap-1">
              <p className="text-gold text-xs tracking-widest uppercase mb-1">영업시간</p>
              <p className="text-text-primary text-base font-medium">
                매일 17:30 – 21:30
              </p>
            </div>

            <div className="w-full h-px bg-white/5" />

            <div className="flex flex-col gap-1">
              <p className="text-gold text-xs tracking-widest uppercase mb-1">전화</p>
              <a
                href="tel:0507-1433-0614"
                className="text-text-primary text-base hover:text-gold transition-colors duration-300 w-fit"
              >
                0507-1433-0614
              </a>
            </div>

            <div className="w-full h-px bg-white/5" />

            <a
              href="https://naver.me/5mIWObsv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-bg-base font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors duration-300 w-full sm:w-auto"
            >
              지도에서 보기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
