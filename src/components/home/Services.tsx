import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Compass,
  Sun,
  PenTool,
  Heart,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  Users,
  Crown,
  Baby,
  ArrowRight,
  UserRound,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      icon: <UserRound className="w-5 h-5 pointer-events-none" />,
      title: "1:1 Life Coaching",
      subtitle: "Personal. Focused. Built around you.",
      description:
        "Work one-on-one on the areas of your life you want to change, grow or create more in. Whether it's your relationships, career, money, confidence or personal growth, the work is centred around your goals, your patterns and what you want to create next.",
      benefits: [
        "Tailored around your unique goals and patterns",
        "Deep dive into relationships, career, money, confidence or growth",
        "Support to release what's been holding you back",
        "Clear direction on what you want to create next",
      ],
      sessionType: "With Ila Garg — Life Coach & Healer",
      ctaText: "Explore 1:1 Coaching",
      ctaHref: "/contact",
    },
    {
      icon: <Crown className="w-5 h-5 pointer-events-none" />,
      title: "VIP Coaching",
      subtitle: "Deeper support. Greater accountability. Bigger goals.",
      description:
        "A more intensive and personalised coaching experience for those who want ongoing support to create meaningful change across one or multiple areas of life. We work together on your goals, the inner patterns influencing your results, and the actions that move you towards where you want to be.",
      benefits: [
        "Ongoing high-support coaching experience",
        "Greater accountability and momentum",
        "Work across one or multiple areas of life",
        "Focused on inner patterns + aligned actions",
      ],
      sessionType: "With Ila Garg — Life Coach & Healer",
      ctaText: "Explore VIP Coaching",
      ctaHref: "/contact",
    },
    {
      icon: <Heart className="w-5 h-5 pointer-events-none" />,
      title: "1:1 Healing",
      subtitle: "Release. Reconnect. Create space for change.",
      description:
        "Sometimes moving forward isn't about doing more. It's about releasing what you've been carrying. Individual healing sessions allow you to work more deeply with emotions, experiences and inner patterns that may no longer serve you. Each session is guided around you and what you need at that point in your journey.",
      benefits: [
        "Release emotions and patterns you've been carrying",
        "Reconnect with yourself at a deeper level",
        "Create space for new possibilities",
        "Each session guided by what you need in the moment",
      ],
      sessionType: "With Ila Garg — Life Coach & Healer",
      ctaText: "Explore 1:1 Healing",
      ctaHref: "/contact",
    },
    {
      icon: <Users className="w-5 h-5 pointer-events-none" />,
      title: "Focused Group Programs",
      subtitle: "One area. Shared journey. Focused transformation.",
      description:
        "Guided group experiences focused on specific areas of life. Programs may change throughout the year depending on what is currently being offered.",
      benefits: [
        "Health & Wellbeing — greater balance and positive change in physical, mental and emotional wellbeing",
        "Money & Abundance — transform the beliefs, emotions and patterns influencing your relationship with money and growth",
        "Relationships — work on the inner patterns influencing the way you connect, communicate and experience your relationships",
        "Career & Growth — create greater clarity and work through what's standing between where you are and where you want to go professionally",
      ],
      sessionType: "Live group experiences with Ila",
      ctaText: "Explore Current Programs",
      ctaHref: "/contact",
    },
    {
      icon: <PenTool className="w-5 h-5 pointer-events-none" />,
      title: "Graphotherapy",
      subtitle: "Change your handwriting. Work with your patterns.",
      description:
        "Graphotherapy uses intentional changes in handwriting as a tool for working with behavioural and emotional patterns. Through handwriting analysis and guided writing practices, the work is designed to support positive changes in the way you think, respond and show up in your life.",
      benefits: [
        "Personalised handwriting analysis",
        "Intentional writing practices to support pattern shifts",
        "Supports positive change in how you think and respond",
        "Simple, practical daily practices",
      ],
      sessionType: "With Shilpa — Graphotherapist & Handwriting Expert",
      ctaText: "Explore Graphotherapy",
      ctaHref: "/contact",
    },
    {
      icon: <Baby className="w-5 h-5 pointer-events-none" />,
      title: "Program for Kids",
      subtitle:
        "Helping children build positive patterns from an early age.",
      description:
        "A specially designed program for children using handwriting-based practices to support areas such as focus, confidence, emotional expression and positive habits.",
      benefits: [
        "Built around handwriting-based practices",
        "Supports focus, confidence and emotional expression",
        "Helps build positive habits early",
        "Designed specifically for children",
      ],
      sessionType: "With Shilpa — Graphotherapist & Handwriting Expert",
      ctaText: "Explore Kids Program",
      ctaHref: "/contact",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 sm:py-28 lg:py-32 bg-[#FBF9F5] relative overflow-hidden text-[#1C2826]"
    >
      {/* Dynamic Code-Generated SVG Sacred Patterns & Topography Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-80">
        {/* Subtle Noise Texture */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Concentric Geometric Rings Pattern - Top Left */}
        <svg
          className="absolute -top-24 -left-24 w-[600px] h-[600px] text-[#073E42]/15"
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

        {/* Flowing Organic Waves / Energy Lines - Bottom Right */}
        <svg
          className="absolute -bottom-32 -right-32 w-[700px] h-[700px] text-[#073E42]/10"
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

      {/* Background Deep Emerald Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#073E42]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#073E42]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Radial Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073E42]/10 border border-[#073E42]/15 text-[#073E42] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ways to Work With Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#073E42] tracking-tight leading-tight font-bold">
              Different goals need different kinds of support.
            </h2>
          </div>
          <p className="text-[#073E42]/70 font-medium text-sm sm:text-base max-w-md leading-relaxed">
            Choose the way of working that feels right for where you are now.
          </p>
        </div>

        {/* Tabbed Interactive Interface */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          id="services-interactive"
        >
          {/* MOBILE SELECT DROPDOWN */}
          <div className="block lg:hidden w-full relative z-20">
            <label
              htmlFor="service-select"
              className="block text-xs font-bold text-[#073E42] uppercase tracking-wider mb-2"
            >
              Select Experience
            </label>
            <div className="relative">
              <select
                id="service-select"
                value={activeTab}
                onChange={(e) => setActiveTab(Number(e.target.value))}
                className="w-full appearance-none bg-white/90 backdrop-blur-md border border-[#073E42]/20 rounded-2xl px-5 py-4 pr-12 text-[#073E42] font-medium text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#073E42]"
              >
                {servicesData.map((service, index) => (
                  <option key={index} value={index}>
                    {service.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-[#073E42] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* DESKTOP TABS NAVIGATION */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3.5 w-full">
            {servicesData.map((service, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between border text-sm w-full cursor-pointer relative overflow-hidden group ${
                  activeTab === index
                    ? "bg-[#073E42] border-[#073E42] text-white shadow-xl scale-[1.02]"
                    : "bg-white/80 hover:bg-white backdrop-blur-sm border-[#073E42]/10 text-[#073E42] hover:border-[#073E42]/30"
                }`}
              >
                <div className="flex items-center gap-4 z-10">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      activeTab === index
                        ? "bg-white/15 text-white"
                        : "bg-[#073E42]/10 text-[#073E42] group-hover:bg-[#073E42]/20"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="overflow-hidden">
                    <span
                      className={`block text-[10px] font-bold uppercase tracking-widest ${
                        activeTab === index
                          ? "text-[#E6B055]"
                          : "text-[#073E42]/60"
                      }`}
                    >
                      {activeTab === index
                        ? service.sessionType
                        : "Select →"}
                    </span>
                    <span className="font-serif font-bold text-[15px] truncate block">
                      {service.title}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  className={`w-4 h-4 transition-transform duration-300 z-10 ${
                    activeTab === index
                      ? "text-[#E6B055] translate-x-0.5 -translate-y-0.5"
                      : "text-[#073E42]/30 opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Active Content Display Card */}
          <div className="lg:col-span-8 bg-white/90 backdrop-blur-xl border border-[#073E42]/15 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            {/* Card Internal Subtle Pattern Accent */}
            <div className="absolute -top-12 -right-12 w-48 h-48 pointer-events-none opacity-[0.03] text-[#073E42]">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 space-y-6"
              >
                {/* Practitioner / Type Tag + Title */}
                <div>
                  <span className="text-[#073E42] font-semibold text-[10px] sm:text-xs uppercase tracking-widest bg-[#E6B055]/10 border border-[#E6B055]/20 px-3 py-1 rounded-full inline-block">
                    {servicesData[activeTab].sessionType}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#073E42] mt-3 leading-tight">
                    {servicesData[activeTab].title}
                  </h3>
                  <p className="text-[#073E42] font-serif italic mt-2 text-base sm:text-lg">
                    {servicesData[activeTab].subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[#073E42]/80 font-medium text-sm sm:text-base leading-relaxed">
                  {servicesData[activeTab].description}
                </p>

                {/* Benefits / What's included */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-[#073E42] uppercase tracking-wider">
                    {servicesData[activeTab].title === "Focused Group Programs"
                      ? "Current Focus Areas:"
                      : "What this includes:"}
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {servicesData[activeTab].benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#073E42]/80"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#073E42]/10 text-[#073E42] flex items-center justify-center shrink-0 mt-0.5 border border-[#073E42]/20">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-[#073E42]/10">
                  <Link
                    href={servicesData[activeTab].ctaHref}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#073E42] text-white hover:bg-[#073E42]/90 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl active:scale-[0.98]"
                  >
                    <span>{servicesData[activeTab].ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
