import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollReveal:
 * Smooth, high-performance IntersectionObserver-based scroll animation engine.
 * Elements animate into view naturally as the user scrolls down the page.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Mark document as reveal-ready so animations can trigger
    document.documentElement.classList.add('reveal-ready');

    // 2. Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(
        '.reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-on-scroll, [data-reveal]'
      ).forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // 3. Selective check for elements currently visible in initial viewport
    const checkVisibleOnScreen = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const revealElements = document.querySelectorAll(
        '.reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-on-scroll, [data-reveal]'
      );

      revealElements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          const rect = el.getBoundingClientRect();
          // Only reveal if actually within the current visible viewport window
          if (rect.top <= windowHeight * 0.92 && rect.bottom >= 0) {
            const delay = el.getAttribute('data-delay');
            if (delay) {
              el.style.transitionDelay = `${delay}ms`;
            }
            el.classList.add('is-revealed');
          }
        }
      });
    };

    // 4. Setup IntersectionObserver to trigger animations dynamically as user scrolls down
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const delay = el.getAttribute('data-delay');
              if (delay) {
                el.style.transitionDelay = `${delay}ms`;
              }
              el.classList.add('is-revealed');
              observer.unobserve(el);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px', // Triggers slightly before element enters view
          threshold: 0.08
        }
      );

      const elementsToObserve = document.querySelectorAll(
        '.reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-on-scroll, [data-reveal]'
      );
      elementsToObserve.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    }

    // 5. Initial check for elements in the above-the-fold view
    checkVisibleOnScreen();
    const t1 = setTimeout(checkVisibleOnScreen, 100);

    // 6. Scroll listener to guarantee detection during dynamic/fast scrolling
    const handleScroll = () => {
      checkVisibleOnScreen();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(t1);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (observer) observer.disconnect();
    };
  }, [pathname]);
}
