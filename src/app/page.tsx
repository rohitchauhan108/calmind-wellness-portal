"use client";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import SupportCategories from "../components/home/SupportCategories";
import Infomativecta from "../components/home/Informativecta";
// import About from "../components/home/About";
import MeetUs from "../components/home/MeetUs";

import CTA from "../components/home/CTA";
import Meet from "../components/home/Meet";
import NewTestimonials from "../components/home/NewTestimonials";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-cream overflow-x-hidden">
      {/* Sticky glassmorphism header navigation */}

      {/* Main layout contents in the strict requested order */}
      <main id="app-main">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Meet Ila */}
        <Meet />
 
        

       {/* <SupportCategories/> */}

        {/* 2. About & Meet Us */}
        {/* <About /> */}

        {/* 3. Testimonials */}
        {/* <Testimonials /> */}
        <NewTestimonials />

        {/* 4. Services */}
        <Services />

        {/* 5. Meet Us */}
        <MeetUs />

        <Infomativecta/>
      </main>
    </div>
  );
}
