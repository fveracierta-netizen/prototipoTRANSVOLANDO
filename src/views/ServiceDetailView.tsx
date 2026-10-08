import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/servicesData';
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
  Truck,
  FileCheck2,
  Weight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ChevronRight,
  Globe,
  Layers,
  ChevronLeft
} from 'lucide-react';

interface ServiceDetailViewProps {
  slug: string;
  onNavigate: (
    page: NavigationPage,
    serviceSlug?: string,
    articleSlug?: string,
    extraParams?: Record<string, string>
  ) => void;
}

// Concise Mobile Hero configurations: ultra-short H1 (2-4 words), 1-sentence description (12-20 words), and tailored focal point
interface ServiceMobileHeroConfig {
  title: string;
  description: string;
  focalPoint?: string;
}

const serviceMobileHeroData: Record<string, ServiceMobileHeroConfig> = {
  'transporte-de-maquinaria': {
    title: 'Maquinaria pesada',
    description: 'Traslado en góndolas homologadas con gestión de autorizaciones especiales de circulación (ACC) y gestor dedicado.',
    focalPoint: 'center 30%',
  },
  'transportes-especiales': {
    title: 'Transportes especiales',
    description: 'Cargas fuera de gálibo con estudio de itinerario, autorizaciones especiales de circulación (ACC) y coches piloto.',
    focalPoint: 'center 35%',
  },
  'cargas-completas': {
    title: 'Cargas completas',
    description: 'Camión exclusivo directo de origen a destino sin paradas ni manipulaciones intermedias.',
    focalPoint: 'center 25%',
  },
  'grupaje': {
    title: 'Grupaje y paletería',
    description: 'Optimiza costes pagando solo por el espacio que utiliza tu mercancía.',
    focalPoint: 'center 35%',
  },
  'transporte-urgente': {
    title: 'Transporte urgente',
    description: 'Transporte urgente directo y dedicado sin trasbordos con vehículo asignado de lunes a viernes de 8 a 19 h.',
    focalPoint: 'center 30%',
  },
  'transporte-para-eventos': {
    title: 'Ferias y eventos',
    description: 'Logística puntual para stands, congresos y montajes con entrega en ventana estricta.',
    focalPoint: 'center 28%',
  },
  'cargas-pesadas': {
    title: 'Cargas pesadas',
    description: 'Semirremolques reforzados y cunas portabobinas con estiba homologada de máxima seguridad.',
    focalPoint: 'center 40%',
  },
  'transporte-de-gran-volumen': {
    title: 'Gran volumen',
    description: 'Trailers mega y trenes de carretera con hasta 100 m³ útiles y 3 m de altura interior.',
    focalPoint: 'center 30%',
  },
  'transporte-de-palets': {
    title: 'Transporte de palets',
    description: 'Distribución de palets europeos y americanos con trazabilidad total y seguro incluido.',
    focalPoint: 'center 30%',
  },
};

export default function ServiceDetailView({ slug, onNavigate }: ServiceDetailViewProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update(); window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  const MobileTitle = isDesktop ? 'div' : 'h1';
  const DesktopTitle = isDesktop ? 'h1' : 'div';
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];

  // Form state for Desktop Hero quote simulator
  const [origin, setOrigin] = useState('');
  const [dest, setDest] = useState('');

  // Interactive states for service sections
  const [activeCargoTab, setActiveCargoTab] = useState<'cargo' | 'vehicles'>('cargo');
  const [activeCargoIndex, setActiveCargoIndex] = useState(0);
  const [activeVehicleIndex, setActiveVehicleIndex] = useState(0);

  // Specific states for transportes-especiales
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeAccType, setActiveAccType] = useState<'generica' | 'especifica' | 'excepcional'>('generica');
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);
  const [activeFlotaIndex, setActiveFlotaIndex] = useState(0);
  const [activeProyectoIndex, setActiveProyectoIndex] = useState(0);

  const transportesEspecialesProyectos = [
    {
      title: 'Bobinas de gran peso y volumen',
      sector: 'Sector del acero · Rutas fijas',
      description: 'Solución de logística industrial y cargas pesadas con planificación recurrente.',
      resultado: 'Gestión directa con gestor único y semirremolques homologados.',
    },
    {
      title: 'Maquinaria industrial compleja',
      sector: 'Taller de maquinaria pesada',
      description: 'Traslado en góndola con control total y plazos ajustados.',
      resultado: 'Entrega sin incidentes y posicionamiento de góndola coordinado.',
    },
    {
      title: 'Piezas de hornos industriales',
      sector: 'Distintos tamaños y destinos',
      description: 'Servicio de grupaje multidestino con coordinación directa.',
      resultado: 'Póliza adicional hasta 150.000 € y trazabilidad con tu gestor.',
    },
  ];

  const transportesEspecialesSectores = [
    {
      title: 'Maquinaria pesada e industrial',
      desc: 'Tornos, fresadoras, prensas, generadores, transformadores eléctricos y compresores industriales.',
    },
    {
      title: 'Maquinaria de construcción y obra',
      desc: 'Excavadoras, bulldozers, grúas móviles, retroexcavadoras y plataformas elevadoras.',
    },
    {
      title: 'Componentes eólicos y energía renovable',
      desc: 'Palas de aerogenerador, nacelles, torres de aerogenerador y secciones de parques eólicos.',
    },
    {
      title: 'Energía fotovoltaica',
      desc: 'Estructuras y placas de parques solares.',
    },
    {
      title: 'Estructuras metálicas y prefabricados',
      desc: 'Vigas de puente, estructuras de acero, módulos prefabricados y dovelas.',
    },
    {
      title: 'Embarcaciones y equipos navales',
      desc: 'Embarcaciones de recreo, lanchas y equipos portuarios.',
    },
    {
      title: 'Obra pública e infraestructuras',
      desc: 'Maquinaria de obra civil, material ferroviario, componentes de viaductos y túneles.',
    },
    {
      title: 'Equipos de eventos y ferias',
      desc: 'Estructuras, escenarios y equipos de gran formato.',
    },
  ];

  const transportesEspecialesFlota = [
    {
      vehiculo: 'Góndola rebajada (cama baja)',
      capacidad: 'Hasta ~44–50 T · Plataforma a 30-45 cm del suelo',
      usoIdeal: 'Excavadoras, grúas móviles y maquinaria de construcción pesada.',
    },
    {
      vehiculo: 'Góndola extensible',
      capacidad: 'Longitud telescópica hasta 27–29 m',
      usoIdeal: 'Brazos de grúa, estructuras industriales y material ferroviario.',
    },
    {
      vehiculo: 'Plataforma abierta / extensible',
      capacidad: 'Acceso lateral y trasero configurable',
      usoIdeal: 'Cargas con medidas mayores, palas eólicas y estructuras metálicas.',
    },
    {
      vehiculo: 'Camiones modulares / góndolas reforzadas',
      capacidad: 'Distribución en múltiples ejes (hasta ~10 ejes)',
      usoIdeal: 'Piezas de gran longitud y peso con distribución especial de cargas.',
    },
    {
      vehiculo: 'Vehículos modulares pesados',
      capacidad: 'Cargas excepcionales de gran tonelaje',
      usoIdeal: 'Coordinación según disponibilidad y magnitud técnica del proyecto.',
    },
  ];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('presupuesto', service.slug, undefined, {
      origen: origin,
      destino: dest,
    });
  };

  const mobileConfig = serviceMobileHeroData[service.slug] || {
    title: service.name,
    description: service.shortDesc,
    focalPoint: 'center 35%',
  };

  return (
    <div className="w-full bg-[#FFFFFF] pb-[88px] lg:pb-0">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: STREAMLINED MOBILE FIRST / POWERFUL DESKTOP */}
      {/* ========================================================================= */}

      {/* MOBILE HERO: Clean visual photography on top + compact balanced height + content anchored to bottom + ONLY 1 CTA */}
      <section
        id={`mobile-hero-${service.slug}`}
        data-mobile-hero="true"
        className="lg:hidden relative w-full h-[76svh] min-h-[460px] max-h-[620px] overflow-hidden flex flex-col justify-end border-b border-[#E2E8F0] bg-[#1F2D3D]"
      >
        {/* Full-bleed background photo tailored per service with individual focal point */}
        <img
          src={service.image}
          alt={mobileConfig.title}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ objectPosition: mobileConfig.focalPoint || 'center 30%' }}
        />

        {/* Progressive gradient overlay: light at top to appreciate photography, darkening toward bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 via-45% to-[#1F2D3D]/95 pointer-events-none"
          aria-hidden="true"
        />

        {/* Content anchored to the bottom zone */}
        <div className="relative z-10 w-full max-w-[480px] mx-auto px-[18px] sm:px-[22px] pb-[22px] pt-[20px] flex flex-col bg-white">
          {/* 1. H1 corto (2-4 palabras, máx 2 líneas) */}
          <MobileTitle className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[34px] tracking-[-0.6px] leading-[1.16] mb-[8px]">
            {mobileConfig.title}
          </MobileTitle>

          {/* 2. Descripción breve (1 frase, 12-20 palabras) */}
          <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[16px] leading-[20px] xs:leading-[22px] max-w-[440px] mb-[18px]">
            {mobileConfig.description}
          </p>

          {/* 3. Único CTA: Pedir presupuesto */}
          <a
            id={`mobile-service-hero-quote-btn-${service.slug}`}
            href={`/presupuesto/?servicio=${service.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('presupuesto', service.slug);
            }}
            className="w-full min-h-[48px] px-[20px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98015] active:bg-[#b27314] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] shadow-md transition-colors cursor-pointer text-center"
          >
            <span>Pedir presupuesto</span>
            <ArrowRight className="w-[16px] h-[16px]" />
          </a>
        </div>
      </section>

      {/* DESKTOP SERVICE HERO: Full breadth, complete titles and desktop route calculator */}
      <section
        id={`desktop-hero-${service.slug}`}
        className="hidden lg:block relative overflow-hidden py-[68px] pb-[80px] xl:py-[78px] xl:pb-[92px] border-b border-[#E2E8F0] bg-[#1F2D3D] bg-cover bg-no-repeat bg-[position:70%_center]"
        style={{
          backgroundImage: `url('${service.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2D3D]/95 via-[#1F2D3D]/85 to-[#1F2D3D]/60 pointer-events-none" />

        <div className="relative max-w-[1160px] mx-auto px-[32px] md:px-[48px]">
          <div className="grid grid-cols-12 gap-[48px] xl:gap-[64px] items-center">
            {/* Left Column: Complete Hero copy */}
            <div className="col-span-7 flex flex-col justify-center pr-[12px] xl:pr-[28px]">
              <DesktopTitle className="font-['Playfair_Display',Georgia,serif] font-extrabold text-white text-[38px] xl:text-[44px] tracking-[-1.2px] leading-[1.14] mb-[18px]">
                {service.heroTitle}
              </DesktopTitle>

              <p className="font-['Inter',sans-serif] text-[16px] xl:text-[17px] leading-[26px] xl:leading-[28px] text-white/90 mb-[22px]">
                {service.shortDesc}
              </p>

              <div className="border-l-2 border-[#DC901B] pl-[16px] py-[3px] mb-[24px]">
                <p className="font-['Inter',sans-serif] font-semibold text-[15px] xl:text-[16px] leading-[24px] text-white">
                  {service.valueProp}
                </p>
              </div>

              <div className="flex items-center gap-[16px]">
                <a
                  href={`/presupuesto/?servicio=${service.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('presupuesto', service.slug);
                  }}
                  className="inline-flex items-center gap-[8px] px-[24px] py-[12px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98015] text-[#1F2D3D] font-bold text-[15px] transition-colors"
                >
                  <span>Pedir presupuesto</span>
                  <ArrowRight className="w-[16px] h-[16px]" />
                </a>

                <a
                  href={COMPANY_PHONE_TEL}
                  className="inline-flex items-center gap-[8px] px-[20px] py-[12px] rounded-[10px] bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-[14px] transition-colors"
                >
                  <Phone className="w-[15px] h-[15px] text-[#DC901B]" />
                  <span>Llamar ahora</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Quote Form card */}
            <div className="col-span-5 flex justify-end">
              <div className="w-full max-w-[380px] bg-white border border-[#E2E8F0] rounded-[18px] p-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
                <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] tracking-[-0.2px] mb-[16px]">
                  Empieza por la ruta
                </h2>

                <form onSubmit={handleQuoteSubmit} className="flex flex-col gap-[14px]">
                  <div>
                    <label htmlFor="service-origin" className="block text-[12px] font-semibold text-[#1F2D3D] mb-[5px]">
                      Recogida
                    </label>
                    <input
                      id="service-origin"
                      type="text"
                      placeholder="Ciudad o código postal"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full min-h-[42px] px-[12px] bg-[#fbf6ec]/50 border border-[#E2E8F0] rounded-[10px] text-[14px] text-[#1F2D3D] placeholder:text-[#9a927f] focus:bg-white focus:ring-2 focus:ring-[#DC901B] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service-dest" className="block text-[12px] font-semibold text-[#1F2D3D] mb-[5px]">
                      Entrega
                    </label>
                    <input
                      id="service-dest"
                      type="text"
                      placeholder="Ciudad o código postal"
                      value={dest}
                      onChange={(e) => setDest(e.target.value)}
                      className="w-full min-h-[42px] px-[12px] bg-[#fbf6ec]/50 border border-[#E2E8F0] rounded-[10px] text-[14px] text-[#1F2D3D] placeholder:text-[#9a927f] focus:bg-white focus:ring-2 focus:ring-[#DC901B] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    id="service-hero-quote-submit"
                    className="w-full min-h-[44px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98015] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[14px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer shadow-xs mt-[2px]"
                  >
                    <span>Continuar</span>
                    <ArrowRight className="w-[15px] h-[15px]" />
                  </button>
                </form>

                <div className="mt-[14px] text-center">
                  <span className="text-[12px] text-[#7C7D7A]">
                    Propuesta por correo en menos de 4 horas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TECHNICAL SPECIFICATIONS & PROTAGONIST METRICS */}
      {/* ========================================================================= */}
      {slug === 'transportes-especiales' ? (
        <section className="bg-[#fbf6ec] border-b border-[#E2E8F0] py-[32px] md:py-[44px]">
          <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
            <div className="max-w-[800px] mb-[20px]">
              <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px]">
                Parámetros legales DGT
              </span>
              <h2 className="font-['Playfair_Display',Georgia,serif] font-extrabold text-[#1F2D3D] text-[22px] sm:text-[26px] md:text-[30px] tracking-[-0.5px] leading-tight">
                Límites de circulación especial
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[16px]">
              <div className="bg-white p-[16px] sm:p-[20px] rounded-[14px] border border-[#E2E8F0] shadow-xs">
                <span className="text-[11px] sm:text-[12px] text-[#7d7465] font-semibold block uppercase tracking-wider mb-[4px]">
                  Masa total
                </span>
                <span className="text-[20px] sm:text-[26px] font-extrabold text-[#1F2D3D] block font-['Inter',sans-serif]">
                  + 44 T
                </span>
                <span className="text-[11px] text-[#8c8270] block mt-[2px]">Límite peso ordinario</span>
              </div>

              <div className="bg-white p-[16px] sm:p-[20px] rounded-[14px] border border-[#E2E8F0] shadow-xs">
                <span className="text-[11px] sm:text-[12px] text-[#7d7465] font-semibold block uppercase tracking-wider mb-[4px]">
                  Ancho
                </span>
                <span className="text-[20px] sm:text-[26px] font-extrabold text-[#1F2D3D] block font-['Inter',sans-serif]">
                  + 2,55 m
                </span>
                <span className="text-[11px] text-[#8c8270] block mt-[2px]">Gálibo lateral estándar</span>
              </div>

              <div className="bg-white p-[16px] sm:p-[20px] rounded-[14px] border border-[#E2E8F0] shadow-xs">
                <span className="text-[11px] sm:text-[12px] text-[#7d7465] font-semibold block uppercase tracking-wider mb-[4px]">
                  Alto
                </span>
                <span className="text-[20px] sm:text-[26px] font-extrabold text-[#1F2D3D] block font-['Inter',sans-serif]">
                  + 4,00 m
                </span>
                <span className="text-[11px] text-[#8c8270] block mt-[2px]">Paso bajo puentes y túneles</span>
              </div>

              <div className="bg-white p-[16px] sm:p-[20px] rounded-[14px] border border-[#E2E8F0] shadow-xs">
                <span className="text-[11px] sm:text-[12px] text-[#7d7465] font-semibold block uppercase tracking-wider mb-[4px]">
                  Longitud
                </span>
                <span className="text-[16px] sm:text-[20px] font-extrabold text-[#1F2D3D] block font-['Inter',sans-serif]">
                  + 16,5 m
                </span>
                <span className="text-[11px] text-[#8c8270] block mt-[2px]">Articulado / +13,5 m rígido</span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        service.specs && service.specs.length > 0 && (
          <section className="bg-[#fbf6ec] border-b border-[#E2E8F0] py-[28px] md:py-[36px]">
            <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[16px]">
                {service.specs.map((spec, i) => (
                  <div key={i} className="bg-white p-[16px] sm:p-[18px] rounded-[14px] border border-[#E2E8F0] shadow-xs">
                    <span className="text-[11px] text-[#7d7465] font-semibold block uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-[18px] sm:text-[22px] font-extrabold text-[#1F2D3D] mt-[2px] block font-['Inter',sans-serif]">
                      {spec.value}
                    </span>
                    {spec.detail && (
                      <span className="text-[11px] sm:text-[12px] text-[#b27314] mt-[2px] block font-medium">
                        {spec.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      )}

      {/* ========================================================================= */}
      {/* 3. CORE SERVICE CONTENT (INTERACTIVE TABS & DYNAMIC CARDS) */}
      {/* ========================================================================= */}
      {slug === 'transportes-especiales' ? (
        <>
          {/* VIDEO PROTAGONISTA DE OPERATIVA */}
          <section className="bg-white border-b border-[#E2E8F0] py-[44px] md:py-[60px]">
            <div className="max-w-[960px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
              <div className="text-center max-w-[640px] mx-auto mb-[20px]">
                <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px]">
                  En acción
                </span>
                <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[22px] sm:text-[28px]">
                  Operativa de transporte especial
                </h2>
              </div>

              <div className="w-full aspect-video rounded-[16px] overflow-hidden border border-[#E2E8F0] bg-[#1F2D3D] relative shadow-xs">
                {isVideoPlaying ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/gZ4iz1ii_-0?autoplay=1&rel=0&modestbranding=1"
                    title="Transvolando - Transportes Especiales"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div
                    onClick={() => setIsVideoPlaying(true)}
                    className="relative w-full h-full cursor-pointer group overflow-hidden"
                  >
                    <img
                      src="https://img.youtube.com/vi/gZ4iz1ii_-0/maxresdefault.jpg"
                      alt="Transportes Especiales - Transvolando"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://img.youtube.com/vi/gZ4iz1ii_-0/hqdefault.jpg';
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <button
                        type="button"
                        aria-label="Reproducir video"
                        className="pointer-events-auto w-[54px] h-[54px] md:w-[64px] md:h-[64px] rounded-full bg-[#DC901B] hover:bg-[#c98015] text-[#1F2D3D] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer"
                      >
                        <svg
                          className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] fill-white ml-[2.5px]"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* SECTORES Y CARGAS FUERA DE GÁLIBO (INTERACTIVO) */}
          <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-[48px] md:py-[64px]">
            <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
              <div className="max-w-[720px] mb-[24px]">
                <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px]">
                  Sectores de aplicación
                </span>
                <h2 className="font-['Playfair_Display',Georgia,serif] font-extrabold text-[#1F2D3D] text-[24px] sm:text-[30px] tracking-[-0.6px] leading-tight mb-[10px]">
                  Tipos de carga fuera de medida
                </h2>
                <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] sm:text-[15px] leading-[22px]">
                  Selecciona tu sector para revisar los equipos y mercancías habituales:
                </p>
              </div>

              {/* Selector horizontal de sectores en mobile / chips en desktop */}
              <div className="flex gap-[8px] overflow-x-auto pb-[10px] mb-[16px] scrollbar-none">
                {transportesEspecialesSectores.map((sec, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSectorIndex(idx)}
                    className={`px-[14px] py-[8px] rounded-[10px] text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                      activeSectorIndex === idx
                        ? 'bg-[#DC901B] text-white shadow-xs'
                        : 'bg-white text-[#7C7D7A] border border-[#E2E8F0] hover:text-[#1F2D3D]'
                    }`}
                  >
                    {sec.title.split(' ')[0]} {sec.title.split(' ')[1] || ''}
                  </button>
                ))}
              </div>

              {/* Tarjeta dinámica del sector activo */}
              <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-[22px] sm:p-[28px] shadow-xs">
                <div className="flex items-center gap-[10px] mb-[10px]">
                  <span className="size-[8px] rounded-full bg-[#DC901B]" />
                  <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] sm:text-[20px]">
                    {transportesEspecialesSectores[activeSectorIndex].title}
                  </h3>
                </div>
                <p className="text-[15px] text-[#7C7D7A] leading-[24px] max-w-[800px] mb-[16px]">
                  {transportesEspecialesSectores[activeSectorIndex].desc}
                </p>
                <div className="pt-[14px] border-t border-[#f0eae0] flex flex-wrap items-center justify-between gap-[12px]">
                  <a
                    href="/transporte-de-maquinaria/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('service', 'transporte-de-maquinaria');
                    }}
                    className="text-[13px] font-semibold text-[#DC901B] hover:underline"
                  >
                    Ver guía de maquinaria pesada →
                  </a>
                  <a
                    href="/presupuesto/?servicio=transportes-especiales"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('presupuesto', 'transportes-especiales');
                    }}
                    className="text-[13px] font-bold text-[#1F2D3D] hover:text-[#DC901B] flex items-center gap-[4px]"
                  >
                    <span>Cotizar este sector</span>
                    <ChevronRight className="w-[14px] h-[14px]" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FLOTA ESPECIALIZADA: SELECTOR DINÁMICO (NO TABLA PESADA EN MOBILE) */}
          <section className="bg-white border-b border-[#E2E8F0] py-[48px] md:py-[64px]">
            <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
              <div className="max-w-[720px] mb-[24px]">
                <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px]">
                  Flota técnica
                </span>
                <h2 className="font-['Playfair_Display',Georgia,serif] font-extrabold text-[#1F2D3D] text-[24px] sm:text-[30px] tracking-[-0.6px] leading-tight mb-[10px]">
                  Medios especializados para transportes especiales
                </h2>
                <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] sm:text-[15px] leading-[22px]">
                  Selección según peso, gálibo y puntos de apoyo:
                </p>
              </div>

              {/* Selector interactivo de vehículo */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-start">
                <div className="lg:col-span-4 flex flex-col gap-[8px]">
                  {transportesEspecialesFlota.map((veh, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveFlotaIndex(idx)}
                      className={`text-left p-[14px] rounded-[12px] border transition-all cursor-pointer ${
                        activeFlotaIndex === idx
                          ? 'bg-[#fbf6ec] border-[#DC901B] text-[#1F2D3D] shadow-xs'
                          : 'bg-white border-[#E2E8F0] text-[#7C7D7A] hover:border-[#DC901B]/40'
                      }`}
                    >
                      <div className="font-bold text-[14px] mb-[2px]">{veh.vehiculo}</div>
                      <div className="text-[12px] text-[#8c8270] truncate">{veh.capacidad}</div>
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-8 bg-[#FFFFFF] border border-[#E2E8F0] rounded-[18px] p-[24px] sm:p-[28px] shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-[10px] mb-[14px]">
                    <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider">
                      Ficha de vehículo
                    </span>
                    <span className="bg-[#fbf6ec] text-[#b27314] border border-[#E2E8F0] px-[10px] py-[3px] rounded-[6px] text-[12px] font-semibold">
                      {transportesEspecialesFlota[activeFlotaIndex].capacidad}
                    </span>
                  </div>

                  <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[20px] sm:text-[22px] mb-[12px]">
                    {transportesEspecialesFlota[activeFlotaIndex].vehiculo}
                  </h3>

                  <div className="space-y-[12px] text-[14px] sm:text-[15px] leading-[24px]">
                    <div>
                      <strong className="text-[#1F2D3D]">Capacidad operativa:</strong>{' '}
                      <span className="text-[#7C7D7A]">{transportesEspecialesFlota[activeFlotaIndex].capacidad}</span>
                    </div>
                    <div>
                      <strong className="text-[#1F2D3D]">Uso recomendado:</strong>{' '}
                      <span className="text-[#7C7D7A]">{transportesEspecialesFlota[activeFlotaIndex].usoIdeal}</span>
                    </div>
                  </div>

                  <div className="mt-[20px] pt-[14px] border-t border-[#E2E8F0] flex items-center gap-[8px] text-[12px] text-[#7C7D7A]">
                    <CheckCircle2 className="w-[15px] h-[15px] text-[#2e7d32] shrink-0" />
                    <span>Incluye trincaje homologado: cadenas, cinchas y tensores industriales.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PAUSA FOTOGRÁFICA EDITORIAL: OPERATIVA EN RUTA */}
          <section className="bg-white border-b border-[#E2E8F0] py-[32px] sm:py-[44px] md:py-[52px]">
            <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
              <ImagePlaceholder aspect="aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] max-h-[420px]" />
            </div>
          </section>

          {/* PERMISOS DE CIRCULACIÓN: TABS INTERACTIVOS */}
          <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-[48px] md:py-[64px]">
            <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
              <div className="max-w-[760px] mb-[24px]">
                <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px] font-['Inter',sans-serif]">
                  Trámites y permisos
                </span>
                <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] sm:text-[30px] tracking-[-0.6px] leading-tight mb-[10px]">
                  Autorizaciones de circulación
                </h2>
                <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] sm:text-[15px] leading-[22px]">
                  Gestión integral de Autorizaciones Complementarias de Circulación (ACC) ante la DGT, Servei Català de Trànsit y Trafikoa del País Vasco:
                </p>
              </div>

              {/* Selector de tipo de autorización sin siglas en botones */}
              <div className="flex flex-wrap gap-[8px] p-[4px] bg-white rounded-[12px] border border-[#E2E8F0] w-fit mb-[20px]">
                <button
                  type="button"
                  onClick={() => setActiveAccType('generica')}
                  className={`px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all cursor-pointer font-['Inter',sans-serif] ${
                    activeAccType === 'generica' ? 'bg-[#DC901B] text-[#1F2D3D] shadow-xs' : 'text-[#7C7D7A] hover:text-[#1F2D3D]'
                  }`}
                >
                  Autorización Genérica
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAccType('especifica')}
                  className={`px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all cursor-pointer font-['Inter',sans-serif] ${
                    activeAccType === 'especifica' ? 'bg-[#DC901B] text-[#1F2D3D] shadow-xs' : 'text-[#7C7D7A] hover:text-[#1F2D3D]'
                  }`}
                >
                  Autorización Específica
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAccType('excepcional')}
                  className={`px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all cursor-pointer font-['Inter',sans-serif] ${
                    activeAccType === 'excepcional' ? 'bg-[#DC901B] text-[#1F2D3D] shadow-xs' : 'text-[#7C7D7A] hover:text-[#1F2D3D]'
                  }`}
                >
                  Autorización Excepcional
                </button>
              </div>

              {/* Detalle activo de autorización */}
              <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-[22px] sm:p-[28px] shadow-sm mb-[28px]">
                {activeAccType === 'generica' && (
                  <div>
                    <span className="text-[12px] font-bold text-[#20bd5a] uppercase tracking-wider block mb-[4px] font-['Inter',sans-serif]">
                      Validez: 1 año
                    </span>
                    <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] sm:text-[20px] mb-[8px]">
                      Autorización Genérica para transportes repetitivos
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#7C7D7A] leading-[24px] font-['Inter',sans-serif]">
                      Para transportes regulares en rutas similares con dimensiones estandarizadas. Tramitación única con validez anual ante administraciones, lo que agiliza los plazos para envíos recurrentes.
                    </p>
                  </div>
                )}
                {activeAccType === 'especifica' && (
                  <div>
                    <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px] font-['Inter',sans-serif]">
                      Plazo: según CCAA y vía
                    </span>
                    <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] sm:text-[20px] mb-[8px]">
                      Autorización Específica para viaje único
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#7C7D7A] leading-[24px] font-['Inter',sans-serif]">
                      Para un porte individual con dimensiones que superan los límites genéricos. Incluye estudio de itinerario y coordinación de paso con autoridades locales o autonómicas en puntos estrechos.
                    </p>
                  </div>
                )}
                {activeAccType === 'excepcional' && (
                  <div>
                    <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px] font-['Inter',sans-serif]">
                      Cargas de gran gálibo y masa
                    </span>
                    <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] sm:text-[20px] mb-[8px]">
                      Autorización Excepcional de gran tonelaje
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-[#7C7D7A] leading-[24px] font-['Inter',sans-serif]">
                      Para cargas de magnitud extrema. Tramitación con proyectos técnicos de paso por puentes, coordinación de escoltas de la Guardia Civil y coches piloto reglamentarios.
                    </p>
                  </div>
                )}
              </div>

              {/* Protocolo de 6 pasos en acordeón visual limpio */}
              <div className="bg-white border border-[#E2E8F0] rounded-[16px] p-[20px] sm:p-[24px]">
                <h4 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[16px] mb-[14px]">
                  Fases de la gestión completa:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
                  <div className="flex items-start gap-[10px] text-[13px] text-[#7C7D7A]">
                    <span className="font-bold text-[#DC901B] shrink-0">1.</span>
                    <span><strong>Evaluación inicial:</strong> medidas, peso y anclajes.</span>
                  </div>
                  <div className="flex items-start gap-[10px] text-[13px] text-[#7C7D7A]">
                    <span className="font-bold text-[#DC901B] shrink-0">2.</span>
                    <span><strong>Estudio de ruta:</strong> gálibos y radios de giro.</span>
                  </div>
                  <div className="flex items-start gap-[10px] text-[13px] text-[#7C7D7A]">
                    <span className="font-bold text-[#DC901B] shrink-0">3.</span>
                    <span><strong>Tramitación ACC:</strong> según CCAA y vía.</span>
                  </div>
                  <div className="flex items-start gap-[10px] text-[13px] text-[#7C7D7A]">
                    <span className="font-bold text-[#DC901B] shrink-0">4.</span>
                    <span><strong>Coches piloto:</strong> señalización y escolta reglamentaria.</span>
                  </div>
                  <div className="flex items-start gap-[10px] text-[13px] text-[#7C7D7A]">
                    <span className="font-bold text-[#DC901B] shrink-0">5.</span>
                    <span><strong>Horarios autorizados:</strong> planificación por tramos.</span>
                  </div>
                  <div className="flex items-start gap-[10px] text-[13px] text-[#7C7D7A]">
                    <span className="font-bold text-[#DC901B] shrink-0">6.</span>
                    <span><strong>Seguimiento activo:</strong> control continuo de la carga.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CASOS REALES DE PROYECTOS */}
          <section className="bg-white border-b border-[#E2E8F0] py-[48px] md:py-[64px]">
            <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
              <div className="flex flex-wrap items-center justify-between gap-[16px] mb-[24px]">
                <div>
                  <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px]">
                    Casos de éxito
                  </span>
                  <h2 className="font-['Playfair_Display',Georgia,serif] font-extrabold text-[#1F2D3D] text-[24px] sm:text-[30px] tracking-[-0.6px] leading-tight">
                    Operaciones especiales ejecutadas
                  </h2>
                </div>
                <a
                  href="/casos/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('casos');
                  }}
                  className="text-[14px] font-bold text-[#DC901B] hover:underline flex items-center gap-[4px]"
                >
                  <span>Ver todos los casos</span>
                  <ArrowRight className="w-[14px] h-[14px]" />
                </a>
              </div>

              {/* Selector interactivo de proyectos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                {transportesEspecialesProyectos.map((proy, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] p-[20px] flex flex-col justify-between hover:border-[#DC901B] transition-all shadow-xs"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-[#8c8270] uppercase tracking-wider block mb-[6px]">
                        {proy.sector}
                      </span>
                      <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[16px] mb-[8px]">
                        {proy.title}
                      </h3>
                      <p className="text-[13px] text-[#7C7D7A] leading-[20px] mb-[14px]">
                        {proy.description}
                      </p>
                    </div>
                    <div className="pt-[12px] border-t border-[#E2E8F0]">
                      <span className="text-[11px] font-bold text-[#DC901B] uppercase tracking-wider block">
                        Resultado obtenido:
                      </span>
                      <span className="text-[13px] font-bold text-[#1F2D3D] mt-[2px] block">
                        {proy.resultado}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PAUSA FOTOGRÁFICA EDITORIAL PREVIA A SERVICIOS RELACIONADOS */}
          <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-[32px] sm:py-[44px] md:py-[52px]">
            <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
              <ImagePlaceholder aspect="aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] max-h-[380px]" />
            </div>
          </section>
        </>
      ) : (
        /* STANDARD SERVICE VIEW: STREAMLINED CARGO & FLEET SECTION */
        <>
          {/* INTERACTIVE CARGO & FLEET HUB */}
          <section className="bg-white border-b border-[#E2E8F0] py-[48px] md:py-[64px]">
            <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
              <div className="max-w-[720px] mb-[20px]">
                <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px]">
                  Capacidades del servicio
                </span>
                <h2 className="font-['Playfair_Display',Georgia,serif] font-extrabold text-[#1F2D3D] text-[24px] sm:text-[30px] tracking-[-0.6px] leading-tight mb-[8px]">
                  Cargas admitidas y vehículos asignados
                </h2>
                <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] sm:text-[15px] leading-[22px]">
                  Explora las tipologías de mercancía y la flota adaptada a esta operativa:
                </p>
              </div>

              {/* Segmented control: [ Tipos de carga ] [ Flota disponible ] */}
              <div className="flex gap-[8px] p-[4px] bg-[#FFFFFF] rounded-[12px] border border-[#E2E8F0] w-fit mb-[20px]">
                <button
                  type="button"
                  onClick={() => setActiveCargoTab('cargo')}
                  className={`flex items-center gap-[6px] px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all cursor-pointer ${
                    activeCargoTab === 'cargo'
                      ? 'bg-[#DC901B] text-white shadow-xs'
                      : 'text-[#7C7D7A] hover:text-[#1F2D3D]'
                  }`}
                >
                  <Weight className="w-[14px] h-[14px]" />
                  <span>Tipos de carga admitidos</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCargoTab('vehicles')}
                  className={`flex items-center gap-[6px] px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all cursor-pointer ${
                    activeCargoTab === 'vehicles'
                      ? 'bg-[#DC901B] text-white shadow-xs'
                      : 'text-[#7C7D7A] hover:text-[#1F2D3D]'
                  }`}
                >
                  <Truck className="w-[14px] h-[14px]" />
                  <span>Flota y vehículos</span>
                </button>
              </div>

              {activeCargoTab === 'cargo' ? (
                <div>
                  {/* Selector de subcategorías de carga */}
                  <div className="flex gap-[8px] overflow-x-auto pb-[10px] mb-[16px] scrollbar-none">
                    {service.cargoTypes.map((cargo, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveCargoIndex(idx)}
                        className={`px-[14px] py-[8px] rounded-[10px] text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                          activeCargoIndex === idx
                            ? 'bg-[#1F2D3D] text-white'
                            : 'bg-[#FFFFFF] text-[#7C7D7A] border border-[#E2E8F0] hover:text-[#1F2D3D]'
                        }`}
                      >
                        {cargo.title}
                      </button>
                    ))}
                  </div>

                  {/* Tarjeta dinámica de la carga activa */}
                  {service.cargoTypes[activeCargoIndex] && (
                    <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] p-[22px] sm:p-[28px] shadow-xs">
                      <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] sm:text-[20px] mb-[10px]">
                        {service.cargoTypes[activeCargoIndex].title}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] text-[#7C7D7A] leading-[24px] mb-[18px]">
                        {service.cargoTypes[activeCargoIndex].description}
                      </p>

                      {service.cargoTypes[activeCargoIndex].items && (
                        <div>
                          <span className="text-[12px] font-bold text-[#7d7465] uppercase tracking-wider block mb-[8px]">
                            Ejemplos de mercancías habituales:
                          </span>
                          <div className="flex flex-wrap gap-[6px]">
                            {service.cargoTypes[activeCargoIndex].items?.map((item, itemIdx) => (
                              <span
                                key={itemIdx}
                                className="bg-white text-[#1F2D3D] text-[12px] font-medium px-[10px] py-[4px] rounded-[6px] border border-[#E2E8F0]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {/* Selector de vehículos */}
                  <div className="flex gap-[8px] overflow-x-auto pb-[10px] mb-[16px] scrollbar-none">
                    {service.vehicles.map((veh, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveVehicleIndex(idx)}
                        className={`px-[14px] py-[8px] rounded-[10px] text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                          activeVehicleIndex === idx
                            ? 'bg-[#1F2D3D] text-white'
                            : 'bg-[#FFFFFF] text-[#7C7D7A] border border-[#E2E8F0] hover:text-[#1F2D3D]'
                        }`}
                      >
                        {veh.name}
                      </button>
                    ))}
                  </div>

                  {/* Tarjeta dinámica del vehículo activo */}
                  {service.vehicles[activeVehicleIndex] && (
                    <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] p-[22px] sm:p-[28px] shadow-xs">
                      <div className="flex flex-wrap items-center justify-between gap-[8px] mb-[10px]">
                        <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] sm:text-[20px]">
                          {service.vehicles[activeVehicleIndex].name}
                        </h3>
                        <span className="bg-white text-[#b27314] border border-[#E2E8F0] px-[10px] py-[3px] rounded-[6px] text-[12px] font-bold">
                          {service.vehicles[activeVehicleIndex].capacity}
                        </span>
                      </div>
                      <p className="text-[14px] sm:text-[15px] text-[#7C7D7A] leading-[24px]">
                        {service.vehicles[activeVehicleIndex].description}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* PAUSA FOTOGRÁFICA EDITORIAL: CONTEXTUALIZACIÓN OPERATIVA */}
          <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-[32px] sm:py-[44px] md:py-[52px]">
            <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
              <ImagePlaceholder aspect="aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] max-h-[420px]" />
            </div>
          </section>

          {/* PERMISOS Y SEGURIDAD TÉCNICA */}
          {service.permits && service.permits.length > 0 && (
            <section className="bg-[#FFFFFF] border-b border-[#E2E8F0] py-[48px] md:py-[60px]">
              <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
                <div className="max-w-[680px] mb-[24px]">
                  <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px]">
                    Seguridad jurídica y técnica
                  </span>
                  <h2 className="font-['Playfair_Display',Georgia,serif] font-extrabold text-[#1F2D3D] text-[24px] sm:text-[28px] tracking-[-0.5px]">
                    Gestión integral de permisos y estiba
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
                  {service.permits.map((permit, idx) => (
                    <div
                      key={idx}
                      className="p-[18px] sm:p-[20px] rounded-[14px] bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-[12px]"
                    >
                      <div className="size-[34px] rounded-[8px] bg-[#fbf6ec] border border-[#DC901B]/30 flex items-center justify-center text-[#DC901B] shrink-0 mt-[2px]">
                        <FileCheck2 className="w-[16px] h-[16px]" />
                      </div>
                      <div>
                        <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[15px]">
                          {permit.title}
                        </h3>
                        <p className="text-[13px] text-[#7C7D7A] leading-[20px] mt-[4px]">
                          {permit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* PROTOCOLO OPERATIVO / CÓMO TRABAJAMOS (STREAMLINED PROCESS) */}
          {service.process && service.process.length > 0 && (
            <section className="bg-white border-b border-[#E2E8F0] py-[48px] md:py-[64px]">
              <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
                <div className="max-w-[680px] mb-[24px]">
                  <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px]">
                    Protocolo operativo
                  </span>
                  <h2 className="font-['Playfair_Display',Georgia,serif] font-extrabold text-[#1F2D3D] text-[24px] sm:text-[28px] tracking-[-0.5px]">
                    Cómo trabajamos en este servicio
                  </h2>
                </div>

                {/* Mobile: Clean process cards without decorative order numbers */}
                <div className="block lg:hidden space-y-[12px]">
                  {service.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[14px] p-[18px]"
                    >
                      <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[16px] mb-[6px]">
                        {step.title}
                      </h3>
                      <p className="text-[13.5px] text-[#7C7D7A] leading-[21px]">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Desktop: 4 Connected Step Cards without decorative order numbers */}
                <div className="hidden lg:grid grid-cols-4 gap-[16px]">
                  {service.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-[16px] p-[20px] flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[15px] mb-[8px]">
                          {step.title}
                        </h3>
                        <p className="text-[13px] text-[#7C7D7A] leading-[20px]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* PAUSA FOTOGRÁFICA EDITORIAL PREVIA A SERVICIOS RELACIONADOS */}
          <section className="bg-white border-b border-[#E2E8F0] py-[32px] sm:py-[44px] md:py-[52px]">
            <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
              <ImagePlaceholder aspect="aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] max-h-[380px]" />
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* 4. RELATED SERVICES (INFINITE RUNNING MARQUEE TICKER) */}
      {/* ========================================================================= */}
      <RelatedServicesTicker currentSlug={service.slug} onNavigate={onNavigate} />

      {/* ========================================================================= */}
      {/* 5. PAUSA VISUAL: IMAGEN REAL DE FLOTA ANTES DEL FAQ */}
      {/* ========================================================================= */}
      <ServicePreFaqImage />

      {/* ========================================================================= */}
      {/* 5. FINAL SERVICE CTA ANTES DE FAQ */}
      {/* ========================================================================= */}
      <ServiceFinalCTA
        serviceSlug={service.slug}
        title={service.finalCta?.title || `Tu transporte de ${service.name.toLowerCase()}`}
        description="Te enviamos por correo una propuesta con tres opciones (Básico, Estándar y Premium) y te contactamos en menos de 4 horas, sin importes ni precios cerrados."
        quoteButtonText={service.finalCta?.quoteButtonText || 'Pedir presupuesto'}
        onNavigate={onNavigate}
      />

      {/* ========================================================================= */}
      {/* 6. PREGUNTAS FRECUENTES (DIRECTO A FOOTER) */}
      {/* ========================================================================= */}
      <HomeFAQSection
        title={`Preguntas frecuentes sobre ${service.name.toLowerCase()}`}
        items={service.faqs?.map((f, i) => ({
          id: `faq-${service.slug}-${i + 1}`,
          question: f.q,
          answer: f.a,
        }))}
      />
    </div>
  );
}
