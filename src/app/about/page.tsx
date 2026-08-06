"use client"

import React, { useState } from 'react'

export default function TransformationHero() {
  const categories = [
    {
      number: '01',
      title: 'Relationships',
      description: 'Communication blocks, repeating emotional patterns, and boundary setting.',
    },
    {
      number: '02',
      title: 'Career',
      description: 'Direction, clarity in executive decision-making, confidence, and growth.',
    },
    {
      number: '03',
      title: 'Money',
      description: 'Subconscious abundance blocks, money habits, and recurring financial stress.',
    },
    {
      number: '04',
      title: 'Health & wellbeing',
      description: 'Somatic stress release, energetic balance, and restoring daily vitality.',
    },
    {
      number: '05',
      title: 'Confidence',
      description: 'Unshakeable self-belief, silencing inner criticism, and personal expression.',
    },
    {
      number: '06',
      title: 'Purpose',
      description: 'Deep soul alignment, personal fulfillment, and stepping into your next chapter.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Personalized Guidance',
      description: 'Every session is tailored precisely to your unique experiences, challenges, and goals.',
      icon: (
        <svg className="w-5 h-5 text-brand-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Root Cause Focus',
      description: 'We look beyond surface-level symptoms to uncover the deeper drivers of repeated struggles.',
      icon: (
        <svg className="w-5 h-5 text-brand-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      title: 'Confidential & Safe',
      description: 'Your journey occurs within a secure, non-judgmental, and completely confidential container.',
      icon: (
        <svg className="w-5 h-5 text-brand-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Long-Term Resilience',
      description: 'Our goal is inner freedom and emotional resilience that lasts a lifetime, far beyond our sessions.',
      icon: (
        <svg className="w-5 h-5 text-brand-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: 'Who can benefit from your coaching and guidance?',
      answer: "Whether you're facing challenges in your relationships, career, finances, confidence, health, or searching for greater purpose, our services are designed to help individuals at every stage of life. We provide personalized support to help you overcome obstacles and achieve meaningful, lasting growth."
    },
    {
      question: 'How do I know which area I should focus on first?',
      answer: "Many life challenges are interconnected. During your initial consultation, we'll help identify the root causes of your concerns and recommend a personalized path that addresses your most important priorities first, creating a strong foundation for long-term transformation."
    },
    {
      question: 'How long does it take to see results?',
      answer: "Everyone's journey is unique. Some people notice positive changes within a few weeks by consistently applying the guidance provided, while deeper personal transformation may take several months. Your commitment and consistency play a key role in achieving lasting results."
    },
    {
      question: 'Are my sessions and personal information confidential?',
      answer: "Absolutely. Your privacy is our priority. Everything you share with us is treated with the highest level of confidentiality, creating a safe and supportive environment where you can openly discuss your challenges and goals."
    },
    {
      question: 'Do you offer online coaching and personalized support?',
      answer: "Yes. We offer online coaching sessions that allow you to receive guidance from anywhere. Each session is tailored to your unique needs, ensuring you receive practical strategies, actionable advice, and ongoing support throughout your personal growth journey."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-brand-ivory text-brand-forest antialiased selection:bg-brand-copper/20 selection:text-brand-forest">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden py-24 lg:py-36 px-6 lg:px-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-copper/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-copper/10 border border-brand-copper/25 text-brand-copper text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-copper animate-pulse" />
              Meet Ila Garg
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-forest leading-[1.1]">
              Unlock Your <span className="text-brand-copper underline decoration-brand-forest underline-offset-8">True Potential</span>
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-brand-forest/80 font-normal">
              Life's biggest challenges rarely exist in isolation. Difficult relationships, career uncertainty, financial stress, and low confidence influence one another. We help you identify root causes, overcome limiting patterns, and create lasting positive change through proven personal development strategies.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button className="px-8 py-4 rounded-xl bg-brand-copper text-white font-semibold shadow-xl shadow-brand-copper/25 hover:bg-brand-copper/90 hover:shadow-brand-copper/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                Start Your Transformation
              </button>
              <button className="px-8 py-4 rounded-xl border-2 border-brand-forest/15 text-brand-forest font-semibold hover:bg-brand-forest/5 hover:border-brand-forest/30 transition-all duration-300">
                Discover Areas We Help
              </button>
            </div>

          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl border-2 border-brand-copper/30 transform rotate-3 pointer-events-none transition-transform duration-500 hover:rotate-1" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-forest/10 aspect-[4/5] group">
                <img 
                  src="/about-bg.jpg" 
                  alt="Holistic personal transformation and growth" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/40 via-transparent to-transparent" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= PHILOSOPHY SECTION ================= */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-12 bg-brand-ivory border-t border-brand-forest/5">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-brand-ivory border border-brand-copper/20 shadow-xl shadow-brand-forest/5 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-copper/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="inline-block">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-copper">
                  Our Philosophy
                </h2>
                <div className="h-1 w-12 bg-brand-copper mt-2 rounded-full" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-forest leading-snug">
                True transformation happens when every area of your life thrives in harmony.
              </h3>

              <p className="text-base sm:text-lg text-brand-forest/80 leading-relaxed font-light">
                We believe that mastery over your money, career, health, and relationships begins with unlocking your deepest confidence and ultimate purpose. No quick fixes—just deep, sustained structural alignment for your mind and life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= STORY & MISSION SECTION ================= */}
      <section className="relative py-20 lg:py-28 px-6 lg:px-12 border-t border-brand-forest/5 bg-brand-forest/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-brand-ivory border border-brand-forest/10 shadow-lg flex flex-col justify-between group hover:border-brand-copper/30 transition-all duration-300">
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-forest mt-1">Our Story</h2>
                <div className="h-1 w-10 bg-brand-copper mt-2 rounded-full" />
              </div>
              <p className="text-base sm:text-lg text-brand-forest/80 leading-relaxed font-light">
                Everyone faces moments of uncertainty—whether it's struggling in relationships, feeling stuck in a career, dealing with financial stress, losing confidence, or searching for purpose. We created this platform to provide practical guidance, proven coaching methods, and personalized support that help people transform their lives from the inside out.
              </p>
            </div>
          </div>

          <div className="relative p-8 sm:p-12 rounded-3xl bg-brand-forest text-brand-ivory shadow-xl flex flex-col justify-between group overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-copper/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-block">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ivory mt-1">Our Mission</h2>
                <div className="h-1 w-10 bg-brand-copper mt-2 rounded-full" />
              </div>
              <p className="text-base sm:text-lg text-brand-ivory/90 leading-relaxed font-light">
                Our mission is to empower individuals with the knowledge, tools, and guidance they need to overcome life's challenges and create lasting personal transformation. We bridge the gap between knowing what to do and actually doing it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AREAS WE HELP ================= */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 bg-white border-t border-brand-forest/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-copper">
                Areas We Help
              </h2>
              <div className="h-1 w-12 bg-brand-copper mt-2 rounded-full" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-forest">
              What would you like support with?
            </h3>
            <p className="text-lg text-brand-forest/80 font-light leading-relaxed">
              You do not need to know which service you need. Start with the area of life you want to improve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div 
                key={index} 
                className="group relative p-8 sm:p-10 rounded-3xl bg-brand-ivory border border-brand-forest/10 shadow-sm hover:shadow-xl hover:border-brand-copper/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-copper/5 rounded-bl-full pointer-events-none group-hover:bg-brand-copper/10 transition-colors duration-300" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-brand-copper font-mono">
                      {cat.number}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-brand-copper/10 flex items-center justify-center text-brand-copper group-hover:bg-brand-copper group-hover:text-white transition-all duration-300">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold tracking-tight text-brand-forest group-hover:text-brand-copper transition-colors">
                    {cat.title}
                  </h4>

                  <p className="text-brand-forest/75 text-base leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-forest/10 relative z-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-forest/50 group-hover:text-brand-copper transition-colors">
                    Explore More &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 bg-brand-ivory border-t border-brand-forest/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-copper">
                Why Choose Us
              </h2>
              <div className="h-1 w-12 bg-brand-copper mt-2 rounded-full" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-forest">
              Built for depth, safety, and lasting results
            </h3>
            <p className="text-lg text-brand-forest/80 font-light leading-relaxed">
              We provide a supportive, comprehensive environment designed to guide your evolution seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="group relative p-8 sm:p-10 rounded-3xl bg-brand-ivory border border-brand-copper/20 shadow-xl shadow-brand-forest/5 hover:border-brand-copper/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-copper/5 rounded-bl-full pointer-events-none group-hover:bg-brand-copper/10 transition-colors duration-300" />

                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-brand-forest/5 border border-brand-forest/10 flex items-center justify-center group-hover:bg-brand-copper/15 group-hover:border-brand-copper/30 transition-all duration-300">
                    {item.icon}
                  </div>

                  <h4 className="text-2xl font-bold tracking-tight text-brand-forest group-hover:text-brand-copper transition-colors">
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

      {/* ================= FREQUENTLY ASKED QUESTIONS SECTION ================= */}
      <section className="relative py-24 lg:py-36 px-6 lg:px-12 bg-white border-t border-brand-forest/5">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-block">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-copper">
                Got Questions?
              </h2>
              <div className="h-1 w-12 bg-brand-copper mt-2 mx-auto rounded-full" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-forest">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-brand-forest/80 font-light leading-relaxed">
              Find clarity on how our sessions, methodology, and coaching process work.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl bg-brand-ivory border border-brand-forest/10 overflow-hidden transition-all duration-300 hover:border-brand-copper/30 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  >
                    <span className="text-lg sm:text-xl font-bold text-brand-forest group-hover:text-brand-copper transition-colors">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full bg-brand-copper/10 flex items-center justify-center text-brand-copper shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-copper text-white' : ''}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-6 px-6 sm:px-8' : 'grid-rows-[0fr] opacity-0 px-6 sm:px-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-brand-forest/75 text-base sm:text-lg leading-relaxed font-light border-t border-brand-forest/10 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  )
}