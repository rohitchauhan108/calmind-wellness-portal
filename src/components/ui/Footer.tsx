'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, MapPin, ArrowUp, Instagram, Linkedin, ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    if (typeof window === 'undefined') return;
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#121412] text-stone-200 pt-16 pb-12 relative overflow-hidden font-sans">
      
      {/* Subtle Glowing Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-olive/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* 1. Top Callout Card / Banner */}
        <div className="mb-16 p-8 md:p-10 rounded-3xl bg-[#1A1D1A] border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#EAE6DF]">
              Ready to begin your healing journey?
            </h3>
            <p className="text-sm text-stone-400 font-light max-w-lg">
              Book a discovery session to uncover your subconscious patterns and gain clarity today.
            </p>
          </div>
          <Link
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-[#D4A373] text-[#121412] font-semibold text-sm hover:bg-[#E0B282] transition-all duration-300 flex items-center gap-2 group shrink-0 shadow-lg"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        {/* 2. Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info & Clean Logo Badge (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              {/* Light badge container removes the white box issue on dark backgrounds */}
              <div className="bg-[#FDFBF8] p-2.5 rounded-xl inline-block shadow-md transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Ila Garg Logo"
                  width={160}
                  height={50}
                  className="h-20 w-auto object-contain mix-blend-multiply"
                />
              </div>
            </Link>

            <p className="text-sm font-light text-stone-400 leading-relaxed max-w-sm">
              A holistic personal transformation practice integrating Life Coaching, subtle Energy Healing, and Graphotherapy to help you dissolve subconscious blocks and live with clarity.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A373] hover:text-white hover:bg-white/10 hover:border-[#D4A373]/50 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A373] hover:text-white hover:bg-white/10 hover:border-[#D4A373]/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4.5" />
              </a>
              <a 
                href="mailto:contact@ilagarg.com" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A373] hover:text-white hover:bg-white/10 hover:border-[#D4A373]/50 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">Services</h4>
            <ul className="space-y-3 text-sm font-light text-stone-300">
              {['Life Coaching', 'Energy Healing', 'Graphotherapy', 'Root-Cause Diagnosis'].map((service) => (
                <li key={service}>
                  <Link 
                    href="#services" 
                    className="hover:text-[#D4A373] transition-colors duration-200 block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">Programs</h4>
            <ul className="space-y-3 text-sm font-light text-stone-300">
              {
                [
                  { name: 'Empowerment Pathway', href: '#programs' },
                  { name: 'Energetic Rebirth', href: '#programs' },
                  { name: 'Subconscious Alignment', href: '#programs' },
                  { name: 'Discovery Call', href: '#contact' },
                ].map((program) => (
                  <li key={program.name}>
                    <Link 
                      href={program.href} 
                      className="hover:text-[#D4A373] transition-colors duration-200 block"
                    >
                      {program.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Col 4: Contact & Consultations (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-sm font-light text-stone-300">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">Private Consultations</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A373] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Worldwide Online Consultations<br />
                  <strong className="font-normal text-stone-200">Gurgaon, Haryana, India</strong>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4A373] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  By Appointment Only<br />
                  Mon — Sat: 09:00 - 18:00 (IST)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. Bottom Legal & Scroll Top Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-400 font-light">
          <div className="space-y-2 text-center md:text-left">
            <p>© {currentYear} Ila Garg. All rights reserved.</p>
            <p className="text-[11px] text-stone-500 max-w-2xl leading-relaxed">
              Disclosures: Ila Garg&apos;s coaching, graphotherapy, and healing programs represent professional wellness methodologies designed for lifestyle integration, self-understanding, and emotional healing. All consultations are held under strict confidentiality guidelines.
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#D4A373] hover:bg-white/10 text-stone-200 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm group shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}