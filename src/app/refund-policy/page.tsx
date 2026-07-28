import React from 'react';

export const metadata = {
  title: 'Refund Policy | Ila Garg',
  description: 'Refund, cancellation, and session rescheduling policy for Ila Garg services.',
};

export default function RefundPolicyPage() {
  return (
    <main className="py-20 bg-[#FBF9F5] text-[#1C2826] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#073E42] mb-4">
          Refund Policy
        </h1>
        <p className="text-sm text-[#1C2826]/60 mb-8">
          Last Updated: July 2026
        </p>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#1C2826]/85 font-sans">
          <p>
            Thank you for choosing Ila Garg.
          </p>
          <p>
            We are committed to providing high-quality coaching, healing, workshops, and personal transformation programs. Please read this Refund Policy carefully before making a purchase.
          </p>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">No Refund Policy</h2>
            <p className="mb-2">
              All purchases made through this website are final and non-refundable.
            </p>
            <p className="mb-2">
              By purchasing any of our services, you acknowledge and agree that you are making an informed decision and accept this Refund Policy.
            </p>
            <p className="mb-2">
              This policy applies to all products and services, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>One-to-One Coaching Sessions</li>
              <li>Healing Sessions</li>
              <li>Chakra Balancing Programs</li>
              <li>Handwriting Analysis &amp; Graphotherapy</li>
              <li>Workshops</li>
              <li>Group Coaching Programs</li>
              <li>Online Courses</li>
              <li>Digital Products</li>
              <li>Events</li>
              <li>Memberships (if applicable)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Missed Sessions</h2>
            <p>
              If you fail to attend a scheduled session or event, or arrive late, the session will be considered forfeited. No refund, credit, or replacement session will be provided.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Change of Mind</h2>
            <p className="mb-2">
              Refunds will not be issued due to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Change of mind</li>
              <li>Personal scheduling conflicts</li>
              <li>Failure to attend</li>
              <li>Lack of participation</li>
              <li>Dissatisfaction based on expected outcomes</li>
              <li>Any reason other than our inability to deliver the purchased service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Results Disclaimer</h2>
            <p>
              Our services are designed to support personal growth and transformation. Results vary from person to person based on many factors, including individual commitment, participation, and circumstances. Therefore, no guarantees of specific results are made, and refunds will not be issued based on outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Service Cancellation by Us</h2>
            <p>
              If we are unable to deliver a service due to circumstances within our control, we reserve the right to reschedule the service or, at our sole discretion, provide an appropriate alternative.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Acceptance of this Policy</h2>
            <p>
              By purchasing any product or service from Ila Garg, you confirm that you have read, understood, and agreed to this Refund Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Contact</h2>
            <p className="mb-1">
              If you have any questions regarding this policy, please contact us at:
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:contact@ilagarg.com"
                className="text-[#073E42] underline font-medium hover:opacity-80"
              >
                contact@ilagarg.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}