export default function ExperienceStrip() {
  return (
    <section className="bg-gradient-to-r from-primary to-accent text-[#3b1a00]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 animate-slide-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-2xl">
            🔯
          </div>
          <div>
            <p className="font-semibold text-sm">Get Your Divine Experience</p>
            <p className="text-[11px] md:text-xs">
              Kundli, Katha booking, gemstones & more – guided personally by
              Astro Gopala Ji.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-4 animate-slide-right">
          <p className="rounded-full bg-white/20 px-3 py-1 text-[11px]">
            Next Online Session: <strong>Tonight 8:00 PM</strong>
          </p>
          <button className="rounded-full bg-[#3b1a00] px-4 py-1 text-[11px] font-semibold text-amber-200 shadow-md">
            Reserve My Spot
          </button>
        </div>
      </div>
    </section>
  );
}
