'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function Programs() {
  const [isVIP, setIsVIP] = useState(false);

  const programsList = [
    {
      badge: "1-on-1 Coaching",
      title: "The Personal Empowerment Pathway",
      tagline: "3-Month Transformative Mentorship",
      desc: "Perfect for individuals seeking deep clarity, authentic self-belief, and purpose. Includes regular coaching, targeted subconscious block clearing, and custom handwriting transformation guides.",
      rating: "5.0",
      features: [
        "Six private 75-minute Life Coaching sessions",
        "Full scientific handwriting analysis & custom Graphotherapy exercises",
        "Subconscious habit and limiting belief detection",
        "Continuous accountability and progress tracking",
        "Direct email & messaging support between sessions",
      ],
      priceIndividual: 450,
      priceVIP: 750,
      img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    },
    {
      badge: "Healing & Restoration",
      title: "The Energetic Rebirth Intensive",
      tagline: "4-Week Emotional Decompression",
      desc: "Engineered specifically for those suffering from high stress, heavy anxiety, emotional fatigue, or blocks. Combines powerful energetic clearing with calming somatic exercises.",
      rating: "4.9",
      features: [
        "Four private 60-minute Energy Healing sessions",
        "Deep somatic decompression and mental silence protocol",
        "Handwriting strokes optimized specifically for anxiety relief",
        "Personalized daily meditation & grounding practices",
        "Weekly energetic field assessments",
      ],
      priceIndividual: 320,
      priceVIP: 550,
      img: "https://images.pexels.com/photos/34423/dandelion-seeds-pointed-flower-plant.jpg",
    },
    {
      badge: "Complete Integration",
      title: "The Subconscious Alignment Journey",
      tagline: "6-Month Signature Evolution",
      desc: "Our flagship, deeply restorative program. We systematically map, rewrite, and heal every facet of your thoughts, emotions, habits, and energetic blockages for permanent life transformation.",
      rating: "5.0",
      features: [
        "Twelve private Coaching & Energy Healing sessions",
        "Full detailed Graphotherapy analysis and ongoing redesign",
        "Comprehensive root-cause discovery audits",
        "Custom behavioral habit-shift protocol designed weekly",
        "Priority scheduling and unlimited high-touch support",
      ],
      priceIndividual: 950,
      priceVIP: 1550,
      img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="programs"
      className="py-24 sm:py-28 lg:py-32 bg-[#FBF9F5] relative overflow-hidden text-[#1C2826]"
    >
      {/* Background Pattern Lines & Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Tactile Paper Noise Texture Filter */}
        <svg className="absolute inset-0 w-full h-full opacity-20 z-0">
          <filter id="noiseFilterPrograms">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterPrograms)" />
        </svg>

        {/* Clean Linear Grid Backdrop */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #073E42 1px, transparent 1px), linear-gradient(to bottom, #073E42 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Decorative Modern Geometric Pattern Lines */}
        <svg
          className="absolute top-0 right-0 w-full h-full text-[#073E42]/10"
          viewBox="0 0 1200 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M 800,-100 L 1300,400" strokeWidth="1.5" />
          <path d="M 850,-100 L 1350,400" strokeDasharray="6 6" />
          <path d="M 900,-100 L 1400,400" strokeWidth="0.5" />
          <line x1="1000" y1="0" x2="1000" y2="800" strokeDasharray="4 8" />

          <path d="M -100,550 L 500,550" strokeWidth="1" />
          <path d="M -100,580 L 450,580" strokeDasharray="8 8" />
          <path d="M -100,610 L 400,610" strokeWidth="0.5" />
          <circle cx="500" cy="550" r="3" fill="#073E42" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Ambient Forest Color Glow Spheres */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#073E42]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-[#073E42]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073E42]/10 border border-[#073E42]/15 text-[#073E42] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#073E42]" />
            <span>Pathways of Growth</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-[#073E42] tracking-tight leading-tight font-bold">
            Curated Programs for Lasting Transformation
          </h2>
          <p className="text-[#1C2826]/80 font-normal text-base md:text-lg max-w-xl">
            Bespoke holistic frameworks integrating Life Coaching, Energy Healing, and Graphotherapy to help you dissolve blocks and grow.
          </p>

          {/* Pricing Selector Toggle */}
          <div className="pt-4 flex items-center gap-3">
            <span className={`text-sm font-semibold transition-colors ${!isVIP ? 'text-[#073E42]' : 'text-[#1C2826]/60'}`}>
              Standard Individual
            </span>
            <button
              onClick={() => setIsVIP(!isVIP)}
              className="w-14 h-7 rounded-full bg-[#073E42]/15 p-1 flex items-center transition-colors duration-300 relative focus:outline-none cursor-pointer"
              aria-label="Toggle tier"
            >
              <motion.div
                layout
                className="w-5 h-5 rounded-full bg-[#073E42] shadow-sm"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ marginLeft: isVIP ? 'auto' : '0' }}
              />
            </button>
            <span className={`text-sm font-semibold transition-colors ${isVIP ? 'text-[#073E42]' : 'text-[#1C2826]/60'}`}>
              VIP High-Touch Tier{" "}
              <span className="text-xs bg-[#073E42]/10 text-[#073E42] px-2 py-0.5 rounded ml-1 font-semibold border border-[#073E42]/15">
                Priority Support
              </span>
            </span>
          </div>
        </div>

        {/* Programs Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="programs-grid">
          {programsList.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white/90 backdrop-blur-xl border border-[#073E42]/15 rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Header */}
                <div className="relative aspect-video overflow-hidden bg-[#073E42]/5">
                  <Image
                    src={prog.img}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#073E42] border border-[#073E42]/10 shadow-sm">
                    {prog.badge}
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-[#073E42]/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#E6B055] text-[#E6B055]" />
                    <span>{prog.rating}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-serif text-[#073E42] leading-tight font-bold">
                      {prog.title}
                    </h3>
                    <p className="text-[#073E42] font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {prog.tagline}
                    </p>
                  </div>

                  <p className="text-[13.5px] text-[#1C2826]/80 font-medium leading-relaxed">
                    {prog.desc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-[#073E42]">
                      Comprehensive Inclusions:
                    </h4>
                    <div className="space-y-2">
                      {prog.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs font-medium text-[#1C2826]/80 leading-snug"
                        >
                          <span className="w-4 h-4 rounded-full bg-[#073E42]/10 text-[#073E42] flex items-center justify-center shrink-0 mt-0.5">
                            <ShieldCheck className="w-3 h-3" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & CTA Footer */}
              <div className="p-8 pt-0 border-t border-[#073E42]/10 mt-auto">
                <div className="flex items-baseline gap-1.5 py-6">
                  <span className="text-2xl font-serif font-bold text-[#073E42]">
                    ${isVIP ? prog.priceVIP.toLocaleString() : prog.priceIndividual.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#1C2826]/70 font-medium">
                    / USD program fee
                  </span>
                </div>

                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      alert(
                        `Inquiry Confirmed: Booking interest in "${prog.title}" has been registered. Please complete the contact form below to schedule your diagnostic call.`
                      );
                    }
                  }}
                  className="w-full py-4 rounded-full bg-[#073E42] hover:bg-[#073E42]/90 text-white transition-colors duration-300 flex items-center justify-center gap-2 text-[14px] font-medium cursor-pointer shadow-md group"
                >
                  Request Consultation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}