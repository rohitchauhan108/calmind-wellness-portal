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
import LastingChange from "../components/home/LastingChange";
import NewTestimonials from "../components/home/NewTestimonials";
export default function Home() {
  return (
    <div className="theme-page relative min-h-screen bg-[#FBF9F5] overflow-x-hidden">
      {/* Sticky glassmorphism header navigation */}

      {/* Main layout contents in the strict requested order */}
      <main id="app-main">
        <Hero />
        <Meet />
        {/* <LastingChange /> */}
        <Infomativecta/>


 
        



        <NewTestimonials />

        <Services />

        <MeetUs />
        <CTA />

      </main>
    </div>
  );
}
