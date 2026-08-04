"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  Heart,
  HeartHandshake,
  HeartPulse,
  Sparkles,
  Wallet,
  BrainCircuit,
  Scale,
  ChevronRight,
} from "lucide-react";

const journeySteps = [
  {
    tag: "Our Foundation",
    title: "Helping People Break Invisible Barriers",
    text: [
      "Everyone wants a better relationship, a fulfilling career, financial freedom, vibrant health, lasting confidence, and a meaningful purpose. Yet many people remain trapped in repeating emotional patterns they cannot explain.",
      "At Ila Garg Transformation, we believe lasting change begins by understanding the subconscious mind. Instead of treating symptoms, we identify the hidden beliefs, emotional conditioning, and behavioral habits that silently shape everyday decisions.",
    ],
    highlight:
      "Our mission: Help people understand themselves, rewrite limiting patterns, and create a life they genuinely love.",
  },
];

const methodologies = [
  {
    name: "Life Coaching",
    description:
      "Gain clarity, direction, confidence, and actionable strategies for everyday challenges.",
    icon: Sparkles,
  },
  {
    name: "Recovery Frameworks",
    description:
      "Heal emotional wounds, release unhealthy coping patterns, and build healthier responses.",
    icon: HeartPulse,
  },
  {
    name: "Graphotherapy",
    description:
      "Scientifically structured handwriting exercises to reinforce positive behavioral habits and support subconscious reconditioning.",
    icon: BrainCircuit,
  },
];

const transformationAreas = [
  {
    icon: Heart,
    title: "Relationships",
    details:
      "Improve communication, strengthen emotional connection, and develop healthier boundaries.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career",
    details:
      "Gain clarity, overcome self-doubt, improve decision-making, and grow professionally.",
  },
  {
    icon: Wallet,
    title: "Money Mindset",
    details:
      "Identify subconscious beliefs around money and build healthier financial habits.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellbeing",
    details:
      "Reduce emotional stress, restore balance, and create sustainable wellness routines.",
  },
  {
    icon: Sparkles,
    title: "Confidence",
    details:
      "Develop self-belief, overcome fear, and express yourself with authenticity.",
  },
  {
    icon: Compass,
    title: "Purpose",
    details:
      "Reconnect with your values, discover meaningful direction, and live with greater intention.",
  },
];

const trustPillars = [
  {
    icon: HeartHandshake,
    title: "Personalized Guidance",
    text: "Every session is tailored precisely to your unique experiences, challenges, and goals.",
  },
  {
    icon: Scale,
    title: "Root Cause Focus",
    text: "We look beyond surface-level symptoms to uncover the deeper drivers of repeated struggles.",
  },
  {
    icon: HeartHandshake,
    title: "Confidential & Safe",
    text: "Your journey occurs within a secure, non-judgmental, and completely confidential container.",
  },
  {
    icon: Sparkles,
    title: "Long-Term Resilience",
    text: "Our goal is inner freedom and emotional resilience that lasts a lifetime, far beyond our sessions.",
  },
];

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-brand-forest/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-forest mb-6 border border-brand-forest/10">
    {children}
  </span>
);

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="text-brand-charcoal overflow-hidden">
      {/* Hero Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 text-center relative border-b border-brand-border/50 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <SectionTag>The Pathway Within</SectionTag>
          <h1 className="text-5xl md:text-7xl font-serif text-brand-forest leading-tight mb-6">
            Permanent change requires rewriting the inner script.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-brand-charcoal-muted max-w-2xl mx-auto">
            Discover the philosophy, methodology, and heart behind Ila Garg
            Transformation. We move beyond motivation to facilitate structural
            emotional and behavioral change.
          </p>
        </div>
      </section>

      {/* Philosophy Sub-section */}
      <section className="py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="space-y-4 pl-5 border-l-5 border-brand-copper/30">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-forest">
            Our Philosophy
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-brand-charcoal-muted">
            <span className="font-semibold text-brand-forest">
              True transformation happens when every area of your life thrives in
              harmony.
            </span>{" "}
            We believe that mastery over your money, career, health, and
            relationships begins with unlocking your deepest confidence and
            ultimate purpose.
          </p>
        </div>
      </section>

      {/* --- STORY & PHILOSOPHY SECTION --- */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 items-center relative">
          <div className="md:col-span-7 space-y-5">
            <SectionTag>{journeySteps[0].tag}</SectionTag>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-forest leading-tight">
              {journeySteps[0].title}
            </h2>
            {journeySteps[0].text.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed text-brand-charcoal-muted"
              >
                {p}
              </p>
            ))}
            <div className="bg-brand-forest/5 border-l-4 border-brand-copper p-6 rounded-r-2xl mt-6">
              <p className="text-brand-forest font-serif text-lg md:text-xl leading-snug">
                {journeySteps[0].highlight}
              </p>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-premium border-4 border-brand-warm-white">
              <img
                src="/about-bg.jpg"
                alt="Ila Garg Transformation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-copper/10 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY SECTION --- */}
      <section className="py-24 px-6 md:px-12 bg-brand-forest text-brand-ivory relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #E8E4DE 0px, #E8E4DE 2px, transparent 2px, transparent 10px)",
          }}
        />
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-copper rounded-full opacity-10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-ivory/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-copper-light mb-6 border border-brand-ivory/10">
              The Framework
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-ivory leading-tight mb-6">
              A Holistic Path to Deep Personal Growth
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-brand-ivory/80">
              No two people experience life the same way. That is why every
              transformation journey is personalized through our
              evidence-informed and reflective methods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-warm-white text-brand-charcoal p-8 rounded-[32px] border border-brand-border relative group overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-forest/[0.03] rounded-full group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-forest/10 text-brand-forest border border-brand-forest/20">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-5xl font-light text-brand-border/60 font-serif">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif text-brand-forest pt-2">
                      {method.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-charcoal-muted">
                      {method.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- AREAS OF TRANSFORMATION SECTION --- */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTag>Areas of Impact</SectionTag>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-forest leading-tight mb-4">
            Where Deep Transformation Takes Root
          </h2>
          <p className="text-base md:text-lg text-brand-charcoal-muted">
            Click through the core dimensions of your life to explore how our
            framework creates structural, lasting shifts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {transformationAreas.map((area, index) => {
            const Icon = area.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`group relative cursor-pointer p-8 rounded-[32px] border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? "bg-brand-forest text-brand-ivory border-brand-forest shadow-2xl scale-[1.02]"
                    : "bg-brand-warm-white text-brand-charcoal border-brand-border hover:border-brand-copper/40 hover:shadow-lg"
                }`}
              >
                <div
                  className={`absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-700 pointer-events-none ${
                    isActive
                      ? "bg-brand-copper/20"
                      : "bg-brand-copper/5 group-hover:bg-brand-copper/10"
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-500 ${
                        isActive
                          ? "bg-brand-ivory/10 text-brand-copper-light border border-brand-ivory/20"
                          : "bg-brand-forest/8 text-brand-forest border border-brand-forest/10 group-hover:bg-brand-forest group-hover:text-brand-ivory"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`text-xs font-mono tracking-[0.2em] uppercase font-bold transition-colors ${
                        isActive
                          ? "text-brand-copper-light"
                          : "text-brand-charcoal-muted/40"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl font-serif mb-3 transition-colors ${
                      isActive
                        ? "text-brand-ivory"
                        : "text-brand-forest group-hover:text-brand-copper"
                    }`}
                  >
                    {area.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed transition-colors ${
                      isActive
                        ? "text-brand-ivory/80"
                        : "text-brand-charcoal-muted"
                    }`}
                  >
                    {area.details}
                  </p>
                </div>

                <div
                  className={`relative z-10 pt-6 mt-8 border-t flex items-center justify-between text-xs font-semibold tracking-wider uppercase transition-colors ${
                    isActive
                      ? "border-brand-ivory/15 text-brand-copper-light"
                      : "border-brand-border/60 text-brand-forest"
                  }`}
                >
                  <span>{isActive ? "Active View" : "View Details"}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive
                        ? "translate-x-1 text-brand-copper-light"
                        : "group-hover:translate-x-1 text-brand-copper"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- WHY PEOPLE TRUST US SECTION --- */}
      <section className="bg-brand-warm-white py-24 px-6 md:px-12 border-y border-brand-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <SectionTag>Why People Trust Us</SectionTag>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-forest leading-tight mb-4">
              Guiding Transformation with Compassion, Clarity, and Commitment
            </h2>
            <p className="text-base md:text-lg text-brand-charcoal-muted max-w-2xl mx-auto">
              Choosing support for personal growth is a deeply personal
              decision. We provide a safe, non-judgmental space where you feel
              truly heard and empowered.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {trustPillars.map((trust, index) => {
              const Icon = trust.icon;
              return (
                <article
                  key={index}
                  className="bg-brand-ivory p-8 rounded-r-xl border border-brand-border space-y-4 text-left shadow-sm hover:border-brand-copper/30 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-forest/10 text-brand-forest mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-serif text-brand-forest mb-3">
                      {trust.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-charcoal-muted">
                      {trust.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CLOSING SECTION --- */}
      <section className="py-24 md:py-32 px-6 md:px-12 text-center relative">
        <div className="max-w-4xl mx-auto space-y-6">
          <SectionTag>Your Journey Begins Here</SectionTag>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-forest leading-tight">
            Transformation does not happen overnight—but every meaningful change
            begins with a single step.
          </h2>
          <p className="text-base md:text-lg text-brand-charcoal-muted max-w-2xl mx-auto leading-relaxed">
            Whether you are seeking healthier relationships, career clarity,
            emotional healing, greater confidence, or a stronger sense of
            purpose, we are here to support your journey.
          </p>
          <div className="pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-forest px-8 py-4 text-sm font-semibold text-brand-ivory transition-colors hover:bg-brand-forest-dark shadow-premium"
            >
              Book Your Session Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}