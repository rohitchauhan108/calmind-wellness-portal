import type { Metadata, Viewport } from 'next';
import React from 'react';
import './globals.css';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';

export const metadata: Metadata = {
  title: 'Ila Garg - Life Coaching, Energy Healing & Graphotherapy',
  description: 
    'Understand your mind. Heal your emotional blocks. Reclaim your life. We blend Life Coaching, Energy Healing, and Graphotherapy to help you address the root causes of your struggles.',
};

export const viewport: Viewport = {
  themeColor: '#FDFBF8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal font-sans antialiased selection:bg-brand-olive-light/30 selection:text-brand-charcoal">
        <Header />
        <main className="flex-grow pt-[104px] md:pt-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}