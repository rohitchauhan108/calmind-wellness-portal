"use client"

import React from 'react'

export default function ServicesPage() {
  const coreServices = [
    {
      icon: '❤️',
      title: 'Relationship',
      description: 'Communication blocks, repeating emotional patterns, and boundary setting.',
    },
    {
      icon: '💼',
      title: 'Career',
      description: 'Direction, clarity in executive decision-making, confidence, and growth.',
    },
    {
      icon: '💰',
      title: 'Money',
      description: 'Subconscious abundance blocks, money habits, and recurring financial stress.',
    },
    {
      icon: '🌿',
      title: 'Health & Wellbeing',
      description: 'Somatic stress release, energetic balance, and restoring daily vitality.',
    },
    {
      icon: '⭐',
      title: 'Confidence',
      description: 'Unshakeable self-belief, silencing inner criticism, and personal expression.',
    },
    {
      icon: '🎯',
      title: 'Purpose',
      description: 'Deep soul alignment, personal fulfillment, and stepping into your next chapter.',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discover',
      description: 'We begin by understanding your unique challenges, goals, and current situation through a personalized consultation.',
    },
    {
      step: '2',
      title: 'Create Your Plan',
      description: "Based on your needs, we design a customized action plan with practical strategies and achievable milestones.",
    },
    {
      step: '3',
      title: 'Take Action',
      description: "Through coaching sessions, guidance, and continuous support, you'll implement positive habits and overcome limiting beliefs.",
    },
    {
      step: '4',
      title: 'Achieve Lasting Growth',
      description: "As you build confidence and consistency, you'll experience sustainable transformation across the areas of life that matter most.",
    },
  ];

  return (
    <div className="bg-brand-ivory text-brand-forest antialiased selection:bg-brand-copper/20 selection:text-brand-forest">
      
      {/* ================= SECTION 1 – OUR SERVICES (SPLIT HERO WITH ONLINE IMAGE) ================= */}
      <section className="relative overflow-hidden py-24 lg:py-36 px-6 lg:px-12 bg-gradient-to-b from-brand-forest/5 via-brand-ivory to-brand-ivory">
        {/* Abstract glowing background blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-copper/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-copper/10 border border-brand-copper/25 text-brand-copper text-xs font-semibold tracking-wider uppercase backdrop-blur-sm mx-auto lg:mx-0 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-copper animate-pulse" />
              Holistic Growth & Transformation Programs
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-forest leading-[1.08]">
              Personalized Solutions for <br className="hidden sm:inline" />
              <span className="text-brand-copper underline decoration-brand-forest underline-offset-8">Every Stage of Your Life</span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-brand-forest/90 font-medium">
              Whether you're facing personal challenges, seeking professional growth, or searching for greater purpose, our personalized coaching programs are designed to help you create lasting, positive change.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-brand-forest/75 font-light">
              We believe every individual has the potential to live a happier, healthier, and more fulfilling life through proven techniques, practical strategies, and compassionate guidance.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-copper text-white font-semibold shadow-xl shadow-brand-copper/25 hover:bg-brand-copper/90 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                Start Your Journey Today
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative background accent card */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-copper/20 to-brand-forest/10 blur-xl opacity-70" />
              
              <div className="relative rounded-3xl overflow-hidden border border-brand-forest/10 shadow-2xl bg-white aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80" 
                  alt="Personalized coaching and growth session" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient overlay to match aesthetic */}
                <div className="absolute inset-0 bg-brand-forest/10 mix-blend-multiply pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights Ticker / Pill Bar */}
        <div className="max-w-5xl mx-auto pt-16 mt-16 border-t border-brand-forest/10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-brand-forest/10 shadow-sm text-center">
              <span className="block text-2xl mb-1">🎯</span>
              <span className="text-xs sm:text-sm font-bold text-brand-forest">Tailored Action Plans</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-brand-forest/10 shadow-sm text-center">
              <span className="block text-2xl mb-1">💡</span>
              <span className="text-xs sm:text-sm font-bold text-brand-forest">Expert 1-on-1 Support</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-brand-forest/10 shadow-sm text-center">
              <span className="block text-2xl mb-1">🌱</span>
              <span className="text-xs sm:text-sm font-bold text-brand-forest">Sustainable Habits</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-brand-forest/10 shadow-sm text-center">
              <span className="block text-2xl mb-1">⭐</span>
              <span className="text-xs sm:text-sm font-bold text-brand-forest">Lasting Confidence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 – OUR CORE SERVICES ================= */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 bg-white border-t border-brand-forest/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4 text-center mx-auto">
            <div className="inline-block">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-copper">
                Our Core Services
              </h2>
              <div className="h-1 w-12 bg-brand-copper mt-2 mx-auto rounded-full" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-forest">
              Transform Every Area of Your Life
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div 
                key={index} 
                className="group relative p-8 sm:p-10 rounded-3xl bg-brand-ivory border border-brand-forest/10 shadow-sm hover:shadow-xl hover:border-brand-copper/40 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-copper/5 rounded-bl-full pointer-events-none group-hover:bg-brand-copper/10 transition-colors duration-300" />

                <div className="space-y-6 relative z-10 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-brand-forest/10 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-forest group-hover:text-brand-copper transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-brand-forest/75 text-base leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 – OUR PROCESS ================= */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 bg-brand-ivory border-t border-brand-forest/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-copper">
                Our Process
              </h2>
              <div className="h-1 w-12 bg-brand-copper mt-2 rounded-full" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-forest">
              How We Help You Transform
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div 
                key={index}
                className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-brand-copper/20 shadow-xl shadow-brand-forest/5 hover:border-brand-copper/40 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-copper/5 rounded-bl-full pointer-events-none group-hover:bg-brand-copper/10 transition-colors duration-300" />

                <div className="space-y-6 relative z-10 flex-1">
                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-black text-brand-copper/20 group-hover:text-brand-copper/40 transition-colors duration-300">
                      {item.step}.
                    </span>
                  </div>

                  <h4 className="text-xl font-bold tracking-tight text-brand-forest group-hover:text-brand-copper transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-brand-forest/75 text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 – READY TO BEGIN? (CTA) ================= */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 bg-white border-t border-brand-forest/5">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-brand-forest text-brand-ivory shadow-2xl overflow-hidden text-center space-y-8">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-copper/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-copper/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <div className="inline-block">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-copper">
                  Ready to Begin Your Journey?
                </h2>
                <div className="h-1 w-12 bg-brand-copper mt-2 mx-auto rounded-full" />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-snug">
                Your Transformation Starts Today
              </h3>

              <p className="text-base sm:text-lg text-brand-ivory/80 leading-relaxed font-light">
                Every meaningful change begins with a single step. Whether you want stronger relationships, career success, financial confidence, improved wellbeing, greater self-belief, or a clearer sense of purpose, we're here to guide and support you every step of the way.
              </p>
            </div>

            <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-copper text-white font-semibold shadow-xl shadow-brand-copper/25 hover:bg-brand-copper/90 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}