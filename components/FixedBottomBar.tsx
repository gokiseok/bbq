"use client";

const RESERVATION_URL = "https://booking.naver.com/booking/13/bizes/1143527";

export default function FixedBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex h-14 border-t border-white/10 bg-bg-base/95 backdrop-blur-md">
      <a
        href="tel:0507-1433-0614"
        className="flex-1 flex items-center justify-center gap-2 text-text-primary text-sm font-medium border-r border-white/10 hover:bg-white/5 transition-colors"
      >
        <span>📞</span>
        전화하기
      </a>
      <a
        href={RESERVATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-gold text-bg-base text-sm font-bold hover:bg-gold-light transition-colors"
      >
        바로 예약
        <span>→</span>
      </a>
    </div>
  );
}
