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
      className="py-16 sm:py-20 md:py-28 bg-[#FBF9F5] text-[#1C2826] relative overflow-hidden"
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

      <div className="absolute top-0 left-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[#073E42]/8 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none -ml-16 -mt-12 sm:-ml-24 sm:-mt-16" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] bg-[#E6B055]/8 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -mr-16 -mb-12 sm:-mr-24 sm:-mb-16" />
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: easeCurve }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073E42]/8 border border-[#073E42]/15 backdrop-blur-sm">
            <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E6B055]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#073E42]">
              Section 5 · Meet Us
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#073E42] font-bold tracking-tight leading-[1.15] sm:leading-[1.12]">
            Meet the People Behind the Work
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#1C2826]/70 font-normal leading-relaxed">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: easeCurve }}
              className="group relative bg-white rounded-[24px] sm:rounded-[32px] border border-[#073E42]/10 overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 flex flex-col"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${profile.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-[#FAF7F2]">
                <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] border-2 border-[#073E42]/8 translate-x-2 -translate-y-2 sm:translate-x-3 sm:-translate-y-3 pointer-events-none z-10" />

                <img
                  src={profile.image}
                  alt={profile.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#073E42]/35 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/50 shadow-md">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E6B055]" />
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#073E42]">
                      {profile.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7 lg:p-8 flex flex-col flex-grow space-y-4 sm:space-y-5">
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#073E42] tracking-tight leading-tight">
                    {profile.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-[15px] text-[#1C2826]/75 font-normal leading-relaxed flex-grow">
                  {profile.description}
                </p>

                <div className="pt-3 sm:pt-4 mt-1 sm:mt-2 border-t border-[#073E42]/8">
                  <a
                    href={profile.link}
                    className="group/btn inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#073E42] hover:bg-[#073E42]/90 text-[#FBF9F5] font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#073E42]/20 cursor-pointer"
                  >
                    <span>{profile.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
