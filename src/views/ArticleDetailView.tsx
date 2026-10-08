import { blogPosts } from '../data/blogData';
import { NavigationPage } from '../types';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
} from 'lucide-react';
import { useState } from 'react';

interface ArticleDetailViewProps {
  slug: string;
  onNavigate: (page: NavigationPage, serviceSlug?: string, articleSlug?: string) => void;
}

const ARTICLE_SERVICE_MAP: Record<string, { slug: string; name: string; url: string }> = {
  'transporte-de-palets-a-europa': {
    slug: 'transporte-de-palets',
    name: 'transporte de palets',
    url: '/transporte-de-palets/',
  },
  'como-calcular-el-coste-del-transporte-internacional': {
    slug: 'transporte-internacional',
    name: 'transporte internacional',
    url: '/transporte-internacional/',
  },
  'ftl-o-grupaje-cuando-conviene-cada-opcion': {
    slug: 'grupaje',
    name: 'transporte en grupaje',
    url: '/grupaje/',
  },
  'que-es-el-cubicaje-en-el-transporte': {
    slug: 'transporte-de-gran-volumen',
    name: 'transporte de gran volumen',
    url: '/transporte-de-gran-volumen/',
  },
};

export default function ArticleDetailView({ slug, onNavigate }: ArticleDetailViewProps) {
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const [copied, setCopied] = useState(false);

  const targetService = ARTICLE_SERVICE_MAP[post.slug] || {
    slug: 'transporte-de-palets',
    name: 'transporte de palets',
    url: '/transporte-de-palets/',
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC] pb-[88px] lg:pb-0 font-['Inter',sans-serif]">
      {/* ========================================================================= */}
      {/* MOBILE ARTICLE HEADER (H1, Blog · X min de lectura) */}
      {/* ========================================================================= */}
      <section className="lg:hidden bg-white border-b border-[#E2E8F0] px-[20px] pt-[28px] pb-[24px]">
        <div className="max-w-[480px] mx-auto">
          <div className="text-[13px] text-[#7C7D7A] font-semibold mb-[8px] flex items-center gap-[6px]">
            <span>Blog</span>
            <span>·</span>
            <span>{post.readingTime} de lectura</span>
          </div>

          <h1 className="font-['Playfair_Display',serif] font-bold text-[#1F2D3D] text-[34px] tracking-[-0.6px] leading-[40px]">
            {post.title}
          </h1>

          <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[15px] leading-[24px] mt-[12px]">
            {post.summary}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DESKTOP ARTICLE HEADER */}
      {/* ========================================================================= */}
      <section className="hidden lg:block bg-white border-b border-[#E2E8F0] py-[40px] md:py-[60px]">
        <div className="max-w-[840px] mx-auto px-[24px]">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <span className="bg-[#F8FAFC] border border-[#E2E8F0] text-[#DC901B] text-[12px] font-bold px-[10px] py-[3px] rounded-full uppercase tracking-wider">
              {post.tag}
            </span>
            <span className="text-[13px] text-[#7C7D7A] flex items-center gap-[4px]">
              <Calendar className="w-[13px] h-[13px]" />
              {post.date}
            </span>
            <span className="text-[13px] text-[#7C7D7A]">•</span>
            <span className="text-[13px] text-[#7C7D7A] flex items-center gap-[4px]">
              <Clock className="w-[13px] h-[13px]" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="font-['Playfair_Display',serif] font-bold text-[#1F2D3D] text-[40px] xl:text-[44px] tracking-[-0.8px] leading-[50px] xl:leading-[52px]">
            {post.title}
          </h1>

          <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[18px] leading-[28px] mt-[16px]">
            {post.summary}
          </p>

          <div className="mt-[24px] pt-[20px] border-t border-[#E2E8F0] flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <div className="size-[40px] rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center font-bold text-[#DC901B] text-[14px]">
                TV
              </div>
              <div>
                <div className="text-[14px] font-bold text-[#1F2D3D]">Equipo de Operaciones Transvolando</div>
                <div className="text-[12px] text-[#7C7D7A]">Especialistas en transporte terrestre B2B</div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-[6px] text-[13px] font-semibold text-[#7C7D7A] hover:text-[#1F2D3D] px-[12px] py-[6px] rounded-[8px] border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            >
              <Share2 className="w-[14px] h-[14px]" />
              <span>{copied ? '¡Enlace copiado!' : 'Compartir'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ARTICLE FEATURED IMAGE */}
      <div className="max-w-[880px] mx-auto px-[16px] sm:px-[24px] mt-[16px] lg:-mt-[20px] mb-[28px] lg:mb-[40px]">
        <div className="rounded-[16px] lg:rounded-[20px] overflow-hidden border border-[#E2E8F0] shadow-xs lg:shadow-md aspect-[16/9] bg-[#1F2D3D]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <main className="max-w-[840px] mx-auto px-[16px] sm:px-[24px] pb-[64px]">
        <div className="bg-white border border-[#E2E8F0] rounded-[18px] sm:rounded-[24px] p-[20px] sm:p-[44px] shadow-xs">
          <div className="space-y-[28px] sm:space-y-[36px]">
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-[14px] sm:space-y-[16px]">
                {section.subtitle && (
                  <h2 className="font-['Playfair_Display',serif] font-bold text-[#1F2D3D] text-[19px] sm:text-[24px] tracking-[-0.3px] pt-[6px]">
                    {section.subtitle}
                  </h2>
                )}

                {section.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-['Inter',sans-serif] text-[#1F2D3D] text-[16px] sm:text-[17px] leading-[26px] sm:leading-[28px]"
                  >
                    {p}
                  </p>
                ))}

                {section.callout && (
                  <div className="p-[16px] sm:p-[20px] bg-[#F8FAFC] border-l-4 border-[#DC901B] rounded-r-[12px] text-[#1F2D3D] text-[15px] sm:text-[16px] italic leading-[23px] sm:leading-[25px] font-medium my-[14px]">
                    &ldquo;{section.callout}&rdquo;
                  </div>
                )}

                {/* CONTEXTUAL IN-ARTICLE CTA */}
                {idx === 0 && (
                  <div className="my-[24px] sm:my-[32px] p-[18px] sm:p-[24px] bg-[#F8FAFC] rounded-[14px] border border-[#E2E8F0]">
                    <p className="font-['Inter',sans-serif] font-bold text-[#1F2D3D] text-[15px] sm:text-[17px] leading-[22px] sm:leading-[24px]">
                      ¿Necesitas mover tu mercancía? Te enviamos una propuesta con tres opciones por correo en menos de 4 horas.
                    </p>
                    <div className="mt-[12px] flex flex-wrap items-center gap-[12px]">
                      <a
                        id="mobile-article-contextual-quote-btn"
                        href={`/presupuesto/?servicio=${targetService.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('presupuesto', targetService.slug);
                        }}
                        className="w-full sm:w-auto inline-flex min-h-[46px] px-[20px] rounded-[10px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[14px] items-center justify-center gap-[8px] transition-colors shadow-xs cursor-pointer"
                      >
                        <span>Pedir presupuesto</span>
                        <ArrowRight className="w-[15px] h-[15px]" />
                      </a>
                    </div>
                    {/* ENLACE EDITORIAL NORMAL A LA PÁGINA SERVICIO PERTINENTE */}
                    <p className="mt-[12px] text-[13.5px] sm:text-[14px] text-[#7C7D7A] font-['Inter',sans-serif] leading-[20px]">
                      También puedes consultar toda la información técnica en nuestra página de{' '}
                      <a
                        href={targetService.url}
                        onClick={(e) => {
                          e.preventDefault();
                          if (targetService.slug === 'transporte-internacional') {
                            onNavigate('internacional');
                          } else {
                            onNavigate('service', targetService.slug);
                          }
                        }}
                        className="text-[#DC901B] font-semibold underline hover:text-[#1F2D3D] transition-colors"
                      >
                        {targetService.name}
                      </a>.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* DESKTOP/END-OF-ARTICLE CONVERSION CARD (ÚNICO CTA FINAL DE PRESUPUESTO) */}
          <div className="mt-[48px] p-[24px] sm:p-[32px] bg-[#F8FAFC] rounded-[18px] border border-[#E2E8F0]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px]">
              <div>
                <span className="text-[11px] font-bold text-[#DC901B] uppercase tracking-wider font-['Inter',sans-serif]">
                  Solución profesional Transvolando
                </span>
                <h3 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] sm:text-[20px] mt-[4px]">
                  ¿Tienes que enviar mercancía a Europa o España?
                </h3>
                <p className="text-[14px] text-[#7C7D7A] mt-[4px] font-['Inter',sans-serif]">
                  Pídenos presupuesto sin compromiso. Propuesta por correo y contacto en menos de 4 horas con tres opciones (Básico, Estándar y Premium).
                </p>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href={`/presupuesto/?servicio=${targetService.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('presupuesto', targetService.slug);
                  }}
                  className="w-full sm:w-auto min-h-[46px] px-[22px] rounded-[10px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-['Inter',sans-serif] font-bold text-[14px] flex items-center justify-center gap-[6px] transition-colors cursor-pointer shadow-sm text-center"
                >
                  <span>Pedir presupuesto</span>
                  <ArrowRight className="w-[15px] h-[15px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BACK TO BLOG & OTHER ARTICLES (BOTÓN VOLVER >= 44px) */}
        <div className="mt-[48px] pt-[32px] border-t border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-[24px]">
            <a
              href="/blog/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('blog');
              }}
              className="min-h-[44px] inline-flex items-center gap-[8px] text-[#1F2D3D] hover:text-[#DC901B] font-semibold text-[14px] cursor-pointer px-[12px] -ml-[12px] rounded-[8px] hover:bg-white transition-colors"
            >
              <ArrowLeft className="w-[16px] h-[16px]" />
              <span>Volver a todos los artículos</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
            {otherPosts.map((other) => (
              <a
                key={other.slug}
                href={`/blog/${other.slug}/`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('article', undefined, other.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white border border-[#E2E8F0] rounded-[16px] p-[20px] hover:border-[#DC901B] transition-all cursor-pointer flex flex-col justify-between block shadow-xs"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#DC901B] uppercase tracking-wider font-['Inter',sans-serif]">
                    {other.tag}
                  </span>
                  <h4 className="font-['Playfair_Display',serif] font-bold text-[#1F2D3D] text-[16px] mt-[4px] line-clamp-2">
                    {other.title}
                  </h4>
                </div>
                <div className="mt-[16px] pt-[10px] border-t border-[#E2E8F0] text-[13px] text-[#DC901B] font-semibold flex items-center justify-between font-['Inter',sans-serif]">
                  <span>Leer artículo</span>
                  <ArrowRight className="w-[14px] h-[14px]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
