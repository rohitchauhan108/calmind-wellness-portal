import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Compass,
  Sun,
  PenTool,
  Heart,
  ChevronDown,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      icon: <Compass className="w-5 h-5 pointer-events-none" />,
      title: "Intuitive Life Coaching",
      subtitle: "Clarity & Growth",
      description:
        "An empowering, personalized coaching relationship dedicated to helping you discover your life purpose, clarify your vision, and strip away long-held subconscious limiting beliefs.",
      benefits: [
        "Uncover immediate and long-term goals",
        "Overcome repeating limiting habits & mindsets",
        "Build resilient, authentic self-confidence",
        "Create practical, realistic action roadmaps",
      ],
      duration: "60-90 Minutes",
      sessionType: "In-Person or Zoom",
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Sun className="w-5 h-5 pointer-events-none" />,
      title: "Holistic Energy Healing",
      subtitle: "Emotional Release",
      description:
        "Gentle yet powerful energy sessions designed to identify and dissolve heavy emotional blocks, severe stress, anxiety, and trauma stored deep within your somatic system.",
      benefits: [
        "Immediate relief from stress & mental clutter",
        "Release of deeply trapped trauma and blocks",
        "Gentle purification of heavy emotional charges",
        "Restored feeling of emotional alignment and peace",
      ],
      duration: "60 Minutes",
      sessionType: "In-Person or Distant",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <PenTool className="w-5 h-5 pointer-events-none" />,
      title: "Graphotherapy & Handwriting Analysis",
      subtitle: "Habit Rewiring",
      description:
        "Unlock your subconscious mind through scientific handwriting analysis. After evaluating your strokes, we design customized handwriting exercises to consciously rewire behaviors.",
      benefits: [
        "Decode hidden personality and behavioral habits",
        "Rewire negative subconscious traits with stroke changes",
        "Drastically improve mental focus and clarity",
        "Develop conscious, healthy self-growth pathways",
      ],
      duration: "75 Minutes",
      sessionType: "Digital Analysis or In-Person",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Heart className="w-5 h-5 pointer-events-none" />,
      title: "Integrated Root Cause Consult",
      subtitle: "Ultimate Alignment",
      description:
        "Our signature high-impact assessment combining all three modalities. We evaluate your goals, bio-energy, and handwriting to address root causes, not just treat symptoms.",
      benefits: [
        "Comprehensive diagnostic of mental & emotional states",
        "Custom hybrid roadmap combining coaching and healing",
        "Discovery of underlying physical and spiritual roots",
        "Ongoing personal mentorship and high-touch support",
      ],
      duration: "120 Minutes",
      sessionType: "Hybrid Solo Experience",
      img: "https://images.pexels.com/photos/1054251/pexels-photo-1054251.jpeg",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 sm:py-28 lg:py-32 bg-[#FBF9F5] relative overflow-hidden text-[#1C2826]"
    >
      {/* Dynamic Code-Generated SVG Sacred Patterns & Topography Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-80">
        {/* Subtle Noise Texture */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Concentric Geometric Rings Pattern - Top Left */}
        <svg
          className="absolute -top-24 -left-24 w-[600px] h-[600px] text-[#073E42]/15"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
        >
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="49" />
          <path d="M50 0 V100 M0 50 H100" strokeDasharray="1 1" />
        </svg>

        {/* Flowing Organic Waves / Energy Lines - Bottom Right */}
        <svg
          className="absolute -bottom-32 -right-32 w-[700px] h-[700px] text-[#073E42]/10"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M 0,100 Q 100,200 200,100 T 400,100" />
          <path d="M 0,130 Q 100,230 200,130 T 400,130" />
          <path d="M 0,160 Q 100,260 200,160 T 400,160" />
          <path d="M 0,190 Q 100,290 200,190 T 400,190" />
          <path d="M 0,220 Q 100,320 200,220 T 400,220" />
          <path d="M 0,250 Q 100,350 200,250 T 400,250" />
        </svg>
      </div>

      {/* Background Deep Emerald Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#073E42]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#073E42]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Radial Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#073E42_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073E42]/10 border border-[#073E42]/15 text-[#073E42] text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Offerings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#073E42] tracking-tight leading-tight font-bold">
              Empowering pathways designed for holistic wellness.
            </h2>
          </div>
          <p className="text-[#073E42]/70 font-medium text-sm sm:text-base max-w-md leading-relaxed">
            Every session is custom-tailored. We identify your unique subconscious blocks, emotional barriers, and personal goals before formulating your healing plan.
          </p>
        </div>

        {/* Tabbed Interactive Interface */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          id="services-interactive"
        >
          {/* MOBILE SELECT DROPDOWN */}
          <div className="block lg:hidden w-full relative z-20">
            <label
              htmlFor="service-select"
              className="block text-xs font-bold text-[#073E42] uppercase tracking-wider mb-2"
            >
              Select Experience
            </label>
            <div className="relative">
              <select
                id="service-select"
                value={activeTab}
                onChange={(e) => setActiveTab(Number(e.target.value))}
                className="w-full appearance-none bg-white/90 backdrop-blur-md border border-[#073E42]/20 rounded-2xl px-5 py-4 pr-12 text-[#073E42] font-medium text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#073E42]"
              >
                {servicesData.map((service, index) => (
                  <option key={index} value={index}>
                    {service.subtitle} — {service.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-[#073E42] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* DESKTOP TABS NAVIGATION */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3.5 w-full">
            {servicesData.map((service, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center justify-between border text-sm w-full cursor-pointer relative overflow-hidden group ${
                  activeTab === index
                    ? "bg-[#073E42] border-[#073E42] text-white shadow-xl scale-[1.02]"
                    : "bg-white/80 hover:bg-white backdrop-blur-sm border-[#073E42]/10 text-[#073E42] hover:border-[#073E42]/30"
                }`}
              >
                <div className="flex items-center gap-4 z-10">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      activeTab === index
                        ? "bg-white/15 text-white"
                        : "bg-[#073E42]/10 text-[#073E42] group-hover:bg-[#073E42]/20"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="overflow-hidden">
                    <span
                      className={`block text-[10px] font-bold uppercase tracking-widest ${
                        activeTab === index
                          ? "text-[#A3E635]"
                          : "text-[#073E42]/60"
                      }`}
                    >
                      {service.subtitle}
                    </span>
                    <span className="font-serif font-bold text-[15px] truncate block">
                      {service.title.split("&")[0]}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  className={`w-4 h-4 transition-transform duration-300 z-10 ${
                    activeTab === index
                      ? "text-[#A3E635] translate-x-0.5 -translate-y-0.5"
                      : "text-[#073E42]/30 opacity-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Active Content Display Card */}
          <div className="lg:col-span-8 bg-white/90 backdrop-blur-xl border border-[#073E42]/15 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            {/* Card Internal Subtle Pattern Accent */}
            <div className="absolute -top-12 -right-12 w-48 h-48 pointer-events-none opacity-[0.03] text-[#073E42]">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10"
              >
                {/* Content description */}
                <div className="md:col-span-7 space-y-6 order-2 md:order-1">
                  <div>
                    <span className="text-[#073E42] font-semibold text-[10px] sm:text-xs uppercase tracking-widest bg-[#073E42]/10 border border-[#073E42]/15 px-3 py-1 rounded-full inline-block">
                      {servicesData[activeTab].sessionType}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#073E42] mt-3 leading-tight">
                      {servicesData[activeTab].title}
                    </h3>
                  </div>

                  <p className="text-[#073E42]/80 font-medium text-sm sm:text-base leading-relaxed">
                    {servicesData[activeTab].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-[#073E42] uppercase tracking-wider">
                      Anticipated Key Outcomes:
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {servicesData[activeTab].benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#073E42]/80"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#073E42]/10 text-[#073E42] flex items-center justify-center shrink-0 mt-0.5 border border-[#073E42]/20">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metadata Bar */}
                  <div className="pt-6 border-t border-[#073E42]/10 flex items-center gap-6 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#073E42]" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#073E42]/60 block">
                          Duration
                        </span>
                        <span className="font-semibold text-[#073E42]">
                          {servicesData[activeTab].duration}
                        </span>
                      </div>
                    </div>
                    <div className="w-[1px] h-8 bg-[#073E42]/15" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#073E42]/60 block">
                        Format
                      </span>
                      <span className="font-semibold text-[#073E42]">
                        {servicesData[activeTab].sessionType}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Image Display */}
                <div className="md:col-span-5 order-1 md:order-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[4/5] shadow-lg group border border-[#073E42]/10">
                    <img
                      src={servicesData[activeTab].img}
                      alt={servicesData[activeTab].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#073E42]/30 via-transparent to-transparent" />
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