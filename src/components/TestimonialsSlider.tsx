/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, ShieldCheck, Quote } from "lucide-react";
import { Testimonial } from "../types";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Alastor M.",
    location: "Davis Islands, Tampa FL",
    rating: 5,
    date: "May 2026",
    text: "We used to worry constantly about technicians showing up on time, but Aura is extremely honest and reliable. Since we hired them, we never worry about our pool's chemistry or upkeep. They built a breathtaking infinity-edge overlooking Hillsborough Bay that is always pristine and ready for a swim.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
  },
  {
    id: "review-2",
    name: "Genevieve S.",
    location: "Bayshore Boulevard, Tampa FL",
    rating: 5,
    date: "April 2026",
    text: "Simply breathtaking level of precision. Finding an honest contractor in Florida can be incredibly challenging, but Aura was completely transparent and reliable from day one. We never worry about maintenance schedules or leaks; their engineers are remarkably professional and trustworthy.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120",
  },
  {
    id: "review-3",
    name: "Harrison V.",
    location: "Belleair Beach, FL",
    rating: 5,
    date: "March 2026",
    text: "They transformed our waterfront estate's low-elevation compound into a multi-tiered grotto. They are the most reliable crew we've ever worked with, keeping billing transparent and honest throughout. We never worry about our water quality or automated systems anymore.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <div id="testimonials" className="relative max-w-4xl mx-auto">
      {/* Decorative Gold Glow Ring Behind Testimonial */}
      <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-6 md:p-12 shadow-2xl backdrop-blur-xl">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            {/* Google G Logo Placeholder using SVG */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 p-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22l.81-.6z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1C7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-display font-semibold text-xs md:text-sm tracking-wide uppercase text-white">Google Reviews</span>
                <span className="text-xs text-slate-400">Verified</span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Star className="h-3 w-3 fill-gold-400 text-gold-400" />
                <span className="text-[11px] font-mono font-medium text-slate-200">5.0 Star Rating</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-turquoise-950/50 border border-turquoise-500/20 px-3 py-1 text-xs text-turquoise-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Premium Architect Certification</span>
          </div>
        </div>

        {/* Quote Context */}
        <div id="testimonial-slide" className="relative py-8 min-h-[140px] md:min-h-[160px]">
          <Quote className="absolute -top-4 -left-3 h-10 w-10 text-slate-800/60 pointer-events-none" />
          
          <div className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
            <p className="font-sans text-base md:text-xl text-slate-200 leading-relaxed italic">
              "{active.text}"
            </p>
          </div>
        </div>

        {/* Reviewer Meta Section */}
        <div className="flex items-center justify-between gap-6 pt-6 border-t border-white/5">
          <div className="flex items-center gap-4">
            <img
              src={active.avatarUrl}
              alt={active.name}
              className="h-12 w-12 rounded-full border-2 border-gold-400/40 object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <h4 className="font-display font-semibold text-sm md:text-base text-white">{active.name}</h4>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <span>{active.location}</span>
                <span className="h-1 w-1 rounded-full bg-slate-600"></span>
                <span>{active.date}</span>
              </p>
            </div>
          </div>

          {/* Slider Slider Navigation */}
          <div className="flex items-center gap-3">
            <button
              id="prev-testimonial"
              onClick={handlePrev}
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-gold-500/10 text-slate-300 hover:text-gold-300 transition-all duration-300 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              id="next-testimonial"
              onClick={handleNext}
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-gold-500/10 text-slate-300 hover:text-gold-300 transition-all duration-300 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Dots Index */}
      <div className="flex justify-center gap-1.5 mt-4">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (isAnimating) return;
              setCurrentIndex(idx);
            }}
            className={`h-1 cursor-pointer rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-gold-400" : "w-1.5 bg-slate-700 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
