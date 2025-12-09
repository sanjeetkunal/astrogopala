export default function GuruSection() {
  return (
    <section id="guru" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center">
        {/* image side */}
        <div className="flex justify-center animate-slide-left">
          <div className="relative h-80 w-60 overflow-hidden rounded-3xl border border-primary/40 bg-[url('/images/guru.jpg')] bg-cover bg-center shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold text-secondary">
              5★ Rated Spiritual Guide
            </span>
            <div className="absolute bottom-3 left-3 text-[11px] text-cream">
              <p className="font-semibold text-accent">Astro Gopala Ji</p>
              <p>Vedic Astrologer & Bhagawat Katha Vachak</p>
            </div>
          </div>
        </div>

        {/* content side */}
        <div className="animate-slide-right">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">
            About Our Guru
          </p>
          <h2 className="mt-2 font-heading text-2xl md:text-3xl text-secondary">
            A Compassionate Guide on Your Spiritual & Life Journey
          </h2>
          <p className="mt-3 text-xs md:text-sm text-slate-700 leading-relaxed">
            Gopala Ji blends deep scriptural wisdom with practical
            understanding of modern life. From Bhagawat Katha to birth chart
            reading, every session is focused on inner peace, clarity of mind
            and karmic healing.
          </p>

          <ul className="mt-4 grid gap-2 text-xs text-slate-700 md:grid-cols-2">
            <li>• 25+ years of experience in Vedic astrology & satsang.</li>
            <li>• Conducted Bhagawat Kathas across India & overseas.</li>
            <li>• Special focus on family, career and relationship healing.</li>
            <li>• Sessions available in Hindi & English (online/offline).</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <button className="rounded-full bg-primary px-5 py-2 font-semibold text-white shadow hover:bg-primary/90">
              Meet Gopala Ji
            </button>
            <button className="rounded-full border border-secondary px-4 py-2 text-secondary hover:bg-secondary/5">
              Watch Katha Highlights
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
