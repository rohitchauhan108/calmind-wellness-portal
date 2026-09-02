"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Star,
  Check,
  ArrowRight,
  ArrowLeft,
  Calendar,
  PenTool,
  FileSignature,
  Users,
  Baby,
  GraduationCap,
  Shield,
  Clock,
  Award,
  Brain,
  HeartPulse,
  ChevronDown,
  ChevronUp,
  Activity,
} from "lucide-react";

export default function GraphotherapyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleBookCall = () => {
    window.open(
      "https://calendly.com/ilagarg-official/clarity-call-with-ila",
      "_blank"
    );
  };

  const howItWorks = [
    {
      num: "01",
      icon: <FileSignature className="w-6 h-6" />,
      title: "Submit Your Handwriting Sample",
      desc: "You send us 3 pages of natural handwriting (on unlined paper) plus your signature. We guide you through the exact submission protocol.",
      accent: "bg-amber-50 text-amber-700",
    },
    {
      num: "02",
      icon: <Brain className="w-6 h-6" />,
      title: "Scientific Analysis Report",
      desc: "Shilpa conducts a full multi-page grapho-analytical report mapping your subconscious patterns, belief structures, and behavioral signatures.",
      accent: "bg-indigo-50 text-indigo-700",
    },
    {
      num: "03",
      icon: <PenTool className="w-6 h-6" />,
      title: "Custom Stroke Redesign Protocol",
      desc: "We design a personalised Graphotherapy exercise programme: specific letter modifications, daily drills, and progressive weekly rewrites.",
      accent: "bg-emerald-50 text-emerald-700",
    },
    {
      num: "04",
      icon: <Activity className="w-6 h-6" />,
      title: "Daily Practice & Integration",
      desc: "21–66 days of guided 5–15 minute daily practice. We measure behavioural shift markers alongside handwriting evolution.",
      accent: "bg-rose-50 text-rose-700",
    },
    {
      num: "05",
      icon: <Award className="w-6 h-6" />,
      title: "Follow-up Review & Lock-in",
      desc: "We re-analyse at key milestones, refine the strokes, and lock in the new neural patterns for lasting sustainable change.",
      accent: "bg-sky-50 text-sky-700",
    },
  ];

  const offerings = [
    {
      badge: "SIGNATURE",
      name: "Adult Signature & Handwriting Analysis",
      tagline: "Deep-dive Graphotherapy for Adults",
      duration: "4–8 Week Protocol",
      who: "Adults 18+ · Subconscious pattern rewrite",
      img: "",
      imgBg: "from-[#0D3C38] to-[#1a6960]",
      highlights: [
        "Full 3-page handwriting + signature analysis",
        "30+ page behavioural mapping report",
        "1:1 90-min deep-dive debrief with Shilpa",
        "Custom stroke redesign protocol (4–8 weeks)",
        "Weekly submission & feedback loops",
        "2 follow-up review sessions",
        "Optional integration with Ila's coaching",
      ],
      price: "From £497",
      primary: true,
    },
    {
      badge: "KIDS / TEENS",
      name: "Children & Teens Graphotherapy Programme",
      tagline: "Academic & Emotional Confidence",
      duration: "6–12 Week Programme",
      who: "Ages 7–17 · School & parents supported",
      img: "",
      imgBg: "from-[#E6B055] to-[#C48F3A]",
      highlights: [
        "Age-appropriate handwriting analysis",
        "Child-friendly parent + teacher report",
        "Gamified daily practice (5–10 mins)",
        "Academic performance markers tracked",
        "Confidence & focus behaviour observations",
        "Parent guidance sessions included",
        "Monthly school progress check-ins",
      ],
      price: "From £397",
      primary: false,
    },
    {
      badge: "WORKSHOPS",
      name: "Adult Group Graphotherapy Workshops",
      tagline: "Group sessions · Theme-based rewiring",
      duration: "4 x 90 min sessions",
      who: "Group cohorts (8–16 people) · Monthly themes",
      img: "",
      imgBg: "from-[#156056] to-[#0D3C38]",
      highlights: [
        "Monthly rotating themes (confidence, abundance, etc.)",
        "Guided group handwriting analysis intro",
        "Shared accountability practice group",
        "Q&A with Shilpa every session",
        "Light individual feedback included",
        "Upgrade credit available to private programme",
        "Access to private community group",
      ],
      price: "£147 / cohort",
      primary: false,
    },
    {
      badge: "WORKSHOPS",
      name: "Kids Graphotherapy Workshops",
      tagline: "In-school or weekend group sessions",
      duration: "5 weekly 60-min sessions",
      who: "Ages 7–14 · School or private cohorts",
      img: "",
      imgBg: "from-[#C48F3A] to-[#986A25]",
      highlights: [
        "School & parent-approved curriculum",
        "Fun, artful, game-based handwriting drills",
        "Focus, memory, and emotional markers",
        "Take-home practice kit for each child",
        "Mini progress report for every parent",
        "Shilpa-led (CERT. Graphotherapist)",
        "Max cohort size: 12 children",
      ],
      price: "£99 / child",
      primary: false,
    },
  ];

  const outcomes = [
    {
      stat: "87%",
      label: "Report measurable behaviour shifts",
      sub: "Within 30 days of protocol start",
      icon: <Activity className="w-5 h-5" />,
      color: "text-[#059669]",
      bg: "bg-emerald-50",
    },
    {
      stat: "21 days",
      label: "Average first writing change",
      sub: "Handwriting visibly re-patterned",
      icon: <Clock className="w-5 h-5" />,
      color: "text-[#E6B055]",
      bg: "bg-amber-50",
    },
    {
      stat: "1:1",
      label: "With Certified Graphotherapist",
      sub: "Shilpa · 15+ years clinical practice",
      icon: <Award className="w-5 h-5" />,
      color: "text-[#4F46E5]",
      bg: "bg-indigo-50",
    },
    {
      stat: "100%",
      label: "Confidential process",
      sub: "All samples & reports held privately",
      icon: <Shield className="w-5 h-5" />,
      color: "text-[#0D3C38]",
      bg: "bg-[#0D3C38]/8",
    },
  ];

  const faqs = [
    {
      q: "Is Graphotherapy the same as graphology?",
      a: "Graphology is the analysis of handwriting to understand personality & behaviour. Graphotherapy uses that analysis as a starting point and then applies intentional, prescribed changes in handwriting strokes to rewire the underlying subconscious neural patterns. Think: analysis → targeted change.",
    },
    {
      q: "How long until I actually see a change?",
      a: "Most clients see visible handwriting shifts within 21 days of daily practice. Behavioural, emotional, and mindset shifts typically follow within 4–8 weeks as the new neural pathways stabilise.",
    },
    {
      q: "Is it safe? Can handwriting be forced to change?",
      a: "Graphotherapy uses gentle, progressive stroke adjustments — never forced or unnatural changes. All protocols are designed by a Certified Graphotherapist with 15+ years of clinical experience. The process is evidence-informed and stress-free.",
    },
    {
      q: "Can my handwriting actually change my personality?",
      a: "Graphotherapy works with neuroplasticity — repeated specific movements create new neural pathways. The goal is healthier expression of existing strengths and release of self-limiting patterns, not 'changing your personality'.",
    },
    {
      q: "Do you offer Graphotherapy combined with private coaching?",
      a: "Yes — our most popular programmes combine Ila's 1:1 coaching with Shilpa's Graphotherapy work for deeply integrated subconscious + strategic change. Mention this in your clarity call and we'll design a bespoke scope.",
    },
    {
      q: "What handwriting samples do you need?",
      a: "For adults: 3 pages of natural handwriting on unlined A4 paper, plus 5 signatures, dated. For kids: a school writing sample and a free creative writing page. After you book, we send you an exact, simple submission guide.",
    },
  ];

  return (
    <main className="bg-[#FAF8F5] text-[#0D3C38] antialiased min-h-screen font-sans overflow-x-hidden">
      {/* ============ BACK LINK ============ */}
      <section className="pt-24 pb-0 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0D3C38]/60 hover:text-[#0D3C38] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* ============ HERO ============ */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 px-6 lg:px-16 overflow-hidden">
        <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#E6B055]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0D3C38]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E6B055]/12 border border-[#E6B055]/30 backdrop-blur-sm"
              >
                <PenTool className="w-4 h-4 text-[#C48F3A]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0D3C38]">
                  Graphotherapy · Handwriting Rewiring
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#0D3C38] tracking-tight leading-[1.05]"
              >
                Rewire your subconscious
                <span className="block italic font-normal mt-2">
                  with your own <span className="text-[#C48F3A]">handwriting.</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg lg:text-xl text-[#0D3C38]/75 font-normal leading-relaxed max-w-2xl"
              >
                Graphotherapy is a clinically-rooted method of rewiring
                subconscious belief systems and behaviour patterns using
                intentional, prescribed modifications to handwriting strokes.
                Certified Graphotherapist Shilpa leads every analysis, custom
                protocol, and review.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#0D3C38]/70"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
                  <Award className="w-4 h-4 text-[#C48F3A]" />
                  Certified Practitioner · Shilpa
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
                  <Users className="w-4 h-4 text-[#0D3C38]" />
                  1000+ Analysis Delivered
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
                  <GraduationCap className="w-4 h-4 text-[#0D3C38]" />
                  Kids · Teens · Adults Programs
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <button
                  onClick={handleBookCall}
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-[#0D3C38] hover:bg-[#0D3C38]/92 text-[#FBF9F5] font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl hover:shadow-[#0D3C38]/20 transition-all duration-300 cursor-pointer border border-[#0D3C38]/50"
                >
                  <Calendar className="w-4.5 h-4.5 text-[#E6B055]" />
                  Book Your Handwriting Consultation
                  <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-transparent hover:bg-white text-[#0D3C38] font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer border-2 border-[#0D3C38]/20 hover:border-[#0D3C38]/40"
                >
                  Ask About a Custom Programme
                </Link>
              </motion.div>
            </div>

            {/* Hero illustration card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#0D3C38]/15 border border-white/40"
              >
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-[#C48F3A] via-[#E6B055] to-[#FBF9F5] p-8 sm:p-10 text-[#0D3C38] flex flex-col justify-between relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.45),transparent_50%),radial-gradient(circle_at_10%_90%,rgba(13,60,56,0.15),transparent_50%)]" />
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/50 border border-white/60 backdrop-blur-sm">
                      <FileSignature className="w-3.5 h-3.5 text-[#0D3C38]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D3C38]">
                        Handwriting · Neural Rewiring
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-[#0D3C38]">
                      <Star className="w-4 h-4 fill-[#0D3C38] text-[#0D3C38]" />
                      5.0
                    </div>
                  </div>

                  <div className="relative z-10 space-y-7">
                    {/* Stylised handwriting visual */}
                    <div className="space-y-3 font-serif italic text-lg sm:text-xl text-[#0D3C38]/85">
                      <div className="border-b-2 border-[#0D3C38]/20 pb-2 pl-4 border-l-2 border-l-[#E6B055]/60">
                        I am worthy of everything I desire.
                      </div>
                      <div className="border-b-2 border-[#0D3C38]/20 pb-2 pl-4 border-l-2 border-l-[#0D3C38]/40 opacity-80">
                        I move with calm, confident certainty.
                      </div>
                      <div className="border-b-2 border-[#0D3C38]/20 pb-2 pl-4 border-l-2 border-l-[#E6B055]/60 italic">
                        I release what no longer serves me.
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        "Scientific handwriting analysis",
                        "Custom stroke redesign protocol",
                        "1:1 review with Certified Graphotherapist",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="mt-1 w-5 h-5 rounded-full bg-[#0D3C38]/15 border border-[#0D3C38]/25 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-[#0D3C38]" />
                          </span>
                          <p className="text-sm text-[#0D3C38]/85 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUTCOME STATS ============ */}
      <section className="py-14 lg:py-16 px-6 lg:px-16 border-y border-[#0D3C38]/8 bg-white/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl p-6 bg-white border border-[#0D3C38]/10 hover:border-[#E6B055]/50 hover:shadow-xl hover:shadow-[#0D3C38]/8 transition-all duration-400"
            >
              <div
                className={`w-11 h-11 rounded-xl ${o.bg} ${o.color} flex items-center justify-center mb-4`}
              >
                {o.icon}
              </div>
              <div className={`text-3xl sm:text-4xl font-serif font-bold ${o.color} leading-none mb-1.5`}>
                {o.stat}
              </div>
              <div className="text-sm font-semibold text-[#0D3C38] leading-snug mb-1">
                {o.label}
              </div>
              <div className="text-xs text-[#0D3C38]/60">
                {o.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(circle,rgba(13,60,56,0.06),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C48F3A]">
              The Graphotherapy Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
              From handwriting sample <span className="italic font-normal">to lasting change.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {howItWorks.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-6 sm:p-7 bg-white border border-[#0D3C38]/10 hover:border-[#0D3C38]/25 hover:shadow-xl hover:shadow-[#0D3C38]/8 transition-all duration-400 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-13 h-13 rounded-2xl ${s.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} style={{ width: "3.25rem", height: "3.25rem" }}>
                    {s.icon}
                  </div>
                  <span className="font-serif text-xl font-bold text-[#E6B055]/80">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#0D3C38] mb-2.5 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-[#0D3C38]/70 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OFFERINGS GRID ============ */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-gradient-to-b from-white/50 via-[#FBF9F5] to-[#FBF9F5] border-t border-[#0D3C38]/8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-18 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C48F3A]">
              Programmes & Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
              Graphotherapy for every age & stage
            </h2>
            <p className="text-base sm:text-lg text-[#0D3C38]/70 leading-relaxed">
              Private deep-dive protocols for adults & kids, plus cohort
              workshops for community-led rewiring. All led by Certified
              Graphotherapist Shilpa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {offerings.map((off, i) => (
              <motion.article
                key={off.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-[2rem] overflow-hidden bg-white border transition-all duration-400 ${
                  off.primary
                    ? "border-[#E6B055]/40 hover:border-[#E6B055]/80 shadow-2xl shadow-[#0D3C38]/15 lg:grid lg:grid-cols-12 lg:gap-0"
                    : "border-[#0D3C38]/10 hover:border-[#0D3C38]/25 hover:shadow-2xl hover:shadow-[#0D3C38]/10"
                }`}
              >
                {/* Visual column */}
                <div
                  className={`${
                    off.primary
                      ? "lg:col-span-5 lg:h-full min-h-[220px] lg:min-h-full"
                      : "min-h-[180px]"
                  } relative bg-gradient-to-br ${off.imgBg} p-7 sm:p-8 flex items-center`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_50%)]" />
                  <div className="relative z-10 text-white space-y-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em]">
                      {off.badge}
                    </span>
                    <div>
                      <p className="text-white/80 text-[11px] font-bold uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        {off.duration}
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight">
                        {off.name}
                      </h3>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {off.tagline}
                    </p>
                  </div>
                </div>

                {/* Content column */}
                <div className={`p-7 sm:p-8 space-y-6 ${off.primary ? "lg:col-span-7" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D3C38]/8 text-[#0D3C38] font-semibold">
                      {off.who}
                    </span>
                    <div className="flex items-center gap-1 text-[#0D3C38]/65">
                      <Star className="w-3.5 h-3.5 fill-[#E6B055] text-[#E6B055]" />
                      <span className="font-bold">5.0</span>
                      <span>· Client-rated</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {off.highlights.slice(0, 5).map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E6B055]/18 border border-[#E6B055]/35 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#B88127]" />
                        </span>
                        <span className="text-sm text-[#0D3C38]/80 leading-relaxed">
                          {h}
                        </span>
                      </li>
                    ))}
                    {off.highlights.length > 5 && (
                      <li className="text-xs font-semibold text-[#0D3C38]/60 pl-8">
                        +{off.highlights.length - 5} more included
                      </li>
                    )}
                  </ul>

                  <div className="flex items-end justify-between pt-2 border-t border-dashed border-[#0D3C38]/15">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D3C38]/55 mb-1">
                        Investment
                      </p>
                      <p className="text-2xl font-serif font-bold text-[#0D3C38]">
                        {off.price}
                      </p>
                    </div>
                    <button
                      onClick={handleBookCall}
                      className={`group inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                        off.primary
                          ? "bg-[#0D3C38] hover:bg-[#0D3C38]/92 text-[#FBF9F5] shadow-md hover:shadow-lg"
                          : "bg-transparent border-2 border-[#0D3C38]/20 hover:border-[#0D3C38]/50 hover:bg-[#0D3C38] hover:text-[#FBF9F5] text-[#0D3C38]"
                      }`}
                    >
                      Book / Enquire
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ KIDS BADGE ROW ============ */}
      <section className="py-16 lg:py-20 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden relative bg-gradient-to-br from-[#0D3C38] via-[#0D3C38] to-[#12514c] text-[#FBF9F5] shadow-2xl shadow-[#0D3C38]/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(230,176,85,0.22),transparent_55%)]" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-center p-8 sm:p-10 lg:p-12">
            <div className="md:col-span-3 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
                <Baby className="w-3.5 h-3.5" />
                School-Friendly · Parent-Approved
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                Graphotherapy builds confidence, focus, and calm
                <span className="block italic font-normal text-[#E6B055]">
                  in children before limiting patterns harden.
                </span>
              </h3>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base max-w-xl">
                Kids' programmes are gamified, short, and gentle — with full
                parent and school progress reporting. Works beautifully
                alongside school support or private tuition for ADHD,
                dyslexia-adjacent patterns, exam anxiety, and low confidence.
              </p>
            </div>
            <div className="md:col-span-2 flex md:justify-end">
              <button
                onClick={handleBookCall}
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#E6B055] hover:bg-[#E6B055]/92 text-[#0D3C38] font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                Enquire About Kids Programme
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQS ============ */}
      <section className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C48F3A]">
              Graphotherapy · FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
              Honest answers to common questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className={`rounded-2xl border transition-all duration-300 ${
                    open
                      ? "bg-white border-[#0D3C38]/25 shadow-lg shadow-[#0D3C38]/5"
                      : "bg-white/60 border-[#0D3C38]/10 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <span className="font-semibold text-base sm:text-lg text-[#0D3C38] leading-snug">
                      {f.q}
                    </span>
                    <span
                      className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                        open
                          ? "bg-[#0D3C38] text-[#E6B055]"
                          : "bg-[#E6B055]/15 text-[#0D3C38]"
                      }`}
                    >
                      {open ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      open ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#0D3C38]/75 leading-relaxed -mt-2">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 pb-24">
        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden relative bg-gradient-to-br from-[#C48F3A] via-[#E6B055] to-[#FBF9F5] text-[#0D3C38] shadow-2xl shadow-[#C48F3A]/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.4),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(13,60,56,0.12),transparent_50%)]" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/55 border border-[#0D3C38]/15 backdrop-blur-sm">
              <PenTool className="w-4 h-4 text-[#0D3C38]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D3C38]/85">
                Every stroke rewrites a story.
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-[1.1]">
              Your handwriting already tells your story.
              <span className="block italic font-normal mt-2">
                Let's rewrite the parts you want to change.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#0D3C38]/80 leading-relaxed max-w-2xl mx-auto">
              Book a complimentary consultation. We'll review your goals, walk
              you through what Graphotherapy can (and can't) do for you — and
              there is never any pressure to proceed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                onClick={handleBookCall}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-[#0D3C38] hover:bg-[#0D3C38]/92 text-[#FBF9F5] font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                Book Complimentary Graphotherapy Consult
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-transparent hover:bg-white/70 text-[#0D3C38] font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer border-2 border-[#0D3C38]/30 hover:border-[#0D3C38]/60"
              >
                Email Shilpa a Question
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2 text-xs font-semibold text-[#0D3C38]/65">
              <HeartPulse className="w-4 h-4" />
              Clinically-informed · Child-safe protocols · 100% confidential
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
