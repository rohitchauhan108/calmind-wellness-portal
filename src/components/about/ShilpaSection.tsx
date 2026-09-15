import Image from "next/image";

export default function ShilpaSection() {
  return (
    <section
      id="shilpa"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-[#FBF9F5] to-white px-6 py-20 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0D3C38_1px,transparent_1px)] opacity-[0.03] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl space-y-5">
          <span className="inline-flex items-center rounded-full bg-[#0D3C38]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0D3C38]">
            Meet Shilpa
          </span>
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0D3C38] sm:text-6xl lg:text-7xl">
            From Patterns to{" "}
            <span className="font-serif font-normal italic text-[#C48F3A]">
              Possibility.
            </span>
          </h2>
          <p className="max-w-2xl text-xl font-light leading-relaxed text-[#0D3C38]/75">
            My journey into Graphology and Graphotherapy is quite different from
            what people might expect.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div
            className="space-y-6 lg:sticky lg:top-32 lg:col-span-4"
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <div className="rounded-[2.5rem] border border-[#0D3C38]/15 bg-white p-3 shadow-xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#FBF9F5]">
                <Image
                  src="/shilpha.jpeg"
                  alt="Shilpa - Graphotherapist and Handwriting Expert"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center lg:text-left">
                <span className="mb-2 inline-block rounded-full bg-[#0D3C38]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0D3C38]">
                  Practitioner Profile
                </span>
                <h3 className="text-2xl font-bold text-[#0D3C38]">Shilpa</h3>
                <p className="mt-1 text-sm font-medium text-[#0D3C38]/60">
                  Graphology &amp; Graphotherapy Practitioner
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
            <article className="rounded-[2.5rem] border border-[#0D3C38]/10 bg-white p-8 shadow-sm sm:p-10 md:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#0D3C38]/40">
                  Background
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-[#0D3C38]">
                What I was doing before this
              </h3>
              <div className="space-y-4 text-base font-light leading-[1.8] text-[#0D3C38]/75">
                <p>
                  My professional background has largely been in the corporate
                  and technology world, where I worked in software testing and
                  quality assurance—a world built around logic, analysis, and
                  patterns.
                </p>
                <p>
                  I have always been curious about why people repeat certain
                  patterns despite wanting change. That curiosity eventually led
                  me toward handwriting.
                </p>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-[2.25rem] border border-[#0D3C38]/10 bg-white p-7 shadow-sm sm:p-8">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0D3C38]/40">
                    Discovery
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-[#0D3C38]">
                  How I became interested
                </h3>
                <p className="text-sm font-light leading-relaxed text-[#0D3C38]/75">
                  Handwriting actions—pressure, slants, spacing, and
                  formations—act as behavioral indicators. Graphotherapy goes
                  further by using intentional handwriting exercises for
                  personal development.
                </p>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-[2.25rem] border border-[#0D3C38]/10 bg-[#FBF9F5] p-7 shadow-sm sm:p-8">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0D3C38]/40">
                    Depth
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-[#0D3C38]">
                  Going deeper into the work
                </h3>
                <p className="text-sm font-light leading-relaxed text-[#0D3C38]/75">
                  Human behavior is layered. Old patterns persist even when we
                  consciously want change. Graphology looks at combinations and
                  intensities rather than quick individual judgments.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-12 space-y-12">
          <article className="rounded-[2.5rem] border border-[#0D3C38]/10 bg-white p-8 shadow-sm sm:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Left Column: Text Content */}
              <div className="space-y-4 text-base font-light leading-[1.8] text-[#0D3C38]/75">
                <div className="mb-6 flex justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#0D3C38]/40">
                    Purpose
                  </span>
                </div>
                <h3 className="mb-6 text-3xl font-bold tracking-tight text-[#0D3C38]">
                  Why I decided to help others through it
                </h3>
                <p>
                  What ultimately drew me towards working with others was seeing
                  how powerful self-awareness can be. People often struggle with
                  confidence, boundaries, or emotional reactions without
                  understanding the pattern behind it.
                </p>
                <p>
                  I work with adults as well as children, because our
                  handwriting develops alongside us through different stages of
                  life. With children especially, the emphasis should always be
                  on development and encouragement rather than labelling them.
                </p>
              </div>

              {/* Right Column: Wrapper holding both stacked cards */}
              <div className="space-y-6 lg:mt-10">
                {/* Top Card: Philosophy */}
                <div className="space-y-3 rounded-[2rem] border border-[#0D3C38]/10 bg-[#0D3C38] p-8 text-white shadow-lg">
                  <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E6B055]">
                    Core Philosophy
                  </p>
                  <p className="font-serif text-xl italic leading-relaxed text-[#FBF9F5]">
                    “Awareness followed by action. A conversation with
                    yourself.”
                  </p>
                </div>

                {/* Bottom Card: Meaning */}
                <div className="rounded-3xl bg-[#0D3C38] p-8 text- text-white shadow-lg">
                  <p className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E6B055]">
                    Core Meaning
                  </p>
                  <p className="font-serif text-xl italic leading-relaxed text-[#FBF9F5]">
                    Awareness followed by action.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
