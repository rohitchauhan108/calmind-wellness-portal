"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Coins,
  HeartPulse,
  Sparkle,
  Sun,
  PhoneCall,
  CheckCircle2,
  Users,
  Video,
  CalendarClock,
} from "lucide-react";
import RegistrationModal, { FreeProgramId } from "../../components/experience/RegistrationModal";

type Offering = {
  id: FreeProgramId;
  number: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string[];
  meta: string;
  freeTag: string;
  ctaText: string;
  icon: React.ReactNode;
  tone: "light" | "dark";
};

const OFFERINGS: Offering[] = [
  {
    id: "money-abundance",
    number: "01",
    eyebrow: "MONEY & ABUNDANCE",
    title: "Money & Abundance",
    tagline: "First Session Complimentary",
    description: [
      "Explore the beliefs, emotions and subconscious patterns shaping your relationship with money — and begin opening yourself to greater abundance.",
    ],
    meta: "Live Online · First Session Complimentary",
    freeTag: "First Session Complimentary",
    ctaText: "Register Free",
    icon: <Coins className="h-6 w-6" />,
    tone: "light",
  },
  {
    id: "fit-free",
    number: "02",
    eyebrow: "FIT & FREE",
    title: "Fit & Free",
    tagline: "First Session Complimentary",
    description: [
      "Have you tried diets, workouts or routines again and again, only to find yourself falling back into the same patterns?",
      "Explore what may be underneath cravings, emotional eating, overeating and inconsistency — beyond simply focusing on food and exercise.",
    ],
    meta: "Live Online · First Session Complimentary",
    freeTag: "First Session Complimentary",
    ctaText: "Register Free",
    icon: <HeartPulse className="h-6 w-6" />,
    tone: "dark",
  },
  {
    id: "chakra-balancing",
    number: "03",
    eyebrow: "CHAKRA ACTIVATION & BALANCING",
    title: "Chakra Activation & Balancing Practice",
    tagline: "First 15 Days Free",
    description: [
      "Experience a guided practice combining grounding, breathwork, chakra activation, alignment and balancing to support greater inner balance and well-being.",
    ],
    meta: "Live Online · First 15 Days Free",
    freeTag: "First 15 Days Free",
    ctaText: "Start 15 Days Free",
    icon: <Sparkle className="h-6 w-6" />,
    tone: "dark",
  },
  {
    id: "raise-frequency",
    number: "04",
    eyebrow: "RAISE YOUR FREQUENCY — DAILY",
    title: "Raise Your Frequency — Daily Practice",
    tagline: "First 15 Days Free",
    description: [
      "Take 15–20 minutes to intentionally reset, align and elevate your day through intention alignment, affirmations and frequency-raising guided practices.",
    ],
    meta: "Live Online · First 15 Days Free",
    freeTag: "First 15 Days Free",
    ctaText: "Start 15 Days Free",
    icon: <Sun className="h-6 w-6" />,
    tone: "light",
  },
];

const CLARITY_CALL: Offering = {
  id: "clarity-call",
  number: "05",
  eyebrow: "COMPLIMENTARY CLARITY CALL",
  title: "Complimentary Clarity Call",
  tagline: "Not sure where to begin?",
  description: [
    "Book a complimentary Clarity Call to briefly discuss what you&apos;re looking to work on and explore which program or way of working together may be the right place to start.",
  ],
  meta: "No-obligation conversation · Complimentary",
  freeTag: "Complimentary",
  ctaText: "Book a Clarity Call",
  icon: <PhoneCall className="h-7 w-7" />,
  tone: "light",
};

export default function ExperienceItFreePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<FreeProgramId | null>(null);

  const openRegister = (id: FreeProgramId) => {
    setSelectedProgram(id);
    setModalOpen(true);
  };

  return (
    <main className="theme-page min-h-screen bg-[#FBF9F5] text-[#0D3C38] antialiased selection:bg-[#0D3C38]/10">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-[#0D3C38]/10 px-6 pb-20 pt-24 lg:px-16 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute right-1/4 top-0 h-[500px] w-[500px] -translate-y-1/3 rounded-full bg-[#E6B055]/10 blur-[140px]" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] translate-y-1/4 rounded-full bg-[#0D3C38]/8 blur-[130px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13,60,56,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(13,60,56,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl space-y-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6B055]/30 bg-[#E6B055]/12 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]">
            <Sparkles className="h-3.5 w-3.5 text-[#C48F3A]" />
            <span>Start here — no credit card required</span>
          </div>

          <div className="space-y-4">
            <p className="mx-auto max-w-2xl text-xs font-bold uppercase tracking-[0.28em] text-[#0D3C38]/55 sm:text-sm">
              EXPERIENCE IT FREE
            </p>
            <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Experience the work{" "}
              <span className="font-normal italic relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#E6B055] to-[#C48F3A]">
                for yourself.
              </span>
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#0D3C38]/75 sm:text-lg">
            Sometimes the best way to understand whether something is right for
            you is to experience it. Choose where you&apos;d like to begin.
          </p>

          <div className="mx-auto flex max-w-xl flex-wrap items-center justify-center gap-3 pt-2 text-xs text-[#0D3C38]/60 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#0D3C38]/40" />
              No payment details
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D3C38]/30" />
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4 text-[#0D3C38]/40" />
              Live online
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D3C38]/30" />
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#0D3C38]/40" />
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* ============ OFFERINGS GRID ============ */}
      <section className="relative px-6 py-16 lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-px bg-gradient-to-r from-transparent via-[#0D3C38]/15 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {OFFERINGS.slice(0,1).map((offering) => {
              const isDark = offering.tone === "dark";

              return (
                <article
                  id="money-abundance"
                  key={offering.id}
                  // id={offering.id}
                  style={
                    isDark
                      ? {
                          background:
                            "linear-gradient(160deg,#0d3c38 0%,#12514c 55%,#08292C 100%)",
                          color: "white",
                          borderColor: "rgba(255,255,255,0.1)",
                          boxShadow:
                            "0 20px 45px -20px rgba(13,60,56,0.35)",
                        }
                      : undefined
                  }
                  className={`group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 lg:p-9 ${
                    isDark
                      ? "text-white"
                      : "border-[#0D3C38]/10 bg-[#FFFBF2] text-[#0D3C38] shadow-sm hover:shadow-xl hover:shadow-[#0D3C38]/10"
                  }`}
                >
                  {!isDark && (
                    <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#E6B055]/8 blur-3xl" />
                  )}
                  {isDark && (
                    <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#E6B055]/10 blur-3xl" />
                  )}

                  <div className="relative z-10 mb-7">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isDark
                          ? "bg-white/10 text-[#E6B055]"
                          : "bg-[#E6B055]/12 text-[#C48F3A]"
                      }`}
                    >
                      {offering.icon}
                    </div>
                  </div>

                  <div className="relative z-10 mb-5 min-h-[120px] space-y-2.5">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
                        isDark ? "text-[#FBF9F5]/55" : "text-[#0D3C38]/55"
                      }`}
                    >
                      {offering.eyebrow}
                    </p>
                    <h3
                      className={`font-serif text-[26px] font-bold leading-[1.18] sm:text-[28px] ${
                        isDark ? "text-white" : "text-[#0D3C38]"
                      }`}
                    >
                      {offering.title}
                    </h3>
                    <p
                      className={`text-sm font-medium leading-snug ${
                        isDark ? "text-[#FBF9F5]/75" : "text-[#0D3C38]/70"
                      }`}
                    >
                      {offering.tagline}
                    </p>
                  </div>

                  <div
                    className={`relative z-10 mb-8 flex-1 space-y-3 text-sm leading-relaxed ${
                      isDark ? "text-[#FBF9F5]/70" : "text-[#0D3C38]/70"
                    }`}
                  >
                    {offering.description.map((para, idx) => (
                      <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                  </div>

                  <div
                    style={
                      isDark
                        ? { backgroundColor: "rgba(255,255,255,0.12)" }
                        : undefined
                    }
                    className={`relative z-10 mb-5 h-px w-full ${
                      isDark ? "" : "bg-[#0D3C38]/8"
                    }`}
                  />

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div
                      className={`inline-flex flex-1 items-center gap-1.5 text-[11px] font-medium leading-snug ${
                        isDark ? "text-[#FBF9F5]/60" : "text-[#0D3C38]/60"
                      }`}
                    >
                      <Video
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isDark ? "text-[#E6B055]" : "text-[#C48F3A]"
                        }`}
                      />
                      <span className="whitespace-normal">{offering.meta}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openRegister(offering.id)}
                      className={`group inline-flex h-12 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-5 text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-250 sm:px-6 sm:text-[13px] ${
                        isDark
                          ? "bg-[#E6B055] text-[#0D3C38] shadow-lg shadow-[#0D3C38]/20 hover:bg-[#F3CE88]"
                          : "bg-[#0D3C38] text-white shadow-md shadow-[#0D3C38]/10 hover:bg-[#08292C] hover:shadow-lg hover:shadow-[#0D3C38]/15"
                      }`}
                    >
                      <span className="whitespace-nowrap">{offering.ctaText}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              );
            })}
            {OFFERINGS.slice(1,2).map((offering) => {
              const isDark = offering.tone === "dark";

              return (
                <article
                  key={offering.id}
                  id={offering.id}
                  style={
                    isDark
                      ? {
                          background:
                            "linear-gradient(160deg,#0d3c38 0%,#12514c 55%,#08292C 100%)",
                          color: "white",
                          borderColor: "rgba(255,255,255,0.1)",
                          boxShadow:
                            "0 20px 45px -20px rgba(13,60,56,0.35)",
                        }
                      : undefined
                  }
                  className={`group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 lg:p-9 ${
                    isDark
                      ? "text-white"
                      : "border-[#0D3C38]/10 bg-[#FFFBF2] text-[#0D3C38] shadow-sm hover:shadow-xl hover:shadow-[#0D3C38]/10"
                  }`}
                >
                  {!isDark && (
                    <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#E6B055]/8 blur-3xl" />
                  )}
                  {isDark && (
                    <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#E6B055]/10 blur-3xl" />
                  )}

                  {/* <div className="relative z-10 mb-7 flex items-start justify-between gap-4">
                    <div
                      className={`font-mono text-[13px] font-bold tracking-[0.22em] ${
                        isDark ? "text-[#E6B055]" : "text-[#0D3C38]/40"
                      }`}
                    >
                      {offering.number}
                    </div>
                    <div
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${
                        isDark
                          ? "bg-white/10 text-[#E6B055]"
                          : "bg-[#E6B055]/10 text-[#C48F3A]"
                      }`}
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      <span className="whitespace-nowrap">{offering.freeTag}</span>
                    </div>
                  </div> */}

                  <div className="relative z-10 mb-7">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isDark
                          ? "bg-white/10 text-[#E6B055]"
                          : "bg-[#E6B055]/12 text-[#C48F3A]"
                      }`}
                    >
                      {offering.icon}
                    </div>
                  </div>

                  <div className="relative z-10 mb-5 min-h-[120px] space-y-2.5">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
                        isDark ? "text-[#FBF9F5]/55" : "text-[#0D3C38]/55"
                      }`}
                    >
                      {offering.eyebrow}
                    </p>
                    <h3
                      className={`font-serif text-[26px] font-bold leading-[1.18] sm:text-[28px] ${
                        isDark ? "text-white" : "text-[#0D3C38]"
                      }`}
                    >
                      {offering.title}
                    </h3>
                    <p
                      className={`text-sm font-medium leading-snug ${
                        isDark ? "text-[#FBF9F5]/75" : "text-[#0D3C38]/70"
                      }`}
                    >
                      {offering.tagline}
                    </p>
                  </div>

                  <div
                    className={`relative z-10 mb-8 flex-1 space-y-3 text-sm leading-relaxed ${
                      isDark ? "text-[#FBF9F5]/70" : "text-[#0D3C38]/70"
                    }`}
                  >
                    {offering.description.map((para, idx) => (
                      <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                  </div>

                  <div
                    style={
                      isDark
                        ? { backgroundColor: "rgba(255,255,255,0.12)" }
                        : undefined
                    }
                    className={`relative z-10 mb-5 h-px w-full ${
                      isDark ? "" : "bg-[#0D3C38]/8"
                    }`}
                  />

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div
                      className={`inline-flex flex-1 items-center gap-1.5 text-[11px] font-medium leading-snug ${
                        isDark ? "text-[#FBF9F5]/60" : "text-[#0D3C38]/60"
                      }`}
                    >
                      <Video
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isDark ? "text-[#E6B055]" : "text-[#C48F3A]"
                        }`}
                      />
                      <span className="whitespace-normal">{offering.meta}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openRegister(offering.id)}
                      className={`group inline-flex h-12 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-5 text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-250 sm:px-6 sm:text-[13px] ${
                        isDark
                          ? "bg-[#E6B055] text-[#0D3C38] shadow-lg shadow-[#0D3C38]/20 hover:bg-[#F3CE88]"
                          : "bg-[#0D3C38] text-white shadow-md shadow-[#0D3C38]/10 hover:bg-[#08292C] hover:shadow-lg hover:shadow-[#0D3C38]/15"
                      }`}
                    >
                      <span className="whitespace-nowrap">{offering.ctaText}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              );
            })}
            {OFFERINGS.slice(2,3).map((offering) => {
              const isDark = offering.tone === "dark";

              return (
                <article
                  key={offering.id}
                  id={offering.id}
                  style={
                    isDark
                      ? {
                          background:
                            "linear-gradient(160deg,#0d3c38 0%,#12514c 55%,#08292C 100%)",
                          color: "white",
                          borderColor: "rgba(255,255,255,0.1)",
                          boxShadow:
                            "0 20px 45px -20px rgba(13,60,56,0.35)",
                        }
                      : undefined
                  }
                  className={`group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] border p-7 transition-all duration-300 hover:-translate-y-1 order-last md:order-none sm:p-8 lg:p-9 ${
                    isDark
                      ? "text-white"
                      : "border-[#0D3C38]/10 bg-[#FFFBF2] text-[#0D3C38] shadow-sm hover:shadow-xl hover:shadow-[#0D3C38]/10"
                  }`}
                >
                  {!isDark && (
                    <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#E6B055]/8 blur-3xl" />
                  )}
                  {isDark && (
                    <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#E6B055]/10 blur-3xl" />
                  )}

                  {/* <div className="relative z-10 mb-7 flex items-start justify-between gap-4">
                    <div
                      className={`font-mono text-[13px] font-bold tracking-[0.22em] ${
                        isDark ? "text-[#E6B055]" : "text-[#0D3C38]/40"
                      }`}
                    >
                      {offering.number}
                    </div>
                    <div
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${
                        isDark
                          ? "bg-white/10 text-[#E6B055]"
                          : "bg-[#E6B055]/10 text-[#C48F3A]"
                      }`}
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      <span className="whitespace-nowrap">{offering.freeTag}</span>
                    </div>
                  </div> */}

                  <div className="relative z-10 mb-7">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isDark
                          ? "bg-white/10 text-[#E6B055]"
                          : "bg-[#E6B055]/12 text-[#C48F3A]"
                      }`}
                    >
                      {offering.icon}
                    </div>
                  </div>

                  <div className="relative z-10 mb-5 min-h-[120px] space-y-2.5">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
                        isDark ? "text-[#FBF9F5]/55" : "text-[#0D3C38]/55"
                      }`}
                    >
                      {offering.eyebrow}
                    </p>
                    <h3
                      className={`font-serif text-[26px] font-bold leading-[1.18] sm:text-[28px] ${
                        isDark ? "text-white" : "text-[#0D3C38]"
                      }`}
                    >
                      {offering.title}
                    </h3>
                    <p
                      className={`text-sm font-medium leading-snug ${
                        isDark ? "text-[#FBF9F5]/75" : "text-[#0D3C38]/70"
                      }`}
                    >
                      {offering.tagline}
                    </p>
                  </div>

                  <div
                    className={`relative z-10 mb-8 flex-1 space-y-3 text-sm leading-relaxed ${
                      isDark ? "text-[#FBF9F5]/70" : "text-[#0D3C38]/70"
                    }`}
                  >
                    {offering.description.map((para, idx) => (
                      <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                  </div>

                  <div
                    style={
                      isDark
                        ? { backgroundColor: "rgba(255,255,255,0.12)" }
                        : undefined
                    }
                    className={`relative z-10 mb-5 h-px w-full ${
                      isDark ? "" : "bg-[#0D3C38]/8"
                    }`}
                  />

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div
                      className={`inline-flex flex-1 items-center gap-1.5 text-[11px] font-medium leading-snug ${
                        isDark ? "text-[#FBF9F5]/60" : "text-[#0D3C38]/60"
                      }`}
                    >
                      <Video
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isDark ? "text-[#E6B055]" : "text-[#C48F3A]"
                        }`}
                      />
                      <span className="whitespace-normal">{offering.meta}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openRegister(offering.id)}
                      className={`group inline-flex h-12 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-5 text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-250 sm:px-6 sm:text-[13px] ${
                        isDark
                          ? "bg-[#E6B055] text-[#0D3C38] shadow-lg shadow-[#0D3C38]/20 hover:bg-[#F3CE88]"
                          : "bg-[#0D3C38] text-white shadow-md shadow-[#0D3C38]/10 hover:bg-[#08292C] hover:shadow-lg hover:shadow-[#0D3C38]/15"
                      }`}
                    >
                      <span className="whitespace-nowrap">{offering.ctaText}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              );
            })}
            {OFFERINGS.slice(3,4).map((offering) => {
              const isDark = offering.tone === "dark";

              return (
                <article
                  key={offering.id}
                  id={offering.id}
                  style={
                    isDark
                      ? {
                          background:
                            "linear-gradient(160deg,#0d3c38 0%,#12514c 55%,#08292C 100%)",
                          color: "white",
                          borderColor: "rgba(255,255,255,0.1)",
                          boxShadow:
                            "0 20px 45px -20px rgba(13,60,56,0.35)",
                        }
                      : undefined
                  }
                  className={`group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 lg:p-9 ${
                    isDark
                      ? "text-white"
                      : "border-[#0D3C38]/10 bg-[#FFFBF2] text-[#0D3C38] shadow-sm hover:shadow-xl hover:shadow-[#0D3C38]/10"
                  }`}
                >
                  {!isDark && (
                    <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-[#E6B055]/8 blur-3xl" />
                  )}
                  {isDark && (
                    <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#E6B055]/10 blur-3xl" />
                  )}

                  {/* <div className="relative z-10 mb-7 flex items-start justify-between gap-4">
                    <div
                      className={`font-mono text-[13px] font-bold tracking-[0.22em] ${
                        isDark ? "text-[#E6B055]" : "text-[#0D3C38]/40"
                      }`}
                    >
                      {offering.number}
                    </div>
                    <div
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${
                        isDark
                          ? "bg-white/10 text-[#E6B055]"
                          : "bg-[#E6B055]/10 text-[#C48F3A]"
                      }`}
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      <span className="whitespace-nowrap">{offering.freeTag}</span>
                    </div>
                  </div> */}

                  <div className="relative z-10 mb-7">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isDark
                          ? "bg-white/10 text-[#E6B055]"
                          : "bg-[#E6B055]/12 text-[#C48F3A]"
                      }`}
                    >
                      {offering.icon}
                    </div>
                  </div>

                  <div className="relative z-10 mb-5 min-h-[120px] space-y-2.5">
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
                        isDark ? "text-[#FBF9F5]/55" : "text-[#0D3C38]/55"
                      }`}
                    >
                      {offering.eyebrow}
                    </p>
                    <h3
                      className={`font-serif text-[26px] font-bold leading-[1.18] sm:text-[28px] ${
                        isDark ? "text-white" : "text-[#0D3C38]"
                      }`}
                    >
                      {offering.title}
                    </h3>
                    <p
                      className={`text-sm font-medium leading-snug ${
                        isDark ? "text-[#FBF9F5]/75" : "text-[#0D3C38]/70"
                      }`}
                    >
                      {offering.tagline}
                    </p>
                  </div>

                  <div
                    className={`relative z-10 mb-8 flex-1 space-y-3 text-sm leading-relaxed ${
                      isDark ? "text-[#FBF9F5]/70" : "text-[#0D3C38]/70"
                    }`}
                  >
                    {offering.description.map((para, idx) => (
                      <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                  </div>

                  <div
                    style={
                      isDark
                        ? { backgroundColor: "rgba(255,255,255,0.12)" }
                        : undefined
                    }
                    className={`relative z-10 mb-5 h-px w-full ${
                      isDark ? "" : "bg-[#0D3C38]/8"
                    }`}
                  />

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div
                      className={`inline-flex flex-1 items-center gap-1.5 text-[11px] font-medium leading-snug ${
                        isDark ? "text-[#FBF9F5]/60" : "text-[#0D3C38]/60"
                      }`}
                    >
                      <Video
                        className={`h-3.5 w-3.5 shrink-0 ${
                          isDark ? "text-[#E6B055]" : "text-[#C48F3A]"
                        }`}
                      />
                      <span className="whitespace-normal">{offering.meta}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openRegister(offering.id)}
                      className={`group inline-flex h-12 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-5 text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-250 sm:px-6 sm:text-[13px] ${
                        isDark
                          ? "bg-[#E6B055] text-[#0D3C38] shadow-lg shadow-[#0D3C38]/20 hover:bg-[#F3CE88]"
                          : "bg-[#0D3C38] text-white shadow-md shadow-[#0D3C38]/10 hover:bg-[#08292C] hover:shadow-lg hover:shadow-[#0D3C38]/15"
                      }`}
                    >
                      <span className="whitespace-nowrap">{offering.ctaText}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ============ 05 CLARITY CALL ============ */}
          <div className="mt-10 lg:mt-12">
            <article
              key={CLARITY_CALL.id}
              id={CLARITY_CALL.id}
              className="group relative overflow-hidden rounded-[2.25rem] border border-[#0D3C38]/10 bg-white shadow-md shadow-[#0D3C38]/5"
            >
              <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#E6B055]/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(230,176,85,0.07),_transparent_45%)]" />

              <div className="relative z-10 grid grid-cols-1 items-stretch gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-14">
                <div className="flex flex-col justify-between gap-7">
                  <div className="space-y-6">
                    {/* <div className="flex items-start justify-between gap-4">
                      <div className="font-mono text-[13px] font-bold tracking-[0.22em] text-[#0D3C38]/40">
                        {CLARITY_CALL.number}
                      </div>
                      <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#E6B055]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#C48F3A]">
                        <CheckCircle2 className="h-3 w-3" />
                        <span className="whitespace-nowrap">{CLARITY_CALL.freeTag}</span>
                      </div>
                    </div> */}

                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E6B055]/12 text-[#C48F3A]">
                      {CLARITY_CALL.icon}
                    </div>

                    <div className="space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0D3C38]/55">
                        {CLARITY_CALL.eyebrow}
                      </p>
                      <h3 className="font-serif text-[30px] font-bold leading-[1.1] sm:text-[36px] lg:text-[42px]">
                        {CLARITY_CALL.title}
                      </h3>
                      <p className="text-base font-medium leading-snug text-[#0D3C38]/70 sm:text-lg">
                        {CLARITY_CALL.tagline}
                      </p>
                    </div>

                    <div className="space-y-3 text-[15px] leading-relaxed text-[#0D3C38]/70 sm:text-base">
                      {CLARITY_CALL.description.map((para, idx) => (
                        <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#0D3C38]/15 to-transparent lg:block" />

                  <div className="flex w-full flex-col gap-6 rounded-[1.75rem] bg-[#FFFBF2] p-6 sm:p-8 lg:ml-10 lg:p-8">
                    <div className="flex items-center gap-2 text-[13px] font-medium text-[#0D3C38]/60">
                      <CalendarClock className="h-4 w-4 text-[#C48F3A]" />
                      <span>{CLARITY_CALL.meta}</span>
                    </div>

                    <div className="space-y-2 rounded-2xl border border-[#E6B055]/20 bg-[#E6B055]/6 p-4 text-xs leading-relaxed text-[#0D3C38]/65 sm:text-sm">
                      <div className="flex items-center gap-1.5 font-bold text-[#0D3C38]">
                        <Sparkles className="h-4 w-4 text-[#C48F3A]" />
                        <span className="text-[11px] uppercase tracking-[0.16em]">No pressure</span>
                      </div>
                      <p>
                        A short, no-obligation conversation — you won&apos;t be asked to sign up for anything on the call.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openRegister(CLARITY_CALL.id)}
                      className="group mt-2 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#0D3C38] px-6 text-[13px] font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#0D3C38]/15 transition-all hover:bg-[#08292C] sm:text-[14px]"
                    >
                      <span className="whitespace-nowrap">{CLARITY_CALL.ctaText}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ BOTTOM CTA ============ */}
      <section className="px-6 pb-24 lg:px-16 lg:pb-20 pt-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[linear-gradient(to_right,#E6B055_0%,#0D3C38_80%,#0D3C38_20%,#0D3C38_100%)] p-8 text-white shadow-2xl sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0D3C38] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#E6B055]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Have a question before you begin?</span>
              </div>
              <h3 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Still unsure which experience is right for you?
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-white font-semibold sm:text-base">
                Start with a Complimentary Clarity Call — a short,
                no-obligation conversation to briefly discuss what you&apos;re
                looking to work on.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openRegister("clarity-call")}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#E6B055] px-6 text-[13px] font-bold uppercase tracking-[0.16em] text-[#0D3C38] transition-all hover:bg-[#F3CE88] shadow-xl shadow-[#E6B055]/15"
            >
              <span className="whitespace-nowrap">Book a Clarity Call</span>
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      <RegistrationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        programId={selectedProgram}
      />
    </main>
  );
}