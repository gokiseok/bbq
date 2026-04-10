"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithFallback from "@/components/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

const RESERVATION_URL = "https://booking.naver.com/booking/6/bizes/1095878";

export default function ReservationCTAEn() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children ?? [], {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 1,
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
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/images/reservation-bg.jpg"
          alt="Gokiseok reservation"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg-base/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base/90 via-bg-base/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div ref={contentRef} className="max-w-2xl flex flex-col gap-6">
          <p className="text-gold text-xs tracking-[0.3em] uppercase">
            Reservation
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight">
            Book your table
            <br />
            <span className="text-gold">for tonight.</span>
          </h2>

          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            Group dinners · Dates · Wedding party gatherings
            <br />
            Reserve easily via Naver Booking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-bg-base font-bold text-base tracking-wide hover:bg-gold-light transition-all duration-300 hover:gap-4"
            >
              Reserve via Naver
              <span className="text-xl">→</span>
            </a>
            <a
              href="tel:0507-1433-0614"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/30 text-text-primary text-base tracking-wide hover:border-gold/60 hover:text-gold transition-all duration-300"
            >
              📞 0507-1433-0614
            </a>
          </div>

          <div className="flex gap-6 pt-2">
            <div>
              <p className="text-text-muted text-xs mb-1">Hours</p>
              <p className="text-text-primary text-sm font-medium">Daily 17:30 – 21:30</p>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <p className="text-text-muted text-xs mb-1">Location</p>
              <p className="text-text-primary text-sm font-medium">Right in front of Konkuk Univ. Station Exit 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
