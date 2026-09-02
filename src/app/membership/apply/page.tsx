"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Check,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Users,
  Crown,
  Shield,
  Clock,
  Radio,
  BookOpen,
  MessageCircle,
  Star,
  Send,
  Award,
  HeartHandshake,
  Video,
} from "lucide-react";

export default function MembershipApplyPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [tier, setTier] = useState<"monthly" | "annual">("annual");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    age: "",
    occupation: "",
    focusArea: "",
    goals: "",
    referral: "",
    agreed: false,
  });

  const monthlyPrice = "£97";
  const annualPrice = "£997";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const val =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((f) => ({ ...f, [key]: val as never }));
    };

  const features = [
    {
      icon: <Video className="w-5 h-5" />,
      title: "Weekly Live Group Sessions",
      desc: "90-min live coaching calls with Ila — replays in the portal forever.",
    },
    {
      icon: <Radio className="w-5 h-5" />,
      title: "Daily Practice Room",
      desc: "15-min daily live practice (6 days a week) for grounding & nervous system reset.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Monthly Deep-Dive Masterclass",
      desc: "A 2-hour theme workshop every month (relationships, abundance, etc.) with workbook.",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Private Community Hub",
      desc: "Curated WhatsApp / Circle community with daily prompts, accountability, and Ila's presence.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Monthly Graphotherapy Mini-Protocol",
      desc: "Shilpa-designed mini handwriting exercises + group review.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Quarterly 1:1 Mini-Session",
      desc: "A 30-min private hot-seat call with Ila (included in annual only).",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Guest Expert Sessions",
      desc: "Monthly guests — nutritionists, therapists, astrologers, sound healers and more.",
    },
    {
      icon: <Crown className="w-5 h-5" />,
      title: "Priority Access & Pricing",
      desc: "Members-first enrolment, discounted rates on all 1:1 programmes, workshops & retreats.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Resource Library",
      desc: "200+ hours of past calls, meditations, worksheets, protocols and rituals.",
    },
  ];

  const idealFor = [
    "You want weekly structure & accountability without 1:1 coaching investment yet",
    "You love being in a room with growth-focused people from around the world",
    "You want the Graphotherapy + Energy Work + Coaching — all three, continuously",
    "You're graduating from a 1:1 programme and want ongoing support & integration",
    "You're ready for steady, sustainable monthly growth in every life area",
  ];

  const monthlyPerks = [
    "Weekly Live Coaching + Daily Practice Room",
    "Monthly Masterclass + Workbook",
    "Private Community Hub",
    "Monthly Graphotherapy Mini-Protocol",
    "Full Resource Library access",
    "Guest Expert Sessions",
  ];

  const annualPerks = [
    "Everything in the Monthly tier",
    "2 months FREE (billed annually)",
    "Quarterly 30-min 1:1 with Ila (4 per year)",
    "1 Complimentary Kids Graphotherapy Workshop seat",
    "50% off all public workshops & retreats",
    "Founder-rate pricing on 1:1 upgrades",
    "Early-bird + pre-launch access to all new offerings",
  ];

  return (
    <main className="bg-[#FAF8F5] text-[#0D3C38] antialiased min-h-screen font-sans overflow-x-hidden">
      {/* ============ BACK LINK ============ */}
      <section className="pt-24 pb-0 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0D3C38]/60 hover:text-[#0D3C38] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Membership Overview
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0D3C38]/70 hover:text-[#0D3C38] px-4 py-2 rounded-full border border-[#0D3C38]/15 hover:border-[#0D3C38]/30 bg-white/60 transition-all"
          >
            Already a member? Sign in
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ============ HERO ============ */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 lg:px-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E6B055]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#0D3C38]/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#E6B055]/12 border border-[#E6B055]/30 backdrop-blur-sm shadow-sm"
          >
            <Crown className="w-4 h-4 text-[#B88127]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0D3C38]">
              The Ila Garg Membership · Application
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#0D3C38] tracking-tight leading-[1.05]"
          >
            Apply to join
            <span className="block italic font-normal mt-2">
              <span className="text-[#E6B055]">the circle.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-[#0D3C38]/75 leading-relaxed max-w-2xl mx-auto"
          >
            The Membership is a curated, on-going coaching & transformation
            ecosystem — intentionally small. We review every application to
            ensure it's the right room for you and the collective.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-[#0D3C38]/70"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
              <Users className="w-4 h-4 text-[#0D3C38]" />
              Capped at 250 Members
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
              <Clock className="w-4 h-4 text-[#C48F3A]" />
              Next Cohort Opens Soon
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
              <Star className="w-4 h-4 fill-[#E6B055] text-[#E6B055]" />
              5.0 Member Rating
            </span>
          </motion.div>
        </div>
      </section>

      {/* ============ SUCCESS BANNER ============ */}
      {formSubmitted && (
        <section className="px-6 lg:px-16 pb-6">
          <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-emerald-50 via-emerald-50/50 to-white border border-emerald-200/80 p-5 sm:p-7 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0D3C38] leading-snug mb-1">
                  Application received. Thank you, {form.fullName.split(" ")[0] || "friend"}.
                </h3>
                <p className="text-sm sm:text-base text-[#0D3C38]/75 leading-relaxed">
                  Our team reviews every application personally within 48
                  hours. If we feel the membership is the right fit, we'll
                  email you an invitation link with full pricing & payment
                  options. No spam, ever.
                </p>
              </div>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setForm({
                    fullName: "", email: "", phone: "", country: "",
                    age: "", occupation: "", focusArea: "", goals: "",
                    referral: "", agreed: false,
                  });
                }}
                className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D3C38]/70 hover:text-[#0D3C38] underline underline-offset-4 shrink-0"
              >
                Submit another application
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ============ MAIN CONTENT: FEATURES + FORM ============ */}
      <section className="pb-20 lg:pb-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT: Features / Perks */}
          <aside className="lg:col-span-5 xl:col-span-5 space-y-6 lg:sticky lg:top-28 self-start">
            {/* Tier Switch */}
            <div className="rounded-2xl p-2 bg-white border border-[#0D3C38]/10 shadow-sm grid grid-cols-2 gap-2">
              {[
                { key: "monthly", label: "Monthly", hint: "Flexible", price: monthlyPrice + "/mo" },
                { key: "annual", label: "Annual", hint: "Save 2 months", price: annualPrice + "/yr" },
              ].map((t) => {
                const active = tier === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => setTier(t.key as never)}
                    className={`group relative rounded-xl p-3 sm:p-4 text-left transition-all duration-300 cursor-pointer ${
                      active
                        ? "bg-gradient-to-br from-[#0D3C38] to-[#156056] text-[#FBF9F5] shadow-lg shadow-[#0D3C38]/20"
                        : "hover:bg-[#0D3C38]/4 text-[#0D3C38]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${active ? "text-[#E6B055]" : "text-[#0D3C38]/55"}`}>
                        {t.hint}
                      </span>
                      {active && t.key === "annual" && (
                        <Sparkles className="w-3.5 h-3.5 text-[#E6B055]" />
                      )}
                    </div>
                    <div className={`text-sm font-semibold ${active ? "text-white" : ""}`}>
                      {t.label}
                    </div>
                    <div className={`font-serif text-xl font-bold mt-0.5 ${active ? "text-[#E6B055]" : "text-[#0D3C38]"}`}>
                      {t.price}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* What's included card */}
            <div className="rounded-[1.75rem] p-6 sm:p-7 bg-white border border-[#0D3C38]/10 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-[#0D3C38] mb-1.5 leading-snug">
                What's included
              </h3>
              <p className="text-sm text-[#0D3C38]/65 mb-5">
                Every member gets full access. Annual adds private access + savings.
              </p>
              <ul className="space-y-3.5">
                {(tier === "monthly" ? monthlyPerks : annualPerks).map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E6B055]/20 text-[#B88127] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-sm text-[#0D3C38]/80 leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="rounded-[1.75rem] p-6 sm:p-7 bg-gradient-to-br from-[#0D3C38] to-[#156056] text-[#FBF9F5] border border-[#E6B055]/20 shadow-xl shadow-[#0D3C38]/15">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#E6B055]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  Is this membership for me?
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-snug mb-5">
                You'll thrive here if...
              </h3>
              <ul className="space-y-3">
                {idealFor.map((line, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E6B055]/25 text-[#E6B055] flex items-center justify-center shrink-0 font-bold text-[10px]">
                      {i + 1}
                    </span>
                    <span className="text-sm text-white/85 leading-relaxed">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* RIGHT: APPLICATION FORM */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="rounded-[2rem] bg-white border border-[#0D3C38]/10 shadow-lg shadow-[#0D3C38]/5 overflow-hidden">
              {/* Form header */}
              <div className="relative p-7 sm:p-8 bg-gradient-to-br from-[#FBF9F5] via-white to-white border-b border-[#0D3C38]/8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(230,176,85,0.15),transparent_55%)]" />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C48F3A] mb-2">
                      Step 1 · Application
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D3C38] leading-snug mb-1">
                      Membership Application
                    </h2>
                    <p className="text-sm sm:text-base text-[#0D3C38]/70 leading-relaxed max-w-xl">
                      Takes ~4 minutes. Every application is personally reviewed. We reply within 48 hours with a decision & next steps.
                    </p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1 text-right">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D3C38]/60">
                      Selected Plan
                    </div>
                    <div className="font-serif text-xl font-bold text-[#0D3C38]">
                      {tier === "monthly" ? "Monthly" : "Annual"}
                    </div>
                    <div className="text-[#E6B055] font-bold text-sm">
                      {tier === "monthly" ? `${monthlyPrice} / month` : `${annualPrice} / year`}
                    </div>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-7 sm:p-8 lg:p-10 space-y-6 sm:space-y-7"
              >
                {/* Section 1 */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0D3C38] text-[#E6B055] text-xs font-bold flex items-center justify-center shrink-0">
                      1
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#0D3C38]">
                      About you
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.fullName}
                        onChange={update("fullName")}
                        placeholder="Priya Sharma"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="+44 7429 519990"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                        Country of Residence *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.country}
                        onChange={update("country")}
                        placeholder="United Kingdom"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                        Age
                      </label>
                      <input
                        type="number"
                        min={16}
                        max={90}
                        value={form.age}
                        onChange={update("age")}
                        placeholder="32"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                        Current Occupation *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.occupation}
                        onChange={update("occupation")}
                        placeholder="Founder · Lawyer · Therapist · Student..."
                        className="w-full px-4 py-3.5 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-5 pt-4 border-t border-dashed border-[#0D3C38]/15">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0D3C38] text-[#E6B055] text-xs font-bold flex items-center justify-center shrink-0">
                      2
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#0D3C38]">
                      Your transformation
                    </h3>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                      Which life area do you want to focus on most first? *
                    </label>
                    <select
                      required
                      value={form.focusArea}
                      onChange={update("focusArea")}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all"
                    >
                      <option value="">Select your primary focus…</option>
                      <option>Relationships & Intimacy</option>
                      <option>Career, Leadership & Business</option>
                      <option>Money & Abundance</option>
                      <option>Health, Energy & Vitality</option>
                      <option>Confidence & Self-Worth</option>
                      <option>Purpose, Direction & Mission</option>
                      <option>General Holistic Growth</option>
                      <option>Supporting my Child / Family</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                      What do you truly want to create in the next 12 months? *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={form.goals}
                      onChange={update("goals")}
                      placeholder="Share honestly — the more specific you are, the better we can tailor your onboarding experience & resources."
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40 resize-none leading-relaxed"
                    />
                    <p className="text-[11px] text-[#0D3C38]/50 mt-1.5 ml-1">
                      3–6 sentences is perfect. All answers are strictly confidential.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      value={form.referral}
                      onChange={update("referral")}
                      placeholder="Instagram · Friend's referral · Podcast · Google..."
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40"
                    />
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-5 pt-4 border-t border-dashed border-[#0D3C38]/15">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#0D3C38] text-[#E6B055] text-xs font-bold flex items-center justify-center shrink-0">
                      3
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#0D3C38]">
                      Review & submit
                    </h3>
                  </div>

                  {/* Summary card */}
                  <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-[#0D3C38]/5 via-white to-[#E6B055]/8 border border-[#0D3C38]/10">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D3C38]/60 mb-3">
                      Your Application · Summary
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                      <div className="flex items-center justify-between gap-2 border-b border-[#0D3C38]/10 pb-2">
                        <span className="text-[#0D3C38]/60">Plan</span>
                        <span className="font-semibold text-[#0D3C38] capitalize">{tier}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2 border-b border-[#0D3C38]/10 pb-2">
                        <span className="text-[#0D3C38]/60">Investment</span>
                        <span className="font-bold text-[#E6B055] font-serif">
                          {tier === "monthly" ? `${monthlyPrice}/mo` : `${annualPrice}/yr`}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 border-b border-[#0D3C38]/10 pb-2">
                        <span className="text-[#0D3C38]/60">1:1 calls included</span>
                        <span className="font-semibold text-[#0D3C38]">
                          {tier === "monthly" ? "—" : "4 / year"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-2 border-b border-[#0D3C38]/10 pb-2">
                        <span className="text-[#0D3C38]/60">Cancel anytime</span>
                        <span className="font-semibold text-emerald-700 inline-flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Yes
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={form.agreed}
                      onChange={update("agreed")}
                      className="mt-1 w-5 h-5 rounded-md border-2 border-[#0D3C38]/25 accent-[#0D3C38] cursor-pointer shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-[#0D3C38]/75 leading-relaxed">
                      I confirm the information above is accurate. I understand
                      this is an application only and I will be invited to join
                      by email. I agree to the{" "}
                      <Link href="/privacy-policy" className="underline underline-offset-2 text-[#0D3C38] font-semibold hover:text-[#C48F3A]">
                        Privacy Policy
                      </Link>{" "}
                      & community code of conduct.
                    </span>
                  </label>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                    <p className="text-[11px] text-[#0D3C38]/55 max-w-xs leading-relaxed">
                      <Calendar className="w-3.5 h-3.5 inline mr-1 align-sub" />
                      Applications reviewed Mon–Fri. Reply within 48 hours.
                    </p>
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0D3C38] via-[#0D3C38] to-[#156056] hover:from-[#0D3C38]/95 hover:to-[#12514c] text-[#FBF9F5] font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:shadow-[#0D3C38]/20 transition-all duration-300 cursor-pointer border border-[#0D3C38]/50 min-w-[260px]"
                    >
                      <Send className="w-4.5 h-4.5 text-[#E6B055]" />
                      Send My Application
                      <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Bottom note */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <Shield className="w-4 h-4" />, text: "Data encrypted. Never shared." },
                { icon: <Check className="w-4 h-4" />, text: "Free to apply. No commitment." },
                { icon: <Clock className="w-4 h-4" />, text: "Human reply within 48 hours." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-[#0D3C38]/65 bg-white/60 border border-[#0D3C38]/8 rounded-xl px-4 py-3"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#0D3C38]/8 text-[#0D3C38] flex items-center justify-center shrink-0">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Features grid shown below form on mobile */}
            <div className="lg:hidden mt-10">
              <h3 className="font-serif text-2xl font-semibold text-[#0D3C38] mb-5">
                Everything you get inside the membership
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl p-5 bg-white border border-[#0D3C38]/10 hover:border-[#E6B055]/50 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#E6B055]/15 text-[#B88127] flex items-center justify-center mb-3">
                      {f.icon}
                    </div>
                    <h4 className="font-semibold text-[#0D3C38] mb-1 leading-snug">
                      {f.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#0D3C38]/65 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden relative bg-gradient-to-br from-[#0D3C38] via-[#0D3C38] to-[#1a6960] text-[#FBF9F5] shadow-2xl shadow-[#0D3C38]/25">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(230,176,85,0.25),transparent_55%)]" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#E6B055]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">
                Not ready to apply yet?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-[1.1]">
              Start with a conversation.
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Book a complimentary clarity call with Ila. Learn more about the
              membership, ask questions, and decide whether it's the right
              next step — no pressure, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="https://calendly.com/ilagarg-official/clarity-call-with-ila"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-[#E6B055] hover:bg-[#E6B055]/92 text-[#0D3C38] font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                Book a Free Clarity Call
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
