"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithFallback from "@/components/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 이미지 scale reveal
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.92,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // 텍스트 블록 stagger
      gsap.from(textRef.current?.children ?? [], {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-bg-base py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* 이미지 */}
          <div
            ref={imageRef}
            className="relative aspect-[4/5] w-full overflow-hidden bg-bg-card"
          >
            <ImageWithFallback
              src="/images/about.jpg"
              alt="고기석 갈매기살"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* 골드 라인 장식 */}
            <div className="absolute top-4 left-4 w-16 h-px bg-gold" />
            <div className="absolute top-4 left-4 w-px h-16 bg-gold" />
            <div className="absolute bottom-4 right-4 w-16 h-px bg-gold" />
            <div className="absolute bottom-4 right-4 w-px h-16 bg-gold" />
          </div>

          {/* 텍스트 */}
          <div ref={textRef} className="flex flex-col gap-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase">
              About
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-bold leading-tight">
              갈매기살은,
              <br />
              <span className="text-gold">갈매기살 전문점</span>에서
              <br />
              드셔야 합니다.
            </h2>

            <div className="w-12 h-px bg-gold/40" />

            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              고기석은 100% 국내산 갈매기살만을 사용합니다.
              매일 아침 신선하게 손질된 고기를 당일 소진합니다.
              저온 숙성과 정밀한 손질로 갈매기살 본연의 깊은 맛을 살립니다.
            </p>

            <p className="text-text-muted text-base leading-relaxed">
              첫 주문 시 모든 고객분께{" "}
              <span className="text-gold font-medium">
                얼큰 꽃게 순두부전골(9,000원 상당)
              </span>
              을 무료로 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gold" />
                <div>
                  <p className="text-text-primary font-semibold text-sm">100% 국내산</p>
                  <p className="text-text-muted text-xs">신선 당일 손질</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gold" />
                <div>
                  <p className="text-text-primary font-semibold text-sm">7,000원 / 100g</p>
                  <p className="text-text-muted text-xs">합리적인 가격</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gold" />
                <div>
                  <p className="text-text-primary font-semibold text-sm">무료 꽃게전골</p>
                  <p className="text-text-muted text-xs">첫 방문 증정</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
