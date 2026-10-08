import { servicesData } from '../data/servicesData';
import { NavigationPage } from '../types';
import { COMPANY_PHONE_TEL } from '../utils/navigation';
import ImagePlaceholder from '../components/ImagePlaceholder';
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from 'lucide-react';

interface ServiciosListViewProps {
  onNavigate: (
    page: NavigationPage,
    serviceSlug?: string,
    articleSlug?: string,
    extraParams?: Record<string, string>
  ) => void;
}

export default function ServiciosListView({ onNavigate }: ServiciosListViewProps) {
  return (
    <div className="w-full bg-[#F8FAFC] pb-[88px] lg:pb-0">
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-[#E2E8F0] py-[48px] md:py-[64px] px-[20px] sm:px-[32px] md:px-[48px]">
        <div className="max-w-[1160px] mx-auto">
          <div className="max-w-[760px]">
            <span className="font-['Inter',sans-serif] font-bold text-[#DC901B] text-[12px] tracking-[1.5px] uppercase mb-[12px] block">
              SERVICIOS DE TRANSPORTE B2B
            </span>
            <h1 className="font-['Playfair_Display',serif] font-bold text-[#1F2D3D] text-[34px] sm:text-[44px] md:text-[50px] tracking-[-1.2px] leading-[1.15] mb-[20px]">
              Soluciones de transporte por carretera para empresas
            </h1>
            <p className="font-['Inter',sans-serif] text-[16px] sm:text-[17px] text-[#7C7D7A] leading-[28px]">
              Desde transportes especiales con góndola y autorizaciones de circulación hasta cargas completas exprés y grupaje industrial en España y Europa. Un gestor técnico único asignado a cada expedición.
            </p>
          </div>

          {/* Quick value badges */}
          <div className="flex flex-wrap gap-[12px] mt-[32px]">
            <div className="flex items-center gap-[8px] bg-[#F8FAFC] border border-[#E2E8F0] px-[14px] py-[8px] rounded-[10px] text-[13px] font-medium text-[#1F2D3D]">
              <ShieldCheck className="w-[16px] h-[16px] text-[#DC901B]" />
              <span>Póliza adicional hasta 150.000 € por envío sobre CMR</span>
            </div>
            <div className="flex items-center gap-[8px] bg-[#F8FAFC] border border-[#E2E8F0] px-[14px] py-[8px] rounded-[10px] text-[13px] font-medium text-[#1F2D3D]">
              <Clock className="w-[16px] h-[16px] text-[#DC901B]" />
              <span>Propuesta por correo y contacto en menos de 4 horas</span>
            </div>
            <div className="flex items-center gap-[8px] bg-[#F8FAFC] border border-[#E2E8F0] px-[14px] py-[8px] rounded-[10px] text-[13px] font-medium text-[#1F2D3D]">
              <CheckCircle2 className="w-[16px] h-[16px] text-[#1F2D3D]" />
              <span>Gestor directo sin contestadores</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SERVICES GRID */}
      {/* ========================================================================= */}
      <section className="py-[48px] md:py-[72px] px-[20px] sm:px-[32px] md:px-[48px]">
        <div className="max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {servicesData.map((svc) => (
              <div
                key={svc.slug}
                className="bg-white rounded-[16px] border border-[#E2E8F0] p-[28px] sm:p-[32px] flex flex-col justify-between hover:border-[#DC901B] transition-all shadow-xs group"
              >
                <div>
                  {svc.categoryTag && (
                    <div className="flex items-center justify-start mb-[12px]">
                      <span className="text-[12px] font-semibold text-[#7C7D7A] uppercase tracking-wider font-['Inter',sans-serif]">
                        {svc.categoryTag}
                      </span>
                    </div>
                  )}

                  <h2 className="font-['Playfair_Display',serif] font-bold text-[#1F2D3D] text-[22px] sm:text-[24px] tracking-[-0.5px] leading-tight mb-[12px] group-hover:text-[#DC901B] transition-colors">
                    {svc.name}
                  </h2>

                  <p className="font-['Inter',sans-serif] text-[15px] sm:text-[16px] text-[#7C7D7A] leading-[24px] mb-[20px]">
                    {svc.shortDesc}
                  </p>

                  <div className="space-y-[8px] mb-[24px]">
                    {svc.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-[8px] text-[14px] text-[#1F2D3D]">
                        <span className="text-[#DC901B] font-bold select-none shrink-0">—</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-[20px] border-t border-[#E2E8F0] flex items-center justify-between gap-[12px]">
                  <a
                    href={`/${svc.slug}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('service', svc.slug);
                    }}
                    className="min-h-[44px] text-[14px] font-bold text-[#1F2D3D] hover:text-[#DC901B] transition-colors flex items-center gap-[6px] cursor-pointer"
                  >
                    <span>Detalles del servicio</span>
                    <ArrowRight className="w-[14px] h-[14px]" />
                  </a>

                  <a
                    href={`/presupuesto/?servicio=${svc.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('presupuesto', svc.slug);
                    }}
                    className="min-h-[44px] px-[18px] py-[10px] rounded-[10px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] text-[14px] font-bold transition-all cursor-pointer flex items-center justify-center shadow-sm"
                  >
                    Pedir presupuesto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PAUSA FOTOGRÁFICA EDITORIAL: FLOTA EN CARRETERA */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-[#E2E8F0] py-[32px] sm:py-[44px] md:py-[56px]">
        <div className="max-w-[1160px] mx-auto px-[20px] sm:px-[32px] md:px-[48px]">
          <ImagePlaceholder aspect="aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] max-h-[420px]" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BOTTOM CTA */}
      {/* ========================================================================= */}
      <section className="bg-[#1F2D3D] text-white py-[56px] px-[20px] sm:px-[32px] md:px-[48px]">
        <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[32px]">
          <div className="max-w-[620px]">
            <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[8px] font-['Inter',sans-serif]">
              ¿No tienes claro el vehículo exacto que necesitas?
            </span>
            <h2 className="font-['Playfair_Display',serif] font-bold text-[28px] sm:text-[34px] leading-tight mb-[12px] text-white">
              Nuestro equipo técnico dimensiona tu carga sin coste
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#E2E8F0] leading-[24px] font-['Inter',sans-serif]">
              Indícanos medidas, peso y ruta. Te asesoramos sobre el semirremolque más eficiente y tramitamos las autorizaciones necesarias.
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
