"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, LockKeyhole, Video } from "lucide-react";

type ProgramKey = "frequency" | "energy";

type Program = {
  name: string;
  subtitle: string;
  price: string;
  schedule: string;
  paymentLink: string;
};

const programs: Record<ProgramKey, Program> = {
  frequency: {
    name: "Raise Your Frequency",
    subtitle: "Your Daily Elevation Practice",
    price: "$20/month",
    schedule: "Live on Zoom · 15–20 minutes · 6 days a week",
    paymentLink: process.env.NEXT_PUBLIC_RAISE_FREQUENCY_PAYMENT_LINK || "",
  },
  energy: {
    name: "Energy Alignment",
    subtitle: "Chakra Activation & Balancing Practice",
    price: "$60/month",
    schedule: "Live · 30–40 minutes · 4 days a week",
    paymentLink: process.env.NEXT_PUBLIC_ENERGY_ALIGNMENT_PAYMENT_LINK || "",
  },
};

export default function ProgramRegistrationPage() {
  const [programKey, setProgramKey] = useState<ProgramKey>("frequency");
  const [submitted, setSubmitted] = useState(false);
  const [paymentUnavailable, setPaymentUnavailable] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("program");
    const status = new URLSearchParams(window.location.search).get("status");
    if (selected === "energy" || selected === "frequency") {
      setProgramKey(selected);
    }
    if (status === "success") {
      setSubmitted(true);
      setPaymentComplete(true);
    }
  }, []);

  const program = programs[programKey];

  const update = (field: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (program.paymentLink) {
      window.location.assign(program.paymentLink);
    } else {
      setPaymentUnavailable(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] px-6 py-12 text-[#0D3C38] lg:px-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0D3C38]/60 transition-colors hover:text-[#0D3C38]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Programs
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <section className="space-y-6 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C48F3A]">
              Register & Join
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Begin your next practice.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[#0D3C38]/75">
              Share your details, then continue to secure monthly payment. After successful payment, you will receive registration confirmation, your session schedule and Zoom or access instructions by email.
            </p>

            <div className="rounded-[1.75rem] bg-[#0D3C38] p-6 text-white shadow-xl shadow-[#0D3C38]/15 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E6B055]">
                    Selected practice
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug">
                    {program.name}
                  </h2>
                  <p className="mt-1 text-sm text-white/70">{program.subtitle}</p>
                </div>
                <Video className="h-6 w-6 shrink-0 text-[#E6B055]" />
              </div>
              <div className="mt-7 border-t border-white/15 pt-5">
                <div className="font-serif text-3xl font-bold text-[#E6B055]">
                  {program.price}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {program.schedule}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-[#0D3C38]/60">
              <LockKeyhole className="h-4 w-4" />
              Your details are used only for registration and access.
            </div>
          </section>

          <section className="rounded-[2rem] border border-[#0D3C38]/10 bg-white p-7 shadow-xl shadow-[#0D3C38]/5 sm:p-10">
            {submitted && paymentComplete ? (
              <div className="space-y-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Check className="h-6 w-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                  Payment successful
                </p>
                <h2 className="font-serif text-3xl font-semibold leading-tight">
                  You are registered for {program.name}.
                </h2>
                <p className="text-sm leading-relaxed text-[#0D3C38]/75">
                  Your monthly membership is active. We will send your confirmation email with the program schedule, session timings, Zoom or access link, and joining instructions.
                </p>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900">
                  <strong>{program.name}</strong>
                  <br />
                  {program.schedule}
                  <br />
                  Access details will be sent to the email used during registration.
                </div>
                <Link
                  href="/programs"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#0D3C38] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0D3C38]/90"
                >
                  Back to programs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : submitted && paymentUnavailable ? (
              <div className="space-y-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6B055]/20 text-[#B88127]">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="font-serif text-3xl font-semibold leading-tight">
                  Details received.
                </h2>
                <p className="text-sm leading-relaxed text-[#0D3C38]/75">
                  Your registration details for {program.name} are ready. The secure recurring payment link is not configured on this website yet, so payment cannot be completed from this page.
                </p>
                <p className="rounded-xl border border-[#E6B055]/40 bg-[#FBF9F5] p-4 text-sm leading-relaxed text-[#0D3C38]/75">
                  Please contact us and mention <strong>{program.name}</strong>. We will send the correct payment link and then confirm your schedule and Zoom access.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#0D3C38] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0D3C38]/90"
                >
                  Contact the team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C48F3A]">
                    Step 1 · Registration details
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight">
                    Tell us where to send your access
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#0D3C38]/70">
                    Required details are kept simple. You will continue to the secure recurring payment page after submitting this form.
                  </p>
                </div>

                <div className="mb-7 grid grid-cols-2 gap-2 rounded-2xl border border-[#0D3C38]/10 bg-[#FBF9F5] p-2">
                  {(Object.keys(programs) as ProgramKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setProgramKey(key)}
                      className={`rounded-xl px-3 py-3 text-left transition-colors ${
                        key === programKey
                          ? "bg-[#0D3C38] text-white shadow-md"
                          : "text-[#0D3C38]/65 hover:bg-white"
                      }`}
                    >
                      <span className="block text-[10px] font-bold uppercase tracking-[0.15em]">
                        {key === "frequency" ? "Daily practice" : "Energy work"}
                      </span>
                      <span className={`mt-1 block text-sm font-semibold ${key === programKey ? "text-[#E6B055]" : "text-[#0D3C38]"}`}>
                        {programs[key].price}
                      </span>
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {([
                    ["name", "Name", "Your full name", "text"],
                    ["email", "Email", "you@example.com", "email"],
                    ["phone", "Phone / WhatsApp number", "+1 555 000 0000", "tel"],
                    ["country", "Country", "United States", "text"],
                  ] as const).map(([field, label, placeholder, type]) => (
                    <label key={field} className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#0D3C38]/70">
                        {label} *
                      </span>
                      <input
                        required
                        type={type}
                        value={form[field]}
                        onChange={update(field)}
                        placeholder={placeholder}
                        className="w-full rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 px-4 py-3.5 text-sm text-[#0D3C38] outline-none transition-all placeholder:text-[#0D3C38]/35 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-[#E6B055]"
                      />
                    </label>
                  ))}

                  <div className="rounded-xl border border-[#0D3C38]/10 bg-[#FBF9F5] p-4 text-sm leading-relaxed text-[#0D3C38]/70">
                    <strong className="text-[#0D3C38]">Step 2 · Payment:</strong> Continue to the secure {program.price} recurring payment page. Your access email will include the confirmed program details and joining instructions.
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#0D3C38] px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#0D3C38]/90 hover:shadow-xl"
                  >
                    Continue to Payment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
