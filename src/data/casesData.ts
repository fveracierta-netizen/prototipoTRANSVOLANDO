export interface CaseStudy {
  id: string;
  client: string;
  company: string;
  sector: string;
  title: string;
  challenge: string;
  solution: string;
  stats: { value: string; label: string }[];
  quote: string;
  image: string;
  serviceSlug: string;
  serviceName: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  verified: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'alfonso-rico',
    client: 'Alfonso Rico',
    company: 'Logística Siderometalúrgica',
    sector: 'Acero y Metalurgia',
    title: 'Cómo Alfonso Rico optimizó el transporte regular de bobinas de acero y perfilería pesada',
    challenge:
      'Alfonso Rico necesitaba un partner logístico capaz de gestionar el envío regular de bobinas de chapa y perfiles de gran tonelaje con semirremolques equipados con fosa portabobinas homologada, anclajes de alta resistencia y tiempos de carga estrictos.',
    solution:
      'Asignación de un gestor único con acceso a semirremolques tauliner portabobinas certificados y control de peso por eje previo a la expedición en cada planta.',
    stats: [
      { value: 'Fosa portabobinas', label: 'Semirremolques certificados' },
      { value: 'Control de peso', label: 'Verificación técnica por eje' },
      { value: 'Gestor único', label: 'Dedicado en cada expedición' },
    ],
    quote:
      'Con Transvolando nos olvidamos de la incertidumbre en los transportes pesados. Tenemos un contacto directo que resuelve cualquier necesidad en minutos con vehículos impecables.',
    image:
      'https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    serviceSlug: 'cargas-pesadas',
    serviceName: 'Cargas pesadas',
  },
  {
    id: 'melissa-gomez',
    client: 'Melissa Gómez',
    company: 'Taller de Maquinaria Industrial',
    sector: 'Industria y Maquinaria Pesada',
    title: 'Transporte urgente y coordinado de maquinaria industrial crítica sin parar producción',
    challenge:
      'Melissa Gómez, al frente de un taller de maquinaria pesada, requería el traslado complejo y urgente de una máquina industrial de grandes dimensiones con tiempos de entrega milimétricos para evitar paradas en planta de cliente.',
    solution:
      'Coordinación directa de góndola extensible con rampas de carga hidráulica, tramitación de autorizaciones de circulación y supervisión personalizada de estiba.',
    stats: [
      { value: 'Góndola extensible', label: 'Rampas hidráulicas de carga' },
      { value: 'Autorizaciones', label: 'Tramitación previa de permisos' },
      { value: 'Supervisión directa', label: 'Control continuo de estiba' },
    ],
    quote:
      'La implicación del gestor asignado fue determinante: resolvieron la ruta y los permisos en tiempo récord. Su seriedad nos dio total tranquilidad.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    serviceSlug: 'transporte-de-maquinaria',
    serviceName: 'Transporte de maquinaria',
  },
  {
    id: 'dolores-espasandin',
    client: 'Dolores Espasandín Pérez',
    company: 'Fabricación y Montaje de Hornos',
    sector: 'Construcción y Bienes de Equipo',
    title: 'Optimización y fiabilidad con grupaje consolidado para hornos industriales',
    challenge:
      'Dolores Espasandín Pérez requería distribuir periódicamente piezas y componentes de hornos industriales de diversos tamaños y características a múltiples destinos en España y Europa sin asumir el sobrecoste de fletes completos.',
    solution:
      'Planificación de rutas de grupaje industrial optimizado, asegurando el cuidado extremo en el trincaje de cada componente y póliza adicional de serie de 150.000 €.',
    stats: [
      { value: 'Grupaje consolidado', label: 'Optimización de espacio y flete' },
      { value: 'Trincaje especializado', label: 'Protección de piezas delicadas' },
      { value: 'Hasta 150.000 €', label: 'Póliza adicional por expedición' },
    ],
    quote:
      'Excelente profesionalidad, rapidez y trato impecable. Llevamos varios transportes con ellos y la fiabilidad de los envíos de grupaje es insuperable.',
    image:
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    serviceSlug: 'grupaje',
    serviceName: 'Grupaje industrial',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Alfonso Rico',
    role: 'Responsable de Logística y Tráfico',
    company: 'Sector Siderúrgico y Estructuras Metálicas',
    rating: 5,
    comment:
      'Servicio muy serio y competente tanto en nacional como en internacional de mercancías. Muy recomendables por la rapidez de respuesta y el cumplimiento estricto de los horarios acordados.',
    verified: 'Cliente corporativo verificado',
  },
  {
    name: 'Dolores Espasandín Pérez',
    role: 'Directora de Operaciones',
    company: 'Fabricación de Hornos y Bienes Industriales',
    rating: 5,
    comment:
      'Excelente profesionalidad, rapidez y trato impecable. Llevamos varios transportes con ellos y la fiabilidad de las entregas y el asesoramiento del gestor técnico son de diez.',
    verified: 'Cliente corporativo verificado',
  },
  {
    name: 'Melissa Gómez',
    role: 'Jefa de Taller y Mantenimiento',
    company: 'Maquinaria de Obras Públicas e Industrial',
    rating: 5,
    comment:
      'Coordinaron el transporte de una máquina pesada con autorizaciones en un tiempo récord. Trato cercano, sin contestadores y un gestor que responde al segundo.',
    verified: 'Cliente corporativo verificado',
  },
  {
    name: 'Javier Martínez',
    role: 'Coordinador de Suministros y Obra',
    company: 'Construcción y Materiales Prefabricados',
    rating: 5,
    comment:
      'Tener un gestor único te ahorra horas de teléfono al día. Saben qué vehículo necesitas, conocen los accesos a muelles y la propuesta por correo llega detallada con tres opciones claras.',
    verified: 'Cliente corporativo verificado',
  },
];
