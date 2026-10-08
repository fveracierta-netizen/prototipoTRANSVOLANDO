import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { NavigationPage } from '../types';
import { COMPANY_PHONE_TEL } from '../utils/navigation';

interface ServiceFinalCTAProps {
  serviceSlug: string;
  title: string;
  description?: string;
  quoteButtonText?: string;
  onNavigate: (
    page: NavigationPage,
    serviceSlug?: string,
    articleSlug?: string,
    extraParams?: Record<string, string>
  ) => void;
}

export default function ServiceFinalCTA({
  serviceSlug,
  title,
  description,
  quoteButtonText = 'Pedir presupuesto',
  onNavigate,
}: ServiceFinalCTAProps) {
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('presupuesto', serviceSlug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const finalDescription =
    description ||
    'Te enviamos por correo una propuesta con tres opciones (Básico, Estándar y Premium) y te contactamos en menos de 4 horas, sin importes ni precios cerrados.';

  return (
    <section
      id="service-final-cta"
      aria-label="Cotización personalizada"
      className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-[32px] sm:py-[40px] md:py-[48px]"
    >
      <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
        {/* DESKTOP LAYOUT (HORIZONTAL, LIMPIO Y BALANCEADO) */}
        <div className="hidden md:flex items-center justify-between gap-[36px] lg:gap-[48px]">
          <div className="max-w-[640px]">
            <span className="font-['Inter',sans-serif] text-[11px] sm:text-[12px] font-bold text-[#DC901B] uppercase tracking-[1.2px] block mb-[6px]">
              PRESUPUESTO PERSONALIZADO
            </span>
            <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] lg:text-[28px] tracking-[-0.5px] leading-[1.2]">
              {title}
            </h2>
            <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] leading-[23px] mt-[8px]">
              {finalDescription}
            </p>
          </div>

          <div className="flex items-center gap-[12px] shrink-0">
            <a
              href={`/presupuesto/?servicio=${serviceSlug}`}
              onClick={handleQuoteClick}
              className="min-h-[48px] px-[24px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer shadow-sm whitespace-nowrap"
            >
              <span>{quoteButtonText}</span>
              <ArrowRight className="w-[16px] h-[16px]" />
            </a>

            <a
              href={COMPANY_PHONE_TEL}
              className="min-h-[48px] px-[20px] rounded-[10px] bg-white border border-[#1F2D3D] text-[#1F2D3D] hover:bg-[#F8FAFC] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
            >
              <Phone className="w-[16px] h-[16px] text-[#DC901B]" />
              <span>Llamar ahora</span>
            </a>
          </div>
        </div>

        {/* MOBILE LAYOUT (ALINEADO A LA IZQUIERDA, COMPACTO, AMBOS BOTONES VISIBLES) */}
        <div className="md:hidden text-left flex flex-col">
          <span className="font-['Inter',sans-serif] text-[11px] font-bold text-[#DC901B] uppercase tracking-[1.2px] block mb-[4px]">
            PRESUPUESTO PERSONALIZADO
          </span>
          <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[20px] tracking-[-0.4px] leading-[1.25]">
            {title}
          </h2>
          <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] leading-[21px] mt-[6px]">
            {finalDescription}
          </p>

          <div className="mt-[16px] flex flex-col sm:flex-row gap-[10px]">
            <a
              href={`/presupuesto/?servicio=${serviceSlug}`}
              onClick={handleQuoteClick}
              className="w-full min-h-[48px] px-[20px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer shadow-sm text-center"
            >
              <span>{quoteButtonText}</span>
              <ArrowRight className="w-[15px] h-[15px]" />
            </a>

            <a
              href={COMPANY_PHONE_TEL}
              className="w-full min-h-[46px] px-[16px] rounded-[10px] bg-white border border-[#1F2D3D] text-[#1F2D3D] hover:bg-[#F8FAFC] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer text-center"
            >
              <Phone className="w-[16px] h-[16px] text-[#DC901B]" />
              <span>Llamar ahora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
