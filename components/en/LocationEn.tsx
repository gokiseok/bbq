"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationEn() {
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
            Getting Here
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="w-full aspect-[4/3] overflow-hidden bg-bg-card border border-white/5">
            <iframe
              src="https://maps.google.com/maps?q=37.541260,127.070687&z=17&output=embed&hl=en"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Gokiseok map"
            />
          </div>

          <div className="location-content flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <p className="text-gold text-xs tracking-widest uppercase mb-1">Address</p>
              <p className="text-text-primary text-base">
                117-13, Dongil-ro 22-gil, Gwangjin-gu, Seoul
              </p>
              <p className="text-text-muted text-sm">Right in front of Konkuk Univ. Station Exit 2 (across from Konkuk University Medical Center)</p>
            </div>

            <div className="w-full h-px bg-white/5" />

            <div className="flex flex-col gap-1">
              <p className="text-gold text-xs tracking-widest uppercase mb-1">Hours</p>
              <p className="text-text-primary text-base font-medium">
                Daily 17:30 – 21:30
              </p>
            </div>

            <div className="w-full h-px bg-white/5" />

            <div className="flex flex-col gap-1">
              <p className="text-gold text-xs tracking-widest uppercase mb-1">Phone</p>
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
              View on Map →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
