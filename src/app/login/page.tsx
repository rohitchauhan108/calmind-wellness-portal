"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  Users,
  Shield,
  Clock,
  Star,
  HelpCircle,
} from "lucide-react";

export default function LoginPage() {
  const [showPw, setShowPw] = useState(false);
  const [tab, setTab] = useState<"login" | "reset">("login");
  const [loginSubmitted, setLoginSubmitted] = useState(false);
  const [resetSubmitted, setResetSubmitted] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
    resetEmail: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((f) => ({ ...f, [key]: val as never }));
    };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSubmitted(true);
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setResetSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#0D3C38] font-sans antialiased overflow-hidden relative">
      {/* Ambient background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#E6B055]/10 rounded-full blur-[160px] pointer-events-none -ml-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0D3C38]/8 rounded-full blur-[160px] pointer-events-none -mr-32 -mb-32" />
      <div className="absolute inset-0 bg-[radial-gradient(#0D3C38_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      {/* Top bar */}
      <div className="relative z-10 pt-8 pb-4 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0D3C38]/65 hover:text-[#0D3C38] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/membership/apply"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0D3C38] px-4 py-2 rounded-full border border-[#0D3C38]/15 hover:border-[#E6B055]/60 hover:bg-white transition-all"
          >
            Not a member? Apply here
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <section className="relative z-10 px-6 lg:px-16 pt-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT: Benefits / Brand side */}
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block lg:col-span-7 xl:col-span-7"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl shadow-[#0D3C38]/15">
              <div className="aspect-[5/6] bg-gradient-to-br from-[#0D3C38] via-[#0D3C38] to-[#156056] p-10 xl:p-14 text-[#FBF9F5] relative flex flex-col justify-between">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(230,176,85,0.25),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(7,62,66,0.55),transparent_50%)]" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-[#E6B055]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
                      Member Portal
                    </span>
                  </div>
                  <h1 className="font-serif text-4xl xl:text-5xl font-bold tracking-tight leading-[1.1]">
                    Welcome back.
                    <span className="block italic font-normal mt-2 text-[#E6B055]">
                      Your next level is waiting.
                    </span>
                  </h1>
                  <p className="text-base xl:text-lg text-white/80 leading-relaxed max-w-xl">
                    Sign in to access your membership portal — weekly calls,
                    Graphotherapy protocols, the full resource library,
                    private community, and your personalised journey.
                  </p>
                </div>

                <div className="relative z-10 grid grid-cols-2 xl:grid-cols-4 gap-4">
                  {[
                    { icon: <Users className="w-4 h-4" />, n: "250+", l: "Active Members" },
                    { icon: <Clock className="w-4 h-4" />, n: "200+", l: "Hours of Content" },
                    { icon: <Star className="w-4 h-4" />, n: "4.9", l: "Member Rating" },
                    { icon: <Shield className="w-4 h-4" />, n: "24/7", l: "Portal Access" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/10 text-[#E6B055] flex items-center justify-center mb-2.5">
                        {s.icon}
                      </div>
                      <div className="font-serif text-xl font-bold text-white leading-none mb-1">
                        {s.n}
                      </div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/65 leading-tight">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="relative z-10 rounded-2xl bg-white/8 border border-white/15 p-5 xl:p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-3.5 h-3.5 text-[#E6B055] fill-[#E6B055]"
                      />
                    ))}
                  </div>
                  <p className="text-sm xl:text-base text-white/90 italic leading-relaxed mb-3">
                    "Being in Ila's membership is like having a weekly reset
                    button for my nervous system. Six months in — career
                    promotion, calm nervous system, and relationships I
                    actually feel good about."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E6B055] to-[#C48F3A] flex items-center justify-center text-[#0D3C38] font-bold text-sm">
                      A
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Ananya R.</div>
                      <div className="text-xs text-white/60">
                        Annual Member · London
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-5 xl:col-span-5"
          >
            {/* Mobile header */}
            <div className="lg:hidden mb-7 text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0D3C38]/10 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#E6B055]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0D3C38]">
                  Member Portal
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0D3C38] tracking-tight leading-tight">
                Welcome back.
              </h1>
              <p className="text-sm text-[#0D3C38]/70 max-w-sm mx-auto leading-relaxed">
                Sign in to your membership portal, calls, resources & community.
              </p>
            </div>

            <div className="relative rounded-[2rem] bg-white border border-[#0D3C38]/10 shadow-2xl shadow-[#0D3C38]/10 overflow-hidden">
              {/* Tabs */}
              <div className="grid grid-cols-2 bg-[#FBF9F5] border-b border-[#0D3C38]/8">
                {[
                  { key: "login", label: "Sign In", hint: "Welcome back" },
                  { key: "reset", label: "Reset Password", hint: "Forgot details?" },
                ].map((t) => {
                  const active = tab === t.key;
                  return (
                    <button
                      key={t.key}
                      onClick={() => {
                        setTab(t.key as never);
                        setLoginSubmitted(false);
                        setResetSubmitted(false);
                      }}
                      className={`group relative py-4 sm:py-5 px-4 text-center transition-all duration-300 cursor-pointer ${
                        active ? "bg-white text-[#0D3C38]" : "text-[#0D3C38]/55 hover:text-[#0D3C38]"
                      }`}
                    >
                      {active && (
                        <motion.div
                          layoutId="loginTab"
                          className="absolute left-4 right-4 top-0 h-[3px] bg-gradient-to-r from-[#0D3C38] via-[#E6B055] to-[#0D3C38] rounded-b-full"
                        />
                      )}
                      <div className={`text-[11px] font-bold uppercase tracking-[0.2em] mb-0.5 ${active ? "text-[#E6B055]" : "text-[#0D3C38]/45"}`}>
                        {t.hint}
                      </div>
                      <div className="font-serif text-lg font-semibold">
                        {t.label}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* =========== SIGN IN FORM =========== */}
              <div
                className={`p-7 sm:p-8 lg:p-9 space-y-6 transition-all duration-300 ${
                  tab === "login" ? "" : "hidden"
                }`}
              >
                {loginSubmitted ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#0D3C38] mb-2">
                        Check your inbox.
                      </h3>
                      <p className="text-sm text-[#0D3C38]/70 leading-relaxed max-w-xs mx-auto">
                        We sent a secure sign-in link to{" "}
                        <strong className="text-[#0D3C38]">{form.email || "your email"}</strong>.
                        Click the link to access your portal.
                      </p>
                    </div>
                    <button
                      onClick={() => setLoginSubmitted(false)}
                      className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D3C38]/65 hover:text-[#0D3C38] underline underline-offset-4"
                    >
                      Try again with different details
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0D3C38]/40">
                          <Mail className="w-5 h-5" />
                        </span>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={update("email")}
                          placeholder="you@yourdomain.com"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75">
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={() => setTab("reset")}
                          className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/60 hover:text-[#C48F3A] transition-colors"
                        >
                          Forgot password?
                        </button>
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0D3C38]/40">
                          <Lock className="w-5 h-5" />
                        </span>
                        <input
                          type={showPw ? "text" : "password"}
                          required
                          value={form.password}
                          onChange={update("password")}
                          placeholder="••••••••"
                          className="w-full pl-12 pr-12 py-4 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPw((s) => !s)}
                          aria-label={showPw ? "Hide password" : "Show password"}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0D3C38]/40 hover:text-[#0D3C38] transition-colors cursor-pointer"
                        >
                          {showPw ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={form.remember}
                        onChange={update("remember")}
                        className="w-5 h-5 rounded-md border-2 border-[#0D3C38]/25 accent-[#0D3C38] cursor-pointer"
                      />
                      <span className="text-sm text-[#0D3C38]/75">
                        Keep me signed in on this device
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="group relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-4.5 rounded-2xl bg-gradient-to-r from-[#0D3C38] via-[#0D3C38] to-[#156056] hover:from-[#0D3C38]/95 hover:to-[#12514c] text-[#FBF9F5] font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:shadow-[#0D3C38]/20 transition-all duration-300 cursor-pointer border border-[#0D3C38]/50"
                    >
                      <LogIn className="w-4.5 h-4.5 text-[#E6B055]" />
                      Sign Into My Portal
                      <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    {/* Divider */}
                    <div className="relative py-2">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-dashed border-[#0D3C38]/15" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-white px-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0D3C38]/45">
                          or
                        </span>
                      </div>
                    </div>

                    {/* SSO placeholders */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setLoginSubmitted(true)
                        }
                        className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#FBF9F5] border border-[#0D3C38]/10 hover:border-[#0D3C38]/25 hover:bg-white text-[#0D3C38] font-semibold text-sm transition-all duration-300 cursor-pointer"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setLoginSubmitted(true)
                        }
                        className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#0D3C38] hover:bg-[#0D3C38]/92 text-[#FBF9F5] font-semibold text-sm transition-all duration-300 cursor-pointer"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.3-1.69-1.3-1.69-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.39.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.15c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                        </svg>
                        GitHub
                      </button>
                    </div>

                    <p className="text-center text-xs text-[#0D3C38]/55 pt-1 leading-relaxed">
                      Protected with 256-bit encryption. By signing in you
                      agree to the{" "}
                      <Link href="/terms" className="underline underline-offset-2 text-[#0D3C38] font-semibold hover:text-[#C48F3A]">
                        Terms
                      </Link>{" "}
                      &{" "}
                      <Link href="/privacy-policy" className="underline underline-offset-2 text-[#0D3C38] font-semibold hover:text-[#C48F3A]">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </div>

              {/* =========== RESET PASSWORD FORM =========== */}
              <div
                className={`p-7 sm:p-8 lg:p-9 space-y-6 transition-all duration-300 ${
                  tab === "reset" ? "" : "hidden"
                }`}
              >
                {resetSubmitted ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[#E6B055]/15 border border-[#E6B055]/30 flex items-center justify-center">
                      <Mail className="w-8 h-8 text-[#B88127]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#0D3C38] mb-2">
                        Reset link sent.
                      </h3>
                      <p className="text-sm text-[#0D3C38]/70 leading-relaxed max-w-xs mx-auto">
                        Check{" "}
                        <strong className="text-[#0D3C38]">{form.resetEmail || "your inbox"}</strong>{" "}
                        for a secure password reset link. It expires in 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setResetSubmitted(false);
                        setTab("login");
                      }}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0D3C38] px-5 py-3 rounded-xl border-2 border-[#0D3C38]/20 hover:border-[#0D3C38]/50 transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Sign In
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleReset} className="space-y-5">
                    <div className="rounded-2xl p-5 bg-gradient-to-br from-[#E6B055]/10 via-white to-white border border-[#E6B055]/25 space-y-2">
                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B88127]">
                        <HelpCircle className="w-4 h-4" />
                        Password reset
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-[#0D3C38] leading-snug">
                        Enter your email and we'll send you a secure link to create a new password.
                      </h3>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#0D3C38]/75 mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0D3C38]/40">
                          <Mail className="w-5 h-5" />
                        </span>
                        <input
                          type="email"
                          required
                          value={form.resetEmail}
                          onChange={update("resetEmail")}
                          placeholder="you@yourdomain.com"
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#0D3C38]/15 bg-[#FBF9F5]/60 focus:bg-white text-sm text-[#0D3C38] focus:outline-none focus:ring-2 focus:ring-[#E6B055] focus:border-transparent transition-all placeholder:text-[#0D3C38]/40"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-4.5 rounded-2xl bg-[#0D3C38] hover:bg-[#0D3C38]/92 text-[#FBF9F5] font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:shadow-[#0D3C38]/20 transition-all duration-300 cursor-pointer border border-[#0D3C38]/50"
                    >
                      <Mail className="w-4.5 h-4.5 text-[#E6B055]" />
                      Send Password Reset Link
                    </button>

                    <button
                      type="button"
                      onClick={() => setTab("login")}
                      className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0D3C38]/65 hover:text-[#0D3C38] transition-colors py-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Sign In
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* CTA: not a member? apply */}
            <div className="mt-7 sm:hidden">
              <Link
                href="/membership/apply"
                className="group flex items-center justify-between gap-3 rounded-2xl p-5 bg-gradient-to-br from-[#0D3C38] to-[#156056] text-[#FBF9F5] shadow-xl shadow-[#0D3C38]/20"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6B055] mb-1">
                    Not a member yet?
                  </div>
                  <div className="font-serif text-lg font-semibold leading-tight">
                    Apply to join the membership
                  </div>
                </div>
                <span className="w-10 h-10 shrink-0 rounded-full bg-[#E6B055] text-[#0D3C38] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: <Shield className="w-4 h-4" />, t: "256-bit SSL" },
                { icon: <Lock className="w-4 h-4" />, t: "SOC2 Ready" },
                { icon: <Users className="w-4 h-4" />, t: "GDPR Compliant" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#0D3C38]/60 bg-white/60 border border-[#0D3C38]/8 rounded-xl px-2 py-2.5"
                >
                  <span className="text-[#0D3C38]">{x.icon}</span>
                  {x.t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
