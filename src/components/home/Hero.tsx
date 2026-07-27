"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  X,
  Compass,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easeCurve },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] py-12 md:py-16 flex items-center overflow-hidden bg-[#FBF9F5] text-[#1C2826]"
    >
      {/* SVG Sacred Patterns, Topography & Noise Texture Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {/* Tactile Paper Noise Texture Filter */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilterHero">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterHero)" />
        </svg>

        {/* Sacred Geometry Concentric Rings - Top Right */}
        <svg
          className="absolute -top-32 -right-32 w-[700px] h-[700px] text-[#073E42]/15"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
        >
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="49" />
          <path d="M50 0 V100 M0 50 H100" strokeDasharray="1 1" />
        </svg>

        {/* Topographic Flow Lines - Bottom Left */}
        <svg
          className="absolute -bottom-40 -left-40 w-[800px] h-[800px] text-[#073E42]/10"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M 0,100 Q 100,200 200,100 T 400,100" />
          <path d="M 0,130 Q 100,230 200,130 T 400,130" />
          <path d="M 0,160 Q 100,260 200,160 T 400,160" />
          <path d="M 0,190 Q 100,290 200,190 T 400,190" />
          <path d="M 0,220 Q 100,320 200,220 T 400,220" />
          <path d="M 0,250 Q 100,350 200,250 T 400,250" />
        </svg>
      </div>

      {/* Deep Emerald Ambient Glow Spheres */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#073E42]/10 rounded-full blur-[150px] pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#073E42]/8 rounded-full blur-[160px] pointer-events-none -ml-20 -mb-20" />

      {/* Subtle Radial Grid Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            id="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-7"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073E42]/10 border border-[#073E42]/15 shadow-sm backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#073E42]" />
                <span className="text-[#073E42] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  Holistic Transformation & Graphotherapy
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#073E42] leading-[1.12] tracking-tight font-bold"
            >
              Understand your mind. <br />
              <span className="italic font-normal text-[#073E42]/90">
                Break limiting patterns.
              </span>{" "}
              <br />
              Reclaim your life.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#1C2826]/80 font-normal max-w-xl leading-relaxed"
            >
              Integrating Life Coaching, Recovery Frameworks, and Graphotherapy
              (handwriting analysis) to reprogram subconscious habits and foster
              sustainable personal growth.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("programs")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="px-8 py-4 rounded-full bg-[#073E42] text-white hover:bg-[#073E42]/90 transition-all duration-300 shadow-lg hover:shadow-[#073E42]/25 flex items-center justify-center gap-3 group text-base font-medium cursor-pointer"
              >
                <span>Begin Your Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="px-7 py-4 rounded-full border border-[#073E42]/20 hover:border-[#073E42] text-[#073E42] hover:bg-[#073E42]/5 transition-all duration-300 flex items-center justify-center gap-3 text-base font-medium group cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-[#073E42]/10 group-hover:bg-[#073E42] group-hover:text-white flex items-center justify-center text-[#073E42] transition-colors duration-300">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Watch Experience</span>
              </button>
            </motion.div>

            {/* Trust Banner */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#073E42]/10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Client avatar"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-[#FBF9F5] object-cover shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Client avatar"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-[#FBF9F5] object-cover shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80"
                    alt="Client avatar"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full border-2 border-[#FBF9F5] object-cover shadow-sm"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#E6B055] text-[#E6B055]"
                      />
                    ))}
                    <span className="text-[#073E42] font-bold text-sm ml-1">
                      4.9/5
                    </span>
                  </div>
                  <p className="text-xs text-[#073E42]/70 font-medium">
                    500+ Lives Transformed
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-[#073E42]/15" />

              <div className="flex items-center gap-2 text-xs font-semibold text-[#073E42]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Certified Graphotherapist & Life Coach</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Graphic Stack */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: easeCurve }}
              className="relative w-full max-w-[440px] mx-auto lg:ml-auto"
            >
              {/* Back Accent Glow Card */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-gradient-to-br from-[#073E42]/20 to-[#073E42]/10 rounded-[32px] blur-sm pointer-events-none" />

              {/* Floating Highlight Card 1 */}
              <motion.div
                className="absolute -left-8 top-12 bg-white/90 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-[#073E42]/10 z-30 hidden sm:flex items-center gap-3 max-w-[210px]"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#073E42]/10 flex items-center justify-center text-[#073E42] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#073E42]">
                    Subconscious Shift
                  </h4>
                  <p className="text-[11px] text-[#073E42]/70 leading-tight">
                    Identify root behavior patterns
                  </p>
                </div>
              </motion.div>

              {/* Floating Highlight Card 2 */}
              <motion.div
                className="absolute -right-6 bottom-10 bg-white/90 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-[#073E42]/10 z-30 hidden sm:flex items-center gap-3 max-w-[210px]"
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#073E42]/10 flex items-center justify-center text-[#073E42] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#073E42]">
                    Graphotherapy
                  </h4>
                  <p className="text-[11px] text-[#073E42]/70 leading-tight">
                    Rewire habits via handwriting
                  </p>
                </div>
              </motion.div>

              {/* Main Image Frame */}
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] shadow-2xl bg-white border-4 border-white/90">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80"
                  alt="Ila Garg - Transformation Expert"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Vignette Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#073E42]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C2826]/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#073E42] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full relative flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(7, 62, 66, 0.88), rgba(7, 62, 66, 0.88)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                />
                <div className="relative z-10 text-center p-6 max-w-lg">
                  <Compass className="w-14 h-14 text-amber-300 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">
                    Experience The Method
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    A short preview into how Graphotherapy and tailored coaching
                    unlock permanent mindset transformation.
                  </p>
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="px-6 py-3 rounded-full bg-white text-[#073E42] font-semibold hover:bg-[#FBF9F5] transition-all shadow-lg cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}