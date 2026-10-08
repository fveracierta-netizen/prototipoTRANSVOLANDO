import { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { NavigationPage } from '../types';
import { COMPANY_PHONE_TEL } from '../utils/navigation';

interface StickyMobileCTAProps {
  currentPage: NavigationPage;
  currentServiceSlug?: string;
  onOpenQuote: () => void;
}

export default function StickyMobileCTA({
  currentPage,
  currentServiceSlug,
  onOpenQuote,
}: StickyMobileCTAProps) {
  // Hide completely on quote and contact pages to avoid redundant controls, overlap, and form occlusion
  if (currentPage === 'presupuesto' || currentPage === 'contacto') {
    return null;
  }

  // Pages with a prominent Hero where sticky CTA must remain HIDDEN while hero is visible:
  const hasHero = currentPage === 'home' || currentPage === 'service' || currentPage === 'internacional';

  // On pages with hero: initially hidden; on pages without hero (e.g. blog, casos): visible immediately
  const [isVisible, setIsVisible] = useState(() => !hasHero);

  useEffect(() => {
    if (!hasHero) {
      setIsVisible(true);
      return;
    }

    // When on a page with hero, start hidden until scrolled past
    setIsVisible(false);

    let observer: IntersectionObserver | null = null;
    let frameId: number;

    const attachHeroObserver = () => {
      // Find the active mobile hero element across Home, ServiceDetail, or Internacional
      const heroEl =
        document.querySelector('[data-mobile-hero="true"]') ||
        document.getElementById('mobile-home-hero') ||
        document.getElementById('mobile-internacional-hero') ||
        document.querySelector('[id^="mobile-hero-"]');

      if (heroEl) {
        observer = new IntersectionObserver(
          ([entry]) => {
            // If hero is in viewport, hide sticky bar.
            // When hero is scrolled out of viewport, show sticky bar.
            setIsVisible(!entry.isIntersecting);
          },
          {
            root: null,
            threshold: 0.1,
          }
        );
        observer.observe(heroEl);
      } else {
        frameId = requestAnimationFrame(attachHeroObserver);
      }
    };

    attachHeroObserver();

    return () => {
      if (observer) observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [currentPage, currentServiceSlug, hasHero]);

  return (
    <aside
      id="sticky-mobile-bar"
      aria-label="Acciones rápidas de contacto"
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] shadow-[0_-4px_16px_rgba(31,45,61,0.08)] px-[16px] py-[10px] pb-[max(env(safe-area-inset-bottom),10px)] transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-full pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-[10px] max-w-[480px] mx-auto">
        {/* LLAMAR */}
        <a
          id="sticky-call-btn"
          href={COMPANY_PHONE_TEL}
          className="flex-1 flex items-center justify-center gap-[8px] min-h-[46px] rounded-[10px] border border-[#1F2D3D] bg-white text-[#1F2D3D] active:bg-[#F8FAFC] font-['Inter',sans-serif] font-bold text-[14px] leading-tight transition-colors"
          aria-label="Llamar ahora a Transvolando"
        >
          <Phone className="w-[16px] h-[16px] text-[#DC901B]" />
          <span>Llamar ahora</span>
        </a>

        {/* PRESUPUESTO */}
        <a
          id="sticky-quote-btn"
          href="/presupuesto/"
          onClick={(e) => {
            e.preventDefault();
            onOpenQuote();
          }}
          className="flex-[1.4] flex items-center justify-center gap-[6px] min-h-[46px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[14px] leading-tight shadow-sm transition-colors cursor-pointer"
        >
          <span>Pedir presupuesto</span>
          <ArrowRight className="w-[15px] h-[15px]" />
        </a>
      </div>
    </aside>
  );
}
