"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X, ArrowRight, CheckCircle2, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type FreeProgramId =
  | "money-abundance"
  | "fit-free"
  | "chakra-balancing"
  | "raise-frequency"
  | "clarity-call";

export const FREE_PROGRAMS: Record<FreeProgramId, { title: string; badge: string }> = {
  "money-abundance": {
    title: "Money & Abundance",
    badge: "First Session Complimentary",
  },
  "fit-free": {
    title: "Fit & Free",
    badge: "First Session Complimentary",
  },
  "chakra-balancing": {
    title: "Chakra Activation & Balancing Practice",
    badge: "First 15 Days Free",
  },
  "raise-frequency": {
    title: "Raise Your Frequency — Daily Practice",
    badge: "First 15 Days Free",
  },
  "clarity-call": {
    title: "Complimentary Clarity Call",
    badge: "Book a short, no-obligation conversation",
  },
};

type Props = {
  open: boolean;
  onClose: () => void;
  programId: FreeProgramId | null;
};

type FormState = {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  isWhatsApp: boolean;
  consent: boolean;
};

const COUNTRY_CODES: Array<{ code: string; flag: string; country: string }> = [
  { code: "+1", flag: "🇺🇸", country: "United States / Canada" },
  { code: "+44", flag: "🇬🇧", country: "United Kingdom" },
  { code: "+91", flag: "🇮🇳", country: "India" },
  { code: "+61", flag: "🇦🇺", country: "Australia" },
  { code: "+33", flag: "🇫🇷", country: "France" },
  { code: "+49", flag: "🇩🇪", country: "Germany" },
  { code: "+971", flag: "🇦🇪", country: "UAE" },
  { code: "+65", flag: "🇸🇬", country: "Singapore" },
  { code: "+353", flag: "🇮🇪", country: "Ireland" },
  { code: "+27", flag: "🇿🇦", country: "South Africa" },
  { code: "+86", flag: "🇨🇳", country: "China" },
  { code: "+81", flag: "🇯🇵", country: "Japan" },
  { code: "+82", flag: "🇰🇷", country: "South Korea" },
  { code: "+52", flag: "🇲🇽", country: "Mexico" },
  { code: "+55", flag: "🇧🇷", country: "Brazil" },
];

const detectCountryCode = (): string => {
  if (typeof window === "undefined") return "+44";
  const lang = navigator?.language || "en-GB";
  const timezone = Intl?.DateTimeFormat?.()?.resolvedOptions?.()?.timeZone || "";
  if (lang.startsWith("en-GB") || timezone.includes("London")) return "+44";
  if (lang.startsWith("en-US") || lang.startsWith("en-CA")) return "+1";
  if (lang.startsWith("en-IN") || timezone.includes("Calcutta") || timezone.includes("Kolkata")) return "+91";
  if (lang.startsWith("en-AU")) return "+61";
  if (lang.startsWith("en-IE")) return "+353";
  if (lang.startsWith("de")) return "+49";
  if (lang.startsWith("fr")) return "+33";
  if (lang.startsWith("ja")) return "+81";
  if (lang.startsWith("zh")) return "+86";
  if (lang.startsWith("ko")) return "+82";
  if (lang.startsWith("pt-BR")) return "+55";
  if (lang.startsWith("es-MX")) return "+52";
  return "+44";
};

const EMPTY_FORM: FormState = {
  fullName: "",
  email: "",
  countryCode: "+44",
  phone: "",
  isWhatsApp: false,
  consent: false,
};

const CLARITY_CALL_URL =
  "https://calendly.com/ilagarg-official/clarity-call-with-ila";

export default function RegistrationModal({ open, onClose, programId }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      const detected = detectCountryCode();
      setForm((prev) => ({ ...EMPTY_FORM, countryCode: detected }));
      setErrors({});
      setSubmitting(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, programId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const program = programId ? FREE_PROGRAMS[programId] : null;
  const isClarityCall = programId === "clarity-call";

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!/^[\d\s\-()]{4,20}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!form.consent) next.consent = "Please agree to receive information & updates.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!programId) return;
    if (isClarityCall) {
      window.open(CLARITY_CALL_URL, "_blank", "noopener,noreferrer");
      onClose();
      return;
    }
    if (!validate() || submitting) return;
    setSubmitting(true);

    const payload = {
      programId,
      programTitle: program?.title,
      submittedAt: new Date().toISOString(),
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      countryCode: form.countryCode,
      phone: form.phone.trim(),
      isWhatsApp: form.isWhatsApp,
      consent: form.consent,
    };

    try {
      const existing = JSON.parse(
        typeof window !== "undefined"
          ? localStorage.getItem("free_registrations") || "[]"
          : "[]"
      );
      existing.push(payload);
      localStorage.setItem("free_registrations", JSON.stringify(existing));
    } catch {
      /* ignore storage errors */
    }

    try {
      sessionStorage.setItem(
        "free_registration_last",
        JSON.stringify(payload)
      );
    } catch {
      /* ignore */
    }

    await new Promise((res) => setTimeout(res, 650));

    router.push(
      `/experience-it-free/confirmed?email=${encodeURIComponent(
        form.email.trim()
      )}&program=${encodeURIComponent(programId)}`
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        key="experience-registration-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-[100] flex items-end justify-center bg-[#08292C]/60 backdrop-blur-sm p-4 sm:items-center sm:p-6"
        onClick={onClose}
      >
        <motion.div
          key="experience-registration-panel"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.7 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#FBF9F5] shadow-2xl ring-1 ring-black/5 sm:rounded-[2rem]"
        >
          {/* Top decorative strip */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#E6B055] via-[#F3CE88] to-[#C48F3A]" />

          {/* Header */}
          <div className="relative border-b border-[#0D3C38]/10 bg-white/70 px-6 py-5 sm:px-8 sm:py-6">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-[#0D3C38]/60 transition-colors hover:bg-[#0D3C38]/8 hover:text-[#0D3C38] sm:right-5 sm:top-5"
              aria-label="Close registration"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pr-10">
              {program && (
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#E6B055]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C48F3A]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{program.badge}</span>
                </div>
              )}
              <h3 className="font-serif text-2xl font-bold leading-tight text-[#0D3C38] sm:text-[28px]">
                {isClarityCall ? "Book your Clarity Call" : "Register for free"}
              </h3>
              {program && !isClarityCall && (
                <p className="mt-1 text-sm font-medium text-[#0D3C38]/70">
                  {program.title}
                </p>
              )}
            </div>
          </div>

          {isClarityCall ? (
            <div className="space-y-5 px-6 py-6 sm:px-8 sm:py-8">
              <p className="text-sm leading-relaxed text-[#0D3C38]/75">
                Book a short, no-obligation conversation to briefly discuss
                what you&apos;re looking to work on and explore which program
                or way of working together may be the right place to start.
              </p>
              <div className="rounded-2xl border border-[#0D3C38]/10 bg-white p-4 text-xs text-[#0D3C38]/70">
                <div className="mb-2 inline-flex items-center gap-1.5 font-semibold text-[#0D3C38]">
                  <Globe className="h-3.5 w-3.5 text-[#C48F3A]" />
                  Opens in a new window
                </div>
                You will be taken to Calendly to choose a date and time that
                works for you.
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0D3C38] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0D3C38]/15 transition-all hover:bg-[#08292C]"
              >
                <span>Book a Clarity Call</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 px-6 py-6 sm:space-y-5 sm:px-8 sm:py-8"
              noValidate
            >
              {/* Full name */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-[#0D3C38]/65">
                  Full Name
                </label>
                <input
                  type="text"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  placeholder="Jane Doe"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm text-[#0D3C38] placeholder:text-[#0D3C38]/35 focus:outline-none focus:ring-2 focus:ring-[#E6B055]/40 transition ${
                    errors.fullName
                      ? "border-red-400 bg-red-50/40 focus:ring-red-200"
                      : "border-[#0D3C38]/12 bg-white focus:border-[#E6B055]"
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-[#0D3C38]/65">
                  Email Address
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="jane@email.com"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm text-[#0D3C38] placeholder:text-[#0D3C38]/35 focus:outline-none focus:ring-2 focus:ring-[#E6B055]/40 transition ${
                    errors.email
                      ? "border-red-400 bg-red-50/40 focus:ring-red-200"
                      : "border-[#0D3C38]/12 bg-white focus:border-[#E6B055]"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Phone + country code */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-[#0D3C38]/65">
                  Phone Number
                </label>
                <div
                  className={`flex overflow-hidden rounded-2xl border bg-white transition focus-within:ring-2 focus-within:ring-[#E6B055]/40 ${
                    errors.phone
                      ? "border-red-400 bg-red-50/40 focus-within:ring-red-200"
                      : "border-[#0D3C38]/12 focus-within:border-[#E6B055]"
                  }`}
                >
                  <div className="flex items-center gap-1.5 border-r border-[#0D3C38]/10 px-3 sm:px-4">
                    <Phone className="hidden h-4 w-4 text-[#0D3C38]/40 sm:block" />
                    <select
                      value={form.countryCode}
                      onChange={(e) => update("countryCode", e.target.value)}
                      className="h-full bg-transparent py-3.5 pr-1 text-sm font-medium text-[#0D3C38] focus:outline-none"
                      aria-label="Country code"
                    >
                      {COUNTRY_CODES.map((cc) => (
                        <option key={cc.code} value={cc.code}>
                          {cc.flag} {cc.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="tel"
                    autoComplete="tel-national"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="Mobile number"
                    className="flex-1 px-3 py-3.5 text-sm text-[#0D3C38] placeholder:text-[#0D3C38]/35 focus:outline-none sm:px-4"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}

                <label className="mt-2.5 flex cursor-pointer select-none items-start gap-2.5 text-sm text-[#0D3C38]/80">
                  <input
                    type="checkbox"
                    checked={form.isWhatsApp}
                    onChange={(e) => update("isWhatsApp", e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#0D3C38]"
                  />
                  <span>This number is also on WhatsApp</span>
                </label>
              </div>

              {/* Consent */}
              <div className="rounded-2xl border border-[#0D3C38]/10 bg-white/70 p-4">
                <label className="flex cursor-pointer select-none items-start gap-2.5 text-sm leading-relaxed text-[#0D3C38]/80">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#0D3C38]"
                  />
                  <span>
                    I agree to receive information, updates and next steps
                    relating to the experience I have registered for.
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-2 text-xs text-red-500">{errors.consent}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0D3C38] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0D3C38]/15 transition-all hover:bg-[#08292C] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    <span>Registering…</span>
                  </>
                ) : (
                  <>
                    <span>Complete Registration</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] leading-relaxed text-[#0D3C38]/50">
                No email verification required. Your confirmation will be sent
                immediately after registration.
              </p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
