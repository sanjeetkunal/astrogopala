const SERVICE_ITEMS = [
  { title: "Birth Chart (Kundli)", badge: "Most Booked" },
  { title: "Gemstone Recommendation", badge: "Remedies" },
  { title: "Numerology Reading", badge: "Numbers" },
  { title: "Bhagawat Katha Booking", badge: "Devotion" },
  { title: "Vastu Consultation", badge: "Home Balance" },
  { title: "Career & Finance Guidance", badge: "Growth" },
  { title: "Health & Healing", badge: "Wellness" },
  { title: "Relationship Counselling", badge: "Harmony" },
  { title: "Online Video Consultation", badge: "Worldwide" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">
            Our Vedic Astrology Services
          </p>
          <h2 className="mt-2 font-heading text-2xl md:text-3xl text-secondary">
            Unlock Your Destiny With <span className="text-primary">Astro Gopala</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xs md:text-sm text-slate-600">
            From detailed Kundli analysis to Bhagawat Katha and spiritual
            remedies, every service is offered with devotion, accuracy and
            compassion.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {SERVICE_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className={`card-tilt group flex flex-col rounded-2xl border border-slate-200 bg-cream/60 p-4 shadow-sm ${
                idx < 3 ? "animate-fade-up" : ""
              }`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                  🔮
                </div>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-sm md:text-base font-semibold text-secondary">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 flex-1">
                Receive personalised guidance with easy-to-follow remedies and
                spiritual direction.
              </p>
              <button className="mt-3 inline-flex items-center justify-between rounded-full border border-primary/60 px-3 py-1 text-[11px] text-primary group-hover:bg-primary group-hover:text-white">
                Book Now <span className="ml-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
