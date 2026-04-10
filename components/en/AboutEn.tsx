"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithFallback from "@/components/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

export default function AboutEn() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <section ref={sectionRef} id="about" className="bg-bg-base py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
            ref={imageRef}
            className="relative aspect-[4/5] w-full overflow-hidden bg-bg-card"
          >
            <ImageWithFallback
              src="/images/about.jpg"
              alt="Gokiseok galmaegisal skirt meat"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 w-16 h-px bg-gold" />
            <div className="absolute top-4 left-4 w-px h-16 bg-gold" />
            <div className="absolute bottom-4 right-4 w-16 h-px bg-gold" />
            <div className="absolute bottom-4 right-4 w-px h-16 bg-gold" />
          </div>

          <div ref={textRef} className="flex flex-col gap-6">
            <p className="text-gold text-xs tracking-[0.3em] uppercase">About</p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-text-primary font-bold leading-tight">
              Galmaegisal is best
              <br />
              at a{" "}
              <span className="text-gold">specialist.</span>
            </h2>

            <div className="w-12 h-px bg-gold/40" />

            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Gokiseok uses only 100% domestically-sourced Korean pork skirt meat (galmaegisal).
              Each cut is freshly hand-trimmed every morning and served the same day.
              Slow aging and precise preparation bring out the deep, rich flavor galmaegisal is known for.
            </p>

            <p className="text-text-muted text-base leading-relaxed">
              On your first order, every guest receives a complimentary{" "}
              <span className="text-gold font-medium">
                Spicy Crab Tofu Stew (worth ₩9,000)
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gold" />
                <div>
                  <p className="text-text-primary font-semibold text-sm">100% Domestic</p>
                  <p className="text-text-muted text-xs">Fresh, same-day prep</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gold" />
                <div>
                  <p className="text-text-primary font-semibold text-sm">₩7,000 / 100g</p>
                  <p className="text-text-muted text-xs">Best value in the area</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gold" />
                <div>
                  <p className="text-text-primary font-semibold text-sm">Free Crab Stew</p>
                  <p className="text-text-muted text-xs">First visit gift</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
