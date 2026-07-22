import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, ShieldCheck, Star, Sparkles, X, Leaf } from 'lucide-react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: easeCurve }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-12  pb-20 md:py-24 flex items-center overflow-hidden bg-brand-cream"
    >
      {/* Background Decorative Blurs & Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-sage/10 blur-[120px] pointer-events-none animate-pulse-gentle" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-brand-beige/40 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            id="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            {/* Eyebrow */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-burgundy/8 border border-brand-burgundy/15 text-brand-burgundy-dark text-[13px] font-medium tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Holistic Personal Growth & Transformation</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-espresso leading-[1.1] tracking-tight"
            >
              Understand your mind.<br />
              <span className="italic text-brand-burgundy font-medium">"Heal your emotional blocks"</span><br />
              Reclaim your life.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-brand-espresso-light font-medium max-w-xl leading-relaxed"
            >
              Welcome to Ila Garg. We blend Life Coaching, Energy Healing, and Graphotherapy (handwriting analysis) to help you address the root causes of your struggles and drive lasting behavioral change.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-8 py-4 rounded-full bg-brand-burgundy text-brand-cream hover:bg-brand-burgundy-dark transition-all duration-300 shadow-premium hover:shadow-premium-hover flex items-center justify-center gap-2 group text-[15px] font-medium cursor-pointer"
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="px-6 py-4 rounded-full border border-brand-burgundy/20 hover:border-brand-burgundy text-brand-espresso hover:bg-brand-burgundy/5 transition-all duration-300 flex items-center justify-center gap-3 text-[15px] font-medium"
              >
                <span className="w-8 h-8 rounded-full bg-brand-burgundy/10 flex items-center justify-center text-brand-burgundy">
                  <Play className="w-3.5 h-3.5 fill-brand-burgundy ml-0.5" />
                </span>
                Watch the Experience
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-brand-burgundy/10 flex flex-wrap items-center gap-6"
            >
              <div className="flex -space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" 
                  alt="Client avatar" 
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border-2 border-brand-cream object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" 
                  alt="Client avatar" 
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border-2 border-brand-cream object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" 
                  alt="Client avatar" 
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border-2 border-brand-cream object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[#E6B055]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#E6B055]" />
                  ))}
                  <span className="text-brand-espresso font-semibold text-sm ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-brand-espresso-light">Empowering hundreds of professionals, entrepreneurs, and students</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Immersive Image with decoration */}
          <div className="lg:col-span-5 relative" id="hero-graphics">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[450px] mx-auto lg:ml-auto"
            >
              {/* Organic Shape Outline Border */}
              <div className="absolute inset-0 rounded-[40px] border-2 border-brand-gold/40 translate-x-4 translate-y-4 pointer-events-none" />

              {/* Floating Element 1 (Mindful Stat Card) */}
              <motion.div
                className="absolute -left-10 top-1/4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-premium border border-brand-burgundy/5 z-20 hidden md:block max-w-[180px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-full bg-brand-burgundy-dark/10 flex items-center justify-center text-brand-burgundy-dark">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  <span className="text-[12px] font-semibold text-brand-espresso">Root Cause Focus</span>
                </div>
                <p className="text-[11px] text-brand-espresso-light leading-snug">Identifying subconscious patterns shaping your life.</p>
              </motion.div>

              {/* Floating Element 2 (Daily Ritual Tip) */}
              <motion.div
                className="absolute -right-8 bottom-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-premium border border-brand-burgundy/5 z-20 hidden md:block max-w-[190px]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-[20px]">✍️</span>
                  <span className="text-[12px] font-semibold text-brand-espresso">Graphotherapy</span>
                </div>
                <p className="text-[11px] text-brand-espresso-light leading-snug">Transform habits and beliefs through handwriting redesign.</p>
              </motion.div>

              {/* Main Luxury Image container */}
              <div className="relative rounded-[36px] overflow-hidden aspect-[4/5] shadow-premium bg-brand-beige">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" 
                  alt="A premium wellness meditation practitioner" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                />
                
                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Video Modal Experience */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            id="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-espresso/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-4xl bg-brand-cream rounded-3xl overflow-hidden shadow-2xl p-1"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-espresso/20 hover:bg-brand-espresso/40 text-brand-cream flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full bg-brand-espresso relative">
                {/* Interactive premium placeholder content simulating high-end video */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(44, 48, 46, 0.75), rgba(44, 48, 46, 0.85)), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80')` }}>
                  <Leaf className="w-16 h-16 text-brand-gold animate-bounce-slow mb-4" />
                  <h3 className="text-3xl font-serif text-brand-cream mb-2">The Journey of Transformation</h3>
                  <p className="text-sm text-brand-beige max-w-md mb-6 leading-relaxed">
                    Watch how combining Life Coaching, Energy Healing, and Graphotherapy creates deep, permanent personal growth.
                  </p>
                  <button 
                    onClick={() => {
                      alert("Experience Demo Video: A cinematic introduction would load here. Connect via WhatsApp or email on the bottom form to begin.");
                      setIsVideoOpen(false);
                    }}
                    className="px-6 py-3 rounded-full bg-brand-cream text-brand-espresso font-medium hover:bg-brand-beige transition-colors flex items-center gap-2"
                  >
                    Play Cinematic Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
