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

const ZODIAC_SIGNS = [
  { name: "Aries", icon: aries },
  { name: "Taurus", icon: Taurus },
  { name: "Gemini", icon: gemini },
  { name: "Cancer", icon: Cancer },
  { name: "Leo", icon: Leo },
  { name: "Virgo", icon: Virgo },
  { name: "Libra", icon: Libra },
  { name: "Scorpio", icon: Scorpio },
  { name: "Sagittarius", icon: Sagittarius },
  { name: "Capricorn", icon: Capricorn },
  { name: "Aquarius", icon: Aquarius },
  { name: "Pisces", icon: Pisces },
];

export default function ZodiacSection() {
  return (
    <section
      id="zodiac"
      className="relative overflow-hidden bg-gradient-to-r from-secondary via-[#111633] to-secondary text-white py-16"
    >
      {/* angled overlay jaisa screenshot mein */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,transparent_42%,transparent_55%,rgba(255,255,255,0.15)_100%)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">
            Daily Horoscope &amp; Energy
          </p>
          <h2 className="mt-2 font-heading text-2xl md:text-3xl">
            Know What Your Zodiac Sign Says About You
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xs md:text-sm text-slate-200">
            Pick your sign to receive a short guidance for the day, lucky time
            and suggested mantra.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-6">
          {ZODIAC_SIGNS.map((sign, idx) => (
            <button
              key={sign.name}
              className="group card-tilt flex flex-col items-center rounded-2xl bg-white/5 px-3 py-4 text-center text-xs hover:bg-accent hover:text-secondary animate-fade-up transition-all"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
                <img
                  src={sign.icon}
                  alt={sign.name}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="font-semibold">{sign.name}</span>
              <span className="mt-1 text-[10px] text-slate-200 group-hover:text-secondary/80">
                View today&apos;s insight
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
