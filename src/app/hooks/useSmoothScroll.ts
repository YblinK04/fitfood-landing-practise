'use client';

import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string, headerOffset: number = 80) => {
    
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`Element with id "${sectionId}" not found`);
      return;
    }

  
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    try {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } catch {
      
      window.scrollTo(0, offsetPosition);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch {
      window.scrollTo(0, 0);
    }
  }, []);

  return { scrollToSection, scrollToTop };
}