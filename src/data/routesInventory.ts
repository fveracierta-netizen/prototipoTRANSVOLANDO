/**
 * Inventory of Canonical Routes, Observed Production Aliases, and Server 301 Rules
 *
 * Transvolando B2B Platform
 */

export interface CanonicalRoute {
  path: string;
  name: string;
  type: 'core' | 'service' | 'article' | 'utility';
  h1: string;
  canonicalUrl: string;
}

export interface RouteAlias {
  observedPath: string;
  targetCanonical: string;
  status: 'functional_in_spa' | 'proposed_server_301';
  rationale: string;
}

export interface ExcludedRoute {
  path: string;
  treatment: string;
  notes: string;
}

export const CANONICAL_ROUTES_INVENTORY: CanonicalRoute[] = [
  {
    path: '/',
    name: 'Inicio (Home)',
    type: 'core',
    h1: 'Tu transporte, con presupuesto personalizado',
    canonicalUrl: 'https://transvolando.com/',
  },
  {
    path: '/transporte-internacional/',
    name: 'Transporte Internacional',
    type: 'core',
    h1: 'Transporte internacional',
    canonicalUrl: 'https://transvolando.com/transporte-internacional/',
  },
  {
    path: '/casos/',
    name: 'Casos de Éxito',
    type: 'core',
    h1: 'Casos de éxito en transporte industrial y logística pesada',
    canonicalUrl: 'https://transvolando.com/casos/',
  },
  {
    path: '/presupuesto/',
    name: 'Pedir Presupuesto',
    type: 'core',
    h1: '¿De dónde a dónde?',
    canonicalUrl: 'https://transvolando.com/presupuesto/',
  },
  {
    path: '/contacto/',
    name: 'Contacto',
    type: 'core',
    h1: 'Hablemos de tu transporte',
    canonicalUrl: 'https://transvolando.com/contacto/',
  },
  {
    path: '/servicios/',
    name: 'Listado de Servicios',
    type: 'core',
    h1: 'Servicios de transporte terrestre de mercancías',
    canonicalUrl: 'https://transvolando.com/servicios/',
  },
  {
    path: '/blog/',
    name: 'Blog de Transporte',
    type: 'core',
    h1: 'Guías y recursos de transporte terrestre para empresas',
    canonicalUrl: 'https://transvolando.com/blog/',
  },
  // 9 Canonical Services
  {
    path: '/transporte-de-maquinaria/',
    name: 'Transporte de maquinaria',
    type: 'service',
    h1: 'Transporte de maquinaria industrial',
    canonicalUrl: 'https://transvolando.com/transporte-de-maquinaria/',
  },
  {
    path: '/transportes-especiales/',
    name: 'Transportes especiales',
    type: 'service',
    h1: 'Transportes especiales por carretera',
    canonicalUrl: 'https://transvolando.com/transportes-especiales/',
  },
  {
    path: '/cargas-completas/',
    name: 'Cargas completas (FTL)',
    type: 'service',
    h1: 'Transporte de cargas completas por carretera',
    canonicalUrl: 'https://transvolando.com/cargas-completas/',
  },
  {
    path: '/grupaje/',
    name: 'Grupaje industrial (LTL)',
    type: 'service',
    h1: 'Transporte en grupaje de mercancías',
    canonicalUrl: 'https://transvolando.com/grupaje/',
  },
  {
    path: '/transporte-urgente/',
    name: 'Transporte urgente',
    type: 'service',
    h1: 'Transporte urgente de mercancías',
    canonicalUrl: 'https://transvolando.com/transporte-urgente/',
  },
  {
    path: '/transporte-para-eventos/',
    name: 'Transporte para eventos',
    type: 'service',
    h1: 'Transporte para eventos y montajes',
    canonicalUrl: 'https://transvolando.com/transporte-para-eventos/',
  },
  {
    path: '/cargas-pesadas/',
    name: 'Cargas pesadas',
    type: 'service',
    h1: 'Transporte de cargas pesadas',
    canonicalUrl: 'https://transvolando.com/cargas-pesadas/',
  },
  {
    path: '/transporte-de-gran-volumen/',
    name: 'Transporte de gran volumen',
    type: 'service',
    h1: 'Transporte de gran volumen',
    canonicalUrl: 'https://transvolando.com/transporte-de-gran-volumen/',
  },
  {
    path: '/transporte-de-palets/',
    name: 'Transporte de palets',
    type: 'service',
    h1: 'Transporte de palets por carretera',
    canonicalUrl: 'https://transvolando.com/transporte-de-palets/',
  },
  // 4 Canonical Articles
  {
    path: '/transporte-de-palets-a-europa/',
    name: 'Artículo: Palets a Europa',
    type: 'article',
    h1: 'Transporte de palets a Europa: opciones, modalidades y plazos para empresas españolas',
    canonicalUrl: 'https://transvolando.com/transporte-de-palets-a-europa/',
  },
  {
    path: '/como-calcular-el-coste-del-transporte-internacional/',
    name: 'Artículo: Coste Transporte Internacional',
    type: 'article',
    h1: 'Cómo calcular el coste del transporte internacional de mercancías para tu empresa',
    canonicalUrl: 'https://transvolando.com/como-calcular-el-coste-del-transporte-internacional/',
  },
  {
    path: '/ftl-o-grupaje-cuando-conviene-cada-opcion/',
    name: 'Artículo: FTL o Grupaje',
    type: 'article',
    h1: 'Carga completa o grupaje: cuándo le conviene cada opción a tu empresa',
    canonicalUrl: 'https://transvolando.com/ftl-o-grupaje-cuando-conviene-cada-opcion/',
  },
  {
    path: '/que-es-el-cubicaje-en-el-transporte/',
    name: 'Artículo: Cubicaje en Transporte',
    type: 'article',
    h1: 'Qué es el cubicaje en el transporte de mercancías y cómo optimizarlo',
    canonicalUrl: 'https://transvolando.com/que-es-el-cubicaje-en-el-transporte/',
  },
];

/**
 * Observed Aliases in transvolando.com with Proposed Server-Side 301 Redirects
 */
export const OBSERVED_ALIASES_AND_301: RouteAlias[] = [
  {
    observedPath: '/transporte-expres/',
    targetCanonical: '/transporte-urgente/',
    status: 'functional_in_spa',
    rationale: 'Alias histórico en WordPress para transporte urgente por carretera.',
  },
  {
    observedPath: '/transporte-gran-volumen/',
    targetCanonical: '/transporte-de-gran-volumen/',
    status: 'functional_in_spa',
    rationale: 'Variante de URL sin preposición observada en indexaciones previas.',
  },
  {
    observedPath: '/transporte-palets/',
    targetCanonical: '/transporte-de-palets/',
    status: 'functional_in_spa',
    rationale: 'Variante sin preposición indexada en Google.',
  },
  {
    observedPath: '/agencia-de-transporte-internacional/',
    targetCanonical: '/transporte-internacional/',
    status: 'functional_in_spa',
    rationale: 'Antigua landing corporativa transvolando.com orientada a internacional.',
  },
  {
    observedPath: '/politica-de-cookies-ue/',
    targetCanonical: '/politica-de-cookies/',
    status: 'functional_in_spa',
    rationale: 'Versión antigua del aviso legal de cookies UE.',
  },
  {
    observedPath: '/preguntas-mas-frecuentes/',
    targetCanonical: '/preguntas-frecuentes/',
    status: 'functional_in_spa',
    rationale: 'Slug alternativo de FAQ enlazado desde pie de página histórico.',
  },
  {
    observedPath: '/casos-de-exito/',
    targetCanonical: '/casos/',
    status: 'functional_in_spa',
    rationale: 'URL original en producción de WordPress transvolando.com.',
  },
];

/**
 * Excluded Routes: preserved without creating dummy content and without redirecting to Home
 */
export const EXCLUDED_ROUTES: ExcludedRoute[] = [
  {
    path: '/directorio/',
    treatment: 'Mantenida fuera del menú principal sin contenido sintético',
    notes: 'Página indexada histórica en WordPress. No se redirige a Home ni se inventa contenido.',
  },
  {
    path: '/servicios-de-transporte-no-incluidos/',
    treatment: 'Mantenida como página informativa negativa',
    notes: 'Exclusión explícita de mudanzas de particulares, paquetería express de sobres y transportes ilegales.',
  },
];

/**
 * Proposed Apache .htaccess 301 Redirect rules for production server deployment
 */
export const PROPOSED_APACHE_301_RULES = `
# ====================================================================
# Transvolando.com - Reglas de Redirección 301 Permanente (Servidor)
# ====================================================================
<IfModule mod_rewrite.c>
  RewriteEngine On

  # Redirecciones 301 individuales observadas
  RewriteRule ^transporte-expres/?$ /transporte-urgente/ [R=301,L]
  RewriteRule ^transporte-gran-volumen/?$ /transporte-de-gran-volumen/ [R=301,L]
  RewriteRule ^transporte-palets/?$ /transporte-de-palets/ [R=301,L]
  RewriteRule ^agencia-de-transporte-internacional/?$ /transporte-internacional/ [R=301,L]
  RewriteRule ^politica-de-cookies-ue/?$ /politica-de-cookies/ [R=301,L]
  RewriteRule ^preguntas-mas-frecuentes/?$ /preguntas-frecuentes/ [R=301,L]
  RewriteRule ^casos-de-exito/?$ /casos/ [R=301,L]
</IfModule>
`;

/**
 * Statement on missing 49 URLs, English version, and legacy blog:
 * DO NOT INVENT: The full catalog of 49 legacy URLs, English translations,
 * and historical blog articles remains strictly PENDING until official source sitemap
 * or database export is provided.
 */
export const ROUTE_AUDIT_PENDING_STATUS = {
  totalDocumentedHere: CANONICAL_ROUTES_INVENTORY.length,
  totalAliasesConfigured: OBSERVED_ALIASES_AND_301.length,
  missingSitemapPending: '49 URLs históricas / versión en inglés / histórico completo de entradas de blog',
  sourceAvailable: false,
  policy: 'Sin inventar datos faltantes ni generar 404 simulados por navegación interna',
};
