import React from 'react';
import { motion } from 'motion/react';
import { Heart, Compass, Zap, PenTool } from 'lucide-react';

export default function CategoryCards() {
  const categories = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Life Coaching",
      description: "Empower yourself to clarify your life vision, overcome limiting patterns, and build strong confidence and purpose.",
      badge: "Personal Growth",
      link: "#services"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Healing",
      description: "Identify and release deep-seated emotional blocks, stress, and anxiety through holistic, restorative energy practices.",
      badge: "Emotional Balance",
      link: "#services"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Graphotherapy",
      description: "Identify and modify subconscious beliefs and habits by analyzing and redesigning your unique handwriting patterns.",
      badge: "Subconscious Shift",
      link: "#services"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Root Cause Approach",
      description: "Go beyond treating superficial symptoms. We target the physical, mental, and behavioral roots of your challenges.",
      badge: "Holistic Health",
      link: "#about"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const easingCurve = [0.16, 1, 0.3, 1] as any;

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easingCurve }
    }
  };

  return (
    <section id="categories" className="py-20 md:py-28 bg-brand-warm-white relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[300px] bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-burgundy text-sm font-semibold tracking-wider uppercase">Foundational Pillars</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-espresso tracking-tight leading-tight">
            Tailored solutions designed to foster complete clarity and alignment.
          </h2>
          <p className="text-brand-espresso-light font-medium text-base md:text-lg max-w-2xl mx-auto">
            Choose from our specialized core methodologies tailored to meet the highest standards of emotional, intellectual, and physical wellness.
          </p>
        </div>

        <motion.div 
          id="category-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 24px 48px -16px rgba(114, 47, 55, 0.12)"
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-brand-burgundy/5 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Accent Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-burgundy-dark/3 rounded-bl-full group-hover:bg-brand-burgundy-dark/10 transition-colors duration-500" />

              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-brand-burgundy-dark/8 flex items-center justify-center text-brand-burgundy-dark group-hover:bg-brand-burgundy-dark group-hover:text-brand-cream transition-all duration-500 shadow-sm">
                  {category.icon}
                </div>

                <div className="space-y-3">
                  <span className="text-[11px] font-semibold tracking-widest text-brand-burgundy-dark uppercase bg-brand-burgundy-dark/5 px-2.5 py-1 rounded-md">
                    {category.badge}
                  </span>
                  <h3 className="text-xl font-serif text-brand-espresso group-hover:text-brand-burgundy-dark transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-[14px] text-brand-espresso-light font-medium leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href={category.link}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(category.link.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-burgundy-dark hover:text-brand-espresso transition-colors duration-300 uppercase tracking-widest"
                >
                  Explore Pillar
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
