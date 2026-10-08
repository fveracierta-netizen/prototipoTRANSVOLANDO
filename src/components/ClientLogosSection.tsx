export default function ClientLogosSection() {
  return (
    <section className="bg-white border-b border-[#E2E8F0] py-[40px] md:py-[48px] overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-[24px] sm:px-[32px] md:px-[48px]">
        <div className="text-center max-w-[700px] mx-auto mb-[28px]">
          <span className="font-['Inter',sans-serif] text-[11px] md:text-[12px] font-bold text-[#DC901B] uppercase tracking-wider block mb-[4px]">
            Soluciones logísticas para empresas
          </span>
          <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[20px] md:text-[24px] tracking-[-0.4px]">
            Líderes industriales y corporativos que confían en Transvolando
          </h2>
          <p className="font-['Inter',sans-serif] text-[13px] md:text-[14px] text-[#7C7D7A] mt-[4px]">
            Gestionamos operativas críticas, transportes especiales y rutas regulares para empresas exigentes en España y Europa.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[16px] md:gap-[24px] items-center justify-center">
          {/* Amazon */}
          <div className="h-[72px] bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0] p-[16px] flex flex-col items-center justify-center group hover:border-[#DC901B]/40 transition-colors shadow-2xs">
            <svg viewBox="0 0 110 33" className="h-[26px] w-auto fill-[#1F2D3D] opacity-80 group-hover:opacity-100 transition-opacity">
              <text x="5" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="21" letterSpacing="-0.8">amazon</text>
              <path d="M 12 25 Q 48 33 80 23" fill="none" stroke="#DC901B" strokeWidth="2.5" strokeLinecap="round" />
              <polygon points="77,21 84,24 79,27" fill="#DC901B" />
            </svg>
            <span className="text-[10px] font-semibold text-[#7C7D7A] mt-[4px]">Logística y distribución</span>
          </div>

          {/* Volvo */}
          <div className="h-[72px] bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0] p-[16px] flex flex-col items-center justify-center group hover:border-[#DC901B]/40 transition-colors shadow-2xs">
            <div className="flex items-center gap-[8px]">
              <svg viewBox="0 0 30 30" className="w-[20px] h-[20px] text-[#1F2D3D] opacity-80 group-hover:opacity-100 transition-opacity">
                <circle cx="15" cy="15" r="11" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M 23 7 L 27 3 M 22 3 L 27 3 L 27 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-['Inter',sans-serif] font-black tracking-[3px] text-[17px] text-[#1F2D3D] opacity-80 group-hover:opacity-100 transition-opacity">
                VOLVO
              </span>
            </div>
            <span className="text-[10px] font-semibold text-[#7C7D7A] mt-[4px]">Automoción y maquinaria</span>
          </div>

          {/* Acerinox */}
          <div className="h-[72px] bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0] p-[16px] flex flex-col items-center justify-center group hover:border-[#DC901B]/40 transition-colors shadow-2xs">
            <div className="flex items-center gap-[6px]">
              <div className="size-[16px] bg-[#1F2D3D] text-white flex items-center justify-center font-black text-[11px] rounded-[3px]">
                A
              </div>
              <span className="font-['Inter',sans-serif] font-extrabold tracking-[1px] text-[16px] text-[#1F2D3D] opacity-80 group-hover:opacity-100 transition-opacity">
                ACERINOX
              </span>
            </div>
            <span className="text-[10px] font-semibold text-[#7C7D7A] mt-[4px]">Siderurgia y metalurgia</span>
          </div>

          {/* INTA */}
          <div className="h-[72px] bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0] p-[16px] flex flex-col items-center justify-center group hover:border-[#DC901B]/40 transition-colors shadow-2xs">
            <div className="flex items-center gap-[6px]">
              <div className="size-[18px] rounded-full border-2 border-[#DC901B] flex items-center justify-center text-[#DC901B] font-bold text-[10px]">
                ★
              </div>
              <span className="font-['Inter',sans-serif] font-black tracking-[1.5px] text-[17px] text-[#1F2D3D] opacity-80 group-hover:opacity-100 transition-opacity">
                INTA
              </span>
            </div>
            <span className="text-[10px] font-semibold text-[#7C7D7A] mt-[4px]">Técnica Aeroespacial</span>
          </div>

          {/* Academia de Cine */}
          <div className="col-span-2 sm:col-span-1 h-[72px] bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0] p-[10px] flex flex-col items-center justify-center group hover:border-[#DC901B]/40 transition-colors">
            <span className="font-['Inter',sans-serif] font-bold tracking-[0.5px] text-[12px] text-[#1F2D3D] text-center leading-[14px] opacity-80 group-hover:opacity-100 transition-opacity">
              ACADEMIA DE CINE
            </span>
            <span className="text-[12px] font-semibold text-[#DC901B] uppercase tracking-wider mt-[2px]">
              Premios Goya
            </span>
          </div>
        </div>

        {/* Small trust banner footer */}
        <div className="mt-[24px] pt-[20px] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-[16px] text-[13px] text-[#7C7D7A]">
          <div className="flex items-center gap-[6px]">
            <span className="size-[8px] rounded-full bg-[#20bd5a]" />
            <span>Propuesta por correo y contacto en menos de <strong>4 horas</strong></span>
          </div>
          <div className="flex items-center gap-[6px]">
            <span className="size-[8px] rounded-full bg-[#DC901B]" />
            <span>Póliza adicional hasta <strong>150.000 €</strong> por envío sobre CMR</span>
          </div>
          <div className="flex items-center gap-[6px]">
            <span className="size-[8px] rounded-full bg-[#1F2D3D]" />
            <span>Red de casi <strong>3.000 transportistas</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
