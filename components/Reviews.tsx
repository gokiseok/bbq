"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageWithFallback from "@/components/ImageWithFallback";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    title: "건대 갈매기살 맛집 고기석 방문 후기",
    excerpt:
      "갈매기살 전문점답게 고기 퀄리티가 정말 남달랐어요. 두툼하게 잘려 나오는 통갈매기살이 입에서 살살 녹았고, 꽃게 순두부전골까지 무료로 주셔서 너무 감동이었습니다.",
    source: "니나매쓰 블로그",
    img: "/images/review-1.jpg",
    href: "https://blog.naver.com/ninamath/224114019728",
  },
  {
    title: "건대입구 고기석 — 갈매기살이 이렇게 맛있다고?",
    excerpt:
      "갈매기살은 사실 크게 기대 안 했는데 완전 기대 이상이었어요. 국내산에 가격도 착하고 서비스도 좋아서 벌써 재방문 계획 중입니다.",
    source: "프리메도우 블로그",
    img: "/images/review-2.jpg",
    href: "https://blog.naver.com/freemeadow/224089249357",
  },
  {
    title: "건대 회식 장소 추천 | 고기석 단체 방문 후기",
    excerpt:
      "팀 회식으로 2층 단독 대관 했는데 정말 쾌적하고 좋았어요. 갈매기살도 맛있고 꽃게전골까지 챙겨 주셔서 다들 만족도 최고였습니다.",
    source: "844980 블로그",
    img: "/images/review-3.jpg",
    href: "https://blog.naver.com/844980/224081541914",
  },
  {
    title: "광진구 갈매기살 맛집 발굴 성공 🔥",
    excerpt:
      "건대 쪽에서 이런 갈매기살 맛집이 있을 줄 몰랐어요. 통으로 나오는 갈매기살의 식감이 정말 좋았고, 다음엔 가브리살도 꼭 먹어볼 예정입니다.",
    source: "gnldnjs2215 블로그",
    img: "/images/review-4.jpg",
    href: "https://blog.naver.com/gnldnjs2215/224093430179",
  },
  {
    title: "건대 소개팅 장소 추천 — 고기석 분위기 최고",
    excerpt:
      "소개팅 장소로 데려갔는데 분위기도 좋고 음식도 맛있어서 상대방도 너무 좋아했어요. 가격 대비 만족도가 정말 높은 곳입니다.",
    source: "문아이20 블로그",
    img: "/images/review-5.jpg",
    href: "https://blog.naver.com/moon_i20/224085437738",
  },
];

const PAGE_SIZE = 3;

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const [page, setPage] = useState(0); // 0: 1~3번, 1: 4~5번
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(REVIEWS.length / PAGE_SIZE);
  const visibleReviews = REVIEWS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };
  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

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

  // 페이지 전환 시 카드 애니메이션
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
        {/* 헤더 */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Reviews</p>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
              고객 후기
            </h2>
          </div>

          {/* 페이지 내비게이션 */}
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
                aria-label="이전"
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
                aria-label="다음"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* 카드 그리드 */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleReviews.map((review, i) => (
            <a
              key={`${page}-${i}`}
              href={review.href}
              target="_blank"
              rel="noopener noreferrer"
              className="review-card group block bg-bg-card hover:border-gold/30 border border-transparent transition-all duration-300"
            >
              {/* 이미지 */}
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
              {/* 텍스트 */}
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
                  블로그에서 보기 →
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* 하단 페이지 점 인디케이터 */}
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
              aria-label={`${i + 1}페이지`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
