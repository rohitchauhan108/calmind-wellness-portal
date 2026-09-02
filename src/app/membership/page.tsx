"use client";

import React from "react";
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
  Award,
  HeartHandshake,
  Video,
  Heart,
  Zap,
} from "lucide-react";

export default function MembershipPage() {
  const perks = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Weekly Live Coaching",
      desc: "90-min live sessions with Ila every week, replay in portal forever.",
      color: "from-rose-100 to-white",
      iconBg: "bg-rose-50 text-rose-600",
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Daily Practice Room",
      desc: "15-min daily live practice (6 days/wk) for grounding & reset.",
      color: "from-amber-100 to-white",
      iconBg: "bg-amber-50 text-amber-600",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Monthly Masterclass",
      desc: "2-hour themed deep-dives with workbooks (abundance, love, etc).",
      color: "from-emerald-100 to-white",
      iconBg: "bg-emerald-50 text-emerald-700",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Private Community",
      desc: "Curated space with Ila's daily presence & accountability.",
      color: "from-sky-100 to-white",
      iconBg: "bg-sky-50 text-sky-700",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Graphotherapy Protocol",
      desc: "Shilpa-designed mini handwriting rewiring every month.",
      color: "from-indigo-100 to-white",
      iconBg: "bg-indigo-50 text-indigo-700",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "1:1 Mini-Sessions",
      desc: "Quarterly 30-min private hot-seat calls with Ila (annual tier).",
      color: "from-orange-100 to-white",
      iconBg: "bg-orange-50 text-orange-700",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Guest Expert Sessions",
      desc: "Monthly specialists — therapists, astrologers, healers, nutritionists.",
      color: "from-pink-100 to-white",
      iconBg: "bg-pink-50 text-pink-600",
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Priority Perks",
      desc: "First-access + deepest discounts on 1:1, workshops & retreats.",
      color: "from-[#E6B055]/20 to-white",
      iconBg: "bg-[#E6B055]/20 text-[#B88127]",
    },
  ];

  const testimonials = [
    {
      quote:
        "I've done a lot of self-development — nothing has ever shifted my money and confidence patterns this fast.",
      name: "Rahul M.",
      role: "Founder · Annual Member · Dubai",
    },
    {
      quote:
        "The weekly calls alone are worth the membership. Ila has a way of seeing exactly what you can't.",
      name: "Emma L.",
      role: "Therapist · Monthly Member · UK",
    },
    {
      quote:
        "The community is gold. It's the only space I'm in where everyone is actually growing, not just talking.",
      name: "Aarti S.",
      role: "Architect · Annual Member · India",
    },
  ];

  return (
    <main className="bg-[#FAF8F5] text-[#0D3C38] antialiased min-h-screen font-sans overflow-x-hidden">
      {/* ============ BACK LINK ============ */}
      <section className="pt-24 pb-0 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0D3C38]/60 hover:text-[#0D3C38] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
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
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 px-6 lg:px-16 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#E6B055]/12 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0D3C38]/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#E6B055]/12 border border-[#E6B055]/30 backdrop-blur-sm"
            >
              <Crown className="w-4 h-4 text-[#B88127]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0D3C38]">
                The Ila Garg Membership
              </span>
              <span className="ml-1 px-2 py-0.5 rounded-full bg-[#0D3C38] text-[#E6B055] text-[9px] font-bold uppercase tracking-[0.2em]">
                Cohort Opening Soon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#0D3C38] tracking-tight leading-[1.05]"
            >
              Your ongoing
              <span className="block italic font-normal mt-2">
                transformation <span className="text-[#E6B055]">room.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl text-[#0D3C38]/75 leading-relaxed max-w-2xl"
            >
              A high-touch, capped-membership coaching ecosystem with weekly
              live sessions, daily live practice, monthly Graphotherapy
              protocols, private community, and the steady presence of Ila &
              Shilpa throughout your year.
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
                Capped at 250 members
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
                <Clock className="w-4 h-4 text-[#C48F3A]" />
                12 / 6 rolling cohorts
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
                <Heart className="w-4 h-4 text-rose-500" />
                4.9 / 5 member satisfaction
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/membership/apply"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-[#0D3C38] via-[#0D3C38] to-[#156056] hover:from-[#0D3C38]/95 hover:to-[#12514c] text-[#FBF9F5] font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl hover:shadow-[#0D3C38]/20 transition-all duration-300 cursor-pointer border border-[#0D3C38]/50"
              >
                <Calendar className="w-4.5 h-4.5 text-[#E6B055]" />
                Apply for Membership
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://calendly.com/ilagarg-official/clarity-call-with-ila"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-transparent hover:bg-white text-[#0D3C38] font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer border-2 border-[#0D3C38]/20 hover:border-[#0D3C38]/40"
              >
                Book a Free Call to Learn More
              </a>
            </motion.div>
          </div>

          {/* Hero visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#0D3C38]/15 border border-white/40"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-[#0D3C38] via-[#0D3C38] to-[#156056] p-8 sm:p-10 text-[#FBF9F5] relative flex flex-col">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(230,176,85,0.28),transparent_55%),radial-gradient(circle_at_0%_85%,rgba(7,62,66,0.55),transparent_55%)]" />

                <div className="relative z-10 flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <Sparkles className="w-3.5 h-3.5 text-[#E6B055]" />
                    Membership · Cohort
                  </span>
                  <div className="flex -space-x-2">
                    {["bg-rose-400", "bg-amber-400", "bg-emerald-400"].map(
                      (c, i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-full ${c} border-2 border-[#0D3C38] flex items-center justify-center text-[#0D3C38] font-bold text-xs`}
                        >
                          {["A", "S", "R"][i]}
                        </div>
                      )
                    )}
                    <div className="w-8 h-8 rounded-full bg-[#E6B055] border-2 border-[#0D3C38] flex items-center justify-center text-[#0D3C38] font-bold text-[10px]">
                      +247
                    </div>
                  </div>
                </div>

                <div className="relative z-10 space-y-6 mt-auto">
                  <div className="space-y-3">
                    {[
                      { icon: <Video className="w-4 h-4" />, t: "Weekly Live with Ila", n: "4 / month" },
                      { icon: <Radio className="w-4 h-4" />, t: "Daily Practice Room", n: "24 / month" },
                      { icon: <Award className="w-4 h-4" />, t: "Graphotherapy Protocol", n: "Monthly" },
                      { icon: <Zap className="w-4 h-4" />, t: "1:1 Hot Seats", n: "Annual" },
                    ].map((row) => (
                      <div
                        key={row.t}
                        className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-white/10 text-[#E6B055] flex items-center justify-center">
                            {row.icon}
                          </span>
                          <span className="text-sm font-medium">{row.t}</span>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E6B055]">
                          {row.n}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-white/8 border border-white/15 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-white/75">
                        From
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6B055]">
                        By Application
                      </span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="font-serif text-4xl font-bold text-white">
                          £97
                        </span>
                        <span className="text-white/60 text-sm ml-1">/mo</span>
                      </div>
                      <Link
                        href="/membership/apply"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E6B055] hover:bg-[#E6B055]/92 text-[#0D3C38] text-xs font-bold uppercase tracking-[0.15em] transition-all"
                      >
                        Apply
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ PERKS GRID ============ */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 border-t border-[#0D3C38]/8 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-18 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#B88127]">
              Membership Perks
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
              Everything you get, every single month.
            </h2>
            <p className="text-base sm:text-lg text-[#0D3C38]/70 leading-relaxed">
              9 integrated, on-going transformation practices — designed to
              keep you in consistent, healthy momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl p-6 sm:p-7 border border-[#0D3C38]/10 bg-gradient-to-br ${p.color} hover:shadow-xl hover:shadow-[#0D3C38]/10 hover:border-[#0D3C38]/25 transition-all duration-400`}
              >
                <div className={`w-13 h-13 rounded-2xl ${p.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`} style={{ width: "3.25rem", height: "3.25rem" }}>
                  {p.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#0D3C38] mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-[#0D3C38]/70 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(circle,rgba(230,176,85,0.07),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#B88127]">
              From the Circle
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D3C38] leading-tight">
              What members are actually saying.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-[1.75rem] p-7 sm:p-8 bg-white border border-[#0D3C38]/10 hover:border-[#E6B055]/50 hover:shadow-xl hover:shadow-[#0D3C38]/10 transition-all duration-400 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-5 text-[#E6B055]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-4.5 h-4.5 fill-current"
                    />
                  ))}
                </div>
                <p className="text-[15px] sm:text-base text-[#0D3C38]/85 leading-relaxed flex-grow mb-6 font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-dashed border-[#0D3C38]/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E6B055] to-[#C48F3A] flex items-center justify-center text-[#0D3C38] font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#0D3C38]">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#0D3C38]/60">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden relative bg-gradient-to-br from-[#0D3C38] via-[#0D3C38] to-[#1a6960] text-[#FBF9F5] shadow-2xl shadow-[#0D3C38]/25">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(230,176,85,0.25),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(7,62,66,0.5),transparent_50%)]" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-[#E6B055]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">
                Limited places · Cohort capped
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-[1.1]">
              The right room changes everything.
              <span className="block italic font-normal mt-2 text-[#E6B055]">
                Yours is waiting.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Apply in ~4 minutes. Every application is reviewed by a human.
              We reply within 48 hours with a decision & invitation link.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                href="/membership/apply"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl bg-[#E6B055] hover:bg-[#E6B055]/92 text-[#0D3C38] font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                Start My Membership Application
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://calendly.com/ilagarg-official/clarity-call-with-ila"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4.5 rounded-2xl bg-transparent hover:bg-white/10 text-[#FBF9F5] font-semibold text-sm md:text-base transition-all duration-300 cursor-pointer border-2 border-white/20 hover:border-white/40"
              >
                Book a Free Clarity Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
