"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight, Sparkles } from "lucide-react";

export default function MeetUs() {
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const profiles = [
    {
      name: "ILA GARG",
      role: "Life Coach & Healer",
      description:
        "I help people create change in the areas of life that matter to them — by working not only on what they want to achieve, but also on what may need to shift within.",
      image: "/founder.jpeg",
      alt: "Ila Garg — Life Coach & Healer",
      cta: "Meet Ila",
      link: "/about",
      accent: "from-[#E6B055]/70 via-[#E6B055] to-[#E6B055]/70",
    },
    {
      name: "SHILPA",
      role: "Graphotherapist & Handwriting Expert",
      description:
        "Shilpa uses handwriting as a window into behavioural and emotional patterns, helping people understand those patterns and work towards positive change through Graphotherapy.",
      image: "/shilpha.jpeg",
      alt: "Shilpa — Graphotherapist & Handwriting Expert",
      cta: "Meet Shilpa",
      link: "/about",
      accent: "from-[#4A7C7D]/70 via-[#4A7C7D] to-[#4A7C7D]/70",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easeCurve },
    },
  };

  return (
    <section
      id="meet-us"
      className="py-20 md:py-28 bg-[#FBF9F5] text-[#1C2826] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilterMeetUs">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterMeetUs)" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#073E42]/8 rounded-full blur-[130px] pointer-events-none -ml-24 -mt-16" />
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-[#E6B055]/8 rounded-full blur-[140px] pointer-events-none -mr-24 -mb-16" />
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073E42]/8 border border-[#073E42]/15 backdrop-blur-sm">
            <Users className="w-3.5 h-3.5 text-[#E6B055]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#073E42]">
              Section 5 · Meet Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#073E42] font-bold tracking-tight leading-[1.12]">
            Meet the People Behind the Work
          </h2>

          <p className="text-[#1C2826]/70 text-base sm:text-lg font-normal leading-relaxed">
            Different approaches.{" "}
            <span className="italic text-[#073E42] font-medium">One belief</span>{" "}
            — lasting change starts within.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: easeCurve }}
              className="group relative bg-white rounded-[32px] border border-[#073E42]/10 overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 flex flex-col"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${profile.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF7F2]">
                <div className="absolute inset-0 rounded-[32px] border-2 border-[#073E42]/8 translate-x-3 -translate-y-3 pointer-events-none z-10" />

                <img
                  src={profile.image}
                  alt={profile.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#073E42]/30 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-md">
                    <Sparkles className="w-3 h-3 text-[#E6B055]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#073E42]">
                      {profile.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8 flex flex-col flex-grow space-y-5">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#073E42] tracking-tight leading-tight">
                    {profile.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-[15px] text-[#1C2826]/75 font-normal leading-relaxed flex-grow">
                  {profile.description}
                </p>

                <div className="pt-4 mt-2 border-t border-[#073E42]/8">
                  <a
                    href={profile.link}
                    className="group/btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#073E42] hover:bg-[#073E42]/90 text-[#FBF9F5] font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#073E42]/20 cursor-pointer"
                  >
                    <span>{profile.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="absolute bottom-8 left-[84px] h-1 w-0 rounded-full bg-gradient-to-r from-[#073E42] via-[#073E42]/80 to-[#E6B055] opacity-0 group-hover:opacity-80 group-hover:w-20 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
