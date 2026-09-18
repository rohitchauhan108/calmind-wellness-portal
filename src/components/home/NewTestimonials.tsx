import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Quote, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const stories = [
    {
      tagline: "A beautiful and meaningful experience",
      quote:
        "Working with Ila was such a beautiful and meaningful experience for me. From the very beginning, she was so warm, loving, and easy to connect with. I always felt comfortable being open and sharing what I was experiencing because she listened with so much presence and understanding.\n\nOne of the biggest shifts for me came through the abundance meditation and visualization we worked on together. Before, abundance was something I understood intellectually, but after working with Ila, I learned how to actually feel it within me. Now, it feels much more natural and easy for me to connect with a feeling of abundance in my everyday life.\n\nWhat I especially appreciate about Ila is the way she creates a safe space to explore, while also openly sharing her own experiences and insights. Her openness, courage, warmth, and genuine way of connecting made the whole experience feel very real and empowering.\n\nI’m truly grateful for the support and the shift I experienced through our work together. ❤️",
      author: "Anamika",
    },
    {
      tagline: "A transformative journey of self-discovery",
      quote:
        "Ila has been a very supportive coach - the needs of her clients are always given top priority. Her techniques and methods have allowed me to better myself and my relationship with my emotions. I struggled with self-acceptance, and her work taught me to embrace myself more. Grateful for the opportunity to have had the chance to work with Ila!",
      author: "Kaveen Tulsiani",
    },
    {
      tagline: "A powerful experience of inner freedom and transformation",
      quote:
        "would like to express my gratitude to @~ila gargg for holding the space today and helping me experience the connection to my inner freedom. As a Coach, she heals with her compassionate presence and brings forth joy and aliveness. Thank you for facilitating impactful change. 🌻🙂",
      author: "Pooja Ravikumar",
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-28 bg-[#0D3C38] relative overflow-hidden text-[#FBF9F5]"
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

        {/* Testimonials Slider Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Slider Viewport */}
          <div className="overflow-hidden relative min-h-[420px]">
            <AnimatePresence mode="wait">
              {stories.map((story, index) => {
                if (index !== currentIndex) return null;
                const isExpanded = !!expanded[index];
                const paragraphs = story.quote.split("\n\n");

                return (
                  <motion.article
                    key={story.author}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative bg-[#FBF9F5] text-[#0D3C38] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E6B055]/10 flex items-center justify-center">
                      <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#E6B055]" />
                    </div>

                    {/* Tagline */}
                    <div className="mb-5 sm:mb-6 pr-14">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#C48F3A]">
                        {story.tagline}
                      </span>
                    </div>

                    {/* Review Content */}
                    <div className="relative">
                      {/* When collapsed, clamp to ~5 lines */}
                      <div
                        className={`space-y-4 sm:space-y-5 transition-all duration-300 ${
                          !isExpanded
                            ? "max-h-[8.5rem] overflow-hidden relative"
                            : ""
                        }`}
                      >
                        {paragraphs.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-sm sm:text-base lg:text-lg text-[#0D3C38]/80 leading-[1.75]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Gradient Fade overlay when collapsed */}
                      {!isExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FBF9F5] to-transparent pointer-events-none" />
                      )}
                    </div>

                    {/* Show More / Show Less Button */}
                    <div className="mt-4">
                      <button
                        onClick={() => toggleExpand(index)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0D3C38] hover:text-[#C48F3A] transition-colors focus:outline-none py-1 cursor-pointer"
                      >
                        <span>{isExpanded ? "Show Less" : "Show More"}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Author */}
                    <div className="mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-[#0D3C38]/10">
                      <p className="font-serif text-lg sm:text-xl font-semibold text-[#0D3C38]">
                        — {story.author}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Slider Navigation Controls (Arrows + Dots) */}
          <div className="flex items-center justify-between mt-8 px-2">
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? "w-8 bg-[#E6B055]"
                      : "w-2.5 bg-[#FBF9F5]/30 hover:bg-[#FBF9F5]/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next / Prev Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[#FBF9F5]/20 bg-[#FBF9F5]/10 hover:bg-[#E6B055] hover:text-[#0D3C38] hover:border-[#E6B055] flex items-center justify-center text-[#FBF9F5] transition-all duration-300 cursor-pointer"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[#FBF9F5]/20 bg-[#FBF9F5]/10 hover:bg-[#E6B055] hover:text-[#0D3C38] hover:border-[#E6B055] flex items-center justify-center text-[#FBF9F5] transition-all duration-300 cursor-pointer"
                aria-label="Next story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}