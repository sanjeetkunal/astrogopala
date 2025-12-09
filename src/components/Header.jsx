// src/components/Header.jsx
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Astro Services", href: "#services" },
    { label: "Zodiac Signs", href: "#zodiac" },
    { label: "Our Guru", href: "#guru" },
    { label: "Memories", href: "#memories" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled
          ? "bg-[#101322]/95 shadow-lg backdrop-blur"
          : "bg-gradient-to-b from-[#141732]/95 via-[#141732]/80 to-transparent"
      }`}
    >
      {/* Top info strip */}
      <div className="hidden border-b border-white/10 text-[11px] text-slate-200 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5">
          <p className="flex items-center gap-2">
            <span className="text-accent text-xs">🕉</span>
            <span>
              Experience the divine wisdom of{" "}
              <span className="text-accent font-semibold">
                Shrimad Bhagawat Katha
              </span>{" "}
              & Vedic Astrology
            </span>
          </p>
          <div className="flex items-center gap-4">
            <a href="tel:+9198XXXXXXX" className="hover:text-accent">
              📞 +91-98XX-XXX-XXX
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-accent">
              💬 WhatsApp for Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo + brand */}
        <a href="#" className="flex items-center gap-3">
        
            <img src={logo} alt="Astro Gopala Logo" className="w-40" />
        
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 text-[13px] text-slate-100 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative transition hover:text-accent"
            >
              {item.label}
              <span className="absolute left-0 top-full mt-1 block h-[2px] w-0 bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA buttons (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-accent/60 px-4 py-1.5 text-[12px] text-accent hover:bg-accent/10">
            Login / Register
          </button>
          <button className="rounded-full bg-gradient-to-r from-[#E6511F] to-[#F4D03F] px-4 py-1.5 text-[12px] font-semibold text-[#1b1740] shadow-lg">
            Book Astro Session
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-100 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-[2px] w-4 bg-current transition ${
                mobileOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-4 bg-current transition ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-4 bg-current transition ${
                mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-white/10 bg-[#101322]/95`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 text-sm text-slate-100">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
              >
                <span>{item.label}</span>
                <span className="text-xs text-accent">→</span>
              </a>
            ))}

            <div className="mt-2 border-t border-white/10 pt-3">
              <p className="mb-2 text-[11px] text-slate-300">
                Ready for guidance?
              </p>
              <button className="mb-2 w-full rounded-full bg-gradient-to-r from-[#E6511F] to-[#F4D03F] px-4 py-2 text-[12px] font-semibold text-[#1b1740] shadow-lg">
                Book Astro Session
              </button>
              <button className="w-full rounded-full border border-accent/60 px-4 py-2 text-[12px] text-accent">
                WhatsApp Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
