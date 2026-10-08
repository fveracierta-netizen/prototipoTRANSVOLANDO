import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NavigateFunction } from '../types';

interface RelatedServicesTickerProps {
  currentSlug: string;
  onNavigate: NavigateFunction;
}

interface ServiceLinkItem {
  slug: string;
  name: string;
  isInternational?: boolean;
}

const SERVICE_DICTIONARY: Record<string, ServiceLinkItem> = {
  'transporte-de-maquinaria': {
    slug: 'transporte-de-maquinaria',
    name: 'Transporte de maquinaria',
  },
  'transportes-especiales': {
    slug: 'transportes-especiales',
    name: 'Transportes especiales',
  },
  'cargas-completas': {
    slug: 'cargas-completas',
    name: 'Cargas completas',
  },
  'grupaje': {
    slug: 'grupaje',
    name: 'Grupaje y paletería',
  },
  'transporte-urgente': {
    slug: 'transporte-urgente',
    name: 'Transporte urgente',
  },
  'transporte-para-eventos': {
    slug: 'transporte-para-eventos',
    name: 'Ferias y eventos',
  },
  'cargas-pesadas': {
    slug: 'cargas-pesadas',
    name: 'Cargas pesadas',
  },
  'transporte-de-gran-volumen': {
    slug: 'transporte-de-gran-volumen',
    name: 'Gran volumen',
  },
  'transporte-de-palets': {
    slug: 'transporte-de-palets',
    name: 'Transporte de palets',
  },
  'transporte-internacional': {
    slug: 'transporte-internacional',
    name: 'Transporte internacional',
    isInternational: true,
  },
};

// Strictly 3 or 4 functionally related services per page (no self-reference, no generic filler)
const RELATED_SERVICES_BY_SLUG: Record<string, string[]> = {
  'transporte-de-maquinaria': [
    'transportes-especiales',
    'cargas-pesadas',
    'transporte-internacional',
  ],
  'transportes-especiales': [
    'transporte-de-maquinaria',
    'cargas-pesadas',
    'transporte-de-gran-volumen',
    'transporte-internacional',
  ],
  'cargas-completas': [
    'grupaje',
    'transporte-urgente',
    'transporte-de-palets',
    'transporte-internacional',
  ],
  'grupaje': [
    'cargas-completas',
    'transporte-de-palets',
    'transporte-urgente',
    'transporte-internacional',
  ],
  'transporte-urgente': [
    'cargas-completas',
    'grupaje',
    'transporte-para-eventos',
    'transporte-internacional',
  ],
  'transporte-para-eventos': [
    'transporte-urgente',
    'transporte-de-gran-volumen',
    'cargas-completas',
  ],
  'cargas-pesadas': [
    'transportes-especiales',
    'transporte-de-maquinaria',
    'cargas-completas',
  ],
  'transporte-de-gran-volumen': [
    'transportes-especiales',
    'cargas-completas',
    'transporte-para-eventos',
    'transporte-internacional',
  ],
  'transporte-de-palets': [
    'grupaje',
    'cargas-completas',
    'transporte-urgente',
    'transporte-internacional',
  ],
  'transporte-internacional': [
    'cargas-completas',
    'grupaje',
    'transporte-urgente',
    'transportes-especiales',
  ],
};

export default function RelatedServicesTicker({
  currentSlug,
  onNavigate,
}: RelatedServicesTickerProps) {
  const relatedSlugs = RELATED_SERVICES_BY_SLUG[currentSlug] || [];
  const relatedItems = relatedSlugs
    .map((s) => SERVICE_DICTIONARY[s])
    .filter(Boolean);

  const handleServiceClick = (e: React.MouseEvent, item: ServiceLinkItem) => {
    e.preventDefault();
    if (item.isInternational) {
      onNavigate('internacional');
    } else {
      onNavigate('service', item.slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      aria-label="Servicios relacionados"
      className="bg-[#fcfaf7] border-b border-[#ebe4d6] py-[24px] sm:py-[28px] md:py-[32px] overflow-hidden"
    >
      <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
        {/* Encabezado limpio mostrando únicamente: Servicios relacionados (sin "Ver todos", sin "Alternativas", sin espacios residuales) */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#221e19] text-[17px] sm:text-[19px] tracking-[-0.3px] mb-[12px] sm:mb-[16px]">
          Servicios relacionados
        </h2>

        {/* Desktop / Tablet: Fila única estática, completa y correctamente espaciada */}
        <div className="hidden md:flex items-center gap-[12px] flex-wrap">
          {relatedItems.map((item) => (
            <a
              key={`desktop-${item.slug}`}
              href={item.isInternational ? '/internacional/' : `/${item.slug}/`}
              onClick={(e) => handleServiceClick(e, item)}
              className="group inline-flex items-center gap-[8px] px-[18px] py-[9px] rounded-full text-[14px] font-semibold whitespace-nowrap shrink-0 select-none cursor-pointer bg-white hover:bg-[#fbf6ec] active:bg-[#f6ecd9] border border-[#dd7a2a]/25 hover:border-[#dd7a2a] text-[#221e19] hover:text-[#dd7a2a] transition-all shadow-2xs"
            >
              <span className="whitespace-nowrap">{item.name}</span>
              <ArrowRight className="w-[13px] h-[13px] text-[#dd7a2a] group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile: Ticker de una sola fila con desplazamiento horizontal suave */}
      <div className="md:hidden relative w-full overflow-hidden">
        {/* Máscara de borde muy sutil en los extremos */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-[14px] bg-gradient-to-r from-[#fcfaf7] to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-[14px] bg-gradient-to-l from-[#fcfaf7] to-transparent z-10"
          aria-hidden="true"
        />

        {/* Track de movimiento continuo que nunca corta palabras ni tags */}
        <div className="flex items-center w-max animate-marquee-slow marquee-row-reduced">
          {/* Bloque original: espacio idéntico para loop matemáticamente continuo */}
          <div className="flex items-center gap-[10px] pr-[10px] shrink-0">
            {relatedItems.map((item) => (
              <a
                key={`mobile-orig-${item.slug}`}
                href={item.isInternational ? '/internacional/' : `/${item.slug}/`}
                onClick={(e) => handleServiceClick(e, item)}
                className="group inline-flex items-center gap-[7px] px-[16px] py-[8.5px] rounded-full text-[13px] font-semibold whitespace-nowrap shrink-0 select-none cursor-pointer bg-white active:bg-[#fbf6ec] border border-[#dd7a2a]/25 active:border-[#dd7a2a] text-[#221e19] active:text-[#dd7a2a] transition-colors shadow-2xs"
              >
                <span className="whitespace-nowrap">{item.name}</span>
                <ArrowRight className="w-[12px] h-[12px] text-[#dd7a2a] shrink-0" />
              </a>
            ))}
          </div>

          {/* Bloque duplicado idéntico para loop continuo sin saltos */}
          <div
            className="marquee-duplicate flex items-center gap-[10px] pr-[10px] shrink-0"
            aria-hidden="true"
          >
            {relatedItems.map((item) => (
              <a
                key={`mobile-dup-${item.slug}`}
                href={item.isInternational ? '/internacional/' : `/${item.slug}/`}
                onClick={(e) => handleServiceClick(e, item)}
                tabIndex={-1}
                className="group inline-flex items-center gap-[7px] px-[16px] py-[8.5px] rounded-full text-[13px] font-semibold whitespace-nowrap shrink-0 select-none cursor-pointer bg-white active:bg-[#fbf6ec] border border-[#dd7a2a]/25 active:border-[#dd7a2a] text-[#221e19] active:text-[#dd7a2a] transition-colors shadow-2xs"
              >
                <span className="whitespace-nowrap">{item.name}</span>
                <ArrowRight className="w-[12px] h-[12px] text-[#dd7a2a] shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
