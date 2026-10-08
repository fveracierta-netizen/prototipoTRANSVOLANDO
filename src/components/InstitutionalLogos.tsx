export default function InstitutionalLogos() {
  return (
    <section className="bg-white border-t border-[#ebe4d6] py-[32px] md:py-[40px]">
      <div className="max-w-[1160px] mx-auto px-[24px] sm:px-[32px] md:px-[48px]">
        <div className="text-center mb-[20px]">
          <span className="text-[11px] font-bold text-[#9a927f] uppercase tracking-widest">
            Apoyo institucional y marco regulatorio oficial
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
          {/* Unión Europea - FEDER */}
          <div className="flex items-center gap-[12px] p-[12px] rounded-[10px] border border-[#f0eade] bg-[#fcfaf7] w-full max-w-[240px] h-[68px]">
            <div className="size-[36px] bg-[#003399] rounded-[4px] flex items-center justify-center shrink-0 text-white font-bold text-[14px]">
              🇪🇺
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[11px] font-extrabold text-[#221e19]">UNIÓN EUROPEA</span>
              <span className="text-[9px] text-[#615a4e]">Fondo Europeo de Desarrollo Regional</span>
              <span className="text-[8px] text-[#9a927f] italic font-serif">Una manera de hacer Europa</span>
            </div>
          </div>

          {/* Gobierno de España - Ministerio de Transportes */}
          <div className="flex items-center gap-[12px] p-[12px] rounded-[10px] border border-[#f0eade] bg-[#fcfaf7] w-full max-w-[240px] h-[68px]">
            <div className="w-[10px] h-[36px] flex flex-col rounded-[2px] overflow-hidden shrink-0">
              <div className="h-[25%] bg-[#ad1519]" />
              <div className="h-[50%] bg-[#fabd00]" />
              <div className="h-[25%] bg-[#ad1519]" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[11px] font-extrabold text-[#221e19]">GOBIERNO DE ESPAÑA</span>
              <span className="text-[9px] text-[#615a4e]">Ministerio de Transportes</span>
              <span className="text-[8px] text-[#9a927f]">y Movilidad Sostenible</span>
            </div>
          </div>

          {/* Plan de Recuperación - NextGenerationEU */}
          <div className="flex items-center gap-[12px] p-[12px] rounded-[10px] border border-[#f0eade] bg-[#fcfaf7] w-full max-w-[240px] h-[68px]">
            <div className="size-[36px] bg-[#0b4d75] rounded-[4px] flex items-center justify-center shrink-0 text-white font-black text-[10px] tracking-tighter">
              PRTR
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] font-extrabold text-[#221e19]">PLAN DE RECUPERACIÓN</span>
              <span className="text-[9px] text-[#615a4e]">Transformación y Resiliencia</span>
              <span className="text-[8px] text-[#0b4d75] font-semibold">NextGenerationEU</span>
            </div>
          </div>

          {/* Comunidad de Madrid */}
          <div className="flex items-center gap-[12px] p-[12px] rounded-[10px] border border-[#f0eade] bg-[#fcfaf7] w-full max-w-[240px] h-[68px]">
            <div className="size-[36px] bg-[#cc0000] rounded-[4px] flex items-center justify-center shrink-0 text-white font-bold text-[14px]">
              ★
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[11px] font-extrabold text-[#221e19]">COMUNIDAD DE MADRID</span>
              <span className="text-[9px] text-[#615a4e]">Consejería de Economía</span>
              <span className="text-[8px] text-[#9a927f]">Hacienda y Empleo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
