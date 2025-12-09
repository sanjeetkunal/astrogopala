
import mainImg from "../assets/images/main.png";


export default function GuruSection() {
  return (
    <section id="guru" className="bg-cream py-16">
      <div className="mx-auto max-w-7xl px-4 grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center">
        {/* image side */}
        {/* image side */}
        <div className="flex justify-center animate-slide-left">
          <div className="relative h-96 w-72 overflow-hidden rounded-[32px] shadow-2xl">

            {/* main image */}
            <img
              src={mainImg}
              alt="Astro Gopala Ji"
              className="h-full w-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* left vertical ribbon */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="h-32 w-10 rounded-xl bg-primary flex items-center justify-center">
                  <p className="rotate-[-90deg] text-[11px] tracking-widest font-semibold text-white">
                    EXPERIENCE & TRUST
                  </p>
                </div>

                {/* corner accents */}
                <span className="absolute -top-2 -right-2 h-3 w-3 bg-accent rounded-sm" />
                <span className="absolute -bottom-2 -left-2 h-3 w-3 bg-accent rounded-sm" />
              </div>
            </div>

            {/* top experience badge */}
            <div className="absolute right-4 top-4">
              <div className="relative rounded-xl bg-gradient-to-br from-red-600 to-orange-500 px-4 py-3 text-white shadow-lg">
                <p className="text-xl font-extrabold leading-none">5+</p>
                <p className="text-[11px] uppercase tracking-wide">
                  Years<br />Experience
                </p>
              </div>
            </div>

            {/* bottom name */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/40 px-4 py-2 backdrop-blur-md">
              <p className="text-sm font-semibold text-accent">
                Astro Gopala Ji
              </p>
              <p className="text-[11px] text-cream">
                Astrology • Numerology • Spiritual Guidance
              </p>
            </div>
          </div>
        </div>


        {/* content side */}
        <div className="animate-slide-right">
          {/* small heading */}
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">
            Unlock Your Destiny With Expert Astrology, Numerology &amp; Spiritual Guidance
          </p>

          {/* main heading */}
          <h2 className="mt-2 font-heading text-2xl md:text-3xl text-secondary">
            About Astro Gopala – Your Trusted Guide To Astrology &amp; Spiritual Wisdom
          </h2>

          {/* description */}
          <p className="mt-3 text-xs md:text-sm text-slate-700 leading-relaxed">
            At Astro Gopala, we are dedicated to guiding you through the mystical
            world of astrology, numerology, and spiritual sciences. With years of
            experience and deep Vedic knowledge, our expert astrologers provide
            accurate predictions, personalized insights, and effective remedies to
            help you overcome life’s challenges.
          </p>

          {/* sub-heading line */}
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Unlock The Power Of Astrology With Astro Gopala
          </p>

          {/* bullet list */}
          <ul className="mt-3 grid gap-2 text-xs text-slate-700 md:grid-cols-2">
            <li>• Accurate Kundali Analysis</li>
            <li>• Personalized Horoscope Readings</li>
            <li>• Kundali Matching For Marriage</li>
            <li>• More</li>
          </ul>

          {/* contact + button */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-cream text-[13px]">
                ☎
              </span>
              <div className="leading-tight text-slate-800">
                <p className="font-semibold">
                  +91 9897892951 , 9462820179
                </p>
              </div>
            </div>

            <button className="rounded-full bg-primary px-5 py-2 font-semibold text-white shadow hover:bg-primary/90">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
