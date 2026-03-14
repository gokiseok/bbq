"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "소개", href: "#about" },
  { label: "메뉴", href: "#menu" },
  { label: "단체회식", href: "#space" },
  { label: "후기", href: "#reviews" },
  { label: "오시는 길", href: "#location" },
];

const RESERVATION_URL =
  "https://booking.naver.com/booking/6/bizes/1095878";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-base/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="font-brand text-2xl text-text-primary tracking-wider">
          고기석
        </Link>

        {/* 데스크탑 Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 예약 CTA */}
        <a
          href={RESERVATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-gold text-bg-base text-sm font-semibold tracking-wide rounded-sm hover:bg-gold-light transition-colors duration-300"
        >
          지금 예약
        </a>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-96 pb-4" : "max-h-0"
        } bg-bg-base/95 backdrop-blur-md`}
      >
        <nav className="flex flex-col px-6 pt-2 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-text-muted hover:text-text-primary transition-colors py-1 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center py-3 bg-gold text-bg-base font-semibold tracking-wide rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            지금 예약하기
          </a>
        </nav>
      </div>
    </header>
  );
}
