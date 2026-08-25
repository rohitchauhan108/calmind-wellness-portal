'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  UserRound,
  Crown,
  Heart,
  Users,
  PenTool,
  Baby,
  Sparkles,
  Compass,
} from 'lucide-react';

export default function CTA() {
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const [selectedFocus, setSelectedFocus] = useState('1:1 Life Coaching');

  const focusOptions = [
    { id: '1on1', label: '1:1 Life Coaching', icon: UserRound },
    { id: 'vip', label: 'VIP Coaching', icon: Crown },
    { id: 'healing', label: '1:1 Healing', icon: Heart },
    { id: 'group', label: 'Focused Group Programs', icon: Users },
    { id: 'graphotherapy', label: 'Graphotherapy', icon: PenTool },
    { id: 'kids', label: 'Program for Kids', icon: Baby },
  ];

  const valueProps = [
    { title: 'Direct 1-on-1 with Practitioner', desc: 'Private access without intermediaries' },
    { title: 'Strict Confidentiality', desc: 'Your journey and privacy protected' },
    { title: 'Personalised Framework', desc: 'Tailored to your unique goals and patterns' },
    { title: 'Holistic Approach', desc: 'Inner work + aligned action for real results' },
  ];

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
      className="py-24 md:py-24 bg-[#FBF9F5] text-[#1C2826] relative overflow-hidden"
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

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#073E42]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-[#073E42] rounded-[36px] p-8 md:p-14 lg:p-16 relative overflow-hidden text-[#FBF9F5] shadow-2xl border border-[#073E42]/20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[#FBF9F5] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6B055]" />
                  <span>Take The Next Step</span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.05]">
                  Your life changes when{' '}
                  <span className="italic font-normal text-[#E6B055]">you do.</span>
                </h2>

                <div className="space-y-3 max-w-xl">
                  <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed">
                    You don&apos;t need to have everything figured out before you begin.
                  </p>
                  <p className="text-sm md:text-base text-white/70 font-normal leading-relaxed">
                    If there&apos;s an area of your life you want to change, grow or create more in,
                    let&apos;s start with a conversation.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-white/90 uppercase tracking-widest block">
                    Select Your Service:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {focusOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = selectedFocus === opt.label;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => setSelectedFocus(opt.label)}
                          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 border cursor-pointer ${
                            isSelected
                              ? 'bg-[#FBF9F5] text-[#073E42] border-[#FBF9F5] shadow-md scale-105'
                              : 'bg-white/5 text-[#FBF9F5] border-white/15 hover:bg-white/10'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  {valueProps.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-semibold text-white">{item.title}</h4>
                        <p className="text-[11px] text-white/70 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1C2826] rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FBF9F5]/20 via-[#E6B055] to-[#FBF9F5]/20" />

                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#FBF9F5]/80">
                          Complimentary Session
                        </span>
                        <h3 className="text-lg font-serif text-white font-medium">
                          1:1 Discovery Call
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#073E42] flex items-center justify-center text-[#FBF9F5] border border-[#073E42]/50">
                        <Clock className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-3 text-xs text-[#FBF9F5]/80">
                      <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                        <span className="text-[#FBF9F5]/60">Duration:</span>
                        <span className="font-medium text-[#FBF9F5]">15 Minutes</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                        <span className="text-[#FBF9F5]/60">Service:</span>
                        <span className="font-semibold text-[#FBF9F5] text-right">{selectedFocus}</span>
                      </div>
                      <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                        <span className="text-[#FBF9F5]/60">Location:</span>
                        <span className="font-medium text-[#FBF9F5]">Online (Zoom / WhatsApp)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 text-[11px] text-[#FBF9F5]/80">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>100% Confidential & Tailored to Your Needs</span>
                    </div>

                    <button
                      onClick={handleBooking}
                      className="w-full py-4 rounded-xl bg-[#FBF9F5] hover:bg-white text-[#073E42] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group cursor-pointer"
                    >
                      <Compass className="w-4 h-4 text-[#E6B055]" />
                      <span>Confirm & Schedule Call</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="text-[10px] text-center text-[#FBF9F5]/60 font-medium">
                      No payment required. Strictly limited to dedicated seekers.
                    </p>
                  </div>
                </motion.div>

                <button
                  onClick={handleExplore}
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-[#FBF9F5] font-medium text-sm transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20"
                >
                  <span>Explore Ways to Work With Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 opacity-70" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
