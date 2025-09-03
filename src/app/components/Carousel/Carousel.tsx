"use client";
import { useRef, useState } from "react";

type Slide = {
  heading: string;
  quote: string;
  author?: string;
};

const slides: Slide[] = [
  {
    heading: "Community Café",
    quote:
      "It’s more than a meal — it’s where I met friends and found support when I needed it most.",
    author: "Service User",
  },
  {
    heading: "Youth Centre",
    quote:
      "A safe space after school changed everything for my son. He’s confident and focused.",
    author: "Parent",
  },
  {
    heading: "Sports & Fitness",
    quote:
      "Boxercise helped me deal with stress and build discipline. I feel stronger every week.",
    author: "Participant",
  },
  {
    heading: "Community Library",
    quote:
      "Free PCs and a quiet place helped me finish job applications and learn new skills.",
    author: "Local Resident",
  },
];

export default function ImpactCarousel() {
  const [i, setI] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = (dir: -1 | 1) =>
    setI((prev) => (prev + dir + slides.length) % slides.length);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40; // px
    if (dx > threshold) go(-1);
    if (dx < -threshold) go(1);
    touchStartX.current = null;
  };

  return (
    <section
      className="mt-12 w-full bg-[#2C2C6D] text-white"
      aria-label="Impact testimonials"
    >
      <div
        className="mx-auto flex max-w-3xl items-stretch gap-3 px-4 py-10 sm:px-6"
        role="group"
        aria-roledescription="carousel"
        aria-live="polite"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Prev */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous quote"
          className="hidden shrink-0 rounded-full p-3 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD428] sm:block"
        >
          {/* Left arrow */}
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Slide */}
        <div className="relative grow overflow-hidden rounded-2xl bg-white/5 p-6 shadow-lg ring-1 ring-white/10">
          <div className="transition-all duration-300 ease-out">
            <p className="mb-2 text-sm font-semibold tracking-wide text-[#FFD428]">
              {slides[i].heading}
            </p>
            <blockquote className="text-xl font-semibold leading-snug sm:text-2xl">
              “{slides[i].quote}”
            </blockquote>
            {slides[i].author && (
              <p className="mt-3 text-sm opacity-80">— {slides[i].author}</p>
            )}
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  idx === i ? "bg-[#FFD428]" : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next quote"
          className="hidden shrink-0 rounded-full p-3 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD428] sm:block"
        >
          {/* Right arrow */}
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
