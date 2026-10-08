import { useState } from 'react';
import { caseStudies, testimonials } from '../data/casesData';
import { NavigationPage } from '../types';
import { COMPANY_PHONE_TEL } from '../utils/navigation';
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from 'lucide-react';

interface CasosViewProps {
  onNavigate: (
    page: NavigationPage,
    serviceSlug?: string,
    articleSlug?: string,
    extraParams?: Record<string, string>
  ) => void;
}

export default function CasosView({ onNavigate }: CasosViewProps) {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseStudies[0].id);

  const selectedCase =
    caseStudies.find((c) => c.id === selectedCaseId) || caseStudies[0];

  return (
    <div className="w-full bg-[#F8FAFC] pb-[88px] lg:pb-0 font-['Inter',sans-serif]">
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-[#E2E8F0] py-[48px] md:py-[64px] px-[20px] sm:px-[32px] md:px-[48px]">
        <div className="max-w-[1160px] mx-auto">
          <div className="max-w-[760px]">
            <span className="font-['Inter',sans-serif] font-bold text-[#DC901B] text-[12px] tracking-[1.5px] uppercase mb-[12px] block">
              OPERATIVA REAL Y RESULTADOS
            </span>
            <h1 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[34px] sm:text-[44px] md:text-[50px] tracking-[-1.2px] leading-[1.15] mb-[20px]">
              Casos de éxito en transporte industrial y logística pesada
            </h1>
            <p className="font-['Inter',sans-serif] text-[16px] sm:text-[17px] text-[#7C7D7A] leading-[28px]">
              Descubre cómo ayudamos a directores de logística, jefes de taller y empresas industriales a resolver traslados complejos, cumplir plazos críticos y reducir incidencias en carretera.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px] mt-[36px] pt-[28px] border-t border-[#E2E8F0]">
            <div className="bg-[#F8FAFC] p-[16px] rounded-[12px] border border-[#E2E8F0]">
              <div className="font-['Playfair_Display',Georgia,serif] font-bold text-[28px] text-[#DC901B]">
                Más de 21.000
              </div>
              <div className="text-[13px] text-[#7C7D7A] font-medium mt-[2px] font-['Inter',sans-serif]">
                Viajes desde 2020
              </div>
            </div>
            <div className="bg-[#F8FAFC] p-[16px] rounded-[12px] border border-[#E2E8F0]">
              <div className="font-['Playfair_Display',Georgia,serif] font-bold text-[28px] text-[#DC901B]">
                Casi 3.000
              </div>
              <div className="text-[13px] text-[#7C7D7A] font-medium mt-[2px] font-['Inter',sans-serif]">
                Transportistas en red
              </div>
            </div>
            <div className="bg-[#F8FAFC] p-[16px] rounded-[12px] border border-[#E2E8F0]">
              <div className="font-['Playfair_Display',Georgia,serif] font-bold text-[28px] text-[#DC901B]">
                Hasta 150.000 €
              </div>
              <div className="text-[13px] text-[#7C7D7A] font-medium mt-[2px] font-['Inter',sans-serif]">
                Póliza sobre CMR
              </div>
            </div>
            <div className="bg-[#F8FAFC] p-[16px] rounded-[12px] border border-[#E2E8F0]">
              <div className="font-['Playfair_Display',Georgia,serif] font-bold text-[28px] text-[#DC901B]">
                &lt; 1 %
              </div>
              <div className="text-[13px] text-[#7C7D7A] font-medium mt-[2px] font-['Inter',sans-serif]">
                Incidencias en transporte
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DETAILED CASE STUDIES SELECTOR & DISPLAY */}
      {/* ========================================================================= */}
      <section className="py-[48px] md:py-[72px] px-[20px] sm:px-[32px] md:px-[48px]">
        <div className="max-w-[1160px] mx-auto">
          {/* Selector Tabs */}
          <div className="flex flex-wrap gap-[10px] mb-[32px]">
            {caseStudies.map((cs) => {
              const isSelected = cs.id === selectedCaseId;
              return (
                <button
                  key={cs.id}
                  onClick={() => setSelectedCaseId(cs.id)}
                  className={`min-h-[44px] px-[18px] py-[12px] rounded-[10px] font-['Inter',sans-serif] text-[14px] font-semibold transition-all cursor-pointer text-left border ${
                    isSelected
                      ? 'bg-[#1F2D3D] text-white border-[#1F2D3D] shadow-sm'
                      : 'bg-white text-[#7C7D7A] border-[#E2E8F0] hover:border-[#DC901B] hover:text-[#1F2D3D]'
                  }`}
                >
                  <div className="text-[11px] tracking-wider uppercase opacity-80">{cs.sector}</div>
                  <div className="text-[15px] font-bold mt-[2px]">{cs.client}</div>
                </button>
              );
            })}
          </div>

          {/* Active Case Study Detail Card */}
          <div className="bg-white rounded-[20px] border border-[#E2E8F0] overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Story, Challenge, Solution, Quote */}
              <div className="lg:col-span-7 p-[28px] sm:p-[40px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-[8px] text-[13px] text-[#DC901B] font-bold uppercase tracking-wider mb-[8px]">
                    <Building2 className="w-[15px] h-[15px]" />
                    <span>{selectedCase.sector} · {selectedCase.company}</span>
                  </div>

                  <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] sm:text-[30px] tracking-[-0.6px] leading-tight mb-[24px]">
                    {selectedCase.title}
                  </h2>

                  {/* Challenge & Solution */}
                  <div className="space-y-[18px] mb-[28px]">
                    <div className="bg-[#F8FAFC] p-[18px] rounded-[12px] border border-[#E2E8F0]">
                      <div className="font-['Inter',sans-serif] font-bold text-[#1F2D3D] text-[14px] mb-[6px] flex items-center gap-[6px]">
                        <span className="size-[8px] rounded-full bg-[#DC901B]" />
                        <span>El desafío operativo</span>
                      </div>
                      <p className="text-[14px] text-[#7C7D7A] leading-[22px]">
                        {selectedCase.challenge}
                      </p>
                    </div>

                    <div className="bg-[#F8FAFC] p-[18px] rounded-[12px] border border-[#E2E8F0]">
                      <div className="font-['Inter',sans-serif] font-bold text-[#1F2D3D] text-[14px] mb-[6px] flex items-center gap-[6px]">
                        <CheckCircle2 className="w-[14px] h-[14px] text-[#1F2D3D]" />
                        <span>La solución Transvolando</span>
                      </div>
                      <p className="text-[14px] text-[#7C7D7A] leading-[22px]">
                        {selectedCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Client Quote */}
                  <div className="border-l-[3px] border-[#DC901B] pl-[16px] py-[4px] my-[24px]">
                    <p className="text-[15px] italic text-[#1F2D3D] leading-[24px]">
                      &ldquo;{selectedCase.quote}&rdquo;
                    </p>
                    <div className="text-[13px] font-bold text-[#7C7D7A] mt-[8px]">
                      {selectedCase.client} — {selectedCase.company}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA for this specific service */}
                <div className="pt-[24px] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-[16px]">
                  <div>
                    <span className="text-[12px] text-[#7C7D7A] block">Servicio utilizado:</span>
                    <span className="text-[15px] font-bold text-[#1F2D3D]">{selectedCase.serviceName}</span>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <a
                      href={`/${selectedCase.serviceSlug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service', selectedCase.serviceSlug);
                      }}
                      className="min-h-[44px] px-[16px] py-[10px] rounded-[8px] bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[#1F2D3D] text-[13px] font-semibold transition-colors cursor-pointer flex items-center"
                    >
                      Ver servicio
                    </a>
                    <a
                      href={`/presupuesto/?servicio=${selectedCase.serviceSlug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('presupuesto', selectedCase.serviceSlug);
                      }}
                      className="min-h-[44px] px-[18px] py-[10px] rounded-[8px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] text-[13px] font-bold flex items-center gap-[6px] transition-colors cursor-pointer shadow-sm"
                    >
                      <span>Pedir presupuesto</span>
                      <ArrowRight className="w-[14px] h-[14px]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Image & Highlights */}
              <div className="lg:col-span-5 bg-[#1F2D3D] text-white flex flex-col justify-between">
                <div className="h-[260px] sm:h-[320px] lg:h-[300px] relative overflow-hidden">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2D3D] via-transparent to-transparent" />
                  <div className="absolute top-[16px] left-[16px] bg-[#1F2D3D]/90 backdrop-blur-sm px-[10px] py-[4px] rounded-[6px] text-[12px] font-medium text-[#DC901B] border border-white/20">
                    Operativa verificada
                  </div>
                </div>

                <div className="p-[28px] sm:p-[36px]">
                  <h3 className="text-[13px] uppercase tracking-wider text-white/80 font-bold mb-[18px]">
                    Resultados medibles obtenidos
                  </h3>

                  <div className="space-y-[16px]">
                    {selectedCase.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 border border-white/15 p-[16px] rounded-[12px] flex items-center justify-between"
                      >
                        <span className="text-[13px] text-white/90">{stat.label}</span>
                        <span className="font-['Playfair_Display',Georgia,serif] font-bold text-[22px] text-[#DC901B]">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-[24px] pt-[20px] border-t border-white/15 flex items-center gap-[10px] text-[12px] text-white/80">
                    <ShieldCheck className="w-[16px] h-[16px] text-[#DC901B] shrink-0" />
                    <span>Conforme a normativa CMR y LOTT con cobertura asegurada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ALL 3 CASES PREVIEW GRID */}
      {/* ========================================================================= */}
      <section className="py-[48px] px-[20px] sm:px-[32px] md:px-[48px] bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-[40px]">
            <span className="font-['Inter',sans-serif] font-bold text-[#DC901B] text-[12px] tracking-[1.5px] uppercase mb-[8px] block">
              TODOS LOS CASOS
            </span>
            <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] sm:text-[34px] tracking-[-0.8px]">
              Experiencia demostrada en cada sector industrial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-[#F8FAFC] rounded-[16px] border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#DC901B] transition-all"
              >
                <div>
                  <div className="h-[180px] overflow-hidden relative">
                    <img
                      src={cs.image}
                      alt={cs.client}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-[12px] left-[12px] bg-white/95 backdrop-blur-sm px-[10px] py-[3px] rounded-[6px] text-[11px] font-bold text-[#1F2D3D]">
                      {cs.sector}
                    </div>
                  </div>

                  <div className="p-[20px]">
                    <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[16px] leading-[22px] mb-[10px] line-clamp-2">
                      {cs.title}
                    </h3>
                    <p className="text-[13px] text-[#7C7D7A] leading-[19px] line-clamp-3 mb-[16px]">
                      {cs.challenge}
                    </p>

                    <div className="flex items-center gap-[6px] text-[12px] text-[#7C7D7A]">
                      <span className="font-semibold text-[#1F2D3D]">{cs.client}</span>
                      <span>·</span>
                      <span>{cs.company}</span>
                    </div>
                  </div>
                </div>

                <div className="p-[20px] pt-0">
                  <button
                    onClick={() => {
                      setSelectedCaseId(cs.id);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="min-h-[44px] w-full py-[10px] rounded-[8px] bg-white border border-[#E2E8F0] hover:border-[#DC901B] hover:bg-[#F8FAFC] text-[#1F2D3D] text-[13px] font-semibold transition-colors cursor-pointer"
                  >
                    Ver caso completo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TESTIMONIALS & REVIEWS SECTION */}
      {/* ========================================================================= */}
      <section className="py-[56px] md:py-[72px] px-[20px] sm:px-[32px] md:px-[48px]">
        <div className="max-w-[1160px] mx-auto">
          <div className="max-w-[640px] mb-[40px]">
            <span className="font-['Inter',sans-serif] font-bold text-[#DC901B] text-[12px] tracking-[1.5px] uppercase mb-[8px] block">
              VALORACIONES DE CLIENTES
            </span>
            <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] sm:text-[36px] tracking-[-0.8px] leading-tight">
              Qué dicen los responsables logísticos que trabajan con nosotros
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-white p-[28px] rounded-[16px] border border-[#E2E8F0] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-[12px] mb-[16px]">
                    <span className="text-[12px] font-bold text-[#DC901B] tracking-wide uppercase font-['Inter',sans-serif]">
                      Experiencia directa de cliente
                    </span>
                    <span className="text-[11px] font-semibold text-[#1F2D3D] bg-[#F8FAFC] border border-[#E2E8F0] px-[8px] py-[3px] rounded-[6px]">
                      {test.verified}
                    </span>
                  </div>

                  <p className="text-[15px] text-[#1F2D3D] leading-[24px] mb-[20px] italic">
                    &ldquo;{test.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-[16px] border-t border-[#E2E8F0] flex items-center justify-between">
                  <div>
                    <div className="font-['Inter',sans-serif] font-bold text-[#1F2D3D] text-[15px]">
                      {test.name}
                    </div>
                    <div className="text-[12px] text-[#7C7D7A]">{test.role} · {test.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CTA STRIP */}
      {/* ========================================================================= */}
      <section className="bg-[#1F2D3D] text-white py-[56px] px-[20px] sm:px-[32px] md:px-[48px]">
        <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[32px]">
          <div className="max-w-[620px]">
            <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[8px] font-['Inter',sans-serif]">
              ¿Tienes un transporte similar entre manos?
            </span>
            <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[28px] sm:text-[34px] leading-tight mb-[12px] text-white">
              Cotizamos tu ruta con viabilidad técnica en menos de 4 horas
            </h2>
            <p className="text-[15px] text-white/90 leading-[24px] font-['Inter',sans-serif]">
              Habla directamente con un gestor especializado en tu sector o introduce tu origen y destino para recibir una propuesta con tres opciones por correo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[12px] w-full md:w-auto shrink-0">
            <a
              href={COMPANY_PHONE_TEL}
              className="min-h-[48px] px-[20px] rounded-[10px] bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-[14px] flex items-center justify-center gap-[8px] transition-colors"
            >
              <Phone className="w-[16px] h-[16px] text-[#DC901B]" />
              <span>Llamar ahora</span>
            </a>

            <a
              href="/presupuesto/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('presupuesto');
              }}
              className="min-h-[48px] px-[24px] rounded-[10px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-bold text-[15px] flex items-center justify-center gap-[8px] transition-all cursor-pointer shadow-sm"
            >
              <span>Pedir presupuesto</span>
              <ArrowRight className="w-[16px] h-[16px]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
