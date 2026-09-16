"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Star } from "lucide-react";

const clarityCall = "https://calendly.com/ilagarg-official/clarity-call-with-ila";

type Program = {
  number: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  price: string;
  action: string;
  href: string;
  image: string;
  tags: string[];
};

const programs: Program[] = [
  {
    number: "01",
    badge: "DAILY FREQUENCY RISE",
    title: "Raise Your Frequency",
    tagline: "A Daily Practice to Set Intention for Your Day and Create Magic",
    description: "A few minutes for yourself can change how you show up for the rest of your day. Raise Your Frequency is a simple live practice designed to help you pause, reset and consciously shift your energy.",
    features: ["Intention Alignment", "Affirmations", "Frequency-Raising Practices", "LIVE ON ZOOM · 15–20 minutes · 6 days a week"],
    price: "$20/month",
    action: "JOIN RAISE YOUR FREQUENCY",
    href: "/experience-it-free#raise-frequency",
    image: "/program/frequency.webp",
    tags: ["DAILY PRACTICE", "LIVE ON ZOOM"],
  },
  {
    number: "02",
    badge: "ENERGY ALIGNMENT",
    title: "Activation & Balancing Chakra Daily",
    tagline: "Energy Alignment",
    description: "Ground. Activate. Align. Balance. Energy Alignment is a deeper live practice designed to help you slow down, reconnect with yourself and bring greater balance to your energy. Sessions combine grounding and breathwork with chakra meditation, activation, alignment and balancing. Selected sessions may also incorporate visualization or Reiki.",
    features: ["Grounding · Breathwork · Chakra Meditation", "Chakra Activation · Alignment · Balancing", "Visualization or Reiki on selected days", "LIVE ON ZOOM · 30–40 minutes · 4 days a week"],
    price: "$20/month",
    action: "JOIN ENERGY ALIGNMENT",
    href: "/experience-it-free#chakra-balancing",
    image: "/program/chakra.webp",
    tags: ["CHAKRA", "BALANCING"],
  },
  {
    number: "03",
    badge: "FIT & FREE",
    title: "Fit & Free",
    tagline: "6-Week Weight Loss Transformation Program",
    description: "What if the missing piece isn’t another diet or exercise plan? Fit & Free explores the emotional, behavioural and subconscious patterns that may be affecting your relationship with food, your body and weight.",
    features: ["Emotional Eating & Cravings", "Patterns & Habits", "The Subconscious & Weight", "Your Relationship With Your Body", "Creating New Patterns · Integration", "LIVE ONLINE · 1 session per week · 6 weeks"],
    price: "$200/month",
    action: "EXPLORE FIT & FREE",
    href: "/experience-it-free#fit-free",
    image: "/program/fit-&-free-program.webp",
    tags: ["WEIGHT LOSS", "TRANSFORMATION"],
  },
  {
    number: "04",
    badge: "MONEY & ABUNDANCE",
    title: "Money & Abundance",
    tagline: "3-Month Transformation Program",
    description: "Change your relationship with money from the inside out. Over three months, we explore the emotional and subconscious patterns influencing your relationship with money and create space for a healthier, more expansive way of relating to abundance.",
    features: ["Scarcity & Abundance", "Receiving & Worthiness", "Fear & Security", "Inherited Money Beliefs", "Your Relationship With Money", "LIVE ONLINE · 1 session per week · 3 months"],
    price: "$300/month",
    action: "EXPLORE MONEY & ABUNDANCE",
    href: "/experience-it-free#money-abundance",
    image: "/program/money.webp",
    tags: ["ABUNDANCE", "TRANSFORMATION"],
  },
  {
    number: "05",
    badge: "RELATIONSHIPS",
    title: "Relationships",
    tagline: "3-Month Transformation Program",
    description: "The patterns we carry within us often show up most clearly in our relationships. This three-month journey gives you space to look beneath those patterns, work through what you may still be carrying and begin creating healthier ways of relating — both to others and to yourself.",
    features: ["Repeating Relationship Patterns", "Hurt, Anger & Resentment", "Fear of Rejection & Abandonment", "Boundaries & Expectations", "Self-Love & Worthiness", "Creating Healthier Patterns", "LIVE ONLINE · 1 session per week · 3 months"],
    price: "$300/month",
    action: "EXPLORE RELATIONSHIPS",
    href: "/experience-it-free#clarity-call",
    image: "/program/relationships.webp",
    tags: ["CONNECTION", "TRANSFORMATION"],
  },
  {
    number: "06",
    badge: "PRIVATE COACHING",
    title: "Coaching & Healing",
    tagline: "Because sometimes the work needs to be as individual as you are",
    description: "A personalized journey built around you, your goals, your experiences, your patterns and the change you want to create. There is no fixed curriculum; our work evolves based on what comes up and what you need.",
    features: ["You want deeper, personalized support", "You’re navigating more than one area of your life", "You keep noticing patterns you’re ready to understand and change", "Private · Personalized · 1:1"],
    price: "By conversation",
    action: "BOOK A CLARITY CALL",
    href: "/experience-it-free#clarity-call",
    image: "/program/coaching-&-healing.webp",
    tags: ["VIP", "1-ON-1"],
  },
];

export default function ProgramsPage() {
  return (
    <main className="theme-page min-h-screen bg-[#FAF8F5] text-[#0D3C38] antialiased selection:bg-[#0D3C38]/10">
      <section className="relative overflow-hidden border-b border-[#0D3C38]/10 px-6 pb-16 pt-24 lg:px-16 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute right-1/4 top-0 h-125 w-125 rounded-full bg-[#0D3C38]/5 blur-[140px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13,60,56,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(13,60,56,0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6B055]/30 bg-[#E6B055]/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-[#C48F3A]" />
            <span>PROGRAMS</span>
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.15] sm:text-5xl lg:text-6xl">
            Choose the support that <br className="hidden sm:inline" />
            <span className="font-normal italic relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#E6B055] to-[#C48F3A]">meets you where you are</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#0D3C38]/75 sm:text-lg">
            Change doesn’t always require doing more. Sometimes, it begins by understanding and shifting what’s happening within. Choose the experience that feels right for you.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-24 lg:space-y-36">
          {programs.map((program, index) => {
            const reversed = index % 2 !== 0;
            return (
              <article
                key={program.number}
                id={program.number === "03" ? "health" : program.number === "04" ? "money" : program.number === "05" ? "relationships" : undefined}
                className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                {program.number === "06" && <span id="self" className="absolute -top-24" aria-hidden="true" />}
                <div className={`space-y-6 lg:col-span-6 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#0D3C38]/60">
                    <span className="text-sm font-bold text-[#0D3C38]">{program.number}</span>
                    <span>—</span>
                    <span>{program.tags.join(" • ")}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#C48F3A]">{program.badge}</p>
                    <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{program.title}</h2>
                    <p className="pt-1 text-xs font-semibold uppercase tracking-wider text-[#0D3C38]/70 sm:text-sm">{program.tagline}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[#0D3C38]/80 sm:text-base">{program.description}</p>
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D3C38]/60">WHAT WE’LL EXPLORE</h3>
                    <ul className="grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs font-medium leading-snug text-[#0D3C38]/85 sm:text-sm">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[#0D3C38]/10 pt-6">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#0D3C38]/60">Investment</div>
                      <div className="mt-0.5 text-3xl font-medium sm:text-4xl">{program.price}</div>
                    </div>
                    <Link href={program.href} className="group inline-flex items-center gap-2 bg-[#0D3C38] px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-[#0D3C38]/90">
                      {program.action}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
                <div
                  className={`relative lg:col-span-6 ${reversed ? "lg:order-1" : "lg:order-2"}`}
                  id={program.number === "06" ? "career" : undefined}
                >
                  <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-white shadow-2xl">
                    <Image src={program.image} alt={program.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0D3C38]/30 via-transparent to-transparent" />
                    {/* <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold shadow-md">
                      <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                      <span>{program.number === "06" ? "Personalized" : program.number === "01" ? "Daily" : "Live"}</span>
                    </div> */}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="palette-anchor palette-gold-anchor px-6 py-20 text-[#E6B055] lg:px-16">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E6B055]/80">NOT SURE WHERE TO BEGIN?</span>
          <h2 className="text-3xl font-semibold leading-tight text-[#E6B055] sm:text-4xl lg:text-5xl">You don’t need to have it all figured out before reaching out.</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#FFF1C9]/80 sm:text-base">If you’re unsure which program is right for you, let’s have a conversation and explore what would best support you right now.</p>
          <a href={clarityCall} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-xl bg-[#E6B055] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#0D3C38] transition-colors hover:bg-[#F7E2AC]">
            Book a Clarity Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
}
