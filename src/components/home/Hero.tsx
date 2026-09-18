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
import { FaTv } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import RegistrationModal, {
  FreeProgramId,
} from "../experience/RegistrationModal";

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
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<FreeProgramId | null>(
    null
  );
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const openRegistration = (programId: FreeProgramId) => {
    setSelectedProgram(programId);
    setIsRegistrationOpen(true);
  };

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

  // const handleRegister = () => {
  //   window.open(
  //     "experience-it-free",
  //     "_blank",
  //     "noopener,noreferrer",
  //   );
  // };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-[95vh] pt-24 pb-12 sm:pt-28 sm:pb-16 md:pb-20 flex items-center overflow-hidden bg-[#FBF9F5] text-[#0D3C38]"
    >
      {/* ==== BACKDROP: DARK TEAL STAGE WASH (matching the SuperGyan vibe) ==== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft teal vertical-gradient backdrop */}
        <div className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-[#12514c]/[0.08] via-[#0D3C38]/[0.05] to-transparent" />
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
          className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] text-[#0D3C38]/15"
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
          className="absolute -bottom-28 -left-28 sm:-bottom-40 sm:-left-40 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] text-[#0D3C38]/10"
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
      <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#0D3C38]/10 rounded-full blur-[120px] sm:blur-[150px] pointer-events-none -mr-24 -mt-10 sm:-mr-40 sm:-mt-20" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[#0D3C38]/8 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -ml-14 -mb-14 sm:-ml-20 sm:-mb-20" />

      <div className="absolute inset-0 bg-[radial-gradient(#0D3C38_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        {/* ======= TOP CENTERED EVENT BADGE ======= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeCurve }}
          className="flex justify-center mb-6 sm:mb-8"
        ></motion.div>

        {/* ======= CENTERED HEADLINE + AUDIENCE LINE + REGISTER-FREE CTA ======= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center mx-auto max-w-8xl mb-10 sm:mb-12 md:mb-16"
        >
          {/* Eye-level sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-lg md:text-5xl font-serif font-bold tracking-wide text-[#0D3C38] mb-2 sm:mb-3 md:mb-4"
          >
            MASTER THE INNER SKILLS TO CREATE <br /> A LIFE THAT TRULY MATTERS.
          </motion.p>

          {/* Big statement headline — "MATTER" gets the gold highlight */}
          <motion.h1
            variants={itemVariants}
            className="text-[32px] sm:text-5xl md:text-6xl lg:text-[72px] tracking-tight font-bold leading-[1.02] text-[#0D3C38]"
          >
            {/* To build a life that truly{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#E6B055] to-[#C48F3A]">
              matters
            </span>
            . */}
          </motion.h1>

          {/* Target audience line */}
          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 md:mt-7 text-[14px] sm:text-base md:text-lg lg:text-xl text-[#0D3C38]/80 font-medium max-w-3xl"
          >
            For Anyone Who Is Ready to Stop Settling and Start Creating Real,
            Lasting Change.
          </motion.p>

          {/* ======= COMPLIMENTARY LIVE EXPERIENCES ======= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="mt-5"
          >
            <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-[30px] sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0D3C38] leading-tight">
                Experience the Work for Yourself
              </h2>
              <p className="mt-4 sm:mt-5 text-[14px] sm:text-base md:text-lg text-[#0D3C38]/75 leading-relaxed max-w-3xl mx-auto">
                Sometimes the best way to understand this work is to experience
                it.
              </p>
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#E6B055]/12 border border-[#E6B055]/30 backdrop-blur-sm shadow-sm mt-5">
                <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C48F3A]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#7A5B21]">
                  Complimentary Live Experience
                </span>
              </div>
            </div>

            {/* Two sessions side by side on desktop/tablet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
              {/* --- CARD 1: Money & Abundance --- */}
              <div className="flex flex-col h-full rounded-[24px] sm:rounded-[28px] border-b-4 border-[#0D3C38] shadow-[0_12px_35px_rgba(7,62,66,0.06)] overflow-hidden bg-white">
                {/* Top Section with Background Image */}
                <div className="bg-[url('/home/1.webp')] bg-center bg-cover bg-no-repeat flex flex-col items-start flex-grow p-6 sm:p-8 md:p-9 text-left w-full md:w-[700px]">
                  <div className="relative z-10 flex flex-col items-start h-full text-left">
                    <div>
                      <span className="inline-block text-[8px] sm:text-[11px] lg:font-bold font-semibold uppercase tracking-[0.2em] text-white bg-[#C48F3A] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                        FIRST SESSION COMPLIMENTARY
                      </span>
                    </div>

                    <h3 className="text-left text-[23px] sm:text-2xl md:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
                      Money <span className="text-[#C48F3A]">&amp;</span>
                      <br /> Abundance
                    </h3>

                    <p className="mt-4 max-w-xl text-left text-[14px] sm:text-base text-[#0D3C38]/85 leading-relaxed font-medium">
                      Explore the beliefs,<br className="lg:hidden block"/> emotions and <br className="lg:block hidden"/>
                      subco-<br className="lg:hidden block"/>nscious patterns shaping<br className="lg:hidden block"/> your
                      <br className="lg:block hidden"/>
                      relationship with money <br className="lg:hidden block"/>— and begin
                      <br className="lg:block hidden"/>
                      opening yourself <br className="lg:hidden block"/>to greater abundance.
                    </p>
                  </div>
                </div>

                {/* Bottom Details & Button Section */}
                <div className="p-6 sm:p-8 md:p-9 bg-white/10">
                  <div className="flex items-center flex-wrap gap- sm:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#0D3C38]">
                    <span className="inline-flex items-center gap-1">
                      Live Online
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <GoDotFill className="text-[#0D3C38]" />
                      First Session Complimentary
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openRegistration("money-abundance")}
                    className="group mt-5 lg:w-[40%] flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#0D3C38] text-white text-[10px] sm:text-sm font-bold uppercase tracking-[0.1em] hover:bg-[#08292C] active:scale-[0.99] transition-all duration-300 shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                      REGISTER FREE
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* --- CARD 2: Fit & Free --- */}
              <div className="flex flex-col h-full rounded-[24px] sm:rounded-[28px] border-b-4 border-[#0D3C38] shadow-[0_12px_35px_rgba(7,62,66,0.06)] overflow-hidden bg-white">
                {/* Top Section with Background Image */}
                <div className="bg-[url('/home/2.webp')] bg-center bg-cover bg-no-repeat flex flex-col items-start flex-grow p-6 sm:p-8 md:p-9 text-left">
                  <div className="relative z-10 flex flex-col items-start h-full text-left">
                    <div>
                      <span className="inline-block text-[8px] sm:text-[11px] lg:font-bold font-semibold uppercase tracking-[0.2em] text-white bg-[#0D3C38] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                        FIRST SESSION COMPLIMENTARY
                      </span>
                    </div>

                    <h3 className="whitespace-nowrap text-left text-[23px] sm:text-2xl md:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
                      Fit <span className="text-[#C48F3A]">&amp;</span> Free
                    </h3>

                    <p className="mt-4 max-w-xl text-left text-[14px] sm:text-base text-[#0D3C38]/85 leading-relaxed font-medium">
                      Have you tried diets,<br className="lg:hidden block"/> workouts or routines <br className="lg:block hidden"/> 
                       again<br className="lg:hidden block"/> and again, only to find your<br className="lg:hidden block"/>-self falling
                      <br className="lg:block hidden"/>
                      back into the same<br className="lg:hidden block"/> patterns? Explore what
                      <br className="lg:block hidden"/>
                      may be <br className="lg:hidden block"/>underneath cravings, emotional<br className="lg:hidden block"/>
                      <br className="lg:block hidden"/>
                      eating ,overeating and<br className="lg:hidden block"/> inconsistency —<br className="lg:block hidden"/>
                      beyond<br className="lg:hidden block"/> simply focusing on<br className="lg:hidden block"/> food and
                      <br className="lg:block hidden"/>
                      exercise
                    </p>
                  </div>
                </div>

                {/* Bottom Details & Button Section */}
                <div className="p-6 sm:p-8 md:p-9">
                  <div className="flex items-center flex-wrap gap- sm:gap-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#0D3C38]">
                    <span className="inline-flex items-center gap-1">
                      Live Online
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <GoDotFill className="text-[#0D3C38]" />
                      First Session Complimentary
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openRegistration("fit-free")}
                    className="group mt-5 lg:w-[40%] flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#0D3C38] text-white text-[10px] sm:text-sm font-bold uppercase tracking-[0.1em] hover:bg-[#08292C] active:scale-[0.99] transition-all duration-300 shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                      REGISTER FREE
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D3C38]/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#0D3C38] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
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
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#0D3C38] font-semibold hover:bg-[#FBF9F5] transition-all shadow-lg cursor-pointer text-sm sm:text-base"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <RegistrationModal
        open={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        programId={selectedProgram}
      />
    </section>
  );
}
