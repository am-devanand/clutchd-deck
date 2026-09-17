"use client";

import { useEffect, useState } from "react";
import Logo from "./logo";

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Start fading out after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    // Remove from DOM entirely after the fade transition (0.7s)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Don't render anything on the server to avoid hydration mismatch
  if (!mounted || !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-paper transition-opacity duration-700 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className={`transition-all duration-1000 ease-out ${
          isFading ? "scale-110 opacity-0" : "scale-100 opacity-100"
        } animate-in zoom-in duration-500`}
      >
        <Logo className="w-72 md:w-96 h-auto" />
      </div>
      {/* Blue progress accent */}
      <div className="h-1 w-48 overflow-hidden rounded-full bg-line" aria-hidden="true">
        <div className="h-full w-1/2 rounded-full bg-beacon animate-[shimmer_1.4s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
