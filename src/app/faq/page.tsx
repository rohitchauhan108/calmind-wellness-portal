"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  Sparkles, 
  Layers, 
  HelpCircle, 
  ChevronRight, 
  ChevronDown,
  ArrowUpRight,
  ArrowRight
} from "lucide-react";

const CATEGORIZED_FAQS = [
  {
    id: "about",
    category: "About Us",
    icon: Compass,
    number: "01",
    tagline: "PHILOSOPHY",
    title: "Understanding Our Philosophy & Approach",
    subtitle: "Learn about the core principles behind our transformational work.",
    linkText: "About Us",
    linkHref: "/about",
    items: [
      {
        question: "What is the core methodology behind our transformation framework?",
        answer: "Our methodology combines Graphotherapy, subconscious rewiring, energy healing, and strategic alignment. We address root cause patterns rather than temporary surface symptoms."
      },
      {
        question: "Who can benefit most from working with us?",
        answer: "Individuals facing career plateaus, relationship dynamic shifts, money blocks, low self-confidence, or a general desire for deeper life clarity."
      },
      {
        question: "Is this approach similar to traditional coaching or therapy?",
        answer: "It is a hybrid transformational model. We clear past subconscious blocks while giving you practical, forward-moving strategic steps for future goals."
      },
      {
        question: "How are sessions kept confidential?",
        answer: "All consultations, notes, and handwriting samples are protected within a strictly private and non-judgmental environment."
      },
      {
        question: "What makes Graphotherapy and Energy Healing so effective?",
        answer: "Graphotherapy alters subconscious neural patterns via handwriting strokes, while Energy Healing releases stored emotional stagnation, creating holistic mind-body alignment."
      }
    ]
  },
  {
    id: "services",
    category: "Services",
    icon: Sparkles,
    number: "02",
    tagline: "OFFERINGS",
    title: "Coaching Programs & Service Offerings",
    subtitle: "Explore our available formats, packages, and session structures.",
    linkText: "View Services",
    linkHref: "/services",
    items: [
      {
        question: "What session formats do you offer?",
        answer: "We offer 1-on-1 online video consultations, intensive breakthrough sessions, and structured multi-month transformation packages."
      },
      {
        question: "Are customized program packages available?",
        answer: "Yes. Following an initial assessment, we design tailored blueprints customized to your unique goals and personal schedule."
      },
      {
        question: "Do you offer group workshops or corporate sessions?",
        answer: "Yes, we lead masterclasses focusing on stress management, leadership confidence, burnout recovery, and emotional regulation."
      },
      {
        question: "What support is included between live sessions?",
        answer: "Clients enrolled in long-term packages receive direct messaging and email check-ins for continuous support and accountability."
      },
      {
        question: "Can I extend my coaching package mid-way?",
        answer: "Yes, packages can be extended or transitioned into ongoing monthly integration support whenever needed."
      }
    ]
  },
  {
    id: "how-we-help",
    category: "How We Help",
    icon: Layers,
    number: "03",
    tagline: "FOCUS PILLARS",
    title: "Focus Areas & Life Pillars",
    subtitle: "Discover how we address specific challenges across life domains.",
    linkText: "Our Approach",
    linkHref: "/how-we-help",
    items: [
      {
        question: "How do you help overcome repeating relationship patterns?",
        answer: "We pinpoint emotional triggers, heal past attachment cycles, and establish clear boundary-setting strategies."
      },
      {
        question: "Can this help with career progression and decision-making?",
        answer: "Yes. We tackle imposter syndrome, decision fatigue, and executive confidence to help you navigate pivotal career moves."
      },
      {
        question: "How do we work through financial stress and abundance blocks?",
        answer: "We examine underlying scarcity mindsets and childhood money stories to build an empowered financial outlook."
      },
      {
        question: "What is the approach to stress release and daily vitality?",
        answer: "We integrate somatic nervous system regulation and subtle energy clearing to lower stress and rebuild energy reserves."
      },
      {
        question: "How quickly can I expect to see tangible results?",
        answer: "Initial mental clarity often begins within 21 to 30 days of daily practice, with long-term shifts taking root over 90 days."
      }
    ]
  },
  {
    id: "contact",
    category: "Contact",
    icon: HelpCircle,
    number: "04",
    tagline: "SCHEDULING",
    title: "Booking, Inquiries & Support",
    subtitle: "Everything you need to know about scheduling and consultations.",
    linkText: "Contact Us",
    linkHref: "/contact",
    items: [
      {
        question: "How do I book an initial consultation?",
        answer: "Submit an inquiry via our Contact page form or email us directly at contact@ilagarg.com to request an open slot."
      },
      {
        question: "Are sessions conducted online or in person?",
        answer: "All sessions are held virtually via secure video calls worldwide. In-person consultations take place by appointment only."
      },
      {
        question: "What is your rescheduling policy?",
        answer: "We ask for at least 24 hours' notice prior to your scheduled time to reschedule your consultation."
      },
      {
        question: "Which time zones do you accommodate?",
        answer: "We offer flexible scheduling options to accommodate clients across European, American, Asian, and Australian time zones."
      },
      {
        question: "How quickly will I receive a response after reaching out?",
        answer: "Our support team typically responds to all inquiries within 24 business hours."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("about");
  const [selectedQuestions, setSelectedQuestions] = useState({
    about: 0,
    services: 0,
    "how-we-help": 0,
    contact: 0,
  });

  const handleSelectQuestion = (sectionId: string, index: number) => {
    setSelectedQuestions((prev) => ({
      ...prev,
      [sectionId]: index,
    }));
  };

  const activeSection = CATEGORIZED_FAQS.find((s) => s.id === activeTab) || CATEGORIZED_FAQS[0];
  const activeQuestionIndex = selectedQuestions[activeTab as keyof typeof selectedQuestions] ?? 0;
  const activeItem = activeSection.items[activeQuestionIndex];

  return (
    <main className="bg-[#FAF8F5] text-[#0F291E] min-h-screen antialiased selection:bg-[#059669]/20 selection:text-[#0F291E] font-sans pb-24">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-16 lg:pt-24 pb-16 lg:pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#0F291E]/5 via-[#FAF8F5] to-[#FAF8F5]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#059669]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#059669]/10 border border-[#059669]/20 text-[#059669] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              Support & Clarity
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-[#0F291E]">
              Frequently Asked <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#073E42]/90">Questions</span>
            </h1>

            <p className="text-base sm:text-lg text-[#0F291E]/75 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Find detailed answers about our transformational framework, individual coaching programs, session formats, and how to get started on your personal growth path.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0F291E] text-white text-sm font-semibold hover:bg-[#059669] transition-all duration-300 shadow-md shadow-[#0F291E]/10"
              >
                Ask a Question <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-[#059669]/15 blur-xl opacity-70" />
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#0F291E]/10 shadow-2xl bg-white aspect-[4/3] sm:aspect-[14/10] lg:aspect-[4/3]">
                <Image
                  src="/faq.webp"
                  alt="Frequently Asked Questions & Support"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-[#0F291E]/5 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TOP PILL NAV BAR ================= */}
      <div className="max-w-3xl mx-auto px-4 mb-16">
        <div className="bg-white/90 backdrop-blur-md border border-[#0F291E]/10 p-2 rounded-full shadow-lg shadow-[#0F291E]/5 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
          {CATEGORIZED_FAQS.map((cat) => {
            const Icon = cat.icon;
            const isTabActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                  isTabActive
                    ? "bg-[#0F291E] text-white shadow-sm"
                    : "text-[#0F291E] hover:bg-[#0F291E]/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isTabActive ? "text-[#34D399]" : "text-[#059669]"}`} />
                {cat.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= SINGLE ACTIVE SECTION DISPLAY ================= */}
      <div className="relative max-w-6xl mx-auto px-6 min-h-[500px]">
        
        {/* Subtle White Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 z-0"
          style={{
            backgroundImage: `radial-gradient(#0F291E 0.75px, transparent 0.75px)`,
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 95%)'
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 space-y-8"
          >
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0F291E]/15 pb-6 gap-4">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#059669] uppercase">
                  {activeSection.number} / {activeSection.tagline}
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold mt-1 text-[#0F291E] tracking-tight">
                  {activeSection.title}
                </h2>
              </div>
              <p className="text-sm text-[#0F291E]/70 max-w-xs font-light leading-relaxed md:text-right">
                {activeSection.subtitle}
              </p>
            </div>

            {/* 2-Column Interactive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Questions List */}
              <div className="lg:col-span-7 space-y-3">
                {activeSection.items.map((item, idx) => {
                  const isActive = activeQuestionIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectQuestion(activeSection.id, idx)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                        isActive
                          ? "bg-[#0F291E] text-white border-[#0F291E] shadow-md"
                          : "bg-white text-[#0F291E] border-[#0F291E]/10 hover:border-[#059669]/40 hover:bg-white/90"
                      }`}
                    >
                      <span className="font-semibold text-sm sm:text-base pr-2">
                        {item.question}
                      </span>
                      <span className="shrink-0">
                        {isActive ? (
                          <ChevronDown className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-[#059669]" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Key Insights Preview Card */}
              <div className="lg:col-span-5 bg-[#EFECE6]/80 backdrop-blur-sm p-8 rounded-3xl border border-[#0F291E]/10 min-h-[340px] flex flex-col justify-between sticky top-8 shadow-sm">
                <div className="space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#059669]">
                    Key Insights
                  </span>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeQuestionIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <h3 className="font-semibold text-lg text-[#0F291E] leading-snug">
                        {activeItem?.question}
                      </h3>
                      <p className="text-sm text-[#0F291E]/80 leading-relaxed font-light">
                        {activeItem?.answer}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Card Footer */}
                <div className="pt-6 border-t border-[#0F291E]/10 text-xs font-medium text-[#0F291E]/60 flex items-center justify-between">
                  <span>
                    Topic {activeQuestionIndex + 1} of {activeSection.items.length}
                  </span>
                  <Link 
                    href={activeSection.linkHref} 
                    className="text-[#059669] hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    {activeSection.linkText} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* ================= CTA SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-32">
        <div className="relative overflow-hidden bg-[#0F291E] text-white rounded-3xl p-10 sm:p-16 border border-[#0F291E]/20 shadow-xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#34D399]">
              Still Have Questions?
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Ready to begin your <span className="italic font-normal white/90">transformation</span> journey?
            </h2>
            <p className="text-white/80 font-light text-base sm:text-lg leading-relaxed">
              Book a personal 1-on-1 consultation to get custom answers tailored specifically to your goals and life path.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#059669] text-white font-semibold text-sm hover:bg-[#047857] transition-all duration-300 shadow-md"
              >
                Book Your Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}