export default function MemoriesSection() {
  return (
    <section id="memories" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">
            Temple & Event Highlights
          </p>
          <h2 className="mt-2 font-heading text-2xl md:text-3xl text-secondary">
            Explore Our Beautiful Work Memory
          </h2>
          <p className="mt-3 text-xs md:text-sm text-slate-600">
            Moments from Bhagawat Kathas, satsangs and spiritual journeys with
            devotees and seekers.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative h-48 overflow-hidden rounded-2xl bg-slate-200 bg-[url('/images/memory-1.jpg')] bg-cover bg-center card-tilt animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-[11px] text-cream">
                <p className="font-semibold text-accent">Bhagawat Katha</p>
                <p>Divine discourse • City #{i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
