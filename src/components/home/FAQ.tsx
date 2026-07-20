'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
  category: 'Graphotherapy' | 'Energy Healing' | 'Sessions & Privacy';
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Graphotherapy', 'Energy Healing', 'Sessions & Privacy'];

  const faqs: FAQItem[] = [
    {
      category: "Graphotherapy",
      q: "What exactly is Graphotherapy and how does it alter behavioral patterns?",
      a: "Graphotherapy is a specialized branch of graphology (handwriting analysis) that leverages conscious handwriting exercises to rewire neural pathways. By intentionally adjusting specific stroke angles, letter shapes, and pressure patterns daily, we create new subconscious habits—helping resolve deep-seated anxiety, procrastination, or lack of confidence."
    },
    {
      category: "Energy Healing",
      q: "How does combining Life Coaching with Energy Healing work together?",
      a: "Standard coaching provides intellectual strategies, but emotional blockages often hold clients back from taking action. Energy Healing works on a somatic and energetic level to release stored stress, grief, or trauma imprints. Combining both ensures your mind and subconscious energy are completely aligned with your goals."
    },
    {
      category: "Sessions & Privacy",
      q: "How do you guarantee complete client discretion and confidentiality?",
      a: "Client trust is our primary priority. Every single conversation, handwriting sample diagnosis, and coaching record is protected under strict professional confidentiality. Your data is stored securely and never shared with third parties under any circumstances."
    },
    {
      category: "Sessions & Privacy",
      q: "Do you offer virtual or distant sessions for international clients?",
      a: "Yes! Our entire practice is optimized for remote engagement. Life Coaching sessions are conducted via secure video calls, Graphotherapy analysis uses digital scans of your handwriting, and Energy Healing uses distant restorative energy protocols with equal efficacy worldwide."
    },
    {
      category: "Sessions & Privacy",
      q: "Who stands to benefit most from this holistic transformation model?",
      a: "We work with professionals, entrepreneurs, creatives, students, and leaders seeking genuine emotional balance and mental clarity. If you are eager to uncover and heal root causes rather than apply temporary surface fixes, this practice is designed for you."
    }
  ];

  // Filter Logic
  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-0 md:py-0 bg-[#FAF7F2] text-[#2C302E] relative overflow-hidden font-sans">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#536244]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Header, Categories & Search (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#536244]/10 border border-[#536244]/20 text-[#536244] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Seeking Clarity</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#2C302E] tracking-tight leading-[1.15]">
                Frequently Asked Inquiries
              </h2>

              <p className="text-sm md:text-base text-[#6A706C] font-light leading-relaxed">
                Everything you need to know about our modalities, privacy guidelines, and consultation protocols.
              </p>
            </div>

            {/* Interactive Search Field */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#8C928E] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions (e.g. Graphotherapy, Zoom...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs md:text-sm pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-[#E2DDD3] text-[#2C302E] placeholder-[#8C928E] focus:outline-none focus:border-[#536244] shadow-sm transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C928E] block">
                Filter by Topic:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenIndex(null);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-[#536244] text-white shadow-md'
                        : 'bg-[#EFE9DF] text-[#555C58] hover:bg-[#E5DFD4]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Support Callout */}
            <div className="p-6 rounded-2xl bg-[#F2EDE4] border border-[#E2DDD3] flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#536244] text-[#FAF7F2] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-[#2C302E]">Have a specific query?</h4>
                <p className="text-xs text-[#6A706C] font-light">
                  Ask us directly on your free 1:1 discovery call.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Accordion List (7 Columns) */}
          <div className="lg:col-span-7 space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-[#E2DDD3]">
                <HelpCircle className="w-8 h-8 text-[#8C928E] mx-auto mb-3" />
                <h3 className="text-base font-medium text-[#2C302E]">No matching questions found</h3>
                <p className="text-xs text-[#6A706C] mt-1">Try adjusting your search terms or topic filters.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`rounded-2xl md:rounded-3xl transition-all duration-300 border overflow-hidden ${
                      isOpen
                        ? 'bg-white border-[#536244] shadow-md'
                        : 'bg-[#F2EDE4]/60 border-[#E2DDD3] hover:bg-white hover:border-[#D0C9BD]'
                    }`}
                  >
                    <button
                      onClick={() => handleToggle(idx)}
                      className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D6A97A]">
                          {faq.category}
                        </span>
                        <h3 className="font-serif text-base md:text-lg font-medium text-[#2C302E] leading-snug">
                          {faq.q}
                        </h3>
                      </div>

                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'bg-[#536244] text-white rotate-180'
                            : 'bg-[#EFE9DF] text-[#2C302E]'
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 md:px-7 md:pb-7 pt-0 border-t border-[#E2DDD3]/50 mt-1">
                            <p className="text-xs md:text-sm text-[#555C58] font-light leading-relaxed pt-4">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </div>

        </div>

      </div>
    </section>
  );
}