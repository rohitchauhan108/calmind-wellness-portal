import React from 'react';

export const metadata = {
  title: 'Terms & Conditions | Ila Garg',
  description: 'Terms and conditions governing the use of Ila Garg coaching services and website.',
};

export default function TermsPage() {
  return (
    <main className="py-20 bg-[#FBF9F5] text-[#1C2826] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#073E42] mb-4">
          Terms & Conditions
        </h1>
        <p className="text-sm text-[#1C2826]/60 mb-8">
          Last updated: July 2026
        </p>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#1C2826]/85 font-sans">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">1. Overview</h2>
            <p>
              Welcome to Ila Garg (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing our website, booking a coaching or handwriting analysis session, or purchasing any program or digital product, you agree to comply with and be bound by the following Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">2. Services</h2>
            <p>
              Ila Garg provides life coaching, healing, and handwriting analysis services. These services are intended for personal growth, self-improvement, and educational purposes. They do not constitute medical, psychological, psychiatric, or licensed clinical advice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">3. Bookings & Payments</h2>
            <p>
              All bookings made through our website are processed securely via Razorpay. Full payment is required at the time of booking to confirm your session or program enrollment. All prices listed are in INR (Indian Rupees) unless stated otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">4. Client Responsibility</h2>
            <p>
              Coaching results depend significantly on client active participation and implementation. While we strive to support your personal growth, individual results may vary, and no specific outcomes are guaranteed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">5. Intellectual Property</h2>
            <p>
              All content on this website—including logos, text, graphics, program materials, and handwriting guides—is the intellectual property of Ila Garg and is protected under applicable copyright laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}