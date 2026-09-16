"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  ArrowLeft,
  X,
  Sparkles,
  Edit3,
  CalendarClock,
  Video,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FREE_PROGRAMS, FreeProgramId } from "../../../components/experience/RegistrationModal";

const NEXT_STEPS: Record<FreeProgramId, string[]> = {
  "money-abundance": [
    "A welcome email with the date & time of your complimentary Money & Abundance first session has been sent to you.",
    "You'll also receive a short pre-session reflection form a day before — no need to prepare anything in depth.",
    "If you have any questions in the meantime, you can reach us on the email above or on WhatsApp.",
  ],
  "fit-free": [
    "A welcome email with the date & time of your complimentary Fit & Free first session has been sent to you.",
    "Before the session, you'll receive a short questionnaire to help us understand your current patterns.",
    "Bring a notebook & an open mind — there is nothing to study, memorise or fix in advance.",
  ],
  "chakra-balancing": [
    "Your 15-day complimentary access to the Chakra Activation & Balancing Practice has been activated.",
    "A welcome email with the live session schedule and joining link has been sent immediately.",
    "Sessions combine grounding, breathwork and chakra meditation — a quiet space and a mat or chair is all you need.",
  ],
  "raise-frequency": [
    "Your 15-day complimentary access to Raise Your Frequency — Daily Practice has been activated.",
    "A welcome email with the live session schedule and joining link has been sent immediately.",
    "The practice is 15–20 minutes each session. Bring water, and arrive when you can — there is no late penalty.",
  ],
  "clarity-call": [
    "We recommend checking your email to confirm the time and date of your Clarity Call booking.",
    "This is a short, no-obligation conversation focused on what you would like to work on.",
    "If you haven't yet chosen a time, please return to the Experience It Free page and book via Calendly.",
  ],
};

function ConfirmedContent() {
  const router = useRouter();
  const search = useSearchParams();

  const emailFromQuery = search?.get("email") || "";
  const programFromQuery = (search?.get("program") as FreeProgramId) || null;

  const [email, setEmail] = useState<string>(emailFromQuery);
  const [programId, setProgramId] = useState<FreeProgramId | null>(programFromQuery);

  const [showEdit, setShowEdit] = useState(false);
  const [editEmail, setEditEmail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const last = JSON.parse(
        sessionStorage.getItem("free_registration_last") || "null"
      );
      if (last) {
        if (!emailFromQuery && last.email) setEmail(last.email);
        if (!programFromQuery && last.programId) setProgramId(last.programId);
      }
    } catch {
      /* ignore */
    }
  }, [emailFromQuery, programFromQuery]);

  const program = useMemo(
    () => (programId ? FREE_PROGRAMS[programId] : null),
    [programId]
  );

  const nextSteps = programId ? NEXT_STEPS[programId] : NEXT_STEPS["raise-frequency"];

  const saveEditedEmail = () => {
    if (!editEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editEmail.trim())) {
      return;
    }
    setEmail(editEmail.trim());
    try {
      const raw = sessionStorage.getItem("free_registration_last");
      if (raw) {
        const parsed = JSON.parse(raw);
        parsed.email = editEmail.trim();
        sessionStorage.setItem("free_registration_last", JSON.stringify(parsed));
      }
    } catch {
      /* ignore */
    }
    setShowEdit(false);
  };

  return (
    <main className="theme-page min-h-screen bg-[#FBF9F5] text-[#0D3C38] antialiased selection:bg-[#0D3C38]/10">
      <section className="relative overflow-hidden px-6 pb-28 pt-24 lg:px-16 lg:pb-36 lg:pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13,60,56,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(13,60,56,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#E6B055]/10 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] translate-y-1/3 rounded-full bg-[#0D3C38]/7 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Back link */}
          <button
            type="button"
            onClick={() => router.push("/experience-it-free")}
            className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-[#0D3C38]/60 transition-colors hover:text-[#0D3C38]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Experience It Free</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.7 }}
            className="overflow-hidden rounded-[2rem] border border-[#0D3C38]/10 bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="relative border-b border-[#0D3C38]/8 bg-gradient-to-br from-white via-[#FFFAF0] to-[#FBF9F5] px-7 py-10 sm:px-10 sm:py-14">
              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-[#E6B055] via-[#F3CE88] to-[#C48F3A]" />
              <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-start">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-full bg-[#E6B055]/20 blur-2xl" />
                  <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0D3C38] to-[#08292C] shadow-xl ring-1 ring-[#E6B055]/30">
                    <CheckCircle2 className="h-10 w-10 text-[#E6B055]" strokeWidth={2.25} />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E6B055]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#C48F3A]">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>You&apos;re registered</span>
                  </div>
                  <h1 className="text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
                    Your confirmation has been sent.
                  </h1>
                  {program && (
                    <div className="inline-flex flex-wrap items-center gap-2 text-sm font-medium text-[#0D3C38]/70">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0D3C38]/6 px-3 py-1 text-xs font-semibold text-[#0D3C38]">
                        {programId === "chakra-balancing" || programId === "raise-frequency" ? (
                          <Video className="h-3.5 w-3.5" />
                        ) : (
                          <CalendarClock className="h-3.5 w-3.5" />
                        )}
                        {program.title}
                      </span>
                      <span>·</span>
                      <span>{program.badge}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Email confirmation panel */}
            <div className="relative px-7 py-8 sm:px-10 sm:py-10">
              <div className="rounded-2xl border border-[#0D3C38]/10 bg-[#FBF9F5] p-6 sm:p-7">
                <label className="block text-[11px] font-bold uppercase tracking-[0.22em] text-[#0D3C38]/55">
                  Confirmation sent to
                </label>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-[#0D3C38]/10">
                      <Mail className="h-5 w-5 text-[#C48F3A]" />
                    </div>
                    <div
                      className={`min-w-0 ${
                        showEdit ? "hidden sm:block" : ""
                      }`}
                    >
                      <div className="truncate text-lg font-semibold text-[#0D3C38] sm:text-xl">
                        {email || "your@email.com"}
                      </div>
                      <div className="text-xs text-[#0D3C38]/55">
                        Please check that your email address above is correct.
                      </div>
                    </div>
                  </div>

                 
                </div>

                <AnimatePresence>
                  {showEdit && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-2xl border border-[#E6B055]/30 bg-white p-4 sm:p-5">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                          <div className="flex-1">
                            <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/55">
                              Correct email address
                            </label>
                            <input
                              type="email"
                              value={editEmail}
                              onChange={(e) => setEditEmail(e.target.value)}
                              placeholder="name@email.com"
                              className="w-full rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0D3C38] placeholder:text-[#0D3C38]/35 focus:border-[#E6B055] focus:outline-none focus:ring-2 focus:ring-[#E6B055]/25"
                              autoFocus
                              onKeyDown={(e) => {
                                if (e.key === "Enter") saveEditedEmail();
                                if (e.key === "Escape") setShowEdit(false);
                              }}
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setShowEdit(false)}
                              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#0D3C38]/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#0D3C38]/60 transition-colors hover:bg-[#0D3C38]/5"
                            >
                              <X className="h-3.5 w-3.5" />
                              <span>Cancel</span>
                            </button>
                            <button
                              type="button"
                              onClick={saveEditedEmail}
                              disabled={
                                !editEmail.trim() ||
                                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editEmail.trim())
                              }
                              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0D3C38] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#08292C] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span>Save Email</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Next steps */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-px w-10 bg-[#E6B055]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#0D3C38]/55">
                    What happens next
                  </span>
                </div>
                <ol className="space-y-3">
                  {nextSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E6B055]/12 text-xs font-bold text-[#C48F3A]">
                        {idx + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-[#0D3C38]/75 sm:text-[15px]">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/experience-it-free"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-[#0D3C38]/15 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#0D3C38] transition-colors hover:bg-[#FBF9F5]"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                  <span>Explore another free experience</span>
                </Link>
                <Link
                  href="/programs"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0D3C38] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-[#0D3C38]/12 transition-all hover:bg-[#08292C]"
                >
                  <span>Browse the full programs</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default function ConfirmedPage() {
  return (
    <Suspense fallback={null}>
      <ConfirmedContent />
    </Suspense>
  );
}
