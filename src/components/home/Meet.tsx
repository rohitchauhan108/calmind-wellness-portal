import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Meet() {
  return (
    <section
      id="ila"
      className="relative scroll-mt-32 overflow-hidden bg-gradient-to-br from-[#FBF9F5] via-[#F7EAD0] to-[#E6B055]/25 px-6 py-20 lg:px-12 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-[#0D3C38] sm:text-5xl lg:text-6xl leading-[1.15]">
            Understand your mind. <br />
            <span className="font-serif italic font-normal relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#E6B055] to-[#C48F3A] sm:text-2xl lg:text-4xl">
              Break limiting patterns. Reclaim your life.
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[#0D3C38]/75 max-w-2xl font-normal">
            Life&apos;s biggest challenges rarely exist in isolation. Difficult
            relationships, career uncertainty, financial stress, and low
            confidence influence one another. We help you identify root causes,
            overcome limiting patterns, and create lasting positive change.
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[20px] font-bold leading-[1.08] tracking-tight text-[#0D3C38] sm:text-2xl md:text-4xl pt-2"
          >
            <div>
              <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-[#0D3C38] px-3.5 py-1.5 rounded-lg mb-4 shadow-sm">
                WE BELIEVE
              </span>
            </div>
            Lasting change <br className="sm:hidden" /> starts within.
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-lg font-semibold leading-tight text-[#0D3C38]/90 sm:text-xl md:text-2xl"
          >
            Do you want more from your life?
          </motion.h3>

          {/* Two-Column Grid with Custom List Dots */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[14px] font-medium leading-[1.6] text-[#0D3C38]/85 sm:text-lg md:text-xl"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#E6B055]" />
              <p>More in your health.</p>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#E6B055]" />
              <p>More in your career.</p>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#E6B055]" />
              <p>More money.</p>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#E6B055]" />
              <p>More confidence.</p>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#E6B055]" />
              <p>More in your relationships.</p>
            </div>

            {/* Full-width concluding line */}
            <div className="sm:col-span-2 flex items-center gap-2.5 pt-1">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#0D3C38]" />
              <p className="leading-[1.45] sm:leading-relaxed text-[#0D3C38] font-medium">
                More of the person you know you can be.
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-lg border-l-3 border-[#E6B055] py-1 pl-4 font-serif text-[13px] italic leading-[1.6] text-[#0D3C38] sm:pl-5 sm:text-base md:text-xl sm:leading-relaxed"
          >
            Change your inner world. Change what becomes possible in your outer
            world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-stretch gap-3 pt-4 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="/#ways-to-work-with-us"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0D3C38] px-6 py-3.5 text-[13px] font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#08292C] hover:shadow-[#0D3C38]/25 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              <span>Explore How I Can Help</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white shadow-xl border border-[#0D3C38]/10">
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
    </section>
  );
}

export default Meet;
