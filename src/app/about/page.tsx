"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Category {
  number: string;
  title: string;
  description: string;
  href: string;
}

interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FaqItem {
  question: string;
  answer: string;
}

const CATEGORIES: Category[] = [
  {
    number: "01",
    title: "Relationships",
    description: "Communication blocks, repeating emotional patterns, and boundary setting.",
    href: "/how-we-help#relationships",
  },
  {
    number: "02",
    title: "Career",
    description: "Direction, clarity in executive decision-making, confidence, and growth.",
    href: "/how-we-help#career",
  },
  {
    number: "03",
    title: "Money",
    description: "Subconscious abundance blocks, money habits, and recurring financial stress.",
    href: "/how-we-help#money",
  },
  {
    number: "04",
    title: "Health & Wellbeing",
    description: "Somatic stress release, energetic balance, and restoring daily vitality.",
    href: "/how-we-help#health",
  },
  {
    number: "05",
    title: "Confidence",
    description: "Unshakeable self-belief, silencing inner criticism, and personal expression.",
    href: "/how-we-help#confidence",
  },
  {
    number: "06",
    title: "Purpose",
    description: "Deep soul alignment, personal fulfillment, and stepping into your next chapter.",
    href: "/how-we-help#purpose",
  },
];

const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Personalized Guidance",
    description: "Every session is tailored precisely to your unique experiences, challenges, and goals.",
    icon: (
      <svg className="w-5 h-5 text-[#0D3B36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Root Cause Focus",
    description: "We look beyond surface-level symptoms to uncover the deeper drivers of repeated struggles.",
    icon: (
      <svg className="w-5 h-5 text-[#0D3B36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
  {
    title: "Confidential & Safe",
    description: "Your journey occurs within a secure, non-judgmental, and completely confidential container.",
    icon: (
      <svg className="w-5 h-5 text-[#0D3B36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Long-Term Resilience",
    description: "Our goal is inner freedom and emotional resilience that lasts a lifetime, far beyond our sessions.",
    icon: (
      <svg className="w-5 h-5 text-[#0D3B36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

const FAQS: FaqItem[] = [
  {
    question: "Who can benefit from your coaching and guidance?",
    answer:
      "Whether you're facing challenges in your relationships, career, finances, confidence, health, or searching for greater purpose, our services are designed to help individuals at every stage of life. We provide personalized support to help you overcome obstacles and achieve meaningful, lasting growth.",
  },
  {
    question: "How do I know which area I should focus on first?",
    answer:
      "Many life challenges are interconnected. During your initial consultation, we'll help identify the root causes of your concerns and recommend a personalized path that addresses your most important priorities first, creating a strong foundation for long-term transformation.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Everyone's journey is unique. Some people notice positive changes within a few weeks by consistently applying the guidance provided, while deeper personal transformation may take several months. Your commitment and consistency play a key role in achieving lasting results.",
  },
  {
    question: "Are my sessions and personal information confidential?",
    answer:
      "Absolutely. Your privacy is our priority. Everything you share with us is treated with the highest level of confidentiality, creating a safe and supportive environment where you can openly discuss your challenges and goals.",
  },
  {
    question: "Do you offer online coaching and personalized support?",
    answer:
      "Yes. We offer online coaching sessions that allow you to receive guidance from anywhere. Each session is tailored to your unique needs, ensuring you receive practical strategies, actionable advice, and ongoing support throughout your personal growth journey.",
  },
];

export default function TransformationHero() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-[#FBF9F5] text-[#0D3B36] antialiased selection:bg-[#0D3B36]/10 selection:text-[#0D3B36] font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden py-20 lg:py-28 px-6 lg:px-12 bg-[#F2F5F3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D3B36]/5 border border-[#0D3B36]/15 text-[#0D3B36] text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D3B36]" />
              Meet Ila Garg
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D3B36] leading-[1.15]">
              Understand your mind. <br />
              <span className="font-serif italic font-normal text-[#0D3B36]/90">
                Break limiting patterns. Reclaim your life.
              </span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#0D3B36]/75 max-w-2xl font-normal">
              Life&apos;s biggest challenges rarely exist in isolation. Difficult
              relationships, career uncertainty, financial stress, and low
              confidence influence one another. We help you identify root
              causes, overcome limiting patterns, and create lasting positive
              change.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0D3B36] text-white font-medium shadow-md hover:bg-[#072723] transition-all duration-300 gap-2"
              >
                Begin Your Journey &rarr;
              </Link>
              <Link
                href="/how-we-help"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#0D3B36]/20 text-[#0D3B36] font-medium hover:bg-[#0D3B36]/5 transition-all duration-300"
              >
                Discover How We Help
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white aspect-[4/5] border border-[#0D3B36]/10">
                <Image
                  src="/about-bg.jpg"
                  alt="Holistic personal transformation and growth with Ila Garg"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY SECTION ================= */}
      <section className="relative py-20 lg:py-24 px-6 lg:px-12 bg-[#FBF9F5]">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#0D3B36]/10 shadow-sm text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D3B36]/5 text-[#0D3B36] text-xs font-semibold tracking-wider uppercase">
              Our Philosophy
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0D3B36] leading-snug">
              True transformation happens when every area of your life thrives
              in harmony.
            </h3>

            <p className="text-base sm:text-lg text-[#0D3B36]/75 leading-relaxed font-normal max-w-2xl mx-auto">
              We believe that mastery over your money, career, health, and
              relationships begins with unlocking your deepest confidence and
              ultimate purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STORY & MISSION SECTION ================= */}
      <section className="relative py-20 px-6 lg:px-12 bg-[#F2F5F3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <article className="p-8 sm:p-10 rounded-3xl bg-white border border-[#0D3B36]/10 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3B36]/60">About Us</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D3B36]">
                Our Story
              </h2>
              <p className="text-base text-[#0D3B36]/75 leading-relaxed">
                Everyone faces moments of uncertainty—whether it&apos;s struggling in
                relationships, feeling stuck in a career, or dealing with financial
                stress. We created this platform to provide practical guidance and
                personalized support to help transform your life from the inside out.
              </p>
            </div>
          </article>

          <article className="p-8 sm:p-10 rounded-3xl bg-[#0D3B36] text-white shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Purpose</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Our Mission
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Our mission is to empower individuals with the knowledge, tools,
                and guidance they need to overcome life&apos;s challenges and create
                lasting personal transformation.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ================= AREAS WE HELP ================= */}
      <section className="relative py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D3B36]/70">
              Start With What Matters To You
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D3B36]">
              What would you like support with?
            </h3>
            <p className="text-base text-[#0D3B36]/70">
              You do not need to know which service you need. Start with the
              area of life you want to improve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.number}
                href={cat.href}
                className="group p-8 rounded-2xl bg-[#F2F5F3] border border-[#0D3B36]/10 hover:border-[#0D3B36]/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-xs font-bold tracking-widest text-[#0D3B36]/50 font-mono">
                    {cat.number}
                  </span>

                  <h4 className="text-xl font-bold text-[#0D3B36]">
                    {cat.title}
                  </h4>

                  <p className="text-[#0D3B36]/70 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#0D3B36]/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#0D3B36]">
                  <span>Explore Area</span>
                  <span>&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative py-24 px-6 lg:px-12 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D3B36]/70">
              Why Choose Us
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D3B36]">
              Built for depth, safety, and lasting results
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-[#0D3B36]/10 shadow-sm space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0D3B36]/5 flex items-center justify-center">
                  {item.icon}
                </div>

                <h4 className="text-lg font-bold text-[#0D3B36]">
                  {item.title}
                </h4>

                <p className="text-[#0D3B36]/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS SECTION ================= */}
      <section className="relative py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D3B36]/70">
              Got Questions?
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D3B36]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#F2F5F3] border border-[#0D3B36]/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-[#0D3B36] text-base sm:text-lg"
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl">{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-[#0D3B36]/75 leading-relaxed border-t border-[#0D3B36]/10 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}