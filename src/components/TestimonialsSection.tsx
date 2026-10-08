interface TestimonialItem {
  id: string;
  name: string;
  quote: string;
  photo: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 'ines-pombo',
    name: 'Inés Pombo',
    quote:
      'Ha sido una experiencia fantástica, rápido y muy eficiente el servicio con poco margen de tiempo. Keren realizó una gestión perfecta para cubrir nuestra necesidad y en tiempo récord.',
    photo: '/testimonials/Ines-Pombo-Cliente-Transvolando.webp',
  },
  {
    id: 'miguel-laverde',
    name: 'Miguel Laverde',
    quote: 'Muchas gracias por los servicios prestados! Excelente empresa.',
    photo: '/testimonials/Miguel-Laverde-Resena-2.webp',
  },
  {
    id: 'jone-barroso',
    name: 'Jone Barroso',
    quote:
      'Necesitábamos una empresa para mover una mercancía pesada de Sevilla a Bilbao en 2 días, y la verdad que todo fueron facilidades. Son muy profesionales y muy buen servicio. Totalmente recomendable!!',
    photo: '/testimonials/Jone-Barroso-Resena-3.webp',
  },
  {
    id: 'rocio-rubio',
    name: 'Rocío Rubio',
    quote:
      'Muy contenta con el servicio ofrecido, llevamos varios años trabajando juntos y sin problema. Empresa seria, servicio seguro, rápido y cómodo. Recomiendo 100x100.',
    photo: '/testimonials/Rocio-Rubio-Resena-4.webp',
  },
  {
    id: 'david-cerrato',
    name: 'David Cerrato',
    quote: 'Buen servicio, recogida y entrega según lo acordado.',
    photo: '/testimonials/David-Cerrato-Resena-5.webp',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="bg-white border-y border-[#E2E8F0] py-[64px] md:py-[88px]"
    >
      <div className="max-w-[1160px] mx-auto px-[24px] sm:px-[32px] md:px-[48px]">
        {/* Cabecera */}
        <div className="max-w-[820px] mb-[36px] md:mb-[48px]">
          <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] md:text-[36px] tracking-[-0.6px] leading-[36px] md:leading-[44px]">
            Lo que dicen las empresas que trabajan con nosotros
          </h2>
          <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] md:text-[16px] leading-[26px] mt-[10px]">
            Opiniones de clientes que confían sus envíos y rutas a nuestro equipo.
          </p>
        </div>

        {/* Cuadrícula limpia y estática de testimonios reales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[18px] p-[24px] flex flex-col justify-between hover:border-[#DC901B] transition-colors shadow-xs"
            >
              <div>
                {/* 5 estrellas */}
                <div className="flex gap-[3px] text-[#DC901B] mb-[12px]" aria-label="5 de 5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[14px]">★</span>
                  ))}
                </div>
                <p className="font-['Inter',sans-serif] text-[#1F2D3D] text-[14px] md:text-[15px] leading-[22px] italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-[12px] mt-[20px] pt-[16px] border-t border-[#E2E8F0]">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-[42px] h-[42px] rounded-full object-cover border border-[#E2E8F0]"
                  loading="lazy"
                />
                <span className="font-['Inter',sans-serif] font-bold text-[#1F2D3D] text-[14px]">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
