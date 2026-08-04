'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  Compass,
  Heart,
  HeartHandshake,
  HeartPulse,
  PenTool,
  ShieldCheck,
  Sparkles,
  Sun,
  Wallet,
} from 'lucide-react';

const serviceCards = [
  {
    icon: Compass,
    title: 'Life Coaching',
    subtitle: 'Clarity & Growth',
    description:
      'A personalized coaching experience that helps you unlock direction, dissolve internal resistance, and build practical momentum in your most important life areas.',
    outcomes: [
      'Discover your next meaningful chapter',
      'Develop empowering decision-making and action',
      'Overcome mental loops and repetitive emotional patterns',
    ],
    image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Sun,
    title: 'Energy Healing',
    subtitle: 'Emotional Release',
    description:
      'A supportive healing pathway designed to release stored emotional pressure, restore inner balance, and create space for breath, clarity, and calm.',
    outcomes: [
      'Release stress, heaviness, and emotional stagnation',
      'Restore energetic alignment and present-moment peace',
      'Create a more steady and grounded emotional baseline',
    ],
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: PenTool,
    title: 'Graphotherapy',
    subtitle: 'Habit Rewiring',
    description:
      'A structured handwriting-based approach to uncover subconscious tendencies and reinforce healthy behavioral shifts through targeted exercises.',
    outcomes: [
      'Understand subconscious patterns through handwriting',
      'Rewire self-limiting habits and emotional responses',
      'Build deeper focus, consistency, and self-awareness',
    ],
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: HeartHandshake,
    title: 'Integrated Root Cause Consultation',
    subtitle: 'Signature Deep-Dive',
    description:
      'A comprehensive diagnostic pathway combining the power of coaching, emotional release, and graphotherapy to treat the root cause rather than only the symptoms.',
    outcomes: [
      'Uncover the deeper drivers behind recurring life patterns',
      'Develop a custom transformation roadmap',
      'Experience a more holistic and sustainable path forward',
    ],
    image:
      'https://images.pexels.com/photos/1054251/pexels-photo-1054251.jpeg',
  },
];

const impactAreas = [
  {
    icon: Heart,
    title: 'Relationships',
    text: 'Improve communication, emotional safety, and boundaries in a way that creates healthier, more secure connection.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Career',
    text: 'Find clarity in decisions, strengthen confidence, and grow with a deeper sense of personal direction.',
  },
  {
    icon: Wallet,
    title: 'Money',
    text: 'Address subconscious money blocks and improve financial mindset, choices, and emotional ease around abundance.',
  },
  {
    icon: HeartPulse,
    title: 'Health & wellbeing',
    text: 'Support the body and nervous system through stress release, emotional grounding, and sustainable routines.',
  },
  {
    icon: Sparkles,
    title: 'Confidence',
    text: 'Move beyond self-doubt into self-trust, personal expression, and an unshakable sense of self-belief.',
  },
  {
    icon: Compass,
    title: 'Purpose',
    text: 'Reconnect with your deeper sense of meaning, fulfillment, and the next aligned chapter of your life.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-ivory text-brand-charcoal">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(30,58,43,0.10),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(194,94,56,0.10),_transparent_32%)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-forest/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-forest border border-brand-forest/10">
              <Sparkles className="h-3.5 w-3.5" />
              Services
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-forest leading-tight">
              Personalized transformation pathways for real life change.
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-brand-charcoal-muted max-w-3xl mx-auto">
              Whether you are navigating emotional overwhelm, career confusion, money stress, relationship friction, or a deeper longing for purpose, our services are designed to uncover the root pattern and support a meaningful shift.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-[28px] border border-brand-border bg-brand-warm-white shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-premium"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/35 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-ivory/90 text-brand-forest shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="space-y-4 p-6">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-copper">
                        {service.subtitle}
                      </p>
                      <h2 className="mt-2 text-2xl font-serif text-brand-forest">{service.title}</h2>
                    </div>
                    <p className="text-sm leading-relaxed text-brand-charcoal-muted">{service.description}</p>
                    <ul className="space-y-2.5">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2 text-sm text-brand-charcoal-muted">
                          <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-forest/10 text-brand-forest">
                            <Sparkles className="h-2.5 w-2.5" />
                          </span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-warm-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-copper">
              Impact areas
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-forest">
              The deeper dimensions we help you transform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {impactAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="rounded-[24px] border border-brand-border bg-brand-ivory p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-forest/8 text-brand-forest">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-serif text-brand-forest mb-2">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-charcoal-muted">{area.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-copper">
                Why it works
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-forest">
                A structured, supportive system for lasting clarity.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-brand-charcoal-muted">
                Our service model is built to make transformation feel both safe and practical. Rather than offering surface-level inspiration, we work through the subconscious, emotional, and behavioral layers where real change tends to begin.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-[24px] border border-brand-border bg-brand-warm-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-forest/8 text-brand-forest">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-serif text-brand-forest mb-2">Root-cause centered</h3>
                <p className="text-sm leading-relaxed text-brand-charcoal-muted">
                  We evaluate the inner pattern, not just the symptoms, so your progress remains deep and sustainable.
                </p>
              </div>

              <div className="rounded-[24px] border border-brand-border bg-brand-warm-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-copper/10 text-brand-copper">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-serif text-brand-forest mb-2">Warm, guided support</h3>
                <p className="text-sm leading-relaxed text-brand-charcoal-muted">
                  Every session is designed with empathy, professionalism, and a firm belief in your ability to change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-warm-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-forest leading-tight mb-4">
            Ready to begin the shift?
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-brand-charcoal-muted max-w-2xl mx-auto mb-8">
            Your next chapter starts with one honest conversation. Book a session and let’s create a practical pathway toward the life you want to live.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-forest px-7 py-3.5 text-sm font-semibold text-brand-ivory transition-colors hover:bg-brand-forest-dark"
          >
            Book a session
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
