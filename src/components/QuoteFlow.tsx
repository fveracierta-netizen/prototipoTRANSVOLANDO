import { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '../utils/navigation';

interface QuoteFlowProps {
  initialServiceSlug?: string;
  initialOrigin?: string;
  initialDest?: string;
  initialStep?: 1 | 2 | 3;
  onStepChange?: (step: 1 | 2 | 3) => void;
  onClose?: () => void;
}

// Mapa de prefijos de código postal en España a provincia/ciudad
const SPAIN_PROVINCES: Record<string, string> = {
  '01': 'Álava / Vitoria',
  '02': 'Albacete',
  '03': 'Alicante',
  '04': 'Almería',
  '05': 'Ávila',
  '06': 'Badajoz',
  '07': 'Baleares / Mallorca',
  '08': 'Barcelona',
  '09': 'Burgos',
  '10': 'Cáceres',
  '11': 'Cádiz',
  '12': 'Castellón',
  '13': 'Ciudad Real',
  '14': 'Córdoba',
  '15': 'A Coruña',
  '16': 'Cuenca',
  '17': 'Girona',
  '18': 'Granada',
  '19': 'Guadalajara',
  '20': 'Gipuzkoa / San Sebastián',
  '21': 'Huelva',
  '22': 'Huesca',
  '23': 'Jaén',
  '24': 'León',
  '25': 'Lleida',
  '26': 'La Rioja / Logroño',
  '27': 'Lugo',
  '28': 'Madrid',
  '29': 'Málaga',
  '30': 'Murcia',
  '31': 'Navarra / Pamplona',
  '32': 'Ourense',
  '33': 'Asturias / Oviedo',
  '34': 'Palencia',
  '35': 'Las Palmas',
  '36': 'Pontevedra / Vigo',
  '37': 'Salamanca',
  '38': 'Santa Cruz de Tenerife',
  '39': 'Cantabria / Santander',
  '40': 'Segovia',
  '41': 'Sevilla',
  '42': 'Soria',
  '43': 'Tarragona',
  '44': 'Teruel',
  '45': 'Toledo',
  '46': 'Valencia',
  '47': 'Valladolid',
  '48': 'Bizkaia / Bilbao',
  '49': 'Zamora',
  '50': 'Zaragoza',
  '51': 'Ceuta',
  '52': 'Melilla',
};

const WEIGHT_RANGES = [
  'Hasta 500 kg',
  '500 a 1.500 kg',
  '1.500 a 3.500 kg',
  '3.500 a 10.000 kg',
  '10.000 a 24.000 kg (Carga completa)',
  'Más de 24.000 kg (Transporte especial / Gran tonelaje)',
];

const PALLET_RANGES = [
  '1 a 3 bultos / palets',
  '4 a 8 bultos / palets',
  '9 a 16 bultos / palets',
  '17 a 33 europalets (Camión completo)',
  'Maquinaria / Carga indivisible',
];

export default function QuoteFlow({
  initialServiceSlug,
  initialOrigin,
  initialDest,
  initialStep = 1,
  onStepChange,
  onClose,
}: QuoteFlowProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(initialStep || 1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialStep) {
      setCurrentStep(initialStep);
    }
  }, [initialStep]);

  const [formData, setFormData] = useState<QuoteFormData>({
    originCity: initialOrigin || '',
    originPostal: '',
    originCountry: 'España',
    destCity: initialDest || '',
    destPostal: '',
    destCountry: 'España',
    serviceType: initialServiceSlug || 'transporte-de-maquinaria',
    cargoDescription: '',
    weightKg: '',
    palletsCount: '',
    dimensions: '',
    readyDate: '',
    urgency: 'estandar',
    contactName: '',
    companyName: '',
    email: '',
    phone: '',
    notes: '',
    acceptedPrivacy: false,
  });

  // Keep formData in sync when initialOrigin, initialDest, or initialServiceSlug changes
  useEffect(() => {
    if (initialOrigin !== undefined && initialOrigin !== '') {
      setFormData((prev) => ({ ...prev, originCity: initialOrigin }));
    }
    if (initialDest !== undefined && initialDest !== '') {
      setFormData((prev) => ({ ...prev, destCity: initialDest }));
    }
    if (initialServiceSlug !== undefined && initialServiceSlug !== '') {
      setFormData((prev) => ({ ...prev, serviceType: initialServiceSlug }));
    }
  }, [initialOrigin, initialDest, initialServiceSlug]);

  const updateField = (field: keyof QuoteFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Autocompletar ciudad si se introduce CP de 5 dígitos
  const handlePostalOrCityChange = (
    field: 'originCity' | 'destCity',
    postalField: 'originPostal' | 'destPostal',
    val: string
  ) => {
    const trimmed = val.trim();
    // Detectar si el usuario introdujo un CP de 5 dígitos (ej. 28001 o 08001)
    if (/^\d{5}$/.test(trimmed)) {
      const prefix = trimmed.slice(0, 2);
      const province = SPAIN_PROVINCES[prefix];
      if (province) {
        setFormData((prev) => ({
          ...prev,
          [field]: `${trimmed} (${province})`,
          [postalField]: trimmed,
        }));
        if (errors[field]) {
          setErrors((prev) => {
            const next = { ...prev };
            delete next[field];
            return next;
          });
        }
        return;
      }
    }
    updateField(field, val);
  };

  /**
   * Siete campos obligatorios EXACTOS:
   * 1. origen (originCity)
   * 2. destino (destCity)
   * 3. servicio (serviceType)
   * 4. descripción (cargoDescription)
   * 5. nombre (contactName)
   * 6. empresa (companyName)
   * 7. correo (email)
   * + casilla de privacidad para procesamiento legal.
   * Teléfono opcional con nota. Peso, bultos y fecha opcionales.
   */
  const validateStep = (step: 1 | 2 | 3): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.originCity.trim()) errs.originCity = 'Indica el origen (ciudad o código postal).';
      if (!formData.destCity.trim()) errs.destCity = 'Indica el destino (ciudad o código postal).';
    } else if (step === 2) {
      if (!formData.serviceType) errs.serviceType = 'Selecciona la modalidad de servicio.';
      if (!formData.cargoDescription.trim()) {
        errs.cargoDescription = 'Describe brevemente la mercancía que necesitas transportar.';
      }
    } else if (step === 3) {
      if (!formData.contactName.trim()) errs.contactName = 'Introduce tu nombre.';
      if (!formData.companyName.trim()) errs.companyName = 'Introduce el nombre de tu empresa.';
      if (!formData.email.trim()) {
        errs.email = 'Introduce un correo de contacto.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errs.email = 'Introduce un formato de correo válido.';
      }
      if (!formData.acceptedPrivacy) {
        errs.acceptedPrivacy = 'Debes aceptar la política de privacidad para procesar el presupuesto.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      const next = currentStep < 3 ? ((currentStep + 1) as 1 | 2 | 3) : 3;
      setCurrentStep(next);
      onStepChange?.(next);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    const prev = currentStep > 1 ? ((currentStep - 1) as 1 | 2 | 3) : 1;
    setCurrentStep(prev);
    onStepChange?.(prev);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    // Demostración segura sin enviar leads reales de prueba
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 500);
  };

  // SUCCESS STATE (PANTALLA FINAL: Resumen de pedido, propuesta con tres opciones en <4h, Llamar ahora, sin WhatsApp)
  if (isSubmitted) {
    const selectedServiceName =
      formData.serviceType === 'transporte-internacional'
        ? 'Transporte internacional (España y Europa)'
        : (servicesData.find((s) => s.slug === formData.serviceType)?.name || formData.serviceType);

    return (
      <div className="max-w-[680px] mx-auto bg-white border border-[#E2E8F0] rounded-[22px] p-[28px] sm:p-[40px] shadow-sm my-[24px]">
        <div className="text-center flex flex-col items-center">
          <div className="size-[64px] rounded-full bg-[#DC901B]/15 border border-[#DC901B]/40 flex items-center justify-center text-[#DC901B] mb-[20px]">
            <CheckCircle2 className="w-[36px] h-[36px]" />
          </div>

          <p className="text-[14px] text-[#1F2D3D] mb-[16px]">Modo prototipo: esta solicitud no se ha enviado. Para pedir un presupuesto real, llama al 674 34 69 12.</p>
          <span className="text-[12px] font-bold text-[#DC901B] tracking-wider uppercase mb-[6px] font-['Inter',sans-serif]">
            Vista previa de la solicitud
          </span>

          <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[26px] md:text-[32px] tracking-[-0.5px]">
            Resumen de tu presupuesto
          </h2>

          <p className="font-['Inter',sans-serif] text-[#1F2D3D] text-[15px] md:text-[16px] leading-[26px] mt-[12px] max-w-[560px]">
            Hola <span className="font-semibold">{formData.contactName}</span>: esta es la vista previa de tu solicitud para el trayecto de{' '}
            <span className="font-semibold">{formData.originCity}</span> a{' '}
            <span className="font-semibold">{formData.destCity}</span>.
          </p>

          {/* MENSAJE EXPRESO OBLIGATORIO DE RESPUESTA */}
          <div className="w-full bg-[#F8FAFC] border-l-4 border-[#DC901B] border-y border-r border-[#E2E8F0] rounded-r-[14px] p-[18px] mt-[20px] text-left">
            <p className="font-['Inter',sans-serif] text-[15px] text-[#1F2D3D] font-medium leading-[22px]">
              Te enviamos por correo una propuesta con tres opciones (Básico, Estándar y Premium) y te contactamos en menos de 4 horas.
            </p>
          </div>

          {/* RESUMEN DEL PEDIDO */}
          <div className="w-full mt-[24px] p-[20px] bg-white border border-[#E2E8F0] rounded-[14px] text-left text-[14px] font-['Inter',sans-serif]">
            <div className="text-[12px] font-bold text-[#7C7D7A] uppercase mb-[10px] tracking-wider">
              Resumen de pedido
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[8px] gap-x-[16px] text-[#1F2D3D]">
              <div>
                <span className="text-[#7C7D7A] font-medium">Servicio:</span>{' '}
                <span className="font-semibold">{selectedServiceName}</span>
              </div>
              <div>
                <span className="text-[#7C7D7A] font-medium">Empresa:</span>{' '}
                <span className="font-semibold">{formData.companyName}</span>
              </div>
              <div>
                <span className="text-[#7C7D7A] font-medium">Origen:</span>{' '}
                <span className="font-semibold">{formData.originCity}</span>
              </div>
              <div>
                <span className="text-[#7C7D7A] font-medium">Destino:</span>{' '}
                <span className="font-semibold">{formData.destCity}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#7C7D7A] font-medium">Descripción:</span>{' '}
                <span>{formData.cargoDescription}</span>
              </div>
              {formData.weightKg && (
                <div>
                  <span className="text-[#7C7D7A] font-medium">Peso estimado:</span>{' '}
                  <span>{formData.weightKg}</span>
                </div>
              )}
              {formData.palletsCount && (
                <div>
                  <span className="text-[#7C7D7A] font-medium">Bultos / palets:</span>{' '}
                  <span>{formData.palletsCount}</span>
                </div>
              )}
              <div>
                <span className="text-[#7C7D7A] font-medium">Correo:</span>{' '}
                <span className="font-semibold">{formData.email}</span>
              </div>
              {formData.phone && (
                <div>
                  <span className="text-[#7C7D7A] font-medium">Teléfono aclaratorio:</span>{' '}
                  <span>{formData.phone}</span>
                </div>
              )}
            </div>
          </div>

          {/* BOTÓN LLAMAR AHORA (SIN WHATSAPP) */}
          <div className="w-full mt-[28px] pt-[20px] border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-center gap-[12px]">
            <a
              id="quote-success-call-btn"
              href={COMPANY_PHONE_TEL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-[8px] min-h-[48px] px-[28px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-bold text-[15px] transition-colors shadow-sm cursor-pointer"
            >
              <Phone className="w-[17px] h-[17px]" />
              <span>Llamar ahora</span>
            </a>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="mt-[20px] text-[14px] text-[#7C7D7A] hover:text-[#1F2D3D] underline cursor-pointer"
            >
              Volver a la web
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full mx-auto px-[20px] sm:px-[32px] md:px-[48px] flex-1 flex flex-col justify-center ${
        currentStep === 1
          ? 'max-w-[1160px] py-[12px] sm:py-[40px] xl:py-[56px]'
          : 'max-w-[760px] py-[12px] sm:py-[40px]'
      }`}
    >
      <div
        className={`flex-1 flex flex-col ${
          currentStep === 1
            ? 'bg-transparent border-0 rounded-none p-0 shadow-none'
            : 'bg-white border border-[#E2E8F0] rounded-[20px] sm:rounded-[22px] p-[20px] sm:p-[36px] md:p-[44px] shadow-sm'
        }`}
      >
        {/* BARRA DE PROGRESO (PASOS 2 Y 3) */}
        {currentStep > 1 && (
          <div className="mb-[28px]">
            <div className="flex items-center justify-between text-[13px] font-semibold text-[#1F2D3D] mb-[8px] font-['Inter',sans-serif]">
              <span className="text-[#DC901B]">Paso {currentStep} de 3</span>
              <span className="text-[#7C7D7A]">
                {currentStep === 2 && 'Detalles de la mercancía'}
                {currentStep === 3 && 'Datos de contacto para la propuesta'}
              </span>
            </div>

            <div className="w-full bg-[#E2E8F0] h-[5px] rounded-full overflow-hidden">
              <div
                className="bg-[#DC901B] h-full transition-all duration-300 ease-out rounded-full"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP FORM */}
        <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col">
          {/* ============================================================= */}
          {/* PASO 1: RUTA Y UBICACIÓN                                      */}
          {/* ============================================================= */}
          {currentStep === 1 && (
            <>
              {/* MOBILE STEP 1 */}
              <div className="sm:hidden flex-1 flex flex-col justify-between">
                <div>
                  <h1 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[34px] tracking-[-0.6px] leading-[1.15]">
                    ¿De dónde a dónde?
                  </h1>
                  <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] leading-[21px] mt-[6px]">
                    La ruta, el tipo de carga o peso y la fecha o urgencia permiten preparar tu propuesta con tres opciones (Básico, Estándar y Premium) sin importes ni precios cerrados.
                  </p>

                  {/* PREFIERES LLAMAR DIRECTO */}
                  <div className="mt-[16px] text-[14px] text-[#1F2D3D] font-['Inter',sans-serif]">
                    ¿Prefieres llamar?{' '}
                    <a
                      href={COMPANY_PHONE_TEL}
                      className="font-bold text-[#DC901B] hover:underline inline-flex items-center gap-[4px]"
                    >
                      <span>{COMPANY_PHONE}</span>
                    </a>
                  </div>

                  <div className="mt-[24px] flex flex-col gap-[18px]">
                    {/* 1. RECOGIDA */}
                    <div>
                      <label
                        htmlFor="mobile-origin"
                        className="block font-['Inter',sans-serif] font-bold text-[12px] tracking-[0.06em] text-[#1F2D3D] uppercase mb-[6px]"
                      >
                        Recogida (Origen) *
                      </label>
                      <input
                        id="mobile-origin"
                        type="text"
                        autoComplete="postal-code"
                        placeholder="Ciudad o código postal (ej. 28906 o Getafe)"
                        value={formData.originCity}
                        onChange={(e) =>
                          handlePostalOrCityChange('originCity', 'originPostal', e.target.value)
                        }
                        className={`w-full min-h-[50px] px-[16px] bg-white border rounded-[10px] text-[16px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B] transition-colors ${
                          errors.originCity
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                        }`}
                      />
                      {errors.originCity && (
                        <p className="text-red-600 text-[12px] font-medium mt-[4px]">
                          {errors.originCity}
                        </p>
                      )}
                    </div>

                    {/* 2. ENTREGA */}
                    <div>
                      <label
                        htmlFor="mobile-dest"
                        className="block font-['Inter',sans-serif] font-bold text-[12px] tracking-[0.06em] text-[#1F2D3D] uppercase mb-[6px]"
                      >
                        Entrega (Destino) *
                      </label>
                      <input
                        id="mobile-dest"
                        type="text"
                        autoComplete="postal-code"
                        placeholder="Ciudad o código postal (ej. 08001 o Barcelona)"
                        value={formData.destCity}
                        onChange={(e) =>
                          handlePostalOrCityChange('destCity', 'destPostal', e.target.value)
                        }
                        className={`w-full min-h-[50px] px-[16px] bg-white border rounded-[10px] text-[16px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B] transition-colors ${
                          errors.destCity
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                        }`}
                      />
                      {errors.destCity && (
                        <p className="text-red-600 text-[12px] font-medium mt-[4px]">
                          {errors.destCity}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-h-[32px] py-[16px]" aria-hidden="true" />

                {/* BOTÓN SIGUIENTE MOBILE */}
                <div className="flex flex-col gap-[12px] pt-[8px] pb-[max(env(safe-area-inset-bottom),16px)]">
                  <div className="border-l-[3px] border-[#DC901B] pl-[12px] py-[2px]">
                    <p className="text-[13px] text-[#7C7D7A] leading-[19px] font-['Inter',sans-serif]">
                      Propuesta por correo y contacto en menos de 4 horas con tres opciones.
                    </p>
                  </div>

                  <button
                    type="button"
                    id="mobile-quote-next-btn"
                    onClick={handleNext}
                    className="w-full min-h-[52px] px-[20px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[16px] flex items-center justify-center gap-[8px] shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Siguiente</span>
                    <ArrowRight className="w-[17px] h-[17px]" />
                  </button>

                  <p className="text-center text-[13px] text-[#7C7D7A] font-medium -mt-[2px] font-['Inter',sans-serif]">
                    Tres pasos. Sin registro y sin compromiso.
                  </p>
                </div>
              </div>

              {/* DESKTOP STEP 1 */}
              <div className="hidden sm:grid grid-cols-12 gap-[48px] xl:gap-[80px] items-center py-[24px] xl:py-[40px]">
                {/* Columna Izquierda */}
                <div className="col-span-7 flex flex-col justify-center pr-[12px] xl:pr-[28px]">
                  <h1 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[40px] xl:text-[46px] tracking-[-1.2px] leading-[1.12] mb-[16px]">
                    ¿De dónde a dónde?
                  </h1>

                  <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[16px] xl:text-[17px] leading-[26px] max-w-[480px] mb-[20px]">
                    La ruta, el tipo de carga o peso y la fecha o urgencia permiten preparar tu propuesta personalizada por correo con tres opciones (Básico, Estándar y Premium), sin importes inventados ni precios cerrados.
                  </p>

                  {/* PREFIERES LLAMAR DIRECTO */}
                  <div className="mb-[32px] text-[15px] text-[#1F2D3D] font-['Inter',sans-serif]">
                    ¿Prefieres llamar?{' '}
                    <a
                      href={COMPANY_PHONE_TEL}
                      className="font-bold text-[#DC901B] hover:underline inline-flex items-center gap-[4px]"
                    >
                      <span>{COMPANY_PHONE}</span>
                    </a>
                  </div>

                  {/* Dos beneficios limpios */}
                  <div className="grid grid-cols-2 gap-[28px] max-w-[500px]">
                    <div className="flex flex-col">
                      <div className="w-full h-[2px] bg-[#DC901B] mb-[12px]" />
                      <p className="font-['Inter',sans-serif] font-semibold text-[14px] xl:text-[15px] leading-[20px] xl:leading-[22px] text-[#1F2D3D]">
                        Propuesta por correo y contacto en menos de 4 horas
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <div className="w-full h-[2px] bg-[#DC901B] mb-[12px]" />
                      <p className="font-['Inter',sans-serif] font-semibold text-[14px] xl:text-[15px] leading-[20px] xl:leading-[22px] text-[#1F2D3D]">
                        Tres opciones (Básico, Estándar y Premium)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Columna Derecha Formulario */}
                <div className="col-span-5 flex justify-end">
                  <div className="w-full max-w-[420px] bg-white border border-[#E2E8F0] rounded-[18px] p-[28px] xl:p-[32px] shadow-sm">
                    <div className="flex flex-col gap-[18px]">
                      {/* RECOGIDA */}
                      <div>
                        <label
                          htmlFor="desktop-origin"
                          className="block font-['Inter',sans-serif] font-bold text-[12px] tracking-[0.06em] text-[#1F2D3D] uppercase mb-[6px]"
                        >
                          RECOGIDA (ORIGEN) *
                        </label>
                        <input
                          id="desktop-origin"
                          type="text"
                          autoComplete="postal-code"
                          placeholder="Ciudad o código postal (ej. 28906)"
                          value={formData.originCity}
                          onChange={(e) =>
                            handlePostalOrCityChange('originCity', 'originPostal', e.target.value)
                          }
                          className={`w-full min-h-[50px] px-[16px] bg-white border rounded-[10px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B] transition-colors ${
                            errors.originCity
                              ? 'border-red-500 ring-1 ring-red-500'
                              : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                          }`}
                        />
                        {errors.originCity && (
                          <p className="text-red-600 text-[12px] font-medium mt-[4px]">
                            {errors.originCity}
                          </p>
                        )}
                      </div>

                      {/* ENTREGA */}
                      <div>
                        <label
                          htmlFor="desktop-dest"
                          className="block font-['Inter',sans-serif] font-bold text-[12px] tracking-[0.06em] text-[#1F2D3D] uppercase mb-[6px]"
                        >
                          ENTREGA (DESTINO) *
                        </label>
                        <input
                          id="desktop-dest"
                          type="text"
                          autoComplete="postal-code"
                          placeholder="Ciudad o código postal (ej. 08001)"
                          value={formData.destCity}
                          onChange={(e) =>
                            handlePostalOrCityChange('destCity', 'destPostal', e.target.value)
                          }
                          className={`w-full min-h-[50px] px-[16px] bg-white border rounded-[10px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B] transition-colors ${
                            errors.destCity
                              ? 'border-red-500 ring-1 ring-red-500'
                              : 'border-[#CBD5E1] hover:border-[#94A3B8]'
                          }`}
                        />
                        {errors.destCity && (
                          <p className="text-red-600 text-[12px] font-medium mt-[4px]">
                            {errors.destCity}
                          </p>
                        )}
                      </div>

                      {/* SIGUIENTE */}
                      <button
                        type="button"
                        id="desktop-quote-next-btn"
                        onClick={handleNext}
                        className="w-full min-h-[52px] mt-[4px] px-[20px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[16px] flex items-center justify-center gap-[8px] shadow-sm transition-colors cursor-pointer"
                      >
                        <span>Siguiente</span>
                        <ArrowRight className="w-[17px] h-[17px]" />
                      </button>

                      {/* MICROCOPY */}
                      <p className="text-center text-[13px] text-[#7C7D7A] font-medium -mt-[4px] font-['Inter',sans-serif]">
                        Tres pasos. Sin registro y sin compromiso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ============================================================= */}
          {/* PASO 2: MERCANCÍA / CARGA                                     */}
          {/* ============================================================= */}
          {currentStep === 2 && (
            <div className="flex flex-col gap-[20px]">
              <div>
                <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] sm:text-[28px] tracking-[-0.4px]">
                  Detalles de la mercancía
                </h2>
                <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] mt-[4px]">
                  Datos para asignarte la tipología de vehículo idónea y optimizar el espacio de carga.
                </p>
                <div className="mt-[8px] text-[14px] text-[#1F2D3D] font-['Inter',sans-serif]">
                  ¿Prefieres llamar?{' '}
                  <a
                    href={COMPANY_PHONE_TEL}
                    className="font-bold text-[#DC901B] hover:underline"
                  >
                    {COMPANY_PHONE}
                  </a>
                </div>
              </div>

              {/* TIPO DE SERVICIO (OBLIGATORIO) */}
              <div>
                <label
                  htmlFor="serviceTypeSelect"
                  className="block text-[13px] font-semibold text-[#1F2D3D] mb-[6px] font-['Inter',sans-serif]"
                >
                  Modalidad de servicio *
                </label>
                <select
                  id="serviceTypeSelect"
                  value={formData.serviceType}
                  onChange={(e) => updateField('serviceType', e.target.value)}
                  className={`w-full min-h-[48px] px-[14px] bg-[#F8FAFC] border rounded-[10px] text-[15px] text-[#1F2D3D] focus:outline-none focus:ring-2 focus:ring-[#DC901B] ${
                    errors.serviceType ? 'border-red-500' : 'border-[#CBD5E1]'
                  }`}
                >
                  <option value="transporte-internacional">
                    Transporte internacional (España y Europa)
                  </option>
                  {servicesData.map((svc) => (
                    <option key={svc.slug} value={svc.slug}>
                      {svc.name} ({svc.categoryTag})
                    </option>
                  ))}
                  <option value="no-estoy-seguro">No estoy seguro / Asesoramiento de tráfico</option>
                </select>
                {errors.serviceType && (
                  <p className="text-red-600 text-[12px] mt-[4px]">{errors.serviceType}</p>
                )}
              </div>

              {/* DESCRIPCIÓN DE LA MERCANCÍA (OBLIGATORIO) */}
              <div>
                <label
                  htmlFor="cargoDescription"
                  className="block text-[13px] font-semibold text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]"
                >
                  Descripción de la mercancía o maquinaria *
                </label>
                <textarea
                  id="cargoDescription"
                  rows={3}
                  placeholder="Ej: Torno industrial de 4.200 kg no remontable / 6 palets de bobinas / maquinaria de obra"
                  value={formData.cargoDescription}
                  onChange={(e) => updateField('cargoDescription', e.target.value)}
                  className={`w-full p-[14px] bg-white border rounded-[10px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B] ${
                    errors.cargoDescription ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CBD5E1]'
                  }`}
                />
                {errors.cargoDescription && (
                  <p className="text-red-600 text-[12px] mt-[4px]">{errors.cargoDescription}</p>
                )}
              </div>

              {/* TRAMOS DE PESO Y BULTOS (OPCIONALES POR TRAMOS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                {/* PESO POR TRAMOS */}
                <div>
                  <label
                    htmlFor="weightKgSelect"
                    className="block text-[13px] font-medium text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]"
                  >
                    Peso estimado por tramos (opcional)
                  </label>
                  <select
                    id="weightKgSelect"
                    value={formData.weightKg}
                    onChange={(e) => updateField('weightKg', e.target.value)}
                    className="w-full min-h-[46px] px-[14px] bg-white border border-[#CBD5E1] rounded-[10px] text-[14px] text-[#1F2D3D] focus:outline-none focus:ring-2 focus:ring-[#DC901B]"
                  >
                    <option value="">Selecciona tramo de peso aproximado</option>
                    {WEIGHT_RANGES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                {/* BULTOS POR TRAMOS */}
                <div>
                  <label
                    htmlFor="palletsCountSelect"
                    className="block text-[13px] font-medium text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]"
                  >
                    Bultos o palets por tramos (opcional)
                  </label>
                  <select
                    id="palletsCountSelect"
                    value={formData.palletsCount}
                    onChange={(e) => updateField('palletsCount', e.target.value)}
                    className="w-full min-h-[46px] px-[14px] bg-white border border-[#CBD5E1] rounded-[10px] text-[14px] text-[#1F2D3D] focus:outline-none focus:ring-2 focus:ring-[#DC901B]"
                  >
                    <option value="">Selecciona tramo de bultos</option>
                    {PALLET_RANGES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================= */}
          {/* PASO 3: CONTACTO PARA LA PROPUESTA                           */}
          {/* ============================================================= */}
          {currentStep === 3 && (
            <div className="flex flex-col gap-[20px]">
              <div>
                <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] sm:text-[28px] tracking-[-0.4px]">
                  Datos de contacto para la propuesta
                </h2>
                <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] mt-[4px]">
                  Necesitamos tu empresa y correo para enviarte la propuesta formal detallada. Solo servicio B2B.
                </p>
                <div className="mt-[8px] text-[14px] text-[#1F2D3D] font-['Inter',sans-serif]">
                  ¿Prefieres llamar?{' '}
                  <a
                    href={COMPANY_PHONE_TEL}
                    className="font-bold text-[#DC901B] hover:underline"
                  >
                    {COMPANY_PHONE}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                {/* 1. NOMBRE (OBLIGATORIO) */}
                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-[13px] font-semibold text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]"
                  >
                    Nombre y apellidos *
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    value={formData.contactName}
                    onChange={(e) => updateField('contactName', e.target.value)}
                    className={`w-full min-h-[46px] px-[14px] bg-white border rounded-[10px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B] ${
                      errors.contactName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CBD5E1]'
                    }`}
                  />
                  {errors.contactName && (
                    <p className="text-red-600 text-[12px] mt-[4px]">{errors.contactName}</p>
                  )}
                </div>

                {/* 2. EMPRESA (OBLIGATORIO) */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-[13px] font-semibold text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]"
                  >
                    Empresa / Razón Social *
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    autoComplete="organization"
                    placeholder="Nombre de tu empresa"
                    value={formData.companyName}
                    onChange={(e) => updateField('companyName', e.target.value)}
                    className={`w-full min-h-[46px] px-[14px] bg-white border rounded-[10px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B] ${
                      errors.companyName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CBD5E1]'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="text-red-600 text-[12px] mt-[4px]">{errors.companyName}</p>
                  )}
                </div>

                {/* 3. CORREO (OBLIGATORIO) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[13px] font-semibold text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]"
                  >
                    Email corporativo *
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="contacto@empresa.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={`w-full min-h-[46px] px-[14px] bg-white border rounded-[10px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B] ${
                      errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#CBD5E1]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-[12px] mt-[4px]">{errors.email}</p>
                  )}
                </div>

                {/* 4. TELÉFONO (OPCIONAL CON NOTA) */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[13px] font-semibold text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]"
                  >
                    Teléfono directo{' '}
                    <span className="font-normal text-[#7C7D7A]">(opcional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="600 000 000"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full min-h-[46px] px-[14px] bg-white border border-[#CBD5E1] rounded-[10px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B]"
                  />
                  <p className="text-[12px] text-[#7C7D7A] mt-[4px] font-['Inter',sans-serif]">
                    Para aclarar dudas del presupuesto.
                  </p>
                </div>
              </div>

              {/* OBSERVACIONES OPCIONALES */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-[13px] font-medium text-[#1F2D3D] mb-[4px] font-['Inter',sans-serif]"
                >
                  Observaciones adicionales (opcional)
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  placeholder="¿Necesitas rampa, carretilla, grúa o ventana horaria específica?"
                  value={formData.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                  className="w-full p-[14px] bg-white border border-[#CBD5E1] rounded-[10px] text-[15px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B]"
                />
              </div>

              {/* PRIVACY CHECKBOX */}
              <div className="pt-[4px]">
                <label className="flex items-start gap-[10px] cursor-pointer text-[13px] text-[#1F2D3D] leading-[20px] font-['Inter',sans-serif]">
                  <input
                    type="checkbox"
                    checked={formData.acceptedPrivacy}
                    onChange={(e) => updateField('acceptedPrivacy', e.target.checked)}
                    className="mt-[3px] rounded border-[#CBD5E1] text-[#DC901B] focus:ring-[#DC901B]"
                  />
                  <span>
                    He leído y acepto la{' '}
                    <a
                      href="/politica-de-privacidad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-[#1F2D3D] font-semibold hover:text-[#DC901B]"
                    >
                      política de privacidad
                    </a>{' '}
                    para el envío de la propuesta comercial B2B.
                  </span>
                </label>
                {errors.acceptedPrivacy && (
                  <p className="text-red-600 text-[12px] mt-[4px]">{errors.acceptedPrivacy}</p>
                )}
              </div>

              {/* PRUEBA VÁLIDA JUNTO AL ENVÍO */}
              <div className="flex items-center gap-[8px] p-[12px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] text-[13px] text-[#1F2D3D] font-['Inter',sans-serif]">
                <ShieldCheck className="w-[18px] h-[18px] text-[#DC901B] shrink-0" />
                <span>
                  Respaldado por <strong>Más de 21.000 viajes desde 2020</strong> y póliza adicional hasta 150.000 € por envío sobre CMR.
                </span>
              </div>
            </div>
          )}

          {/* BOTONES DE NAVEGACIÓN (PASOS 2 Y 3) */}
          <div
            className={`mt-[32px] pt-[20px] border-t border-[#E2E8F0] items-center justify-between gap-[12px] ${
              currentStep === 1 ? 'hidden' : 'flex'
            }`}
          >
            <button
              type="button"
              id="quote-back-btn"
              onClick={handleBack}
              className="flex items-center gap-[6px] min-h-[48px] px-[20px] rounded-[10px] border border-[#1F2D3D] text-[#1F2D3D] font-['Inter',sans-serif] font-semibold text-[14px] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-[16px] h-[16px]" />
              <span>Atrás</span>
            </button>

            {currentStep < 3 ? (
              <button
                type="button"
                id="quote-next-btn"
                onClick={handleNext}
                className="flex items-center gap-[6px] min-h-[48px] px-[28px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] shadow-sm transition-colors cursor-pointer ml-auto"
              >
                <span>Siguiente paso</span>
                <ArrowRight className="w-[16px] h-[16px]" />
              </button>
            ) : (
              <button
                type="submit"
                id="quote-submit-btn"
                disabled={isSubmitting}
                className="flex items-center gap-[6px] min-h-[50px] px-[32px] rounded-[10px] bg-[#DC901B] hover:bg-[#c98014] disabled:opacity-70 text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[15px] shadow-sm transition-colors cursor-pointer ml-auto"
              >
                <span>{isSubmitting ? 'Enviando solicitud...' : 'Pedir presupuesto'}</span>
                {!isSubmitting && <ArrowRight className="w-[16px] h-[16px]" />}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
