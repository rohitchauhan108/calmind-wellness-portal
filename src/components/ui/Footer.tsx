'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, ArrowUp, Instagram, Facebook, Youtube, ArrowRight, Mail, Globe } from 'lucide-react';

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
    <footer id="footer" className="bg-[#0D3C38] text-[#FBF9F5] pt-16 pb-12 relative overflow-hidden font-sans border-t border-white/10">
      
      {/* Subtle Glowing Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#E6B055]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* <div className="mb-16 rounded-[30px] border border-[#d8b77d]/50 bg-[#f6efe8] p-5 shadow-[0_18px_50px_rgba(7,62,66,0.08)] md:p-8">
          <div className="grid items-center gap-7 lg:grid-cols-[0.78fr_1.5fr_0.9fr]">
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-[4px] border-[#d5af6b] bg-[#0d3f3d] shadow-[0_18px_30px_rgba(13,59,54,0.15)] md:h-52 md:w-52">
                <Image
                  src="/founder.jpeg"
                  alt="Ila Garg"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 text-[#0d3f3d]">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-[#d5af6b]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#0d3f3d]/65">
                  My mission
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-[#0d3f3d]">
                I want to create a movement in the world.
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-[#0d3f3d]/80 md:text-lg">
                I want to show this to everyone—what is possible. Like, if you just go for it, what it is that we can achieve? Nothing.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#d5af6b]/70 bg-[#f9f5f1] p-6 text-center text-[#0d3f3d] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d5af6b] bg-[#0d3f3d]/5 text-[#0d3f3d]">
                  <Globe className="h-5 w-5" />
                </div>
              </div>

              <h4 className="font-serif text-2xl md:text-[2rem] leading-tight">
                Are you ready to begin?
              </h4>

              <a
                href="https://calendly.com/ilagarg-official/clarity-call-with-ila"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#0d3f3d] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#0a2f2d]"
              >
                Let&apos;s Connect
              </a>

              <p className="mt-4 text-sm leading-relaxed text-[#0d3f3d]/70">
                Your journey within can change everything outside.
              </p>
            </div>
          </div>
        </div> */}
        
        {/* 2. Footer Content Columns */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="md:col-span-2 lg:col-span-5">
          <Link href="/" className="inline-flex group">
            <Image
              src="/ila-grag-logo.webp"
              alt="Ila Garg Logo"
              width={180}
              height={55}
              className="h-28 w-auto rounded-sm object-contain opacity-95 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>
          <h2 className="text-2xl font-bold text-[#FBF9F5] mt-5">ILA GARG</h2>
          <p>Lasting change starts within.</p>

          {/* <p className="mt-6 max-w-md text-sm font-medium leading-relaxed text-[#FBF9F5]/70">
            A holistic personal transformation practice integrating Life Coaching,
            subtle Energy Healing, and Graphotherapy to help you dissolve
            subconscious blocks and live with clarity.
          </p> */}

          <div className="mt-8 flex flex-wrap items-center gap-3">
              <a 
                href="https://www.facebook.com/ilagargofficial/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#FBF9F5] transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://www.instagram.com/ilagargofficial?igsi=dHdyOWplcTY2aW12" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#FBF9F5] transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://www.youtube.com/@ilagargofficial" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#FBF9F5] transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
          </div>
          </div>

          <div className="rounded-2xl border border-[#E6B055]/25 bg-white/[0.04] px-6 py-7 sm:px-8 lg:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E6B055]">
              Complimentary Live Experience
            </p>
            <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-[#FBF9F5] sm:text-3xl">
              Begin creating the change you&apos;re ready for.
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#FBF9F5]/70">
              Join live online from anywhere in the world
            </p>
            <a
              href="/experience-it-free"
              // target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E6B055] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0D3C38] transition-colors hover:bg-[#C48F3A]"
            >
              Experience It Free
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="border-t border-white/10 pt-8 md:col-span-2 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E6B055]">
              Private Consultations
            </h4>
            <div className="mt-5 space-y-4 text-sm font-medium text-[#FBF9F5]/80">
              <span className="flex items-start gap-3">
                <Globe className="h-4 w-4 text-[#E6B055]" />
                <span>
                  Worldwide Online Consultations
                </span>
              </span>
              <span className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#E6B055]" />
                <a href="tel:+447429519990" className="transition-colors hover:text-white">
                  +44 7429 519990
                </a>
              </span>
              <span className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#E6B055]" />
                <a href="mailto:contact@ilagarg.com" className="transition-colors hover:text-white">
                  contact@ilagarg.com
                </a>
              </span>
              <span className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#E6B055]" />
                <span>
                  By Appointment Only
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* 3. Bottom Legal & Scroll Top Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#FBF9F5]/60 font-medium">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#FBF9F5]/80 md:justify-start">
            <span>© {currentYear} Ila Garg. All rights reserved.</span>
            <span className="text-white/20">|</span>
            <Link href="/privacy-policy" className="transition-colors hover:text-[#E6B055]">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="transition-colors hover:text-[#E6B055]">
              Terms &amp; Conditions
            </Link>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-[#FBF9F5] transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm group shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}