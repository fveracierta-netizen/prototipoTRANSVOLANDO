import { NavigateFunction } from '../types';

interface ClientsAndCasesSectionProps {
  onNavigate?: NavigateFunction;
}

const clientLogos = [
  { name: 'Calidad Pascual', src: '/logos/Frame 3.png' },
  { name: 'Volvo', src: '/logos/Frame 4.png' },
  { name: 'Unide', src: '/logos/Frame 5.png' },
  { name: 'Thyssenkrupp', src: '/logos/Frame 6.png' },
  { name: 'Mission', src: '/logos/Frame 7.png' },
  { name: 'Gobierno de España / INTA', src: '/logos/Frame 8.png' },
  { name: 'Fundación Isabel Gemio', src: '/logos/Frame 9.png' },
  { name: 'Grupo Lantero', src: '/logos/Frame 10.png' },
  { name: 'FCC', src: '/logos/Frame 11.png' },
  { name: 'Cruz Roja', src: '/logos/Frame 12.png' },
  { name: 'El Corte Inglés', src: '/logos/Frame 13.png' },
  { name: 'Comart', src: '/logos/Frame 14.png' },
  { name: 'Amazon', src: '/logos/Frame 15.png' },
  { name: 'Acerinox', src: '/logos/Frame 16.png' },
  { name: 'Academia de las Artes y las Ciencias Cinematográficas', src: '/logos/Frame 17.png' },
];

const realCases = [
  {
    id: 'caso-1',
    title: 'Industria del acero: bobinas en rutas fijas',
    firstParagraph:
      'Alfonso Rico, responsable de logística en una empresa del sector del acero, necesitaba mover bobinas de gran peso y volumen con rutas estables que no interrumpieran la producción.',
    result:
      'Montamos una operativa de logística industrial y cargas pesadas con gestor único dedicado.',
    reviewText: 'Ver reseña de Alfonso Rico',
    reviewUrl: 'https://share.google/ejVq4P10zBCRY9i4n',
  },
  {
    id: 'caso-2',
    title: 'Maquinaria industrial: una máquina en góndola',
    firstParagraph:
      'Melissa Gómez, al frente de un taller de maquinaria pesada, tenía que trasladar una máquina industrial sobredimensionada con plazos muy ajustados y sin margen en seguridad.',
    result:
      'Diseñamos un transporte especial a medida con autorizaciones tramitadas y entrega sin incidencias.',
    reviewText: 'Ver reseña de Melissa Gómez',
    reviewUrl: 'https://share.google/kcQRtawXsUvVyACUa',
  },
  {
    id: 'caso-3',
    title: 'Grupaje: piezas de hornos a múltiples destinos',
    firstParagraph:
      'Dolores Espasandín Pérez, encargada de logística en un fabricante de hornos industriales, enviaba piezas de tamaños muy distintos a múltiples destinos y necesitaba bajar el coste sin perder servicio.',
    result:
      'Consolidamos su carga en grupaje optimizado con contacto directo y gestor asignado.',
    reviewText: 'Ver reseña de Dolores Espasandín Pérez',
    reviewUrl: 'https://share.google/TP99npXbScEcPXwpA',
  },
];

export default function ClientsAndCasesSection({ onNavigate }: ClientsAndCasesSectionProps) {
  return (
    <section id="clientes-y-casos" className="py-[64px] md:py-[88px] max-w-[1160px] mx-auto px-[24px] sm:px-[32px] md:px-[48px]">
      {/* 1. CABECERA */}
      <div className="max-w-[820px] mb-[36px] md:mb-[44px]">
        <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] md:text-[36px] tracking-[-0.6px] leading-[36px] md:leading-[44px]">
          Clientes y empresas que confían en Transvolando
        </h2>
        <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] md:text-[16px] leading-[26px] mt-[10px]">
          Empresas industriales, de distribución y de gran consumo que mueven su mercancía con nosotros. Debajo, tres casos reales contados por quien los vivió.
        </p>
      </div>

      {/* 2. CUADRÍCULA ESTÁTICA DE LOGOS AUTORIZADOS (SIN CARRUSEL AUTOMÁTICO) */}
      <div className="py-[16px] my-[16px]">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-[24px] md:gap-[32px] items-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              id={`grid-logo-${index}`}
              className="flex items-center justify-center w-full h-[80px] md:h-[90px] p-[8px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-auto h-auto max-w-[130px] max-h-[65px] md:max-w-[150px] md:max-h-[75px] object-contain select-none opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3. TRES CASOS REALES: DESKTOP */}
      <div className="hidden md:grid mt-[56px] md:mt-[72px] grid-cols-3 gap-[36px] lg:gap-[48px]">
        {realCases.map((cs, idx) => (
          <article
            key={cs.id}
            className={`flex flex-col justify-between ${
              idx < realCases.length - 1
                ? 'border-r border-[#E2E8F0] pr-[36px] lg:pr-[48px]'
                : ''
            }`}
          >
            <div>
              <div className="w-[32px] h-[3px] bg-[#DC901B] mb-[18px] rounded-full" />

              <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[19px] sm:text-[20px] leading-[27px] tracking-[-0.3px] mb-[16px]">
                {cs.title}
              </h3>

              <p className="font-['Inter',sans-serif] text-[14px] sm:text-[15px] text-[#7C7D7A] leading-[25px] mb-[16px]">
                {cs.firstParagraph}
              </p>

              <p className="font-['Inter',sans-serif] text-[14px] sm:text-[15px] text-[#1F2D3D] leading-[25px]">
                {cs.result}
              </p>
            </div>

            <div className="pt-[22px] mt-[24px]">
              <a
                href={cs.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[14px] font-semibold text-[#DC901B] hover:brightness-90 underline decoration-[#DC901B]/40 hover:decoration-[#DC901B] underline-offset-4 transition-colors cursor-pointer font-['Inter',sans-serif]"
              >
                {cs.reviewText}
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* MOBILE CONTENT */}
      <div className="md:hidden mt-[36px] flex flex-col gap-[20px]">
        {realCases.map((cs) => {
          return (
            <article
              key={`mobile-${cs.id}`}
              className="bg-white rounded-[16px] border border-[#E2E8F0] p-[22px] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-[28px] h-[3px] bg-[#DC901B] mb-[14px] rounded-full" />
                <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] leading-[24px] mb-[10px]">
                  {cs.title}
                </h3>

                <p className="font-['Inter',sans-serif] text-[14px] text-[#7C7D7A] leading-[22px]">
                  {cs.id === 'caso-1' && 'Transporte industrial de bobinas en rutas estables sin interrumpir la producción.'}
                  {cs.id === 'caso-2' && 'Transporte especial en góndola a medida con plazos ajustados y entrega sin incidentes.'}
                  {cs.id === 'caso-3' && 'Consolidación de piezas industriales en grupaje multidestino con gestor único dedicado.'}
                </p>
              </div>

              <div className="pt-[16px] mt-[16px] border-t border-[#E2E8F0]">
                <a
                  href={cs.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-semibold text-[#DC901B] hover:brightness-90 underline decoration-[#DC901B]/40 underline-offset-4 flex items-center justify-between font-['Inter',sans-serif]"
                >
                  <span>{cs.reviewText}</span>
                  <span className="text-[14px]">↗</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* 4. CTA FINAL */}
      <div className="mt-[52px] md:mt-[68px] text-center">
        <a
          href="/casos/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate?.('casos');
          }}
          className="inline-flex items-center justify-center min-h-[48px] px-[28px] py-[12px] rounded-[10px] bg-[#1F2D3D] text-white hover:bg-[#DC901B] hover:text-[#1F2D3D] text-[14px] font-bold transition-colors duration-200 cursor-pointer shadow-sm font-['Inter',sans-serif]"
        >
          Ver todos los casos de éxito
        </a>
      </div>
    </section>
  );
}
