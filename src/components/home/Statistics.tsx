'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { Leaf, Award, Smile, Shield, Sparkles, TrendingUp } from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  detail: string;
  icon: React.ReactNode;
}

// Animated Counter Component
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="inline-flex items-center">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const stats: StatItem[] = [
    {
      value: 95,
      suffix: "%",
      label: "Client Breakthroughs",
      detail: "Clients who report permanent relief from subconscious anxiety, limiting patterns, and stress within 6 weeks.",
      icon: <Smile className="w-5 h-5" />
    },
    {
      value: 500,
      suffix: "+",
      label: "Sessions Conducted",
      detail: "In-depth 1-on-1 consultations across Life Coaching, Graphotherapy, and subtle Energy Restorations.",
      icon: <Leaf className="w-5 h-5" />
    },
    {
      value: 100,
      suffix: "%",
      label: "Confidentiality",
      detail: "Strict professional privacy protocols. Your personal history and handwriting diagnostics remain strictly private.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      value: 12,
      suffix: "+",
      label: "Years Practice",
      detail: "Of dedicated holistic practice refining integrated methodologies for long-term behavioral change.",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="statistics" className="py-24 md:py-32 bg-[#FAF7F2] text-[#2C302E] relative overflow-hidden font-sans">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#536244]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#536244]/10 border border-[#536244]/20 text-[#536244] text-xs font-semibold tracking-wider uppercase">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Measurable Impact</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#2C302E] tracking-tight leading-[1.15]">
            Root-level transformation, proven by numbers.
          </h2>

          <p className="text-sm md:text-base text-[#6A706C] font-light leading-relaxed">
            Our multi-disciplinary framework delivers tangible clarity, emotional lightness, and lasting growth.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" id="statistics-grid">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-[#E2DDD3] rounded-3xl p-7 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
            >
              {/* Top Animated Accent Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#D6A97A] group-hover:to-[#536244] transition-all duration-500" />

              <div className="space-y-6">
                
                {/* Header Row: Icon Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#F2EDE4] text-[#536244] flex items-center justify-center border border-[#E2DDD3] group-hover:bg-[#536244] group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                  <Sparkles className="w-4 h-4 text-[#D6A97A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Counter & Label */}
                <div className="space-y-1">
                  <div className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-[#2C302E] group-hover:text-[#536244] transition-colors duration-300">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-xs font-bold text-[#2C302E] uppercase tracking-wider">
                    {stat.label}
                  </h3>
                </div>

                {/* Divider Line */}
                <div className="w-10 h-0.5 bg-[#E2DDD3] group-hover:w-full group-hover:bg-[#D6A97A] transition-all duration-500" />

                {/* Description */}
                <p className="text-xs text-[#6A706C] font-light leading-relaxed">
                  {stat.detail}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-4 md:p-5 rounded-2xl bg-[#F2EDE4] border border-[#E2DDD3] flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left text-xs text-[#555C58]"
        >
          <div className="flex items-center gap-2 font-medium text-[#2C302E]">
            <Shield className="w-4 h-4 text-[#536244]" />
            <span>Guaranteed Professional Standards:</span>
          </div>
          <span className="hidden sm:inline text-[#D0C9BD]">•</span>
          <p className="font-light">
            All diagnostic reports and energy sessions follow standardized clinical discretion protocols.
          </p>
        </motion.div>

      </div>
    </section>
  );
}