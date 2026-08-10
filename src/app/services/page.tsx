"use client";

import React from "react";
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
  FiCalendar,
  FiCheckCircle
} from "react-icons/fi";
import CTA from "../../components/home/CTA";
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

  const processSteps: ProcessStep[] = [
    {
      step: "1",
      title: "Discover",
      description: "We begin by understanding your unique challenges, goals, and current situation through a personalized consultation.",
    },
    {
      step: "2",
      title: "Create Your Plan",
      description: "Based on your needs, we design a customized action plan with practical strategies and achievable milestones.",
    },
    {
      step: "3",
      title: "Take Action",
      description: "Through coaching sessions, guidance, and continuous support, you'll implement positive habits and overcome limiting beliefs.",
    },
    {
      step: "4",
      title: "Achieve Lasting Growth",
      description: "As you build confidence and consistency, you'll experience sustainable transformation across the areas of life that matter most.",
    },
  ];

  return (
    <div className="bg-[#faf8f5] text-[#0d3c38] antialiased selection:bg-[#0d3c38]/10 selection:text-[#0d3c38]">
      
      {/* ================= SECTION 1 – OUR SERVICES ================= */}
      <section className="relative overflow-hidden py-24 lg:py-36 px-6 lg:px-12 bg-gradient-to-b from-[#0d3c38]/5 via-[#faf8f5] to-[#faf8f5]">
        {/* Abstract glowing background blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0d3c38]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e7f0ec] border border-[#0d3c38]/10 text-[#0d3c38] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm mx-auto lg:mx-0 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0d3c38] animate-pulse" />
              Holistic Growth & Transformation Programs
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0d3c38] leading-[1.08]">
              Personalized Solutions for <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#073E42]/90">Every Stage of Your Life</span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-[#0d3c38]/90 font-medium">
              Whether you're facing personal challenges, seeking professional growth, or searching for greater purpose, our personalized coaching programs are designed to help you create lasting, positive change.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-[#0d3c38]/75 font-light">
              We believe every individual has the potential to live a happier, healthier, and more fulfilling life through proven techniques, practical strategies, and compassionate guidance.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/contact">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0d3c38] text-white font-semibold shadow-xl shadow-[#0d3c38]/10 hover:bg-[#0d3c38]/90 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                  Start Your Journey Today <FiArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-[#0d3c38]/10 blur-xl opacity-70" />
              
              <div className="relative rounded-3xl overflow-hidden border border-[#0d3c38]/10 shadow-2xl bg-white aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80" 
                  alt="Personalized coaching and growth session" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#0d3c38]/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights Ticker / Pill Bar */}
        <div className="max-w-5xl mx-auto pt-16 mt-16 border-t border-[#0d3c38]/10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-[#0d3c38]/10 shadow-sm text-center flex flex-col items-center justify-center gap-2">
              <FiTarget className="w-6 h-6 text-[#0d3c38]" />
              <span className="text-xs sm:text-sm font-semibold text-[#0d3c38]">Tailored Action Plans</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-[#0d3c38]/10 shadow-sm text-center flex flex-col items-center justify-center gap-2">
              <FiZap className="w-6 h-6 text-[#0d3c38]" />
              <span className="text-xs sm:text-sm font-semibold text-[#0d3c38]">Expert 1-on-1 Support</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-[#0d3c38]/10 shadow-sm text-center flex flex-col items-center justify-center gap-2">
              <FiSun className="w-6 h-6 text-[#0d3c38]" />
              <span className="text-xs sm:text-sm font-semibold text-[#0d3c38]">Sustainable Habits</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-[#0d3c38]/10 shadow-sm text-center flex flex-col items-center justify-center gap-2">
              <FiAward className="w-6 h-6 text-[#0d3c38]" />
              <span className="text-xs sm:text-sm font-semibold text-[#0d3c38]">Lasting Confidence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 – OUR CORE SERVICES ================= */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 bg-white border-t border-[#0d3c38]/5">
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

      {/* ================= SECTION 3 – OUR PROCESS ================= */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 bg-[#faf8f5] border-t border-[#0d3c38]/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0d3c38]/60">
                Our Process
              </h2>
              <div className="h-1 w-12 bg-[#0d3c38] mt-2 rounded-full" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0d3c38]">
              How We Help You Transform
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item: ProcessStep, index: number) => (
              <div 
                key={index}
                className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-[#0d3c38]/10 shadow-xl shadow-[#0d3c38]/5 hover:border-[#0d3c38]/30 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0d3c38]/5 rounded-bl-full pointer-events-none group-hover:bg-[#0d3c38]/10 transition-colors duration-300" />

                <div className="space-y-6 relative z-10 flex-1">
                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-black text-[#0d3c38]/20 group-hover:text-[#0d3c38]/40 transition-colors duration-300">
                      {item.step}.
                    </span>
                  </div>

                  <h4 className="text-xl font-bold tracking-tight text-[#0d3c38]">
                    {item.title}
                  </h4>

                  <p className="text-[#0d3c38]/75 text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA/>

    </div>
  );
}