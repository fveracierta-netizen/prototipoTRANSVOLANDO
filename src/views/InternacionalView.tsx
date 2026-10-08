import { useState } from 'react';
import { NavigationPage } from '../types';
import HomeFAQSection from '../components/HomeFAQSection';
import ServiceFinalCTA from '../components/ServiceFinalCTA';
import RelatedServicesTicker from '../components/RelatedServicesTicker';
import ImagePlaceholder from '../components/ImagePlaceholder';
import ServicePreFaqImage from '../components/ServicePreFaqImage';
import { COMPANY_PHONE_TEL } from '../utils/navigation';
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  FileText,
} from 'lucide-react';

interface InternacionalViewProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string) => void;
}

export default function InternacionalView({ onNavigate }: InternacionalViewProps) {
  const [activeCorridorIndex, setActiveCorridorIndex] = useState(0);

  const corridors = [
    {
      country: 'Francia',
      flag: '🇫🇷',
      transitTime: '24 - 48 h',
      frequency: 'Salidas diarias',
      destinations: ['París', 'Lyon', 'Burdeos', 'Toulouse', 'Marsella', 'Lille'],
      details: 'Cruce fronterizo ágil por Irún y La Jonquera. Camiones tauliner, megas y góndolas rebajadas.',
    },
    {
      country: 'Alemania',
      flag: '🇩🇪',
      transitTime: '48 - 72 h',
      frequency: '3 salidas semanales',
      destinations: ['Frankfurt', 'Stuttgart', 'Múnich', 'Düsseldorf', 'Hamburgo'],
      details: 'Conexión industrial directa para siderurgia, maquinaria y automoción.',
    },
    {
      country: 'Portugal',
      flag: '🇵🇹',
      transitTime: '24 - 48 h',
      frequency: 'Salidas diarias',
      destinations: ['Lisboa', 'Oporto', 'Braga', 'Setúbal', 'Coimbra'],
      details: 'Servicio directo puerta a puerta para cargas industriales.',
    },
    {
      country: 'Italia',
      flag: '🇮🇹',
      transitTime: '48 - 72 h',
      frequency: '3 salidas semanales',
      destinations: ['Milán', 'Turín', 'Bolonia', 'Verona', 'Roma'],
      details: 'Corredor mediterráneo con camiones con plataforma elevadora, carga completa y grupaje.',
    },
    {
      country: 'Benelux (Bélgica y Países Bajos)',
      flag: '🇧🇪 🇳🇱',
      transitTime: '48 - 72 h',
      frequency: '2 salidas semanales',
      destinations: ['Bruselas', 'Amberes', 'Róterdam', 'Ámsterdam', 'Eindhoven'],
      details: 'Conexión con los grandes hubs logísticos y portuarios del norte europeo.',
    },
    {
      country: 'Reino Unido (UK)',
      flag: '🇬🇧',
      transitTime: '72 - 96 h',
      frequency: '2 salidas semanales',
      destinations: ['Londres', 'Birmingham', 'Manchester', 'Leeds', 'Bristol'],
      details: 'Aduana a través de agente de aduanas colegiado, tramitación GVMS y cruce por canal de la Mancha.',
    },
  ];

  const internationalFaqs = [
    {
      question: '¿Cómo gestionáis las aduanas y trámites tras el Brexit con Reino Unido?',
      answer:
        'En Reino Unido la aduana se gestiona a través de agente de aduanas colegiado, coordinando el código GVMS (Goods Vehicle Movement Service), la documentación requerida y el cruce por Eurotunnel o ferry, evitando que tu mercancía quede retenida en la frontera.',
    },
    {
      question: '¿Qué seguro cubre las mercancías en transporte internacional?',
      answer:
        'Todos los transportes internacionales viajan al amparo del Convenio CMR internacional y cuentan adicionalmente con nuestra póliza propia de hasta 150.000 € por expedición, activada de oficio sin sobrecoste.',
    },
    {
      question: '¿Tengo un interlocutor que hable español para envíos en Europa?',
      answer:
        'Sí. Tienes un gestor único asignado en España que coordina tanto con los chóferes en ruta como con los destinatarios internacionales en destino, informándote puntualmente en tu idioma.',
    },
    {
      question: '¿Hacéis transporte de maquinaria y bultos fuera de medida a nivel europeo?',
      answer:
        'Sí. Tramitamos los permisos de circulación y coordinamos coches piloto y escoltas en Francia, Alemania, Portugal y el resto de estados miembros según los gálibos de cada país.',
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] pb-[88px] lg:pb-0 font-['Inter',sans-serif]">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: MOBILE AND DESKTOP */}
      {/* ========================================================================= */}

      {/* MOBILE HERO */}
      <section
        id="mobile-internacional-hero"
        data-mobile-hero="true"
        className="lg:hidden relative w-full h-[76svh] min-h-[460px] max-h-[620px] overflow-hidden flex flex-col justify-end border-b border-[#E2E8F0] bg-[#1F2D3D]"
      >
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          alt="Transporte internacional"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ objectPosition: 'center 30%' }}
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 via-45% to-[#1F2D3D]/95 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-[480px] mx-auto px-[18px] sm:px-[22px] pb-[22px] pt-[20px] flex flex-col">
          <h1 className="font-['Playfair_Display',Georgia,serif] font-bold text-white text-[28px] xs:text-[32px] sm:text-[36px] tracking-[-0.6px] leading-[1.16] mb-[8px] drop-shadow-sm">
            Transporte internacional
          </h1>

          <p className="font-['Inter',sans-serif] text-white/90 text-[13px] xs:text-[14px] sm:text-[15px] leading-[20px] xs:leading-[22px] max-w-[440px] mb-[18px] drop-shadow-xs">
            Conexión directa entre España y Europa con aduana a través de agente y seguro incluido.
          </p>

          <a
            id="mobile-internacional-hero-quote-btn"
            href="/presupuesto/?servicio=transporte-internacional"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('presupuesto', 'transporte-internacional');
            }}
            className="w-full min-h-[48px] px-[20px] rounded-[10px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] shadow-sm transition-colors cursor-pointer text-center"
          >
            <span>Pedir presupuesto</span>
            <ArrowRight className="w-[16px] h-[16px]" />
          </a>
        </div>
      </section>

      {/* DESKTOP HERO SECTION */}
      <section className="hidden lg:block relative overflow-hidden py-[56px] pb-[72px] border-b border-[#E2E8F0] bg-white">
        <div className="max-w-[1160px] mx-auto px-[32px] md:px-[48px]">
          <div className="grid grid-cols-12 gap-[36px] items-center">
            <div className="col-span-7 flex flex-col gap-[16px]">
              <h1 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[40px] xl:text-[44px] tracking-[-0.8px] leading-[50px] xl:leading-[52px]">
                Transporte terrestre internacional de mercancías y maquinaria
              </h1>

              <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[17px] leading-[28px]">
                Conectamos tu fábrica o almacén en España con los principales centros industriales de Europa. Cargas completas, grupaje y transportes especiales con aduana a través de agente de aduanas y póliza adicional hasta 150.000 € por envío sobre CMR.
              </p>

              <div className="flex items-center gap-[12px] pt-[8px]">
                <a
                  href="/presupuesto/?servicio=transporte-internacional"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('presupuesto', 'transporte-internacional');
                  }}
                  className="min-h-[48px] px-[28px] rounded-[10px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] shadow-sm flex items-center justify-center gap-[8px] transition-all cursor-pointer"
                >
                  <span>Pedir presupuesto</span>
                  <ArrowRight className="w-[16px] h-[16px]" />
                </a>

                <a
                  href={COMPANY_PHONE_TEL}
                  className="min-h-[48px] px-[22px] rounded-[10px] border border-[#1F2D3D] hover:bg-[#F8FAFC] text-[#1F2D3D] font-['Inter',sans-serif] font-semibold text-[15px] flex items-center justify-center gap-[8px] transition-colors"
                >
                  <Phone className="w-[15px] h-[15px] text-[#DC901B]" />
                  <span>Llamar ahora</span>
                </a>
              </div>
            </div>

            {/* Graphic card with key European transit times */}
            <div className="col-span-5">
              <div className="bg-[#1F2D3D] text-white p-[32px] rounded-[20px] border border-[#E2E8F0] shadow-sm">
                <div className="flex items-center justify-between pb-[14px] border-b border-white/20">
                  <span className="text-[13px] font-bold text-[#DC901B] uppercase tracking-wider font-['Inter',sans-serif]">
                    Red Transfronteriza
                  </span>
                  <span className="text-[12px] text-white/80 font-['Inter',sans-serif]">Póliza y CMR incluido</span>
                </div>

                <div className="mt-[18px] space-y-[12px]">
                  <div className="flex items-center justify-between p-[12px] bg-white/10 rounded-[10px]">
                    <span className="font-semibold text-[14px]">Francia y Portugal</span>
                    <span className="text-[13px] text-[#DC901B] font-bold">24 - 48 h</span>
                  </div>
                  <div className="flex items-center justify-between p-[12px] bg-white/10 rounded-[10px]">
                    <span className="font-semibold text-[14px]">Alemania e Italia</span>
                    <span className="text-[13px] text-[#DC901B] font-bold">48 - 72 h</span>
                  </div>
                  <div className="flex items-center justify-between p-[12px] bg-white/10 rounded-[10px]">
                    <span className="font-semibold text-[14px]">Reino Unido (UK)</span>
                    <span className="text-[13px] text-[#DC901B] font-bold">72 - 96 h</span>
                  </div>
                  <div className="flex items-center justify-between p-[12px] bg-white/10 rounded-[10px]">
                    <span className="font-semibold text-[14px]">Benelux y Europa Central</span>
                    <span className="text-[13px] text-[#DC901B] font-bold">48 - 72 h</span>
                  </div>
                </div>

                <div className="mt-[18px] pt-[14px] border-t border-white/20 text-[12px] text-white/80 text-center font-['Inter',sans-serif]">
                  ¿Maquinaria o gálibo especial? Tramitamos autorizaciones internacionales y escoltas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORREDORES INTERNACIONALES */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-[#E2E8F0] py-[48px] md:py-[64px]">
        <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
          <div className="max-w-[680px] mb-[24px]">
            <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px] font-['Inter',sans-serif]">
              Rutas y frecuencias
            </span>
            <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] sm:text-[30px] tracking-[-0.6px] leading-tight mb-[8px]">
              Corredores internacionales principales
            </h2>
            <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] sm:text-[15px] leading-[22px]">
              Selecciona el país de destino para consultar tiempos de tránsito y destinos habituales:
            </p>
          </div>

          {/* Selector de país */}
          <div className="flex gap-[8px] overflow-x-auto pb-[10px] mb-[20px] scrollbar-none">
            {corridors.map((c, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCorridorIndex(idx)}
                className={`flex items-center gap-[6px] px-[14px] py-[8px] rounded-[10px] text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  activeCorridorIndex === idx
                    ? 'bg-[#DC901B] text-[#1F2D3D] font-bold shadow-xs'
                    : 'bg-[#F8FAFC] text-[#1F2D3D] border border-[#E2E8F0] hover:border-[#DC901B]'
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.country.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Tarjeta del corredor activo */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[18px] p-[24px] sm:p-[32px] shadow-xs mb-[28px]">
            <div className="flex flex-wrap items-center justify-between gap-[12px] mb-[16px]">
              <div className="flex items-center gap-[10px]">
                <span className="text-[28px]">{corridors[activeCorridorIndex].flag}</span>
                <div>
                  <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[20px] sm:text-[22px]">
                    {corridors[activeCorridorIndex].country}
                  </h3>
                  <span className="text-[12px] text-[#DC901B] font-semibold font-['Inter',sans-serif]">
                    {corridors[activeCorridorIndex].frequency}
                  </span>
                </div>
              </div>

              <div className="bg-white border border-[#E2E8F0] px-[14px] py-[6px] rounded-[8px] text-[13px] font-bold text-[#1F2D3D] font-['Inter',sans-serif]">
                Tránsito: {corridors[activeCorridorIndex].transitTime}
              </div>
            </div>

            <p className="text-[14px] sm:text-[15px] text-[#7C7D7A] leading-[24px] mb-[18px] font-['Inter',sans-serif]">
              {corridors[activeCorridorIndex].details}
            </p>

            <div className="mb-[20px]">
              <span className="text-[12px] font-bold text-[#1F2D3D] uppercase tracking-wider block mb-[8px] font-['Inter',sans-serif]">
                Destinos industriales frecuentes:
              </span>
              <div className="flex flex-wrap gap-[6px]">
                {corridors[activeCorridorIndex].destinations.map((dest, dIdx) => (
                  <span
                    key={dIdx}
                    className="bg-white text-[#1F2D3D] text-[12px] font-medium px-[10px] py-[4px] rounded-[6px] border border-[#E2E8F0] font-['Inter',sans-serif]"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-[16px] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-[12px]">
              <span className="text-[12px] text-[#7C7D7A] font-['Inter',sans-serif]">
                Incluye CMR internacional y cobertura adicional hasta 150.000 € por envío.
              </span>
              <a
                href="/presupuesto/?servicio=transporte-internacional"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('presupuesto', 'transporte-internacional');
                }}
                className="inline-flex items-center gap-[6px] px-[18px] py-[8px] rounded-[8px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-bold text-[13px] transition-colors cursor-pointer font-['Inter',sans-serif]"
              >
                <span>Cotizar envío a {corridors[activeCorridorIndex].country.split(' ')[0]}</span>
                <ArrowRight className="w-[14px] h-[14px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PAUSA FOTOGRÁFICA EDITORIAL: RUTAS INTERNACIONALES */}
      <section className="bg-white border-b border-[#E2E8F0] py-[32px] sm:py-[44px] md:py-[52px]">
        <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
          <ImagePlaceholder aspect="aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] max-h-[420px]" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GESTIÓN ADUANERA Y REINO UNIDO */}
      {/* ========================================================================= */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-[48px] md:py-[64px]">
        <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] xl:gap-[48px] items-start">
            <div className="lg:col-span-6">
              <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px] font-['Inter',sans-serif]">
                Despacho aduanero
              </span>
              <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] sm:text-[30px] tracking-[-0.6px] leading-tight mb-[12px]">
                Gestión aduanera: Reino Unido y terceros países
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#7C7D7A] leading-[24px] mb-[20px] font-['Inter',sans-serif]">
                Los envíos transfronterizos con aduana pueden paralizarse si no se cumplen estrictamente las normativas post-Brexit. En Reino Unido coordinamos el despacho aduanero a través de agente de aduanas.
              </p>

              <div className="space-y-[12px]">
                <div className="flex items-start gap-[10px] p-[12px] rounded-[10px] bg-white border border-[#E2E8F0]">
                  <FileText className="w-[16px] h-[16px] text-[#DC901B] shrink-0 mt-[2px]" />
                  <div>
                    <strong className="text-[#1F2D3D] text-[13px] block font-['Inter',sans-serif]">Aduana a través de agente de aduanas</strong>
                    <span className="text-[12px] text-[#7C7D7A] font-['Inter',sans-serif]">Tramitación a través de agentes aduaneros colegiados en origen y destino.</span>
                  </div>
                </div>

                <div className="flex items-start gap-[10px] p-[12px] rounded-[10px] bg-white border border-[#E2E8F0]">
                  <FileCheck2 className="w-[16px] h-[16px] text-[#DC901B] shrink-0 mt-[2px]" />
                  <div>
                    <strong className="text-[#1F2D3D] text-[13px] block font-['Inter',sans-serif]">Sistema GVMS (Reino Unido)</strong>
                    <span className="text-[12px] text-[#7C7D7A] font-['Inter',sans-serif]">Generación de códigos GMR indispensables para ferris y Eurotunnel.</span>
                  </div>
                </div>

                <div className="flex items-start gap-[10px] p-[12px] rounded-[10px] bg-white border border-[#E2E8F0]">
                  <ShieldCheck className="w-[16px] h-[16px] text-[#DC901B] shrink-0 mt-[2px]" />
                  <div>
                    <strong className="text-[#1F2D3D] text-[13px] block font-['Inter',sans-serif]">Asesoramiento de Incoterms</strong>
                    <span className="text-[12px] text-[#7C7D7A] font-['Inter',sans-serif]">DAP, DDP, EXW: definición de responsabilidades en tu contrato comercial.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist compacta */}
            <div className="lg:col-span-6 bg-white p-[24px] sm:p-[28px] rounded-[18px] border border-[#E2E8F0] shadow-xs">
              <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] mb-[14px]">
                Documentación requerida para tu expedición:
              </h3>

              <div className="space-y-[10px] text-[13px] text-[#7C7D7A] mb-[20px] font-['Inter',sans-serif]">
                <div className="flex items-center gap-[8px] bg-[#F8FAFC] p-[10px] rounded-[8px] border border-[#E2E8F0]">
                  <CheckCircle2 className="w-[15px] h-[15px] text-[#DC901B] shrink-0" />
                  <span>Factura comercial y Packing List valorado</span>
                </div>
                <div className="flex items-center gap-[8px] bg-[#F8FAFC] p-[10px] rounded-[8px] border border-[#E2E8F0]">
                  <CheckCircle2 className="w-[15px] h-[15px] text-[#DC901B] shrink-0" />
                  <span>Número EORI activo del exportador e importador</span>
                </div>
                <div className="flex items-center gap-[8px] bg-[#F8FAFC] p-[10px] rounded-[8px] border border-[#E2E8F0]">
                  <CheckCircle2 className="w-[15px] h-[15px] text-[#DC901B] shrink-0" />
                  <span>Carta de porte internacional CMR formalizada</span>
                </div>
                <div className="flex items-center gap-[8px] bg-[#F8FAFC] p-[10px] rounded-[8px] border border-[#E2E8F0]">
                  <CheckCircle2 className="w-[15px] h-[15px] text-[#DC901B] shrink-0" />
                  <span>Ficha técnica y dimensiones de la mercancía</span>
                </div>
              </div>

              <a
                href="/presupuesto/?servicio=transporte-internacional"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('presupuesto', 'transporte-internacional');
                }}
                className="w-full min-h-[46px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-bold text-[14px] rounded-[10px] flex items-center justify-center gap-[6px] transition-colors cursor-pointer text-center font-['Inter',sans-serif] shadow-sm"
              >
                <span>Pedir presupuesto internacional</span>
                <ArrowRight className="w-[15px] h-[15px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PAUSA FOTOGRÁFICA EDITORIAL PREVIA A SERVICIOS RELACIONADOS */}
      <section className="bg-white border-b border-[#E2E8F0] py-[32px] sm:py-[44px] md:py-[52px]">
        <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
          <ImagePlaceholder aspect="aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] max-h-[380px]" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RELATED SERVICES (INFINITE RUNNING MARQUEE TICKER) */}
      {/* ========================================================================= */}
      <RelatedServicesTicker currentSlug="transporte-internacional" onNavigate={onNavigate} />

      {/* ========================================================================= */}
      {/* PAUSA VISUAL: IMAGEN REAL DE FLOTA ANTES DEL FAQ */}
      {/* ========================================================================= */}
      <ServicePreFaqImage />

      {/* ========================================================================= */}
      {/* 4. FINAL SERVICE CTA ANTES DE FAQ */}
      {/* ========================================================================= */}
      <ServiceFinalCTA
        serviceSlug="transporte-internacional"
        title="Tu transporte internacional en Europa"
        description="Te enviamos por correo una propuesta con tres opciones (Básico, Estándar y Premium) y te contactamos en menos de 4 horas, sin importes ni precios cerrados."
        quoteButtonText="Pedir presupuesto"
        onNavigate={onNavigate}
      />

      {/* ========================================================================= */}
      {/* 5. PREGUNTAS FRECUENTES INTERNACIONALES (DIRECTO A FOOTER) */}
      {/* ========================================================================= */}
      <HomeFAQSection
        title="Preguntas frecuentes sobre transporte internacional"
        items={internationalFaqs}
      />
    </div>
  );
}
