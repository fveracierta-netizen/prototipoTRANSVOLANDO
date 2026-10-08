import { useState, useEffect, useRef } from 'react';
import { servicesData } from '../data/servicesData';
import { logoSvgPaths } from '../data/logoSvgPaths';
import { NavigationPage } from '../types';
import { COMPANY_PHONE_TEL } from '../utils/navigation';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

interface HeaderProps {
  currentPage: NavigationPage;
  currentServiceSlug?: string;
  budgetStep?: number;
  onNavigate: (
    page: NavigationPage,
    serviceSlug?: string,
    articleSlug?: string,
    extraParams?: Record<string, string>
  ) => void;
}

export default function Header({
  currentPage,
  currentServiceSlug,
  budgetStep = 1,
  onNavigate,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesAccordionOpen, setMobileServicesAccordionOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile drawer on ESC key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (page: NavigationPage, serviceSlug?: string, articleSlug?: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(page, serviceSlug, articleSlug);
  };

  // =========================================================================
  // 1. MINIMAL HEADER FOR /presupuesto/ FUNNEL (DISTRACTION-FREE)
  // =========================================================================
  if (currentPage === 'presupuesto') {
    return (
      <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] w-full shadow-xs">
        <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px] py-[14px] md:py-[18px] flex items-center justify-between gap-[16px]">
          {/* LOGO */}
          <a
            id="header-logo-btn"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC901B] rounded-[4px]"
            aria-label="Transvolando Inicio"
          >
            <div className="h-[34px] sm:h-[38px] md:h-[43.787px] overflow-clip relative shrink-0 w-[170px] sm:w-[190px] md:w-[235px]">
              <div className="absolute inset-[76.42%_48.73%_2.62%_0.98%]">
                <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 118.188 9.17971">
                  <g>
                    <path d={logoSvgPaths.p16b07400} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p222a0600} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p39533500} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p1eeb1c80} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p355a9400} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p1c0ffff0} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p10f307f0} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p30581100} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p16c88500} fill="#1F2D3D" />
                    <path d={logoSvgPaths.pc26ed40} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p38ea2a70} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p2b9d00} fill="#1F2D3D" />
                    <path d={logoSvgPaths.pc4d11f0} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p53acd00} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p29b25a00} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p3be93500} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p283e0140} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p310c7900} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p31c66900} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p2adee400} fill="#1F2D3D" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[2.52%_1.02%_39.73%_1.21%]">
                <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 229.768 25.29">
                  <g>
                    <path d={logoSvgPaths.p20cb2840} fill="#1F2D3D" />
                    <path d={logoSvgPaths.ped0ef80} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p83a2600} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p7e60e80} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p30ca4580} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p28511600} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p343f5800} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p31e1b000} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p32655900} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p2293bd00} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p11eef72} fill="#1F2D3D" />
                    <path d={logoSvgPaths.p1e2bb400} fill="#DC901B" />
                  </g>
                </svg>
              </div>
            </div>
          </a>

          {/* MOBILE STEP INDICATOR: "1 de 3" */}
          <div className="flex sm:hidden items-center">
            <span className="font-['Inter',sans-serif] font-bold text-[#1F2D3D] text-[15px] tracking-tight">
              {budgetStep} de 3
            </span>
          </div>

          {/* DESKTOP CENTER STEP INDICATOR: "Paso 1 de 3" */}
          <div className="hidden sm:flex items-center absolute left-1/2 -translate-x-1/2">
            <span className="font-['Inter',sans-serif] font-semibold text-[#7C7D7A] text-[14px] md:text-[15px] tracking-tight">
              Paso {budgetStep} de 3
            </span>
          </div>

          {/* DESKTOP RIGHT PHONE */}
          <div className="hidden sm:flex items-center">
            <a
              href={COMPANY_PHONE_TEL}
              className="font-['Inter',sans-serif] font-bold text-[14px] md:text-[15px] text-[#1F2D3D] hover:text-[#DC901B] transition-colors flex items-center gap-[6px]"
              aria-label="Llamar ahora a Transvolando"
            >
              <Phone className="w-[14px] h-[14px] text-[#DC901B]" />
              <span>Llamar ahora</span>
            </a>
          </div>
        </div>

        {/* MOBILE HORIZONTAL PROGRESS BAR */}
        <div className="sm:hidden w-full bg-[#E2E8F0] h-[3px]">
          <div
            className="bg-[#DC901B] h-full transition-all duration-300 ease-out"
            style={{ width: `${(budgetStep / 3) * 100}%` }}
          />
        </div>
      </header>
    );
  }

  // =========================================================================
  // 2. STANDARD HEADER (ALL OTHER PAGES)
  // =========================================================================
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] w-full transition-shadow duration-200">
      <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px] py-[12px] md:py-[18px] flex items-center justify-between gap-[16px]">
        {/* LOGO */}
        <a
          id="header-logo-btn"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center text-left cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC901B] rounded-[4px]"
          aria-label="Transvolando Inicio"
        >
          <div className="h-[36px] sm:h-[38px] md:h-[43.787px] overflow-clip relative shrink-0 w-[180px] sm:w-[190px] md:w-[235px]">
            <div className="absolute inset-[76.42%_48.73%_2.62%_0.98%]">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 118.188 9.17971">
                <g>
                  <path d={logoSvgPaths.p16b07400} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p222a0600} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p39533500} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p1eeb1c80} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p355a9400} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p1c0ffff0} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p10f307f0} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p30581100} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p16c88500} fill="#1F2D3D" />
                  <path d={logoSvgPaths.pc26ed40} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p38ea2a70} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p2b9d00} fill="#1F2D3D" />
                  <path d={logoSvgPaths.pc4d11f0} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p53acd00} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p29b25a00} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p3be93500} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p283e0140} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p310c7900} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p31c66900} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p2adee400} fill="#1F2D3D" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[2.52%_1.02%_39.73%_1.21%]">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 229.768 25.29">
                <g>
                  <path d={logoSvgPaths.p20cb2840} fill="#1F2D3D" />
                  <path d={logoSvgPaths.ped0ef80} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p83a2600} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p7e60e80} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p30ca4580} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p28511600} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p343f5800} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p31e1b000} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p32655900} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p2293bd00} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p11eef72} fill="#1F2D3D" />
                  <path d={logoSvgPaths.p1e2bb400} fill="#DC901B" />
                </g>
              </svg>
            </div>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-[28px] xl:gap-[36px]" aria-label="Navegación principal">
          {/* SERVICIOS DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="nav-servicios-toggle"
              type="button"
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-[6px] py-[6px] font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] cursor-pointer transition-colors duration-200 ${
                currentPage === 'service' ? 'text-[#DC901B] font-semibold' : 'text-[#1F2D3D] hover:text-[#DC901B]'
              }`}
            >
              <span>Servicios</span>
              <ChevronDown
                className={`w-[15px] h-[15px] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#DC901B]' : 'text-[#7C7D7A]'}`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div
                id="services-dropdown-panel"
                className="absolute top-full left-[-40px] mt-[14px] w-[540px] bg-white border border-[#E2E8F0] rounded-[16px] shadow-lg p-[20px] grid grid-cols-2 gap-x-[16px] gap-y-[10px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                role="menu"
              >
                <div className="col-span-2 pb-[8px] mb-[4px] border-b border-[#E2E8F0] flex items-center justify-between">
                  <span className="font-['Inter',sans-serif] text-[11px] font-bold text-[#7C7D7A] uppercase tracking-wider">
                    Todos los servicios de transporte B2B
                  </span>
                  <a
                    href="/servicios/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('servicios');
                    }}
                    className="text-[12px] font-medium text-[#DC901B] hover:underline"
                  >
                    Ver todos los servicios
                  </a>
                </div>

                {servicesData.map((svc) => (
                  <a
                    key={svc.slug}
                    id={`nav-service-${svc.slug}`}
                    href={`/${svc.slug}/`}
                    role="menuitem"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('service', svc.slug);
                    }}
                    className={`flex flex-col p-[10px] rounded-[10px] text-left transition-colors cursor-pointer group ${
                      currentPage === 'service' && currentServiceSlug === svc.slug
                        ? 'bg-[#F8FAFC] border border-[#DC901B]/30'
                        : 'hover:bg-[#F8FAFC]'
                    }`}
                  >
                    <div>
                      <div className="font-['Inter',sans-serif] font-semibold text-[#1F2D3D] text-[14px] leading-[19px] group-hover:text-[#DC901B] transition-colors">
                        {svc.name}
                      </div>
                      <div className="text-[12px] text-[#7C7D7A] leading-[16px] line-clamp-1 mt-[2px]">
                        {svc.shortDesc}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            id="nav-internacional"
            href="/transporte-internacional/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('internacional');
            }}
            className={`font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] cursor-pointer transition-colors ${
              currentPage === 'internacional' ? 'text-[#DC901B] font-semibold' : 'text-[#1F2D3D] hover:text-[#DC901B]'
            }`}
          >
            Internacional
          </a>

          <a
            id="nav-casos"
            href="/casos/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('casos');
            }}
            className={`font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] cursor-pointer transition-colors ${
              currentPage === 'casos' ? 'text-[#DC901B] font-semibold' : 'text-[#1F2D3D] hover:text-[#DC901B]'
            }`}
          >
            Casos de éxito
          </a>

          <a
            id="nav-blog"
            href="/blog/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('blog');
            }}
            className={`font-['Inter',sans-serif] font-medium text-[15px] leading-[22.5px] cursor-pointer transition-colors ${
              currentPage === 'blog' || currentPage === 'article' ? 'text-[#DC901B] font-semibold' : 'text-[#1F2D3D] hover:text-[#DC901B]'
            }`}
          >
            Blog
          </a>
        </nav>

        {/* DESKTOP ACTIONS: LLAMAR AHORA Y PEDIR PRESUPUESTO (≥ 44px) */}
        <div className="hidden lg:flex items-center gap-[12px]">
          <a
            id="header-phone-desktop"
            href={COMPANY_PHONE_TEL}
            className="min-h-[44px] flex items-center gap-[8px] font-['Inter',sans-serif] font-bold text-[#1F2D3D] hover:text-[#DC901B] hover:border-[#DC901B] transition-all py-[8px] px-[16px] rounded-[10px] border border-[#E2E8F0] bg-white text-[14px] cursor-pointer shadow-2xs"
            aria-label="Llamar ahora a Transvolando"
          >
            <Phone className="w-[15px] h-[15px] text-[#DC901B]" />
            <span>Llamar ahora</span>
          </a>

          <a
            id="header-quote-desktop"
            href="/presupuesto/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('presupuesto');
            }}
            className="min-h-[44px] flex items-center gap-[8px] font-['Inter',sans-serif] font-bold text-[#1F2D3D] bg-[#DC901B] hover:brightness-105 transition-all py-[8px] px-[18px] rounded-[10px] text-[14px] cursor-pointer shadow-sm"
          >
            <span>Pedir presupuesto</span>
          </a>
        </div>

        {/* MOBILE CONTROLS: HAMBURGER BUTTON */}
        <div className="flex lg:hidden items-center">
          <button
            id="mobile-menu-toggle"
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            onClick={() => setMobileMenuOpen(true)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#1F2D3D] hover:text-[#DC901B] active:bg-[#F8FAFC] rounded-[8px] cursor-pointer transition-colors"
          >
            <Menu className="w-[26px] h-[26px]" strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* MOBILE FULL-SCREEN MODAL DRAWER */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          className="lg:hidden fixed inset-0 z-[100] bg-white flex flex-col h-screen w-screen overflow-hidden"
        >
          {/* BARRA SUPERIOR DEL DRAWER CON LOGO Y BOTÓN CERRAR */}
          <div className="flex items-center justify-between px-[16px] sm:px-[24px] py-[12px] border-b border-[#E2E8F0] bg-white shrink-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="flex items-center text-left cursor-pointer"
              aria-label="Transvolando Inicio"
            >
              <div className="h-[36px] overflow-clip relative shrink-0 w-[180px]">
                <div className="absolute inset-[76.42%_48.73%_2.62%_0.98%]">
                  <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 118.188 9.17971">
                    <g>
                      <path d={logoSvgPaths.p16b07400} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p222a0600} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p39533500} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p1eeb1c80} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p355a9400} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p1c0ffff0} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p10f307f0} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p30581100} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p16c88500} fill="#1F2D3D" />
                      <path d={logoSvgPaths.pc26ed40} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p38ea2a70} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p2b9d00} fill="#1F2D3D" />
                      <path d={logoSvgPaths.pc4d11f0} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p53acd00} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p29b25a00} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p3be93500} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p283e0140} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p310c7900} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p31c66900} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p2adee400} fill="#1F2D3D" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-[2.52%_1.02%_39.73%_1.21%]">
                  <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 229.768 25.29">
                    <g>
                      <path d={logoSvgPaths.p20cb2840} fill="#1F2D3D" />
                      <path d={logoSvgPaths.ped0ef80} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p83a2600} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p7e60e80} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p30ca4580} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p28511600} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p343f5800} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p31e1b000} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p32655900} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p2293bd00} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p11eef72} fill="#1F2D3D" />
                      <path d={logoSvgPaths.p1e2bb400} fill="#DC901B" />
                    </g>
                  </svg>
                </div>
              </div>
            </a>

            <button
              id="mobile-menu-close"
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#1F2D3D] hover:text-[#DC901B] active:bg-[#F8FAFC] rounded-[8px] cursor-pointer"
            >
              <X className="w-[26px] h-[26px]" />
            </button>
          </div>

          {/* CUERPO CON SCROLL DEL MENÚ MOBILE */}
          <div className="flex-1 overflow-y-auto px-[20px] py-[24px] flex flex-col justify-between">
            <div className="flex flex-col">
              {/* ENLACE INICIO */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className={`text-left font-['Inter',sans-serif] font-bold text-[18px] py-[14px] border-b border-[#E2E8F0] flex items-center justify-between cursor-pointer ${
                  currentPage === 'home' ? 'text-[#DC901B]' : 'text-[#1F2D3D]'
                }`}
              >
                <span>Inicio</span>
              </a>

              {/* SERVICIOS ACORDEÓN COMPLETO */}
              <div className="border-b border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => setMobileServicesAccordionOpen(!mobileServicesAccordionOpen)}
                  className={`w-full flex items-center justify-between text-left font-['Inter',sans-serif] font-bold text-[18px] py-[14px] cursor-pointer ${
                    currentPage === 'service' ? 'text-[#DC901B]' : 'text-[#1F2D3D]'
                  }`}
                >
                  <span>Servicios</span>
                  <div className="w-[30px] h-[30px] rounded-full bg-[#F8FAFC] flex items-center justify-center">
                    <ChevronDown
                      className={`w-[18px] h-[18px] text-[#DC901B] transition-transform duration-200 ${
                        mobileServicesAccordionOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {mobileServicesAccordionOpen && (
                  <div className="pl-[8px] pb-[14px] space-y-[4px]">
                    <a
                      href="/servicios/"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick('servicios');
                      }}
                      className="block py-[8px] px-[12px] text-[14px] font-bold text-[#DC901B] rounded-[8px] hover:bg-[#F8FAFC]"
                    >
                      Ver todos los servicios →
                    </a>
                    {servicesData.map((svc) => (
                      <a
                        key={svc.slug}
                        href={`/${svc.slug}/`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick('service', svc.slug);
                        }}
                        className={`block py-[10px] px-[12px] text-[15px] rounded-[8px] transition-colors cursor-pointer ${
                          currentPage === 'service' && currentServiceSlug === svc.slug
                            ? 'bg-[#F8FAFC] text-[#DC901B] font-bold'
                            : 'text-[#1F2D3D] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        {svc.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* INTERNACIONAL */}
              <a
                href="/transporte-internacional/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('internacional');
                }}
                className={`text-left font-['Inter',sans-serif] font-bold text-[18px] py-[14px] border-b border-[#E2E8F0] flex items-center justify-between cursor-pointer ${
                  currentPage === 'internacional' ? 'text-[#DC901B]' : 'text-[#1F2D3D]'
                }`}
              >
                <span>Internacional</span>
              </a>

              {/* CASOS DE ÉXITO */}
              <a
                href="/casos/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('casos');
                }}
                className={`text-left font-['Inter',sans-serif] font-bold text-[18px] py-[14px] border-b border-[#E2E8F0] flex items-center justify-between cursor-pointer ${
                  currentPage === 'casos' ? 'text-[#DC901B]' : 'text-[#1F2D3D]'
                }`}
              >
                <span>Casos de éxito</span>
              </a>

              {/* BLOG */}
              <a
                href="/blog/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('blog');
                }}
                className={`text-left font-['Inter',sans-serif] font-bold text-[18px] py-[14px] border-b border-[#E2E8F0] flex items-center justify-between cursor-pointer ${
                  currentPage === 'blog' || currentPage === 'article' ? 'text-[#DC901B]' : 'text-[#1F2D3D]'
                }`}
              >
                <span>Blog</span>
              </a>

              {/* CONTACTO */}
              <a
                href="/contacto/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contacto');
                }}
                className={`text-left font-['Inter',sans-serif] font-bold text-[18px] py-[14px] border-b border-[#E2E8F0] flex items-center justify-between cursor-pointer ${
                  currentPage === 'contacto' ? 'text-[#DC901B]' : 'text-[#1F2D3D]'
                }`}
              >
                <span>Contacto</span>
              </a>
            </div>

            {/* ACCIONES INFERIORES DEL MENÚ */}
            <div className="flex flex-col gap-[12px] pt-[24px] pb-[32px] mt-[16px] border-t border-[#E2E8F0]">
              <a
                id="drawer-quote-btn"
                href="/presupuesto/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('presupuesto');
                }}
                className="w-full min-h-[50px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[16px] rounded-[12px] shadow-sm flex items-center justify-center gap-[8px] cursor-pointer"
              >
                <span>Pedir presupuesto</span>
                <ArrowRight className="w-[18px] h-[18px]" />
              </a>

              <a
                id="drawer-call-btn"
                href={COMPANY_PHONE_TEL}
                className="w-full min-h-[48px] rounded-[12px] border border-[#1F2D3D] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] cursor-pointer hover:bg-[#F8FAFC] transition-colors"
              >
                <Phone className="w-[16px] h-[16px] text-[#DC901B]" />
                <span>Llamar ahora</span>
              </a>

              <div className="text-center pt-[4px]">
                <p className="text-[13px] text-[#7C7D7A] font-['Inter',sans-serif]">
                  Lunes a viernes, de 8:00 a 19:00 · Atención directa
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
