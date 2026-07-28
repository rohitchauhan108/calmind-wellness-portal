import React from 'react';

export const metadata = {
  title: 'Medical & Results Disclaimer | Ila Garg',
  description: 'Medical and results disclaimer governing the use of Ila Garg coaching, healing, and educational services.',
};

export default function DisclaimerPage() {
  return (
    <main className="py-20 bg-[#FBF9F5] text-[#1C2826] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#073E42] mb-4">
          Medical &amp; Results Disclaimer
        </h1>
        <p className="text-sm text-[#1C2826]/60 mb-8">
          Last Updated: July 2026
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-[#1C2826]/85 font-sans mb-8">
          Please read this disclaimer carefully before using our website or participating in any coaching, healing, workshop, course, or program offered by Ila Garg.
        </p>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#1C2826]/85 font-sans">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Personal Development Services</h2>
            <p>
              The services provided by Ila Garg—including Life Coaching, Healing Sessions, Chakra Balancing Programs, Handwriting Analysis, Graphotherapy, Workshops, Online Programs, and Educational Content—are intended solely for personal growth, self-awareness, mindset development, and educational purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Not Medical Advice</h2>
            <p className="mb-2">
              Our services are not medical, psychological, psychiatric, legal, or financial advice.
            </p>
            <p className="mb-2">
              They are not intended to diagnose, treat, cure, or prevent any disease, illness, or mental health condition.
            </p>
            <p className="mb-2">
              Always seek advice from a qualified healthcare professional regarding any medical or psychological concerns.
            </p>
            <p>
              Never ignore professional medical advice or discontinue prescribed medication or treatment based on any information provided through our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Individual Results May Vary</h2>
            <p className="mb-2">
              Every individual is different.
            </p>
            <p className="mb-2">
              While many clients experience meaningful personal growth and positive life changes, we do not guarantee any specific results.
            </p>
            <p className="mb-2">
              Any testimonials, case studies, client stories, or examples shared on this website or during our programs are individual experiences and should not be interpreted as guarantees of future outcomes.
            </p>
            <p>
              Your results depend on many factors, including your personal circumstances, level of participation, consistency, commitment, and actions taken after the sessions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Personal Responsibility</h2>
            <p className="mb-2">
              By participating in our services, you acknowledge that you are fully responsible for your own decisions, actions, health, wellbeing, and results.
            </p>
            <p>
              You agree that all decisions made before, during, or after participation are your own responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Emergency Situations</h2>
            <p className="mb-2">
              Our services are not appropriate for medical emergencies or mental health crises.
            </p>
            <p>
              If you are experiencing a medical emergency, severe psychological distress, or thoughts of harming yourself or others, seek immediate assistance from your local emergency services or a qualified healthcare professional.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Limitation of Liability</h2>
            <p>
              By using this website or participating in our services, you agree that Ila Garg shall not be held liable for any direct, indirect, incidental, or consequential loss, damage, injury, or claim arising from your participation or reliance on any information or services provided.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Acceptance</h2>
            <p>
              By using this website or purchasing any service, you acknowledge that you have read, understood, and agreed to this Medical &amp; Results Disclaimer.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">Contact</h2>
            <p className="mb-1">
              For any questions regarding this disclaimer, please contact:
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