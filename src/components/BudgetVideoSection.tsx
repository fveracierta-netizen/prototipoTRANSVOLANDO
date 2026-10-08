import { useState } from 'react';
import { NavigationPage } from '../types';

interface BudgetVideoSectionProps {
  onNavigate: (page: NavigationPage) => void;
}

export default function BudgetVideoSection({ onNavigate }: BudgetVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-[64px] md:py-[88px]">
      <div className="max-w-[1160px] mx-auto px-[24px] sm:px-[32px] md:px-[48px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] lg:gap-[48px] items-center">
          {/* Columna de texto (Izquierda en desktop, arriba en mobile) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Pequeño acento naranja */}
            <div className="w-[32px] h-[3px] bg-[#DC901B] mb-[20px] rounded-full" />

            <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] sm:text-[34px] lg:text-[40px] tracking-[-0.6px] leading-[36px] sm:leading-[42px] lg:leading-[48px]">
              Solicita tu presupuesto sin compromiso
            </h2>

            {/* Desktop description */}
            <p className="hidden lg:block font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] sm:text-[16px] leading-[26px] mt-[16px]">
              La ruta, el tipo de carga o peso y la fecha o urgencia permiten preparar tu propuesta personalizada por correo con tres opciones (Básico, Estándar y Premium), sin importes inventados ni precios cerrados. Te contactamos en menos de 4 horas. Sin registro y sin compromiso.
            </p>

            {/* Mobile description (concise, direct, single idea) */}
            <p className="lg:hidden font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] leading-[22px] mt-[10px]">
              Indica tu ruta, tipo de carga y fecha deseada. Preparamos una propuesta con tres opciones (Básico, Estándar y Premium) por correo y te contactamos en menos de 4 horas.
            </p>

            {/* CTA en desktop */}
            <div className="hidden lg:block mt-[32px]">
              <a
                href="/presupuesto/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('presupuesto');
                }}
                className="inline-flex items-center justify-center min-h-[50px] px-[28px] py-[13px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-bold text-[15px] transition-colors duration-200 cursor-pointer shadow-sm"
              >
                Pedir presupuesto
              </a>
            </div>
          </div>

          {/* Columna audiovisual (Derecha en desktop, entre texto y CTA en mobile) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Contenedor de Video 16:9 con reproducción incrustada */}
            <div className="w-full aspect-video rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#E2E8F0] bg-[#1F2D3D] relative shadow-sm">
              {isPlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/XI2TCYsU85c?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1"
                  title="Transvolando - Transporte terrestre de mercancías"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full border-0"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Reproducir video sobre cómo pedir presupuesto"
                  className="relative w-full h-full cursor-pointer group overflow-hidden border-0 p-0 m-0 text-left block focus:outline-none"
                >
                  {/* Imagen miniatura de fondo */}
                  <img
                    src="/assets/video-thumbnail-presupuesto.jpg"
                    alt="Solicita tu presupuesto sin compromiso - Transvolando"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://img.youtube.com/vi/XI2TCYsU85c/maxresdefault.jpg';
                    }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Capa sutil de oscurecimiento */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Botón de play circular minimalista en naranja centrado */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="w-[54px] h-[54px] md:w-[64px] md:h-[64px] rounded-full bg-[#DC901B] group-hover:bg-[#c98014] text-[#1F2D3D] flex items-center justify-center shadow-md transition-all duration-200 group-hover:scale-105">
                      <svg
                        className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] fill-[#1F2D3D] ml-[2.5px]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </button>
              )}
            </div>

            {/* CTA en mobile (título → texto → video → botón) */}
            <div className="block lg:hidden w-full mt-[20px]">
              <a
                href="/presupuesto/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('presupuesto');
                }}
                className="w-full inline-flex items-center justify-center min-h-[50px] px-[28px] py-[14px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-bold text-[15px] transition-colors duration-200 cursor-pointer shadow-sm text-center"
              >
                Pedir presupuesto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
