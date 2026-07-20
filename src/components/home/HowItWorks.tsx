import React from 'react';
import { motion } from 'motion/react';
import { FileText, Sliders, Heart, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <FileText className="w-5 h-5" />,
      title: "Subconscious Discovery Call",
      desc: "We begin with a private conversation and handwriting sample review, mapping your subconscious habits, blockages, and core personality traits."
    },
    {
      num: "02",
      icon: <Sliders className="w-5 h-5" />,
      title: "Personalized Roadmap Design",
      desc: "We construct your tailored plan, blending practical life coaching milestones with targeted Graphotherapy exercises and custom energy tasks."
    },
    {
      num: "03",
      icon: <Sparkles className="w-5 h-5" />,
      title: "Active Rewiring & Healing",
      desc: "Undergo active 1-on-1 coaching to reconstruct your habits while receiving restorative Energy Healing to release anxiety, stress, and trauma."
    },
    {
      num: "04",
      icon: <Heart className="w-5 h-5" />,
      title: "Continuous Sustained Alignment",
      desc: "Maintain your progress with regular daily handwriting stroke updates, constant text support, and progressive habit-integration check-ins."
    }
  ];

  return (
    <section id="process" className="py-24 md:pb-24 bg-brand-cream relative">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[400px] bg-brand-olive-light/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24 space-y-4">
          <span className="text-brand-olive text-sm font-semibold tracking-wider uppercase">Your Journey of Rebirth</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal tracking-tight leading-tight">
            Our Bespoke Protocol, Step-by-Step
          </h2>
          <p className="text-brand-charcoal-light font-light text-base md:text-lg max-w-xl mx-auto">
            From the initial physiological assessment to lasting integrated change, we provide a structured, secure, and entirely personalized methodology.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" id="process-timeline-container">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-brand-olive-light/0 via-brand-olive/20 to-brand-olive-light/0 z-0 pointer-events-none" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-brand-olive/5 rounded-3xl p-8 relative z-10 shadow-premium hover:shadow-premium-hover transition-all duration-300 group"
            >
              {/* Step number on back */}
              <div className="absolute -top-6 -left-2 font-serif text-8xl font-bold text-brand-olive/[0.04] group-hover:text-brand-olive/[0.08] transition-colors duration-500 pointer-events-none">
                {step.num}
              </div>

              {/* Icon container - updated text/hover rules for white icon */}
              <div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-olive/10 flex items-center justify-center text-brand-olive group-hover:text-white group-hover:bg-brand-olive mb-8 shadow-sm transition-all duration-500 relative z-10 [&>svg]:transition-colors duration-300">
                {step.icon}
              </div>

              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-brand-olive">
                  Phase {step.num}
                </span>
                <h3 className="text-lg font-serif text-brand-charcoal font-semibold group-hover:text-brand-olive transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-brand-charcoal-light font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}