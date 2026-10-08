import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'transporte-de-palets-a-europa',
    title: 'Transporte de palets a Europa: opciones, modalidades y plazos para empresas españolas',
    tag: 'Empresa de transporte',
    date: '15 de junio de 2026',
    readingTime: '5 min de lectura',
    summary: 'Guía práctica para empresas que exportan mercancía paletizada: diferencias entre FTL y LTL, tiempos de tránsito por país, documentación aduanera y cómo proteger la carga.',
    image: 'https://images.unsplash.com/photo-1573057493754-868e061af215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    sections: [
      {
        subtitle: '1. El europalet como estándar en el comercio intracomunitario',
        paragraphs: [
          'El europalet homologado EPAL (1.200 x 800 mm) es el estándar indiscutible en la logística europea. Su diseño modular permite encajar exactamente 33 unidades en el suelo de un semirremolque estándar de 13,60 metros.',
          'Para las empresas exportadoras españolas, entender si la mercancía es remontable (permite apilar otro palet encima) o no remontable es el factor determinante en el cálculo del flete en modalidad de grupaje.',
        ],
        callout: 'Un palet remontable optimiza el coste del flete al permitir que el transportista aproveche la altura del remolque.',
      },
      {
        subtitle: '2. Tiempos de tránsito habituales desde España a los principales países europeos',
        paragraphs: [
          'Los tiempos de entrega varían según la distancia y la modalidad contratada:',
          '• Francia y Portugal: 24 a 48 horas en carga completa o express; 48 a 72 horas en grupaje regular.',
          '• Alemania, Bélgica y Países Bajos: 48 a 72 horas en carga completa; 3 a 5 días laborables en grupaje consolidado.',
          '• Reino Unido: 3 a 4 días con gestión de aduana previa al cruce del Canal de la Mancha.',
          '• Italia y resto de la UE: 3 a 5 días según destino norte o sur.',
        ],
      },
      {
        subtitle: '3. Documentación indispensable y seguro de transporte',
        paragraphs: [
          'Para envíos intracomunitarios, la carta de porte internacional CMR es el documento básico que prueba el contrato de transporte y la recepción en destino.',
          'En Transvolando, además del límite obligatorio fijado por el convenio CMR (aproximadamente 10-11 € por kilo bruto), incorporamos de serie una póliza adicional de hasta 150.000 € por envío, garantizando que el valor real de tu mercancía quede siempre resguardado.',
        ],
      },
    ],
  },
  {
    slug: 'como-calcular-el-coste-del-transporte-internacional',
    title: 'Cómo calcular el coste del transporte internacional de mercancías para tu empresa',
    tag: 'Empresa de transporte',
    date: '15 de junio de 2026',
    readingTime: '5 min de lectura',
    summary: 'Aprende qué factores componen la tarifa de un envío internacional por carretera: metros lineales (LDM), recargo por combustible (BAF), peajes europeos y costes de aduana.',
    image: 'https://images.unsplash.com/photo-1618582948377-cd7eb0e8cb14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    sections: [
      {
        subtitle: '1. El concepto de metro lineal de carga (LDM) y peso volumétrico',
        paragraphs: [
          'En el transporte por carretera, cuando una carga no puede ser remontada por su fragilidad o forma, las agencias de transporte tasan el flete por metros lineales (Loading Meters o LDM).',
          'Un semirremolque estándar tiene 13,60 metros lineales. Dos europalets colocados de través ocupan exactamente 0,8 LDM. Si el peso real es bajo pero la mercancía ocupa suelo, se aplica la equivalencia volumétrica (habitualmente 1 LDM = 1.750 a 1.850 kg de peso tasable).',
        ],
        callout: 'Saber calcular tus LDM te permite comparar presupuestos de transporte con total transparencia y sin sorpresas en factura.',
      },
      {
        subtitle: '2. Factores variables: combustible, peajes y Euroviñetas',
        paragraphs: [
          'El coste final de un trayecto transfronterizo no depende únicamente de los kilómetros recorridos. Incluye peajes de autopistas francesas, el sistema Maut en Alemania o el Viapass belga, así como la fluctuación del combustible regulada por la cláusula BAF (Bunker Adjustment Factor).',
          'En Transvolando proporcionamos un presupuesto personalizado por correo con tres opciones (Básico, Estándar y Premium) con todos los costes desglosados para que la empresa conozca su coste logístico unitario con antelación.',
        ],
      },
      {
        subtitle: '3. El modelo de agencia sin costes fijos de flota',
        paragraphs: [
          'Las empresas de transporte con flota propia a menudo repercuten el coste de tener camiones parados o viajes de retorno vacíos en sus tarifas. El modelo de agencia con red verificada como el de Transvolando busca siempre el transportista que ya tiene retorno desde esa zona o que cuenta con la ruta óptima, optimizando el coste operativo de la ruta.',
        ],
      },
    ],
  },
  {
    slug: 'ftl-o-grupaje-cuando-conviene-cada-opcion',
    title: 'Carga completa o grupaje: cuándo le conviene cada opción a tu empresa',
    tag: 'Transporte de mercancías',
    date: '12 de junio de 2026',
    readingTime: '5 min de lectura',
    summary: 'Comparativa práctica entre Full Truckload y Less than Truckload. Puntos de inflexión en coste, tiempo de tránsito y seguridad para elegir con criterio.',
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    sections: [
      {
        subtitle: '1. ¿En qué consiste cada modalidad?',
        paragraphs: [
          'FTL (Full Truckload / Carga Completa): El camión se dedica íntegramente a tu empresa. Se carga en tu muelle y viaja directamente a la puerta del cliente receptor sin ninguna manipulación intermedia.',
          'LTL (Less than Truckload / Grupaje): Tu mercancía comparte remolque con la de otras empresas. Se consolida en ruta y cada cliente paga únicamente por los huecos de palet o metros lineales que ocupa su producto.',
        ],
      },
      {
        subtitle: '2. El punto de inflexión económico',
        paragraphs: [
          'Por regla general, cuando un envío supera los 18 a 20 europalets o más de 12.000 a 14.000 kg, el coste de pagar por palet individual en grupaje empieza a superar el precio de contratar un camión completo dedicado.',
          'Además, con camión completo eliminas entre 24 y 48 horas de tiempo de tránsito al suprimir paradas intermedias de reparto.',
        ],
        callout: 'A partir de 18 palets o cuando el plazo es crítico, el camión completo dedicado casi siempre resulta más rentable y seguro.',
      },
      {
        subtitle: '3. La decisión en función de la sensibilidad de la carga',
        paragraphs: [
          'Si tu mercancía es de alto valor unitario, frágil o con embalajes delicados, la carga completa evita que terceros choquen o manipulen tu producto durante el viaje. En cualquier caso, tanto en grupaje como en carga completa, en Transvolando tu gestor único mantiene el control y la póliza adicional de 150.000 € protege cada bulto.',
        ],
      },
    ],
  },
  {
    slug: 'que-es-el-cubicaje-en-el-transporte',
    title: 'Qué es el cubicaje en el transporte de mercancías y cómo optimizarlo',
    tag: 'Logística y cubicaje',
    date: '10 de junio de 2026',
    readingTime: '5 min de lectura',
    summary: 'Aprende a calcular el volumen real y peso tasable de tus envíos: fórmula de metros cúbicos, factor de estiba y consejos para evitar sobrecostes en el flete.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    sections: [
      {
        subtitle: '1. Concepto fundamental del cubicaje en logística',
        paragraphs: [
          'El cubicaje es el cálculo del espacio tridimensional (largo x ancho x alto) que ocupa una mercancía dentro de un vehículo de transporte de carga terrestre. Se mide habitualmente en metros cúbicos (m³).',
          'En el transporte comercial por carretera, el espacio disponible en un tráiler estándar es de aproximadamente 85 a 90 m³ (o hasta 100 m³ en un camión mega o gran volumen). Cuando una mercancía es voluminosa pero ligera, el transportista cobra por el volumen ocupado y no solo por el peso real de la báscula.',
        ],
        callout: 'El volumen ocupado determina el peso tasable de tu expedición conforme a la relación estándar del transporte por carretera (1 m³ = 333 kg).',
      },
      {
        subtitle: '2. Cómo se calcula el peso volumétrico y el factor de estiba',
        paragraphs: [
          'Para calcular el peso tasable, las empresas de transporte aplican la regla del factor de estiba terrestre: 1 metro cúbico equivale convencionalmente a 333 kilogramos de peso tasable (equivalencia 1:3).',
          'Si envías maquinaria ligera o cajas de 6 m³ que pesan 800 kg reales, el peso tasable será: 6 m³ x 333 kg/m³ = 1.998 kg. La tarifa se calculará sobre los 1.998 kg, ya que esa carga impide transportar otros bultos en ese mismo espacio físico.',
        ],
      },
      {
        subtitle: '3. Consejos de Transvolando para optimizar el coste de cubicaje',
        paragraphs: [
          '• Diseña embalajes y cajas ajustadas a las dimensiones modulares del europalet (120 x 80 cm) para evitar que sobresalgan y generen espacios muertos.',
          '• Si tu mercancía lo permite, indícanos si los bultos son remontables (apilables). Un palet remontable reduce considerablemente el coste por LDM en grupaje.',
          '• En Transvolando nuestros gestores analizan el plano de carga antes del envío para seleccionar la tipología exacta de camión (tauliner, góndola o mega) y garantizar que no pagues por aire transportado.',
        ],
      },
    ],
  },
];
