"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Stat = {
  value: number;
  unit: string;
  label: string;
  sublabel: string;
  format?: (v: number) => string;
};

const STATS: Stat[] = [
  {
    value: 100,
    unit: "%",
    label: "Domestic",
    sublabel: "100% Korean-sourced fresh pork",
  },
  {
    value: 7000,
    unit: "₩",
    label: "/ 100g",
    sublabel: "Best-value skirt meat in Konkuk",
    format: (v: number) => v.toLocaleString("en-US"),
  },
  {
    value: 0,
    unit: "₩",
    label: "Free Gift",
    sublabel: "Spicy crab tofu stew on your first visit",
  },
];

export default function StatsBarEn() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      STATS.forEach((stat, i) => {
        const el = numbersRef.current[i];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: function () {
            const current = Math.round(obj.val);
            el.textContent = stat.format ? stat.format(current) : String(current);
          },
        });
      });

      gsap.from(".stat-item", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
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
    <section ref={sectionRef} className="bg-bg-card border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="stat-item bg-bg-card px-8 py-10 flex flex-col items-center text-center"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  ref={(el) => { numbersRef.current[i] = el; }}
                  className="text-5xl md:text-6xl font-bold text-text-primary tabular-nums"
                >
                  {stat.format ? stat.format(0) : "0"}
                </span>
                <span className="text-gold text-xl font-medium">{stat.unit}</span>
              </div>
              <p className="text-gold text-sm tracking-widest uppercase mb-2">
                {stat.label}
              </p>
              <p className="text-text-muted text-sm">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
