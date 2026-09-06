export default function Footer() {
  return (
    <footer className="bg-ink text-white/40 py-8 px-5 md:px-8 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="font-semibold text-white/60 tracking-tight">
          THE AI DESIGN WORKFLOW
        </div>
        <div className="text-white/30">
          Field Guide — Edition One · 29-page digital PDF
        </div>
        <div className="text-white/30">
          © 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
