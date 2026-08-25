"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Compass, HeartHandshake } from "lucide-react";

export default function About() {
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const coreValues = [
    {
      icon: HeartHandshake,
      title: "Compassion & Confidentiality",
      desc: "A completely warm, judgment-free, and strictly confidential space to navigate what you're going through.",
    },
    {
      icon: Compass,
      title: "Practical & Subconscious Integration",
      desc: "Blending the practical, forward-moving alignment of Life Coaching with deep subconscious rewriting via Graphotherapy.",
    },
    {
      icon: Award,
      title: "Root-Cause Directed",
      desc: "Identifying and shifting deep-seated subconscious habits and energy blocks — not just managing the symptoms.",
    },
  ];

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
      transition: { duration: 0.7, ease: easeCurve },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#FBF9F5] text-[#1C2826] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilterAbout">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterAbout)" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#073E42]/10 rounded-full blur-[130px] pointer-events-none -mr-24 -mt-16" />
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-[#E6B055]/8 rounded-full blur-[140px] pointer-events-none -ml-24 -mb-16" />
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative" id="about-images">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, ease: easeCurve }}
              className="relative w-full max-w-[400px] mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 rounded-[30px] border-2 border-[#073E42]/15 translate-x-4 -translate-y-4 pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -right-4 sm:-right-6 top-10 sm:top-12 bg-[#073E42] text-white p-4 sm:p-5 rounded-2xl shadow-xl max-w-[210px] z-20 border border-[#E6B055]/20"
              >
                <p className="text-[12px] italic font-medium leading-relaxed">
                  "Your inner world shapes what's possible outside. Change the one, and the other begins to follow."
                </p>
                <span className="block text-[10px] uppercase tracking-wider text-[#E6B055] mt-3 font-semibold">
                  — Ila Garg, Founder
                </span>
              </motion.div>

              <div className="relative rounded-[28px] overflow-hidden aspect-[3/4] shadow-2xl bg-white border-4 border-white/90">
                <img
                  src="/founder.jpeg"
                  alt="Ila Garg — Transformation practitioner"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#073E42]/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 space-y-8"
            id="about-content"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073E42]/8 border border-[#073E42]/15 backdrop-blur-sm">
                <HeartHandshake className="w-3.5 h-3.5 text-[#E6B055]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#073E42]">
                  About the Practice
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#073E42] font-bold tracking-tight leading-[1.12]">
                Empowering your true, authentic self.
              </h2>

              <p className="text-[#1C2826]/80 font-normal text-base sm:text-lg leading-relaxed">
                Ila Garg is a wellness and personal transformation practice
                helping individuals move past emotional, mental, and behavioural
                patterns that no longer serve them. By combining practical life
                coaching with deep subconscious rewriting through clinical
                graphotherapy, we help you dissolve limiting self-talk, release
                inner blockages, and begin living the life you know you're meant
                for.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 pt-2"
            >
              {coreValues.map((val, index) => {
                const Icon = val.icon;
                return (
                  <div
                    key={index}
                    className="group relative flex gap-4 items-start p-4 sm:p-5 rounded-2xl bg-white border border-[#073E42]/10 hover:border-[#073E42]/30 hover:shadow-xl hover:shadow-[#073E42]/8 transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E6B055]/70 via-[#E6B055] to-[#E6B055]/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                    <div className="w-11 h-11 rounded-xl bg-[#073E42]/8 flex items-center justify-center shrink-0 group-hover:bg-[#073E42] group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#073E42] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <h4 className="font-serif text-lg font-semibold text-[#073E42]">
                        {val.title}
                      </h4>
                      <p className="text-sm font-normal text-[#1C2826]/75 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>

                    <div className="absolute bottom-4 left-[76px] h-1 w-10 rounded-full bg-gradient-to-r from-[#073E42] via-[#073E42]/80 to-[#E6B055] opacity-0 group-hover:opacity-80 group-hover:w-20 transition-all duration-500" />
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-6 mt-2 border-t border-[#073E42]/10 flex items-center gap-4"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#E6B055]/30 blur-sm scale-110" />
                <img
                  src="/founder.jpeg"
                  alt="Ila Garg Portrait"
                  referrerPolicy="no-referrer"
                  className="relative w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
              </div>
              <div>
                <span className="font-serif text-[#073E42] font-semibold block">
                  Ila Garg
                </span>
                <span className="text-xs text-[#073E42]/75 font-medium">
                  Founder · Life Coach · Energy Healer · Certified Graphotherapist
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
