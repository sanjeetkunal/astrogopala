const TESTIMONIALS = [
  {
    name: "Sneha, Mumbai",
    text: "After my consultation, I felt light and clear. The remedies were simple and I started seeing changes within weeks.",
  },
  {
    name: "Rajesh, Delhi",
    text: "Bhagawat Katha at our home brought a beautiful devotional vibration. The whole family felt blessed.",
  },
  {
    name: "Priya, London",
    text: "Even from overseas, the online sessions were very accurate and full of compassion and understanding.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">
            Words From Devotees
          </p>
          <h2 className="mt-2 font-heading text-2xl md:text-3xl text-secondary">
            Hear What Our Happy Clients Say
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-4 shadow-sm border border-slate-200 card-tilt animate-fade-up"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <p className="text-xs text-slate-700 leading-relaxed">
                “{t.text}”
              </p>
              <p className="mt-3 text-[11px] font-semibold text-primary">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
