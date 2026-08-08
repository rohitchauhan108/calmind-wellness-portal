'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiClock,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiGlobe,
  FiBriefcase,
} from 'react-icons/fi';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const encodedAddress = encodeURIComponent(
    '2 Woodcock Court, Reading, RG7 1BZ, United Kingdom'
  );

  return (
    <main className="py-16 md:py-24 bg-[#FBF9F5] text-[#1C2826] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#D37B58] bg-[#D37B58]/10 px-3.5 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#073E42] mt-4 mb-3">
            Contact Us
          </h1>
          <p className="text-base text-[#1C2826]/80 leading-relaxed">
            Have a question or want to discuss a coaching program? Reach out to us below or schedule a consultation.
          </p>
        </motion.div>

        {/* TOP SECTION: 3 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Email & Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white p-6 rounded-2xl border border-[#073E42]/10 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#073E42]/5 rounded-xl text-[#073E42]">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D37B58]">
                  Email Us
                </h3>
                <a
                  href="mailto:contact@ilagarg.com"
                  className="text-sm font-medium text-[#1C2826] hover:text-[#073E42] hover:underline transition-colors"
                >
                  contact@ilagarg.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#073E42]/10 flex items-center gap-3">
              <div className="p-3 bg-[#073E42]/5 rounded-xl text-[#073E42]">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D37B58]">
                  Phone Number
                </h3>
                <a
                  href="tel:+16475704793"
                  className="text-sm font-medium text-[#1C2826] hover:text-[#073E42] hover:underline transition-colors"
                >
                  +(647) 570-4793
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white p-6 rounded-2xl border border-[#073E42]/10 shadow-sm hover:shadow-xl transition-shadow duration-300 space-y-4"
          >
            <div className="flex items-start gap-3">
              <div className="p-3 bg-[#073E42]/5 rounded-xl text-[#073E42] shrink-0">
                <FiClock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D37B58] mb-1">
                  Working Hours
                </h3>
                <span className="text-sm font-semibold text-[#073E42] block mb-0.5">
                  By Appointment Only
                </span>
                <p className="text-sm text-[#1C2826]/80">
                  Mon — Sat: 08:00 - 18:00
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#073E42]/10 flex items-center gap-2 text-xs text-[#1C2826]/75">
              <FiGlobe className="text-[#073E42]" />
              <span>Worldwide Online Consultations</span>
            </div>
          </motion.div>

          {/* Card 3: Operational Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white p-6 rounded-2xl border border-[#073E42]/10 shadow-sm hover:shadow-xl transition-shadow duration-300 space-y-3"
          >
            <div className="flex items-start gap-3">
              <div className="p-3 bg-[#073E42]/5 rounded-xl text-[#073E42] shrink-0">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D37B58] mb-1">
                  Operational Address
                </h3>
                <p className="text-sm text-[#1C2826] leading-relaxed">
                  2, Woodcock Court<br />
                  Reading, RG7 1BZ<br />
                  United Kingdom
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#073E42]/10 flex items-center gap-2 text-xs text-[#1C2826]/75">
              <FiBriefcase className="text-[#073E42]" />
              <span>Entity: <strong>Ila Garg</strong></span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Left Form, Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-[#073E42]/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#073E42] mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-[#1C2826]/75 mb-6">
                Fill out the form below and we will get back to you shortly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center space-y-4 bg-[#FBF9F5] rounded-xl border border-[#073E42]/10 my-auto"
                >
                  <FiCheckCircle className="w-12 h-12 text-[#073E42] mx-auto" />
                  <h3 className="text-xl font-serif font-semibold text-[#073E42]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#1C2826]/80">
                    Thank you for reaching out. We will respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-[#D37B58] uppercase tracking-wider hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#073E42] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-[#1C2826]/15 text-sm text-[#1C2826] bg-[#FBF9F5]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#073E42] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#073E42] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#1C2826]/15 text-sm text-[#1C2826] bg-[#FBF9F5]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#073E42] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#073E42] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Coaching Inquiry"
                      className="w-full px-4 py-3 rounded-xl border border-[#1C2826]/15 text-sm text-[#1C2826] bg-[#FBF9F5]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#073E42] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#073E42] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-[#1C2826]/15 text-sm text-[#1C2826] bg-[#FBF9F5]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#073E42] transition-all resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 bg-[#073E42] text-white font-semibold text-sm rounded-xl hover:bg-[#073E42]/90 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 bg-white p-2 rounded-2xl border border-[#073E42]/10 shadow-sm overflow-hidden min-h-[380px] lg:min-h-full flex flex-col"
          >
            <iframe
              title="Operational Address Map"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[360px] rounded-xl border-0"
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            ></iframe>
          </motion.div>

        </div>
      </div>
    </main>
  );
}