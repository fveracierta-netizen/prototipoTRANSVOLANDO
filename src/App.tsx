/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { NavigationPage } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

import HomeView from './views/HomeView';
import ServiceDetailView from './views/ServiceDetailView';
import InternacionalView from './views/InternacionalView';
import ContactoView from './views/ContactoView';
import BlogView from './views/BlogView';
import ArticleDetailView from './views/ArticleDetailView';
import PresupuestoView from './views/PresupuestoView';
import CasosView from './views/CasosView';
import ServiciosListView from './views/ServiciosListView';
import { parseUrl, getPageUrl } from './utils/navigation';
import { usePageSEO } from './utils/seo';

export default function App() {
  // Initialize route from current window.location (pathname, search, or legacy hash)
  const getInitialRoute = () => {
    if (typeof window === 'undefined') {
      return { page: 'home' as NavigationPage };
    }
    // Check for legacy hash redirect
    if (window.location.hash && window.location.hash !== '#/' && window.location.hash !== '#') {
      const hashPath = window.location.hash.replace(/^#\/?/, '');
      const [hashRoute, hashQuery] = hashPath.split('?');
      return parseUrl('/' + hashRoute, hashQuery ? '?' + hashQuery : '');
    }
    return parseUrl(window.location.pathname, window.location.search);
  };

  const initialRoute = getInitialRoute();

  const [currentPage, setCurrentPage] = useState<NavigationPage>(initialRoute.page);
  const [currentServiceSlug, setCurrentServiceSlug] = useState<string | undefined>(
    initialRoute.serviceSlug || 'transporte-de-maquinaria'
  );
  const [currentArticleSlug, setCurrentArticleSlug] = useState<string | undefined>(
    initialRoute.articleSlug || 'transporte-de-palets-a-europa'
  );
  const [budgetOrigin, setBudgetOrigin] = useState<string | undefined>(initialRoute.origen);
  const [budgetDest, setBudgetDest] = useState<string | undefined>(initialRoute.destino);
  const [budgetStep, setBudgetStep] = useState<1 | 2 | 3>(
    initialRoute.paso === '2' && initialRoute.origen?.trim() && initialRoute.destino?.trim() ? 2 : 1
  );

  const applyRoute = useCallback((route: ReturnType<typeof parseUrl>) => {
    setCurrentPage(route.page);
    if (route.serviceSlug) setCurrentServiceSlug(route.serviceSlug);
    if (route.articleSlug) setCurrentArticleSlug(route.articleSlug);
    if (route.origen !== undefined) setBudgetOrigin(route.origen);
    if (route.destino !== undefined) setBudgetDest(route.destino);
    if (route.paso === '2' && route.origen?.trim() && route.destino?.trim()) {
      setBudgetStep(2);
    } else if (route.paso === '3') {
      setBudgetStep(1);
    } else if (route.page === 'presupuesto') {
      setBudgetStep(1);
    }
  }, []);

  // Listen to popstate for real URL navigation (browser back/forward)
  useEffect(() => {
    // If entered via legacy hash, clean it up to real URL
    if (window.location.hash && window.location.hash !== '#/' && window.location.hash !== '#') {
      const hashPath = window.location.hash.replace(/^#\/?/, '');
      const [hashRoute, hashQuery] = hashPath.split('?');
      const route = parseUrl('/' + hashRoute, hashQuery ? '?' + hashQuery : '');
      const cleanUrl = getPageUrl(route.page, route.serviceSlug, route.articleSlug, {
        origen: route.origen,
        destino: route.destino,
      });
      window.history.replaceState(null, '', cleanUrl);
      applyRoute(route);
    }

    const handlePopState = () => {
      const route = parseUrl(window.location.pathname, window.location.search);
      applyRoute(route);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [applyRoute]);

  const handleNavigate = (
    page: NavigationPage,
    serviceSlug?: string,
    articleSlug?: string,
    extraParams?: Record<string, string>
  ) => {
    setCurrentPage(page);

    if (serviceSlug) {
      setCurrentServiceSlug(serviceSlug);
    }
    if (articleSlug) {
      setCurrentArticleSlug(articleSlug);
    }
    if (extraParams?.origen !== undefined) {
      setBudgetOrigin(extraParams.origen);
    }
    if (extraParams?.destino !== undefined) {
      setBudgetDest(extraParams.destino);
    }

    if (page === 'presupuesto') {
      const hasRoute = Boolean(extraParams?.origen?.trim() && extraParams?.destino?.trim());
      const skipRoute = (extraParams?.paso === '2' || extraParams?.step === '2') && hasRoute;
      setBudgetOrigin(extraParams?.origen);
      setBudgetDest(extraParams?.destino);
      setBudgetStep(skipRoute ? 2 : 1);
    }

    // Build real path
    const targetUrl = getPageUrl(page, serviceSlug, articleSlug, extraParams);
    const currentPathWithSearch = window.location.pathname + window.location.search;

    if (currentPathWithSearch !== targetUrl) {
      window.history.pushState(null, '', targetUrl);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  usePageSEO(currentPage, currentServiceSlug, currentArticleSlug);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2D3D] font-['Inter',sans-serif] selection:bg-[#DC901B]/20 selection:text-[#1F2D3D]">
      {/* GLOBAL RESPONSIVE NAVIGATION BAR */}
      <Header
        currentPage={currentPage}
        currentServiceSlug={currentServiceSlug}
        budgetStep={budgetStep}
        onNavigate={handleNavigate}
      />

      {/* MAIN VIEW CONTENT CONTAINER */}
      <main className="flex-1">
        {(currentPage === 'not_found' || currentPage === 'excluded') && (
          <section className="max-w-[1160px] mx-auto px-[24px] py-[64px]">
            <h1 className="font-bold text-[34px]">Página no disponible en este prototipo</h1>
            <p className="mt-[16px]">Esta ruta todavía no está implementada en la vista previa.</p>
            <a className="inline-flex items-center min-h-[44px] mt-[24px] underline" href="/" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}>Volver al inicio</a>
          </section>
        )}
        {currentPage === 'home' && <HomeView onNavigate={handleNavigate} />}

        {currentPage === 'service' && (
          <ServiceDetailView
            slug={currentServiceSlug || 'transporte-de-maquinaria'}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'internacional' && <InternacionalView onNavigate={handleNavigate} />}

        {currentPage === 'casos' && <CasosView onNavigate={handleNavigate} />}

        {currentPage === 'servicios' && <ServiciosListView onNavigate={handleNavigate} />}

        {currentPage === 'contacto' && <ContactoView onNavigate={handleNavigate} />}

        {currentPage === 'blog' && <BlogView onNavigate={handleNavigate} />}

        {currentPage === 'article' && (
          <ArticleDetailView
            slug={currentArticleSlug || 'transporte-de-palets-a-europa'}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'presupuesto' && (
          <PresupuestoView
            initialServiceSlug={currentServiceSlug}
            initialOrigin={budgetOrigin}
            initialDest={budgetDest}
            initialStep={budgetStep}
            onStepChange={(step) => {
              setBudgetStep(step);
              try {
                const url = new URL(window.location.href);
                url.searchParams.set('paso', String(step));
                if (currentServiceSlug) {
                  url.searchParams.set('servicio', currentServiceSlug);
                }
                window.history.replaceState({}, '', url.pathname + url.search);
              } catch {
                // Ignore URL state errors
              }
            }}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* B2B FOOTER (Desktop always; hidden on mobile in quote funnel to avoid distraction) */}
      <div className={currentPage === 'presupuesto' ? 'hidden sm:block' : 'block'}>
        <Footer onNavigate={handleNavigate} />
      </div>

      {/* MOBILE CONVERSION STICKY BAR */}
      <StickyMobileCTA
        currentPage={currentPage}
        currentServiceSlug={
          currentPage === 'internacional' ? 'transporte-internacional' : currentServiceSlug
        }
        onOpenQuote={() =>
          handleNavigate(
            'presupuesto',
            currentPage === 'internacional' ? 'transporte-internacional' : currentServiceSlug,
            undefined,
            currentPage === 'internacional' ? { paso: '2' } : undefined
          )
        }
      />
    </div>
  );
}
