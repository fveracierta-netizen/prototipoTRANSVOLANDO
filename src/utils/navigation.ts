import { NavigationPage } from '../types';
import { servicesData } from '../data/servicesData';
import { blogPosts } from '../data/blogData';

export const COMPANY_PHONE = '674346912';
export const COMPANY_PHONE_TEL = 'tel:+34674346912';

/**
 * Returns clean, real URL for any page and slug.
 * All URLs are clean multi-page paths without hashes:
 * - Home: /
 * - Services: /<service-slug>/ (e.g. /transportes-especiales/)
 * - Internacional: /internacional/
 * - Contacto: /contacto/
 * - Presupuesto: /presupuesto/
 * - Blog: /blog/
 * - Articles: /<article-slug>/ (e.g. /que-es-el-cubicaje-en-el-transporte/)
 */
export function getPageUrl(
  page: NavigationPage,
  serviceSlug?: string,
  articleSlug?: string,
  extraParams?: Record<string, string | undefined>
): string {
  let path = '/';

  if (page === 'home') {
    path = '/';
  } else if (page === 'servicios') {
    path = '/servicios/';
  } else if (page === 'service') {
    path = `/${serviceSlug || 'transporte-de-maquinaria'}/`;
  } else if (page === 'internacional') {
    path = '/internacional/';
  } else if (page === 'casos') {
    path = '/casos/';
  } else if (page === 'contacto') {
    path = '/contacto/';
  } else if (page === 'blog') {
    path = '/blog/';
  } else if (page === 'article') {
    path = `/${articleSlug || 'que-es-el-cubicaje-en-el-transporte'}/`;
  } else if (page === 'presupuesto') {
    path = '/presupuesto/';
    const params = new URLSearchParams();
    if (serviceSlug) {
      params.set('servicio', serviceSlug);
    }
    if (extraParams) {
      Object.entries(extraParams).forEach(([k, v]) => {
        if (v && v.trim()) params.set(k, v.trim());
      });
    }
    const qs = params.toString();
    return qs ? `${path}?${qs}` : path;
  }

  if (extraParams) {
    const params = new URLSearchParams();
    Object.entries(extraParams).forEach(([k, v]) => {
      if (v && v.trim()) params.set(k, v.trim());
    });
    const qs = params.toString();
    if (qs) path = `${path}?${qs}`;
  }

  return path;
}

export interface ParsedRoute {
  page: NavigationPage;
  serviceSlug?: string;
  articleSlug?: string;
  origen?: string;
  destino?: string;
  paso?: string;
}

/**
 * Parses pathname and search string into application navigation state.
 */
export function parseUrl(pathname: string, search: string = ''): ParsedRoute {
  // Strip leading and trailing slashes
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  const searchParams = new URLSearchParams(search);
  const origen = searchParams.get('origen') || undefined;
  const destino = searchParams.get('destino') || undefined;

  if (!cleanPath || cleanPath === '') {
    return { page: 'home' };
  }

  if (cleanPath === 'presupuesto') {
    const servicio = searchParams.get('servicio') || undefined;
    const paso =
      searchParams.get('paso') ||
      searchParams.get('step') || undefined;
    return {
      page: 'presupuesto',
      serviceSlug: servicio,
      origen,
      destino,
      paso,
    };
  }

  if (cleanPath === 'contacto') {
    return { page: 'contacto' };
  }

  // Observed production aliases in transvolando.com
  if (cleanPath === 'transporte-expres' || cleanPath === 'transporte-express') {
    return { page: 'service', serviceSlug: 'transporte-urgente' };
  }

  if (cleanPath === 'transporte-gran-volumen') {
    return { page: 'service', serviceSlug: 'transporte-de-gran-volumen' };
  }

  if (cleanPath === 'transporte-palets') {
    return { page: 'service', serviceSlug: 'transporte-de-palets' };
  }

  if (
    cleanPath === 'agencia-de-transporte-internacional' ||
    cleanPath === 'transporte-internacional' ||
    cleanPath === 'internacional'
  ) {
    return { page: 'internacional' };
  }

  if (cleanPath === 'casos-de-exito' || cleanPath === 'casos') {
    return { page: 'casos' };
  }

  if (cleanPath === 'preguntas-mas-frecuentes' || cleanPath === 'preguntas-frecuentes') {
    return { page: 'not_found' };
  }

  if (cleanPath === 'politica-de-cookies-ue' || cleanPath === 'politica-de-cookies') {
    return { page: 'not_found' };
  }

  // Excluded routes: /directorio/ y /servicios-de-transporte-no-incluidos/
  if (cleanPath === 'directorio' || cleanPath === 'servicios-de-transporte-no-incluidos') {
    return { page: 'excluded' as any };
  }

  if (cleanPath === 'servicios' || cleanPath === 'servicio') {
    return { page: 'servicios' };
  }

  if (cleanPath === 'blog') {
    return { page: 'blog' };
  }

  // Handle prefix variants like /servicio/<slug>/ or /servicios/<slug>/
  if (cleanPath.startsWith('servicio/') || cleanPath.startsWith('servicios/')) {
    const slug = cleanPath.split('/')[1];
    return { page: 'service', serviceSlug: slug };
  }

  // Handle prefix variants like /blog/<slug>/
  if (cleanPath.startsWith('blog/')) {
    const slug = cleanPath.split('/')[1];
    return { page: 'article', articleSlug: slug };
  }

  // Check if it matches any service slug directly (/transportes-especiales/, /transporte-de-maquinaria/, etc.)
  const matchedService = servicesData.find((s) => s.slug === cleanPath);
  if (matchedService) {
    return { page: 'service', serviceSlug: matchedService.slug };
  }

  // Check if it matches any blog post directly (/que-es-el-cubicaje-en-el-transporte/, etc.)
  const matchedPost = blogPosts.find((p) => p.slug === cleanPath);
  if (matchedPost) {
    return { page: 'article', articleSlug: matchedPost.slug };
  }

  // Retain route without redirecting unknown pages to home (sin declarar 404 HTTP real)
  return { page: 'not_found' };
}
