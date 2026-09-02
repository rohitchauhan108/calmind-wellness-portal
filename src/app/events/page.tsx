"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Users,
  Ticket,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type EventFilter = "all" | "workshop" | "retreat" | "talk" | "group";

type DummyEvent = {
  id: string;
  title: string;
  format: "Workshop" | "Retreat" | "Talk" | "Group Program";
  tagline: string;
  description: string;
  date: string;
  dateShort: string;
  month: string;
  time: string;
  duration: string;
  location: string;
  locationMode: "In Person" | "Online" | "Hybrid";
  seats: string;
  price: string;
  currency: string;
  image: string;
  status: "Upcoming" | "Sold Out" | "Waitlist" | "Past";
  highlights: string[];
  audience: string;
};

const UPCOMING_EVENTS: DummyEvent[] = [
  {
    id: "ev-001",
    title: "Rewire Money Mindset — 21-Day Live Workshop",
    format: "Workshop",
    tagline: "A guided 21-day journey to dissolve scarcity and unlock abundance.",
    description:
      "A practical 21-day live workshop combining coaching, EFT, and journaling to help you identify and rewrite the subconscious money scripts that are quietly limiting your income, savings, and relationship with wealth.",
    date: "Saturday, 10 October 2026",
    dateShort: "10",
    month: "OCT",
    time: "6:30 PM – 8:00 PM IST",
    duration: "21 Days",
    location: "Online (Zoom + Private Community)",
    locationMode: "Online",
    seats: "Limited to 40 participants",
    price: "₹ 8,499",
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    status: "Upcoming",
    highlights: [
      "Weekly 90-min live coaching calls with Ila",
      "Daily 10-min audio practice & journal prompts",
      "Private community & weekly accountability",
      "Personal money-pattern workbook + meditation audio",
    ],
    audience: "Anyone ready to transform their relationship with money.",
  },
  {
    id: "ev-002",
    title: "Aligned Living Weekend Retreat — Rishikesh",
    format: "Retreat",
    tagline: "A 3-day immersive journey back into presence, purpose, and peace.",
    description:
      "A small-group residential retreat in Rishikesh combining breathwork, yoga, deep coaching circles, somatic healing, and nightly fire ceremonies. Designed for people who want to step out of routine and recalibrate from the inside out.",
    date: "Friday, 13 November 2026 – Sunday, 15 November 2026",
    dateShort: "13",
    month: "NOV",
    time: "Check-in 2:00 PM · Check-out 11:00 AM",
    duration: "3 Days / 2 Nights",
    location: "Rishikesh, Uttarakhand (venue shared post-booking)",
    locationMode: "In Person",
    seats: "Only 18 seats — intimate group",
    price: "₹ 38,500",
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1400&q=80",
    status: "Waitlist",
    highlights: [
      "All meals, stay, and sessions included",
      "2x 1:1 mini-clarity sessions with Ila",
      "Daily yoga, breathwork & somatic release",
      "Closing ceremony with personalised intention ritual",
    ],
    audience: "High-achievers craving realignment and rest.",
  },
  {
    id: "ev-003",
    title: "Confidence on Stage — Public Speaking & Voice Masterclass",
    format: "Talk",
    tagline: "A single-session masterclass to own your voice and your presence.",
    description:
      "A 3-hour live masterclass for professionals, creators, and leaders who want to speak with unshakable calm, clarity, and authentic presence. We work on inner blocks, voice technique, body language, and real on-the-spot practice in a safe small group.",
    date: "Sunday, 27 September 2026",
    dateShort: "27",
    month: "SEP",
    time: "10:00 AM – 1:00 PM IST",
    duration: "3 Hours",
    location: "Bengaluru (address on ticket)",
    locationMode: "In Person",
    seats: "30 seats remaining",
    price: "₹ 2,999",
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80",
    status: "Upcoming",
    highlights: [
      "Live on-stage practice with gentle feedback",
      "Voice & breath warm-up toolkit to keep",
      "Recorded practice exercises for 30 days",
      "Light refreshments & workbook included",
    ],
    audience: "Leaders, founders, coaches, and creators.",
  },
  {
    id: "ev-004",
    title: "Relationships Reimagined — 8-Week Group Journey",
    format: "Group Program",
    tagline: "Rewrite the patterns that quietly shape every relationship in your life.",
    description:
      "An 8-week guided group program focused on attachment patterns, boundary-setting, emotional safety, and conscious communication. Work through the inner patterns showing up in romantic relationships, family dynamics, and even workplace relationships.",
    date: "Wednesday, 7 October 2026",
    dateShort: "07",
    month: "OCT",
    time: "7:00 PM – 8:45 PM IST",
    duration: "8 Weeks",
    location: "Online (weekly calls + private portal)",
    locationMode: "Online",
    seats: "50% booked",
    price: "₹ 14,999",
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1400&q=80",
    status: "Upcoming",
    highlights: [
      "Weekly 90-min live group call with Q&A",
      "2x deep inner-work worksheets per week",
      "Private, anonymous sharing circle (optional)",
      "Recording library + meditation bundle",
    ],
    audience: "Anyone wanting healthier, safer relationships.",
  },
];

const PAST_EVENTS: DummyEvent[] = [
  {
    id: "past-001",
    title: "Burnout to Balance — Executive Wellness Day",
    format: "Talk",
    tagline: "A half-day corporate workshop for senior leadership teams.",
    description:
      "An invite-only half-day workshop on nervous-system regulation, energy management, and sustainable high-performance delivered for a leadership cohort of 24 mid-to-senior leaders in Bengaluru.",
    date: "Saturday, 22 June 2026",
    dateShort: "22",
    month: "JUN",
    time: "9:30 AM – 1:30 PM IST",
    duration: "4 Hours",
    location: "Bengaluru, Karnataka",
    locationMode: "In Person",
    seats: "Private cohort · 24 seats",
    price: "—",
    currency: "",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    status: "Past",
    highlights: [
      "Delivered for a 24-person executive cohort",
      "Nervous-system & burnout mapping workshop",
      "Personal 90-day recovery plan for every leader",
    ],
    audience: "Executives & senior leaders.",
  },
  {
    id: "past-002",
    title: "Spring Self-Worth Retreat — Goa",
    format: "Retreat",
    tagline: "4 days and 3 nights of deep rest, reflection, and reinvention.",
    description:
      "A sold-out boutique 4-day retreat in South Goa focused on rebuilding self-worth and releasing the pressure to 'perform' in every area of life.",
    date: "Thursday, 14 March 2026 – Sunday, 17 March 2026",
    dateShort: "14",
    month: "MAR",
    time: "Residential",
    duration: "4 Days",
    location: "South Goa",
    locationMode: "In Person",
    seats: "Sold out · 22 guests",
    price: "—",
    currency: "",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
    status: "Past",
    highlights: [
      "Sold out in under 10 days",
      "16 private 1:1 mini sessions delivered",
      "100% of guests requesting a 2027 repeat",
    ],
    audience: "Women founders, coaches, and returning guests.",
  },
  {
    id: "past-003",
    title: "Graphotherapy Intro Evening — London",
    format: "Talk",
    tagline: "A free public talk exploring handwriting, beliefs, and behaviour.",
    description:
      "An introductory public evening with Shilpa, our resident Graphotherapist, sharing live handwriting analysis demonstrations and practical takeaways attendees could test the very same day.",
    date: "Friday, 31 January 2026",
    dateShort: "31",
    month: "JAN",
    time: "6:30 PM – 8:30 PM GMT",
    duration: "2 Hours",
    location: "London, United Kingdom",
    locationMode: "In Person",
    seats: "78 attendees",
    price: "—",
    currency: "",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1400&q=80",
    status: "Past",
    highlights: [
      "Free public event · open to all",
      "Live handwriting sample analysis on stage",
      "Follow-up 1:1 sessions booked within 48h",
    ],
    audience: "General public · therapists · educators.",
  },
];

const FILTERS: { label: string; value: EventFilter }[] = [
  { label: "All Events", value: "all" },
  { label: "Workshops", value: "workshop" },
  { label: "Retreats", value: "retreat" },
  { label: "Talks", value: "talk" },
  { label: "Group Programs", value: "group" },
];

const formatToFilterKey = (format: DummyEvent["format"]): EventFilter => {
  switch (format) {
    case "Workshop":
      return "workshop";
    case "Retreat":
      return "retreat";
    case "Talk":
      return "talk";
    case "Group Program":
      return "group";
    default:
      return "all";
  }
};

const statusBadge = (status: DummyEvent["status"]) => {
  switch (status) {
    case "Upcoming":
      return "bg-[#073E42]/8 text-[#073E42] border-[#073E42]/15";
    case "Waitlist":
      return "bg-[#E6B055]/12 text-[#A07A2F] border-[#E6B055]/30";
    case "Sold Out":
      return "bg-[#722F37]/10 text-[#722F37] border-[#722F37]/15";
    case "Past":
      return "bg-[#1C2826]/8 text-[#1C2826]/70 border-[#1C2826]/10";
    default:
      return "bg-[#073E42]/8 text-[#073E42] border-[#073E42]/15";
  }
};

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<EventFilter>("all");
  const [expandedPast, setExpandedPast] = useState(false);

  const filtered = UPCOMING_EVENTS.filter((ev) => {
    if (activeFilter === "all") return true;
    return formatToFilterKey(ev.format) === activeFilter;
  });

  const visiblePast = expandedPast ? PAST_EVENTS : PAST_EVENTS.slice(0, 2);

  const handleReserve = (ev: DummyEvent) => {
    window.open(
      "https://calendly.com/ilagarg-official/clarity-call-with-ila",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="bg-[#FBF9F5] text-[#1C2826] antialiased min-h-screen selection:bg-[#073E42]/10 selection:text-[#073E42]">
      {/* ============== SECTION 1 — HERO ============== */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 lg:px-12 border-b border-[#073E42]/8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <filter id="noiseFilterEventsHero">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves={3}
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterEventsHero)" />
          </svg>
        </div>
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-[#073E42]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[420px] h-[420px] bg-[#E6B055]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073E42]/8 border border-[#073E42]/15 text-[#073E42] text-xs font-bold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#E6B055]" />
            <span>Live & In-Person Experiences</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#073E42] leading-[1.08] font-bold max-w-4xl mx-auto">
            Gatherings designed to move you —
            <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#073E42]/90">
              from insight, to action, to lasting change.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#1C2826]/70 font-normal max-w-2xl mx-auto leading-relaxed">
            Workshops, retreats, masterclasses, and small-group journeys with
            Ila Garg and our guest practitioners. Every event is intentionally
            small, safe, and structured for real, tangible transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#upcoming-events"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#073E42] text-white text-sm font-medium shadow-md hover:bg-[#063033] transition-all duration-300 group"
            >
              Browse Upcoming Events
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#past-highlights"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#073E42]/20 text-[#073E42] text-sm font-medium hover:bg-[#073E42]/5 transition-all duration-300"
            >
              See Past Highlights
            </a>
          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-2xl bg-white border border-[#073E42]/10 flex items-center justify-center text-[#073E42]">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#073E42]/60">
                Intimate Groups
              </div>
              <div className="text-sm text-[#1C2826]/75">
                Capped to keep every circle safe & held.
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-2xl bg-white border border-[#073E42]/10 flex items-center justify-center text-[#073E42]">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#073E42]/60">
                Live · Online & In-Person
              </div>
              <div className="text-sm text-[#1C2826]/75">
                Choose the format that feels right for you.
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-2xl bg-white border border-[#073E42]/10 flex items-center justify-center text-[#073E42]">
                <Ticket className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#073E42]/60">
                Easy Booking
              </div>
              <div className="text-sm text-[#1C2826]/75">
                Reserve in a few clicks or book a quick clarity call.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SECTION 2 — UPCOMING EVENTS ============== */}
      <section
        id="upcoming-events"
        className="py-16 lg:py-28 px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto space-y-10 lg:space-y-12">
          {/* Header + Filters */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6B055]">
                · Upcoming ·
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#073E42] font-bold leading-tight">
                Reserve your seat at the next gathering.
              </h2>
              <p className="text-base text-[#1C2826]/70 leading-relaxed">
                Filter by format or scroll through everything coming up.
                Seats are intentionally limited so every participant receives
                genuine time and attention.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => {
                const active = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                      active
                        ? "bg-[#073E42] text-white border-[#073E42] shadow-md"
                        : "bg-white text-[#073E42]/80 border-[#073E42]/12 hover:border-[#073E42]/25 hover:text-[#073E42]"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Event List — editorial alternating layout */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 rounded-3xl bg-white border border-[#073E42]/8">
              <div className="text-[#073E42]/50 text-sm mb-2">
                No upcoming events match this filter right now.
              </div>
              <button
                onClick={() => setActiveFilter("all")}
                className="text-[#073E42] text-sm font-semibold underline underline-offset-4 hover:text-[#E6B055]"
              >
                Reset filters →
              </button>
            </div>
          ) : (
            <div className="space-y-20 lg:space-y-28">
              {filtered.map((ev, index) => {
                const isEven = index % 2 === 0;
                return (
                  <article
                    key={ev.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                  >
                    {/* Image Column */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_24px_48px_-16px_rgba(7,62,66,0.18)] border border-[#073E42]/8 group">
                        <div className="relative aspect-[4/3] w-full bg-white">
                          <Image
                            src={ev.image}
                            alt={ev.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        {/* Floating Date Corner Badge */}
                        <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md border border-[#073E42]/8 text-center min-w-[72px]">
                          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E6B055]">
                            {ev.month}
                          </div>
                          <div className="text-2xl font-bold text-[#073E42] leading-none">
                            {ev.dateShort}
                          </div>
                        </div>
                        {/* Status pill */}
                        <div
                          className={`absolute top-5 right-5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm border ${statusBadge(
                            ev.status
                          )}`}
                        >
                          {ev.status}
                        </div>
                      </div>
                    </div>

                    {/* Copy Column */}
                    <div
                      className={`lg:col-span-6 space-y-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {/* Metadata line */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#073E42]/55">
                        <span className="text-[#073E42]">#0{index + 1}</span>
                        <span>·</span>
                        <span>{ev.format.toUpperCase()}</span>
                        <span>·</span>
                        <span>{ev.locationMode.toUpperCase()}</span>
                      </div>

                      {/* Title + tagline */}
                      <div className="space-y-2">
                        <h3 className="text-3xl sm:text-4xl text-[#073E42] font-bold leading-[1.15]">
                          {ev.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#073E42]/75 font-medium italic">
                          {ev.tagline}
                        </p>
                      </div>

                      {/* When / Where / Duration chips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-3 rounded-2xl bg-white border border-[#073E42]/8 px-4 py-3">
                          <Calendar className="w-4 h-4 text-[#E6B055] mt-0.5 shrink-0" />
                          <div className="space-y-0.5">
                            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#073E42]/50">
                              When
                            </div>
                            <div className="text-sm text-[#1C2826]/85 leading-snug">
                              {ev.date}
                              <span className="block text-[#073E42]/65 text-[13px] mt-0.5">
                                <Clock className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                                {ev.time}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-2xl bg-white border border-[#073E42]/8 px-4 py-3">
                          <MapPin className="w-4 h-4 text-[#E6B055] mt-0.5 shrink-0" />
                          <div className="space-y-0.5">
                            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#073E42]/50">
                              Where
                            </div>
                            <div className="text-sm text-[#1C2826]/85 leading-snug">
                              {ev.location}
                              <span className="block text-[#073E42]/65 text-[13px] mt-0.5">
                                {ev.duration} · {ev.locationMode}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-[15px] text-[#1C2826]/75 leading-relaxed">
                        {ev.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#073E42]/55">
                          What&apos;s Inside
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
                          {ev.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-[#1C2826]/80 leading-snug"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#073E42] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Audience + seats + price + CTA */}
                      <div className="pt-5 border-t border-[#073E42]/10 space-y-5">
                        <div className="flex flex-wrap items-start justify-between gap-5">
                          <div className="space-y-1 max-w-md">
                            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#073E42]/50">
                              Best For
                            </div>
                            <p className="text-sm text-[#1C2826]/75">
                              {ev.audience}
                            </p>
                            <p className="text-[12px] text-[#073E42]/60 font-medium pt-1">
                              <Users className="w-3.5 h-3.5 inline mr-1 -mt-0.5 text-[#E6B055]" />
                              {ev.seats}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#073E42]/50">
                              Investment
                            </div>
                            <div className="text-3xl font-bold text-[#073E42] mt-0.5">
                              {ev.price}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <button
                            onClick={() => handleReserve(ev)}
                            disabled={ev.status === "Sold Out"}
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#073E42] text-white text-sm font-semibold shadow-md hover:bg-[#063033] transition-all duration-300 disabled:bg-[#1C2826]/40 disabled:cursor-not-allowed group"
                          >
                            {ev.status === "Waitlist"
                              ? "Join the Waitlist"
                              : ev.status === "Sold Out"
                              ? "Sold Out"
                              : "Reserve Your Seat"}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </button>
                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#073E42]/15 text-[#073E42] text-sm font-semibold hover:bg-[#073E42]/5 transition-all duration-300"
                          >
                            Ask a question before booking
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ============== SECTION 3 — PAST HIGHLIGHTS ============== */}
      <section
        id="past-highlights"
        className="py-16 lg:py-28 px-6 lg:px-12 bg-[#F6F2EC] relative overflow-hidden"
      >
        <div className="absolute top-20 right-10 w-[420px] h-[420px] bg-[#073E42]/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-[#E6B055]/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6B055]">
                · Past Highlights ·
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#073E42] font-bold leading-tight">
                A look back at recent gatherings.
              </h2>
              <p className="text-base text-[#1C2826]/70 leading-relaxed">
                A small selection of workshops, retreats, and talks hosted
                across India and the UK in 2025–2026.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePast.map((ev) => (
              <article
                key={ev.id}
                className="group rounded-[1.75rem] bg-white border border-[#073E42]/8 overflow-hidden shadow-[0_16px_40px_-20px_rgba(7,62,66,0.15)] hover:shadow-[0_28px_60px_-24px_rgba(7,62,66,0.22)] transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={ev.image}
                    alt={ev.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm border ${statusBadge(
                      ev.status
                    )}`}
                  >
                    {ev.status}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 text-center shadow-sm border border-[#073E42]/8">
                    <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#E6B055]">
                      {ev.month}
                    </div>
                    <div className="text-lg font-bold text-[#073E42] leading-none">
                      {ev.dateShort}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#073E42]/85 backdrop-blur-sm rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    {ev.format}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-grow space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[#073E42]/60">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E6B055]" />
                      {ev.location}
                    </span>
                    <span>·</span>
                    <span>{ev.duration}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl text-[#073E42] font-bold leading-tight">
                    {ev.title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-[#1C2826]/75 leading-relaxed flex-grow">
                    {ev.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-[#073E42]/8">
                    {ev.highlights.slice(0, 3).map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[13px] text-[#1C2826]/75"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#073E42] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {PAST_EVENTS.length > 2 && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setExpandedPast(!expandedPast)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#073E42]/20 text-[#073E42] text-sm font-semibold hover:bg-[#073E42]/5 transition-all duration-300"
              >
                {expandedPast ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More Past Events
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============== SECTION 4 — CLOSING CTA ============== */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#073E42] via-[#08474B] to-[#063033] p-10 sm:p-14 lg:p-16 text-center shadow-[0_40px_80px_-30px_rgba(7,62,66,0.5)] border border-white/10">
          <div className="absolute -top-24 -right-24 w-[360px] h-[360px] bg-[#E6B055]/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] bg-[#073E42]/60 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#E6B055] text-xs font-bold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Don&apos;t see the right date?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-[1.15]">
              Book a quick clarity call
              <br className="hidden sm:inline" />
              <span className="italic font-normal text-white/85">
                and we&apos;ll match you to the next right step.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Not sure whether a workshop, 1:1 coaching, or retreat is the
              right fit? Book a complimentary 45-minute call with our team —
              no sales pressure, just honest guidance on what will serve you
              best.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="https://calendly.com/ilagarg-official/clarity-call-with-ila"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E6B055] text-[#073E42] text-sm font-bold shadow-[0_14px_30px_-12px_rgba(230,176,85,0.65)] hover:bg-[#D8A246] transition-all duration-300 group"
              >
                Book My Complimentary Clarity Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Ongoing Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
