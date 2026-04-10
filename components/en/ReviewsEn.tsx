"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithFallback from "@/components/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    title: "Gokiseok Konkuk — Galmaegisal Visit Review",
    excerpt:
      "The meat quality was truly exceptional for a specialist. The thick-cut whole skirt meat melted in your mouth, and the complimentary crab tofu stew was a wonderful surprise.",
    source: "ninamath Blog",
    img: "/images/review-1.jpg",
    href: "https://blog.naver.com/ninamath/224114019728",
  },
  {
    title: "Konkuk Gokiseok — Skirt Meat This Good?",
    excerpt:
      "I honestly didn't expect much from galmaegisal, but this place completely changed my mind. Domestic sourcing, fair prices, great service — already planning my return visit.",
    source: "freemeadow Blog",
    img: "/images/review-2.jpg",
    href: "https://blog.naver.com/freemeadow/224089249357",
  },
  {
    title: "Konkuk Group Dinner Recommendation | Gokiseok Review",
    excerpt:
      "We rented the entire 2nd floor for our team dinner and it was perfect — spacious and comfortable. The skirt meat and crab stew had everyone raving. Highly recommended for groups.",
    source: "844980 Blog",
    img: "/images/review-3.jpg",
    href: "https://blog.naver.com/844980/224081541914",
  },
  {
    title: "Hidden Gem in Gwangjin — Skirt Meat Find 🔥",
    excerpt:
      "Didn't expect to find a skirt meat spot like this near Konkuk. The texture of the whole-cut galmaegisal was incredible. Next time I'm trying the gabrisal too.",
    source: "gnldnjs2215 Blog",
    img: "/images/review-4.jpg",
    href: "https://blog.naver.com/gnldnjs2215/224093430179",
  },
  {
    title: "Konkuk Date Spot — Gokiseok Atmosphere Is Top Tier",
    excerpt:
      "Brought a date here and the vibe was perfect — great food, great ambiance. Incredible value for the quality. Both of us left very impressed.",
    source: "moon_i20 Blog",
    img: "/images/review-5.jpg",
    href: "https://blog.naver.com/moon_i20/224085437738",
  },
];

const PAGE_SIZE = 3;

export default function ReviewsEn() {
  const sectionRef = useRef<HTMLElement>(null);
  const [page, setPage] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(REVIEWS.length / PAGE_SIZE);
  const visibleReviews = REVIEWS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const handleNext = () => { if (page < totalPages - 1) setPage(page + 1); };
  const handlePrev = () => { if (page > 0) setPage(page - 1); };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".review-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!cardsContainerRef.current) return;
    gsap.fromTo(
      cardsContainerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [page]);

  return (
    <section ref={sectionRef} id="reviews" className="bg-bg-section py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Reviews</p>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
              Guest Reviews
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-text-muted text-sm">
              {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, REVIEWS.length)}{" "}
              / {REVIEWS.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={page === 0}
                className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${
                  page === 0
                    ? "border-white/10 text-white/20 cursor-not-allowed"
                    : "border-white/20 text-text-primary hover:border-gold hover:text-gold"
                }`}
                aria-label="Previous"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                disabled={page === totalPages - 1}
                className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${
                  page === totalPages - 1
                    ? "border-white/10 text-white/20 cursor-not-allowed"
                    : "border-gold bg-gold/10 text-gold hover:bg-gold hover:text-bg-base"
                }`}
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleReviews.map((review, i) => (
            <a
              key={`${page}-${i}`}
              href={review.href}
              target="_blank"
              rel="noopener noreferrer"
              className="review-card group block bg-bg-card hover:border-gold/30 border border-transparent transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-bg-base">
                <ImageWithFallback
                  src={review.img}
                  alt={review.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-bg-base/30 group-hover:bg-bg-base/10 transition-colors duration-300" />
              </div>
              <div className="p-5">
                <p className="text-gold text-xs tracking-widest uppercase mb-2">
                  {review.source}
                </p>
                <h3 className="text-text-primary font-semibold text-sm mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300">
                  {review.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed line-clamp-3">
                  {review.excerpt}
                </p>
                <p className="mt-3 text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read on blog →
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`transition-all duration-300 rounded-full ${
                i === page
                  ? "w-6 h-1.5 bg-gold"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
