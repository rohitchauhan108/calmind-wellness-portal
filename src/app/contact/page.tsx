'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiGlobe,
} from 'react-icons/fi';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="py-16 md:py-24 bg-[#FBF9F5] text-[#0D3B36] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3B36] bg-[#0D3B36]/5 px-3.5 py-1.5 rounded-full inline-block border border-[#0D3B36]/15">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0D3B36] mt-4 mb-3">
            Contact Us
          </h1>
          <p className="text-base text-[#0D3B36]/75 leading-relaxed">
            Have a question or want to discuss a coaching program? Reach out to us below or schedule a consultation.
          </p>
        </motion.div>

        {/* TOP SECTION: 2 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {/* Card 1: Email & Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white p-6 rounded-2xl border border-[#0D3B36]/10 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#0D3B36]/5 rounded-xl text-[#0D3B36]">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D3B36]/60">
                  Email Us
                </h3>
                <a
                  href="mailto:contact@ilagarg.com"
                  className="text-sm font-medium text-[#0D3B36] hover:underline transition-colors"
                >
                  contact@ilagarg.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#0D3B36]/10 flex items-center gap-3">
              <div className="p-3 bg-[#0D3B36]/5 rounded-xl text-[#0D3B36]">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D3B36]/60 mb-1">
                  Phone Numbers
                </h3>
                <a
                  href="tel:+447429519990"
                  className="text-sm font-medium text-[#0D3B36] hover:underline transition-colors block"
                >
                  +44 7429 519990
                </a>
                <a
                  href="tel:+16475704793"
                  className="text-sm font-medium text-[#0D3B36] hover:underline transition-colors block mt-0.5"
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
            className="bg-white p-6 rounded-2xl border border-[#0D3B36]/10 shadow-sm hover:shadow-xl transition-shadow duration-300 space-y-4"
          >
            <div className="flex items-start gap-3">
              <div className="p-3 bg-[#0D3B36]/5 rounded-xl text-[#0D3B36] shrink-0">
                <FiClock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D3B36]/60 mb-1">
                  Working Hours
                </h3>
                <span className="text-sm font-semibold text-[#0D3B36] block">
                  By Appointment Only
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#0D3B36]/10 flex items-center gap-2 text-xs text-[#0D3B36]/75">
              <FiGlobe className="text-[#0D3B36]" />
              <span>Worldwide Online Consultations</span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Contact Form (centered) */}
        <div className="max-w-3xl mx-auto">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 sm:p-10 rounded-2xl border border-[#0D3B36]/10 shadow-sm"
          >
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0D3B36] mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-[#0D3B36]/75 mb-6">
                Fill out the form below and we will get back to you shortly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center space-y-4 bg-[#F2F5F3] rounded-xl border border-[#0D3B36]/10 my-auto"
                >
                  <FiCheckCircle className="w-12 h-12 text-[#0D3B36] mx-auto" />
                  <h3 className="text-xl font-bold text-[#0D3B36]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#0D3B36]/80">
                    Thank you for reaching out. We will respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-[#0D3B36] uppercase tracking-wider hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0D3B36] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-[#0D3B36]/15 text-sm text-[#0D3B36] bg-[#FBF9F5]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3B36] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0D3B36] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#0D3B36]/15 text-sm text-[#0D3B36] bg-[#FBF9F5]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3B36] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D3B36] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Coaching Inquiry"
                      className="w-full px-4 py-3 rounded-xl border border-[#0D3B36]/15 text-sm text-[#0D3B36] bg-[#FBF9F5]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3B36] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0D3B36] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-[#0D3B36]/15 text-sm text-[#0D3B36] bg-[#FBF9F5]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D3B36] transition-all resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 bg-[#0D3B36] text-white font-semibold text-sm rounded-xl hover:bg-[#072723] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}