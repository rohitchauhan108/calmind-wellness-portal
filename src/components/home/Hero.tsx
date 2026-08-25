"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ArrowRight,
  ShieldCheck,
  Star,
  X,
  Compass,
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
      className="relative min-h-[85vh] sm:min-h-[90vh] py-10 pt-24  sm:py-12 md:py-16 flex items-center overflow-hidden bg-[#FBF9F5] text-[#1C2826]"
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
          className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] text-[#073E42]/15"
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
          className="absolute -bottom-28 -left-28 sm:-bottom-40 sm:-left-40 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] text-[#073E42]/10"
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
      <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#073E42]/10 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none -mr-24 -mt-10 sm:-mr-40 sm:-mt-20" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[#073E42]/8 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -ml-14 -mb-14 sm:-ml-20 sm:-mb-20" />

      {/* Subtle Radial Grid Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            id="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5 sm:space-y-6 md:space-y-7 text-left"
          >
            {/* Main Headline - H1 (Most Prominent) */}
            <motion.h1
              variants={itemVariants}
              className="text-[28px] leading-[1.1] sm:text-4xl sm:leading-[1.08] md:text-5xl lg:text-6xl font-serif text-[#073E42] tracking-tight font-bold"
            >
              Lasting change <br></br> starts within.
            </motion.h1>

            {/* Supporting Headline - Second Level of Emphasis */}
            <motion.h2
              variants={itemVariants}
              className="text-lg leading-snug sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#073E42]/90 leading-tight font-semibold"
            >
              Do you want more from your life?
            </motion.h2>

            {/* Supporting Copy */}
            <motion.div
              variants={itemVariants}
              className="space-y-1.5 sm:space-y-2 text-[14px] leading-[1.55] sm:text-lg md:text-xl text-[#1C2826]/85 font-medium"
            >
              <p>More in your health.</p>
              <p>More in your relationships.</p>
              <p>More in your career.</p>
              <p>More money.</p>
              <p>More confidence.</p>
              <p className="leading-[1.45] sm:leading-relaxed">
                More of the person you know you can be.
              </p>
            </motion.div>

            {/* Philosophy / Closing Line */}
            <motion.p
              variants={itemVariants}
              className="text-[13px] sm:text-base md:text-xl text-[#073E42] font-serif italic leading-[1.6] sm:leading-relaxed max-w-md sm:max-w-lg border-l-2 border-[#E6B055] pl-4 sm:pl-5 py-1 mt-3 sm:mt-0"
            >
              Change your inner world. Change what becomes possible in your
              outer world.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-start justify-start gap-3 sm:gap-4 pt-4 sm:pt-3"
            >
              <Link
                href="/how-we-help"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#073E42] text-white hover:bg-[#073E42]/90 transition-all duration-300 shadow-lg hover:shadow-[#073E42]/25 flex items-center justify-center gap-2.5 sm:gap-3 group text-[13px] sm:text-base font-medium cursor-pointer w-full sm:w-auto"
              >
                <span>Explore How I Can Help</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>

      
            </motion.div>

           
          </motion.div>

          {/* Right Visual Graphic Stack */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-4 lg:mt-0">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: easeCurve }}
              className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] mx-auto lg:ml-auto"
            >
              {/* Back Accent Glow Card */}
              <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 bg-gradient-to-br from-[#073E42]/20 to-[#073E42]/10 rounded-[24px] sm:rounded-[32px] blur-sm pointer-events-none" />

              {/* Floating Highlight Card 1 */}
              <motion.div
                className="absolute -left-4 sm:-left-8 top-8 sm:top-12 bg-white/90 backdrop-blur-xl p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-[#073E42]/10 z-30 hidden sm:flex items-center gap-2.5 sm:gap-3 max-w-[180px] sm:max-w-[210px]"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#073E42]/10 flex items-center justify-center text-[#073E42] shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-[#073E42]">
                    Subconscious Shift
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-[#073E42]/70 leading-tight">
                    Identify root patterns
                  </p>
                </div>
              </motion.div>

            

              {/* Main Image Frame */}
              <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden aspect-[4/5] shadow-xl sm:shadow-2xl bg-white border-2 sm:border-4 border-white/90">
                <img
                  src="/founder.jpeg"
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
              className="relative w-full max-w-4xl bg-[#073E42] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="aspect-video w-full relative flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(7, 62, 66, 0.88), rgba(7, 62, 66, 0.88)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                />
                <div className="relative z-10 text-center p-4 sm:p-6 max-w-lg">
                  <Compass className="w-10 h-10 sm:w-14 sm:h-14 text-amber-300 mx-auto mb-3 sm:mb-4 animate-pulse" />
                  <h3 className="text-xl sm:text-2xl sm:text-3xl font-serif text-white mb-2 sm:mb-3">
                    Experience The Method
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 sm:mb-6">
                    A short preview into how tailored coaching unlocks permanent
                    mindset transformation.
                  </p>
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#073E42] font-semibold hover:bg-[#FBF9F5] transition-all shadow-lg cursor-pointer text-sm sm:text-base"
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
