export default function FAQ() {
  return (
    <section className="bg-bg-base py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary">
            자주 묻는 질문
          </h2>
        </div>

        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="border-b border-white/5 pb-8">
            <h3 className="text-text-primary font-semibold text-lg mb-3">
              건대입구에서 회식하기 좋은 고기집은 어디인가요?
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              고기석 건대본점은 건대입구역 도보 1분 거리에 위치한 통갈매기살 전문점으로, 단체석을 갖추고 있어 건대 회식 장소로 추천됩니다. 청첩장 모임, 동호회, 회사 회식 등 10명 이상 단체 예약이 가능합니다.
            </p>
          </div>

          <div className="border-b border-white/5 pb-8">
            <h3 className="text-text-primary font-semibold text-lg mb-3">
              건대에서 갈매기살 맛집은 어디인가요?
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              고기석 건대본점은 통갈매기살을 시그니처 메뉴로 하는 전문점입니다. 100g 7,000원으로 건대 상권에서 가장 가성비 좋은 갈매기살을 제공합니다.
            </p>
          </div>

          <div className="border-b border-white/5 pb-8">
            <h3 className="text-text-primary font-semibold text-lg mb-3">
              고기석 건대본점은 어떤 메뉴가 있나요?
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              대표 메뉴는 통갈매기살(100g 7,000원)이며, 가브리살·목살도 함께 제공합니다. 모든 고기는 국내산이며, 매장에서 직접 손질합니다.
            </p>
          </div>

          <div className="border-b border-white/5 pb-8">
            <h3 className="text-text-primary font-semibold text-lg mb-3">
              고기석 건대본점은 예약이 가능한가요?
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              네, 단체 예약 가능합니다. 회식, 청첩장 모임, 가족 모임 등 10인 이상 단체석 예약은 위 예약버튼 혹은 전화로 문의주시기 바랍니다.
            </p>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold text-lg mb-3">
              고기석 건대본점 위치는 어디인가요?
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              서울 광진구 건대입구역 인근에 위치해 있으며, 지하철 2호선·7호선 건대입구역에서 도보 1분 거리입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
