import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Ila Garg',
  description: 'Privacy policy explaining how Ila Garg collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-20 bg-[#FBF9F5] text-[#1C2826] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#073E42] mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#1C2826]/60 mb-8">
          Last Updated: July 2026
        </p>

        <p className="text-sm sm:text-base leading-relaxed text-[#1C2826]/85 font-sans mb-8">
          At Ila Garg, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or purchase our services.
        </p>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#1C2826]/85 font-sans">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following information:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing information</li>
              <li>Information you voluntarily share during coaching sessions, workshops, forms, or enquiries</li>
              <li>Technical information such as IP address, browser type, and website usage through cookies and analytics tools</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">2. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Deliver coaching, healing, workshops, and other services</li>
              <li>Process payments</li>
              <li>Respond to your enquiries</li>
              <li>Send booking confirmations and service-related communication</li>
              <li>Improve our website and services</li>
              <li>Send newsletters or promotional emails (only if you choose to receive them)</li>
              <li>Meet our legal and regulatory obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">3. Payment Information</h2>
            <p className="mb-2">
              Payments are processed securely through trusted third-party payment providers.
            </p>
            <p>
              We do not store your credit or debit card details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">4. Sharing Your Information</h2>
            <p className="mb-2">
              We do not sell, rent, or trade your personal information.
            </p>
            <p className="mb-2">
              Your information may be shared only with trusted service providers who help us operate our business, such as payment processors, email platforms, scheduling software, or website hosting providers, and only where necessary.
            </p>
            <p>
              We may also disclose information where required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">5. Cookies</h2>
            <p className="mb-2">
              Our website may use cookies and similar technologies to improve your browsing experience, analyse website traffic, and understand how visitors use our website.
            </p>
            <p>
              You may disable cookies through your browser settings if you prefer.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">6. Data Security</h2>
            <p className="mb-2">
              We take reasonable administrative, technical, and organisational measures to protect your personal information.
            </p>
            <p>
              However, no method of electronic storage or internet transmission is completely secure, and therefore we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">7. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information where legally permitted</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-[#073E42] mb-2">10. Contact Us</h2>
            <p className="mb-1">
              If you have any questions regarding this Privacy Policy or how your information is handled, please contact us:
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