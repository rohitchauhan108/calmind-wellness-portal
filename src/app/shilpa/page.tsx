'use client';

import React from 'react';
import Image from 'next/image';

export default function ShilpaPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0D3B36] selection:bg-[#0D3B36] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Editorial Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0D3B36]"></span>
          <span className="text-xs font-mono font-bold tracking-widest uppercase">Shilpa • Graphotherapy</span>
        </div>
        <a 
          href="#shilpa" 
          className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#0D3B36]/20 hover:bg-[#0D3B36] hover:text-white transition-all duration-300"
        >
          Explore Section ↓
        </a>
      </header>

      {/* SECTION */}
      <section
        id="shilpa"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-[#F8FAF9] to-white px-6 py-28 lg:px-16 lg:py-40"
      >
        {/* Subtle background texture grid */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0D3B36_1px,transparent_1px)] opacity-[0.03] [background-size:24px_24px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          
          {/* Top Hero Headline */}
          <div className="mb-16 max-w-4xl space-y-5">
            <span className="inline-flex items-center rounded-full bg-[#0D3B36]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0D3B36]">
              Meet Shilpa
            </span>

            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]">
              From Patterns to{" "}
              <span className="font-serif font-normal italic text-emerald-700">
                Possibility.
              </span>
            </h2>

            <p className="max-w-2xl text-xl leading-relaxed text-[#0D3B36]/75 font-light">
              My journey into Graphology and Graphotherapy is quite different
              from what people might expect.
            </p>
          </div>

          {/* TWO-COLUMN GRID CONTAINER FOR SECTIONS 1, 2, AND 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* COLUMN 1: Profile & Core Philosophy (Width: 4/12) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <div className="rounded-[2.5rem] border border-[#0D3B36]/15 bg-white p-3 shadow-xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#F2F5F3]">
                  <Image
                    src="/shilpha.jpeg"
                    alt="Shilpa - Graphotherapist and Handwriting Expert"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="p-6 text-center lg:text-left">
                  <span className="mb-2 inline-block rounded-full bg-[#0D3B36]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0D3B36]">
                    Practitioner Profile
                  </span>
                  <h3 className="text-2xl font-bold text-[#0D3B36]">Shilpa</h3>
                  <p className="mt-1 text-sm font-medium text-[#0D3B36]/60">
                    Graphology &amp; Graphotherapy Practitioner
                  </p>
                </div>
              </div>

              {/* Sticky Core Philosophy Box */}
              <div className="rounded-[2rem] border border-[#0D3B36]/10 bg-[#0D3B36] p-8 text-white shadow-lg space-y-3">
                <p className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-300">
                  Core Philosophy
                </p>
                <p className="font-serif text-xl italic leading-relaxed text-emerald-50">
                  “Awareness followed by action. A conversation with yourself.”
                </p>
              </div>
            </div>

            {/* COLUMN 2: Two-Grid Layout for Content Sections 01, 02, 03 (Width: 8/12) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* CARD 01 */}
              <article className="md:col-span-2 rounded-[2.5rem] border border-[#0D3B36]/10 bg-white p-8 sm:p-10 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D3B36]/10 font-mono text-xs font-bold text-[#0D3B36]">
                    01
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0D3B36]/40">Background</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[#0D3B36] mb-4">
                  What I was doing before this
                </h3>

                <div className="space-y-4 text-base leading-[1.8] text-[#0D3B36]/75 font-light">
                  <p>
                    My professional background has largely been in the corporate and technology world, where I worked in software testing and quality assurance—a world built around logic, analysis, and patterns.
                  </p>
                  <p>
                    I have always been curious about why people repeat certain patterns despite wanting change. That curiosity eventually led me toward handwriting.
                  </p>
                </div>
              </article>

              {/* CARD 02 */}
              <article className="rounded-[2.25rem] border border-[#0D3B36]/10 bg-white p-7 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0D3B36]/10 font-mono text-xs font-bold text-[#0D3B36]">
                      02
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0D3B36]/40">Discovery</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#0D3B36] mb-3">
                    How I became interested
                  </h3>

                  <p className="text-sm leading-relaxed text-[#0D3B36]/75 font-light">
                    Handwriting actions—pressure, slants, spacing, and formations—act as behavioral indicators. Graphotherapy goes further by using intentional handwriting exercises for personal development.
                  </p>
                </div>
              </article>

              {/* CARD 03 */}
              <article className="rounded-[2.25rem] border border-[#0D3B36]/10 bg-[#F2F5F3] p-7 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0D3B36] font-mono text-xs font-bold text-white">
                      03
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0D3B36]/40">Depth</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#0D3B36] mb-3">
                    Going deeper into the work
                  </h3>

                  <p className="text-sm leading-relaxed text-[#0D3B36]/75 font-light">
                    Human behavior is layered. Old patterns persist even when we consciously want change. Graphology looks at combinations and intensities rather than quick individual judgments.
                  </p>
                </div>
              </article>

            </div>

          </div>

          {/* FULL WIDTH SECTIONS 04 AND 05 */}
          <div className="mt-12 space-y-12">
            
            {/* CARD 04 (Full Width) */}
            <article className="rounded-[2.5rem] border border-[#0D3B36]/10 bg-white p-8 sm:p-12 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D3B36]/10 font-mono text-xs font-bold text-[#0D3B36]">
                  04
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#0D3B36]/40">Purpose</span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-[#0D3B36] mb-6">
                Why I decided to help others through it
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-base leading-[1.8] text-[#0D3B36]/75 font-light">
                  <p>
                    What ultimately drew me towards working with others was seeing how powerful self-awareness can be. People often struggle with confidence, boundaries, or emotional reactions without understanding the pattern behind it.
                  </p>
                  <p>
                    I work with adults as well as children, because our handwriting develops alongside us through different stages of life. With children especially, the emphasis should always be on development and encouragement rather than labelling them.
                  </p>
                </div>

                <div className="rounded-3xl bg-[#0D3B36] p-8 text-center text-white shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Core Meaning</p>
                  <p className="mt-4 font-serif text-3xl italic leading-relaxed">
                    Awareness followed by action.
                  </p>
                </div>
              </div>
            </article>

            {/* CARD 05 (Full Width) */}
            <article className="rounded-[2.5rem] border border-[#0D3B36]/10 bg-[#F2F5F3] p-8 sm:p-12 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D3B36] font-mono text-xs font-bold text-white">
                  05
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#0D3B36]/40">Perspective</span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-[#0D3B36] mb-6">
                What I would like people to understand about me and my work
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-6 space-y-5 text-base leading-[1.85] text-[#0D3B36]/75 font-light">
                  <p>
                    The most important thing I would like people to understand is that I don&apos;t see Graphology as a way of judging someone. I see it as a conversation with yourself.
                  </p>
                  <p>
                    Graphotherapy isn&apos;t about creating beautiful handwriting. It is about intentional change through the act of writing.
                  </p>
                  <p>
                    Graphology and Graphotherapy can be used as complementary tools for self-awareness and personal development; they are not replacements for medical or mental-health diagnosis or treatment.
                  </p>
                </div>

                {/* Questions Box */}
                <div className="lg:col-span-6 rounded-3xl bg-white p-8 border border-[#0D3B36]/10 shadow-sm space-y-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D3B36]/50">
                    Sometimes the smallest patterns ask the biggest questions
                  </p>

                  <div className="space-y-3 font-serif text-xl italic leading-relaxed text-[#0D3B36]">
                    <p>✦ Why do I respond this way?</p>
                    <p>✦ What am I holding on to?</p>
                    <p>✦ What would I like to change?</p>
                    <p>✦ And who could I become if I started consciously working on those patterns?</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center pt-8 border-t border-[#0D3B36]/10">
                <p className="font-serif text-3xl font-semibold italic text-[#0D3B36]">
                  It becomes a journey of self-discovery, awareness and evolution.
                </p>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#0D3B36]/10 text-center text-xs font-mono uppercase tracking-widest text-[#0D3B36]/50 bg-white">
        <p>© {new Date().getFullYear()} Shilpa. Designed with structured full-width sections.</p>
      </footer>
    </div>
  );
}