"use client"

import React, { useState } from 'react'
import Link from "next/link";
export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      category: 'Graphotherapy',
      question: 'What is Graphotherapy and how does it work?',
      answer: 'Graphotherapy is a scientifically-backed technique based on handwriting analysis (graphology). By consciously modifying specific strokes and letter formations in your handwriting over time, you can restructure subconscious neural pathways, helping to eliminate limiting beliefs, reduce stress, and cultivate positive habits.'
    },
    {
      category: 'Graphotherapy',
      question: 'How long does it take to see results with Graphotherapy?',
      answer: 'Most clients begin to notice internal shifts and changes in their habits within 21 to 30 days of consistent practice. Because it rewires subconscious patterns through daily exercises, lasting transformation typically solidifies over a 90-day program.'
    },
    {
      category: 'Graphotherapy',
      question: 'Do I need good handwriting to start Graphotherapy?',
      answer: 'Not at all! Graphotherapy is not about having "neat" or artistic handwriting. It is strictly about specific stroke formations, angles, and spacing designed to trigger psychological and neurological shifts, regardless of your current writing style.'
    },
    {
      category: 'Energy Healing',
      question: 'What is Energy Healing and how does it complement coaching?',
      answer: 'Energy healing works with the body’s subtle energy fields to release emotional blockages, reduce energetic stagnation, and restore balance. When combined with traditional coaching and Graphotherapy, it clears deep-seated emotional baggage that mental strategies alone might miss.'
    },
    {
      category: 'Energy Healing',
      question: 'What can I expect during an Energy Healing session?',
      answer: 'Sessions are deeply relaxing and non-invasive. You will be guided to rest comfortably while we work to clear energetic blocks, rebalance your chakras, and restore inner harmony, often leaving you feeling grounded, light, and emotionally renewed.'
    },
    {
      category: 'Sessions & Privacy',
      question: 'Are coaching sessions held online or in-person?',
      answer: 'All of our coaching, Graphotherapy consultations, and energy healing sessions are available fully online via secure video conferencing platforms, allowing you to participate comfortably from anywhere in the world.'
    },
    {
      category: 'Sessions & Privacy',
      question: 'How confidential are my sessions and personal information?',
      answer: 'Strict confidentiality is our top priority. Everything shared during your sessions, as well as your handwriting samples and personal data, is kept completely private and secure under professional ethical standards.'
    },
    {
      category: 'Sessions & Privacy',
      question: 'Who can benefit from your personalized transformation programs?',
      answer: 'Our programs are designed for anyone feeling stuck, overwhelmed, or seeking growth across relationships, career, finances, health, confidence, or personal purpose. Whether you are navigating a major life transition or aiming for self-mastery, our holistic framework adapts to your unique goals.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1B3022] antialiased selection:bg-[#C2783F]/20 selection:text-[#1B3022]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden py-24 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-[#1B3022]/5 via-[#FAF8F5] to-[#FAF8F5]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#C2783F]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C2783F]/10 border border-[#C2783F]/25 text-[#C2783F] text-xs font-semibold tracking-wider uppercase mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#C2783F] animate-pulse" />
            Support & Clarity
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1B3022] leading-[1.1]">
            Frequently Asked <span className="text-[#C2783F] italic font-serif">Questions</span>
          </h1>

          <p className="text-lg text-[#1B3022]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our coaching, Graphotherapy, Energy Healing, and personalized transformation programs.
          </p>
        </div>
      </section>

      {/* ================= FAQ SIMPLE LIST SECTION ================= */}
      <section className="relative pb-24 pt-8 px-6 lg:px-12 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'bg-white border-[#C2783F] shadow-lg shadow-[#1B3022]/5' : 'bg-white/60 border-[#1B3022]/10 hover:border-[#1B3022]/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-widest text-[#C2783F] uppercase">
                      {faq.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1B3022] tracking-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#C2783F] text-white shadow-sm' : 'bg-[#1B3022]/5 text-[#1B3022]'}`}>
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[#1B3022]/80 text-base leading-relaxed font-light border-t border-[#1B3022]/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-20 px-6 lg:px-12 bg-white border-t border-[#1B3022]/5">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#1B3022] text-[#FAF8F5] shadow-2xl overflow-hidden text-center space-y-6">
            <div className="absolute top-0 left-0 w-48 h-48 bg-[#C2783F]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#C2783F]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                Still have questions?
              </h3>
              <p className="text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed font-light">
                Reach out to our team directly and take the first step toward your personal transformation journey.
              </p>
            </div>

            <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C2783F] text-white font-semibold shadow-lg shadow-[#C2783F]/25 hover:bg-[#C2783F]/90 transition-all duration-300 text-sm text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}