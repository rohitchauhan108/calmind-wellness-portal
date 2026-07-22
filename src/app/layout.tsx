import type { Metadata, Viewport } from 'next';
import React from 'react';
import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import LenisSmoothScroll from '../components/ui/LenisSmoothScroll';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';

// Configure Montserrat for Headings
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

// Configure Poppins for Body Text
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ila Garg - Life Coaching, Energy Healing & Graphotherapy',
  description: 
    'Understand your mind. Heal your emotional blocks. Reclaim your life. We blend Life Coaching, Energy Healing, and Graphotherapy to help you address the root causes of your struggles.',
};

export const viewport: Viewport = {
  themeColor: '#F7F3EF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col bg-brand-cream text-brand-espresso font-sans antialiased selection:bg-brand-burgundy/10 selection:text-brand-burgundy">
        <LenisSmoothScroll />
        <Header />
        <main className="flex-grow pt-[104px] md:pt-[120px]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}