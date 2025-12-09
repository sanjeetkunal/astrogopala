// HeroSection.jsx
import Aquarius from "../assets/images/zodiac/Aquarius.png";
import aries from "../assets/images/zodiac/aries.png";
import Cancer from "../assets/images/zodiac/Cancer.png";
import Capricorn from "../assets/images/zodiac/Capricorn.png";
import gemini from "../assets/images/zodiac/gemini.png";
import Leo from "../assets/images/zodiac/Leo.png";
import Libra from "../assets/images/zodiac/Libra.png";
import Pisces from "../assets/images/zodiac/Pisces.png";
import Sagittarius from "../assets/images/zodiac/Sagittarius.png";
import Scorpio from "../assets/images/zodiac/Scorpio.png";
import Taurus from "../assets/images/zodiac/Taurus.png";
import Virgo from "../assets/images/zodiac/Virgo.png";

const ZODIAC_ICONS = [
  { name: "Aquarius", icon: Aquarius },
  { name: "Aries", icon: aries },
  { name: "Cancer", icon: Cancer },
  { name: "Capricorn", icon: Capricorn },
  { name: "Gemini", icon: gemini },
  { name: "Leo", icon: Leo },
  { name: "Libra", icon: Libra },
  { name: "Pisces", icon: Pisces },
  { name: "Sagittarius", icon: Sagittarius },
  { name: "Scorpio", icon: Scorpio },
  { name: "Taurus", icon: Taurus },
  { name: "Virgo", icon: Virgo },
];

/**
 * positionPreset array — desktop-first coordinates (percentage),
 * and size (tailwind width class) + opacity + animation delay.
 * Adjust numbers if you want different layout.
 */
const positionPreset = [
  { top: "6%", left: "8%", size: "w-14", opacity: 0.12, delay: 0 },
  { top: "10%", left: "28%", size: "w-12", opacity: 0.14, delay: 0.8 },
  { top: "4%", left: "48%", size: "w-12", opacity: 0.10, delay: 1.6 },
  { top: "8%", left: "68%", size: "w-14", opacity: 0.12, delay: 0.4 },
  { top: "12%", left: "86%", size: "w-12", opacity: 0.08, delay: 1.2 },
  { top: "30%", left: "4%", size: "w-16", opacity: 0.12, delay: 0.6 },
  { top: "28%", left: "28%", size: "w-14", opacity: 0.10, delay: 1.0 },
  { top: "26%", left: "52%", size: "w-12", opacity: 0.08, delay: 0.2 },
  { top: "34%", left: "72%", size: "w-16", opacity: 0.14, delay: 1.4 },
  { top: "46%", left: "10%", size: "w-12", opacity: 0.09, delay: 0.9 },
  { top: "50%", left: "44%", size: "w-14", opacity: 0.12, delay: 0.3 },
  { top: "52%", left: "78%", size: "w-12", opacity: 0.08, delay: 1.1 },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b0f2a] via-[#12163a] to-black text-white">
      {/* background zodiac icons layer */}
     
<div className="absolute inset-0 pointer-events-none z-0">
  {/* subtle dark overlay so icons appear above the section background */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

  {ZODIAC_ICONS.map((item, i) => {
    const pos = positionPreset[i % positionPreset.length];
    return (
      <img
        key={item.name}
        src={item.icon}
        alt={item.name}
        /* 🟢 NOTICE: removed -z-10 here and set z-0 on parent */
        className={`absolute ${pos.size} select-none transform transition-transform duration-[8000ms] ease-in-out zodiac-float`}
        style={{
          top: pos.top,
          left: pos.left,
          opacity: pos.opacity ?? 0.18, // increase default visibility
          animationDelay: `${pos.delay}s`,
          // keep a subtle rotate start
          transform: "translateZ(0) rotate(-6deg)",
          // optional: blend mode can be left or removed
          mixBlendMode: "screen",
          filter: "grayscale(8%) contrast(95%) blur(0px)",
        }}
      />
    );
  })}
</div>


      {/* ✨ floating spiritual glow circles */}
      <div className="absolute inset-0">
        <span className="absolute top-20 left-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl animate-pulse"></span>
        <span className="absolute bottom-24 right-14 h-56 w-56 rounded-full bg-primary/20 blur-3xl animate-pulse"></span>
      </div>

      {/* 🕉 subtle mandala pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[length:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 animate-fade-in">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] tracking-widest text-accent">
              🕉 DIVINE GUIDANCE & VEDIC WISDOM
            </p>

            <h1 className="font-heading text-3xl md:text-5xl leading-snug">
              Discover the Power of
              <span className="block text-accent">Shrimad Bhagawat Katha</span>
              & Vedic Astrology
            </h1>

            <p className="max-w-lg text-sm md:text-base text-slate-300 leading-relaxed">
              Align your life with cosmic energies. Get personalised astrology
              consultations, spiritual counselling, remedies and divine
              Bhagawat Kathas for peace, clarity and growth.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2 text-xs font-semibold text-[#1b1740] shadow-lg hover:scale-105 transition">
                Book Astro Consultation
              </button>
              <button className="rounded-full border border-accent/50 px-6 py-2 text-xs text-accent hover:bg-accent/10">
                Explore Services
              </button>
            </div>

            {/* stats */}
            <div className="flex gap-8 pt-6 text-xs text-slate-300">
              <div>
                <p className="text-accent font-semibold text-lg">25+</p>
                <p>Years Experience</p>
              </div>
              <div>
                <p className="text-accent font-semibold text-lg">10k+</p>
                <p>Happy Devotees</p>
              </div>
              <div>
                <p className="text-accent font-semibold text-lg">Global</p>
                <p>Online Guidance</p>
              </div>
            </div>
          </div>

          {/* RIGHT – SPIRITUAL CARD */}
          <div className="relative flex justify-center animate-float">
            <div className="relative h-[360px] w-[260px] rounded-3xl overflow-hidden border border-accent/30 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur shadow-2xl">
              {/* glowing aura */}
              <span className="absolute inset-0 rounded-3xl ring-1 ring-accent/30 animate-pulse"></span>

              <div className="flex h-full flex-col items-center justify-center gap-3 text-center px-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-accent to-primary text-4xl shadow-lg animate-spin-slow">
                  ॐ
                </div>
                <h3 className="font-heading text-lg text-accent">Astro Gopala Ji</h3>
                <p className="text-[11px] text-slate-300">Vedic Astrologer & Bhagawat Katha Vachak</p>

                <div className="mt-3 w-full border-t border-white/10 pt-3 text-[11px] text-slate-300">
                  “Where devotion meets divine wisdom.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end container */}
    </section>
  );
}
