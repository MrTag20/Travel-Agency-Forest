import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollReveal:
 * Universal, high-performance IntersectionObserver-based scroll animation engine.
 * Automatically discovers, staggers, and animates every section, header, card,
 * badge, illustration, and content element across the entire platform smoothly as the user scrolls.
 */
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Mark document as reveal-ready so CSS rules activate
    document.documentElement.classList.add('reveal-ready');

    // 2. Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(
        '.reveal-fade-up, .reveal-fade-down, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-on-scroll, [data-reveal]'
      ).forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    // 3. Auto-tag content elements across the platform that don't have explicit reveal classes
    const autoTagElements = () => {
      // Find all sections, main containers, and articles
      const containers = document.querySelectorAll('main section, main > div > section, main article');
      
      containers.forEach((section) => {
        // Section headers & titles
        const headings = section.querySelectorAll('h1, h2, h3, .section-header');
        headings.forEach((h) => {
          if (!hasRevealClass(h)) {
            h.classList.add('reveal-fade-up');
          }
        });

        // Grid containers: stagger children
        const grids = section.querySelectorAll('.grid');
        grids.forEach((grid) => {
          const children = Array.from(grid.children);
          children.forEach((child, idx) => {
            if (!hasRevealClass(child)) {
              child.classList.add('reveal-fade-up');
              if (!child.getAttribute('data-delay')) {
                // Stagger delay within row (0ms, 100ms, 200ms, 300ms)
                const stagger = (idx % 4) * 100;
                child.setAttribute('data-delay', `${stagger}`);
              }
            }
          });
        });

        // Testimonial cards & reviews
        const cards = section.querySelectorAll('.card-base, .glass-panel, blockquote');
        cards.forEach((card, idx) => {
          if (!hasRevealClass(card)) {
            card.classList.add('reveal-fade-up');
            if (!card.getAttribute('data-delay')) {
              card.setAttribute('data-delay', `${(idx % 3) * 120}`);
            }
          }
        });
      });
    };

    function hasRevealClass(el) {
      return (
        el.classList.contains('reveal-fade-up') ||
        el.classList.contains('reveal-fade-down') ||
        el.classList.contains('reveal-fade-left') ||
        el.classList.contains('reveal-fade-right') ||
        el.classList.contains('reveal-scale') ||
        el.classList.contains('reveal-on-scroll') ||
        el.hasAttribute('data-reveal')
      );
    }

    autoTagElements();

    // 4. Reveal an element smoothly
    const revealElement = (el) => {
      if (el.classList.contains('is-revealed')) return;
      const delay = el.getAttribute('data-delay') || el.dataset?.delay;
      if (delay) {
        el.style.transitionDelay = `${delay}ms`;
      }
      el.classList.add('is-revealed');
    };

    // 5. Check elements currently visible in viewport (above-the-fold)
    const checkVisibleOnScreen = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const revealElements = document.querySelectorAll(
        '.reveal-fade-up, .reveal-fade-down, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-on-scroll, [data-reveal]'
      );

      revealElements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          const rect = el.getBoundingClientRect();
          // Element is visible or entering viewport window
          if (rect.top <= windowHeight * 0.92 && rect.bottom >= 0) {
            revealElement(el);
          }
        }
      });
    };

    // 6. Setup IntersectionObserver
    let observer;
    const registerObserver = () => {
      if (!('IntersectionObserver' in window)) {
        checkVisibleOnScreen();
        return;
      }

      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealElement(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -30px 0px',
          threshold: 0.06
        }
      );

      const elementsToObserve = document.querySelectorAll(
        '.reveal-fade-up, .reveal-fade-down, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-on-scroll, [data-reveal]'
      );
      elementsToObserve.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    registerObserver();

    // 7. Initial checks with slight staggered ticks for immediate view
    checkVisibleOnScreen();
    const t1 = setTimeout(() => {
      autoTagElements();
      checkVisibleOnScreen();
      registerObserver();
    }, 60);

    const t2 = setTimeout(() => {
      checkVisibleOnScreen();
    }, 250);

    // 8. MutationObserver to handle dynamic React renders or route navigation
    let mutationObserver;
    if ('MutationObserver' in window) {
      mutationObserver = new MutationObserver(() => {
        autoTagElements();
        const elementsToObserve = document.querySelectorAll(
          '.reveal-fade-up, .reveal-fade-down, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-on-scroll, [data-reveal]'
        );
        elementsToObserve.forEach((el) => {
          if (!el.classList.contains('is-revealed') && observer) {
            observer.observe(el);
          }
        });
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    // 9. Scroll and resize listeners for responsiveness
    const handleScroll = () => {
      checkVisibleOnScreen();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [pathname]);
}
