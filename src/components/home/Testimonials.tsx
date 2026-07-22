import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const list = [
    {
      quote: "The Personal Empowerment Pathway was the single most profound personal intervention of my life. As an entrepreneur leading a fast-growing startup, constant self-doubt was paralyzing. Under Ila's guidance, I uncovered my core limiting beliefs and reshaped my habits.",
      author: "Julian C.",
      title: "Technology Founder",
      program: "Personal Empowerment Pathway",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "I was initially skeptical about energy work, but the Energetic Rebirth Intensive with Ila completely transformed my perspective. The deep somatic blocks I carried after years of stressful corporate burnouts were cleared effortlessly.",
      author: "Elena R.",
      title: "Venture Capital Partner",
      program: "Energetic Rebirth Intensive",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "The Subconscious Alignment Journey is a masterpiece of personal growth. Ila has a unique gift of getting straight to the root causes of your struggles rather than just discussing surface symptoms. Highly transformative.",
      author: "Marcus V.",
      title: "Chief Executive Officer",
      program: "Subconscious Alignment Journey",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "Graphotherapy was something entirely new to me, but the daily handwriting adjustments made a startling difference in my stress levels and focus. Ila's intuitive guidance is unmatched.",
      author: "Sophia L.",
      title: "Creative Director",
      program: "Graphotherapy Alignment",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      quote: "Working 1-on-1 with Ila restored my direction when I felt completely burned out. Her holistic blend of energy work and actionable coaching gave me instant clarity.",
      author: "David K.",
      title: "Managing Director",
      program: "Holistic Coaching Protocol",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ];

  // Advance by 1 card at a time
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  // Get the 3 visible cards based on current index
  const visibleCards = [
    list[currentIndex],
    list[(currentIndex + 1) % list.length],
    list[(currentIndex + 2) % list.length],
  ];

  return (
    <section id="testimonials" className="py-12 bg-brand-cream relative overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title & Navigation Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-brand-burgundy text-xs font-semibold tracking-wider uppercase">
              Voices of Serenity
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-espresso tracking-tight leading-tight">
              Client Experiences
            </h2>
            <p className="text-brand-espresso-light font-medium text-sm md:text-base">
              Real outcomes from leaders, innovators, and seekers who reclaimed their mental clarity and spiritual alignment.
            </p>
          </div>

          {/* Nav Buttons Top-Right */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-brand-burgundy/20 hover:border-brand-burgundy bg-white hover:bg-brand-burgundy/5 text-brand-espresso transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-brand-burgundy" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-brand-burgundy hover:bg-brand-burgundy-dark text-brand-cream transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3-Card Carousel Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleCards.map((item, idx) => (
                <motion.div
                  key={`${item.author}-${(currentIndex + idx) % list.length}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border border-brand-burgundy/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
                >
                  {/* Decorative Subtle Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-burgundy/20 to-transparent group-hover:via-brand-burgundy transition-all duration-500" />

                  <div className="space-y-6">
                    {/* Stars & Quote Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#E6B055]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-[#E6B055]" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-brand-burgundy/20 group-hover:text-brand-burgundy/40 transition-colors" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-sm font-serif font-medium text-brand-espresso leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="pt-6 mt-6 border-t border-brand-burgundy/10 flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border border-brand-burgundy/15 shrink-0"
                    />
                    <div className="overflow-hidden">
                      <h4 className="font-serif text-brand-espresso text-sm font-semibold truncate">
                        {item.author}
                      </h4>
                      <p className="text-[11px] text-brand-espresso-light font-medium truncate">
                      {item.title}
                    </p>
                      <span className="inline-block text-[9px] uppercase font-bold text-brand-burgundy bg-brand-burgundy/5 px-2 py-0.5 rounded mt-1 truncate">
                        {item.program}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {list.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-brand-burgundy' : 'w-2 bg-brand-burgundy/20'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}