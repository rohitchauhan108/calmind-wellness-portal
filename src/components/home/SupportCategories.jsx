'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SupportCategories() {
  const categories = [
    {
      number: '01',
      title: 'Relationships',
      description: 'Communication blocks, repeating emotional patterns, and boundary setting.',
    },
    {
      number: '02',
      title: 'Career',
      description: 'Direction, clarity in executive decision-making, confidence, and growth.',
    },
    {
      number: '03',
      title: 'Money',
      description: 'Subconscious abundance blocks, money habits, and recurring financial stress.',
    },
    {
      number: '04',
      title: 'Health & wellbeing',
      description: 'Somatic stress release, energetic balance, and restoring daily vitality.',
    },
    {
      number: '05',
      title: 'Confidence',
      description: 'Unshakeable self-belief, silencing inner criticism, and personal expression.',
    },
    {
      number: '06',
      title: 'Purpose',
      description: 'Deep soul alignment, personal fulfillment, and stepping into your next chapter.',
    },
  ];

  const handleCardClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FBF9F5] text-[#1C2826] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D37B58]">
            START WITH WHAT MATTERS TO YOU
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#073E42] font-bold tracking-tight leading-tight">
            What would you like support with?
          </h2>

          <p className="text-[#1C2826]/75 text-sm sm:text-base font-normal max-w-lg leading-relaxed">
            You do not need to know which service you need. Start with the area of life you want to improve.
          </p>
        </div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              onClick={handleCardClick}
              className="p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between bg-[#073E42] border border-transparent hover:border-[#073E42] hover:shadow-lg text-white"
            >
              <div>
                {/* Number */}
                <span className="text-xs font-semibold text-[#E6B055] block mb-4">
                  {cat.number}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2 leading-snug">
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}