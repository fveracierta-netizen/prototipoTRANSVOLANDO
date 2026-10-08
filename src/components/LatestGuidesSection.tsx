import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { NavigationPage } from '../types';
import { blogPosts } from '../data/blogData';

interface LatestGuidesSectionProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string, articleSlug?: string) => void;
}

interface GuideArticle {
  slug: string;
  image: string;
  category: string;
  desktopTitle: string;
  mobileTitle: string;
  cta: string;
  date: string;
}

const guideArticles: GuideArticle[] = [
  {
    slug: 'transporte-de-palets-a-europa',
    image:
      blogPosts.find((p) => p.slug === 'transporte-de-palets-a-europa')?.image ||
      'https://images.unsplash.com/photo-1573057493754-868e061af215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    category: 'EMPRESA DE TRANSPORTE',
    desktopTitle: 'Transporte de palets a Europa, las opciones y plazos para empresas españolas',
    mobileTitle: 'Transporte de palets a Europa',
    cta: 'LEER MÁS »',
    date: 'junio 15, 2026',
  },
  {
    slug: 'como-calcular-el-coste-del-transporte-internacional',
    image:
      blogPosts.find((p) => p.slug === 'como-calcular-el-coste-del-transporte-internacional')?.image ||
      'https://images.unsplash.com/photo-1618582948377-cd7eb0e8cb14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    category: 'EMPRESA DE TRANSPORTE',
    desktopTitle: 'Cómo calcular el coste del transporte internacional de mercancías para tu empresa',
    mobileTitle: 'Coste del transporte internacional',
    cta: 'LEER MÁS »',
    date: 'junio 15, 2026',
  },
  {
    slug: 'ftl-o-grupaje-cuando-conviene-cada-opcion',
    image:
      blogPosts.find((p) => p.slug === 'ftl-o-grupaje-cuando-conviene-cada-opcion')?.image ||
      'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000',
    category: 'TRANSPORTE DE MERCANCÍAS',
    desktopTitle: 'Carga completa o grupaje: cuándo le conviene cada opción a tu empresa',
    mobileTitle: 'Carga completa o grupaje',
    cta: 'LEER MÁS »',
    date: 'junio 12, 2026',
  },
];

export default function LatestGuidesSection({ onNavigate }: LatestGuidesSectionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener?.('change', handleChange);
      return () => mediaQuery.removeEventListener?.('change', handleChange);
    }
  }, []);

  return (
    <section className="hidden md:block bg-white border-y border-[#E2E8F0] py-[64px] md:py-[88px]">
      <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
        {/* ============================================================== */}
        {/* 1. ENCABEZADOS (MOBILE CON FRASE CORTA, DESKTOP COMPLETO)     */}
        {/* ============================================================== */}
        <div className="max-w-[760px] mb-[24px] sm:mb-[32px] md:mb-[48px]">
          <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[24px] xs:text-[28px] sm:text-[34px] md:text-[40px] tracking-[-0.6px] leading-tight sm:leading-[42px] md:leading-[48px]">
            Últimas guías para tu logística
          </h2>

          {/* Subtítulo Mobile: Frase concisa directa */}
          <p className="md:hidden font-['Inter',sans-serif] text-[#7C7D7A] text-[14px] xs:text-[15px] leading-[21px] mt-[6px]">
            Guías prácticas para mover tu mercancía mejor.
          </p>

          {/* Subtítulo Desktop: Introducción completa original */}
          <p className="hidden md:block font-['Inter',sans-serif] text-[#7C7D7A] text-[16px] leading-[26px] mt-[12px]">
            Recursos para empresas que mueven mercancía: guías de transporte, novedades del sector y cómo preparar cada tipo de carga.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 2. MOBILE VARIANT: CARDS COMPACTAS CON HORIZONTAL SCROLL      */}
        {/* ============================================================== */}
        <div className="md:hidden -mx-[16px] px-[16px]">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-[12px] pb-[16px] pt-[4px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="region"
            aria-label="Artículos recomendados en carrusel horizontal"
          >
            {guideArticles.map((article) => (
              <a
                key={`mobile-guide-${article.slug}`}
                href={`/blog/${article.slug}/`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('article', undefined, article.slug);
                }}
                className="group shrink-0 snap-start w-[45vw] xs:w-[43vw] min-w-[155px] max-w-[210px] p-[10px] rounded-[14px] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#DC901B]/50 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98] select-none"
              >
                <div>
                  {/* Imagen protagonista en mitad superior */}
                  <div className="w-full aspect-[4/3] rounded-[10px] overflow-hidden bg-[#F1F5F9] mb-[10px] border border-[#E2E8F0]">
                    <img
                      src={article.image}
                      alt={article.mobileTitle}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>

                  {/* Título conciso mobile */}
                  <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[13.5px] xs:text-[14px] leading-[18px] tracking-[-0.2px] group-hover:text-[#DC901B] transition-colors line-clamp-3">
                    {article.mobileTitle}
                  </h3>
                </div>

                {/* Acción compacta Leer → */}
                <div className="pt-[10px] mt-auto flex items-center">
                  <span className="inline-flex items-center gap-[4px] text-[#DC901B] font-bold text-[12.5px] font-['Inter',sans-serif]">
                    <span>Leer</span>
                    <ArrowRight className="w-[12px] h-[12px] group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            ))}

            {/* Espaciador final para garantizar padding derecho en snap */}
            <div className="shrink-0 w-[4px]" aria-hidden="true" />
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. DESKTOP VARIANT: GRID DE 3 COLUMNAS CON INFORMACIÓN TOTAL  */}
        {/* ============================================================== */}
        <div className="hidden md:grid grid-cols-3 gap-[28px] lg:gap-[32px]">
          {guideArticles.map((article) => (
            <article
              key={`desktop-guide-${article.slug}`}
              className="group flex flex-col justify-between p-[18px] sm:p-[20px] rounded-[16px] bg-[#F8FAFC] border border-[#E2E8F0] transition-all duration-300 hover:border-[#DC901B]/40 hover:shadow-sm"
            >
              <div>
                {/* Imagen amplia con aspect-[16/10] */}
                <a
                  href={`/blog/${article.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('article', undefined, article.slug);
                  }}
                  className="block w-full aspect-[16/10] rounded-[12px] overflow-hidden bg-[#F1F5F9] cursor-pointer mb-[18px]"
                  aria-label={article.desktopTitle}
                >
                  <img
                    src={article.image}
                    alt={article.desktopTitle}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </a>

                {/* Categoría editorial con acento naranja */}
                <div className="mb-[10px]">
                  <span className="text-[#DC901B] font-bold text-[12px] tracking-wider uppercase font-['Inter',sans-serif]">
                    {article.category}
                  </span>
                </div>

                {/* Título completo desktop */}
                <h3 className="mb-[18px]">
                  <a
                    href={`/blog/${article.slug}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('article', undefined, article.slug);
                    }}
                    className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] sm:text-[19px] leading-[26px] tracking-[-0.3px] group-hover:text-[#DC901B] transition-colors cursor-pointer block"
                  >
                    {article.desktopTitle}
                  </a>
                </h3>
              </div>

              {/* Contenedor inferior: CTA y Fecha */}
              <div className="pt-[14px] border-t border-[#E2E8F0] flex flex-col gap-[8px]">
                <div>
                  <a
                    href={`/blog/${article.slug}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('article', undefined, article.slug);
                    }}
                    className="inline-flex items-center text-[#DC901B] hover:text-[#b75f16] font-bold text-[13px] tracking-wider uppercase transition-colors cursor-pointer font-['Inter',sans-serif]"
                  >
                    {article.cta}
                  </a>
                </div>

                <span className="text-[#7C7D7A] text-[13px] font-normal font-['Inter',sans-serif]">
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* 4. BOTÓN INFERIOR: CARGAR MÁS / IR AL BLOG */}
        <div className="mt-[28px] sm:mt-[36px] md:mt-[56px] text-center">
          <a
            href="/blog/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('blog');
            }}
            className="inline-flex items-center justify-center min-h-[44px] md:min-h-[46px] px-[24px] md:px-[28px] py-[10px] md:py-[12px] rounded-[10px] bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#DC901B] text-[#1F2D3D] font-semibold text-[14px] transition-colors duration-200 cursor-pointer shadow-xs"
          >
            Cargar más
          </a>
        </div>
      </div>
    </section>
  );
}
