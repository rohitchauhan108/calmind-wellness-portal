"use client";

import Hero from '../components/home/Hero';
import CategoryCards from '../components/home/CategoryCards';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Features from '../components/home/Features';
import Programs from '../components/home/Programs';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import Statistics from '../components/home/Statistics';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-cream overflow-x-hidden">
      {/* Sticky glassmorphism header navigation */}

      {/* Main layout contents in the strict requested order */}
      <main id="app-main">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Category Cards */}
        <CategoryCards />

        {/* 3. Services */}
        <Services />

        {/* 4. About */}
        <About />

        {/* 5. Why Choose Us (Features) */}
        <Features />

        {/* 6. Programs */}
        <Programs />

        {/* 7. Process (How It Works) */}
        <HowItWorks />

      

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Statistics */}
        <Statistics />

        {/* 11. FAQ */}
        <FAQ />

        {/* 12. CTA */}
        <CTA />

      </main>

    </div>
  );
}
