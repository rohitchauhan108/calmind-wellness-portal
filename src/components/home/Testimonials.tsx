import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
  Sparkles,
  Award,
  TrendingUp,
} from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const list = [
    {
      quote:
        "The Personal Empowerment Pathway was the single most profound personal intervention of my life. As an entrepreneur leading a fast-growing startup, constant self-doubt was paralyzing. Under Ila's guidance, I uncovered my core limiting beliefs and reshaped my habits.",
      author: "Julian C.",
      title: "Technology Founder",
      program: "Personal Empowerment Pathway",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&h=250&q=80",
      metric: "98% Stress Reduction",
    },
    {
      quote:
        "I was initially skeptical about energy work, but the Energetic Rebirth Intensive with Ila completely transformed my perspective. The deep somatic blocks I carried after years of corporate burnout were cleared effortlessly.",
      author: "Elena R.",
      title: "Venture Capital Partner",
      program: "Energetic Rebirth Intensive",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&h=250&q=80",
      metric: "Complete Mindset Shift",
    },
    {
      quote:
        "The Subconscious Alignment Journey is a masterpiece of personal growth. Ila has a unique gift of getting straight to the root causes of your struggles rather than just discussing surface symptoms. Highly transformative.",
      author: "Marcus V.",
      title: "Chief Executive Officer",
      program: "Subconscious Alignment Journey",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&h=250&q=80",
      metric: "Clarity & Focus Restored",
    },
    {
      quote:
        "Graphotherapy was something entirely new to me, but the daily handwriting adjustments made a startling difference in my stress levels and focus. Ila's intuitive guidance is unmatched.",
      author: "Sophia L.",
      title: "Creative Director",
      program: "Graphotherapy Alignment",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&h=250&q=80",
      metric: "Rewired Daily Habits",
    },
    {
      quote:
        "Working 1-on-1 with Ila restored my direction when I felt completely burned out. Her holistic blend of energy work and actionable coaching gave me instant clarity.",
      author: "David K.",
      title: "Managing Director",
      program: "Holistic Coaching Protocol",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&h=250&q=80",
      metric: "Found Clear Purpose",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const currentItem = list[currentIndex];
  const nextItem = list[(currentIndex + 1) % list.length];
  const thirdItem = list[(currentIndex + 2) % list.length];

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-28 lg:py-32 bg-[#FBF9F5] relative overflow-hidden text-[#1C2826]"
    >
      {/* Dynamic Code-Generated SVG Sacred Patterns & Noise Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilterTestimonials">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilterTestimonials)"
          />
        </svg>

        {/* Concentric Geometric Ring Accent */}
        <svg
          className="absolute top-1/2 -left-40 -translate-y-1/2 w-[600px] h-[600px] text-[#073E42]/10"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
        >
          <circle cx="50" cy="50" r="15" />
          <circle cx="50" cy="50" r="28" />
          <circle cx="50" cy="50" r="42" />
          <circle cx="50" cy="50" r="55" />
        </svg>
      </div>

      {/* Deep Emerald Glow Effects */}
      <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-[600px] h-[600px] bg-[#073E42]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#073E42]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073E42]/10 border border-[#073E42]/15 text-[#073E42] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#073E42]" />
              <span>Transformation Stories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#073E42] tracking-tight leading-tight font-bold">
              Empowered Lives. <br />
              <span className="italic font-normal text-[#073E42]/90">
                Real Results.
              </span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 mr-2 text-xs font-semibold text-[#073E42]/70">
              <span>{currentIndex + 1}</span>
              <span className="text-[#073E42]/30">/</span>
              <span>{list.length}</span>
            </div>

            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#073E42]/20 bg-white hover:bg-[#073E42] hover:text-white text-[#073E42] transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-lg active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#073E42] hover:bg-[#073E42]/90 text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md hover:shadow-xl active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Creative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Showcase Spotlight Card (Left - 7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.author}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/90 backdrop-blur-xl border border-[#073E42]/15 rounded-[36px] p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[440px]"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#073E42]" />

                {/* Floating Metric Badge */}
                <div className="absolute top-8 right-8 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{currentItem.metric}</span>
                </div>

                <div className="space-y-6">
                  {/* Rating & Quote Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#E6B055] text-[#E6B055]"
                        />
                      ))}
                      <span className="text-xs font-bold text-[#073E42] ml-2">
                        5.0 Verified Review
                      </span>
                    </div>
                  </div>

                  {/* Main Spotlight Quote */}
                  <Quote className="w-10 h-10 text-[#073E42]/15 mb-2" />
                  <p className="text-lg sm:text-2xl font-serif text-[#073E42] leading-relaxed italic">
                    "{currentItem.quote}"
                  </p>
                </div>

                {/* Author Info Banner */}
                <div className="pt-8 mt-8 border-t border-[#073E42]/10 flex items-center gap-5">
                  <div className="relative">
                    <img
                      src={currentItem.avatar}
                      alt={currentItem.author}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-[#FBF9F5] shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center border-2 border-white">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-[#073E42] text-lg font-bold">
                      {currentItem.author}
                    </h3>
                    <p className="text-xs text-[#073E42]/70 font-medium">
                      {currentItem.title}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[#073E42] bg-[#073E42]/5 px-2.5 py-1 rounded-md mt-1.5 border border-[#073E42]/10">
                      <Award className="w-3 h-3 text-[#073E42]" />
                      {currentItem.program}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Stack Deck Cards (Right - 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#073E42]/60 mb-1 px-1">
              Up Next in Deck
            </p>

            {/* Card Preview 1 */}
            <div
              onClick={handleNext}
              className="bg-white/60 hover:bg-white backdrop-blur-md border border-[#073E42]/10 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex items-center gap-4"
            >
              <img
                src={nextItem.avatar}
                alt={nextItem.author}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-xl object-cover border border-[#073E42]/10 shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="overflow-hidden flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif text-[#073E42] text-sm font-bold truncate">
                    {nextItem.author}
                  </h4>
                  <span className="text-[10px] text-[#073E42] font-semibold bg-[#073E42]/10 px-2 py-0.5 rounded-full">
                    Next
                  </span>
                </div>
                <p className="text-xs text-[#073E42]/70 truncate italic">
                  "{nextItem.quote}"
                </p>
              </div>
            </div>

            {/* Card Preview 2 */}
            <div
              onClick={() =>
                setCurrentIndex((prev) => (prev + 2) % list.length)
              }
              className="bg-white/40 hover:bg-white/80 backdrop-blur-md border border-[#073E42]/10 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group flex items-center gap-4 opacity-80 hover:opacity-100"
            >
              <img
                src={thirdItem.avatar}
                alt={thirdItem.author}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-xl object-cover border border-[#073E42]/10 shrink-0 group-hover:scale-105 transition-transform"
              />
              <div className="overflow-hidden flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif text-[#073E42] text-sm font-bold truncate">
                    {thirdItem.author}
                  </h4>
                </div>
                <p className="text-xs text-[#073E42]/70 truncate italic">
                  "{thirdItem.quote}"
                </p>
              </div>
            </div>

            {/* Quick Indicator Strip */}
            <div className="flex items-center justify-between pt-2 px-1">
              <span className="text-xs text-[#073E42]/60 font-medium">
                Click any preview card to switch
              </span>
              <div className="flex gap-1.5">
                {list.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-6 bg-[#073E42]"
                        : "w-2 bg-[#073E42]/20 hover:bg-[#073E42]/40"
                    }`}
                    aria-label={`Jump to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}