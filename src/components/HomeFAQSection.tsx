import { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface HomeFAQItem {
  id?: string;
  question: string;
  answer: string;
}

const defaultFaqs: FAQ[] = [
  {
    id: 'faq-1',
    question: '¿Trabajáis con empresas que no tienen un departamento de logística propio?',
    answer:
      'Sí, es el perfil de cliente más habitual. Tu gestor único asume el papel que haría un responsable de logística interno: elige el servicio, coordina el transporte y resuelve las incidencias, sin que tengas que gestionar varios proveedores.',
  },
  {
    id: 'faq-2',
    question: '¿Necesito un volumen mínimo de envíos mensuales para trabajar con Transvolando?',
    answer:
      'No. Gestionamos tanto envíos puntuales como cuentas con volumen recurrente, y el modelo de gestor único funciona igual desde el primer envío. El único mínimo es de 50 kg por envío: trabajamos solo con empresas, no con paquetería ni mudanzas.',
  },
  {
    id: 'faq-3',
    question: '¿Cómo empiezo a trabajar con Transvolando si nunca he contratado transporte B2B?',
    answer:
      'Cuéntanos qué necesitas mover (tipo de mercancía, origen y destino, frecuencia aproximada) por teléfono directo (674346912) o formulario web. Tu gestor asignado te recomienda el servicio adecuado y te acompaña en el primer envío.',
  },
  {
    id: 'faq-4',
    question: '¿Ofrecéis condiciones especiales para empresas con envíos recurrentes?',
    answer:
      'Sí. Para cuentas con volumen mensual estable, trabajamos con acuerdo marco: presupuesto personalizado con descuento por volumen, capacidad reservada en los picos, gestor de cuenta dedicado e informe mensual de la operativa.',
  },
  {
    id: 'faq-5',
    question:
      '¿Qué diferencia a Transvolando de una plataforma digital de transporte o de un operador logístico tradicional?',
    answer:
      'Frente a las plataformas, tienes un gestor único como interlocutor humano, no un algoritmo. Frente a los grandes operadores tradicionales, mantienes trato directo y respuesta rápida sin perder la cobertura de una red de casi 3.000 transportistas en España y Europa.',
  },
];

interface HomeFAQSectionProps {
  items?: HomeFAQItem[];
  title?: string;
}

export default function HomeFAQSection({
  items,
  title = 'Preguntas frecuentes sobre transporte B2B',
}: HomeFAQSectionProps = {}) {
  const faqsToRender: FAQ[] = items
    ? items.map((item, idx) => ({
        id: item.id || `faq-custom-${idx + 1}`,
        question: item.question,
        answer: item.answer,
      }))
    : defaultFaqs;

  // Solo una pregunta abierta a la vez. Por defecto podemos dejar la primera abierta o todas cerradas.
  // Dejamos la primera abierta (índice 0) para mostrar el diseño y comportamiento de inmediato.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="bg-white py-[40px] sm:py-[56px] md:py-[104px]"
      aria-labelledby="faq-b2b-heading"
    >
      <div className="max-w-[880px] mx-auto px-[24px] sm:px-[32px] md:px-[40px]">
        {/* Título grande y alineado a la izquierda */}
        <h2
          id="faq-b2b-heading"
          className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] sm:text-[34px] md:text-[40px] tracking-[-0.6px] leading-[36px] sm:leading-[42px] md:leading-[48px] text-left mb-[36px] md:mb-[48px]"
        >
          {title}
        </h2>

        {/* Acordeón minimalista */}
        <div className="border-t border-[#E2E8F0]">
          {faqsToRender.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="border-b border-[#E2E8F0] transition-colors duration-200"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left py-[22px] md:py-[26px] flex items-center justify-between gap-[16px] cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC901B] focus-visible:ring-offset-2 rounded-[4px]"
                  >
                    <span className="flex items-center gap-[12px] flex-1">
                      {/* Pequeño detalle naranja que identifica únicamente la pregunta activa */}
                      <span
                        className={`w-[3px] h-[18px] bg-[#DC901B] rounded-full shrink-0 transition-all duration-300 motion-reduce:transition-none ${
                          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`font-['Inter',sans-serif] font-semibold text-[17px] md:text-[18px] leading-[26px] text-[#1F2D3D] transition-colors duration-200 ${
                          isOpen ? 'text-[#1F2D3D]' : 'group-hover:text-[#DC901B]'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </span>

                    {/* Icono + minimalista alineado a la derecha que se transforma suavemente en − (250–300 ms) */}
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-[24px] h-[24px] flex items-center justify-center text-[#1F2D3D]"
                    >
                      <svg
                        className={`w-[18px] h-[18px] transition-colors duration-300 ${
                          isOpen ? 'text-[#DC901B]' : 'text-[#1F2D3D]'
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Trazo horizontal (presente en + y −) */}
                        <line x1="5" y1="12" x2="19" y2="12" />
                        {/* Trazo vertical (se reduce a escala 0 en 250-300 ms para convertirse en −) */}
                        <line
                          x1="12"
                          y1="5"
                          x2="12"
                          y2="19"
                          className={`origin-center transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                            isOpen ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'
                          }`}
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* Respuesta expandible animada (250–300 ms) con grid y opacidad */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] max-w-[760px] pb-[22px] md:pb-[28px] pl-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
