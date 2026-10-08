import { useState, useEffect, useRef } from 'react';
import { servicesData } from '../data/servicesData';
import TestimonialsSection from '../components/TestimonialsSection';
import BudgetVideoSection from '../components/BudgetVideoSection';
import HomeFAQSection from '../components/HomeFAQSection';
import LatestGuidesSection from '../components/LatestGuidesSection';
import KeyMetricsSection from '../components/KeyMetricsSection';
import WhyTransvolandoSection from '../components/WhyTransvolandoSection';
import SectorsInteractiveSection from '../components/SectorsInteractiveSection';
import { NavigationPage } from '../types';
import ClientsAndCasesSection from '../components/ClientsAndCasesSection';
import CoverageInteractiveSection from '../components/CoverageInteractiveSection';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Truck,
  Check,
  Calendar,
  Phone,
  Briefcase,
  Layers,
  Globe2,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (
    page: NavigationPage,
    serviceSlug?: string,
    articleSlug?: string,
    extraParams?: Record<string, string>
  ) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {

  const [isDesktop, setIsDesktop] = useState(false);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkDesktop = () => {
      const desktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
      setIsDesktop(desktop);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop || !desktopVideoRef.current) return;

    const video = desktopVideoRef.current;
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    if (video.paused) {
      video.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [isDesktop]);

  // Quick Route Simulator in Hero (2 fields: Recogida y Entrega)
  const [quickOrigin, setQuickOrigin] = useState('');
  const [quickDest, setQuickDest] = useState('');

  const handleMobileQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('presupuesto', undefined, undefined, {
      origen: quickOrigin,
      destino: quickDest,
      paso: '2',
    });
  };

  const handleDesktopQuickEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('presupuesto', undefined, undefined, {
      origen: quickOrigin,
      destino: quickDest,
      paso: '2',
    });
  };

  // Icon selector for mobile services list
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'transporte-de-maquinaria':
        return <Truck className="w-[18px] h-[18px] text-[#DC901B]" />;
      case 'transportes-especiales':
        return <ShieldCheck className="w-[18px] h-[18px] text-[#DC901B]" />;
      case 'cargas-completas':
        return <Truck className="w-[18px] h-[18px] text-[#DC901B]" />;
      case 'grupaje':
        return <Layers className="w-[18px] h-[18px] text-[#DC901B]" />;
      case 'transporte-urgente':
        return <Clock className="w-[18px] h-[18px] text-[#DC901B]" />;
      case 'transporte-para-eventos':
        return <Calendar className="w-[18px] h-[18px] text-[#DC901B]" />;
      case 'cargas-pesadas':
        return <Briefcase className="w-[18px] h-[18px] text-[#DC901B]" />;
      case 'transporte-de-gran-volumen':
        return <Globe2 className="w-[18px] h-[18px] text-[#DC901B]" />;
      case 'transporte-de-palets':
        return <Check className="w-[18px] h-[18px] text-[#DC901B]" />;
      default:
        return <Truck className="w-[18px] h-[18px] text-[#DC901B]" />;
    }
  };

  // 7 Pasos literales de El modelo gestor único: cómo trabajamos
  const gestorSteps = [
    {
      text: 'Un solo punto de contacto. Tu gestor conoce tu cuenta, tus rutas y tus plazos. No repites el contexto en cada envío.',
    },
    {
      text: 'Presupuesto. Primera estimación con el vehículo y el servicio que encajan con la carga.',
    },
    {
      text: 'Seguimiento activo y avisos proactivos. El gestor te avisa cuando hay una incidencia, antes de que tú la detectes.',
    },
    {
      text: 'Documentación gestionada. Carta de porte CMR gestionada de serie. Para Reino Unido, coordinación aduanera a través de agente de aduanas, sin servicio directo EUR1.',
    },
    {
      text: 'Red de transportistas homologados. Elegimos el más adecuado para cada tipo de carga y cada ruta, de entre casi 3.000 verificados.',
    },
    {
      text: 'Póliza adicional activa en cada envío. Hasta 150.000 € de cobertura por encima del seguro estándar del transportista.',
    },
    {
      text: 'Compensación rápida. Si algo sale mal, se resuelve rápido y sin que tengas que reclamar dos veces.',
    },
  ];

  const MobileHeroTitle = isDesktop ? 'div' : 'h1';
  const DesktopHeroTitle = isDesktop ? 'h1' : 'div';

  return (
    <div className="w-full bg-white">
      {/* ========================================================================= */}
      {/* 2. HERO SECTION */}
      {/* ========================================================================= */}

      {/* MOBILE HERO (H1 Playfair 34px navy sobre blanco, imagen fija compacta separada, ruta y botón visibles a 375×812) */}
      <section
        id="mobile-home-hero"
        data-mobile-hero="true"
        className="lg:hidden w-full bg-white border-b border-[#E2E8F0] px-[16px] py-[16px]"
      >
        <div className="w-full max-w-[420px] mx-auto flex flex-col gap-[12px]">
          {/* Titular corto adaptado a H1 Playfair 34px navy sobre blanco con intención SEO */}
          <div>
            <MobileHeroTitle className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[34px] tracking-[-0.6px] leading-[1.12]">
              Tu transporte, con presupuesto personalizado
              <span className="block text-[14px] font-['Inter',sans-serif] font-medium text-[#7C7D7A] mt-[4px] tracking-normal">
                Transporte para empresas en España y Europa
              </span>
            </MobileHeroTitle>

            {/* Explicación tres opciones por correo y contacto en menos de 4 horas */}
            <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] leading-[20px] mt-[6px]">
              Te enviamos por correo una propuesta con tres opciones (Básico, Estándar y Premium) y te contactamos en menos de 4 horas.
            </p>
          </div>

          {/* Imagen fija de hero compacta como elemento separado (sin vídeo móvil ni alta altura) */}
          <div className="w-full h-[120px] xs:h-[135px] rounded-[12px] overflow-hidden border border-[#E2E8F0] shadow-2xs">
            <img
              src="/hero-video-poster.webp"
              fetchPriority="high"
              loading="eager"
              alt="Transporte para empresas en España y Europa"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Formulario rápido origen/destino visible en primera pantalla */}
          <form
            onSubmit={handleMobileQuickEstimate}
            className="bg-[#F8FAFC] rounded-[14px] p-[14px] border border-[#E2E8F0] shadow-2xs flex flex-col gap-[10px]"
          >
            <div>
              <label
                htmlFor="mobile-quick-origin"
                className="block text-[11px] font-bold uppercase tracking-[0.05em] text-[#1F2D3D] mb-[3px] font-['Inter',sans-serif]"
              >
                Recogida (Origen)
              </label>
              <input
                id="mobile-quick-origin"
                type="text"
                autoComplete="postal-code"
                placeholder="Ciudad o código postal"
                value={quickOrigin}
                onChange={(e) => setQuickOrigin(e.target.value)}
                className="w-full min-h-[42px] px-[12px] bg-white border border-[#CBD5E1] rounded-[8px] text-[14px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:ring-2 focus:ring-[#DC901B] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="mobile-quick-dest"
                className="block text-[11px] font-bold uppercase tracking-[0.05em] text-[#1F2D3D] mb-[3px] font-['Inter',sans-serif]"
              >
                Entrega (Destino)
              </label>
              <input
                id="mobile-quick-dest"
                type="text"
                autoComplete="postal-code"
                placeholder="Ciudad o país de entrega"
                value={quickDest}
                onChange={(e) => setQuickDest(e.target.value)}
                className="w-full min-h-[42px] px-[12px] bg-white border border-[#CBD5E1] rounded-[8px] text-[14px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:ring-2 focus:ring-[#DC901B] focus:outline-none transition-colors"
              />
            </div>

            {/* Acción «Quiero mi presupuesto» */}
            <button
              type="submit"
              id="mobile-hero-quote-btn"
              className="w-full min-h-[46px] px-[16px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] shadow-sm transition-colors cursor-pointer"
            >
              <span>Quiero mi presupuesto</span>
              <ArrowRight className="w-[16px] h-[16px]" />
            </button>
          </form>

          {/* Acción Llamada */}
          <a
            id="mobile-hero-call-btn"
            href="tel:+34674346912"
            className="w-full min-h-[44px] px-[14px] rounded-[10px] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[14px] flex items-center justify-center gap-[6px] transition-colors cursor-pointer shadow-2xs"
          >
            <Phone className="w-[15px] h-[15px] text-[#DC901B]" />
            <span>¿Prefieres llamar? 674 34 69 12</span>
          </a>
        </div>
      </section>

      {/* DESKTOP HERO (Minimalist, spacious and refined with compact quick route form) */}
      <section className="hidden lg:block relative overflow-hidden pt-[72px] pb-[88px] xl:pt-[84px] xl:pb-[104px] border-b border-[#E2E8F0] bg-[#1F2D3D]">
        {/* Full-bleed background video of trailer on the road with static poster fallback */}
        {isDesktop && <video
          ref={desktopVideoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-video-poster.webp"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <img
            src="/hero-video-poster.webp"
            alt="Agencia de Transporte para Empresas en España y Europa - Transvolando"
            className="w-full h-full object-cover object-center"
          />
        </video>}

        {/* Gradient overlay for desktop */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1F2D3D]/95 via-[#1F2D3D]/80 via-55% to-[#1F2D3D]/45 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1160px] mx-auto px-[32px] md:px-[48px] relative z-10">
          <div className="grid grid-cols-12 gap-[48px] xl:gap-[64px] items-center">
            {/* Left Content */}
            <div className="col-span-7 flex flex-col gap-[20px]">
              <DesktopHeroTitle className="font-['Playfair_Display',Georgia,serif] font-bold text-white text-[38px] xl:text-[44px] 2xl:text-[48px] tracking-[-1.2px] leading-[1.15] max-w-[620px]">
                Agencia de Transporte para Empresas en España y Europa
              </DesktopHeroTitle>

              <p className="font-['Inter',sans-serif] text-white/90 text-[16px] xl:text-[17px] leading-[26px] max-w-[580px]">
                Cargas completas, grupaje y transportes especiales, con un gestor único que cuida cada envío. Póliza adicional hasta 150.000 € incluida, menos del 1 % de incidencias y propuesta por correo en menos de 4 horas con tres opciones.
              </p>

              {/* CTAs: Pedir presupuesto + Llamar ahora */}
              <div className="flex flex-wrap items-center gap-[12px] pt-[6px]">
                <a
                  id="hero-quote-cta"
                  href="/presupuesto/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('presupuesto');
                  }}
                  className="min-h-[50px] px-[26px] rounded-[12px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] shadow-sm flex items-center justify-center gap-[8px] transition-all cursor-pointer"
                >
                  <span>Pedir presupuesto</span>
                  <ArrowRight className="w-[16px] h-[16px]" />
                </a>

                <a
                  id="hero-contact-cta"
                  href="tel:+34674346912"
                  className="min-h-[50px] px-[24px] rounded-[12px] bg-white hover:bg-[#F8FAFC] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer shadow-xs"
                >
                  <Phone className="w-[16px] h-[16px] text-[#DC901B]" />
                  <span>Llamar ahora</span>
                </a>
              </div>
            </div>

            {/* Right Card: Compact Route Form */}
            <div className="col-span-5 flex justify-end">
              <div className="w-full max-w-[380px] bg-white border border-[#E2E8F0] rounded-[18px] p-[24px] shadow-sm">
                <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] tracking-[-0.2px] mb-[16px]">
                  Empieza por la ruta
                </h2>

                <form onSubmit={handleDesktopQuickEstimate} className="flex flex-col gap-[14px]">
                  <div>
                    <label htmlFor="quick-origin" className="block text-[12px] font-semibold text-[#1F2D3D] mb-[5px] font-['Inter',sans-serif]">
                      Recogida
                    </label>
                    <input
                      id="quick-origin"
                      type="text"
                      autoComplete="postal-code"
                      placeholder="Ciudad o código postal"
                      value={quickOrigin}
                      onChange={(e) => setQuickOrigin(e.target.value)}
                      className="w-full min-h-[42px] px-[12px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] text-[14px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:bg-white focus:ring-2 focus:ring-[#DC901B] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="quick-dest" className="block text-[12px] font-semibold text-[#1F2D3D] mb-[5px] font-['Inter',sans-serif]">
                      Entrega
                    </label>
                    <input
                      id="quick-dest"
                      type="text"
                      autoComplete="postal-code"
                      placeholder="Ciudad o código postal"
                      value={quickDest}
                      onChange={(e) => setQuickDest(e.target.value)}
                      className="w-full min-h-[42px] px-[12px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] text-[14px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:bg-white focus:ring-2 focus:ring-[#DC901B] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    id="quick-estimate-submit"
                    className="w-full min-h-[44px] rounded-[10px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[14px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer shadow-sm mt-[2px]"
                  >
                    <span>Continuar</span>
                    <ArrowRight className="w-[15px] h-[15px]" />
                  </button>
                </form>

                <div className="mt-[14px] text-center">
                  <span className="text-[12px] text-[#7C7D7A] font-['Inter',sans-serif]">
                    Propuesta por correo en menos de 4 horas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CIFRAS CLAVE COMPACTAS AZUL MARINO / BLANCO (DISTRIBUCIÓN 2x2 EN MÓVIL) */}
      {/* ========================================================================= */}
      <KeyMetricsSection />

      {/* ========================================================================= */}
      {/* RESEÑAS CORTAS REALES + LOGOS EN CUADRÍCULA (CERCA DEL HERO EN MÓVIL)     */}
      {/* ========================================================================= */}
      <div className="lg:hidden bg-[#F8FAFC] border-b border-[#E2E8F0] py-[28px] px-[16px] sm:px-[24px]">
        <div className="max-w-[480px] mx-auto flex flex-col gap-[14px]">
          <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#7C7D7A] font-['Inter',sans-serif]">
            Empresas que ya confían en Transvolando
          </span>

          <div className="flex flex-col gap-[10px]">
            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-[14px] shadow-2xs">
              <div className="flex items-center justify-between mb-[6px]">
                <span className="font-['Inter',sans-serif] font-bold text-[#1F2D3D] text-[13px]">
                  Inés Pombo
                </span>
                <div className="flex gap-[2px] text-[#DC901B] text-[12px]" aria-label="5 estrellas">★★★★★</div>
              </div>
              <p className="font-['Inter',sans-serif] text-[#1F2D3D] text-[13px] leading-[19px] italic">
                «Ha sido una experiencia fantástica, rápido y muy eficiente el servicio con poco margen de tiempo. Keren realizó una gestión perfecta.»
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-[14px] shadow-2xs">
              <div className="flex items-center justify-between mb-[6px]">
                <span className="font-['Inter',sans-serif] font-bold text-[#1F2D3D] text-[13px]">
                  Miguel Laverde
                </span>
                <div className="flex gap-[2px] text-[#DC901B] text-[12px]" aria-label="5 estrellas">★★★★★</div>
              </div>
              <p className="font-['Inter',sans-serif] text-[#1F2D3D] text-[13px] leading-[19px] italic">
                «Muchas gracias por los servicios prestados! Excelente empresa.»
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-[14px] shadow-2xs">
              <div className="flex items-center justify-between mb-[6px]">
                <span className="font-['Inter',sans-serif] font-bold text-[#1F2D3D] text-[13px]">
                  Jone Barroso
                </span>
                <div className="flex gap-[2px] text-[#DC901B] text-[12px]" aria-label="5 estrellas">★★★★★</div>
              </div>
              <p className="font-['Inter',sans-serif] text-[#1F2D3D] text-[13px] leading-[19px] italic">
                «Mover mercancía pesada de Sevilla a Bilbao y todo fueron facilidades. Muy profesionales y muy buen servicio.»
              </p>
            </div>
          </div>

          {/* Cuadrícula de logos autorizados existentes */}
          <div className="mt-[10px] pt-[14px] border-t border-[#E2E8F0]">
            <div className="grid grid-cols-4 gap-[12px] items-center justify-items-center">
              <img src="/logos/Frame 3.png" alt="Calidad Pascual" className="max-h-[30px] w-auto object-contain opacity-85" loading="lazy" />
              <img src="/logos/Frame 4.png" alt="Volvo" className="max-h-[30px] w-auto object-contain opacity-85" loading="lazy" />
              <img src="/logos/Frame 6.png" alt="Thyssenkrupp" className="max-h-[30px] w-auto object-contain opacity-85" loading="lazy" />
              <img src="/logos/Frame 15.png" alt="Amazon" className="max-h-[30px] w-auto object-contain opacity-85" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. SERVICIOS DE TRANSPORTE PARA TU EMPRESA */}
      {/* ========================================================================= */}
      <section
        id="servicios"
        className="py-[40px] md:py-[88px] max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]"
      >
        {/* DESKTOP: 3 COLUMNAS EN CUADRÍCULA */}
        <div className="hidden lg:block">
          <div className="mb-[40px] md:mb-[48px] max-w-[780px]">
            <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] md:text-[36px] tracking-[-0.6px] leading-[36px] md:leading-[44px]">
              Servicios de transporte para tu empresa
            </h2>
            <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] md:text-[16px] leading-[26px] mt-[12px]">
              Estos son todos los servicios que gestionamos hoy, por carretera, en España y Europa. Si no sabes cuál encaja con tu carga, cuéntanoslo y te lo decimos nosotros.
            </p>
          </div>

          {/* 9 Cards Visuales en Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {servicesData.map((service, idx) => (
              <div key={`desktop-svc-card-${service.slug}`} className="h-full">
                <a
                  href={`/${service.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service', service.slug);
                  }}
                  className="group bg-white rounded-[16px] border border-[#E2E8F0] overflow-hidden hover:border-[#DC901B] hover:shadow-sm transition-all duration-200 flex flex-col justify-between cursor-pointer block h-full"
                >
                  <div className="relative h-[200px] w-full overflow-hidden bg-[#F8FAFC]">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading={idx < 3 ? 'eager' : 'lazy'}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {service.categoryTag && (
                      <span className="absolute top-[14px] left-[14px] bg-[#1F2D3D]/90 backdrop-blur-xs text-white px-[10px] py-[4px] rounded-[6px] text-[11px] font-medium font-['Inter',sans-serif]">
                        {service.categoryTag}
                      </span>
                    )}
                  </div>

                  <div className="p-[22px] flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[20px] leading-[26px] tracking-[-0.3px] group-hover:text-[#DC901B] transition-colors">
                        {service.name}
                      </h3>

                      <p className="font-['Inter',sans-serif] text-[14px] text-[#7C7D7A] leading-[22px] mt-[8px]">
                        {service.shortDesc}
                      </p>

                      {service.benefits && service.benefits.length > 0 && (
                        <div className="mt-[14px] pt-[12px] border-t border-[#E2E8F0] flex flex-col gap-[6px]">
                          {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-[6px] text-[13px] text-[#1F2D3D] font-['Inter',sans-serif]">
                              <Check className="w-[14px] h-[14px] text-[#DC901B] shrink-0 mt-[2px]" />
                              <span className="line-clamp-1">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-[18px] pt-[14px] border-t border-[#E2E8F0] flex items-center justify-between text-[#DC901B] font-semibold text-[13px] font-['Inter',sans-serif]">
                      <span>Ver servicio detallado</span>
                      <ArrowRight className="w-[15px] h-[15px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE: LOS 9 SERVICIOS EN 1 COLUMNA, FILA >= 56px, ICONO, NOMBRE 16-17px, FLECHA */}
        <div className="lg:hidden">
          <div className="mb-[18px]">
            <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] sm:text-[28px] tracking-[-0.5px] leading-tight">
              Servicios de transporte
            </h2>
            <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] sm:text-[15px] leading-[22px] mt-[6px]">
              Soluciones para cada tipo de carga.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[#E2E8F0] border border-[#E2E8F0] rounded-[16px] overflow-hidden bg-white shadow-xs">
            {servicesData.map((service) => (
              <a
                key={`mobile-svc-row-${service.slug}`}
                href={`/${service.slug}/`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('service', service.slug);
                }}
                className="min-h-[56px] py-[14px] px-[16px] flex items-center justify-between gap-[12px] hover:bg-[#F8FAFC] active:bg-[#F1F5F9] transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-[12px] min-w-0">
                  <div className="w-[36px] h-[36px] rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#1F2D3D] group-hover:text-[#DC901B] group-hover:border-[#DC901B] transition-colors">
                    {getServiceIcon(service.slug)}
                  </div>
                  <span className="font-['Inter',sans-serif] font-medium text-[#1F2D3D] text-[16px] sm:text-[17px] leading-[22px] truncate group-hover:text-[#DC901B] transition-colors">
                    {service.name}
                  </span>
                </div>
                <ArrowRight className="w-[18px] h-[18px] text-[#DC901B] shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ¿NO SABES QUÉ SERVICIO NECESITAS? */}
      {/* ========================================================================= */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0] py-[44px] md:py-[64px]">
        <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
          {/* DESKTOP VARIANT */}
          <div className="hidden lg:flex bg-white rounded-[20px] border border-[#E2E8F0] p-[40px] md:p-[48px] shadow-sm items-center justify-between gap-[32px]">
            <div className="max-w-[700px]">
              <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] sm:text-[30px] leading-[36px] sm:leading-[38px] tracking-[-0.4px]">
                ¿No sabes qué servicio necesitas?
              </h2>
              <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] md:text-[16px] leading-[26px] mt-[12px]">
                Cuéntanos qué tienes que mover, de dónde a dónde y para cuándo. Te recomendamos la mejor opción, sin compromiso. Por teléfono o formulario.
              </p>
              <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] md:text-[16px] leading-[26px] mt-[8px]">
                También movemos mercancía a temperatura controlada y mercancías peligrosas (ADR). Escríbenos y lo vemos.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="/contacto/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contacto');
                }}
                className="min-h-[48px] px-[28px] rounded-[12px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer shadow-sm"
              >
                <span>Hablar con un asesor</span>
                <ArrowRight className="w-[16px] h-[16px]" />
              </a>
            </div>
          </div>

          {/* MOBILE VARIANT */}
          <div className="lg:hidden bg-white rounded-[16px] border border-[#E2E8F0] p-[24px] shadow-xs">
            <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[20px] leading-[26px] tracking-[-0.3px]">
              ¿No sabes qué servicio necesitas?
            </h2>
            <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] leading-[21px] mt-[8px]">
              Indica qué tienes que mover, origen y destino. Te recomendamos el vehículo ideal y presupuesto personalizado por correo con tres opciones en menos de 4 horas.
            </p>
            <div className="mt-[18px]">
              <a
                href="/contacto/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contacto');
                }}
                className="w-full min-h-[48px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-colors shadow-sm"
              >
                <span>Hablar con un asesor</span>
                <ArrowRight className="w-[16px] h-[16px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. DATOS OPERATIVOS: POR QUÉ TRANSVOLANDO (VENTAJAS ESTÁTICAS) */}
      {/* ========================================================================= */}
      <WhyTransvolandoSection />

      {/* ========================================================================= */}
      {/* 7. EL MODELO GESTOR ÚNICO: CÓMO TRABAJAMOS (SOLO DESKTOP) */}
      {/* ========================================================================= */}
      <section className="hidden lg:block py-[88px] max-w-[1160px] mx-auto px-[32px] md:px-[48px]">
        <div className="grid grid-cols-12 gap-[48px] items-start">
          <div className="col-span-5 flex flex-col gap-[24px] sticky top-[90px]">
            <div>
              <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[36px] tracking-[-0.6px] leading-[44px]">
                El modelo gestor único: cómo trabajamos
              </h2>
              <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[16px] leading-[26px] mt-[14px]">
                Una sola persona coordina todos los envíos de tu empresa. Esto es lo que hace por ti:
              </p>
            </div>

            <div className="rounded-[18px] overflow-hidden border border-[#E2E8F0] shadow-xs relative bg-[#F8FAFC]">
              <img
                src="https://transvolando.com/wp-content/uploads/2024/07/transvolando-empresa-transportes.webp"
                alt="Gestora de transporte en Transvolando coordinando envíos de empresas"
                className="w-full h-[300px] object-cover object-center"
              />
            </div>

            <div className="pt-[4px]">
              <button
                onClick={() => onNavigate('presupuesto')}
                className="w-full min-h-[48px] px-[24px] rounded-[12px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-all cursor-pointer shadow-sm"
              >
                <span>Pedir presupuesto</span>
                <ArrowRight className="w-[16px] h-[16px]" />
              </button>
            </div>
          </div>

          <div className="col-span-7 flex flex-col divide-y divide-[#E2E8F0]">
            {gestorSteps.map((step, idx) => (
              <div
                key={idx}
                className="py-[20px] first:pt-0 last:pb-0 flex items-start group"
              >
                <p className="font-['Inter',sans-serif] text-[#1F2D3D] text-[16px] leading-[26px] flex-1">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTORES HABITUALES (MOBILE COMPLETO VISIBLE + DESKTOP INTERACTIVO)    */}
      {/* ========================================================================= */}
      <SectorsInteractiveSection onNavigate={onNavigate} />

      {/* ========================================================================= */}
      {/* 9. COBERTURA: ESPAÑA Y EUROPA (MOBILE COMPLETO VISIBLE + DESKTOP TABS)   */}
      {/* ========================================================================= */}
      <CoverageInteractiveSection />

      {/* ========================================================================= */}
      {/* 10. CLIENTES Y EMPRESAS QUE CONFÍAN EN TRANSVOLANDO + CASOS DE ÉXITO      */}
      {/* ========================================================================= */}
      <div className="hidden lg:block">
        <ClientsAndCasesSection onNavigate={onNavigate} />
      </div>

      {/* ========================================================================= */}
      {/* 12. TESTIMONIOS (DESKTOP) */}
      {/* ========================================================================= */}
      <div className="hidden lg:block">
        <TestimonialsSection />
      </div>

      {/* ========================================================================= */}
      {/* 13. SOLICITA TU PRESUPUESTO SIN COMPROMISO (CON VÍDEO INCRUSTADO)         */}
      {/* ========================================================================= */}
      <BudgetVideoSection onNavigate={onNavigate} />

      {/* ========================================================================= */}
      {/* ÚLTIMAS GUÍAS PARA TU LOGÍSTICA (SOLO DESKTOP - ANTES DEL CTA FINAL)      */}
      {/* ========================================================================= */}
      <div className="hidden lg:block">
        <LatestGuidesSection onNavigate={onNavigate} />
      </div>

      {/* ========================================================================= */}
      {/* CTA FINAL AZUL MARINO ANTES DE FAQ (MANTIENE FAQ → FOOTER DIRECTO)        */}
      {/* ========================================================================= */}
      <section className="bg-[#1F2D3D] text-white py-[48px] md:py-[64px] border-y border-[#2A3F55]">
        <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px] text-center flex flex-col items-center">
          <div className="w-[32px] h-[3px] bg-[#DC901B] mb-[18px] rounded-full" />
          <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-white text-[26px] sm:text-[32px] md:text-[38px] tracking-[-0.6px] leading-tight max-w-[680px]">
            ¿Hablamos de tu próximo transporte?
          </h2>
          <p className="font-['Inter',sans-serif] text-white/90 text-[15px] sm:text-[16px] leading-[24px] max-w-[620px] mt-[12px]">
            Te enviamos por correo una propuesta con tres opciones (Básico, Estándar y Premium) y te contactamos en menos de 4 horas.
          </p>

          <div className="mt-[24px] sm:mt-[28px] flex flex-col sm:flex-row items-center gap-[12px] w-full sm:w-auto">
            <button
              onClick={() => onNavigate('presupuesto')}
              className="w-full sm:w-auto min-h-[48px] px-[28px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer shadow-sm"
            >
              <span>Pedir presupuesto</span>
              <ArrowRight className="w-[16px] h-[16px]" />
            </button>

            <a
              href="tel:+34674346912"
              className="w-full sm:w-auto min-h-[48px] px-[24px] rounded-[10px] bg-white hover:bg-[#F8FAFC] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer shadow-xs"
            >
              <Phone className="w-[16px] h-[16px] text-[#DC901B]" />
              <span>Llamar al 674 34 69 12</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. PREGUNTAS FRECUENTES SOBRE TRANSPORTE B2B (DIRECTO A FOOTER)          */}
      {/* ========================================================================= */}
      <HomeFAQSection />
    </div>
  );
}
