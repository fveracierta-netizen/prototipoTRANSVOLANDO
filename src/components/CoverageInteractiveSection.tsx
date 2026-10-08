import { useState } from 'react';
import { SpainMapSvg, EuropeMapSvg } from './CoverageMapSvgs';
import { Clock, Shield, MapPin, FileCheck } from 'lucide-react';

export default function CoverageInteractiveSection() {
  const [activeTab, setActiveTab] = useState<'nacional' | 'internacional'>('nacional');

  return (
    <section
      id="cobertura-geografica"
      aria-label="Cobertura geográfica"
      className="py-[44px] md:py-[80px] max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]"
    >
      {/* 1. ENCABEZADO */}
      <div className="max-w-[760px] mb-[20px] sm:mb-[24px]">
        <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] tracking-[-0.6px] leading-tight">
          Cobertura geográfica
        </h2>
        <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] sm:text-[16px] md:text-[17px] leading-[22px] sm:leading-[25px] mt-[6px] sm:mt-[8px]">
          España y Europa con documentación y seguro incluidos.
        </p>
      </div>

      {/* 2. SELECTOR NACIONAL / INTERNACIONAL (SOLO DESKTOP) */}
      <div
        className="hidden lg:flex items-center gap-[24px] border-b border-[#E2E8F0] mb-[28px]"
        role="tablist"
        aria-label="Tipo de cobertura"
      >
        <button
          type="button"
          role="tab"
          id="tab-nacional"
          aria-selected={activeTab === 'nacional'}
          aria-controls="panel-coverage-desktop"
          onClick={() => setActiveTab('nacional')}
          className={`pb-[10px] text-[16px] font-['Inter',sans-serif] transition-all relative cursor-pointer select-none outline-none ${
            activeTab === 'nacional'
              ? 'font-bold text-[#1F2D3D]'
              : 'font-medium text-[#7C7D7A] hover:text-[#1F2D3D]'
          }`}
        >
          <span>Transporte nacional</span>
          {activeTab === 'nacional' && (
            <span className="absolute bottom-[-1px] left-0 right-0 h-[2.5px] bg-[#DC901B] rounded-full" />
          )}
        </button>

        <span className="text-[#CBD5E1] select-none text-[13px] font-light">|</span>

        <button
          type="button"
          role="tab"
          id="tab-internacional"
          aria-selected={activeTab === 'internacional'}
          aria-controls="panel-coverage-desktop"
          onClick={() => setActiveTab('internacional')}
          className={`pb-[10px] text-[16px] font-['Inter',sans-serif] transition-all relative cursor-pointer select-none outline-none ${
            activeTab === 'internacional'
              ? 'font-bold text-[#1F2D3D]'
              : 'font-medium text-[#7C7D7A] hover:text-[#1F2D3D]'
          }`}
        >
          <span>Transporte internacional</span>
          {activeTab === 'internacional' && (
            <span className="absolute bottom-[-1px] left-0 right-0 h-[2.5px] bg-[#DC901B] rounded-full" />
          )}
        </button>
      </div>

      {/* ============================================================== */}
      {/* MOBILE LAYOUT: SECCIONES VISIBLES SECUENCIALES (SIN PESTAÑAS) */}
      {/* ============================================================== */}
      <div className="lg:hidden flex flex-col gap-[20px]">
        {/* 1. SECCIÓN NACIONAL VISIBLE */}
        <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-[18px] sm:p-[24px]">
          <div className="w-full h-[200px] xs:h-[220px] rounded-[14px] bg-[#F4F6F8] border border-[#E2E8F0] flex items-center justify-center p-[8px] sm:p-[12px] mb-[16px] overflow-hidden">
            <SpainMapSvg />
          </div>

          <span className="inline-flex items-center gap-[6px] px-[8px] py-[3px] rounded-[6px] bg-[#DC901B]/15 text-[#1F2D3D] text-[11px] font-bold tracking-wide uppercase font-['Inter',sans-serif] w-max mb-[8px]">
            <MapPin className="w-[12px] h-[12px] text-[#DC901B]" />
            Península e Islas
          </span>

          <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[20px] sm:text-[22px] leading-[28px]">
            Transporte nacional
          </h3>

          <p className="font-['Inter',sans-serif] text-[14px] text-[#7C7D7A] leading-[22px] mt-[6px]">
            Península e islas en 24 a 72 horas. Flota de casi 3.000 transportistas homologados para carga estándar y urgente.
          </p>

          <div className="grid grid-cols-2 gap-[10px] mt-[16px] pt-[14px] border-t border-[#E2E8F0]">
            <div className="flex items-center gap-[6px] text-[12.5px] font-medium text-[#1F2D3D] font-['Inter',sans-serif]">
              <Clock className="w-[14px] h-[14px] text-[#DC901B] shrink-0" />
              <span>24 a 72 h habituales</span>
            </div>
            <div className="flex items-center gap-[6px] text-[12.5px] font-medium text-[#1F2D3D] font-['Inter',sans-serif]">
              <Shield className="w-[14px] h-[14px] text-[#DC901B] shrink-0" />
              <span>Póliza hasta 150.000 €</span>
            </div>
          </div>
        </div>

        {/* 2. SECCIÓN INTERNACIONAL VISIBLE */}
        <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-[18px] sm:p-[24px]">
          <div className="w-full h-[200px] xs:h-[220px] rounded-[14px] bg-[#F4F6F8] border border-[#E2E8F0] flex items-center justify-center p-[8px] sm:p-[12px] mb-[16px] overflow-hidden">
            <EuropeMapSvg />
          </div>

          <span className="inline-flex items-center gap-[6px] px-[8px] py-[3px] rounded-[6px] bg-[#DC901B]/15 text-[#1F2D3D] text-[11px] font-bold tracking-wide uppercase font-['Inter',sans-serif] w-max mb-[8px]">
            <MapPin className="w-[12px] h-[12px] text-[#DC901B]" />
            España y Europa
          </span>

          <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[20px] sm:text-[22px] leading-[28px]">
            Transporte internacional
          </h3>

          <p className="font-['Inter',sans-serif] text-[14px] text-[#7C7D7A] leading-[22px] mt-[6px]">
            España y Europa. Coordinación aduanera en Reino Unido a través de agente de aduanas y documentación CMR incluida de serie.
          </p>

          <div className="grid grid-cols-2 gap-[10px] mt-[16px] pt-[14px] border-t border-[#E2E8F0]">
            <div className="flex items-center gap-[6px] text-[12.5px] font-medium text-[#1F2D3D] font-['Inter',sans-serif]">
              <FileCheck className="w-[14px] h-[14px] text-[#DC901B] shrink-0" />
              <span>Agente de aduanas</span>
            </div>
            <div className="flex items-center gap-[6px] text-[12.5px] font-medium text-[#1F2D3D] font-['Inter',sans-serif]">
              <Shield className="w-[14px] h-[14px] text-[#DC901B] shrink-0" />
              <span>Póliza y CMR</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP LAYOUT (HORIZONTAL Y ELEGANTE CON PESTAÑAS)            */}
      {/* ============================================================== */}
      <div
        id="panel-coverage-desktop"
        className="hidden lg:block bg-white rounded-[22px] border border-[#E2E8F0] p-[32px] xl:p-[40px]"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        <div
          key={`desktop-cov-${activeTab}`}
          className="grid grid-cols-12 gap-[36px] xl:gap-[48px] items-center"
        >
          {/* Columna Mapa */}
          <div className="col-span-6 w-full h-[380px] xl:h-[420px] rounded-[18px] bg-[#F4F6F8] border border-[#E2E8F0] flex items-center justify-center p-[16px] xl:p-[24px] overflow-hidden">
            {activeTab === 'nacional' ? <SpainMapSvg /> : <EuropeMapSvg />}
          </div>

          {/* Columna Información */}
          <div className="col-span-6 flex flex-col justify-center">
            <span className="inline-flex items-center gap-[6px] px-[10px] py-[4px] rounded-[6px] bg-[#DC901B]/15 text-[#1F2D3D] text-[12px] font-bold tracking-wide uppercase font-['Inter',sans-serif] w-max mb-[12px]">
              <MapPin className="w-[13px] h-[13px] text-[#DC901B]" />
              {activeTab === 'nacional' ? 'Cobertura Peninsular e Insular' : 'España y Europa'}
            </span>

            <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[26px] xl:text-[30px] leading-[36px] tracking-[-0.4px]">
              {activeTab === 'nacional' ? 'Transporte nacional' : 'Transporte internacional'}
            </h3>

            <p className="font-['Inter',sans-serif] text-[15px] xl:text-[16px] text-[#7C7D7A] leading-[26px] mt-[12px]">
              {activeTab === 'nacional'
                ? 'Península, Baleares, Canarias, Ceuta y Melilla, con plazo habitual de 24 a 72 horas y equipo disponible para atender cada operativa. Elegimos el transportista de nuestra red de casi 3.000 homologados y coordinamos el envío hasta destino.'
                : 'Corredores hacia Alemania, Francia, Bélgica, Países Bajos y resto de Europa, y Reino Unido con trámites aduaneros a través de agente de aduanas. Sin intermediarios que apilen capas: gestionamos la documentación de transporte CMR.'}
            </p>

            {/* Puntos destacados operativos */}
            <div className="grid grid-cols-2 gap-[12px] mt-[24px] pt-[20px] border-t border-[#E2E8F0]">
              {activeTab === 'nacional' ? (
                <>
                  <div className="flex items-center gap-[8px] text-[13.5px] font-medium text-[#1F2D3D] font-['Inter',sans-serif]">
                    <Clock className="w-[15px] h-[15px] text-[#DC901B] shrink-0" />
                    <span>24 a 72 h habituales</span>
                  </div>
                  <div className="flex items-center gap-[8px] text-[13.5px] font-medium text-[#1F2D3D] font-['Inter',sans-serif]">
                    <Shield className="w-[15px] h-[15px] text-[#DC901B] shrink-0" />
                    <span>Póliza hasta 150.000 €</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-[8px] text-[13.5px] font-medium text-[#1F2D3D] font-['Inter',sans-serif]">
                    <FileCheck className="w-[15px] h-[15px] text-[#DC901B] shrink-0" />
                    <span>Agente de aduanas</span>
                  </div>
                  <div className="flex items-center gap-[8px] text-[13.5px] font-medium text-[#1F2D3D] font-['Inter',sans-serif]">
                    <Shield className="w-[15px] h-[15px] text-[#DC901B] shrink-0" />
                    <span>Póliza y CMR gestionado</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
