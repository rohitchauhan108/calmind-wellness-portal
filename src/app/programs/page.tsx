"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function ProgramsPage() {
  const [isVIP, setIsVIP] = useState(false);

  const programsList = [
    {
      number: "01",
      badge: "1-ON-1 COACHING",
      title: "The Personal Empowerment Pathway",
      tagline: "3-Month Transformative Mentorship",
      desc: "Perfect for individuals seeking deep clarity, authentic self-belief, and purpose. Includes regular coaching, targeted subconscious block clearing, and custom handwriting transformation guides.",
      rating: "5.0",
      features: [
        "Six private 75-minute coaching sessions",
        "Full scientific handwriting analysis",
        "Custom Graphotherapy exercises",
        "Subconscious block detection",
        "Continuous accountability tracking",
        "Direct email & messaging support",
      ],
      priceIndividual: 450,
      priceVIP: 750,
      paymentLink: "https://buy.stripe.com/cNi7sN6Zg6p92Ex55PdZ600",
      img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80",
      tags: ["3-MONTH MENTORSHIP", "GRAPHOTHERAPY", "SUBCONSCIOUS CLEARING"],
    },
    {
      number: "02",
      badge: "HEALING & RESTORATION",
      title: "The Energetic Rebirth Intensive",
      tagline: "4-Week Emotional Decompression",
      desc: "Engineered specifically for those suffering from high stress, heavy anxiety, emotional fatigue, or blocks. Combines powerful energetic clearing with calming somatic exercises.",
      rating: "4.9",
      features: [
        "Four private 60-min Energy Healing sessions",
        "Deep somatic decompression protocol",
        "Mental silence technique training",
        "Anxiety-relief handwriting stroke guides",
        "Daily personalized grounding practices",
        "Weekly energetic field assessments",
      ],
      priceIndividual: 320,
      priceVIP: 550,
      paymentLink: "https://buy.stripe.com/9B6aEZdnEaFp3IBgOxdZ601",
      img: "https://images.pexels.com/photos/34423/dandelion-seeds-pointed-flower-plant.jpg",
      tags: ["4-WEEK INTENSIVE", "ENERGY HEALING", "SOMATIC DECOMPRESSION"],
    },
    {
      number: "03",
      badge: "COMPLETE INTEGRATION",
      title: "The Subconscious Alignment Journey",
      tagline: "6-Month Signature Evolution",
      desc: "Our flagship, deeply restorative program. We systematically map, rewrite, and heal every facet of your thoughts, emotions, habits, and energetic blockages for permanent life transformation.",
      rating: "5.0",
      features: [
        "Twelve private Coaching & Healing sessions",
        "Full detailed Graphotherapy analysis & redesign",
        "Comprehensive root-cause discovery audits",
        "Custom behavioral habit-shift protocol",
        "Priority scheduling & unlimited high-touch support",
        "Lifetime integration toolkit & exercises",
      ],
      priceIndividual: 950,
      priceVIP: 1550,
      paymentLink: "https://buy.stripe.com/00w6oJ1EW14P2Ex9m5dZ602",
      img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80",
      tags: ["6-MONTH FLAGSHIP", "FULL HEALING", "HIGH-TOUCH MENTORSHIP"],
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

          {/* Pricing Tier Selector Toggle */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span
              className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                !isVIP ? "text-[#0D3C38]" : "text-[#0D3C38]/50"
              }`}
            >
              Standard Tier
            </span>

            <button
              onClick={() => setIsVIP(!isVIP)}
              className="w-14 h-8 rounded-full bg-[#0D3C38]/15 p-1 flex items-center transition-colors duration-300 relative focus:outline-none cursor-pointer"
              aria-label="Toggle VIP Tier"
            >
              <motion.div
                layout
                className="w-6 h-6 rounded-full bg-[#0D3C38] shadow-sm"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ marginLeft: isVIP ? "auto" : "0" }}
              />
            </button>

            <span
              className={`text-xs sm:text-sm font-semibold tracking-wide transition-colors flex items-center gap-2 ${
                isVIP ? "text-[#0D3C38]" : "text-[#0D3C38]/50"
              }`}
            >
              VIP High-Touch Tier
              <span className="text-[10px] bg-[#0D3C38] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Priority
              </span>
            </span>
          </div>
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
                        {isVIP ? "VIP High-Touch Fee" : "Standard Program Fee"}
                      </div>
                      <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0D3C38] mt-0.5">
                        ${isVIP ? prog.priceVIP.toLocaleString() : prog.priceIndividual.toLocaleString()}
                        <span className="text-xs font-sans text-[#0D3C38]/60 font-normal ml-1">
                          USD
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={prog.paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 rounded-none bg-[#0D3C38] hover:bg-[#0D3C38]/90 text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-md inline-flex items-center gap-2 group"
                      >
                        ENROLL NOW
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
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