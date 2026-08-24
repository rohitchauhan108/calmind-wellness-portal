'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  Briefcase,
  Wallet,
  Sparkles,
} from 'lucide-react';

export default function SupportCategories() {
  const categories = [
    {
      icon: Heart,
      title: 'Health',
      description:
        'Feel better physically, mentally and emotionally, and create greater balance and wellbeing in your life.',
    },
    {
      icon: Users,
      title: 'Relationships',
      description:
        'Create healthier, deeper and more fulfilling relationships — with others and with yourself.',
    },
    {
      icon: Briefcase,
      title: 'Career',
      description:
        'Find greater clarity, confidence and direction, whether you want to grow where you are or create something new.',
    },
    {
      icon: Wallet,
      title: 'Money',
      description:
        'Transform your relationship with money and open yourself to greater growth, abundance and possibility.',
    },
    {
      icon: Sparkles,
      title: 'Self',
      description:
        'Build greater confidence, self-worth and emotional wellbeing, and continue becoming the person you want to be.',
    },
  ];

  const handleCardClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="areas"
      className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F5] text-[#1C2826] relative overflow-hidden"
    >
      {/* Soft Background Texture - Brand Theme */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilterAreas">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterAreas)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#073E42]/10 rounded-full blur-[130px] pointer-events-none -mr-20 -mt-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E6B055]/8 rounded-full blur-[140px] pointer-events-none -ml-20 -mb-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073E42]/8 border border-[#073E42]/15 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E6B055]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#073E42]">
              Choose Your Focus
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#073E42] font-bold tracking-tight leading-[1.12]">
            What do you want more of?
          </h2>

          <p className="text-[#1C2826]/75 text-base sm:text-lg font-normal leading-relaxed">
            We all have areas of our lives we would love to improve, expand or
            experience differently. What would you like to create more of?
          </p>
        </div>

        {/* Cards Grid — 3 cards on top row, 2 cards on bottom row (brand theme) */}
        <div className="space-y-5 lg:space-y-6">
          {/* Row 1: 3 cards (Health, Relationships, Career) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {categories.slice(0, 3).map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6 }}
                  onClick={handleCardClick}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-[#073E42]/10 hover:border-[#073E42]/30 hover:shadow-xl hover:shadow-[#073E42]/10 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                >
                  {/* Subtle top accent line - Brand Copper/Gold */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E6B055]/70 via-[#E6B055] to-[#E6B055]/70 opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Icon Circle - Brand Theme */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#073E42]/8 flex items-center justify-center mb-5 group-hover:bg-[#073E42] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#073E42] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#073E42] mb-3 leading-tight">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#1C2826]/75 font-normal leading-relaxed flex-grow">
                    {cat.description}
                  </p>

                  {/* Accent bar bottom on hover - Brand colors */}
                  <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-[#073E42] via-[#073E42]/80 to-[#E6B055] group-hover:w-full transition-all duration-500 opacity-80" />
                </motion.div>
              );
            })}
          </div>

          {/* Row 2: 2 centered cards (Money, Self) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {categories.slice(3, 5).map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: (index + 3) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6 }}
                  onClick={handleCardClick}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-[#073E42]/10 hover:border-[#073E42]/30 hover:shadow-xl hover:shadow-[#073E42]/10 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                >
                  {/* Subtle top accent line - Brand Copper/Gold */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E6B055]/70 via-[#E6B055] to-[#E6B055]/70 opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Icon Circle - Brand Theme */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#073E42]/8 flex items-center justify-center mb-5 group-hover:bg-[#073E42] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#073E42] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#073E42] mb-3 leading-tight">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#1C2826]/75 font-normal leading-relaxed flex-grow">
                    {cat.description}
                  </p>

                  {/* Accent bar bottom on hover - Brand colors */}
                  <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-[#073E42] via-[#073E42]/80 to-[#E6B055] group-hover:w-full transition-all duration-500 opacity-80" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
