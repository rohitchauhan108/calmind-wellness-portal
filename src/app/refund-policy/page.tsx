import React from 'react';

export const metadata = {
  title: 'Refund & Cancellation Policy | Ila Garg',
  description: 'Refund, cancellation, and session rescheduling policy for Ila Garg services.',
};

export default function RefundPolicyPage() {
  return (
    <main className="py-20 bg-[#FBF9F5] text-[#1C2826] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#073E42] mb-4">
          Refund & Cancellation Policy
        </h1>
        <p className="text-sm text-[#1C2826]/60 mb-8">
          Last updated: July 2026
        </p>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#1C2826]/85 font-sans">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">1. Session Rescheduling</h2>
            <p>
              If you need to reschedule a scheduled coaching session, please inform us at least 24 hours prior to the scheduled time. Requests made within 24 hours of the appointment time may result in forfeiture of the session fee.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">2. Cancellations & Refunds</h2>
            <p>
              We understand plans can change. Below are our refund terms for various services:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <strong>1-on-1 Sessions:</strong> Full refund if canceled at least 48 hours prior to the scheduled session. No refunds for cancellations made under 24 hours or for no-shows.
              </li>
              <li>
                <strong>Multi-Week Programs & Digital Products:</strong> Once accessed or initiated, program fees are non-refundable unless stated otherwise in writing.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">3. Refund Processing Time</h2>
            <p>
              Approved refunds will be processed automatically to your original method of payment via Razorpay. It typically takes <strong>5 to 7 business days</strong> for the refunded amount to reflect in your bank account or credit card statement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">4. Contact For Refunds</h2>
            <p>
              To initiate a refund or cancellation request, please email us directly at <strong>contact@ilagarg.com</strong> with your order details and reason for cancellation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}