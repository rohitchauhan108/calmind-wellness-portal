"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Star,
  Check,
  ArrowRight,
  Calendar,
  Clock,
  Shield,
  Heart,
  Users,
  Briefcase,
  DollarSign,
  Sun,
  Award,
  Zap,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from "lucide-react";

export default function PrivateCoachingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const focusAreas = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Relationships & Intimacy",
      desc: "Break cycle loops, rebuild trust, set conscious boundaries, and attract the love and connection you truly deserve.",
      color: "from-rose-100 to-white",
      iconBg: "bg-rose-50 text-rose-600",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career & Leadership",
      desc: "Claim your authority, make executive decisions with confidence, and design a career aligned with your purpose and values.",
      color: "from-amber-100 to-white",
      iconBg: "bg-amber-50 text-amber-600",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Money & Abundance",
      desc: "Rewire subconscious money scripts, dissolve scarcity patterns, and build a healthy, generative relationship with wealth.",
      color: "from-emerald-100 to-white",
      iconBg: "bg-emerald-50 text-emerald-700",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Health & Vitality",
      desc: "Release stored stress, rebuild nervous system safety, and restore lasting energy, peace, and physical wellbeing.",
      color: "from-sky-100 to-white",
      iconBg: "bg-sky-50 text-sky-700",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Confidence & Self-Worth",
      desc: "Silence the inner critic, heal imposter syndrome, and stand unshakably in your identity and voice.",
      color: "from-indigo-100 to-white",
      iconBg: "bg-indigo-50 text-indigo-700",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Purpose & Direction",
      desc: "Gain radical clarity on your mission, rebuild momentum after transitions, and design a life that genuinely lights you up.",
      color: "from-orange-100 to-white",
      iconBg: "bg-orange-50 text-orange-700",
    },
  ];

  const journey = [
    {
      num: "01",
      title: "Clarity Call",
      desc: "A 45-minute complimentary session to understand your goals, current challenges, and see if we're the right fit.",
      meta: "45 min · Free",
    },
    {
      num: "02",
      title: "Deep Assessment",
      desc: "Full intake, subconscious mapping, handwriting analysis (where relevant), and custom transformation blueprint.",
      meta: "Included in package",
    },
    {
      num: "03",
      title: "1:1 Coaching Sessions",
      desc: "Weekly or bi-weekly deep-dive 90-minute private sessions with Ila. Structured yet fluid to meet you where you are.",
      meta: "90 min each",
    },
    {
      num: "04",
      title: "Integrated Practices",
      desc: "Between-session Graphotherapy exercises, energy practices, mindset rituals, and accountability check-ins.",
      meta: "Daily integration",
    },
    {
      num: "05",
      title: "Ongoing Support",
      desc: "Direct Voxer/WhatsApp access between sessions for urgent coaching moments, progress reviews, and milestone tuning.",
      meta: "Mon–Fri support",
    },
  ];

  const tiers = [
    {
      badge: "FOUNDATION",
      name: "12-Week Transformation",
      price: "On Application",
      tagline: "Root-level reset for a single focused area of life.",
      idealFor: "Ideal for: Career pivot, relationship reset, or confidence rebuild.",
      highlights: [
        "6 x 90-min private 1:1 sessions with Ila",
        "Comprehensive intake & handwriting baseline",
        "Custom Graphotherapy exercise protocol",
        "Weekly between-session rituals & practices",
        "Private messenger support between sessions",
        "Closing integration review & roadmap",
      ],
      primary: false,
    },
    {
      badge: "SIGNATURE",
      name: "6-Month Holistic Journey",
      price: "On Application",
      tagline: "Our most popular. Deep, lasting, multi-life-area transformation.",
      idealFor: "Ideal for: Leaders, founders, and those ready for radical change.",
      highlights: [
        "12 x 90-min private 1:1 sessions with Ila",
        "Full Graphotherapy handwriting redesign program",
        "Subtle energy healing & nervous system regulation work",
        "Bi-weekly accountability + milestone tuning",
        "Priority 7-day support messenger access",
        "Guest pass to group programs (up to 4)",
        "2x follow-up integration sessions post-journey",
      ],
      primary: true,
    },
    {
      badge: "VIP / RETREAT",
      name: "Bespoke VIP Experience",
      price: "By Invitation",
      tagline: "Fully custom, ultra-high-touch immersion — virtual or in-person.",
      idealFor: "Ideal for: Executive leaders, high-achievers, and crisis/inflection points.",
      highlights: [
        "Unlimited private coaching with Ila for 3–12 months",
        "Curated expert referrals & team integration support",
        "Optional in-person retreats (UK, India, Dubai)",
        "Direct anytime priority access to Ila",
        "Quarterly intensive deep-dive days",
        "Legacy, partnership, and succession support",
        "Fully bespoke scope, structure, and cadence",
      ],
      primary: false,
    },
  ];

  const faqs = [
    {
      q: "How are private sessions delivered?",
      a: "All 1:1 coaching sessions are delivered virtually via secure Zoom call, making the work accessible worldwide. VIP in-person retreats are available by invitation in London, Mumbai, and Dubai.",
    },
    {
      q: "What results can I actually expect?",
      a: "Every journey is personal, but clients consistently report: calmer nervous system, clearer decision-making, healthier relationships, income/career uplift, reduced anxiety, and a grounded sense of self-worth within the first 8 weeks.",
    },
    {
      q: "Do you offer payment plans?",
      a: "Yes — flexible payment plans (2–12 instalments) are available on accepted applications. We also work with select corporate L&D budgets.",
    },
    {
      q: "What makes this different from therapy or standard coaching?",
      a: "We combine three modalities: practical strategic coaching (doing), Graphotherapy (subconscious rewiring), and subtle energy work (being). This root-level integration creates faster, more lasting change than any single approach.",
    },
    {
      q: "Is everything confidential?",
      a: "100%. All sessions, notes, handwriting, and personal details are held under strict private practitioner confidentiality guidelines. You never have to share anything you're not ready to.",
    },
  ];

  const handleBookCall = () => {
    window.open(
      "https://calendly.com/ilagarg-official/clarity-call-with-ila",
      "_blank"
    );
  };

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
        <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-[#E6B055]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#0D3C38]/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0D3C38]/8 border border-[#0D3C38]/15 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-[#E6B055]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0D3C38]">
                  1:1 Private Coaching
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#0D3C38] tracking-tight leading-[1.05]"
              >
                Transformation that's
                <span className="block italic font-normal mt-2">
                  built for <span className="text-[#E6B055]">your</span> life.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base sm:text-lg lg:text-xl text-[#0D3C38]/75 font-normal leading-relaxed max-w-2xl"
              >
                A bespoke, high-touch 1:1 coaching experience with Ila Garg —
                blending strategic life coaching, Graphotherapy subconscious
                rewiring, and subtle energy healing to help you dissolve root
                blocks and build the life you actually want.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#0D3C38]/70"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
                  <Users className="w-4 h-4 text-[#0D3C38]" />
                  500+ Clients Worldwide
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
                  <Star className="w-4 h-4 text-[#E6B055] fill-[#E6B055]" />
                  5.0 · 300+ Testimonials
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
                  <Shield className="w-4 h-4 text-[#0D3C38]" />
                  Strictly Confidential
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
                  className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#0D3C38] hover:bg-[#0D3C38]/92 text-[#FBF9F5] font-semibold text-[13px] sm:text-sm tracking-wide shadow-lg hover:shadow-xl hover:shadow-[#0D3C38]/20 transition-all duration-300 cursor-pointer border border-[#0D3C38]/50 whitespace-normal text-center"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#E6B055] shrink-0" />
                  Book a Complimentary Clarity Call
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-transparent hover:bg-white text-[#0D3C38] font-semibold text-[13px] sm:text-sm tracking-wide transition-all duration-300 cursor-pointer border border-[#0D3C38]/20 hover:border-[#0D3C38]/40 whitespace-normal text-center"
                >
                  Enquire about Custom Package
                </Link>
              </motion.div>
            </div>

            {/* Hero visual card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#0D3C38]/15 border border-white/40"
              >
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-[#0D3C38] via-[#0D3C38] to-[#156056] p-8 sm:p-10 text-[#FBF9F5] flex flex-col justify-between relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,176,85,0.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(7,62,66,0.6),transparent_55%)]" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                      <Star className="w-3.5 h-3.5 text-[#E6B055] fill-[#E6B055]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                        Signature 1:1 with Ila
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 space-y-6">
                    <div className="space-y-1">
                      <p className="text-[#E6B055] text-[11px] font-bold uppercase tracking-[0.22em]">
                        3 Core Modalities · Integrated
                      </p>
                      <h3 className="font-serif text-3xl sm:text-4xl leading-tight font-semibold">
                        A complete system for root-level change.
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Strategic Life Coaching · action & momentum",
                        "Graphotherapy · subconscious rewiring",
                        "Subtle Energy Healing · nervous system reset",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1 w-5 h-5 rounded-full bg-[#E6B055]/25 border border-[#E6B055]/40 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-[#E6B055]" />
                          </span>
                          <p className="text-sm text-white/85 leading-relaxed">
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

      {/* ============ FOCUS AREAS ============ */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 border-t border-[#0D3C38]/8 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-18 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E6B055]">
              Where We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
              Focus on what matters most to <span className="italic font-normal">you.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#0D3C38]/70 leading-relaxed">
              Every program is bespoke — but these are the life areas where
              1:1 coaching consistently creates extraordinary results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {focusAreas.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl p-7 border border-[#0D3C38]/10 bg-gradient-to-br ${f.color} hover:shadow-xl hover:shadow-[#0D3C38]/10 hover:border-[#0D3C38]/25 transition-all duration-400 cursor-pointer`}
              >
                <div className={`w-14 h-14 rounded-2xl ${f.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0D3C38] mb-2.5 leading-tight">
                  {f.title}
                </h3>
                <p className="text-sm text-[#0D3C38]/70 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ JOURNEY TIMELINE ============ */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(circle,rgba(230,176,85,0.07),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E6B055]">
              Your Private Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
              What the coaching process looks like
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[#0D3C38]/30 to-transparent" />
            <div className="space-y-8 lg:space-y-14">
              {journey.map((s, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: i * 0.07 }}
                    className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center`}
                  >
                    <div className={`lg:col-span-5 ${isEven ? "lg:text-right" : "lg:col-start-8"}`}>
                      <div className="inline-block p-6 sm:p-7 rounded-2xl bg-white border border-[#0D3C38]/10 hover:border-[#E6B055]/50 hover:shadow-xl hover:shadow-[#0D3C38]/8 transition-all duration-300">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? "lg:justify-end" : ""}`}>
                          <span className="font-serif text-2xl font-bold text-[#E6B055]">{s.num}</span>
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-[#0D3C38]/8 text-[#0D3C38]/80">
                            <Clock className="w-3 h-3" />
                            {s.meta}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0D3C38] mb-2 leading-tight">
                          {s.title}
                        </h3>
                        <p className="text-sm text-[#0D3C38]/70 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:flex lg:col-span-2 justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#0D3C38] text-[#E6B055] flex items-center justify-center shadow-lg shadow-[#0D3C38]/25 border-4 border-[#FAF8F5] shrink-0 z-10 font-serif font-bold">
                        {parseInt(s.num)}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TIERS / PRICING ============ */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-gradient-to-b from-white/50 via-[#FBF9F5] to-[#FBF9F5] border-t border-[#0D3C38]/8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-18 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E6B055]">
              Coaching Packages
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
              Choose the depth that's right for you
            </h2>
            <p className="text-base sm:text-lg text-[#0D3C38]/70 leading-relaxed">
              All packages include a complimentary clarity call first. You
              never commit until we confirm we're the right fit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-[1.75rem] p-7 sm:p-8 flex flex-col transition-all duration-400 ${
                  t.primary
                    ? "bg-gradient-to-br from-[#0D3C38] via-[#0D3C38] to-[#12514c] text-[#FBF9F5] shadow-2xl shadow-[#0D3C38]/25 lg:-translate-y-3 border border-[#E6B055]/30"
                    : "bg-white border border-[#0D3C38]/10 hover:border-[#0D3C38]/25 hover:shadow-2xl hover:shadow-[#0D3C38]/10"
                }`}
              >
                {t.primary && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6B055] text-[#0D3C38] text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Most Loved · Limited Availability
                  </div>
                )}

                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`inline-block px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] ${
                      t.primary
                        ? "bg-white/10 text-white/90 border border-white/15"
                        : "bg-[#0D3C38]/8 text-[#0D3C38] border border-[#0D3C38]/10"
                    }`}
                  >
                    {t.badge}
                  </span>
                  <div
                    className={`flex items-center gap-1 text-xs font-bold ${
                      t.primary ? "text-white/80" : "text-[#0D3C38]/70"
                    }`}
                  >
                    <Star className="w-4 h-4 fill-current text-[#E6B055]" />
                    5.0
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-semibold leading-tight mb-1.5">
                  {t.name}
                </h3>
                <p
                  className={`text-sm mb-5 leading-relaxed ${
                    t.primary ? "text-white/80" : "text-[#0D3C38]/70"
                  }`}
                >
                  {t.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-dashed border-current/20">
                  <div className="text-2xl sm:text-3xl font-serif font-bold">
                    {t.price}
                  </div>
                  <div
                    className={`text-xs mt-1 ${
                      t.primary ? "text-white/65" : "text-[#0D3C38]/60"
                    }`}
                  >
                    {t.idealFor}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          t.primary
                            ? "bg-[#E6B055]/20 text-[#E6B055]"
                            : "bg-[#0D3C38]/8 text-[#0D3C38]"
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          t.primary ? "text-white/85" : "text-[#0D3C38]/78"
                        }`}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleBookCall}
                  className={`group inline-flex items-center justify-center gap-2 w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-[13px] sm:text-sm tracking-wide transition-all duration-300 cursor-pointer whitespace-normal text-center ${
                    t.primary
                      ? "bg-[#E6B055] hover:bg-[#E6B055]/92 text-[#0D3C38] shadow-md hover:shadow-lg"
                      : "bg-[#0D3C38] hover:bg-[#0D3C38]/92 text-[#FBF9F5] shadow-md hover:shadow-lg"
                  }`}
                >
                  Apply for this Package
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQS ============ */}
      <section className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E6B055]">
              Questions · Answered
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
              Before you book your clarity call
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
                          : "bg-[#0D3C38]/8 text-[#0D3C38]"
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
      <section className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden relative bg-gradient-to-br from-[#0D3C38] via-[#0D3C38] to-[#1a6960] text-[#FBF9F5] shadow-2xl shadow-[#0D3C38]/25">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(230,176,85,0.25),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(7,62,66,0.5),transparent_50%)]" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#E6B055]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">
                Your next chapter starts here
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-[1.1]">
              The only thing between you and the life you want
              <span className="block italic font-normal mt-2 text-[#E6B055]">
                is a conversation.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Book a complimentary, zero-obligation 45-minute Clarity Call.
              We'll uncover what's really blocking you and see if private 1:1
              coaching is the right next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                onClick={handleBookCall}
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#E6B055] hover:bg-[#E6B055]/92 text-[#0D3C38] font-semibold text-[13px] sm:text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer whitespace-normal text-center"
              >
                Book My Complimentary Clarity Call
                <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-transparent hover:bg-white/10 text-[#FBF9F5] font-semibold text-[13px] sm:text-sm tracking-wide transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/40 whitespace-normal text-center"
              >
                Email Ila Directly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
