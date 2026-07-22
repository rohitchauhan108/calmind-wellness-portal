'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 ease-out group"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
        <MessageCircle className="w-6 h-6" />
      </div>
      <span className="font-semibold text-sm hidden sm:block">Chat Now</span>
    </a>
  );
}
