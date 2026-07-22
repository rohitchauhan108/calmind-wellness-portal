import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Compass, Sun, PenTool, Heart, ChevronDown } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      icon: <Compass className="w-5 h-5 pointer-events-none" />,
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
      icon: <Sun className="w-5 h-5 pointer-events-none" />,
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
      icon: <PenTool className="w-5 h-5 pointer-events-none" />,
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
      icon: <Heart className="w-5 h-5 pointer-events-none" />,
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
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-brand-cream relative overflow-hidden">
      {/* Soft background light */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[300px] h-[500px] sm:h-[600px] bg-brand-sage/5 blur-[100px] sm:blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 mb-8 sm:mb-16">
          <div className="max-w-2xl space-y-2 sm:space-y-4">
            <span className="text-brand-burgundy-dark text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Our Services
                  </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-brand-espresso tracking-tight leading-tight">
              Empowering pathways designed for holistic wellness.
            </h2>
          </div>
          <p className="text-brand-espresso-light font-medium text-sm sm:text-base max-w-sm leading-relaxed">
            Every session is custom-tailored. We identify your unique subconscious blocks, emotional barriers, and personal goals before formulating your healing plan.
          </p>
        </div>

        {/* Tabbed Interactive Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start" id="services-interactive">
          
          {/* MOBILE SELECT DROPDOWN (Visible on screen < lg) */}
          <div className="block lg:hidden w-full relative z-20">
            <label htmlFor="service-select" className="block text-xs font-semibold text-brand-burgundy-dark uppercase tracking-wider mb-2">
              Select Service Category
            </label>
            <div className="relative">
              <select
                id="service-select"
                value={activeTab}
                onChange={(e) => setActiveTab(Number(e.target.value))}
                className="w-full appearance-none bg-white border border-brand-burgundy/20 rounded-2xl px-5 py-4 pr-12 text-brand-espresso font-medium text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-burgundy-dark"
              >
                {servicesData.map((service, index) => (
                  <option key={index} value={index}>
                    {service.subtitle} — {service.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-brand-burgundy-dark absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* DESKTOP TABS NAVIGATION (Visible on screen >= lg) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3 w-full">
            {servicesData.map((service, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center gap-4 border text-sm w-full cursor-pointer select-none ${
                  activeTab === index
                    ? 'bg-brand-burgundy-dark border-brand-burgundy-dark text-brand-cream shadow-premium'
                    : 'bg-white hover:bg-brand-beige/40 border-brand-burgundy/5 text-brand-espresso'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors pointer-events-none ${
                  activeTab === index ? 'bg-brand-cream/15 text-brand-cream' : 'bg-brand-burgundy/8 text-brand-burgundy'
                }`}>
                  {service.icon}
                </div>
                <div className="overflow-hidden pointer-events-none">
                  <span className={`block text-[11px] uppercase tracking-wider ${
                    activeTab === index ? 'text-brand-gold' : 'text-brand-burgundy'
                  }`}>
                    {service.subtitle}
                  </span>
                  <span className="font-medium text-[14px] truncate block">
                    {service.title.split('&')[0]}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Content Viewer */}
          <div className="lg:col-span-8 bg-white border border-brand-burgundy/5 rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-sm sm:shadow-premium">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
              >
                {/* Content description */}
                <div className="md:col-span-7 space-y-5 sm:space-y-6 order-2 md:order-1">
                  <div>
                    <span className="text-brand-burgundy font-semibold text-[10px] sm:text-xs uppercase tracking-widest bg-brand-burgundy/5 px-2.5 py-1 rounded inline-block">
                      {servicesData[activeTab].sessionType}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-espresso mt-2 sm:mt-3 leading-tight">
                      {servicesData[activeTab].title}
                    </h3>
                  </div>

                  <p className="text-brand-espresso-light font-medium text-xs sm:text-[15px] leading-relaxed">
                    {servicesData[activeTab].description}
                  </p>

                  <div className="space-y-2.5 sm:space-y-3">
                    <h4 className="text-[11px] sm:text-[12px] font-semibold text-brand-espresso uppercase tracking-wider">
                      Anticipated Outcomes:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {servicesData[activeTab].benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-brand-espresso-light">
                          <span className="w-4 h-4 rounded-full bg-brand-burgundy/10 text-brand-burgundy flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="pt-4 border-t border-brand-burgundy/10 flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-brand-espresso-light">
                    <div>
                      <span className="text-[11px] sm:text-xs text-brand-burgundy font-medium block">Duration</span>
                      <span className="font-semibold text-brand-espresso">{servicesData[activeTab].duration}</span>
                    </div>
                    <div className="w-[1px] h-8 bg-brand-burgundy/10" />
                    <div>
                      <span className="text-[11px] sm:text-xs text-brand-burgundy font-medium block">Format</span>
                      <span className="font-semibold text-brand-espresso">{servicesData[activeTab].sessionType}</span>
                    </div>
                  </div>
                </div>

                {/* Content Image */}
                <div className="md:col-span-5 order-1 md:order-2">
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] md:aspect-[4/5] shadow-md bg-brand-beige">
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