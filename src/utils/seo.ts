import { useEffect } from 'react';
import { NavigationPage } from '../types';
import { servicesData } from '../data/servicesData';
import { blogPosts } from '../data/blogData';

export interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
}

const BASE_URL = 'https://transvolando.com';

/**
 * Returns canonical SEO metadata for each page and slug.
 */
export function getPageSEO(
  page: NavigationPage,
  serviceSlug?: string,
  articleSlug?: string
): SEOConfig {
  if (page === 'home') {
    return {
      title: 'Agencia de Transporte para Empresas en España y Europa | Transvolando',
      description:
        'Transporte terrestre de mercancías para empresas en España y Europa. Cargas completas, grupaje, maquinaria y transportes especiales con gestor único.',
      canonical: `${BASE_URL}/`,
    };
  }

  if (page === 'service') {
    const service = servicesData.find((s) => s.slug === serviceSlug) || servicesData[0];
    return {
      title: `${service.name} para Empresas en España y Europa | Transvolando`,
      description:
        service.shortDesc ||
        `Transporte especializado de ${service.name.toLowerCase()} con flota homologada, carta CMR y seguro adicional hasta 150.000 € por expedición.`,
      canonical: `${BASE_URL}/${service.slug}/`,
    };
  }

  if (page === 'internacional') {
    return {
      title: 'Transporte Internacional de Mercancías por Carretera | Transvolando',
      description:
        'Transporte terrestre internacional en Europa: cargas completas y grupaje, aduanas Reino Unido y póliza adicional hasta 150.000 € por envío sobre CMR.',
      canonical: `${BASE_URL}/transporte-internacional/`,
    };
  }

  if (page === 'casos') {
    return {
      title: 'Casos de Éxito en Transporte y Logística Industrial | Transvolando',
      description:
        'Descubre cómo ayudamos a empresas industriales a resolver traslados complejos, cumplir plazos y asegurar mercancía con gestor único.',
      canonical: `${BASE_URL}/casos/`,
    };
  }

  if (page === 'contacto') {
    return {
      title: 'Contacto y Solicitud de Presupuesto B2B | Transvolando',
      description:
        'Contacta con nuestro equipo gestor de tráfico. Propuesta por correo en menos de 4 horas con tres opciones y atención en el 674 34 69 12.',
      canonical: `${BASE_URL}/contacto/`,
    };
  }

  if (page === 'presupuesto') {
    return {
      title: 'Pedir Presupuesto de Transporte B2B | Transvolando',
      description:
        'Solicita tu presupuesto de transporte terrestre en tres pasos sin registro. Propuesta personalizada por correo con tres opciones en menos de 4 horas.',
      canonical: `${BASE_URL}/presupuesto/`,
    };
  }

  if (page === 'blog') {
    return {
      title: 'Blog de Logística y Transporte Terrestre B2B | Transvolando',
      description:
        'Guías y artículos técnicos sobre cubicaje, transporte de palets a Europa, cálculo de costes y optimización de fletes para empresas.',
      canonical: `${BASE_URL}/blog/`,
    };
  }

  if (page === 'article') {
    const post = blogPosts.find((p) => p.slug === articleSlug) || blogPosts[0];
    return {
      title: `${post.title} | Transvolando`,
      description: post.summary,
      canonical: `${BASE_URL}/${post.slug}/`,
    };
  }

  if (page === 'servicios') {
    return {
      title: 'Servicios de Transporte Terrestre para Empresas | Transvolando',
      description:
        'Catálogo de servicios de transporte de mercancías por carretera en España y Europa con un único gestor por cuenta.',
      canonical: `${BASE_URL}/servicios/`,
    };
  }

  return {
    title: 'Transvolando - Agencia de Transporte B2B',
    description: 'Transporte de mercancías por carretera para empresas en España y Europa.',
    canonical: `${BASE_URL}/`,
  };
}

/**
 * Updates head meta tags dynamically per page.
 * Keeps robots noindex for prototype environment.
 */
export function usePageSEO(
  page: NavigationPage,
  serviceSlug?: string,
  articleSlug?: string
) {
  useEffect(() => {
    const { title, description, canonical } = getPageSEO(page, serviceSlug, articleSlug);

    // Update Document Title
    document.title = title;

    // Helper to set or create meta
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonical, true);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    // Keep prototype noindex
    setMeta('robots', 'noindex, nofollow, noarchive');
  }, [page, serviceSlug, articleSlug]);
}
