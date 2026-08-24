"use client";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Programs from "../components/home/Programs";
import Testimonials from "../components/home/Testimonials";
import Statistics from "../components/home/Statistics";
import SupportCategories from "../components/home/SupportCategories"

import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-cream overflow-x-hidden">
      {/* Sticky glassmorphism header navigation */}

      {/* Main layout contents in the strict requested order */}
      <main id="app-main">
        {/* 1. Hero */}
        <Hero />

       <SupportCategories/>


        {/* 2. Testimonials */}
        <Testimonials />

        {/* 3. Services */}
        <Services />


        {/* 4. Programs */}
        <Programs />

        {/* 5. CTA */}
        <CTA />
      </main>
    </div>
  );
}
