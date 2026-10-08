const metrics = [
  {
    id: 'dato-viajes',
    number: 'Más de 21.000',
    description: 'viajes desde 2020',
  },
  {
    id: 'dato-transportistas',
    number: 'Casi 3.000',
    description: 'transportistas en red',
  },
  {
    id: 'dato-poliza',
    number: 'Hasta 150.000 €',
    description: 'de póliza adicional por envío sobre CMR',
  },
  {
    id: 'dato-incidencias',
    number: '< 1 %',
    description: 'de incidencias en transporte',
  },
];

export default function KeyMetricsSection() {
  return (
    <section
      id="bloque-datos-clave"
      aria-label="Cifras clave de Transvolando"
      className="w-full bg-white py-[24px] sm:py-[28px] md:py-[32px] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
        {/*
          MOBILE: Grid 2 × 2 compacto plano
          DESKTOP: Grid 4 columnas en 1 fila
          Cifras navy (#1F2D3D) sobre blanco
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[16px] xs:gap-x-[24px] sm:gap-x-[32px] md:gap-x-[32px] lg:gap-x-[48px] gap-y-[20px] sm:gap-y-[24px] md:gap-y-0 items-start">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              id={metric.id}
              className="flex flex-col items-start text-left"
            >
              <span
                className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] xs:text-[26px] sm:text-[30px] md:text-[32px] lg:text-[36px] tracking-[-0.5px] leading-tight select-none"
                aria-label={`${metric.number} ${metric.description}`}
              >
                {metric.number}
              </span>

              <p className="font-['Inter',sans-serif] font-medium text-[#7C7D7A] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] mt-[4px] sm:mt-[6px] max-w-[240px]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
