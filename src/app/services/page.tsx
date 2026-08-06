'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  Heart,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Wallet,
  CheckCircle2,
} from 'lucide-react';

const impactAreas = [
  {
    icon: Heart,
    title: 'Relationships',
    tagline: 'Deepening Connection',
    text: 'Improve communication, emotional safety, and boundaries in a way that creates healthier, more secure connections.',
    accent: 'bg-rose-50 text-rose-700 border-rose-100',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Career',
    tagline: 'Direction & Momentum',
    text: 'Find clarity in decisions, strengthen confidence, and grow with a deeper sense of personal professional direction.',
    accent: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    icon: Wallet,
    title: 'Money',
    tagline: 'Abundance & Ease',
    text: 'Address subconscious money blocks and improve financial mindset, choices, and emotional ease around abundance.',
    accent: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    icon: HeartPulse,
    title: 'Health & Wellbeing',
    tagline: 'Somatic Resilience',
    text: 'Support the body and nervous system through stress release, emotional grounding, and sustainable daily routines.',
    accent: 'bg-teal-50 text-teal-700 border-teal-100',
  },
  {
    icon: Sparkles,
    title: 'Confidence',
    tagline: 'Radical Self-Trust',
    text: 'Move beyond self-doubt into self-trust, authentic personal expression, and an unshakable sense of self-belief.',
    accent: 'bg-purple-50 text-purple-700 border-purple-100',
  },
  {
    icon: Compass,
    title: 'Purpose',
    tagline: 'Meaningful Evolution',
    text: 'Reconnect with your deeper sense of meaning, fulfillment, and the next aligned chapter of your life journey.',
    accent: 'bg-blue-50 text-blue-700 border-blue-100',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'The Root Assessment',
    description: 'We dig past surface-level symptoms to isolate the core subconscious patterns guiding your current experience.',
  },
  {
    number: '02',
    title: 'The Shift Framework',
    description: 'A tailored blend of emotional processing, behavioral tools, and nervous system alignment strategies.',
  },
  {
    number: '03',
    title: 'Integration & Action',
    description: 'Translating deep inner breakthroughs into consistent, grounded habits that hold up in real-world environments.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-ivory text-brand-charcoal selection:bg-brand-forest/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-brand-border/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(30,58,43,0.08),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(194,94,56,0.08),_transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-forest/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-brand-forest border border-brand-forest/10">
                <Sparkles className="h-3.5 w-3.5 text-brand-copper" />
                Tailored Services
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-forest leading-[1.15]">
                Personalized transformation pathways for real life change.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-brand-charcoal-muted max-w-2xl font-light">
                Whether navigating emotional overwhelm, career crossroads, money blocks, or relationship friction, our offerings uncover root patterns to ignite meaningful shifts.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-forest px-8 py-4 text-sm font-semibold text-brand-ivory transition-all hover:bg-brand-forest-dark shadow-sm hover:shadow"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-3 px-4 py-2">
                  <div className="flex -space-x-2">
                    <span className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-ivory bg-brand-forest/20 text-brand-forest flex items-center justify-center text-xs font-bold">✓</span>
                    <span className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-ivory bg-brand-copper/20 text-brand-copper flex items-center justify-center text-xs font-bold">✓</span>
                  </div>
                  <span className="text-xs font-medium text-brand-charcoal-muted">1-on-1 Personalized Coaching Pathways</span>
                </div>
              </div>
            </div>

            {/* Floating Visual Summary Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] bg-brand-warm-white border border-brand-border p-8 shadow-xl shadow-brand-forest/5">
                <div className="absolute -top-4 -right-4 bg-brand-copper text-white text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded-full shadow-sm">
                  Holistic Approach
                </div>
                <h3 className="font-serif text-2xl text-brand-forest mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    'Deep dive intake session to map out blocks',
                    'Custom tailored pathway matching your goals',
                    'Actionable integration work between sessions',
                    'Direct, compassionate accountability'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-brand-charcoal-muted">
                      <CheckCircle2 className="h-5 w-5 text-brand-forest shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Grid Section */}
      <section className="bg-brand-warm-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-copper">
              Impact Areas
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-forest">
              The deeper dimensions we help you transform
            </h2>
            <p className="text-brand-charcoal-muted text-base">
              Targeted growth tracks engineered to meet you right where you feel stuck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {impactAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="group relative rounded-[28px] border border-brand-border bg-brand-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-forest/20 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-forest/5 text-brand-forest group-hover:bg-brand-forest group-hover:text-brand-ivory transition-colors duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-copper bg-brand-copper/10 px-3 py-1 rounded-full">
                        {area.tagline}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif text-brand-forest mb-3">{area.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-charcoal-muted font-light">{area.text}</p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between text-xs font-medium text-brand-forest">
                    <span>Explore pathway</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-brand-copper">
                How It Works
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-forest">
                A structured, supportive system for lasting clarity.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-base md:text-lg leading-relaxed text-brand-charcoal-muted font-light">
                Our service model is built to make transformation feel both safe and practical. Rather than offering surface-level motivation, we work through the subconscious layers where real change anchors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-[28px] border border-brand-border bg-brand-warm-white p-8 relative overflow-hidden group">
                <span className="text-5xl font-serif text-brand-forest/10 font-bold absolute top-6 right-6 group-hover:text-brand-copper/20 transition-colors">
                  {step.number}
                </span>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-forest/8 text-brand-forest">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif text-brand-forest mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-brand-charcoal-muted font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-brand-warm-white py-20 border-t border-brand-border/60">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.24em] text-brand-copper">
            Take the First Step
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-forest leading-tight">
            Ready to begin your inner shift?
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-brand-charcoal-muted max-w-2xl mx-auto font-light">
            Your next chapter starts with one honest conversation. Book your introductory session and let’s design your tailored growth trajectory.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-forest px-9 py-4 text-sm font-semibold text-brand-ivory transition-all hover:bg-brand-forest-dark shadow-lg shadow-brand-forest/10"
            >
              Book a Session Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}