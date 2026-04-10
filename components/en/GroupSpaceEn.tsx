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
    label: "Small",
    desc: "Cozy setting perfect for team dinners and family gatherings",
    img: "/images/space-10.png",
  },
  {
    seats: "14",
    label: "Medium",
    desc: "Ideal for club events and department outings",
    img: "/images/space-14.png",
  },
  {
    seats: "32",
    label: "Full Buyout",
    desc: "Exclusive 2nd floor rental for private group events",
    img: "/images/space-32.png",
  },
];

export default function GroupSpaceEn() {
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
        <div className="space-header mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Group &amp; Private
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
                Group Dining &amp; Buyout
              </h2>
              <p className="text-text-muted text-base max-w-lg">
                Reserve the private 2nd floor for an exclusive group experience.
                Up to 32 guests accommodated.
              </p>
            </div>
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold text-sm font-semibold tracking-wide hover:bg-gold hover:text-bg-base transition-all duration-300 self-start md:self-auto whitespace-nowrap"
            >
              Group Reservation
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {SPACES.map((space) => (
            <div
              key={space.seats}
              className="space-card group relative overflow-hidden bg-bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={space.img}
                  alt={`${space.seats}-seat section`}
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
                    <span className="text-lg font-normal ml-1">seats</span>
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-text-muted text-sm leading-relaxed">{space.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Real Cases</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                img: "/images/danche-1.png",
                tag: "Company Dinner",
                desc: "A special evening that builds team spirit",
              },
              {
                img: "/images/danche-2.png",
                tag: "Club & Alumni Events",
                desc: "A space to share memories that last",
              },
            ].map((item) => (
              <div key={item.tag} className="space-card group relative overflow-hidden bg-bg-card">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <ImageWithFallback
                    src={item.img}
                    alt={item.tag}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-base/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-gold text-bg-base text-xs font-semibold tracking-wide mb-2">
                      {item.tag}
                    </span>
                    <p className="text-text-primary text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden bg-bg-card border border-gold/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-4xl">🏢</div>
            <div>
              <p className="text-text-primary font-bold text-xl mb-1">
                2nd Floor Full Buyout Available
              </p>
              <p className="text-text-muted text-sm">
                Corporate events, reunions, birthday parties &amp; more
              </p>
            </div>
          </div>
          <a
            href="tel:0507-1433-0614"
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-gold text-bg-base font-semibold tracking-wide hover:bg-gold-light transition-colors duration-300"
          >
            📞 Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
