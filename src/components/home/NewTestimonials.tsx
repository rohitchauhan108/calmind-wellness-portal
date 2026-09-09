import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";

export default function Testimonials() {
  const stories = [
    {
      tagline: "A beautiful and meaningful experience",
      quote:
        "Working with Ila was such a beautiful and meaningful experience for me. From the very beginning, she was so warm, loving, and easy to connect with. I always felt comfortable being open and sharing what I was experiencing because she listened with so much presence and understanding.\n\nOne of the biggest shifts for me came through the abundance meditation and visualization we worked on together. Before, abundance was something I understood intellectually, but after working with Ila, I learned how to actually feel it within me. Now, it feels much more natural and easy for me to connect with a feeling of abundance in my everyday life.\n\nWhat I especially appreciate about Ila is the way she creates a safe space to explore, while also openly sharing her own experiences and insights. Her openness, courage, warmth, and genuine way of connecting made the whole experience feel very real and empowering.\n\nI’m truly grateful for the support and the shift I experienced through our work together. ❤️",
      author: "Anamika",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-28 bg-[#073E42] relative overflow-hidden text-[#FBF9F5]"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <filter id="noiseFilterStories">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilterStories)"
          />
        </svg>
      </div>

      {/* Concentric Geometric Ring - Top Right */}
      <svg
        className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] text-[#E6B055]/10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
      >
        <circle cx="50" cy="50" r="15" />
        <circle cx="50" cy="50" r="28" />
        <circle cx="50" cy="50" r="42" />
        <circle cx="50" cy="50" r="55" />
      </svg>

      {/* Concentric Geometric Ring - Bottom Left */}
      <svg
        className="absolute -bottom-16 -left-16 sm:-bottom-20 sm:-left-20 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] text-[#E6B055]/8"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
      >
        <circle cx="50" cy="50" r="18" />
        <circle cx="50" cy="50" r="32" />
        <circle cx="50" cy="50" r="46" />
        <circle cx="50" cy="50" r="58" />
      </svg>

      {/* Soft Ambient Glow */}
      <div className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 w-[350px] h-[300px] sm:w-[500px] sm:h-[400px] bg-[#E6B055]/10 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E6B055_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4"
        >
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6B055]/10 border border-[#E6B055]/25 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E6B055]" />

            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#FBF9F5]/90">
              Real Stories
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold tracking-tight leading-[1.12]">
            Real People,{" "}
            <span className="italic font-normal text-[#E6B055]">
              Real Transformation.
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-[#FBF9F5]/70 font-normal leading-relaxed max-w-2xl">
            Hear from people who have experienced meaningful shifts through
            their work with Ila.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          {stories.map((story, index) => (
            <motion.article
              key={story.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="relative bg-[#FBF9F5] text-[#073E42] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E6B055]/10 flex items-center justify-center">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#E6B055]" />
              </div>

              {/* Tagline */}
              <div className="mb-5 sm:mb-6 pr-14">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#B27A21]">
                  {story.tagline}
                </span>
              </div>

              {/* Review */}
              <div className="space-y-4 sm:space-y-5">
                {story.quote.split("\n\n").map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-sm sm:text-base lg:text-lg text-[#073E42]/80 leading-[1.75]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author */}
              <div className="mt-7 sm:mt-9 pt-5 sm:pt-6 border-t border-[#073E42]/10">
                <p className="font-serif text-lg sm:text-xl font-semibold text-[#073E42]">
                  — {story.author}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}