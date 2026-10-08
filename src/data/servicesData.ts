import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'transporte-de-maquinaria',
    slug: 'transporte-de-maquinaria',
    name: 'Transporte de maquinaria',
    number: '01',
    categoryTag: 'Maquinaria pesada e industrial',
    heroTitle: 'Transporte de maquinaria pesada para empresas en España y Europa',
    valueProp: 'Maquinaria industrial, agrícola y de obra pública trasladada con góndolas homologadas, gestión completa de permisos y gestor único dedicado.',
    shortDesc: 'Equipos industriales pesados transportados con vehículos especializados (góndolas estándar, rebajadas y extensibles), autorizaciones especiales y seguimiento con gestor único.',
    benefits: [
      'Póliza adicional incluida hasta 150.000 € por envío sobre la cobertura CMR.',
      'Gestión integral de autorizaciones especiales de circulación y coches piloto.',
      'Menos del 1 % de incidencias y propuesta por correo en menos de 4 horas.',
    ],
    cargoTypes: [
      {
        title: 'Maquinaria industrial',
        description: 'Tornos, centros de mecanizado, fresadoras, prensas mecánicas e hidráulicas, plegadoras y líneas completas de producción.',
        items: ['Centros de mecanizado CNC', 'Prensas y plegadoras', 'Transformadores y generadores'],
      },
      {
        title: 'Maquinaria agrícola',
        description: 'Tractores de gran tonelaje, cosechadoras, empacadoras, sembradoras y aperos agrícolas de gálibo ancho.',
        items: ['Tractores agrícolas', 'Cosechadoras con peines desmontables', 'Cubas y tolvas'],
      },
      {
        title: 'Maquinaria de obra y construcción',
        description: 'Excavadoras de cadenas y ruedas, retroexcavadoras, grúas móviles, dumpers, motoniveladoras y rodillos compactadores.',
        items: ['Excavadoras y palas cargadoras', 'Dumpers articulados', 'Plataformas elevadoras y grúas'],
      },
      {
        title: 'Maquinaria ferroviaria y especializada',
        description: 'Vagones auxiliares, componentes de catenaria, bateadoras y equipos técnicos de infraestructura.',
        items: ['Equipos auxiliares ferroviarios', 'Grupos electrógenos pesados', 'Maquinaria de reciclaje y trituración'],
      },
    ],
    vehicles: [
      {
        name: 'Góndolas estándar',
        description: 'Ideal para maquinaria pesada y equipos industriales estáticos de gran tonelaje con apoyo uniforme.',
        capacity: 'Hasta 40-44 toneladas de MMA',
      },
      {
        name: 'Góndolas rebajadas (Low-Bed)',
        description: 'Plataforma con altura reducida al suelo para maquinaria de gran altura que deba librar puentes y túneles.',
        capacity: 'Altura útil desde 30-45 cm del suelo',
      },
      {
        name: 'Góndolas extensibles',
        description: 'Vehículos con chasis telescópico para piezas de gran longitud, estructuras y maquinaria extendida.',
        capacity: 'Extensiones de hasta 25-30 metros',
      },
      {
        name: 'Portamáquinas con rampas',
        description: 'Especialmente configuradas para maquinaria rodada autopropulsada (conducible o remolcable) con subida autónoma.',
        capacity: 'Rampas hidráulicas reforzadas',
      },
    ],
    specs: [
      { label: 'Peso máximo habitual', value: 'Hasta 44-50 T', detail: 'Con autorizaciones específicas de masa' },
      { label: 'Dimensiones excepcionales', value: '> 2,55 m ancho / > 4 m alto', detail: 'Gestión técnica de gálibo' },
      { label: 'Póliza de serie adicional', value: 'Hasta 150.000 €', detail: 'Activa de oficio en cada porte' },
      { label: 'Propuesta por correo', value: '< 4 horas', detail: 'Con tres opciones de servicio' },
    ],
    permits: [
      {
        title: 'Autorizaciones Especiales de Circulación',
        description: 'Tramitamos las autorizaciones específicas (ACC) ante la DGT, Servei Català de Trànsit y Trafikoa del País Vasco cuando la maquinaria excede dimensiones o masas legales.',
      },
      {
        title: 'Estudio técnico de itinerario y gálibos',
        description: 'Verificación previa de puentes, curvas de radio cerrado, peajes y rotondas para garantizar un paso seguro y sin bloqueos.',
      },
      {
        title: 'Vehículos piloto y escoltas',
        description: 'Coordinación reglamentaria de coches piloto de señalización y escolta de la Guardia Civil de Tráfico si el gálibo lo exige.',
      },
    ],
    process: [
      { step: '01', title: 'Estudio de ficha técnica y gálibo', description: 'Revisamos dimensiones exactas (largo, ancho, alto), peso neto, si es rodada o estática y accesos de carga y descarga.' },
      { step: '02', title: 'Selección de vehículo y permisos', description: 'Asignamos la góndola o plataforma óptima de nuestra red de casi 3.000 transportistas y tramitamos las licencias de circulación pertinentes.' },
      { step: '03', title: 'Planificación de carga y trincaje', description: 'Definición de puntos de amarre homologados, cadenas de trincaje de alta resistencia y ventana horaria acordada.' },
      { step: '04', title: 'Transporte y entrega con gestor único', description: 'Avisos proactivos ante cualquier contingencia y entrega coordinada por tu gestor único sin intermediarios añadidos.' },
    ],
    coverage: {
      national: 'Toda España peninsular, Baleares, Canarias, Ceuta y Melilla con conexión directa marítima.',
      international: 'España y Europa con coordinación aduanera en Reino Unido a través de agente de aduanas y CMR gestionado.',
    },
    faqs: [
      {
        q: '¿Qué información técnica se necesita para cotizar el transporte de una máquina?',
        a: 'Necesitamos las dimensiones reales (largo, ancho y alto total con cualquier accesorio montado), el peso aproximado o exacto según ficha técnica, los puntos de origen y destino, y si la máquina se puede mover por sus propios medios o requiere grúa para la carga.',
      },
      {
        q: '¿Quién gestiona los permisos de tráfico para maquinaria que supera el gálibo estándar?',
        a: 'Transvolando se encarga de todo. Tramitamos las Autorizaciones Complementarias de Circulación (ACC) ante la DGT o administraciones autonómicas correspondientes y coordinamos los coches piloto reglamentarios.',
      },
      {
        q: '¿La póliza adicional de 150.000 € cubre la maquinaria?',
        a: 'Sí. En Transvolando cada envío cuenta automáticamente con una póliza adicional de hasta 150.000 € por encima de la responsabilidad legal obligatoria del CMR/LOTT, sin coste extra ni trámites adicionales.',
      },
      {
        q: '¿Hacéis transporte de maquinaria a nivel internacional en Europa?',
        a: 'Sí, operamos en España y rutas en toda Europa, gestionando la documentación internacional requerida (CMR) y la coordinación aduanera en Reino Unido a través de agente de aduanas.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1573057493754-868e061af215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    finalCta: {
      title: 'Cuéntanos tu ruta y maquinaria',
      description: 'Indica tipo de máquina, medidas, peso y fechas. Te enviamos presupuesto personalizado por correo con tres opciones (Básico, Estándar y Premium) en menos de 4 horas.',
      quoteButtonText: 'Pedir presupuesto',
    },
  },
  {
    id: 'transportes-especiales',
    slug: 'transportes-especiales',
    name: 'Transportes especiales',
    number: '02',
    categoryTag: 'Cargas fuera de gálibo',
    heroTitle: 'Empresa de Transportes Especiales por Carretera',
    valueProp: 'Soluciones de transportes especiales para empresas a medida, con control y seguimiento en cada etapa',
    shortDesc: 'Coordinamos transportes especiales de cargas sobredimensionadas y gran tonelaje en España y Europa. Desde Madrid gestionamos el proceso completo: estudio técnico de ruta, permisos especiales, selección de vehículo especializado, carga y descarga. Ratio de incidencias por debajo de la media del sector.',
    benefits: [
      'Estudios de viabilidad técnica de ruta y cruces de gálibo.',
      'Gestión de autorizaciones específicas DGT y comunidades autónomas.',
      'Acompañamiento con vehículos piloto homologados.',
    ],
    cargoTypes: [
      {
        title: 'Vigas y estructuras prefabricadas',
        description: 'Vigas de hormigón armado, cerchas metálicas, silos y depósitos industriales de gran longitud o diámetro.',
        items: ['Vigas pretensadas de puente', 'Estructuras de acero de naves', 'Tuberías de gran diámetro'],
      },
      {
        title: 'Depósitos y calderería pesada',
        description: 'Tanques de almacenamiento químico, reactores, columnas de destilación y depósitos cilíndricos sobredimensionados.',
        items: ['Depósitos y silos', 'Transformadores de potencia', 'Calderas industriales'],
      },
      {
        title: 'Componentes eólicos e industriales',
        description: 'Secciones de torre, palas de aerogenerador, bujes y elementos modulares de plantas energéticas.',
        items: ['Tramos de torre eólica', 'Módulos industriales preensamblados', 'Transformadores eléctricos'],
      },
    ],
    vehicles: [
      {
        name: 'Plataformas extensibles',
        description: 'Diseñadas para vigas y cargas autoportantes de hasta 36 metros de longitud.',
        capacity: 'Longitudes variables con múltiples extensiones',
      },
      {
        name: 'Góndolas de cuello de cisne desmontable',
        description: 'Permiten la carga frontal directa de equipos pesados sin necesidad de grandes grúas auxiliares.',
        capacity: 'Carga frontal facilitada',
      },
      {
        name: 'Semirremolques modulares de alta capacidad',
        description: 'Líneas de ejes hidráulicos con dirección forzada para repartir toneladas sobre pavimentos regulados.',
        capacity: 'Configuración multibogie para más de 60 T',
      },
    ],
    specs: [
      { label: 'Longitud máxima gestionada', value: 'Hasta 35+ metros', detail: 'Con autorizaciones de transporte especial' },
      { label: 'Ancho excepcional', value: 'Hasta 4,5+ metros', detail: 'Con vehículo piloto y señalización especial' },
      { label: 'Altura sobre plataforma', value: 'Rebajada a ras de suelo', detail: 'Para pasos inferiores complicados' },
      { label: 'Póliza adicional', value: '150.000 € incluida', detail: 'Ampliación de capital disponible bajo demanda' },
    ],
    permits: [
      {
        title: 'Autorizaciones DGT Red Especial',
        description: 'Tramitación de permisos genéricos o específicos para las redes de carreteras del Estado y comunidades transferidas.',
      },
      {
        title: 'Acompañamiento con coche piloto reglamentario',
        description: 'Flota de vehículos piloto equipados con cartelería V-21 homologada y comunicación directa en cabina.',
      },
    ],
    process: [
      { step: '01', title: 'Análisis dimensional y de peso', description: 'Revisión geométrica del plano de carga y cálculo de centro de gravedad para balancear ejes.' },
      { step: '02', title: 'Tramitación de permisos especiales', description: 'Solicitud ante las administraciones y confección de hoja de ruta obligatoria.' },
      { step: '03', title: 'Ejecución coordinada con escoltas', description: 'Circulación en las ventanas horarias estipuladas por tráfico (a menudo nocturnas).' },
      { step: '04', title: 'Descarga y cierre documental', description: 'Confirmación de entrega en obra o planta con CMR conformado.' },
    ],
    coverage: {
      national: 'Red completa de carreteras de España, puertos y enlaces intermodales.',
      international: 'Corredores europeos especiales hacia Francia, Alemania, Portugal y resto de la UE.',
    },
    faqs: [
      {
        q: '¿A partir de qué dimensiones un transporte se considera especial en España?',
        a: 'En España, se considera transporte especial si supera los 16,50 m de longitud (articulado) o 18,75 m (tren de carretera), los 2,55 m de anchura (2,60 m para frigoríficos) o los 4,00 m de altura, o una masa total superior a 40-44 toneladas.',
      },
      {
        q: '¿Cuánto tiempo tarda en tramitarse un permiso de transporte especial?',
        a: 'Depende de la categoría del permiso. Los permisos genéricos pueden tardar entre 5 y 10 días laborables, mientras que autorizaciones específicas con informes técnicos de puentes o acompañamiento policial pueden requerir más margen. Por eso te recomendamos contactarnos con antelación.',
      },
      {
        q: '¿Transvolando proporciona los coches piloto?',
        a: 'Sí, coordinamos los vehículos piloto y su equipamiento según el ancho y longitud de la carga dictaminado por la normativa de tráfico.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1618582948377-cd7eb0e8cb14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    finalCta: {
      title: 'Solución a medida para tu carga especial',
      description: 'Estudiamos dimensiones, autorizaciones y coches piloto para planificar la operativa con máxima seguridad.',
      quoteButtonText: 'Pedir presupuesto',
    },
  },
  {
    id: 'cargas-completas',
    slug: 'cargas-completas',
    name: 'Cargas completas',
    number: '03',
    categoryTag: 'Transporte de carga completa dedicada',
    heroTitle: 'Cargas completas para empresas: camión exclusivo de origen a destino',
    valueProp: 'Transporte con vehículo exclusivo para tu mercancía. Sin transbordos, sin manipulaciones intermedias y con trazabilidad directa.',
    shortDesc: 'Tu mercancía ocupa el camión completo: máximo control, entregas directas sin paradas intermedias en España y Europa.',
    benefits: [
      'Vehículo 100 % exclusivo para tu carga sin consolidar con otros remitentes.',
      'Plazos de entrega directos de 24 a 48 horas en península e itinerarios exprés europeos.',
      'Gestor único asignado y póliza adicional hasta 150.000 € por envío.',
    ],
    cargoTypes: [
      {
        title: 'Mercancía industrial y manufactura',
        description: 'Suministros para cadenas de montaje, maquinaria ensamblada, repuestos automotrices y materias primas paletizadas o empaquetadas.',
        items: ['Componentes de automoción', 'Bobinas de chapa y perfilería', 'Palets industriales pesados'],
      },
      {
        title: 'Gran consumo y distribución mayorista',
        description: 'Envíos regulares a plataformas logísticas centrales, centros de distribución y grandes superficies.',
        items: ['Cargas completas de 33 europalets', 'Bebidas y embalajes', 'Mercancía en seco y paquetería consolidada'],
      },
      {
        title: 'Materiales de construcción y cerámica',
        description: 'Cargas pesadas sobre piso de trailer, palets de azulejos, sacos de mortero y carpintería metálica.',
        items: ['Palets de gres y cerámica', 'Tuberías y perfiles', 'Aislantes y paneles sándwich'],
      },
    ],
    vehicles: [
      {
        name: 'Trailer lona Tautliner estándar',
        description: 'Apertura lateral y superior para carga con carretilla o puente grúa. Medidas interiores 13,60 m x 2,48 m x 2,70 m.',
        capacity: 'Hasta 24.000 kg / 33 europalets',
      },
      {
        name: 'Megatrailer (Semirremolque Mega)',
        description: 'Interior de 3,00 m de altura libre útil, perfecto para mercancías volumétricas de automoción o embalajes.',
        capacity: 'Hasta 100 m³ de volumen útil',
      },
      {
        name: 'Caja cerrada y furgón rígido',
        description: 'Para cargas de alto valor que requieran paredes rígidas y máxima protección antirrobo.',
        capacity: 'Hasta 24.000 kg con sellado de seguridad',
      },
    ],
    specs: [
      { label: 'Capacidad de carga', value: 'Hasta 24 T útiles', detail: 'Peso neto de mercancía' },
      { label: 'Capacidad en suelo', value: '33 Europalets / 26 Americanos', detail: '13,60 metros de plataforma' },
      { label: 'Tiempo de tránsito peninsular', value: '24 h - 48 h', detail: 'Punto a punto directo' },
      { label: 'Seguro incluido', value: 'CMR + 150.000 € adicional', detail: 'Protección de carga de serie' },
    ],
    permits: [
      {
        title: 'Documentación CMR y Carta de Porte nacional',
        description: 'Emisión y control directo de toda la documentación mercantil y legal requerida por la LOTT y convenios internacionales.',
      },
      {
        title: 'Control de precintos y trazabilidad',
        description: 'Sellado de puertas en origen y apertura exclusivamente en destino ante el receptor autorizado.',
      },
    ],
    process: [
      { step: '01', title: 'Solicitud y confirmación inmediata', description: 'Indicas fecha, origen y destino. Te enviamos propuesta por correo con tres opciones en menos de 4 horas.' },
      { step: '02', title: 'Carga en tus instalaciones', description: 'El conductor se presenta en la ventana convenida. Carga lateral, trasera o por techo según necesidad.' },
      { step: '03', title: 'Tránsito directo sin transbordo', description: 'El camión no pasa por plataformas de grupaje. Viaja directo hacia el destinatario final.' },
      { step: '04', title: 'Descarga y albarán digitalizado', description: 'Recepción firmada y entrega inmediata de la documentación conformada al gestor de tu empresa.' },
    ],
    coverage: {
      national: 'Servicio diario en toda la península ibérica, Baleares y Canarias.',
      international: 'Rutas fijas hacia Francia, Alemania, Italia, Benelux, Portugal y Reino Unido.',
    },
    faqs: [
      {
        q: '¿Cuándo compensa contratar una carga completa en lugar de grupaje?',
        a: 'Compensa cuando tu envío supera los 15-20 palets o más de 10.000 kg, o cuando la mercancía requiere exclusividad por fragilidad, valor o por urgencia de entrega directa sin paradas.',
      },
      {
        q: '¿Puedo cargar por el techo o por el lateral?',
        a: 'Sí, la mayoría de nuestras lonas son Tautliners con techo elevable o corredero y apertura lateral completa, aptas para cargar con puente grúa o carretilla elevadora.',
      },
      {
        q: '¿Con cuánta antelación debo solicitar un camión completo?',
        a: 'Disponemos de capacidad para cargas con planificación ágil en 24 a 48 horas para rutas habituales en España y principales corredores europeos.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    finalCta: {
      title: 'Camión completo para tu mercancía',
      description: 'Origen, destino, peso y fecha. Asignamos el semirremolque idóneo con trayecto directo y sin transbordos.',
      quoteButtonText: 'Pedir presupuesto',
    },
  },
  {
    id: 'grupaje',
    slug: 'grupaje',
    name: 'Grupaje nacional e internacional',
    number: '04',
    categoryTag: 'Consolidación de carga parcial',
    heroTitle: 'Grupaje para empresas: paga solo por el espacio que ocupa tu mercancía',
    valueProp: 'Consolidamos tus envíos de 1 a 20 palets en rutas compartidas. Ahorro económico sin perder el control de un gestor único y con póliza adicional incluida.',
    shortDesc: 'Optimiza costes en envíos medianos y parciales pagando únicamente por los palets o metros lineales que utilizas.',
    benefits: [
      'Pagas solo por los huecos de palet o metros lineales utilizados.',
      'Rutas regulares semanales en España, península Ibérica y Europa.',
      'Póliza adicional hasta 150.000 € y seguimiento proactivo por parte de tu gestor.',
    ],
    cargoTypes: [
      {
        title: 'Palets estándar y remontables',
        description: 'Europalets (120x80 cm) y palets americanos (120x100 cm) con mercancía embalada y retractilada.',
        items: ['Envíos desde 1 hasta 18 palets', 'Cajas maestras sobre palet', 'Mercancía paletizada no perecedera'],
      },
      {
        title: 'Envíos industriales parciales',
        description: 'Repuestos mecánicos, maquinaria desmontada en jaulas, motores y bidones sobre palet homologado.',
        items: ['Jaulas metálicas de piezas', 'Bidones y bidones IBC', 'Bobinas medianas acuñadas'],
      },
      {
        title: 'Mercancía comercial no apilable',
        description: 'Cargas con restricciones de peso sobre techo que se tasan por metros lineales de suelo.',
        items: ['Mobiliario y expositores', 'Maquinaria de hostelería', 'Cuadros eléctricos'],
      },
    ],
    vehicles: [
      {
        name: 'Camiones tráiler de línea regular',
        description: 'Salidas diarias y bisemanales que unen las principales provincias industriales y nudos europeos.',
        capacity: 'Consolidación en flota de 24 T',
      },
      {
        name: 'Rígidos con trampilla elevadora',
        description: 'Para recogidas y entregas capilares en clientes sin muelle de carga.',
        capacity: 'Trampilla hidráulica hasta 1.500 kg',
      },
    ],
    specs: [
      { label: 'Volumen mínimo', value: 'Desde 1 palet', detail: 'Sin exigir camión completo' },
      { label: 'Volumen máximo', value: 'Hasta 18-20 palets', detail: 'O hasta 10-12 metros lineales' },
      { label: 'Tiempos de tránsito', value: '48 h - 72 h península', detail: '3 - 5 días principales capitales UE' },
      { label: 'Tasación', value: 'Por palet o metro lineal (LDM)', detail: 'Transparente y sin costes ocultos' },
    ],
    permits: [
      {
        title: 'Documentación de consolidación y trazabilidad',
        description: 'Control de bultos por etiqueta y albarán de entrega con número de seguimiento.',
      },
      {
        title: 'Gestión aduanera en envíos extracomunitarios',
        description: 'Documentación CMR y coordinación con agente de aduanas para envíos a Reino Unido y Suiza.',
      },
    ],
    process: [
      { step: '01', title: 'Presupuesto por huecos o LDM', description: 'Calculamos el coste exacto en función de las medidas, peso y si la carga es remontable.' },
      { step: '02', title: 'Recogida con vehículo adecuado', description: 'Si no tienes muelle de carga, enviamos un vehículo con trampilla elevadora y transpaleta.' },
      { step: '03', title: 'Consolidación en ruta directa', description: 'Agrupamos tu mercancía con cargas compatibles para maximizar la eficiencia.' },
      { step: '04', title: 'Entrega en destino con aviso previo', description: 'Coordinamos la llegada con el receptor para evitar esperas y dobles viajes.' },
    ],
    coverage: {
      national: 'Conexión entre todas las comunidades autónomas peninsulares y Baleares.',
      international: 'Alemania, Francia, Italia, Países Bajos, Bélgica, Portugal y Reino Unido.',
    },
    faqs: [
      {
        q: '¿Cómo se calcula el presupuesto de un envío de grupaje?',
        a: 'El presupuesto se calcula según el número de palets, sus medidas (largo, ancho y alto), el peso total y si el palet es remontable (se puede poner otro encima) o no remontable (se tasa por metros de suelo ocupados).',
      },
      {
        q: '¿Mi mercancía viaja segura si va con la de otros clientes?',
        a: 'Absolutamente. Seleccionamos cargas compatibles, aseguramos el trincaje con barras y cinchas separadoras, y cada envío cuenta con nuestra póliza adicional de hasta 150.000 € de serie.',
      },
      {
        q: '¿Qué pasa si en destino no tienen muelle de carga?',
        a: 'Nos lo indicas al solicitar el presupuesto y asignamos para la entrega un camión dotado de plataforma elevadora y transpaleta.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1708809046391-cf7d9e91b4e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    finalCta: {
      title: 'Paga solo por el espacio que necesitas',
      description: 'Indica número de palets, medidas y ruta. Te preparamos un presupuesto ajustado a tu carga real.',
      quoteButtonText: 'Pedir presupuesto',
    },
  },
  {
    id: 'transporte-urgente',
    slug: 'transporte-urgente',
    name: 'Transporte urgente',
    number: '05',
    categoryTag: 'Servicio express y crítico',
    heroTitle: 'Transporte urgente de mercancías dedicado para empresas',
    valueProp: 'Cuando una línea de producción está en riesgo o un cliente exige entrega prioritaria: vehículo dedicado exclusivo, recogida ágil y viaje directo sin escalas.',
    shortDesc: 'Recogida y entrega en plazos prioritarios cuando tu producción no admite esperas. Horario de atención de lunes a viernes de 8:00 a 19:00 en España y Europa.',
    benefits: [
      'Posicionamiento prioritario de vehículo en los principales nudos industriales.',
      'Vehículo dedicado punto a punto sin paradas intermedias.',
      'Línea telefónica directa con tu gestor único asignado durante todo el servicio.',
    ],
    cargoTypes: [
      {
        title: 'Paradas de línea de automoción o fábrica',
        description: 'Piezas de recambio urgentes, troqueles, moldes o microchips que evitan penalizaciones por parada de planta.',
        items: ['Componentes de automoción urgentes', 'Robótica y cuadros de control', 'Repuestos de maquinaria crítica'],
      },
      {
        title: 'Piezas críticas y suministros clave',
        description: 'Válvulas, bombas de presión, motores eléctricos y elementos de recambio para paradas de línea o mantenimiento crítico.',
        items: ['Bombas y motores de recambio', 'Material aeronáutico y naval', 'Piezas de sustitución de emergencia'],
      },
      {
        title: 'Muestras, homologaciones y prototipos',
        description: 'Envío prioritario de prototipos para pruebas en laboratorio, ferias o certificaciones técnicas inminentes.',
        items: ['Prototipos industriales', 'Muestras técnicas para clientes', 'Lotes de homologación urgente'],
      },
    ],
    vehicles: [
      {
        name: 'Furgoneta carrozada express',
        description: 'Ágil y exenta de restricciones de tacógrafo para 2 conductores si el trayecto lo requiere.',
        capacity: 'Hasta 1.200 kg / 4-6 europalets',
      },
      {
        name: 'Rígido express de 2 ejes',
        description: 'Para cargas urgentes de mediano tonelaje con gran volumen y trampilla elevadora.',
        capacity: 'Hasta 5.000 kg / 14-16 palets',
      },
      {
        name: 'Trailer express con doble conductor',
        description: 'El camión no para salvo para repostar: rotación de 2 choferes para cruzar Europa en tiempo récord.',
        capacity: 'Hasta 24.000 kg en ruta continua',
      },
    ],
    specs: [
      { label: 'Propuesta por correo', value: '< 4 horas', detail: 'Con tres opciones de servicio' },
      { label: 'Modalidad de viaje', value: 'Punto a punto directo', detail: 'Sin transbordos ni almacenes' },
      { label: 'Tripulación', value: 'Doble conductor disponible', detail: 'Para tránsitos continuos día y noche' },
      { label: 'Atención operativa', value: 'L-V 8-19h', detail: 'Línea telefónica directa' },
    ],
    permits: [
      {
        title: 'Coordinación directa de accesos y aduanas',
        description: 'Preaviso a muelles y trámites aduaneros a través de agente de aduanas para evitar esperas en fronteras.',
      },
    ],
    process: [
      { step: '01', title: 'Contacto directo y propuesta ágil', description: 'Llamas al 674346912 o completas el formulario. Te enviamos propuesta por correo con tres opciones en menos de 4 horas.' },
      { step: '02', title: 'Posicionamiento del vehículo', description: 'Activamos el transportista más adecuado a tu código postal para cargar según tus necesidades.' },
      { step: '03', title: 'Viaje directo sin pausas', description: 'Tránsito directo por la ruta óptima con coordinación continua de tu gestor.' },
      { step: '04', title: 'Entrega y confirmación', description: 'Te confirmamos la entrega con albarán firmado por correo electrónico.' },
    ],
    coverage: {
      national: 'Cualquier punto de España peninsular con tránsito prioritario dedicado.',
      international: 'Conexión express directa con Francia, Alemania, Portugal, Italia y Reino Unido.',
    },
    faqs: [
      {
        q: '¿Con qué rapidez podéis recoger una carga urgente?',
        a: 'En las principales zonas industriales coordinamos el vehículo adecuado con la mayor celeridad operativa.',
      },
      {
        q: '¿Cuál es el horario de atención para transporte urgente?',
        a: 'Disponemos de atención telefónica directa de lunes a viernes de 8:00 a 19:00 h para atender tus transportes prioritarios.',
      },
      {
        q: '¿Cómo garantizáis que el envío no sufre retrasos en viajes largos?',
        a: 'Para trayectos que exceden los límites de conducción de un solo chófer, asignamos vehículos con doble conductor (tripulación doble), lo que permite que el vehículo ruede sin interrupción.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1697698532634-ea59b636ccea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    finalCta: {
      title: 'Cuéntanos tu ruta',
      description: 'Origen, destino, carga y plazo. Te enviamos propuesta por correo con tres opciones (Básico, Estándar y Premium) en menos de 4 horas.',
      quoteButtonText: 'Pedir presupuesto',
    },
  },
  {
    id: 'transporte-para-eventos',
    slug: 'transporte-para-eventos',
    name: 'Transporte para eventos y ferias',
    number: '06',
    categoryTag: 'Logística ferial y congresos',
    heroTitle: 'Transporte para ferias, congresos y eventos: entrega puntual en ventana estricta',
    valueProp: 'Stands, maquinaria expositiva, iluminación y material audiovisual entregados en recintos feriales con slot horario garantizado y retorno programado.',
    shortDesc: 'Stands, estructuras y equipos con ventana de entrega fija, acceso a pabellones feriales y posibilidad de almacenaje de embalajes vacíos.',
    benefits: [
      'Cumplimiento riguroso del slot de montaje asignado por la organización ferial.',
      'Gestión de pases de acceso a recintos como IFEMA, Fira de Barcelona o centros europeos.',
      'Logística inversa: retorno del stand o traslado directo al siguiente evento.',
    ],
    cargoTypes: [
      {
        title: 'Stands modulares y carpintería',
        description: 'Paneles expositivos, tarimas, suelos técnicos, mostradores, mobiliario de diseño y cartelería retroiluminada.',
        items: ['Estructuras modulares de aluminio', 'Mobiliario ferial', 'Lonas y gráficas de gran formato'],
      },
      {
        title: 'Equipamiento audiovisual y técnico',
        description: 'Pantallas LED de gran formato en flight-cases, torres de sonido, focos de iluminación y cableado técnico.',
        items: ['Flight cases con pantallas y proyectores', 'Estructuras truss de iluminación', 'Racks de sonido'],
      },
      {
        title: 'Maquinaria y productos de demostración',
        description: 'Equipos industriales expuestos en feria que requieren descarga delicada con trampilla o carretilla.',
        items: ['Maquinaria en funcionamiento para demo', 'Vehículos de exhibición', 'Muestrarios de producto pesado'],
      },
    ],
    vehicles: [
      {
        name: 'Camión con trampilla elevadora y transpaleta',
        description: 'Imprescindible para pabellones feriales donde no hay muelles convencionales y se descarga a cota cero.',
        capacity: 'Trampilla hasta 2.000 kg',
      },
      {
        name: 'Tautliner ferial con apertura total',
        description: 'Para descargas laterales rápidas en las calles exteriores de los recintos de ferias.',
        capacity: 'Acceso lateral de 13,60 m',
      },
    ],
    specs: [
      { label: 'Ventana de entrega', value: 'Slot de 1 hora exacta', detail: 'Alineado con el horario ferial' },
      { label: 'Recintos atendidos', value: 'IFEMA, Fira, BEC, etc.', detail: 'Y centros feriales de toda Europa' },
      { label: 'Almacenaje de vacíos', value: 'Disponible bajo petición', detail: 'Guarda de cajas durante la feria' },
      { label: 'Logística de retorno', value: 'Retorno o salto a otra feria', detail: 'Recogida al cierre del evento' },
    ],
    permits: [
      {
        title: 'Acreditaciones feriales y pases de muelle',
        description: 'Gestión previa de matrículas y conductores ante la organización ferial para evitar colas de espera.',
      },
    ],
    process: [
      { step: '01', title: 'Planificación de slots de montaje', description: 'Coordinamos con tu decorador o equipo ferial el día y la hora exacta fijada por la feria.' },
      { step: '02', title: 'Carga y estiba protegida', description: 'Fijación de flight cases y paneles con mantas protectoras y barras amortiguadoras.' },
      { step: '03', title: 'Descarga en pie de stand o pabellón', description: 'Entrada al pabellón y descarga directa en el espacio asignado.' },
      { step: '04', title: 'Desmontaje y repatriación', description: 'Al terminar la feria, el camión está listo para cargar el stand y devolverlo a almacén o enviarlo a la próxima cita.' },
    ],
    coverage: {
      national: 'IFEMA Madrid, Fira Barcelona, BEC Bilbao, Feria Valencia, FIBES Sevilla y todos los palacios de congresos.',
      international: 'Messe Frankfurt, Porte de Versailles París, Fiera Milano, Messe Düsseldorf, RAI Ámsterdam y Birmingham NEC.',
    },
    faqs: [
      {
        q: '¿Podéis cumplir con los slots horarios estrictos que fijan las ferias?',
        a: 'Sí, es nuestra especialidad en este servicio. Programamos la llegada con margen para superar el control de acreditaciones y descargar en el slot de tiempo exacto asignado por el recinto.',
      },
      {
        q: '¿Qué ocurre con los embalajes vacíos y flight-cases durante los días de feria?',
        a: 'Podemos gestionar la custodia o almacenaje temporal de embalajes y jaulas mientras dura el evento para volver a traerlos el día del desmontaje.',
      },
      {
        q: '¿Podéis hacer una gira de eventos consecutiva (roadshow)?',
        a: 'Sí, coordinamos transportes itinerantes entre diferentes ciudades y países para stands corporativos o exposiciones móviles.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1601467995997-ac1ae9a8fff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    finalCta: {
      title: 'Logística puntual para tu evento',
      description: 'Recinto, fechas y volumen del stand. Nos adaptamos a las ventanas de montaje y desmontaje sin demoras.',
      quoteButtonText: 'Pedir presupuesto',
    },
  },
  {
    id: 'cargas-pesadas',
    slug: 'cargas-pesadas',
    name: 'Cargas pesadas',
    number: '07',
    categoryTag: 'Gran tonelaje y siderurgia',
    heroTitle: 'Transporte de cargas pesadas: bobinas, acero y mercancía de gran tonelaje',
    valueProp: 'Capacidad técnica para el traslado de mercancías con alto peso por unidad. Vehículos reforzados con portabobinas, plataformas de alta resistencia y sujeción certificada.',
    shortDesc: 'Bobinas de acero, perfilería pesada, moldes y piezas de fundición con vehículos homologados y cálculo minucioso de reparto de masas.',
    benefits: [
      'Remolques equipados con fosa portabobinas homologada.',
      'Sistemas de trincaje de cadenas y tensores certificados.',
      'Cumplimiento riguroso de límites de peso por eje para evitar sanciones.',
    ],
    cargoTypes: [
      {
        title: 'Sector siderúrgico y metalúrgico',
        description: 'Bobinas de chapa de acero laminado en caliente y frío, paquetes de chapa, flejes y lingotes de fundición.',
        items: ['Bobinas de acero de 15 a 25 T', 'Paquetes de chapa gruesa', 'Barras y perfiles pesados'],
      },
      {
        title: 'Piezas de fundición y forja pesada',
        description: 'Bloques de motor, matrices de estampación de gran tonelaje, bancadas de prensa y engranajes gigantes.',
        items: ['Moldes de inyección de más de 10 T', 'Bloques forjados macizos', 'Ejes de transmisión pesados'],
      },
      {
        title: 'Material de cantera y prefabricados',
        description: 'Bloques de mármol, granito, losas sobredimensionadas y elementos de piedra natural.',
        items: ['Bloques de piedra natural', 'Contrapesos de grúa', 'Prefabricados macizos'],
      },
    ],
    vehicles: [
      {
        name: 'Semirremolques con fosa portabobinas (Coil-Well)',
        description: 'Canal central reforzado en el suelo del remolque con cuñas de bloqueo para transportar bobinas cilíndricas con máxima estabilidad.',
        capacity: 'Fosas de 7 a 9 metros de longitud',
      },
      {
        name: 'Plataformas abiertas de alta resistencia',
        description: 'Chasis sobredimensionado con suelo de madera dura y anillas de amarre de 10.000 daN.',
        capacity: 'Carga concentrada de gran tonelaje',
      },
    ],
    specs: [
      { label: 'Peso máximo estándar', value: 'Hasta 24.000 kg', detail: 'En vehículos de 40 T MMA' },
      { label: 'Autorización especial de circulación', value: 'Hasta 44 T - 60 T', detail: 'Con remolques de 3 o más ejes' },
      { label: 'Póliza incluida', value: 'Hasta 150.000 €', detail: 'Sobre seguro de ley' },
      { label: 'Equipamiento', value: 'Cadenas grado 80 / alfombras antideslizantes', detail: 'Trincaje técnico certificado' },
    ],
    permits: [
      {
        title: 'Certificados de estiba EN 12195-1',
        description: 'Cálculo de fuerzas de rozamiento, número de amarres y uso obligatorio de esteras de caucho antideslizante.',
      },
    ],
    process: [
      { step: '01', title: 'Cálculo de carga por eje', description: 'Simulamos la posición exacta de la carga pesada sobre el chasis para no sobrecargar ningún eje motriz ni de arrastre.' },
      { step: '02', title: 'Inspección de elementos de trincaje', description: 'Revisión de tensores, cadenas y alfombrillas antideslizantes antes de iniciar la marcha.' },
      { step: '03', title: 'Tránsito vigilado', description: 'Parada periódica de comprobación de tensión de amarres a los 20-50 km de la salida.' },
      { step: '04', title: 'Descarga con grúa o puente', description: 'Apertura de techo o lonas para desestiba segura en destino.' },
    ],
    coverage: {
      national: 'Corredores industriales del acero (Asturias, País Vasco, Cataluña, Valencia, Madrid, Sevilla).',
      international: 'Alemania (Rhine-Ruhr), Francia, Bélgica, Italia del Norte y Portugal.',
    },
    faqs: [
      {
        q: '¿Qué es una fosa portabobinas y por qué es necesaria?',
        a: 'Es una hendidura longitudinal reforzada en el chasis del semirremolque donde se asienta la bobina de acero. Permite bajar el centro de gravedad e impide que la bobina ruede, garantizando la seguridad en frenadas o curvas.',
      },
      {
        q: '¿Cómo se asegura una carga concentrada de mucho peso?',
        a: 'Mediante alfombrillas antideslizantes de alto coeficiente de fricción, cadenas de acero de alta resistencia con tensores de carraca y protecciones angulares homologadas según la norma EN 12195.',
      },
      {
        q: '¿Tenéis experiencia en rutas regulares de siderurgia?',
        a: 'Sí, gestionamos transporte regular de bobinas y perfilería para importantes clientes industriales del acero como Alfonso Rico (caso de éxito real en nuestra web).',
      },
    ],
    image: 'https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    finalCta: {
      title: 'Transporte seguro de cargas pesadas',
      description: 'Indica tonelaje, origen y destino. Gestionamos el vehículo adecuado con estiba y sujeción certificadas.',
      quoteButtonText: 'Pedir presupuesto',
    },
  },
  {
    id: 'transporte-de-gran-volumen',
    slug: 'transporte-de-gran-volumen',
    name: 'Transporte de gran volumen',
    number: '08',
    categoryTag: 'Cargas ligeras y volumétricas',
    heroTitle: 'Transporte de gran volumen: hasta 100 m³ útiles para mercancías ligeras',
    valueProp: 'Soluciones con trailers Mega y trenes de carretera para mercancías que ocupan mucho espacio cúbico pero tienen un peso moderado. Máxima optimización de costes por metro cúbico.',
    shortDesc: 'Mercancía voluminosa que necesita vehículos de gran capacidad cúbica (3 metros de altura interior útil) y rutas optimizadas.',
    benefits: [
      'Hasta 100 m³ útiles de capacidad en un solo remolque.',
      '3,00 metros de altura interior libre de paso de carga.',
      'Techos elevables hidráulicamente para facilitar la carga con carretilla.',
    ],
    cargoTypes: [
      {
        title: 'Envase, embalaje y cartonería',
        description: 'Bobinas de plástico film, cajas de cartón montadas o plegadas, botellas vacías, bidones plásticos y latas.',
        items: ['Palets de cartón ondulado', 'Envases plásticos huecos', 'Bobinas de polietileno expandido'],
      },
      {
        title: 'Aislamientos y automoción ligera',
        description: 'Lana de roca, paneles de poliestireno (EPS/XPS), piezas de plástico para automoción y asientos montados.',
        items: ['Paneles aislantes térmicos', 'Conductos de ventilación ligeros', 'Paragolpes y piezas plásticas de coche'],
      },
      {
        title: 'Muebles, colchonería y textil',
        description: 'Mobiliario auxiliar, colchones prensados o sin prensar, gomaespuma y pacas textiles.',
        items: ['Palets de colchones', 'Muebles kit de gran cubicaje', 'Fardos de espuma y fibra textil'],
      },
    ],
    vehicles: [
      {
        name: 'Semirremolque Megatrailer (Mega)',
        description: 'Plataforma rebajada sobre neumáticos de perfil bajo que logra una altura útil interior de 3,00 metros constantes en toda la longitud.',
        capacity: '100 m³ / 33 europalets de hasta 3 m de alto',
      },
      {
        name: 'Tren de carretera gran volumen (Jumbo)',
        description: 'Camión rígido con remolque que alcanza hasta 115-120 m³ de volumen total.',
        capacity: 'Hasta 115-120 m³ de capacidad',
      },
    ],
    specs: [
      { label: 'Volumen útil', value: 'Hasta 100 m³ (Mega)', detail: '115 m³ en tren de carretera' },
      { label: 'Altura interior libre', value: '3,00 metros netos', detail: 'De suelo a techo' },
      { label: 'Techo elevable', value: 'Elevación hidráulica +30 cm', detail: 'Para introducir palets altos' },
      { label: 'Póliza de serie', value: 'Hasta 150.000 €', detail: 'En cada transporte' },
    ],
    permits: [
      {
        title: 'Homologación europea de vehículos Mega',
        description: 'Circulación estándar sin requerir permiso especial por altura en la red principal europea.',
      },
    ],
    process: [
      { step: '01', title: 'Estudio de cubicaje y apilabilidad', description: 'Calculamos cuántos metros cúbicos y alturas de palet caben en un Mega para reducir el coste unitario por pieza.' },
      { step: '02', title: 'Carga con techo elevado', description: 'Se eleva el techo unos centímetros para permitir la entrada limpia del último palet de 3 metros de altura.' },
      { step: '03', title: 'Tránsito directo protegido', description: 'Lonas reforzadas que impiden cualquier deformación lateral por viento.' },
      { step: '04', title: 'Descarga ágil en destino', description: 'Apertura de cortinas correderas en menos de 5 minutos.' },
    ],
    coverage: {
      national: 'Toda España peninsular con conexión constante entre polos productivos.',
      international: 'Corredores hacia Francia, Alemania, Portugal, Bélgica, Reino Unido e Italia.',
    },
    faqs: [
      {
        q: '¿Cuál es la diferencia entre un camión estándar y un Megatrailer?',
        a: 'Un trailer estándar tiene unos 2,65-2,70 metros de altura interior y unos 85-90 m³. Un Megatrailer cuenta con una plataforma rebajada que ofrece 3,00 metros de altura interior libre y hasta 100 m³ de volumen, permitiendo meter palets más altos o apilar una fila más.',
      },
      {
        q: '¿Se puede cargar mercancía pesada en un camión de gran volumen?',
        a: 'Sí, un Megatrailer puede transportar hasta 24 toneladas como cualquier trailer. Sin embargo, su rentabilidad destaca cuando la carga ocupa mucho espacio y su peso es moderado.',
      },
      {
        q: '¿El techo se puede abrir para cargar por arriba?',
        a: 'Sí, disponen de techo corredizo y elevable para cargar con puente grúa o facilitar la entrada con carretillas elevadoras.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1618582948377-cd7eb0e8cb14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    finalCta: {
      title: 'Cuéntanos tu ruta',
      description: 'Origen, destino, carga y plazo. Te proponemos la opción que mejor encaje con tu envío.',
      quoteButtonText: 'Pedir presupuesto',
    },
  },
  {
    id: 'transporte-de-palets',
    slug: 'transporte-de-palets',
    name: 'Transporte de palets',
    number: '09',
    categoryTag: 'Paletería B2B nacional y europea',
    heroTitle: 'Transporte de palets para empresas: rapidez, trazabilidad y máxima seguridad',
    valueProp: 'Servicio especializado en mercancía paletizada para fabricantes y distribuidores. Europalets, palets industriales y medidas no estándar con plazos cerrados.',
    shortDesc: 'Paletería nacional e internacional con coordinación dedicada desde la recogida en almacén hasta la entrega en destino.',
    benefits: [
      'Gestión de cualquier formato: europalets (120x80), americanos (120x100) y medidas especiales.',
      'Plazos habituales de 24 a 72 horas con aviso previo al receptor.',
      'Póliza adicional hasta 150.000 € y trazabilidad por albarán digital.',
    ],
    cargoTypes: [
      {
        title: 'Europalets estándar (EUR / EPAL)',
        description: 'La medida universal europea (1.200 x 800 mm) para distribución alimentaria, manufactura y comercio.',
        items: ['Palets estándar hasta 1.000 kg/ud', 'Palets remontables con carga plana', 'Cajas maestras retractiladas'],
      },
      {
        title: 'Palets industriales o americanos',
        description: 'Medida 1.200 x 1.000 mm habitual en industria química, automoción y gran consumo.',
        items: ['Palets químicos CP', 'Palets americanos hasta 1.200 kg', 'Palets perimetrales de plástico'],
      },
      {
        title: 'Palets sobredimensionados o no estándar',
        description: 'Palets de 2 metros de largo, medios palets (display) o bases especiales de carpintería y perfiles.',
        items: ['Medios palets (800x600 mm)', 'Palets dobles de 2.400 mm', 'Palets a medida para maquinaria ligera'],
      },
    ],
    vehicles: [
      {
        name: 'Camión con plataforma elevadora y transpaleta',
        description: 'Para descargas a pie de calle o en almacenes sin muelle.',
        capacity: 'Plataforma hasta 1.500 kg',
      },
      {
        name: 'Tráiler Tautliner de 13,60 metros',
        description: 'Para traslados de 10 a 33 europalets en una sola expedición.',
        capacity: 'Hasta 33 Europalets / 24 T',
      },
    ],
    specs: [
      { label: 'Formatos admitidos', value: '120x80, 120x100 y especiales', detail: 'Desde 1 palet hasta lotes completos' },
      { label: 'Peso por palet', value: 'Desde 50 kg hasta 1.500 kg', detail: 'Adaptado a la resistencia del palet' },
      { label: 'Tiempos de tránsito', value: '24 h - 48 h península', detail: '48 h - 96 h Europa' },
      { label: 'Póliza incluida', value: 'Hasta 150.000 €', detail: 'De serie en cada envío' },
    ],
    permits: [
      {
        title: 'Control de precinto y firma digitalizada',
        description: 'Albarán sellado y firmado disponible de inmediato tras la entrega en destino.',
      },
    ],
    process: [
      { step: '01', title: 'Solicitud con medidas y peso', description: 'Nos indicas cuántos palets tienes, sus medidas y el peso total. Te enviamos propuesta por correo en menos de 4 horas.' },
      { step: '02', title: 'Recogida coordinada', description: 'Pactamos la ventana de carga en tu muelle o con camión con trampilla si es necesario.' },
      { step: '03', title: 'Tránsito coordinado', description: 'Comunicación continua y gestión directa por tu gestor único asignado.' },
      { step: '04', title: 'Entrega y albarán conformado', description: 'Descarga puntual y recepción firmada por el destinatario.' },
    ],
    coverage: {
      national: 'Toda España: península, Baleares y Canarias con enlace marítimo garantizado.',
      international: 'Envíos regulares a Francia, Alemania, Reino Unido, Italia, Países Bajos y resto de Europa.',
    },
    faqs: [
      {
        q: '¿Cómo debe venir preparado el palet para su transporte?',
        a: 'La mercancía debe estar firmemente retractilada con film plástico, sin bultos que sobresalgan del perímetro del palet para evitar roturas y con una etiqueta visible con la dirección de entrega.',
      },
      {
        q: '¿Hacéis intercambio o devolución de palets europeos?',
        a: 'Podemos gestionar el retorno o intercambio de palets europeos homologados siempre que se acuerde previamente en las condiciones del porte.',
      },
      {
        q: '¿Puedo enviar un palet que mida más de 120x80 cm?',
        a: 'Sí, transportamos habitualmente palets americanos de 120x100 cm y palets de medidas especiales de hasta 2 metros o más de longitud.',
      },
    ],
    image: 'https://images.unsplash.com/photo-1573057493754-868e061af215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    finalCta: {
      title: 'Envío de palets con presupuesto personalizado',
      description: 'Número de palets, medidas y trayecto. Tu gestor asignado te envía una propuesta por correo con tres opciones (Básico, Estándar y Premium) en menos de 4 horas.',
      quoteButtonText: 'Pedir presupuesto',
    },
  },
];
