"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function ProgramsPage() {
  const programsList = [
    {
      number: "01",
      badge: "ENTRY-LEVEL",
      title: "Daily Practice (Name TBD)",
      tagline: "Short Live Daily Practice",
      desc: "A short, live-only daily practice designed to build consistency and ground your energy. Approximately 13–15 minutes, 6 days a week.",
      rating: "New",
      features: [
        "13–15 minutes daily sessions",
        "6 days a week schedule",
        "Live only access",
        "Entry-level offering",
        "Final name & content TBD"
      ],
      priceText: "Pricing TBD",
      actionText: "INQUIRE NOW",
      actionLink: "/contact",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
      tags: ["DAILY PRACTICE", "LIVE ONLY"],
    },
    {
      number: "02",
      badge: "LOW-TO-MID TIER",
      title: "Chakra + Healing Practice (Name TBD)",
      tagline: "Deeper Guided Practice",
      desc: "A deeper guided practice focusing on Chakra meditation and healing-focused work. Approximately 25–35 minutes, around 4–5 days a week.",
      rating: "New",
      features: [
        "25–35 minutes per session",
        "4–5 days a week",
        "Chakra meditation focus",
        "Deep healing work",
        "Final name & structure TBD"
      ],
      priceText: "Pricing TBD",
      actionText: "INQUIRE NOW",
      actionLink: "/contact",
      img: "https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&w=1200&q=80",
      tags: ["CHAKRA", "HEALING"],
    },
    {
      number: "03",
      badge: "DEEP FOCUS",
      title: "Focused Group Coaching",
      tagline: "Area-Specific Transformation",
      desc: "Deeper programs focused on specific areas of life to bring collective healing, targeted strategies, and profound breakthroughs.",
      rating: "5.0",
      features: [
        "Weight Loss focus area",
        "Relationships focus area",
        "Career growth strategies",
        "Money & Abundance blocks",
        "Deep group coaching dynamic"
      ],
      priceText: "Pricing TBD",
      actionText: "INQUIRE NOW",
      actionLink: "/contact",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
      tags: ["GROUP COACHING", "LIFE AREAS"],
    },
    {
      number: "04",
      badge: "HIGHEST TOUCH",
      title: "Private / VIP Coaching",
      tagline: "Premium 1:1 Coaching",
      desc: "Our highest-touch offering delivering premium 1:1 coaching. Tailored structure, duration, and transformation promises designed exclusively for you.",
      rating: "5.0",
      features: [
        "Premium 1:1 personalized coaching",
        "Highest-touch mentorship",
        "Custom transformation promise",
        "Bespoke duration & structure",
        "Final public-facing name TBD"
      ],
      priceText: "Pricing TBD",
      actionText: "INQUIRE NOW",
      actionLink: "/contact",
      img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      tags: ["VIP", "1-ON-1", "PREMIUM"],
    },
    {
      number: "05",
      badge: "SPECIALIZED",
      title: "Graphotherapy Offerings",
      tagline: "Handwriting & Subconscious Alignment",
      desc: "Specialized offerings to reprogram the subconscious through handwriting. Includes individual signature analysis and targeted workshops for all ages.",
      rating: "5.0",
      features: [
        "Signature Analysis",
        "Adult Graphotherapy Workshops",
        "Kids Graphotherapy Workshops",
        "Kids Graphotherapy Program",
        "Subconscious reprogramming"
      ],
      priceText: "Pricing TBD",
      actionText: "INQUIRE NOW",
      actionLink: "/contact",
      img: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1200&q=80",
      tags: ["GRAPHOTHERAPY", "WORKSHOPS"],
    },
    {
      number: "06",
      badge: "FUTURE OFFERING",
      title: "Membership",
      tagline: "Exclusive Community Ecosystem",
      desc: "An upcoming membership concept currently in development. It will provide ongoing support, community, and continuous transformation.",
      rating: "Upcoming",
      features: [
        "Exclusive community access",
        "Ongoing continuous support",
        "Future ecosystem offering",
        "Membership concept in development",
        "Details & pricing coming soon"
      ],
      priceText: "Coming Soon",
      actionText: "JOIN WAITLIST",
      actionLink: "/contact",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      tags: ["MEMBERSHIP", "COMMUNITY"],
    },
  ];

  return (
    <main className="bg-[#FAF8F5] text-[#0D3C38] antialiased min-h-screen selection:bg-[#0D3C38]/10">
      
      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 lg:px-16 border-b border-[#0D3C38]/10 overflow-hidden">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0D3C38]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7F0EC] border border-[#0D3C38]/10 text-[#0D3C38] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#0D3C38]" />
            <span>PATHWAYS OF GROWTH</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#0D3C38] leading-[1.15] font-semibold max-w-4xl mx-auto">
            Curated Programs for <br className="hidden sm:inline" />
            <span className="italic font-normal">Lasting Transformation</span>
          </h1>

          <p className="text-base sm:text-lg text-[#0D3C38]/75 font-normal max-w-2xl mx-auto leading-relaxed">
            Bespoke holistic frameworks integrating Life Coaching, Energy Healing, and Graphotherapy to help you dissolve subconscious blocks and step into your full potential.
          </p>
        </div>
      </section>

      {/* ================= EDITORIAL ALTERNATING PROGRAM LIST ================= */}
      <section className="py-16 lg:py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-24 lg:space-y-36">
          {programsList.map((prog, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={prog.number}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* TEXT CONTENT COLUMN */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    !isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Step Number & Tags */}
                  <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest uppercase font-mono text-[#0D3C38]/60">
                    <span className="font-bold text-[#0D3C38] text-sm">
                      {prog.number}
                    </span>
                    <span>—</span>
                    <span>{prog.tags.join(" • ")}</span>
                  </div>

                  {/* Program Title */}
                  <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0D3C38] leading-tight">
                      {prog.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0D3C38]/70 flex items-center gap-2 pt-1">
                      <Calendar className="w-4 h-4 text-[#0D3C38]" />
                      {prog.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#0D3C38]/80 leading-relaxed font-normal">
                    {prog.desc}
                  </p>

                  {/* Program Inclusions (2-Column Bullet Grid) */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3C38]/60">
                      PROGRAM INCLUDES
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                      {prog.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#0D3C38]/85 font-medium leading-snug"
                        >
                          <span className="mt-1 text-[#0D3C38]">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Action CTA Block */}
                  <div className="pt-6 border-t border-[#0D3C38]/10 flex flex-wrap items-center justify-between gap-6">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#0D3C38]/60">
                        Investment
                      </div>
                      <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3C38] mt-0.5">
                        {prog.priceText}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={prog.actionLink}
                        className="px-8 py-3.5 rounded-none bg-[#0D3C38] hover:bg-[#0D3C38]/90 text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-md inline-flex items-center gap-2 group"
                      >
                        {prog.actionText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* SINGLE IMAGE DISPLAY COLUMN */}
                <div
                  className={`lg:col-span-6 relative ${
                    !isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#0D3C38]/10 bg-white group">
                    <Image
                      src={prog.img}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D3C38]/30 via-transparent to-transparent pointer-events-none" />

                    {/* Top Floating Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0D3C38] shadow-md flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-[#E6B055] text-[#E6B055]" />
                      <span>{prog.rating} Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FINAL CTA BANNER ================= */}
      <section className="py-20 px-6 lg:px-16 bg-[#0D3C38] text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E7F0EC]/70">
            UNSURE WHICH PROGRAM IS RIGHT FOR YOU?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
            Book a 1-on-1 Clarity Consultation
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            We’ll evaluate your specific goals, discuss graphotherapy options, and tailor a roadmap designed explicitly for your personal evolution.
          </p>

          <div className="pt-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-white text-[#0D3C38] font-semibold text-xs tracking-widest uppercase hover:bg-[#E7F0EC] transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer">
                Schedule Your Discovery Session
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
