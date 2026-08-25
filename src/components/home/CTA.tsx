'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

export default function CTA() {
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const handleBooking = () => {
    const contactSection = document.getElementById('contact') || document.getElementById('newsletter');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  const handleExplore = () => {
    window.location.href = '/services';
  };

  return (
    <section
      id="cta"
      className="py-24 md:py-32 bg-[#FBF9F5] text-[#1C2826] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilterCTA">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterCTA)" />
        </svg>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#073E42]/8 rounded-full blur-[150px] pointer-events-none -mt-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E6B055]/6 rounded-full blur-[120px] pointer-events-none -ml-20 -mb-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: easeCurve }}
          className="text-center space-y-8 md:space-y-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073E42]/8 border border-[#073E42]/15 backdrop-blur-sm mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#E6B055]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#073E42]">
               Take The Next Step
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#073E42] tracking-tight leading-[1.05]">
            Your life changes when{" "}
            <span className="italic font-normal text-[#E6B055]">you do.</span>
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-[#1C2826]/75 font-normal leading-relaxed">
              You don't need to have everything figured out before you begin.
            </p>
            <p className="text-base sm:text-lg text-[#1C2826]/70 font-normal leading-relaxed">
              If there's an area of your life you want to change, grow or create more in,
              let's start with a conversation.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 max-w-md mx-auto w-full">
            <button
              onClick={handleBooking}
              className="group relative inline-flex items-center justify-center gap-2.5 w-full px-7 py-4 rounded-xl bg-[#073E42] hover:bg-[#073E42]/92 text-[#FBF9F5] font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl hover:shadow-[#073E42]/20 transition-all duration-300 cursor-pointer border border-[#073E42]/50"
            >
              <Compass className="w-4 h-4 md:w-5 md:h-5 text-[#E6B055]" />
              <span>Book a Complimentary Discovery Call</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={handleExplore}
              className="group inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-transparent hover:bg-[#073E42]/6 text-[#073E42] font-medium text-sm md:text-base transition-all duration-300 cursor-pointer border border-[#073E42]/20 hover:border-[#073E42]/35"
            >
              <span>Explore Ways to Work With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 opacity-70" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
