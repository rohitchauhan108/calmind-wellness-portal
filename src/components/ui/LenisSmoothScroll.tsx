'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleResize = () => lenis.resize();
    window.addEventListener('resize', handleResize);

    const resizeTimeout = setTimeout(() => lenis.resize(), 150);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      lenis.destroy();
    };
  }, []);

  return null;
}
