"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RESERVATION_URL =
  "https://booking.naver.com/booking/13/bizes/1143527";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // 자막 먼저
      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });

      // 타이틀 — 글자 하나씩
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        tl.from(
          chars,
          {
            opacity: 0,
            y: 60,
            rotateX: -30,
            stagger: 0.08,
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.4"
        );
      }

      // 설명 + CTA
      tl.from(
        [descRef.current, ctaRef.current],
        {
          opacity: 0,
          y: 24,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 타이틀 글자 분리
  const titleChars = "고기석".split("").map((char, i) => (
    <span key={i} className="char inline-block" style={{ perspective: "300px" }}>
      {char}
    </span>
  ));

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* 배경 영상 (파일 있을 때) / 없으면 그라디언트 폴백 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* 다크 오버레이 (그라디언트) */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-base/60 via-bg-base/40 to-bg-base/80" />
      {/* 왼쪽 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-base/70 via-transparent to-transparent" />

      {/* 콘텐츠 */}
      <div className="relative z-10 text-left max-w-7xl mx-auto px-6 w-full">
        <p
          ref={subtitleRef}
          className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium"
        >
          통 갈매기살 전문점
        </p>

        <h1
          ref={titleRef}
          className="font-brand text-[5rem] md:text-[8rem] lg:text-[10rem] text-text-primary leading-none mb-6 tracking-tight"
          style={{ perspective: "600px" }}
        >
          {titleChars}
        </h1>

        <p
          ref={descRef}
          className="text-text-muted text-base md:text-lg max-w-md mb-10 leading-relaxed"
        >
          신선함이 맛을 만들고,
          <br />
          손질이 깊이를 더합니다.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-bg-base font-semibold text-base tracking-wide hover:bg-gold-light transition-all duration-300 hover:gap-4"
          >
            지금 바로 예약하기
            <span className="text-lg">→</span>
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-text-primary text-base tracking-wide hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            메뉴 보기
          </a>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent animate-pulse" />
      </div>
    </section>
  );
}
