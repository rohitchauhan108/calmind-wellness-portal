import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Compass, Sun, PenTool, Heart } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      icon: <Compass className="w-5 h-5" />,
      title: "Intuitive Life Coaching",
      subtitle: "Clarity & Growth",
      description: "An empowering, personalized coaching relationship dedicated to helping you discover your life purpose, clarify your vision, and strip away long-held subconscious limiting beliefs.",
      benefits: [
        "Uncover immediate and long-term goals",
        "Overcome repeating limiting habits & mindsets",
        "Build resilient, authentic self-confidence",
        "Create practical, realistic action roadmaps"
      ],
      duration: "60-90 Minutes",
      sessionType: "In-Person or Zoom",
      img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Sun className="w-5 h-5" />,
      title: "Holistic Energy Healing",
      subtitle: "Emotional Release",
      description: "Gentle yet powerful energy sessions designed to identify and dissolve heavy emotional blocks, severe stress, anxiety, and trauma stored deep within your somatic system.",
      benefits: [
        "Immediate relief from stress & mental clutter",
        "Release of deeply trapped trauma and blocks",
        "Gentle purification of heavy emotional charges",
        "Restored feeling of emotional alignment and peace"
      ],
      duration: "60 Minutes",
      sessionType: "In-Person or Distant",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      title: "Graphotherapy & Handwriting Analysis",
      subtitle: "Habit Rewiring",
      description: "Unlock your subconscious mind through scientific handwriting analysis. After evaluating your strokes, we design customized handwriting exercises to consciously rewire behaviors.",
      benefits: [
        "Decode hidden personality and behavioral habits",
        "Rewire negative subconscious traits with stroke changes",
        "Drastically improve mental focus and clarity",
        "Develop conscious, healthy self-growth pathways"
      ],
      duration: "75 Minutes",
      sessionType: "Digital Analysis or In-Person",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Integrated Root Cause Consult",
      subtitle: "Ultimate Alignment",
      description: "Our signature high-impact assessment combining all three modalities. We evaluate your goals, bio-energy, and handwriting to address root causes, not just treat symptoms.",
      benefits: [
        "Comprehensive diagnostic of mental & emotional states",
        "Custom hybrid roadmap combining coaching and healing",
        "Discovery of underlying physical and spiritual roots",
        "Ongoing personal mentorship and high-touch support"
      ],
      duration: "120 Minutes",
      sessionType: "Hybrid Solo Experience",
      img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-cream relative">
      <div className="absolute top-0 right-0 w-[300px] h-[600px] bg-brand-olive-light/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-brand-olive text-sm font-semibold tracking-wider uppercase">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal tracking-tight leading-tight">
              Empowering pathways designed for holistic wellness.
            </h2>
          </div>
          <p className="text-brand-charcoal-light font-light text-base max-w-sm leading-relaxed">
            Every session is custom-tailored. We identify your unique subconscious blocks, emotional barriers, and personal goals before formulating your healing plan.
          </p>
        </div>

        {/* Tabbed Interactive Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start" id="services-interactive">
          
          {/* Tabs List (Left 4 columns on desktop) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0 scrollbar-none">
            {servicesData.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center gap-4 border text-sm w-[260px] lg:w-full cursor-pointer ${
                  activeTab === index
                    ? 'bg-brand-olive border-brand-olive text-brand-cream shadow-premium'
                    : 'bg-white hover:bg-brand-beige/40 border-brand-olive/5 text-brand-charcoal'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                  activeTab === index ? 'bg-brand-cream/15 text-brand-cream' : 'bg-brand-olive/8 text-brand-olive'
                }`}>
                  {service.icon}
                </div>
                <div>
                  <span className={`block text-[11px] uppercase tracking-wider ${
                    activeTab === index ? 'text-brand-brown-light' : 'text-brand-olive'
                  }`}>
                    {service.subtitle}
                  </span>
                  <span className="font-medium text-[14px] line-clamp-1">{service.title.split('&')[0]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Content Viewer (Right 8 columns) */}
          <div className="lg:col-span-8 bg-white border border-brand-olive/5 rounded-[32px] p-6 md:p-10 shadow-premium">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Content description (7 cols) */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="text-brand-olive font-semibold text-xs uppercase tracking-widest bg-brand-olive/5 px-2.5 py-1 rounded">
                      {servicesData[activeTab].sessionType}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-brand-charcoal mt-3 leading-tight">
                      {servicesData[activeTab].title}
                    </h3>
                  </div>

                  <p className="text-brand-charcoal-light font-light text-[15px] leading-relaxed">
                    {servicesData[activeTab].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-[12px] font-semibold text-brand-charcoal uppercase tracking-wider">Anticipated Outcomes:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {servicesData[activeTab].benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm font-light text-brand-charcoal-light">
                          <span className="w-4 h-4 rounded-full bg-brand-olive/10 text-brand-olive flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-olive/10 flex items-center gap-6 text-sm text-brand-charcoal-light">
                    <div>
                      <span className="text-xs text-brand-olive font-medium block">Duration</span>
                      <span className="font-semibold text-brand-charcoal">{servicesData[activeTab].duration}</span>
                    </div>
                    <div className="w-[1px] h-8 bg-brand-olive/10" />
                    <div>
                      <span className="text-xs text-brand-olive font-medium block">Format</span>
                      <span className="font-semibold text-brand-charcoal">{servicesData[activeTab].sessionType}</span>
                    </div>
                  </div>
                </div>

                {/* Content Image (5 cols) */}
                <div className="md:col-span-5">
                  <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md bg-brand-beige">
                    <img 
                      src={servicesData[activeTab].img} 
                      alt={servicesData[activeTab].title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
