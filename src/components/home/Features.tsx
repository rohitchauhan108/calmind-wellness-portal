import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Brain, Leaf, PenTool } from 'lucide-react';

export default function Features() {
  const bentoItems = [
    {
      span: "lg:col-span-8",
      icon: <PenTool className="w-6 h-6 text-brand-burgundy" />,
      tag: "Scientific Insight",
      title: "Scientific Graphotherapy Analysis",
      desc: "By analyzing handwriting variables like stroke pressure, slant, baseline, and letter connectors, we scientifically map underlying behavioral tendencies, emotional blocks, and subconscious habits.",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80"
    },
    {
      span: "lg:col-span-4",
      icon: <Leaf className="w-6 h-6 text-brand-burgundy" />,
      tag: "Holistic Energy",
      title: "Vibrational Release",
      desc: "We gently clear subconscious emotional residue and somatic stressors, returning your mind and body to an authentic baseline of absolute peace.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      span: "lg:col-span-4",
      icon: <ShieldCheck className="w-6 h-6 text-brand-burgundy" />,
      tag: "Trust",
      title: "Absolute Confidentiality & Care",
      desc: "Every discussion, handwriting test, and transformative breakthrough is held in the strictest professional confidentiality.",
      img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80"
    },
    {
      span: "lg:col-span-8",
      icon: <Sparkles className="w-6 h-6 text-brand-burgundy" />,
      tag: "Synergy",
      title: "Practical Action Paired with Subconscious Rewiring",
      desc: "Our unique methodology ensures you do not just learn what to do. By altering handwriting strokes and clearing your energetic blocks, we dissolve the internal resistance that prevents you from executing your goals.",
      img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-brand-cream relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-brand-sage/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-brand-burgundy-dark text-sm font-semibold tracking-wider uppercase">Our Foundations</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-espresso tracking-tight leading-tight">
            Why Individuals Choose Ila Garg
          </h2>
          <p className="text-brand-espresso-light font-medium text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            We focus on understanding the root causes of your struggles rather than just treating the symptoms. Here is how we build lasting growth and transformation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="features-bento-grid">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.span} bg-white rounded-[36px] border border-brand-burgundy/5 overflow-hidden group hover:border-brand-burgundy-dark/15 transition-all duration-300 flex flex-col justify-between shadow-premium hover:shadow-premium-hover`}
            >
              {/* Text content area */}
              <div className="p-8 md:p-10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-brand-burgundy-dark bg-brand-burgundy-dark/8 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-brand-espresso group-hover:text-brand-burgundy-dark transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] text-brand-espresso-light font-medium leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
              </div>

              {/* Graphic/Image area */}
              <div className="relative aspect-[16/7] w-full overflow-hidden mt-2 bg-brand-beige">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-95 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
                
                {/* Float Icon Accent */}
                <div className="absolute bottom-6 left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-md border border-brand-burgundy-dark/10 text-brand-burgundy-dark">
                  {item.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
