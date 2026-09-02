'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  Briefcase,
  Wallet,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function SupportCategories() {
  const categories = [
    {
      icon: Heart,
      title: 'Health',
      subtitle: 'Body · Mind · Soul',
      description:
        'Feel better physically, mentally and emotionally, and create greater balance and wellbeing in your life.',
    },
    {
      icon: Users,
      title: 'Relationships',
      subtitle: 'Love · Connection · Self',
      description:
        'Create healthier, deeper and more fulfilling relationships — with others and with yourself.',
    },
    {
      icon: Briefcase,
      title: 'Career',
      subtitle: 'Growth · Clarity · Purpose',
      description:
        'Find greater clarity, confidence and direction, whether you want to grow where you are or create something new.',
    },
    {
      icon: Wallet,
      title: 'Money',
      subtitle: 'Abundance · Flow · Freedom',
      description:
        'Transform your relationship with money and open yourself to greater growth, abundance and possibility.',
    },
    {
      icon: Sparkles,
      title: 'Self',
      subtitle: 'Confidence · Worth · Becoming',
      description:
        'Build greater confidence, self-worth and emotional wellbeing, and continue becoming the person you want to be.',
    },
  ];

  const handleCardClick = () => {
    window.open('https://calendly.com/ilagarg-official/clarity-call-with-ila', '_blank');
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    containScroll: 'trimSnaps',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const renderCard = (cat, index, source = 'grid') => {
    const Icon = cat.icon;
    return (
      <motion.div
        key={`${source}-${cat.title}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.55,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{ y: -6 }}
        onClick={handleCardClick}
        className="group relative h-full rounded-[1.75rem] bg-white border border-[#073E42]/8 hover:border-[#073E42]/20 hover:shadow-[0_24px_48px_-16px_rgba(7,62,66,0.12)] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#073E42]/0 via-[#E6B055] to-[#073E42]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/80 to-transparent opacity-60 pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-7 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#073E42]/[0.06] group-hover:bg-[#073E42] flex items-center justify-center transition-all duration-400 group-hover:scale-110 shadow-sm group-hover:shadow-[0_10px_24px_-8px_rgba(7,62,66,0.35)]">
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#073E42] group-hover:text-white transition-colors duration-300" />
            </div>
          </div>

          <div className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2 text-[#E6B055]">
            {cat.subtitle}
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#073E42] mb-3 leading-tight">
            {cat.title}
          </h3>

          <p className="text-sm sm:text-[15px] text-[#1C2826]/70 font-normal leading-relaxed flex-grow">
            {cat.description}
          </p>

          <div className="mt-6 pt-5 border-t border-[#073E42]/8 flex items-center justify-between">
            <span className="text-xs sm:text-[13px] font-semibold text-[#073E42]/75 tracking-wide group-hover:text-[#073E42] transition-colors duration-300">
              Explore this path
            </span>
            <span className="w-9 h-9 rounded-full bg-[#073E42]/[0.06] flex items-center justify-center group-hover:bg-[#E6B055] group-hover:translate-x-1 transition-all duration-400">
              <ArrowRight className="w-4 h-4 text-[#073E42] group-hover:text-white transition-colors duration-300" />
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="areas"
      className="py-16 sm:py-20 lg:py-28 bg-[#FBF9F5] text-[#1C2826] relative overflow-hidden"
    >
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
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#073E42]/10 rounded-full blur-[150px] pointer-events-none -mr-32 -mt-10" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#E6B055]/8 rounded-full blur-[160px] pointer-events-none -ml-32 -mb-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#073E42]/8 border border-[#073E42]/15 backdrop-blur-sm shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E6B055]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#073E42]">
              Choose Your Focus
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#073E42] font-bold tracking-tight leading-[1.08]"
          >
            What do you want{' '}
            <span className="relative inline-block">
              <span className="relative z-10">more</span>
              <span className="absolute left-0 right-0 bottom-2 h-3 sm:h-4 bg-[#E6B055]/30 -skew-x-12 rounded-sm z-0" />
            </span>{' '}
            of?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1C2826]/70 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl"
          >
            We all have areas of our lives we would love to improve, expand or
            experience differently. What would you like to create more of?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-2 pt-1"
          >
            <span className="h-px w-10 bg-[#E6B055]/60" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#073E42]/60">
              5 Life Areas · 1 Tailored Journey
            </span>
            <span className="h-px w-10 bg-[#E6B055]/60" />
          </motion.div>
        </div>

        {/* ============ MOBILE SLIDER (visible < md) ============ */}
        <div className="md:hidden">
          <div className="overflow-hidden rounded-[1.75rem]" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {categories.map((cat, i) => (
                <div key={`slide-${cat.title}`} className="flex-[0_0_100%] min-w-0 pr-0 last:pr-0">
                  {renderCard(cat, i, 'slide')}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 px-1 gap-4">
            <button
              onClick={scrollPrev}
              aria-label="Previous category"
              className="w-11 h-11 rounded-full bg-white border border-[#073E42]/15 text-[#073E42] hover:bg-[#073E42] hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollNext}
              aria-label="Next category"
              className="w-11 h-11 rounded-full bg-white border border-[#073E42]/15 text-[#073E42] hover:bg-[#073E42] hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============ DESKTOP GRID (visible md+) ============ */}
        <div className="hidden md:block space-y-6 lg:space-y-7">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {categories.slice(0, 3).map((cat, index) => renderCard(cat, index, 'grid1'))}
          </div>

          <div className="grid grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {categories.slice(3, 5).map((cat, index) => renderCard(cat, index + 3, 'grid2'))}
          </div>
        </div>
      </div>
    </section>
  );
}
