"use client"

import React from 'react'
import { 
  FiHeart, 
  FiBriefcase, 
  FiDollarSign, 
  FiActivity, 
  FiAward, 
  FiCompass, 
  FiArrowRight, 
  FiCheck 
} from 'react-icons/fi'

export default function HowWeHelpPage() {
  const steps = [
    {
      number: '01',
      title: 'Understand Your Challenges',
      description: 'Every journey begins with listening. We take the time to understand your unique experiences, goals, and obstacles, allowing us to identify the areas that need the most attention and support.',
    },
    {
      number: '02',
      title: 'Create a Personalized Plan',
      description: 'No two people are the same. We develop a tailored action plan based on your individual needs, helping you focus on the right strategies for relationships, career, finances, wellbeing, confidence, or finding your purpose.',
    },
    {
      number: '03',
      title: 'Take Action with Expert Guidance',
      description: 'Through one-on-one coaching, practical exercises, and proven personal development techniques, we help you replace limiting beliefs with empowering habits and confident decision-making.',
    },
    {
      number: '04',
      title: 'Build Lasting Transformation',
      description: "Our goal isn't just short-term improvement—it's sustainable growth. We provide continuous support and accountability to help you maintain progress, overcome future challenges, and live with greater confidence, clarity, and purpose.",
    },
  ];

  const benefits = [
    {
      title: 'Tailored Guidance',
      desc: 'Personalized guidance designed entirely around your unique goals and everyday challenges.'
    },
    {
      title: 'Actionable Strategies',
      desc: 'Practical tools and framework mechanics you can immediately apply in your routine.'
    },
    {
      title: 'Holistic Development',
      desc: 'A comprehensive approach supporting emotional, mental, and personal growth concurrently.'
    },
    {
      title: 'Accountability & Support',
      desc: 'Ongoing encouragement to keep your momentum steady when obstacles appear.'
    },
    {
      title: 'Sustainable Growth',
      desc: 'Focused on long-term positive change and root-level shifts rather than temporary fixes.'
    },
  ];

  const coreFocusAreas = [
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: 'Relationships',
      description: 'Communication blocks, repeating emotional patterns, and boundary setting.',
    },
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: 'Career',
      description: 'Direction, clarity in executive decision-making, confidence, and growth.',
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: 'Money',
      description: 'Subconscious abundance blocks, money habits, and recurring financial stress.',
    },
    {
      icon: <FiActivity className="w-6 h-6" />,
      title: 'Health & wellbeing',
      description: 'Somatic stress release, energetic balance, and restoring daily vitality.',
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: 'Confidence',
      description: 'Unshakeable self-belief, silencing inner criticism, and personal expression.',
    },
    {
      icon: <FiCompass className="w-6 h-6" />,
      title: 'Purpose',
      description: 'Deep soul alignment, personal fulfillment, and stepping into your next chapter.',
    },
  ];

  return (
    <div className="bg-brand-ivory text-brand-forest antialiased selection:bg-brand-copper/20 selection:text-brand-forest overflow-x-hidden">
      
      {/* ================= HERO SECTION: ASYMMETRIC SPLIT LAYOUT ================= */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 px-6 lg:px-16 border-b border-brand-forest/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-copper/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-brand-forest/10 shadow-sm text-brand-copper text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-copper animate-ping" />
              Our Proven Methodology
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-brand-forest leading-[1.08]">
              Empowering Lasting Growth, <span className="text-brand-copper font-serif italic font-normal">One Intention</span> at a Time.
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-brand-forest/85 font-medium max-w-2xl">
              Real transformation doesn't happen overnight. We help you systematically navigate relationships, career, money, wellbeing, confidence, and purpose.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button className="px-8 py-4 rounded-2xl bg-brand-forest text-brand-ivory font-semibold shadow-xl shadow-brand-forest/10 hover:bg-brand-copper hover:shadow-brand-copper/25 transition-all duration-300">
                Start Your Journey
              </button>
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-brand-copper/30 border-2 border-brand-ivory flex items-center justify-center text-xs font-bold text-brand-forest">✦</div>
                  <div className="w-9 h-9 rounded-full bg-brand-forest/20 border-2 border-brand-ivory flex items-center justify-center text-xs font-bold text-brand-forest">★</div>
                  <div className="w-9 h-9 rounded-full bg-brand-copper/20 border-2 border-brand-ivory flex items-center justify-center text-xs font-bold text-brand-forest">●</div>
                </div>
                <div className="text-xs font-medium text-brand-forest/70">
                  <strong className="text-brand-forest block">100% Tailored</strong>
                  Dedicated 1-on-1 Framework
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-brand-forest/10 shadow-2xl shadow-brand-forest/5 space-y-6">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-copper/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-copper">The Framework</span>
                <h3 className="text-2xl font-extrabold text-brand-forest">Structured For Clarity</h3>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-ivory border border-brand-forest/5">
                  <span className="text-xl font-black text-brand-copper">01</span>
                  <div>
                    <h4 className="text-sm font-bold text-brand-forest">Deep Discovery</h4>
                    <p className="text-xs text-brand-forest/70">Uncovering root challenges and alignment blocks.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-ivory border border-brand-forest/5">
                  <span className="text-xl font-black text-brand-copper">02</span>
                  <div>
                    <h4 className="text-sm font-bold text-brand-forest">Strategic Mapping</h4>
                    <p className="text-xs text-brand-forest/70">Building your custom step-by-step roadmap.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-ivory border border-brand-forest/5">
                  <span className="text-xl font-black text-brand-copper">03</span>
                  <div>
                    <h4 className="text-sm font-bold text-brand-forest">Sustained Execution</h4>
                    <p className="text-xs text-brand-forest/70">Consistent reinforcement and accountability.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2 – THE 4-STEP PROCESS ================= */}
      <section className="py-24 lg:py-36 px-6 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-forest/10 pb-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-copper">Our Process</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-forest">
                Your Path to Lasting Transformation
              </h2>
            </div>
            <p className="text-brand-forest/75 text-base font-light max-w-sm">
              An intentional sequence designed to clear mental noise and instill sustainable habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div 
                key={index} 
                className="group relative p-8 rounded-3xl bg-brand-ivory border border-brand-forest/10 hover:bg-brand-forest hover:text-brand-ivory transition-all duration-500 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-widest text-brand-copper group-hover:text-brand-copper/90">
                      STEP {item.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-copper/40 group-hover:bg-brand-copper transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-brand-forest group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-brand-forest/75 group-hover:text-brand-ivory/80 text-sm leading-relaxed font-light transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION: CORE FOCUS AREAS (MODERN BENTO GRID) ================= */}
      <section className="py-24 lg:py-36 px-6 lg:px-16 bg-brand-ivory border-t border-brand-forest/10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-copper">Core Focus Areas</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-forest">
              Where We Can Help You Grow
            </h2>
            <p className="text-base text-brand-forest/75 font-light">
              Deep, holistic guidance across the essential pillars of personal mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFocusAreas.map((area, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-white border border-brand-forest/10 shadow-sm hover:shadow-xl hover:border-brand-copper/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-copper/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                
                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-ivory border border-brand-forest/10 flex items-center justify-center text-brand-copper shadow-inner group-hover:bg-brand-copper group-hover:text-white transition-colors duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-forest group-hover:text-brand-copper transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-brand-forest/75 text-sm leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 3 – WHY OUR APPROACH WORKS ================= */}
      <section className="py-24 lg:py-36 px-6 lg:px-16 bg-white border-t border-brand-forest/10">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-copper">Our Difference</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-forest">
              Why Our Approach Works
            </h2>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 sm:p-8 rounded-3xl bg-brand-ivory border border-brand-forest/10 hover:border-brand-copper/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-copper/10 text-brand-copper flex items-center justify-center shrink-0 group-hover:bg-brand-copper group-hover:text-white transition-colors duration-300">
                    <FiCheck className="w-5 h-5 font-bold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-forest">{benefit.title}</h3>
                    <p className="text-brand-forest/70 text-sm font-light mt-1">{benefit.desc}</p>
                  </div>
                </div>
                <div className="text-brand-copper font-mono text-xs font-bold tracking-widest uppercase self-start md:self-center opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                  Verified Result <FiArrowRight />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4 – IMMERSIVE DARK CTA ================= */}
      <section className="py-24 lg:py-36 px-6 lg:px-16 bg-brand-ivory">
        <div className="max-w-6xl mx-auto">
          <div className="relative p-10 sm:p-16 lg:p-20 rounded-3xl bg-brand-forest text-brand-ivory shadow-2xl overflow-hidden text-center space-y-8">
            
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-copper/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-copper/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-copper">Ready for Real Change?</span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Take the First Step Today
              </h2>
              <p className="text-base sm:text-lg text-brand-ivory/80 font-light leading-relaxed">
                Your transformation begins with a simple conversation. Let's work together to unlock your full potential.
              </p>
            </div>

            <div className="relative z-10 pt-4 flex items-center justify-center">
              <button className="px-10 py-5 rounded-2xl bg-brand-copper text-white font-bold shadow-xl shadow-brand-copper/25 hover:bg-brand-copper/90 transition-all duration-300 transform hover:-translate-y-1">
                Book Your Consultation
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}