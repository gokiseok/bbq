"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type DropdownItem = { label: string; href: string; desc?: string };
type NavItem =
  | { label: string; href: string; type?: "link" }
  | { label: string; type: "dropdown"; items: DropdownItem[] };

const NAV_LINKS: NavItem[] = [
  { label: "메뉴", href: "/menu" },
  {
    label: "상황별",
    type: "dropdown",
    items: [
      { label: "단체회식", href: "/group-dining", desc: "회사·동문회·부서 회식" },
      { label: "단체룸 상세", href: "/rooms", desc: "10·14·32인 룸 안내" },
      { label: "청첩장 모임", href: "/wedding-meet", desc: "친구·동료 청첩장" },
      { label: "데이트·소개팅", href: "/date", desc: "2인 셀프 그릴 데이트" },
    ],
  },
  { label: "오시는 길", href: "/access" },
];

const RESERVATION_URL =
  "https://booking.naver.com/booking/6/bizes/1095878";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!openDropdown) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenDropdown(null);
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, [openDropdown]);

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
          {NAV_LINKS.map((link) => {
            if (link.type === "dropdown") {
              const isOpen = openDropdown === link.label;
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                    className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-text-primary transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                    <span className={`text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▾</span>
                  </button>
                  <div
                    role="menu"
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[240px] bg-bg-base/95 backdrop-blur-md border border-white/10 shadow-xl py-2 transition-all duration-200 ${
                      isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                    }`}
                  >
                    {link.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-5 py-3 hover:bg-white/5 transition-colors"
                      >
                        <p className="text-sm text-text-primary font-medium">{item.label}</p>
                        {item.desc && (
                          <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-text-primary transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* 언어 전환 + 예약 CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/en"
            className="text-xs text-text-muted hover:text-gold transition-colors duration-300 tracking-widest border border-white/10 hover:border-gold/40 px-2.5 py-1"
          >
            EN
          </Link>
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-gold text-bg-base text-sm font-semibold tracking-wide rounded-sm hover:bg-gold-light transition-colors duration-300"
          >
            지금 예약
          </a>
        </div>

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
          menuOpen ? "max-h-[600px] pb-4" : "max-h-0"
        } bg-bg-base/95 backdrop-blur-md`}
      >
        <nav className="flex flex-col px-6 pt-2 gap-1">
          {NAV_LINKS.map((link) => {
            if (link.type === "dropdown") {
              return (
                <div key={link.label} className="border-b border-white/5 py-2">
                  <p className="text-xs text-gold tracking-widest uppercase mb-2">
                    {link.label}
                  </p>
                  <div className="flex flex-col gap-1 pl-2">
                    {link.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-base text-text-muted hover:text-text-primary transition-colors py-1.5"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-text-muted hover:text-text-primary transition-colors py-2 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-center py-3 bg-gold text-bg-base font-semibold tracking-wide rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            지금 예약하기
          </a>
        </nav>
      </div>
    </header>
  );
}
