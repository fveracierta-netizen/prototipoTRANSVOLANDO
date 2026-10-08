interface StaticAdvantage {
  title: string;
  desc: string;
}

const advantages: StaticAdvantage[] = [
  {
    title: 'Casi 3.000 transportistas',
    desc: 'Flota homologada según tipo de carga, ruta y plazo. Sin costes fijos de flota.',
  },
  {
    title: 'España y Europa',
    desc: 'Península e itinerarios europeos. Aduanas en Reino Unido a través de agente de aduanas.',
  },
  {
    title: 'Póliza hasta 150.000 €',
    desc: 'Cobertura adicional por envío sobre la cobertura legal CMR en cada expedición.',
  },
  {
    title: 'Menos del 1 % de incidencias',
    desc: 'Avisos proactivos ante cualquier desvío en ruta, antes de que tú preguntes.',
  },
];

export default function WhyTransvolandoSection() {
  return (
    <section
      id="por-que-transvolando"
      aria-label="Por qué Transvolando"
      className="bg-white py-[44px] md:py-[72px] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
        {/* 1. ENCABEZADO */}
        <div className="max-w-[760px] mb-[28px] sm:mb-[36px] md:mb-[44px]">
          <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] tracking-[-0.6px] leading-tight">
            Por qué Transvolando
          </h2>
          <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] sm:text-[16px] md:text-[17px] leading-[22px] sm:leading-[25px] mt-[8px] sm:mt-[10px]">
            Una operativa diseñada para que tu empresa mueva mercancía con menos gestión y más control.
          </p>
        </div>

        {/* 2. VENTAJAS ESTÁTICAS (SIN CARRUSELES AUTOMÁTICOS NI DUPLICADOS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[20px]">
          {advantages.map((adv, idx) => (
            <div
              key={`adv-${idx}`}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-[20px] md:p-[24px] flex flex-col justify-between"
            >
              <div>
                <span className="font-['Playfair_Display',Georgia,serif] font-bold text-[#DC901B] text-[17px] sm:text-[18px] block tracking-[-0.2px] leading-snug mb-[8px]">
                  {adv.title}
                </span>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#7C7D7A] leading-[22px]">
                  {adv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
