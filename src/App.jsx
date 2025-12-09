// src/App.jsx
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperienceStrip from "./components/ExperienceStrip";
import ServicesSection from "./components/ServicesSection";
import ZodiacSection from "./components/ZodiacSection";
import GuruSection from "./components/GuruSection";
import MemoriesSection from "./components/MemoriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import InfoCardsSection from "./components/InfoCardsSection";
import SiteFooter from "./components/SiteFooter";
import SpiritualMusicPlayer from "./components/SpiritualMusicPlayer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <div className="pt-20 md:pt-24">
        <HeroSection />
        <ExperienceStrip />
        <ServicesSection />
        <ZodiacSection />
        <GuruSection />
        <MemoriesSection />
        <TestimonialsSection />
        <InfoCardsSection />
        <SiteFooter />
      </div>
      <SpiritualMusicPlayer />
    </div>
  );
}
