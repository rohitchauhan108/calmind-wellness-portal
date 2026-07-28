'use client';

import React from 'react';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
  };

  return (
    <main className="py-20 bg-[#FBF9F5] text-[#1C2826] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#073E42] mb-4">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-[#1C2826]/75 mb-12">
          Have a question or want to discuss a coaching program? Reach out to us below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Business Details required by Razorpay */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D37B58] mb-1">
                Legal Entity / Brand Name
              </h3>
              <p className="text-lg font-serif font-semibold text-[#073E42]">
                Ila Garg
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D37B58] mb-1">
                Email
              </h3>
              <p className="text-base text-[#1C2826]">
                <a href="mailto:contact@ilagarg.com" className="hover:underline">
                  contact@ilagarg.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D37B58] mb-1">
                Phone Number
              </h3>
              <p className="text-base text-[#1C2826]">
                <a href="tel:+16475704793" className="hover:underline">
                  +(647) 570-4793
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#D37B58] mb-1">
                Operational Address
              </h3>
              <p className="text-base text-[#1C2826] leading-relaxed">
                2, Woodcock Court<br />
                Reading, RG7 1BZ<br />
                United Kingdom
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#073E42]/10">
            <div>
              <label className="block text-xs font-semibold text-[#073E42] mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-lg border border-[#1C2826]/15 text-sm focus:outline-none focus:border-[#073E42]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#073E42] mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg border border-[#1C2826]/15 text-sm focus:outline-none focus:border-[#073E42]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#073E42] mb-1">Message</label>
              <textarea
                rows={4}
                required
                placeholder="How can we help you?"
                className="w-full px-4 py-2.5 rounded-lg border border-[#1C2826]/15 text-sm focus:outline-none focus:border-[#073E42]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#073E42] text-white font-medium text-sm rounded-lg hover:bg-[#073E42]/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}