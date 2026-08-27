import type { Metadata, Viewport } from 'next';
import React from 'react';
import { Philosopher, Poppins } from 'next/font/google';
import './globals.css';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header';
import LenisSmoothScroll from '../components/ui/LenisSmoothScroll';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';

const philosopher = Philosopher({
  subsets: ['latin'],
  variable: '--font-philosopher',
  weight: ['400', '700'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ila Garg - Life Coaching & Graphotherapy',
  description: 
    'Your life today is the result of thousands of small patterns. Change the patterns, change your future. Practical Life Coaching and Graphotherapy to create real transformation.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${philosopher.variable} ${poppins.variable}`}>
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