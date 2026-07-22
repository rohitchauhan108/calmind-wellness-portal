"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "#about",
      dropdown: [
        { 
          label: "Meet Ila Garg", 
          href: "#about", 
          description: "Discover her journey & expertise" 
        },
        { 
          label: "Our Philosophy", 
          href: "#about", 
          description: "Core values & approach to healing" 
        },
      ],
    },
    {
      label: "Services",
      href: "#services",
      dropdown: [
        { 
          label: "Life Coaching", 
          href: "#services", 
          description: "Personalized guidance & goal clarity" 
        },
        { 
          label: "Energy Healing", 
          href: "#services", 
          description: "Balance & restore your emotional flow" 
        },
        { 
          label: "Graphotherapy", 
          href: "#services", 
          description: "Handwriting analysis for self-growth" 
        },
        { 
          label: "Root-Cause Diagnosis", 
          href: "#services", 
          description: "Identify subconscious patterns" 
        },
      ],
    },
    { label: "Areas We Help", href: "#areas" },
    { label: "Programs", href: "#programs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. Top Announcement / Info Bar */}
      <div
        className={`bg-brand-espresso text-brand-beige/80 text-xs transition-all duration-300 overflow-hidden ${
          isScrolled
            ? "max-h-0 opacity-0 py-0"
            : "max-h-12 py-2.5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Gurgaon, Haryana, India (Worldwide Online)</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              <span>Mon — Sat: 08:00 - 18:00 (IST)</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>+91 98765 43210</span>
            </a>
            <div className="h-3 w-[1px] bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-3 text-brand-beige/70">
              <a
                href="#"
                className="hover:text-brand-cream transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="hover:text-brand-cream transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? " py-3 shadow-md z-999 bg-brand-cream"
            : "bg-brand-cream py-4 border-b border-brand-burgundy/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Name (Placeholder for new logo) */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <span className="font-serif text-xl font-bold md:text-2xl text-brand-burgundy transition-colors duration-300">
              Ila Garg
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="font-sans text-[15px] font-medium text-brand-espresso hover:text-brand-burgundy flex items-center gap-1.5 py-1 transition-colors duration-200"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-brand-burgundy/70 transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180 text-brand-burgundy" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Enhanced Submenu Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 w-72 pt-2 z-50"
                    >
                      <div className="bg-brand-warm-white/95 backdrop-blur-md shadow-xl rounded-2xl p-2.5 border border-brand-burgundy/15 overflow-hidden relative">
                        {/* Top Accent Gradient Bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-burgundy/40 via-brand-burgundy to-brand-burgundy/40" />

                        <div className="space-y-1 pt-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-brand-beige/80 hover:shadow-sm"
                            >
                              <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-brand-burgundy/40 group-hover/item:bg-brand-burgundy group-hover/item:scale-125 transition-all" />
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-semibold text-brand-espresso group-hover/item:text-brand-burgundy transition-colors">
                                    {subItem.label}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-brand-burgundy opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                                </div>
                                {subItem.description && (
                                  <p className="text-xs text-brand-espresso/60 mt-0.5 font-sans leading-tight">
                                    {subItem.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#contact"
              className="font-sans text-[14px] font-medium px-6 py-2.5 rounded-full border border-brand-espresso/30 text-brand-espresso hover:bg-brand-burgundy hover:border-brand-burgundy hover:text-brand-cream transition-all duration-300 shadow-sm flex items-center gap-2 group"
            >
              <span>Book a Session</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-espresso hover:text-brand-burgundy transition-colors rounded-lg"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* 3. Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-warm-white border-b border-brand-burgundy/10 px-6 py-6 space-y-3 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-brand-burgundy/10 pb-2">
                <div className="flex items-center justify-between py-1">
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-base font-medium text-brand-espresso"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label
                        )
                      }
                      className="p-1 text-brand-burgundy"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu Accordion */}
                {item.dropdown && mobileExpanded === item.label && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-brand-burgundy/20 py-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 text-sm font-medium text-brand-espresso/80 hover:text-brand-burgundy"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 font-sans text-sm font-medium w-full py-3 rounded-full bg-brand-burgundy text-brand-cream hover:bg-brand-burgundy-dark transition-colors shadow-sm"
              >
                <span>Book a Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}