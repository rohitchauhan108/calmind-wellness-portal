"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ArrowRight,
  ShieldCheck,
  Star,
  X,
  Compass,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Gift,
} from "lucide-react";

type DummySpeaker = {
  name: string;
  role: string;
  image: string;
};

const SPEAKERS: DummySpeaker[] = [
  {
    name: "Ila Garg",
    role: "Life Coach & Healer",
    image: "/founder.jpeg",
  },
  {
    name: "Shilpa (Guest)",
    role: "Graphotherapist",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Panel Guest 1",
    role: "Executive Coach",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Panel Guest 2",
    role: "Therapist",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Panel Guest 3",
    role: "Career Mentor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Panel Guest 4",
    role: "Wellness Practitioner",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Panel Guest 5",
    role: "Financial Coach",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
      transition: { duration: 0.8, ease: easeCurve },
    },
  };

  const handleRegister = () => {
    window.open(
      "https://calendly.com/ilagarg-official/clarity-call-with-ila",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-[95vh] pt-24 pb-12 sm:pt-28 sm:pb-16 md:pb-20 flex items-center overflow-hidden bg-[#FBF9F5] text-[#1C2826]"
    >
      {/* ==== BACKDROP: DARK TEAL STAGE WASH (matching the SuperGyan vibe) ==== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft teal vertical-gradient backdrop */}
        <div className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-[#0B4A4E]/[0.08] via-[#073E42]/[0.05] to-transparent" />
        {/* Subtle curtain-like vertical light rays */}
        <div
          className="absolute inset-x-0 top-0 h-[62%] opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(7,62,66,0.06) 0px, rgba(7,62,66,0.06) 2px, transparent 2px, transparent 64px)",
          }}
        />
      </div>

      {/* SVG Sacred Patterns, Topography & Noise Texture Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilterHero">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves={3}
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterHero)" />
        </svg>

        <svg
          className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] text-[#073E42]/15"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
        >
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="49" />
          <path d="M50 0 V100 M0 50 H100" strokeDasharray="1 1" />
        </svg>

        <svg
          className="absolute -bottom-28 -left-28 sm:-bottom-40 sm:-left-40 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] text-[#073E42]/10"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M 0,100 Q 100,200 200,100 T 400,100" />
          <path d="M 0,130 Q 100,230 200,130 T 400,130" />
          <path d="M 0,160 Q 100,260 200,160 T 400,160" />
          <path d="M 0,190 Q 100,290 200,190 T 400,190" />
          <path d="M 0,220 Q 100,320 200,220 T 400,220" />
          <path d="M 0,250 Q 100,350 200,250 T 400,250" />
        </svg>
      </div>

      {/* Deep Emerald Ambient Glow Spheres */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#073E42]/10 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none -mr-24 -mt-10 sm:-mr-40 sm:-mt-20" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[#073E42]/8 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -ml-14 -mb-14 sm:-ml-20 sm:-mb-20" />

      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        {/* ======= TOP CENTERED EVENT BADGE ======= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#E6B055]/12 border border-[#E6B055]/30 backdrop-blur-sm shadow-sm">
            <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B28532]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#7A5B21]">
              Complimentary Live Gathering · Limited Seats
            </span>
          </div>
        </motion.div>

        {/* ======= CENTERED HEADLINE + AUDIENCE LINE + REGISTER-FREE CTA ======= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center mx-auto max-w-5xl mb-10 sm:mb-12 md:mb-16"
        >
          {/* Eye-level sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-lg md:text-2xl font-semibold tracking-wide text-[#073E42] mb-2 sm:mb-3 md:mb-4"
          >
            Master the inner skills that actually matter
          </motion.p>

          {/* Big statement headline — "MATTER" gets the gold highlight */}
          <motion.h1
            variants={itemVariants}
            className="text-[32px] sm:text-5xl md:text-6xl lg:text-[72px] tracking-tight font-bold leading-[1.02] text-[#073E42]"
          >
            To build a life that truly{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#E6B055] to-[#B28532]">
              matters
            </span>
            .
          </motion.h1>

          {/* Target audience line */}
          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 md:mt-7 text-[14px] sm:text-base md:text-lg lg:text-xl text-[#1C2826]/80 font-medium max-w-3xl"
          >
            For Working Professionals, Business Owners, Homemakers & Anyone who
            is ready to stop settling and start creating real, lasting change.
          </motion.p>

          {/* EVENT META STRIP */}
          <motion.div
            variants={itemVariants}
            className="mt-5 sm:mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#073E42]/10 px-4 py-2 shadow-sm">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6B055]" />
              <span className="text-[12px] sm:text-sm font-semibold text-[#073E42]">
                17 – 21 September 2026
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#073E42]/10 px-4 py-2 shadow-sm">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6B055]" />
              <span className="text-[12px] sm:text-sm font-semibold text-[#073E42]">
                5 Days · 7:30 PM IST Daily
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#073E42]/10 px-4 py-2 shadow-sm">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6B055]" />
              <span className="text-[12px] sm:text-sm font-semibold text-[#073E42]">
                Live on Zoom + Replays for 7 Days
              </span>
            </div>
          </motion.div>

          {/* REGISTER-FREE CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-7 sm:mt-9 md:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={handleRegister}
              className="group relative inline-flex items-center justify-center gap-2.5 px-9 sm:px-12 py-4 sm:py-[18px] rounded-2xl text-white text-[14px] sm:text-base md:text-lg font-bold uppercase tracking-[0.12em] shadow-[0_18px_42px_-10px_rgba(230,176,85,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-10px_rgba(230,176,85,0.7)] overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-[#1E8A80] via-[#073E42] to-[#062F32]"
              />
              <span
                aria-hidden
                className="absolute inset-[2px] rounded-[calc(1rem-2px)] bg-gradient-to-b from-[#16756C] via-[#094C50] to-[#05292B]"
              />
              <span className="relative z-10 inline-flex items-center gap-2.5 cursor-pointer">
                <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFE9A8]" />
                Register for Free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

           
          </motion.div>

          {/* Tiny trust row below CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-[#073E42]/65 font-semibold uppercase tracking-[0.14em]"
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#073E42]" />
              No Credit Card Required
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#073E42]" />
              Replays Sent To Your Inbox
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#073E42]" />
              Join From Anywhere In The World
            </span>
          </motion.div>
        </motion.div>

       

        {/* ======= 2-COL CONTENT BLOCK (keeps the original copy + portrait below) ======= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: easeCurve }}
          className="mt-14 sm:mt-20 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center"
        >
          {/* Left: Original legacy copy for SEO & warmth */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 md:space-y-7 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeCurve }}
              className="text-[26px] sm:text-4xl md:text-5xl font-serif text-[#073E42] tracking-tight font-bold leading-[1.08]"
            >
              Lasting change <br className="sm:hidden" /> starts within.
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05, ease: easeCurve }}
              className="text-lg sm:text-2xl md:text-3xl font-serif text-[#073E42]/90 leading-tight font-semibold"
            >
              Do you want more from your life?
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeCurve }}
              className="space-y-1.5 sm:space-y-2 text-[14px] sm:text-lg md:text-xl text-[#1C2826]/85 font-medium leading-[1.6]"
            >
              <p>More in your health.</p>
              <p>More in your relationships.</p>
              <p>More in your career.</p>
              <p>More money.</p>
              <p>More confidence.</p>
              <p className="leading-[1.45] sm:leading-relaxed">
                More of the person you know you can be.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: easeCurve }}
              className="text-[13px] sm:text-base md:text-xl text-[#073E42] font-serif italic leading-[1.6] sm:leading-relaxed max-w-md sm:max-w-lg border-l-2 border-[#E6B055] pl-4 sm:pl-5 py-1"
            >
              Change your inner world. Change what becomes possible in your
              outer world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeCurve }}
              className="flex flex-col sm:flex-row items-stretch sm:items-start justify-start gap-3 sm:gap-4 pt-2 sm:pt-1"
            >
              <Link
                href="/how-we-help"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#073E42] text-white hover:bg-[#063033] transition-all duration-300 shadow-lg hover:shadow-[#073E42]/25 flex items-center justify-center gap-2.5 sm:gap-3 group text-[13px] sm:text-base font-medium cursor-pointer w-full sm:w-auto"
              >
                <span>Explore How I Can Help</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Graphic Stack — Ila portrait + floating stat card */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-4 lg:mt-0">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeCurve }}
              className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 bg-gradient-to-br from-[#073E42]/20 to-[#073E42]/10 rounded-[24px] sm:rounded-[32px] blur-sm pointer-events-none" />

              <motion.div
                className="absolute -left-4 sm:-left-8 top-8 sm:top-12 bg-white/90 backdrop-blur-xl p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-[#073E42]/10 z-30 hidden sm:flex items-center gap-2.5 sm:gap-3 max-w-[180px] sm:max-w-[210px]"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#073E42]/10 flex items-center justify-center text-[#073E42] shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-[#073E42]">
                    Subconscious Shift
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-[#073E42]/70 leading-tight">
                    Identify root patterns
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-2 sm:-right-5 bottom-10 sm:bottom-14 bg-white/90 backdrop-blur-xl p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-[#E6B055]/25 z-30 hidden sm:flex items-center gap-2.5 sm:gap-3 max-w-[190px] sm:max-w-[220px]"
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#E6B055]/12 flex items-center justify-center text-[#B28532] shrink-0">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-[#073E42]">
                    500+ Lives Transformed
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-[#073E42]/70 leading-tight">
                    Across 1:1 sessions, groups & retreats
                  </p>
                </div>
              </motion.div>

              <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden aspect-[4/5] shadow-xl sm:shadow-2xl bg-white border-2 sm:border-4 border-white/90">
                <Image
                  src="/founder.jpeg"
                  alt="Ila Garg - Transformation Expert"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#073E42]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C2826]/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#073E42] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="aspect-video w-full relative flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(7, 62, 66, 0.88), rgba(7, 62, 66, 0.88)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                />
                <div className="relative z-10 text-center p-4 sm:p-6 max-w-lg">
                  <Compass className="w-10 h-10 sm:w-14 sm:h-14 text-amber-300 mx-auto mb-3 sm:mb-4 animate-pulse" />
                  <h3 className="text-xl sm:text-2xl sm:text-3xl font-serif text-white mb-2 sm:mb-3">
                    Experience The Method
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 sm:mb-6">
                    A short preview into how tailored coaching unlocks permanent
                    mindset transformation.
                  </p>
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#073E42] font-semibold hover:bg-[#FBF9F5] transition-all shadow-lg cursor-pointer text-sm sm:text-base"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
