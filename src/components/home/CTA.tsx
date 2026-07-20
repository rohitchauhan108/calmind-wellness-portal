'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Star,
  UserCheck,
  Compass,
  Zap,
  Feather
} from 'lucide-react';

export default function CTA() {
  const [selectedFocus, setSelectedFocus] = useState('Life Coaching');

  const focusOptions = [
    { id: 'coaching', label: 'Life Coaching', icon: Compass },
    { id: 'healing', label: 'Energy Healing', icon: Zap },
    { id: 'graphotherapy', label: 'Graphotherapy', icon: Feather },
  ];

  const valueProps = [
    { title: "Direct 1-on-1 with Ila", desc: "Private access without intermediaries" },
    { title: "Strict Confidentiality", desc: "Your journey and privacy protected" },
    { title: "Graphotherapy Analysis", desc: "Uncover subconscious handwriting traits" },
    { title: "Holistic Energy Balancing", desc: "Restore emotional and physical alignment" },
  ];

  const handleBooking = () => {
    const contactSection = document.getElementById('contact') || document.getElementById('newsletter');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-20 md:py-28 bg-[#FAF7F2] relative overflow-hidden font-sans">
      
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#536244]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Container Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#536244] rounded-[36px] p-8 md:p-14 lg:p-16 relative overflow-hidden text-[#FAF7F2] shadow-2xl border border-[#536244]/50"
        >
          {/* Subtle Ambient Light Effect inside container */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D6A97A]/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Brand Pitch & Interactive Selection (7 Cols) */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[#D6A97A] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6A97A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6A97A]"></span>
                </span>
                <span>3 Discovery Slots Remaining This Week</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#FAF7F2] tracking-tight leading-[1.15]">
                Ready to break free from subconscious blocks and claim your clarity?
              </h2>

              <p className="text-sm md:text-base text-[#E2DDD3] font-light leading-relaxed max-w-xl">
                Begin with a complimentary 15-minute discovery consultation with Ila Garg. Together, we will pinpoint your root patterns and map out your personal transformation framework.
              </p>

              {/* Interactive Focus Picker */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-[#D6A97A] uppercase tracking-widest block">
                  Select Your Primary Goal:
                </span>
                <div className="flex flex-wrap gap-3">
                  {focusOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = selectedFocus === opt.label;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedFocus(opt.label)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 border ${
                          isSelected
                            ? 'bg-[#D6A97A] text-[#2C302E] border-[#D6A97A] shadow-md scale-105'
                            : 'bg-white/5 text-[#FAF7F2] border-white/15 hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grid Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {valueProps.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D6A97A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-[#FAF7F2]">{item.title}</h4>
                      <p className="text-[11px] text-[#D0C9BD] font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Card Booking Portal (5 Cols) */}
            <div className="lg:col-span-5">
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[#2C302E] rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl text-left relative overflow-hidden"
              >
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D6A97A] via-[#E0B282] to-[#D6A97A]" />

                <div className="space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#D6A97A]">
                        Complimentary Session
                      </span>
                      <h3 className="text-lg font-serif text-[#FAF7F2] font-medium">
                        1:1 Discovery Call
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#536244]/40 flex items-center justify-center text-[#D6A97A] border border-[#536244]">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Summary Details */}
                  <div className="space-y-3 text-xs text-[#D0C9BD]">
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span className="text-stone-400">Duration:</span>
                      <span className="font-medium text-[#FAF7F2]">15 Minutes</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span className="text-stone-400">Focus Area:</span>
                      <span className="font-semibold text-[#D6A97A]">{selectedFocus}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span className="text-stone-400">Location:</span>
                      <span className="font-medium text-[#FAF7F2]">Online (Zoom / WhatsApp)</span>
                    </div>
                  </div>

                  {/* Trust Pill */}
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-[11px] text-stone-300">
                    <ShieldCheck className="w-4 h-4 text-[#D6A97A] shrink-0" />
                    <span>100% Confidential & Tailored to Your Needs</span>
                  </div>

                  {/* Primary CTA Button */}
                  <button
                    onClick={handleBooking}
                    className="w-full py-4 rounded-xl bg-[#D6A97A] hover:bg-[#C99A6A] text-[#2C302E] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group cursor-pointer"
                  >
                    <span>Confirm & Schedule Call</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[10px] text-center text-stone-400 font-light">
                    No payment required. Strictly limited to dedicated seekers.
                  </p>

                </div>
              </motion.div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}