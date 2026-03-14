export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-brand text-xl text-text-primary mb-1">
              고기석
            </p>
            <p className="text-text-muted text-xs leading-relaxed">
              주식회사 오삼일 | 대표 신금순 | 사업자등록번호 453-85-02359
              <br />
              서울 광진구 동일로22길 117-13 | 0507-1433-0614
            </p>
          </div>

          <div className="text-text-muted text-xs">
            <p>© 2026 고기석. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
