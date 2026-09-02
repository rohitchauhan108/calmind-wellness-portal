"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
  Phone,
  ArrowRight,
  Mail,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isPathActive = (href: string) => {
    const normalize = (p: string) => p.replace(/\/+$/, '') || '/';
    return normalize(pathname) === normalize(href);
  };

  // Handle sticky header & hide/show on scroll up/down
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
        setActiveDropdown(null);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type NavItem = {
    label: string;
    href: string;
    dropdown?: Array<{
      label: string;
      href: string;
      description?: string;
    }>;
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Private Coaching", href: "/private-coaching" },
    { label: "Graphotherapy", href: "/graphotherapy" },
    { label: "Membership", href: "/membership" },
    { label: "Events", href: "/events" },
    { label: "Free Offerings", href: "/free-offerings" },
    { label: "Login", href: "/login" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* 1. Top Announcement / Info Bar */}
      <div
        className={`bg-brand-forest text-brand-ivory/80 text-xs transition-all duration-300 overflow-hidden ${
          isScrolled
            ? "max-h-0 opacity-0 py-0"
            : "max-h-12 py-2.5 border-b border-white/10"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-end">
          <div className="flex items-center gap-5">
            <a
              href="mailto:contact@ilagarg.com"
              className="hidden md:flex items-center gap-1.5 hover:text-brand-copper transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-copper" />
              <span>contact@ilagarg.com</span>
            </a>
            <div className="h-3 w-[1px] bg-white/20 hidden md:block" />
            <a
              href="tel:+447429519990"
              className="hidden sm:flex items-center gap-1.5 hover:text-brand-copper transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-copper" />
              <span>+44 7429 519990</span>
            </a>

            <div className="h-3 w-[1px] bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-3 text-brand-ivory/70">
              <a href="https://www.facebook.com/ilagargofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ivory transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/ilagargofficial?igsi=dHdyOWplcTY2aW12" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ivory transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.youtube.com/@ilagargofficial" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ivory transition-colors" aria-label="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "py-3 shadow-md z-50 bg-brand-ivory/95 backdrop-blur-md"
            : "bg-brand-ivory py-4 border-b border-brand-forest/10"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/logo.png"
              alt="Ila Garg Logo"
              width={140}
              height={40}
              className="object-contain h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => {
              const isActive = isPathActive(item.href);
              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`font-sans text-[15px] flex items-center gap-1.5 py-1 transition-all duration-200 tracking-wide ${
                      isActive
                        ? "text-brand-forest font-bold"
                        : "text-brand-charcoal font-medium hover:text-brand-forest hover:font-semibold"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-brand-forest/70 transition-transform duration-300 ${
                          activeDropdown === item.label
                            ? "rotate-180 text-brand-forest"
                            : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Clean Single Active Indicator Bar */}
                  {isActive && (
                    <motion.span
                      layoutId="desktopNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-copper rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Submenu Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 w-72 pt-2 z-50"
                      >
                        <div className="bg-brand-warm-white backdrop-blur-md shadow-xl rounded-2xl p-2.5 border border-brand-forest/15 overflow-hidden relative">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-forest/40 via-brand-forest to-brand-forest/40" />

                          <div className="space-y-1 pt-1">
                            {item.dropdown.map((subItem) => {
                              const isSubActive = isPathActive(subItem.href);
                              return (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className={`group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 ${
                                    isSubActive
                                      ? "bg-brand-forest/10"
                                      : "hover:bg-brand-ivory hover:shadow-sm"
                                  }`}
                                >
                                  <div
                                    className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full transition-all ${
                                      isSubActive
                                        ? "bg-brand-forest scale-125"
                                        : "bg-brand-forest/40 group-hover/item:bg-brand-copper group-hover/item:scale-125"
                                    }`}
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <span
                                        className={`text-sm font-semibold transition-colors ${
                                          isSubActive
                                            ? "text-brand-forest"
                                            : "text-brand-charcoal group-hover/item:text-brand-forest"
                                        }`}
                                      >
                                        {subItem.label}
                                      </span>
                                      <ArrowRight className="w-3.5 h-3.5 text-brand-copper opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                                    </div>
                                    {subItem.description && (
                                      <p className="text-xs text-brand-charcoal-muted mt-0.5 font-sans leading-tight">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://calendly.com/ilagarg-official/clarity-call-with-ila"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[14px] font-medium px-6 py-2.5 rounded-full border border-brand-forest/30 text-brand-forest hover:bg-brand-forest hover:border-brand-forest hover:text-brand-ivory transition-all duration-300 shadow-sm flex items-center gap-2 group"
            >
              <span>Book a Session</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-charcoal hover:text-brand-forest transition-colors rounded-lg"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-brand-warm-white border-b border-brand-forest/10 px-6 py-6 space-y-3 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            {navItems.map((item) => {
              const isActive = isPathActive(item.href);
              return (
                <div key={item.label} className="border-b border-brand-forest/10 pb-2">
                  <div className="flex items-center justify-between py-1">
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-sans text-base font-medium ${
                        isActive ? "text-brand-forest font-bold" : "text-brand-charcoal"
                      }`}
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
                        className="p-1 text-brand-forest"
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
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-brand-copper/40 py-1">
                      {item.dropdown.map((subItem) => {
                        const isSubActive = isPathActive(subItem.href);
                        return (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-1 text-sm font-medium ${
                              isSubActive
                                ? "text-brand-forest font-semibold"
                                : "text-brand-charcoal-muted hover:text-brand-forest"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-3">
              <a
                href="https://calendly.com/ilagarg-official/clarity-call-with-ila"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 font-sans text-sm font-medium w-full py-3 rounded-full bg-brand-forest text-brand-ivory hover:bg-brand-forest-dark transition-colors shadow-sm"
              >
                <span>Book a Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}