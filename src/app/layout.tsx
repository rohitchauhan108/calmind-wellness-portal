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
  title: 'Ila Garg - Life Coaching & Graphotherapy',
  description: 
    'Your life today is the result of thousands of small patterns. Change the patterns, change your future. Practical Life Coaching and Graphotherapy to create real transformation.',
  icons: {
    icon: '/favicon.png', // Main favicon icon
    shortcut: '/favicon.png',
    apple: '/favicon.png', // Optional: used for Apple home screen shortcut
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF7F2', // Updated to match Warm Ivory background
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
      <body className="min-h-screen flex flex-col bg-brand-ivory text-brand-charcoal font-sans antialiased selection:bg-brand-forest/10 selection:text-brand-forest">
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