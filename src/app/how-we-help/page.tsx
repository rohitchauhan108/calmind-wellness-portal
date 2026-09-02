"use client";

import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiSearch,
  FiFileText,
  FiTarget,
  FiHeart,
} from "react-icons/fi";

export default function HowWeHelpPage() {
  const steps = [
    {
      number: "01",
      title: "Understand Your Challenges",
      description:
        "Every journey begins with listening. We take the time to understand your unique experiences, goals, and obstacles, allowing us to identify the areas that need the most attention and support.",
      icon: <FiSearch className="w-5 h-5 text-white" />,
      circleBg: "bg-[#0d3c38]",
      previewList: [
        "Initial Consultation",
        "Obstacle Assessment",
        "Goal Setting",
        "Support Planning",
      ],
    },
    {
      number: "02",
      title: "Create a Personalized Plan",
      description:
        "No two people are the same. We develop a tailored action plan based on your individual needs, helping you focus on the right strategies for relationships, career, finances, wellbeing, confidence, or finding your purpose.",
      icon: <FiFileText className="w-5 h-5 text-white" />,
      circleBg: "bg-[#1f5f58]",
      previewList: [
        "Strategy Roadmap",
        "Custom Action Items",
        "Milestone Tracking",
        "Resource Allocation",
      ],
    },
    {
      number: "03",
      title: "Take Action with Expert Guidance",
      description:
        "Through one-on-one coaching, practical exercises, and proven personal development techniques, we help you replace limiting beliefs with empowering habits and confident decision-making.",
      icon: <FiTarget className="w-5 h-5 text-white" />,
      circleBg: "bg-[#0d3c38]",
      previewList: [
        "Coaching Sessions",
        "Daily Practice Exercises",
        "Mindset Shifts",
        "Decision Making Tools",
      ],
    },
    {
      number: "04",
      title: "Build Lasting Transformation",
      description:
        "Our goal isn't just short-term improvement—it's sustainable growth. We provide continuous support and accountability to help you maintain progress, overcome future challenges, and live with greater confidence, clarity, and purpose.",
      icon: <FiHeart className="w-5 h-5 text-white" />,
      circleBg: "bg-[#0d3c38]",
      previewList: [
        "Accountability Check-ins",
        "Growth Maintenance",
        "Long-term Resilience",
        "Progress Evaluation",
      ],
    },
  ];

  const benefits = [
    {
      title: "Tailored Guidance",
      desc: "Personalized guidance designed entirely around your unique goals and everyday challenges.",
    },
    {
      title: "Actionable Strategies",
      desc: "Practical tools and framework mechanics you can immediately apply in your routine.",
    },
    {
      title: "Holistic Development",
      desc: "A comprehensive approach supporting emotional, mental, and personal growth concurrently.",
    },
    {
      title: "Accountability & Support",
      desc: "Ongoing encouragement to keep your momentum steady when obstacles appear.",
    },
    {
      title: "Sustainable Growth",
      desc: "Focused on long-term positive change and root-level shifts rather than temporary fixes.",
    },
  ];

  return (
    <main className="bg-[#faf8f5] text-[#0d3c38] antialiased selection:bg-[#0d3c38]/10 selection:text-[#0d3c38] overflow-x-hidden font-sans min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 px-6 lg:px-16 border-b border-[#0d3c38]/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0d3c38]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e7f0ec] border border-[#0d3c38]/10 text-[#0d3c38] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#0d3c38] animate-ping" />
              OUR PROVEN METHODOLOGY
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#073E42] leading-[1.12] tracking-tight font-semibold">
              Empowering Lasting Growth,{" "}
              <span className="font-serif italic font-normal">
                One Intention
              </span>{" "}
              at a Time.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#0d3c38]/80 font-normal max-w-2xl">
              Real transformation doesn't happen overnight. We help you systematically navigate relationships, career, money, wellbeing, confidence, and purpose.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <button className="px-7 py-3.5 rounded-full bg-[#0d3c38] text-white font-medium text-sm shadow-md hover:bg-[#0d3c38]/90 transition-all duration-300 flex items-center gap-2">
                  Start Your Journey <FiArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <div className="flex items-center gap-3 px-3 py-1.5">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#0d3c38]/10 border-2 border-[#faf8f5] flex items-center justify-center text-xs font-bold text-[#0d3c38]">✦</div>
                  <div className="w-8 h-8 rounded-full bg-[#0d3c38]/20 border-2 border-[#faf8f5] flex items-center justify-center text-xs font-bold text-[#0d3c38]">★</div>
                  <div className="w-8 h-8 rounded-full bg-[#0d3c38]/15 border-2 border-[#faf8f5] flex items-center justify-center text-xs font-bold text-[#0d3c38]">●</div>
                </div>
                <div className="text-xs font-normal text-[#0d3c38]/70">
                  <strong className="text-[#0d3c38] font-semibold block">100% Tailored</strong>
                  Dedicated 1-on-1 Framework
                </div>
              </div>
            </div>
          </div>

          {/* Right Framework Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-[#0d3c38]/10 shadow-xl space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-bold tracking-widest uppercase text-[#0d3c38]/60">
                  THE FRAMEWORK
                </span>
                <h3 className="text-2xl font-bold text-[#0d3c38]">
                  Structured For Clarity
                </h3>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#faf8f5] border border-[#0d3c38]/5">
                  <span className="text-lg font-black text-[#0d3c38]">01</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0d3c38]">Deep Discovery</h4>
                    <p className="text-xs text-[#0d3c38]/70">Uncovering root challenges and alignment blocks.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#faf8f5] border border-[#0d3c38]/5">
                  <span className="text-lg font-black text-[#0d3c38]">02</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0d3c38]">Strategic Mapping</h4>
                    <p className="text-xs text-[#0d3c38]/70">Building your custom step-by-step roadmap.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#faf8f5] border border-[#0d3c38]/5">
                  <span className="text-lg font-black text-[#0d3c38]">03</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0d3c38]">Sustained Execution</h4>
                    <p className="text-xs text-[#0d3c38]/70">Consistent reinforcement and accountability.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= VERTICAL TIMELINE PROCESS SECTION ================= */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0d3c38]/60">
              <span className="w-6 h-[1px] bg-[#0d3c38]/30"></span>
              OUR PROCESS
              <span className="w-6 h-[1px] bg-[#0d3c38]/30"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0d3c38]">
              Your Path to Lasting Transformation
            </h2>
            <p className="text-[#0d3c38]/70 text-sm sm:text-base leading-relaxed">
              An intentional sequence designed to clear mental noise and instill sustainable habits.
            </p>
          </div>

          {/* Vertical Timeline Structure */}
          <div className="relative">
            {/* Center Vertical Connecting Line */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-[#0d3c38]/10 -translate-x-1/2 z-0" />

            <div className="space-y-16 lg:space-y-24 relative z-10">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={step.number}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
                  >
                    {/* LEFT BLOCK */}
                    <div className="w-full lg:w-1/2">
                      {isEven ? (
                        /* Step 01 & Step 03: Text Content on the Left */
                        <div className="space-y-3 max-w-md mx-auto lg:mx-0 lg:ml-auto lg:text-right">
                          <span className="text-xs font-mono font-bold text-[#0d3c38]/60 tracking-wider uppercase">
                            — STEP {step.number}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-[#0d3c38]">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#0d3c38]/75 leading-relaxed font-normal">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        /* Step 02 & Step 04: Preview Card Box on the Left */
                        <div className="w-full max-w-md mx-auto lg:mx-0 lg:mr-auto bg-[#faf8f5] rounded-3xl p-6 sm:p-8 border border-[#0d3c38]/10 shadow-sm space-y-3">
                          {step.previewList.map((item, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center gap-4 p-3.5 rounded-2xl transition-all ${
                                idx === 0
                                  ? "bg-white border border-[#0d3c38]/10 font-bold text-[#0d3c38] shadow-sm"
                                  : "text-[#0d3c38]/60 font-medium"
                              }`}
                            >
                              <span
                                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                                  idx === 0
                                    ? "bg-[#0d3c38]/10 text-[#0d3c38]"
                                    : "bg-[#0d3c38]/5 text-[#0d3c38]/70"
                                }`}
                              >
                                {idx + 1}
                              </span>
                              <span className="text-xs sm:text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CENTRAL ICON CIRCLE NODE */}
                    <div className="relative shrink-0 flex items-center justify-center">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${step.circleBg} flex items-center justify-center shadow-md z-10 border-4 border-white`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* RIGHT BLOCK */}
                    <div className="w-full lg:w-1/2">
                      {isEven ? (
                        /* Step 01 & Step 03: Preview Card Box on the Right */
                        <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto bg-[#faf8f5] rounded-3xl p-6 sm:p-8 border border-[#0d3c38]/10 shadow-sm space-y-3">
                          {step.previewList.map((item, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center gap-4 p-3.5 rounded-2xl transition-all ${
                                idx === 0
                                  ? "bg-white border border-[#0d3c38]/10 font-bold text-[#0d3c38] shadow-sm"
                                  : "text-[#0d3c38]/60 font-medium"
                              }`}
                            >
                              <span
                                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                                  idx === 0
                                    ? "bg-[#0d3c38]/10 text-[#0d3c38]"
                                    : "bg-[#0d3c38]/5 text-[#0d3c38]/70"
                                }`}
                              >
                                {idx + 1}
                              </span>
                              <span className="text-xs sm:text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Step 02 & Step 04: Text Content on the Right */
                        <div className="space-y-3 max-w-md mx-auto lg:mx-0 lg:mr-auto lg:text-left">
                          <span className="text-xs font-mono font-bold text-[#0d3c38]/60 tracking-wider uppercase">
                            — STEP {step.number}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-[#0d3c38]">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#0d3c38]/75 leading-relaxed font-normal">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY OUR APPROACH WORKS SECTION ================= */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 bg-[#faf8f5] border-t border-[#0d3c38]/10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0d3c38]/60">
              OUR DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0d3c38]">
              Why Our Approach Works
            </h2>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white border border-[#0d3c38]/10 hover:border-[#0d3c38]/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e7f0ec] text-[#0d3c38] flex items-center justify-center shrink-0 group-hover:bg-[#0d3c38] group-hover:text-white transition-colors duration-300">
                    <FiCheck className="w-5 h-5 font-bold" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0d3c38]">{benefit.title}</h3>
                    <p className="text-[#0d3c38]/70 text-xs font-normal mt-0.5">{benefit.desc}</p>
                  </div>
                </div>
                <div className="text-[#0d3c38] font-mono text-xs font-bold tracking-wider uppercase self-start md:self-center opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Verified Result <FiArrowRight />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-16 px-6 lg:px-16 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#0d3c38] text-white shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Background SVG Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="cta-grid-pattern-help"
                    width="32"
                    height="32"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 32 0 L 0 0 0 32"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid-pattern-help)" />
              </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 space-y-3 max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Ready to begin your healing journey?
              </h2>
              <p className="text-sm text-white/80 font-normal leading-relaxed">
                Connect with our team to find the right path for your personal growth and transformation.
              </p>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 shrink-0">
              <a
              href="https://calendly.com/ilagarg-official/clarity-call-with-ila"
              target="_blank"
              rel="noopener noreferrer"
            >
                <button className="px-7 py-3.5 rounded-full bg-white text-[#0d3c38] font-semibold hover:bg-[#e7f0ec] transition-all duration-300 text-xs sm:text-sm shadow-md">
                  Book A Consultation
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}