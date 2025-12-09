const INFO_CARDS = [
  {
    title: "Your Guide to Astrology & Beyond",
    text: "Understand houses, planets, dashas and karmic patterns in simple and practical language.",
  },
  {
    title: "Frequently Asked Questions",
    text: "What details are needed? How long is a session? Find clarity before you book.",
  },
  {
    title: "Why Choose Astro Gopala?",
    text: "Blend of devotion, scriptural wisdom and down-to-earth counselling with real-life focus.",
  },
];

export default function InfoCardsSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-center font-heading text-2xl md:text-3xl text-secondary">
          Your Guide to Astrology & Support
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {INFO_CARDS.map((c, idx) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-cream p-4 text-xs shadow-sm card-tilt animate-fade-up"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <h3 className="mb-2 text-sm font-semibold text-secondary">
                {c.title}
              </h3>
              <p className="mb-3 text-slate-700">{c.text}</p>
              <button className="text-[11px] font-semibold text-primary">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
