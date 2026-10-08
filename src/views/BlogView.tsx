import { useState } from 'react';
import { blogPosts } from '../data/blogData';
import { NavigationPage } from '../types';
import { COMPANY_PHONE_TEL } from '../utils/navigation';
import { Search, Clock, Calendar, ArrowRight, BookOpen, Phone } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (page: NavigationPage, serviceSlug?: string, articleSlug?: string) => void;
}

export default function BlogView({ onNavigate }: BlogViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('todos');

  const tags = ['todos', 'Empresa de transporte', 'Transporte de mercancías'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'todos' || post.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="w-full bg-[#F8FAFC] font-['Inter',sans-serif]">
      {/* HERO SECTION */}
      <section className="py-[48px] md:py-[64px] border-b border-[#E2E8F0] bg-white">
        <div className="max-w-[1160px] mx-auto px-[24px] sm:px-[32px] md:px-[48px]">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-[6px] text-[#DC901B] font-bold text-[12px] uppercase tracking-wider mb-[8px]">
              <BookOpen className="w-[14px] h-[14px]" />
              <span>Conocimiento técnico y normativa B2B</span>
            </div>
            <h1 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[32px] sm:text-[42px] tracking-[-0.8px] leading-[40px] sm:leading-[50px]">
              Blog de transporte terrestre y logística para empresas
            </h1>
            <p className="font-['Inter',sans-serif] text-[#7C7D7A] text-[16px] leading-[26px] mt-[10px]">
              Guías prácticas, cálculos de flete, análisis de normativas europeas y consejos para optimizar la cadena de suministro de tu compañía.
            </p>
          </div>

          {/* SEARCH & FILTERS */}
          <div className="mt-[32px] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-[16px]">
            {/* Search input */}
            <div className="relative max-w-[360px] w-full">
              <Search className="w-[16px] h-[16px] text-[#7C7D7A] absolute left-[14px] top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar artículos o temas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full min-h-[44px] pl-[38px] pr-[14px] bg-[#F8FAFC] border border-[#E2E8F0] rounded-[10px] text-[14px] text-[#1F2D3D] placeholder:text-[#7C7D7A] focus:outline-none focus:ring-2 focus:ring-[#DC901B]"
              />
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-[8px]">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`min-h-[40px] px-[16px] rounded-[8px] text-[13px] font-semibold transition-colors cursor-pointer capitalize ${
                    selectedTag === tag
                      ? 'bg-[#1F2D3D] text-white'
                      : 'bg-white text-[#7C7D7A] hover:bg-[#F8FAFC] border border-[#E2E8F0] hover:text-[#1F2D3D]'
                  }`}
                >
                  {tag === 'todos' ? 'Todos los artículos' : tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section className="py-[56px] md:py-[72px] max-w-[1160px] mx-auto px-[24px] sm:px-[32px] md:px-[48px]">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-[64px] bg-white rounded-[16px] border border-[#E2E8F0]">
            <p className="text-[16px] text-[#7C7D7A]">No hemos encontrado artículos con ese término.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag('todos');
              }}
              className="mt-[12px] text-[14px] font-bold text-[#DC901B] underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
            {filteredPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}/`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('article', undefined, post.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white border border-[#E2E8F0] rounded-[20px] overflow-hidden flex flex-col justify-between hover:border-[#DC901B] transition-all cursor-pointer shadow-xs group block"
              >
                <div>
                  {/* Article Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1F2D3D]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute top-[12px] left-[12px] bg-white/95 backdrop-blur-sm px-[10px] py-[4px] rounded-[6px] text-[11px] font-bold text-[#DC901B] uppercase tracking-wider">
                      {post.tag}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-[22px]">
                    <div className="flex items-center gap-[12px] text-[12px] text-[#7C7D7A] mb-[10px]">
                      <span className="flex items-center gap-[4px]">
                        <Calendar className="w-[13px] h-[13px]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-[4px]">
                        <Clock className="w-[13px] h-[13px]" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[18px] leading-[25px] group-hover:text-[#DC901B] transition-colors">
                      {post.title}
                    </h2>

                    <p className="font-['Inter',sans-serif] text-[14px] text-[#7C7D7A] leading-[22px] mt-[10px] line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-[22px] pb-[20px] pt-[12px] border-t border-[#E2E8F0] flex items-center justify-between text-[13px] font-bold text-[#DC901B]">
                  <span>Leer artículo completo</span>
                  <ArrowRight className="w-[15px] h-[15px] group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* CTA BANNER */}
      <section className="bg-white border-t border-[#E2E8F0] py-[56px]">
        <div className="max-w-[760px] mx-auto px-[24px] text-center">
          <span className="text-[12px] font-bold text-[#DC901B] uppercase tracking-wider font-['Inter',sans-serif]">
            ¿Necesitas asesoramiento logístico?
          </span>
          <h2 className="font-['Playfair_Display',Georgia,serif] font-bold text-[#1F2D3D] text-[26px] md:text-[32px] leading-[34px] md:leading-[40px] mt-[6px]">
            Hablemos sobre las necesidades de transporte de tu empresa
          </h2>
          <p className="text-[#7C7D7A] text-[15px] leading-[24px] mt-[10px] font-['Inter',sans-serif]">
            Ponte en contacto con nuestro equipo técnico. Propuesta por correo y contacto en menos de 4 horas con tres opciones (Básico, Estándar y Premium).
          </p>

          <div className="mt-[24px] flex flex-wrap items-center justify-center gap-[12px]">
            <a
              href="/presupuesto/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('presupuesto');
              }}
              className="min-h-[48px] px-[24px] rounded-[10px] bg-[#DC901B] hover:brightness-105 text-[#1F2D3D] font-bold text-[14px] flex items-center gap-[6px] transition-colors cursor-pointer shadow-sm"
            >
              <span>Pedir presupuesto</span>
              <ArrowRight className="w-[15px] h-[15px]" />
            </a>

            <a
              href={COMPANY_PHONE_TEL}
              className="min-h-[48px] px-[20px] rounded-[10px] bg-white border border-[#1F2D3D] text-[#1F2D3D] hover:bg-[#F8FAFC] font-semibold text-[14px] flex items-center gap-[6px] transition-colors"
            >
              <Phone className="w-[15px] h-[15px] text-[#DC901B]" />
              <span>Llamar ahora</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
