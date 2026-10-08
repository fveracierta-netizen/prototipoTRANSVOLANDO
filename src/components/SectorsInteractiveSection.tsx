import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { NavigationPage } from '../types';

interface ServiceRef {
  name: string;
  slug: string;
  chipLabel: string;
}

interface Sector {
  id: string;
  title: string;
  leadText: string;
  servicesLabel: string;
  services: ServiceRef[];
}

const sectorsList: Sector[] = [
  {
    id: 'industria-manufactura',
    title: 'Industria y manufactura',
    leadText: 'Maquinaria, componentes y materias primas.',
    servicesLabel: 'Servicios relacionados',
    services: [
      { name: 'cargas completas', slug: 'cargas-completas', chipLabel: 'Cargas completas' },
      { name: 'maquinaria pesada', slug: 'transporte-de-maquinaria', chipLabel: 'Maquinaria pesada' },
      { name: 'transportes especiales', slug: 'transportes-especiales', chipLabel: 'Transportes especiales' },
    ],
  },
  {
    id: 'acero-metalurgia',
    title: 'Acero y metalurgia',
    leadText: 'Bobinas y perfilería de gran peso y volumen, con rutas estables.',
    servicesLabel: 'Servicios relacionados',
    services: [
      { name: 'cargas pesadas', slug: 'cargas-pesadas', chipLabel: 'Cargas pesadas' },
      { name: 'cargas completas', slug: 'cargas-completas', chipLabel: 'Cargas completas' },
    ],
  },
  {
    id: 'construccion-materiales',
    title: 'Construcción, cerámica y materiales',
    leadText: 'Maquinaria de obra, material sobredimensionado y estructuras.',
    servicesLabel: 'Servicios relacionados',
    services: [
      { name: 'transportes especiales', slug: 'transportes-especiales', chipLabel: 'Transportes especiales' },
      { name: 'cargas pesadas', slug: 'cargas-pesadas', chipLabel: 'Cargas pesadas' },
    ],
  },
  {
    id: 'alimentacion-distribucion',
    title: 'Alimentación y distribución',
    leadText: 'Palets, distribución capilar y temperatura controlada.',
    servicesLabel: 'Servicios relacionados',
    services: [
      { name: 'grupaje', slug: 'grupaje', chipLabel: 'Grupaje' },
      { name: 'paletería', slug: 'transporte-de-palets', chipLabel: 'Paletería' },
    ],
  },
  {
    id: 'automocion',
    title: 'Automoción',
    leadText: 'Recambios, componentes y maquinaria de fabricación.',
    servicesLabel: 'Servicios relacionados',
    services: [
      { name: 'cargas completas', slug: 'cargas-completas', chipLabel: 'Cargas completas' },
      { name: 'grupaje', slug: 'grupaje', chipLabel: 'Grupaje' },
    ],
  },
  {
    id: 'eventos-ferias',
    title: 'Eventos y ferias',
    leadText: 'Stands, estructuras y equipos de gran formato con ventana de entrega fija.',
    servicesLabel: 'Servicio relacionado',
    services: [
      { name: 'transporte para eventos', slug: 'transporte-para-eventos', chipLabel: 'Transporte para eventos' },
    ],
  },
  {
    id: 'comercio-mayorista',
    title: 'Comercio y distribución mayorista',
    leadText: 'Mercancía paletizada, gran volumen y envíos recurrentes.',
    servicesLabel: 'Servicios relacionados',
    services: [
      { name: 'gran volumen', slug: 'transporte-de-gran-volumen', chipLabel: 'Gran volumen' },
      { name: 'rutas fijas', slug: 'cargas-completas', chipLabel: 'Rutas fijas' },
    ],
  },
];

interface SectorsInteractiveSectionProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string, guideSlug?: string, state?: any) => void;
}

export default function SectorsInteractiveSection({ onNavigate }: SectorsInteractiveSectionProps) {
  const [selectedSectorId, setSelectedSectorId] = useState<string>('industria-manufactura');
  const sectionRef = useRef<HTMLElement>(null);

  const activeSector = sectorsList.find((s) => s.id === selectedSectorId) || sectorsList[0];

  return (
    <section
      id="sectores-habituales"
      ref={sectionRef}
      aria-label="Sectores habituales"
      className="bg-white border-y border-[#E2E8F0] py-[44px] md:py-[80px]"
    >
      <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
        {/* 1. ENCABEZADO */}
        <div className="max-w-[760px] mb-[22px] sm:mb-[28px] md:mb-[36px]">
          <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.6px] leading-tight">
            Sectores habituales
          </h2>
          <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] leading-[21px] sm:leading-[25px] mt-[6px] sm:mt-[8px]">
            Operativa logística para empresas industriales y de distribución.
          </p>
        </div>

        {/* ============================================================== */}
        {/* MOBILE LAYOUT: SECCIONES VISIBLES SECUENCIALES (SIN PESTAÑAS) */}
        {/* ============================================================== */}
        <div className="lg:hidden flex flex-col gap-[16px]">
          {sectorsList.map((sec) => (
            <div
              key={`mobile-sec-${sec.id}`}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-[18px] sm:p-[22px]"
            >
              <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] sm:text-[20px] tracking-[-0.3px] leading-snug">
                {sec.title}
              </h3>

              <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] leading-[21px] mt-[6px]">
                {sec.leadText}
              </p>

              {/* Servicios relacionados */}
              <div className="mt-[14px] pt-[12px] border-t border-[#E2E8F0]">
                <span className="block text-[11px] font-bold text-[#7C7D7A] uppercase tracking-[0.5px] mb-[8px] font-['Inter',sans-serif]">
                  {sec.servicesLabel}
                </span>

                <div className="flex flex-wrap gap-[8px]">
                  {sec.services.map((srv) => (
                    <a
                      key={`mobile-srv-${sec.id}-${srv.slug}`}
                      href={`/${srv.slug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service', srv.slug);
                      }}
                      className="min-h-[44px] group inline-flex items-center gap-[6px] px-[12px] py-[8px] rounded-full bg-white border border-[#E2E8F0] hover:border-[#DC901B] text-[#1F2D3D] hover:text-[#DC901B] text-[13px] font-medium transition-colors select-none"
                    >
                      <span>{srv.chipLabel}</span>
                      <ArrowRight className="w-[13px] h-[13px] text-[#DC901B] group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* DESKTOP LAYOUT: SELECTOR LATERAL EDITORIAL + CARD DINÁMICA     */}
        {/* ============================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-[32px] xl:gap-[40px] items-start">
          {/* LADO IZQUIERDO (5 cols): Tags / selector de sectores */}
          <div
            className="col-span-5 flex flex-col gap-[8px]"
            role="tablist"
            aria-label="Seleccionar sector habitual"
          >
            {sectorsList.map((sec) => {
              const isSelected = sec.id === selectedSectorId;

              return (
                <button
                  key={`desktop-tag-${sec.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`desktop-panel-${sec.id}`}
                  onClick={() => setSelectedSectorId(sec.id)}
                  className={`min-h-[44px] w-full text-left px-[18px] py-[12px] rounded-[14px] text-[15px] font-['Inter',sans-serif] transition-colors cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#DC901B] text-[#1F2D3D] font-bold border border-[#DC901B] shadow-sm'
                      : 'bg-[#F8FAFC] text-[#1F2D3D] border border-[#E2E8F0] hover:border-[#DC901B] hover:bg-white'
                  }`}
                >
                  <span className="tracking-[-0.2px]">{sec.title}</span>
                  <ArrowRight
                    className={`w-[15px] h-[15px] transition-transform ${
                      isSelected
                        ? 'text-[#1F2D3D] translate-x-0.5'
                        : 'text-[#7C7D7A] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-[#DC901B]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* LADO DERECHO (7 cols): Card grande con información y servicios relacionados */}
          <div
            id={`desktop-panel-${activeSector.id}`}
            role="tabpanel"
            aria-label={activeSector.title}
            className="col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[22px] p-[32px] xl:p-[38px] shadow-xs min-h-[340px] flex flex-col justify-between"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <span className="inline-block px-[10px] py-[3px] rounded-[6px] bg-white border border-[#E2E8F0] text-[#DC901B] text-[11px] font-bold tracking-wide uppercase font-['Inter',sans-serif] mb-[12px]">
                  Sector industrial
                </span>

                {/* Nombre del sector */}
                <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[26px] xl:text-[28px] tracking-[-0.5px] leading-tight">
                  {activeSector.title}
                </h3>

                {/* Descripción del sector */}
                <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[16px] xl:text-[17px] leading-[26px] xl:leading-[27px] mt-[12px] max-w-[560px]">
                  {activeSector.leadText}
                </p>
              </div>

              {/* Servicios relacionados */}
              <div className="mt-[28px] pt-[20px] border-t border-[#E2E8F0]">
                <span className="block text-[12px] font-bold text-[#7C7D7A] uppercase tracking-[0.6px] mb-[12px] font-['Inter',sans-serif]">
                  {activeSector.servicesLabel}
                </span>

                <div className="flex flex-wrap gap-[10px]">
                  {activeSector.services.map((srv) => (
                    <a
                      key={`desktop-srv-${srv.slug}`}
                      href={`/${srv.slug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service', srv.slug);
                      }}
                      className="min-h-[44px] group inline-flex items-center gap-[8px] px-[16px] py-[10px] rounded-full bg-white border border-[#E2E8F0] hover:border-[#DC901B] text-[#1F2D3D] hover:text-[#DC901B] text-[14px] font-medium transition-colors shadow-xs cursor-pointer"
                    >
                      <span>{srv.chipLabel}</span>
                      <ArrowRight className="w-[14px] h-[14px] text-[#DC901B] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
