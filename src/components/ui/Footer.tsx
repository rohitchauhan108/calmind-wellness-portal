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

  const servicesList = [
    { name: 'Private Coaching', href: '/private-coaching' },
    { name: 'Graphotherapy', href: '/graphotherapy' },
    { name: 'Membership', href: '/membership' },
    { name: 'Events', href: '/events' },
    { name: 'Free Offerings', href: '/free-offerings' },
  ];

  const quickLinks = [
    { name: 'About Ila', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Frequently Asked Questions', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer id="footer" className="bg-[#073E42] text-[#FBF9F5] pt-16 pb-12 relative overflow-hidden font-sans border-t border-white/10">
      
      {/* Subtle Glowing Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#E6B055]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="mb-16 rounded-[30px] border border-[#d8b77d]/50 bg-[#f6efe8] p-5 shadow-[0_18px_50px_rgba(7,62,66,0.08)] md:p-8">
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
        </div>
        
        {/* 2. Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="Ila Garg Logo"
                width={140}
                height={40}
                className="object-contain h-28 w-auto rounded-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>

            <p className="text-sm font-medium text-[#FBF9F5]/70 leading-relaxed max-w-sm">
              A holistic personal transformation practice integrating Life Coaching, subtle Energy Healing, and Graphotherapy to help you dissolve subconscious blocks and live with clarity.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.facebook.com/ilagargofficial/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FBF9F5] hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://www.instagram.com/ilagargofficial?igsi=dHdyOWplcTY2aW12" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FBF9F5] hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://www.youtube.com/@ilagargofficial" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FBF9F5] hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E6B055]">Services</h4>
            <ul className="space-y-3 text-sm font-medium text-[#FBF9F5]/80">
              {servicesList.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E6B055]">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium text-[#FBF9F5]/80">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Consultations (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-sm font-medium text-[#FBF9F5]/80">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E6B055]">Private Consultations</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#E6B055] shrink-0" />
                <span className="leading-relaxed">
                  Worldwide Online Consultations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E6B055] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  <a href="tel:+447429519990" className="hover:text-white transition-colors block">
                    +44 7429 519990
                  </a>

                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E6B055] shrink-0" />
                <a href="mailto:contact@ilagarg.com" className="hover:text-white transition-colors">
                  contact@ilagarg.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E6B055] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  By Appointment Only
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3. Bottom Legal & Scroll Top Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#FBF9F5]/60 font-medium">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 text-xs text-[#FBF9F5]/80 mb-2">
              <p>© {currentYear} Ila Garg. All rights reserved.</p>
              <span className="text-white/20 hidden sm:inline">•</span>

              <Link href="/success-stories" className="hover:text-[#E6B055] transition-colors underline-offset-4 hover:underline">
                Success Stories
              </Link>
              <span className="text-white/20">•</span>

              <Link href="/faq" className="hover:text-[#E6B055] transition-colors underline-offset-4 hover:underline">
                FAQ
              </Link>
              <span className="text-white/20">•</span>

              <Link href="/contact" className="hover:text-[#E6B055] transition-colors underline-offset-4 hover:underline">
                Contact
              </Link>
              <span className="text-white/20">•</span>

              <Link href="/privacy-policy" className="hover:text-[#E6B055] transition-colors underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>

              <Link href="/terms" className="hover:text-[#E6B055] transition-colors underline-offset-4 hover:underline">
                Terms &amp; Conditions
              </Link>
              <span className="text-white/20">•</span>

              <Link href="/refund-policy" className="hover:text-[#E6B055] transition-colors underline-offset-4 hover:underline">
                Refund &amp; Cancellation Policy
              </Link>
              <span className="text-white/20">•</span>

              <Link href="/medical-disclaimer" className="hover:text-[#E6B055] transition-colors underline-offset-4 hover:underline">
                Disclaimer
              </Link>
            </div>

            <p className="text-[11px] text-[#FBF9F5]/50 max-w-2xl leading-relaxed">
              Disclosures: Ila Garg&apos;s coaching, graphotherapy, and healing programs represent professional wellness methodologies designed for lifestyle integration, self-understanding, and emotional healing. All consultations are held under strict confidentiality guidelines.
            </p>
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