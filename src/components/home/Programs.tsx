import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, Calendar, ArrowRight, UserCheck } from 'lucide-react';

export default function Programs() {
  const [isVIP, setIsVIP] = useState(false);

  const programsList = [
    {
      badge: "1-on-1 Coaching",
      title: "The Personal Empowerment Pathway",
      tagline: "3-Month Transformative Mentorship",
      desc: "Perfect for individuals seeking deep clarity, authentic self-belief, and purpose. Includes regular coaching, targeted subconscious block clearing, and custom handwriting transformation guides.",
      rating: "5.0",
      features: [
        "Six private 75-minute Life Coaching sessions",
        "Full scientific handwriting analysis & custom Graphotherapy exercises",
        "Subconscious habit and limiting belief detection",
        "Continuous accountability and progress tracking",
        "Direct email & messaging support between sessions"
      ],
      priceIndividual: 450,
      priceVIP: 750,
      img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80"
    },
    {
      badge: "Healing & Restoration",
      title: "The Energetic Rebirth Intensive",
      tagline: "4-Week Emotional Decompression",
      desc: "Engineered specifically for those suffering from high stress, heavy anxiety, emotional fatigue, or blocks. Combines powerful energetic clearing with calming somatic exercises.",
      rating: "4.9",
      features: [
        "Four private 60-minute Energy Healing sessions",
        "Deep somatic decompression and mental silence protocol",
        "Handwriting strokes optimized specifically for anxiety relief",
        "Personalized daily meditation & grounding practices",
        "Weekly energetic field assessments"
      ],
      priceIndividual: 320,
      priceVIP: 550,
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      badge: "Complete Integration",
      title: "The Subconscious Alignment Journey",
      tagline: "6-Month Signature Evolution",
      desc: "Our flagship, deeply restorative program. We systematically map, rewrite, and heal every facet of your thoughts, emotions, habits, and energetic blockages for permanent life transformation.",
      rating: "5.0",
      features: [
        "Twelve private Coaching & Energy Healing sessions",
        "Full detailed Graphotherapy analysis and ongoing redesign",
        "Comprehensive root-cause discovery audits",
        "Custom behavioral habit-shift protocol designed weekly",
        "Priority scheduling and unlimited high-touch support"
      ],
      priceIndividual: 950,
      priceVIP: 1550,
      img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-brand-warm-white relative overflow-hidden">
      {/* Soft circular lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-brand-sage/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-burgundy-dark text-sm font-semibold tracking-wider uppercase">Pathways of Growth</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-espresso tracking-tight leading-tight">
            Curated Programs for Lasting Transformation
          </h2>
          <p className="text-brand-espresso-light font-medium text-base md:text-lg max-w-sm">
            Bespoke holistic frameworks integrating Life Coaching, Energy Healing, and Graphotherapy to help you dissolve blocks and grow.
          </p>

          {/* Pricing Selector Toggle */}
          <div className="pt-4 flex items-center gap-3">
            <span className={`text-sm font-medium ${!isVIP ? 'text-brand-burgundy-dark' : 'text-brand-espresso-light'}`}>Standard Individual</span>
            <button
              onClick={() => setIsVIP(!isVIP)}
              className="w-14 h-7 rounded-full bg-brand-sage/20 p-1 flex items-center transition-colors duration-300 relative focus:outline-none"
              aria-label="Toggle tier"
            >
              <motion.div
                layout
                className="w-5 h-5 rounded-full bg-brand-burgundy-dark shadow-sm"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ marginLeft: isVIP ? 'auto' : '0' }}
              />
            </button>
            <span className={`text-sm font-medium ${isVIP ? 'text-brand-burgundy-dark' : 'text-brand-espresso-light'}`}>
              VIP High-Touch Tier <span className="text-xs bg-brand-burgundy-dark/10 text-brand-burgundy-dark px-2 py-0.5 rounded ml-1 font-semibold">Priority Support</span>
            </span>
          </div>
        </div>

        {/* Programs Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="programs-grid">
          {programsList.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-brand-burgundy/5 rounded-[32px] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image & Header */}
                <div className="relative aspect-video overflow-hidden bg-brand-beige">
                  <img 
                    src={prog.img} 
                    alt={prog.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-burgundy-dark shadow-sm">
                    {prog.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-brand-espresso/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brand-cream shadow-sm flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#E6B055] text-[#E6B055]" />
                    <span>{prog.rating}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-serif text-brand-espresso leading-tight">
                      {prog.title}
                    </h3>
                    <p className="text-brand-burgundy-dark font-medium text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {prog.tagline}
                    </p>
                  </div>

                  <p className="text-[13.5px] text-brand-espresso-light font-medium leading-relaxed">
                    {prog.desc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-[11px] uppercase tracking-wider font-semibold text-brand-espresso">Comprehensive Inclusions:</h4>
                    <div className="space-y-2">
                      {prog.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-brand-espresso-light leading-snug">
                          <span className="w-4 h-4 rounded-full bg-brand-burgundy-dark/10 text-brand-burgundy-dark flex items-center justify-center shrink-0 mt-0.5">
                            <ShieldCheck className="w-3 h-3" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & CTA Footer */}
              <div className="p-8 pt-0 border-t border-brand-burgundy/5 mt-auto">
                <div className="flex items-baseline gap-1.5 py-6">
                  <span className="text-2xl font-serif font-semibold text-brand-espresso">
                    ${isVIP ? prog.priceVIP.toLocaleString() : prog.priceIndividual.toLocaleString()}
                  </span>
                  <span className="text-xs text-brand-espresso-light font-medium">
                    / USD program fee
                  </span>
                </div>

                <button 
                  onClick={() => {
                    alert(`Inquiry Confirmed: Booking interest in "${prog.title}" has been registered. Please complete the contact form below to schedule your diagnostic call.`);
                  }}
                  className="w-full py-4 rounded-full bg-brand-burgundy-dark hover:bg-brand-burgundy-dark/90 text-brand-cream transition-colors duration-300 flex items-center justify-center gap-2 text-[14px] font-medium cursor-pointer shadow-sm group"
                >
                  Request Consultation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
