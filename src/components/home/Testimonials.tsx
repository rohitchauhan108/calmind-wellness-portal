import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Sparkles,
  HeartPulse,
  SmilePlus,
  HandHeart,
} from "lucide-react";

export default function Testimonials() {
  const stories = [
    {
      tagline: "Pain, released",
      icon: HeartPulse,
      quote:
        "Doctors told me nothing more could be done. One session with Ila, and my pain went from an 8 to a 4 — in fifteen minutes.",
      name: "Margaret S.",
      context: "Age 70",
    },
    {
      tagline: "Enough, finally felt",
      icon: SmilePlus,
      quote:
        "I kept pushing myself to build more, do more, prove more. Affirmations never worked. One session with Ila and I finally felt what 'enough' actually feels like — not just said it.",
      name: "Priya R.",
      context: "",
    },
    {
      tagline: "Anger, released",
      icon: HandHeart,
      quote:
        "For years I couldn't say what I actually meant to my own family. Working with Ila helped me finally let the anger go — and I got my relationship with them back.",
      name: "James T.",
      context: "",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-28 bg-[#073E42] relative overflow-hidden text-[#FBF9F5]"
    >
      {/* Background Texture & Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilterStories">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilterStories)"
          />
        </svg>
      </div>

      {/* Concentric Geometric Ring Accent (Top Right) */}
      <svg
        className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] text-[#E6B055]/10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
      >
        <circle cx="50" cy="50" r="15" />
        <circle cx="50" cy="50" r="28" />
        <circle cx="50" cy="50" r="42" />
        <circle cx="50" cy="50" r="55" />
      </svg>

      {/* Concentric Geometric Ring Accent (Bottom Left) */}
      <svg
        className="absolute -bottom-16 -left-16 sm:-bottom-20 sm:-left-20 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] text-[#E6B055]/8"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
      >
        <circle cx="50" cy="50" r="18" />
        <circle cx="50" cy="50" r="32" />
        <circle cx="50" cy="50" r="46" />
        <circle cx="50" cy="50" r="58" />
      </svg>

      {/* Soft ambient glow */}
      <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 w-[350px] h-[300px] sm:w-[500px] sm:h-[400px] bg-[#E6B055]/10 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#E6B055_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6B055]/10 border border-[#E6B055]/25 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E6B055]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#FBF9F5]/90">
              Real Stories
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold tracking-tight leading-[1.12] sm:leading-[1.12]">
            Real People.{" "}
            <span className="italic font-normal text-[#E6B055]">
              Real Shifts.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#FBF9F5]/70 font-normal leading-relaxed">
            A small look at what has shifted for people just like you, in a
            single session.
          </p>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={story.tagline}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#FBF9F5]/5 backdrop-blur-md border border-white/10 rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 lg:p-8 hover:bg-[#FBF9F5]/[0.08] hover:border-[#E6B055]/30 transition-all duration-400 shadow-xl hover:shadow-[#000]/30 flex flex-col"
              >
                {/* Top accent bar - gold */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#E6B055]/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Gold corner quote decoration */}
                <Quote className="absolute top-4 right-4 w-7 h-7 sm:w-9 sm:h-9 text-[#E6B055]/20 group-hover:text-[#E6B055]/30 transition-colors" />

                {/* Icon + Tagline Row */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E6B055]/12 border border-[#E6B055]/25 flex items-center justify-center group-hover:bg-[#E6B055]/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E6B055]" />
                  </div>
                  <div>
                    <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#E6B055]">
                      {story.tagline}
                    </span>
                    <div className="flex items-center gap-0.5 mt-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#E6B055] text-[#E6B055]"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[#FBF9F5]/95 font-serif text-sm sm:text-base lg:text-lg leading-relaxed italic flex-grow mb-6 sm:mb-7">
                  "{story.quote}"
                </p>

                {/* Attribution */}
                <div className="pt-4 sm:pt-5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#FBF9F5] text-xs sm:text-sm tracking-wide">
                      — {story.name}
                    </div>
                    {story.context && (
                      <div className="text-[10px] sm:text-xs text-[#FBF9F5]/55 mt-0.5">
                        {story.context}
                      </div>
                    )}
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E6B055]/10 border border-[#E6B055]/20 flex items-center justify-center group-hover:bg-[#E6B055]/15 transition-colors shrink-0">
                    <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6B055]/80" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
