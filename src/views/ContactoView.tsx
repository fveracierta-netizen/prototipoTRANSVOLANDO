import { useState, useEffect } from 'react';
import { NavigationPage } from '../types';
import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '../utils/navigation';
import HomeFAQSection from '../components/HomeFAQSection';
import {
  Phone,
  CheckCircle2,
  MapPin,
  Clock,
  Building2,
  Send
} from 'lucide-react';

interface ContactoViewProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string) => void;
}

export default function ContactoView({ onNavigate }: ContactoViewProps) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 1024);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  const MobileTitle = isDesktop ? 'div' : 'h1';
  const DesktopTitle = isDesktop ? 'h1' : 'div';

  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    mensaje: '',
    acceptedPrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.nombre.trim()) {
      setError('Por favor indica tu nombre.');
      return;
    }
    if (!formData.contacto.trim()) {
      setError('Indica tu correo o teléfono de contacto.');
      return;
    }
    if (!formData.mensaje.trim()) {
      setError('Indica qué necesitas mover.');
      return;
    }
    if (!formData.acceptedPrivacy) {
      setError('Debes aceptar la política de privacidad para enviar el mensaje.');
      return;
    }

    setIsSubmitting(true);
    // Demostración de workflow sin enviar leads reales de prueba
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="w-full bg-[#F8FAFC] min-h-[calc(100vh-80px)]">
      {/* ========================================================================= */}
      {/* MOBILE VERSION: ESTRUCTURA WIREFRAME 05 (Teléfono grande y primero,       */}
      {/* horario 8-19h, plazo <4h, formulario con privacidad y botón naranja/navy) */}
      {/* ========================================================================= */}
      <div className="lg:hidden bg-white min-h-[calc(100vh-140px)] pb-[40px]">
        <div className="max-w-[480px] mx-auto px-[20px] py-[28px]">
          {/* 1. TÍTULO PRINCIPAL */}
          <MobileTitle className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[34px] sm:text-[38px] tracking-[-0.6px] leading-tight">
            Hablamos
          </MobileTitle>
          <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] mt-[6px]">
            Atención logística directa con nuestro equipo de tráfico.
          </p>

          {/* 2. TELÉFONO ESCRITO GRANDE Y PRIMERO (SIN WHATSAPP) */}
          <div className="mt-[20px] p-[20px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px]">
            <span className="block text-[12px] font-bold text-[#7C7D7A] uppercase tracking-wider mb-[4px] font-['Inter',sans-serif]">
              Llamada directa sin esperas
            </span>
            <a
              id="mobile-contact-call-large"
              href={COMPANY_PHONE_TEL}
              className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] hover:text-[#DC901B] text-[32px] tracking-tight leading-none flex items-center gap-[10px] my-[10px]"
              aria-label="Llamar a Transvolando al 674346912"
            >
              <Phone className="w-[28px] h-[28px] text-[#DC901B] shrink-0" />
              <span>{COMPANY_PHONE}</span>
            </a>

            <div className="flex items-center gap-[6px] text-[13px] text-[#7C7D7A] font-['Inter',sans-serif] mt-[8px]">
              <Clock className="w-[15px] h-[15px] text-[#DC901B] shrink-0" />
              <span>Horario: Lunes a viernes de 8:00 a 19:00 h</span>
            </div>

            <div className="mt-[12px]">
              <a
                id="mobile-contact-call-btn"
                href={COMPANY_PHONE_TEL}
                className="w-full min-h-[50px] px-[20px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[16px] flex items-center justify-center gap-[8px] transition-colors shadow-sm"
              >
                <Phone className="w-[18px] h-[18px]" />
                <span>Llamar ahora</span>
              </a>
            </div>
          </div>

          {/* 3. PLAZO ÚNICO */}
          <div className="mt-[16px] flex items-start gap-[10px] bg-[#F8FAFC] border-l-[3px] border-[#DC901B] border-y border-r border-[#E2E8F0] rounded-r-[10px] p-[14px] text-[13px] text-[#1F2D3D] font-['Inter',sans-serif]">
            <Clock className="w-[16px] h-[16px] text-[#DC901B] shrink-0 mt-[2px]" />
            <span>
              <strong>Propuesta por correo y contacto en menos de 4 horas</strong> en horario laboral (Lunes a viernes de 8:00 a 19:00 h).
            </span>
          </div>

          {/* 4. FORMULARIO DE CONTACTO */}
          <div className="mt-[32px]">
            <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[22px] tracking-[-0.3px] mb-[12px]">
              O escríbenos
            </h2>

            {isSuccess ? (
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-[24px] text-center my-[16px]">
                <div className="size-[48px] rounded-full bg-[#DC901B]/15 border border-[#DC901B]/40 flex items-center justify-center text-[#DC901B] mx-auto mb-[12px]">
                  <CheckCircle2 className="w-[28px] h-[28px]" />
                </div>
                <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[20px]">
                  Vista previa del mensaje
                </h3>
                  <p className="text-[14px] text-[#1F2D3D] mt-[12px]">Modo prototipo: este mensaje no se ha enviado. Para contactar con el equipo, llama al 674 34 69 12.</p>
                <p className="font-['Inter',sans-serif] text-[#1F2D3D] text-[14px] mt-[6px]">
                  Te enviamos por correo una propuesta con tres opciones (Básico, Estándar y Premium) y te contactamos en menos de 4 horas.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ nombre: '', contacto: '', mensaje: '', acceptedPrivacy: false });
                  }}
                  className="mt-[16px] min-h-[44px] px-[20px] bg-[#1F2D3D] text-white text-[14px] font-semibold rounded-[8px] cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[14px]">
                {error && (
                  <div className="p-[10px] bg-red-50 border border-red-200 text-red-700 text-[13px] rounded-[8px]">
                    {error}
                  </div>
                )}

                {/* Campo 1: Nombre */}
                <div>
                  <label htmlFor="mobile-input-nombre" className="block text-[13px] font-semibold text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]">
                    Nombre *
                  </label>
                  <input
                    id="mobile-input-nombre"
                    type="text"
                    autoComplete="name"
                    placeholder="Tu nombre o empresa"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full min-h-[48px] px-[14px] bg-white border border-[#CBD5E1] rounded-[8px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:border-[#DC901B] focus:ring-1 focus:ring-[#DC901B]"
                  />
                </div>

                {/* Campo 2: Correo o teléfono */}
                <div>
                  <label htmlFor="mobile-input-contacto" className="block text-[13px] font-semibold text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]">
                    Correo o teléfono *
                  </label>
                  <input
                    id="mobile-input-contacto"
                    type="text"
                    autoComplete="email"
                    placeholder="Ej. nombre@empresa.com o 600 000 000"
                    value={formData.contacto}
                    onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                    className="w-full min-h-[48px] px-[14px] bg-white border border-[#CBD5E1] rounded-[8px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:border-[#DC901B] focus:ring-1 focus:ring-[#DC901B]"
                  />
                </div>

                {/* Campo 3: Qué necesitas mover */}
                <div>
                  <label htmlFor="mobile-input-mensaje" className="block text-[13px] font-semibold text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]">
                    Qué necesitas mover *
                  </label>
                  <textarea
                    id="mobile-input-mensaje"
                    rows={3}
                    placeholder="Tipo de carga, peso estimado, origen y destino..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full p-[14px] bg-white border border-[#CBD5E1] rounded-[8px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:border-[#DC901B] focus:ring-1 focus:ring-[#DC901B] resize-y"
                  />
                </div>

                {/* Casilla de privacidad */}
                <div className="pt-[2px]">
                  <label className="flex items-start gap-[8px] cursor-pointer text-[13px] text-[#1F2D3D] leading-[19px] font-['Inter',sans-serif]">
                    <input
                      type="checkbox"
                      checked={formData.acceptedPrivacy}
                      onChange={(e) => setFormData({ ...formData, acceptedPrivacy: e.target.checked })}
                      className="mt-[3px] rounded border-[#CBD5E1] text-[#DC901B] focus:ring-[#DC901B]"
                    />
                    <span>
                      Acepto la{' '}
                      <a
                        href="/politica-de-privacidad/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold hover:text-[#DC901B]"
                      >
                        política de privacidad
                      </a>{' '}
                      para responder a mi consulta.
                    </span>
                  </label>
                </div>

                {/* Botón Enviar mensaje principal naranja/navy */}
                <div className="pt-[6px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="mobile-submit-contact-btn"
                    className="w-full min-h-[50px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[16px] rounded-[10px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer disabled:opacity-60 shadow-sm"
                  >
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</span>
                    {!isSubmitting && <Send className="w-[16px] h-[16px]" />}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* 5. DATOS OPERATIVOS */}
          <div className="mt-[36px] pt-[24px] border-t border-[#E2E8F0] space-y-[16px] font-['Inter',sans-serif]">
            <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[16px] uppercase tracking-wider">
              Datos operativos
            </h3>

            {/* Oficina / Base */}
            <div className="flex items-start gap-[10px] text-[14px] text-[#7C7D7A]">
              <MapPin className="w-[18px] h-[18px] text-[#DC901B] shrink-0 mt-[2px]" />
              <div>
                <strong className="text-[#1F2D3D] block">Base logística y oficinas:</strong>
                <span>Calle del Empleo, 28 - Nave 10, Pol. Ind. San Marcos, 28906 Getafe (Madrid)</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-[10px] text-[14px] text-[#7C7D7A]">
              <Building2 className="w-[18px] h-[18px] text-[#DC901B] shrink-0 mt-[2px]" />
              <div>
                <strong className="text-[#1F2D3D] block">Correo de tráfico:</strong>
                <a href="mailto:info@transvolando.com" className="text-[#1F2D3D] hover:text-[#DC901B] underline">
                  info@transvolando.com
                </a>
              </div>
            </div>

            {/* Horario */}
            <div className="flex items-start gap-[10px] text-[14px] text-[#7C7D7A]">
              <Clock className="w-[18px] h-[18px] text-[#DC901B] shrink-0 mt-[2px]" />
              <div>
                <strong className="text-[#1F2D3D] block">Horario de atención:</strong>
                <span>Lunes a viernes de 8:00 a 19:00 h ininterrumpido</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP VERSION: Armonizada con la misma filosofía simple y potente       */}
      {/* ========================================================================= */}
      <div className="hidden lg:block py-[60px] max-w-[1160px] mx-auto px-[48px]">
        <div className="grid grid-cols-12 gap-[48px] items-start">
          {/* COLUMNA IZQUIERDA: Hablamos, Teléfono Grande y Primero, Horario y Oficina */}
          <div className="col-span-5 flex flex-col gap-[28px]">
            <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-[36px] shadow-sm">
              <DesktopTitle className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[40px] tracking-[-1px] leading-tight">
                Hablamos
              </DesktopTitle>

              {/* Teléfono escrito grande y primero */}
              <div className="mt-[24px]">
                <span className="block text-[12px] font-bold text-[#7C7D7A] uppercase tracking-wider font-['Inter',sans-serif]">
                  Teléfono directo
                </span>
                <a
                  href={COMPANY_PHONE_TEL}
                  className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[36px] tracking-tight leading-none hover:text-[#DC901B] transition-colors flex items-center gap-[12px] mt-[8px]"
                  aria-label="Llamar a Transvolando al 674346912"
                >
                  <Phone className="w-[32px] h-[32px] text-[#DC901B] shrink-0" />
                  <span>{COMPANY_PHONE}</span>
                </a>
                <p className="text-[#7C7D7A] text-[15px] mt-[12px] flex items-center gap-[8px] font-['Inter',sans-serif]">
                  <Clock className="w-[16px] h-[16px] text-[#DC901B] shrink-0" />
                  <span>Lunes a viernes de 8:00 a 19:00 h</span>
                </p>
              </div>

              {/* Botón llamar */}
              <div className="mt-[28px]">
                <a
                  id="desktop-call-cta-btn"
                  href={COMPANY_PHONE_TEL}
                  className="w-full min-h-[52px] px-[24px] rounded-[12px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[16px] flex items-center justify-center gap-[10px] transition-colors shadow-sm cursor-pointer"
                >
                  <Phone className="w-[18px] h-[18px]" />
                  <span>Llamar ahora</span>
                </a>
              </div>

              {/* Plazo único */}
              <div className="mt-[24px] border-l-4 border-[#DC901B] bg-[#F8FAFC] px-[16px] py-[14px] rounded-r-[8px]">
                <p className="text-[14px] text-[#1F2D3D] font-medium leading-snug font-['Inter',sans-serif]">
                  Propuesta por correo y contacto en menos de 4 horas.
                </p>
              </div>
            </div>

            {/* Sede y Datos */}
            <div className="bg-white border border-[#E2E8F0] rounded-[20px] p-[24px] text-[13px] text-[#7C7D7A] space-y-[8px] font-['Inter',sans-serif] shadow-xs">
              <div className="flex items-start gap-[8px]">
                <MapPin className="w-[16px] h-[16px] text-[#DC901B] shrink-0 mt-[2px]" />
                <div>
                  <strong className="text-[#1F2D3D] block">Calle del Empleo, 28 - Nave 10</strong>
                  <span>Polígono Industrial San Marcos, 28906 Getafe (Madrid)</span>
                </div>
              </div>
              <div className="pt-[8px] border-t border-[#E2E8F0] text-[12px] text-[#7C7D7A]">
                Transvolando S.L. · CIF: B-87450003 · Registro Mercantil de Madrid
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: O escríbenos con formulario, casilla de privacidad y botón naranja/navy */}
          <div className="col-span-7">
            <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-[40px] shadow-sm">
              <div className="mb-[24px]">
                <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[28px] tracking-[-0.6px]">
                  O escríbenos
                </h2>
                <p className="text-[#7C7D7A] text-[15px] mt-[4px] font-['Inter',sans-serif]">
                  Indícanos tu contacto y qué mercancía necesitas transportar. Te enviamos propuesta en menos de 4 horas.
                </p>
              </div>

              {isSuccess ? (
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-[32px] text-center my-[20px]">
                  <div className="size-[56px] rounded-full bg-[#DC901B]/15 border border-[#DC901B]/40 flex items-center justify-center text-[#DC901B] mx-auto mb-[16px]">
                    <CheckCircle2 className="w-[32px] h-[32px]" />
                  </div>
                  <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[22px]">
                    Vista previa del mensaje
                  </h3>
                  <p className="text-[14px] text-[#1F2D3D] mt-[12px]">Modo prototipo: este mensaje no se ha enviado. Para contactar con el equipo, llama al 674 34 69 12.</p>
                  <p className="text-[#1F2D3D] text-[15px] mt-[8px] max-w-[420px] mx-auto font-['Inter',sans-serif]">
                    Te enviamos por correo una propuesta con tres opciones (Básico, Estándar y Premium) y te contactamos en menos de 4 horas.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ nombre: '', contacto: '', mensaje: '', acceptedPrivacy: false });
                    }}
                    className="mt-[24px] min-h-[44px] px-[20px] bg-[#1F2D3D] text-white text-[14px] font-semibold rounded-[10px] cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[16px]">
                  {error && (
                    <div className="p-[12px] bg-red-50 border border-red-200 text-red-700 text-[14px] rounded-[8px]">
                      {error}
                    </div>
                  )}

                  <div>
                    <label htmlFor="desktop-input-nombre" className="block text-[13px] font-semibold text-[#1F2D3D] mb-[6px] font-['Inter',sans-serif]">
                      Nombre *
                    </label>
                    <input
                      id="desktop-input-nombre"
                      type="text"
                      autoComplete="name"
                      placeholder="Tu nombre o empresa"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full min-h-[48px] px-[16px] bg-white border border-[#CBD5E1] rounded-[8px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:border-[#DC901B] focus:ring-1 focus:ring-[#DC901B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="desktop-input-contacto" className="block text-[13px] font-semibold text-[#1F2D3D] mb-[6px] font-['Inter',sans-serif]">
                      Correo o teléfono *
                    </label>
                    <input
                      id="desktop-input-contacto"
                      type="text"
                      autoComplete="email"
                      placeholder="Ej. nombre@empresa.com o 600 000 000"
                      value={formData.contacto}
                      onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                      className="w-full min-h-[48px] px-[16px] bg-white border border-[#CBD5E1] rounded-[8px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:border-[#DC901B] focus:ring-1 focus:ring-[#DC901B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="desktop-input-mensaje" className="block text-[13px] font-semibold text-[#1F2D3D] mb-[6px] font-['Inter',sans-serif]">
                      Qué necesitas mover *
                    </label>
                    <textarea
                      id="desktop-input-mensaje"
                      rows={4}
                      placeholder="Describe la mercancía, peso estimado, origen y destino..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full p-[16px] bg-white border border-[#CBD5E1] rounded-[8px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:border-[#DC901B] focus:ring-1 focus:ring-[#DC901B] resize-y"
                    />
                  </div>

                  {/* Casilla de privacidad */}
                  <div className="pt-[2px]">
                    <label className="flex items-start gap-[8px] cursor-pointer text-[13px] text-[#1F2D3D] leading-[19px] font-['Inter',sans-serif]">
                      <input
                        type="checkbox"
                        checked={formData.acceptedPrivacy}
                        onChange={(e) => setFormData({ ...formData, acceptedPrivacy: e.target.checked })}
                        className="mt-[3px] rounded border-[#CBD5E1] text-[#DC901B] focus:ring-[#DC901B]"
                      />
                      <span>
                        He leído y acepto la{' '}
                        <a
                          href="/politica-de-privacidad/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-semibold hover:text-[#DC901B]"
                        >
                          política de privacidad
                        </a>{' '}
                        para el tratamiento de mis datos de consulta.
                      </span>
                    </label>
                  </div>

                  {/* Botón Enviar mensaje principal naranja/navy */}
                  <div className="pt-[6px]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="desktop-submit-contact-btn"
                      className="w-full min-h-[50px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[16px] rounded-[10px] flex items-center justify-center gap-[8px] transition-colors cursor-pointer disabled:opacity-60 shadow-sm"
                    >
                      <span>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</span>
                      {!isSubmitting && <Send className="w-[16px] h-[16px]" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PREGUNTAS FRECUENTES SOBRE TRANSPORTE B2B */}
      <HomeFAQSection />
    </div>
  );
}
