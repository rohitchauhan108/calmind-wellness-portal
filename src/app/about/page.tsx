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
    description:
      "Communication blocks, repeating emotional patterns, and boundary setting.",
    href: "/how-we-help#relationships",
  },
  {
    number: "02",
    title: "Career",
    description:
      "Direction, clarity in executive decision-making, confidence, and growth.",
    href: "/how-we-help#career",
  },
  {
    number: "03",
    title: "Money",
    description:
      "Subconscious abundance blocks, money habits, and recurring financial stress.",
    href: "/how-we-help#money",
  },
  {
    number: "04",
    title: "Health & Wellbeing",
    description:
      "Somatic stress release, energetic balance, and restoring daily vitality.",
    href: "/how-we-help#health",
  },
  {
    number: "05",
    title: "Confidence",
    description:
      "Unshakeable self-belief, silencing inner criticism, and personal expression.",
    href: "/how-we-help#confidence",
  },
  {
    number: "06",
    title: "Purpose",
    description:
      "Deep soul alignment, personal fulfillment, and stepping into your next chapter.",
    href: "/how-we-help#purpose",
  },
];

const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Personalized Guidance",
    description:
      "Every session is tailored precisely to your unique experiences, challenges, and goals.",
    icon: (
      <svg
        className="w-5 h-5 text-[#0D3B36]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
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
    description:
      "We look beyond surface-level symptoms to uncover the deeper drivers of repeated struggles.",
    icon: (
      <svg
        className="w-5 h-5 text-[#0D3B36]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
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
    description:
      "Your journey occurs within a secure, non-judgmental, and completely confidential container.",
    icon: (
      <svg
        className="w-5 h-5 text-[#0D3B36]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
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
    description:
      "Our goal is inner freedom and emotional resilience that lasts a lifetime, far beyond our sessions.",
    icon: (
      <svg
        className="w-5 h-5 text-[#0D3B36]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
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

export default function TransformationHero() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"story" | "mission">("story");

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
              Life&apos;s biggest challenges rarely exist in isolation.
              Difficult relationships, career uncertainty, financial stress, and
              low confidence influence one another. We help you identify root
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
                  src="/founder.jpeg"
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
      <section className="relative bg-[#FBF9F5] overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/30461817/pexels-photo-30461817.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-backdrop-blur-sm border border-[#0D3B36]/10 shadow-sm text-center space-y-4">
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

      {/* ================= STORY & MISSION TOGGLE SECTION ================= */}
      <section className="relative overflow-hidden bg-[#eef2ef] px-6 py-20 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(13,59,54,0.08),_transparent_34%)]" />
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#0D3B36]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-[32px] border border-[#0D3B36]/10 bg-[#f8f5f1]/90 p-4 shadow-[0_25px_70px_rgba(13,59,54,0.08)] backdrop-blur-sm">
            <div className="overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#0d3c38_0%,#0f4a44_40%,#163f3c_100%)] p-5 sm:p-7 lg:p-8">
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1.5 shadow-inner shadow-white/5">
                  <button
                    type="button"
                    onClick={() => setActiveTab("story")}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-7 ${
                      activeTab === "story"
                        ? "bg-white text-[#0D3B36] shadow-md"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    Our Story
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("mission")}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-7 ${
                      activeTab === "mission"
                        ? "bg-white text-[#0D3B36] shadow-md"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    Our Mission
                  </button>
                </div>
              </div>

              <div className="grid items-center gap-7 lg:grid-cols-[1.35fr_0.65fr]">
                <div className="relative min-h-[260px] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 sm:p-8 lg:p-10">
                  <div className="absolute -left-12 top-10 h-28 w-28 rounded-full bg-[#f7d7c8]/18 blur-2xl" />
                  <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-[#d6e5de]/12 blur-2xl" />

                  {activeTab === "story" ? (
                    <article key="story" className="relative animate-fade-in">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">
                        About Us
                      </div>
                      <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.8rem]">
                        Our Story
                      </h2>
                      <p className="max-w-[620px] text-base leading-relaxed text-white/80 sm:text-lg">
                        Everyone faces moments of uncertainty—whether it&apos;s struggling in relationships,
                        feeling stuck in a career, or dealing with financial stress. We created this
                        platform to provide practical guidance and personalized support to help transform
                        your life from the inside out.
                      </p>
                    </article>
                  ) : (
                    <article key="mission" className="relative animate-fade-in">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">
                        Purpose
                      </div>
                      <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.8rem]">
                        Our Mission
                      </h2>
                      <p className="max-w-[620px] text-base leading-relaxed text-white/80 sm:text-lg">
                        Our mission is to empower individuals with the knowledge, tools, and guidance they
                        need to overcome life&apos;s challenges and create lasting personal transformation.
                      </p>
                    </article>
                  )}
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
                      Guiding principle
                    </div>
                    <div className="text-2xl font-bold text-white">Clarity</div>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      We help people uncover what is really driving their patterns and what is possible
                      beyond them.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-[#f8f3ee] p-5 text-[#0D3B36] shadow-inner shadow-[#0D3B36]/5">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0D3B36]/55">
                      What we create
                    </div>
                    <div className="text-2xl font-bold">Confidence</div>
                    <p className="mt-2 text-sm leading-relaxed text-[#0D3B36]/75">
                      Practical support that changes how you think, feel, and move through everyday life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(12px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        `}</style>
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

    </main>
  );
}