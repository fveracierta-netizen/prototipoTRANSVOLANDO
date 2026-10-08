import { useState } from 'react';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  idPrefix?: string;
}

export default function FAQAccordion({
  items,
  title = 'Preguntas frecuentes',
  subtitle,
  idPrefix = 'faq',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-[48px] md:py-[72px]" aria-labelledby={`${idPrefix}-heading`}>
      <div className="max-w-[760px] mx-auto">
        {title && (
          <div className="text-center mb-[36px] md:mb-[48px]">
            <h2
              id={`${idPrefix}-heading`}
              className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#221e19] text-[24px] md:text-[28px] tracking-[-0.42px] leading-[32px] md:leading-[35.84px]"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-[10px] font-['Plus_Jakarta_Sans',sans-serif] text-[15px] md:text-[16px] text-[#615a4e] leading-[26px]">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col divide-y divide-[#ebe4d6] border-t border-b border-[#ebe4d6]">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const headingId = `${idPrefix}-q-${idx}`;
            const panelId = `${idPrefix}-panel-${idx}`;

            return (
              <div key={idx} className="group">
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between py-[20px] md:py-[24px] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dd7a2a] focus-visible:ring-offset-2 rounded-[4px]"
                  >
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[#221e19] text-[16px] md:text-[17px] tracking-[-0.24px] leading-[24px] pr-[16px] group-hover:text-[#dd7a2a] transition-colors">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 size-[28px] rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#dd7a2a] text-[20px] leading-none transition-transform duration-200 bg-[#fbf6ec]"
                      style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  hidden={!isOpen}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'pb-[20px] md:pb-[24px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#615a4e] text-[15px] md:text-[16px] leading-[26px] md:leading-[28px]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
