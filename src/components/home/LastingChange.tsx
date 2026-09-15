"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function LastingChange() {
  return (
    <section className="relative overflow-hidden bg-[#F8EEE4] px-4 py-14 text-[#0D3C38] sm:px-6 sm:py-20 md:px-12 md:py-24">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <circle cx="28%" cy="50%" r="20%" fill="none" stroke="#0D3C38" strokeOpacity="0.12" />
          <circle cx="28%" cy="50%" r="30%" fill="none" stroke="#0D3C38" strokeOpacity="0.1" />
          <circle cx="28%" cy="50%" r="40%" fill="none" stroke="#0D3C38" strokeOpacity="0.08" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(#0D3C38_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-5 text-left sm:space-y-6 md:space-y-7 lg:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[26px] font-bold leading-[1.08] tracking-tight text-[#0D3C38] sm:text-4xl md:text-5xl"
          >
            Lasting change <br className="sm:hidden" /> starts within.
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-lg font-semibold leading-tight text-[#0D3C38]/90 sm:text-2xl md:text-3xl"
          >
            Do you want more from your life?
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-1.5 text-[14px] font-medium leading-[1.6] text-[#0D3C38]/85 sm:space-y-2 sm:text-lg md:text-xl"
          >
            <p>More in your health.</p>
            <p>More in your relationships.</p>
            <p>More in your career.</p>
            <p>More money.</p>
            <p>More confidence.</p>
            <p className="leading-[1.45] sm:leading-relaxed">More of the person you know you can be.</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-lg border-l-2 border-[#E6B055] py-1 pl-4 font-serif text-[13px] italic leading-[1.6] text-[#0D3C38] sm:pl-5 sm:text-base md:text-xl sm:leading-relaxed"
          >
            Change your inner world. Change what becomes possible in your outer world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-start sm:gap-4 sm:pt-1"
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

        <div className="relative mt-2 sm:mt-4 lg:col-span-5 lg:mt-0">
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] lg:ml-auto lg:max-w-[440px]"
          >
            <div className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-[24px] bg-gradient-to-br from-[#0D3C38]/20 to-[#0D3C38]/10 blur-sm sm:translate-x-3 sm:translate-y-3 sm:rounded-[32px]" />

            <motion.div
              className="absolute -left-4 top-8 z-30 hidden max-w-[180px] items-center gap-2.5 rounded-xl border border-[#0D3C38]/10 bg-white/90 p-2.5 shadow-lg backdrop-blur-xl sm:flex sm:-left-8 sm:top-12 sm:max-w-[210px] sm:gap-3 sm:rounded-2xl sm:p-3.5 sm:shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0D3C38]/10 text-[#0D3C38] sm:h-10 sm:w-10 sm:rounded-xl">
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-[#0D3C38] sm:text-xs">Subconscious Shift</h4>
                <p className="text-[9px] leading-tight text-[#0D3C38]/70 sm:text-[11px]">Identify root patterns</p>
              </div>
            </motion.div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border-2 border-white/90 bg-white shadow-xl sm:rounded-[28px] sm:border-4 sm:shadow-2xl">
              <Image
                src="/founder.jpeg"
                alt="Ila Garg - Transformation Expert"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D3C38]/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
