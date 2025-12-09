import { useEffect, useRef, useState } from "react";

export default function SpiritualMusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  useEffect(() => {
    // audio element banate hi mount pe
    const audio = new Audio("/audio/spiritual-bhajan.mp3");
    audio.loop = true;
    audio.volume = 0.2; // low sound
    audioRef.current = audio;

    // page load pe auto-play try karein
    const tryAutoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setNeedsInteraction(false);
      } catch (err) {
        // browser ne block kar diya
        setNeedsInteraction(true);
      }
    };

    tryAutoPlay();

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setNeedsInteraction(false);
    } catch (err) {
      setNeedsInteraction(true);
    }
  };

  // Agar kuch bhi show nahi karna chahte, tab bhi kam se kam chota button to hona chahiye
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 rounded-full bg-[#0b0f2a]/90 px-3 py-2 text-[11px] text-amber-100 shadow-lg border border-amber-400/40 backdrop-blur-sm hover:bg-[#141a3b]"
      >
        <span className="text-lg">
          {isPlaying ? "🎵" : "🕉️"}
        </span>
        <div className="text-left leading-tight">
          <p className="font-semibold">
            {isPlaying ? "Bhajan Playing Softly" : "Play Spiritual Music"}
          </p>
          <p className="text-[10px] text-amber-200/80">
            {needsInteraction
              ? "Tap once to start divine music"
              : isPlaying
              ? "Click to pause"
              : "Low volume devotional track"}
          </p>
        </div>
      </button>
    </div>
  );
}
