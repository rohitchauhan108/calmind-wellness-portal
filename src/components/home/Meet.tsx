import React from 'react'
import Link from "next/link";
import Image from "next/image"; // <-- Added this import

function Meet() {
  return (
    <>
    <section id="ila" className="relative scroll-mt-32 overflow-hidden py-20 lg:py-28 px-6 lg:px-12 bg-[#F2F5F3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D3B36]/5 border border-[#0D3B36]/15 text-[#0D3B36] text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D3B36]" />
              Meet Ila Garg
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D3B36] leading-[1.15]">
              Understand your mind. <br />
              <span className="font-serif italic font-normal relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#E6B055] to-[#B28532]">
                Break limiting patterns. Reclaim your life.
              </span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#0D3B36]/75 max-w-2xl font-normal">
              Life&apos;s biggest challenges rarely exist in isolation.
              Difficult relationships, career uncertainty, financial stress, and
              low confidence influence one another. We help you identify root
              causes, overcome limiting patterns, and create lasting positive
              change.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0D3B36] text-white font-medium shadow-md hover:bg-[#072723] transition-all duration-300 gap-2"
              >
                Begin Your Journey &rarr;
              </Link>
              <Link
                href="/how-we-help"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#0D3B36]/20 text-[#0D3B36] font-medium hover:bg-[#0D3B36]/5 transition-all duration-300"
              >
                Discover How We Help
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white aspect-[4/5] border border-[#0D3B36]/10">
                <Image
                  src="/founder.jpeg"
                  alt="Holistic personal transformation and growth with Ila Garg"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default Meet