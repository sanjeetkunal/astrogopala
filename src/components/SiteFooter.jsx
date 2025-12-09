export default function SiteFooter() {
  return (
    <footer className="bg-secondary text-cream border-t border-accent/20 pt-8 pb-4">
      <div className="mx-auto max-w-6xl px-4 text-[11px]">
        <div className="grid gap-6 md:grid-cols-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-7 w-7 rounded-full bg-accent flex items-center justify-center text-secondary text-sm">
                ॐ
              </div>
              <span className="font-semibold text-sm">Astro Gopala</span>
            </div>
            <p className="text-slate-200">
              Spiritual astrology, Bhagawat Katha and counselling for seekers
              across the globe.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-1">
              <li>Consultation Booking</li>
              <li>Upcoming Events</li>
              <li>Blog & Articles</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-accent">Astro Services</h4>
            <ul className="space-y-1">
              <li>Kundli & Horoscope</li>
              <li>Gemstone Guidance</li>
              <li>Vastu Consultation</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-accent">Contact</h4>
            <p>📍 Based in India (Online Worldwide)</p>
            <p>📞 +91-98XXXXXXX</p>
            <p>✉ support@astrogopala.com</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-3 text-[10px] text-slate-300">
          <p>© {new Date().getFullYear()} Astro Gopala. All rights reserved.</p>
          <p>Designed with devotion & spirituality.</p>
        </div>
      </div>
    </footer>
  );
}
