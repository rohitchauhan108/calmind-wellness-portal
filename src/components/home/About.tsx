import React from 'react';
import { motion } from 'motion/react';
import { Award, Compass, HeartHandshake } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-brand-burgundy" />,
      title: "Compassion & Confidentiality",
      desc: "We provide a completely warm, judgment-free, and strictly confidential environment to navigate your personal challenges."
    },
    {
      icon: <Compass className="w-5 h-5 text-brand-burgundy" />,
      title: "Practical & Subconscious Integration",
      desc: "We blend the practical, forward-moving alignment of Life Coaching with deep subconscious rewriting via Graphotherapy."
    },
    {
      icon: <Award className="w-5 h-5 text-brand-burgundy" />,
      title: "Root-Cause Directed",
      desc: "We prioritize identifying and modifying deep-seated subconscious habits and energy blocks over merely managing symptoms."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-brand-warm-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Beautiful organic multi-image setup */}
          <div className="lg:col-span-5 relative" id="about-images">
            <div className="relative w-full max-w-[400px] mx-auto lg:mx-0">
              {/* Back decorative border */}
              <div className="absolute inset-0 rounded-[30px] border-2 border-brand-burgundy/20 translate-x-4 -translate-y-4 pointer-events-none" />

              {/* Founder quote bubble overlay */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -right-6 top-12 bg-brand-espresso text-brand-cream p-5 rounded-2xl shadow-premium max-w-[200px] z-20 border border-brand-burgundy/10"
              >
                <p className="text-[12px] italic font-medium leading-relaxed">
                      "Our thoughts, emotions, habits, and subconscious patterns shape our lives. By changing these, we experience lasting transformation."
                    </p>
                <span className="block text-[10px] uppercase tracking-wider text-brand-gold mt-3 font-semibold">
                  — Ila Garg, Founder
                </span>
              </motion.div>

              {/* Main Image */}
              <div className="rounded-[28px] overflow-hidden aspect-[3/4] shadow-premium bg-brand-beige">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" 
                  alt="Ila Garg Wellness transformation practitioner" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Philosophical content */}
          <div className="lg:col-span-7 space-y-8" id="about-content">
            <div className="space-y-4">
              <span className="text-brand-burgundy text-sm font-semibold tracking-wider uppercase">About the Practice</span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-espresso tracking-tight leading-tight">
                Empowering your true, authentic self.
              </h2>
              <p className="text-brand-espresso-light font-medium text-base md:text-lg leading-relaxed">
                Ila Garg is a wellness and personal transformation practice that helps individuals overcome emotional, mental, and behavioral challenges. By combining practical life coaching with holistic energy healing and clinical graphotherapy, we empower you to dissolve limiting self-talk, heal heavy blockages, and live on purpose.
              </p>
            </div>

            {/* Value Blocks */}
            <div className="space-y-6 pt-4">
              {coreValues.map((val, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-burgundy/10 flex items-center justify-center shrink-0 text-brand-burgundy">
                    {val.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-semibold text-brand-espresso">{val.title}</h4>
                    <p className="text-sm font-medium text-brand-espresso-light leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Small founder callout */}
            <div className="pt-6 border-t border-brand-burgundy/10 flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80" 
                alt="Ila Garg Portrait" 
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border border-brand-burgundy/20"
              />
              <div>
                <span className="font-serif text-brand-espresso font-semibold block">Ila Garg</span>
                <span className="text-xs text-brand-burgundy font-medium">Founder, Life Coach, Energy Healer & Certified Graphotherapist</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
