"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FiArrowRight, 
  FiHeart, 
  FiBriefcase, 
  FiDollarSign, 
  FiSun, 
  FiAward, 
  FiTarget, 
  FiZap,
  FiCheckCircle,
  FiStar
} from "react-icons/fi";

interface ServiceItem {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export default function ServicesPage(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      title: "Mindset & Inner Blocks",
      tagline: "Break subtle self-sabotage",
      icon: <FiStar className="w-5 h-5 text-[#0d3c38]" />,
      benefits: ["Subconscious pattern rewiring", "Overcoming imposter feelings", "Emotional regulation & clarity"],
      stat: "89% report immediate mindset shift"
    },
    {
      title: "Career & Leadership",
      tagline: "Executive clarity & trajectory",
      icon: <FiBriefcase className="w-5 h-5 text-[#0d3c38]" />,
      benefits: ["Strategic decision confidence", "High-stakes communication", "Purposeful trajectory mapping"],
      stat: "2x growth in professional output"
    },
    {
      title: "Relationships & Boundaries",
      tagline: "Deep connection, clear limits",
      icon: <FiHeart className="w-5 h-5 text-[#0d3c38]" />,
      benefits: ["Breaking toxic cycle loops", "Assertive boundary setting", "Authentic emotional intimacy"],
      stat: "94% healthier interpersonal dynamics"
    }
  ];

  const coreServices: ServiceItem[] = [
    {
      icon: <FiHeart className="w-6 h-6 text-[#0d3c38]" />,
      title: "Relationship",
      description: "Communication blocks, repeating emotional patterns, and boundary setting.",
    },
    {
      icon: <FiBriefcase className="w-6 h-6 text-[#0d3c38]" />,
      title: "Career",
      description: "Direction, clarity in executive decision-making, confidence, and growth.",
    },
    {
      icon: <FiDollarSign className="w-6 h-6 text-[#0d3c38]" />,
      title: "Money",
      description: "Subconscious abundance blocks, money habits, and recurring financial stress.",
    },
    {
      icon: <FiSun className="w-6 h-6 text-[#0d3c38]" />,
      title: "Health & Wellbeing",
      description: "Somatic stress release, energetic balance, and restoring daily vitality.",
    },
    {
      icon: <FiAward className="w-6 h-6 text-[#0d3c38]" />,
      title: "Confidence",
      description: "Unshakeable self-belief, silencing inner criticism, and personal expression.",
    },
    {
      icon: <FiTarget className="w-6 h-6 text-[#0d3c38]" />,
      title: "Purpose",
      description: "Deep soul alignment, personal fulfillment, and stepping into your next chapter.",
    },
  ];

  return (
    <div className="bg-[#faf8f5] text-[#0d3c38] antialiased selection:bg-[#0d3c38]/10 selection:text-[#0d3c38]">
      
      {/* ================= SECTION 1 – HERO & DYNAMIC INTERACTIVE VISUAL ================= */}
      <section className="relative overflow-hidden py-24 lg:py-36 px-6 lg:px-12 bg-gradient-to-b from-[#0d3c38]/10 via-[#faf8f5] to-[#faf8f5]">
        {/* Dynamic Ambient Background Elements */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#0d3c38]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#e7f0ec] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Messaging & Primary Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-[#0d3c38]/15 text-[#0d3c38] text-xs font-semibold tracking-wider uppercase backdrop-blur-md mx-auto lg:mx-0 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0d3c38] animate-ping" />
              <span>Tailored Transformation Framework</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#0d3c38] leading-[1.08]">
              Personalized Solutions for <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#073E42]/90 border-b-2 border-[#0d3c38]/20 pb-1">
                Every Stage of Your Life
              </span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-[#0d3c38]/90 font-medium max-w-2xl mx-auto lg:mx-0">
              Whether you&apos;re facing internal friction, navigating career crossroads, or seeking deeper alignment, our structured 1-on-1 programs equip you with actionable clarity.
            </p>

            <p className="text-base leading-relaxed text-[#0d3c38]/70 font-light max-w-xl mx-auto lg:mx-0">
              Move past superficial advice. Experience holistic, root-cause coaching designed for sustained clarity, confidence, and measurable life transformation.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0d3c38] text-white font-semibold shadow-xl shadow-[#0d3c38]/15 hover:bg-[#072723] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3">
                  <span>Start Your Journey Today</span>
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <a href="#core-services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/80 hover:bg-white text-[#0d3c38] font-semibold border border-[#0d3c38]/15 backdrop-blur-sm transition-all duration-300 shadow-sm flex items-center justify-center">
                  Explore Core Areas
                </button>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Visual Card Framework (No Images) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Background Glow Layer */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#0d3c38]/20 to-[#0d3c38]/5 blur-lg opacity-80" />

              {/* Interactive Pillar Container */}
              <div className="relative rounded-3xl border border-[#0d3c38]/15 bg-white/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6">
                
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-[#0d3c38]/10 pb-4">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#0d3c38]">Focus Areas</h3>
                    <p className="text-xs text-[#0d3c38]/60">Select an area to explore outcomes</p>
                  </div>
                  <span className="p-2 rounded-xl bg-[#0d3c38]/5 text-[#0d3c38]">
                    <FiZap className="w-5 h-5" />
                  </span>
                </div>

                {/* Interactive Tabs */}
                <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#faf8f5] rounded-2xl border border-[#0d3c38]/10">
                  {pillars.map((pillar, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        activeTab === idx 
                          ? "bg-[#0d3c38] text-white shadow-md" 
                          : "text-[#0d3c38]/70 hover:text-[#0d3c38] hover:bg-white/50"
                      }`}
                    >
                      {pillar.title.split(" ")[0]}
                    </button>
                  ))}
                </div>

                {/* Tab Display Panel */}
                <div className="p-5 rounded-2xl bg-[#faf8f5]/80 border border-[#0d3c38]/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white border border-[#0d3c38]/10 shadow-sm">
                      {pillars[activeTab].icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0d3c38]">{pillars[activeTab].title}</h4>
                      <p className="text-xs text-[#0d3c38]/70">{pillars[activeTab].tagline}</p>
                    </div>
                  </div>

                  {/* Outcome Checklist */}
                  <div className="space-y-2 pt-2">
                    {pillars[activeTab].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#0d3c38]/85 font-medium">
                        <FiCheckCircle className="w-4 h-4 text-[#0d3c38] shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stat Highlight Pill */}
                <div className="p-4 rounded-2xl bg-[#0d3c38] text-white flex items-center justify-between shadow-lg">
                  <div className="space-y-0.5">
                    <p className="text-[10px] uppercase tracking-wider text-white/70 font-semibold">Client Metric</p>
                    <p className="text-xs font-bold">{pillars[activeTab].stat}</p>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-white/80" />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights Ticker / Pill Bar */}
        <div className="max-w-5xl mx-auto pt-16 mt-16 border-t border-[#0d3c38]/10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-[#0d3c38]/10 shadow-sm text-center flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1">
              <FiTarget className="w-6 h-6 text-[#0d3c38]" />
              <span className="text-xs sm:text-sm font-semibold text-[#0d3c38]">Tailored Action Plans</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-[#0d3c38]/10 shadow-sm text-center flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1">
              <FiZap className="w-6 h-6 text-[#0d3c38]" />
              <span className="text-xs sm:text-sm font-semibold text-[#0d3c38]">Expert 1-on-1 Guidance</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-[#0d3c38]/10 shadow-sm text-center flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1">
              <FiSun className="w-6 h-6 text-[#0d3c38]" />
              <span className="text-xs sm:text-sm font-semibold text-[#0d3c38]">Sustainable Growth</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-[#0d3c38]/10 shadow-sm text-center flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1">
              <FiAward className="w-6 h-6 text-[#0d3c38]" />
              <span className="text-xs sm:text-sm font-semibold text-[#0d3c38]">Lasting Clarity</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 – OUR CORE SERVICES ================= */}
      <section id="core-services" className="relative py-24 lg:py-36 px-6 lg:px-12 bg-white border-t border-[#0d3c38]/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4 text-center mx-auto">
            <div className="inline-block">
              <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0d3c38]/60">
                Our Core Services
              </h2>
              <div className="h-1 w-12 bg-[#0d3c38] mt-2 mx-auto rounded-full" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0d3c38]">
              Transform Every Area of Your Life
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service: ServiceItem, index: number) => (
              <div 
                key={index} 
                className="group relative p-8 sm:p-10 rounded-3xl bg-[#faf8f5] border border-[#0d3c38]/10 shadow-sm hover:shadow-xl hover:border-[#0d3c38]/30 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0d3c38]/5 rounded-bl-full pointer-events-none group-hover:bg-[#0d3c38]/10 transition-colors duration-300" />

                <div className="space-y-6 relative z-10 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#0d3c38]/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0d3c38] transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-[#0d3c38]/75 text-base leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}