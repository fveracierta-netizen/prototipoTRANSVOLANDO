import { useState } from 'react';
import { logoSvgPaths } from '../data/logoSvgPaths';
import { NavigationPage } from '../types';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string, articleSlug?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [imgSrc] = useState('/logos/logos-institucionales.webp');
  const [imgError, setImgError] = useState(false);

  const handleNav = (page: NavigationPage, serviceSlug?: string) => {
    onNavigate(page, serviceSlug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <footer className="bg-white text-[#1F2D3D] border-t border-[#E2E8F0] w-full font-['Inter',sans-serif] pb-[72px] lg:pb-0">
      {/* ========================================================================= */}
      {/* 1. FRANJA SUPERIOR: LOGOS INSTITUCIONALES / OFICIALES (SOLO DESKTOP) */}
      {/* ========================================================================= */}
      <div className="hidden md:block w-full border-b border-[#E2E8F0] py-[28px] sm:py-[36px] px-[24px] sm:px-[32px] md:px-[48px] bg-[#F8FAFC]">
        <div className="max-w-[1160px] mx-auto flex items-center justify-center">
          {!imgError ? (
            <img
              src={imgSrc}
              alt="Logos institucionales oficiales - Unión Europea, Gobierno de España, Plan de Recuperación NextGenerationEU, Comunidad de Madrid"
              onError={handleImageError}
              className="max-h-[54px] sm:max-h-[64px] md:max-h-[72px] w-auto max-w-full object-contain"
            />
          ) : (
            <div className="text-center text-[#7C7D7A] text-[13px] tracking-wide py-[6px]">
              Apoyo institucional y marco regulatorio oficial
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FOOTER PRINCIPAL: 3 COLUMNAS EQUILIBRADAS (DESKTOP) / VERTICAL (MOBILE) */}
      {/* ========================================================================= */}
      <div className="max-w-[1160px] mx-auto px-[24px] sm:px-[32px] md:px-[48px] py-[48px] sm:py-[60px] md:py-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] sm:gap-[48px] md:gap-[40px] lg:gap-[64px]">
          {/* ===================================================================== */}
          {/* COLUMNA 1: INFORMACIÓN DE TRANSVOLANDO */}
          {/* ===================================================================== */}
          <div className="flex flex-col items-start">
            {/* Logo de Transvolando */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('home');
              }}
              className="inline-block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC901B] rounded-[4px]"
              aria-label="Transvolando Inicio"
            >
              <div className="h-[36px] sm:h-[40px] md:h-[42px] overflow-clip relative shrink-0 w-[185px] sm:w-[205px] md:w-[220px]">
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

            {/* Slogan */}
            <p className="font-semibold text-[#1F2D3D] text-[15px] sm:text-[16px] leading-[24px] mt-[16px]">
              Envíos ágiles y seguros
            </p>

            {/* Dirección */}
            <div className="text-[#7C7D7A] text-[14px] sm:text-[15px] leading-[24px] mt-[10px]">
              <p>Calle Empleo, 28, Nave 10</p>
              <p>28906 Getafe, Madrid (España)</p>
            </div>

            {/* Teléfono y Correo Corporativo Verificado */}
            <div className="flex flex-col gap-[4px] text-[14px] sm:text-[15px] mt-[10px]">
              <a
                href="tel:+34674346912"
                className="font-semibold text-[#1F2D3D] hover:text-[#DC901B] transition-colors inline-block"
              >
                Tel: 674 34 69 12
              </a>
              <a
                href="mailto:info@transvolando.com"
                className="text-[#7C7D7A] hover:text-[#DC901B] transition-colors inline-block"
              >
                info@transvolando.com
              </a>
            </div>

            {/* Iconos de Redes Sociales (≥ 44px para accesibilidad táctil) */}
            <div className="flex items-center gap-[10px] mt-[20px]">
              <a
                href="https://www.linkedin.com/company/transvolando/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="size-[44px] rounded-[10px] border border-[#E2E8F0] flex items-center justify-center text-[#7C7D7A] hover:text-[#1F2D3D] hover:border-[#1F2D3D] transition-colors"
              >
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/transvolando/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="size-[44px] rounded-[10px] border border-[#E2E8F0] flex items-center justify-center text-[#7C7D7A] hover:text-[#1F2D3D] hover:border-[#1F2D3D] transition-colors"
              >
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.facebook.com/transvolando/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="size-[44px] rounded-[10px] border border-[#E2E8F0] flex items-center justify-center text-[#7C7D7A] hover:text-[#1F2D3D] hover:border-[#1F2D3D] transition-colors"
              >
                <Facebook className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://www.youtube.com/@transvolando"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="size-[44px] rounded-[10px] border border-[#E2E8F0] flex items-center justify-center text-[#7C7D7A] hover:text-[#1F2D3D] hover:border-[#1F2D3D] transition-colors"
              >
                <Youtube className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* COLUMNA 2: ENLACES LEGALES */}
          {/* ===================================================================== */}
          <div className="flex flex-col">
            <span className="font-semibold text-[#1F2D3D] text-[15px] mb-[16px] block">Información legal</span>
            <ul className="flex flex-col gap-[12px] sm:gap-[14px] text-[14px] sm:text-[15px]">
              <li>
                <a
                  href="/politica-de-privacidad/"
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-cookies/"
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Política de cookies
                </a>
              </li>
              <li>
                <a
                  href="/aviso-legal/"
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Aviso legal
                </a>
              </li>
              <li>
                <a
                  href="/condiciones-de-transporte/"
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Condiciones de Transporte
                </a>
              </li>
              <li>
                <a
                  href="/condiciones-generales/"
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Condiciones Generales
                </a>
              </li>
            </ul>
          </div>

          {/* ===================================================================== */}
          {/* COLUMNA 3: ENLACES CORPORATIVOS */}
          {/* ===================================================================== */}
          <div className="flex flex-col">
            <span className="font-semibold text-[#1F2D3D] text-[15px] mb-[16px] block">Transvolando B2B</span>
            <ul className="flex flex-col gap-[12px] sm:gap-[14px] text-[14px] sm:text-[15px]">
              <li>
                <a
                  href="/preguntas-frecuentes/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home');
                    setTimeout(() => {
                      const el = document.getElementById('preguntas-frecuentes') || document.getElementById('faq-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Preguntas más Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="/casos/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('casos');
                  }}
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Casos de Éxito en Logística y Transporte
                </a>
              </li>
              <li>
                <a
                  href="/localizaciones/"
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Localizaciones
                </a>
              </li>
              <li>
                <a
                  href="/que-no-hacemos-en-transvolando/"
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  ¿Qué no hacemos en Transvolando?
                </a>
              </li>
              <li>
                <a
                  href="/trabaja-con-nosotros/"
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Trabaja con nosotros
                </a>
              </li>
              <li>
                <a
                  href="/eres-transportista/"
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  ¿Eres transportista?
                </a>
              </li>
              <li>
                <a
                  href="/sobre-nosotros/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home');
                  }}
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="/contacto/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('contacto');
                  }}
                  className="text-[#7C7D7A] hover:text-[#1F2D3D] transition-colors inline-block"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
