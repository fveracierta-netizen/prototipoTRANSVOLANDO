import { ServiceItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onClick: () => void;
  priority?: boolean;
}

export default function ServiceCard({ service, onClick, priority = false }: ServiceCardProps) {
  return (
    <a
      id={`service-card-${service.slug}`}
      href={`/${service.slug}/`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      aria-label={`Ver servicio: ${service.name}`}
      className="group relative flex flex-col sm:flex-row bg-white rounded-[16px] border border-[#ebe4d6] overflow-hidden cursor-pointer hover:border-[#dd7a2a]/40 hover:shadow-[0_8px_24px_rgba(34,30,25,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dd7a2a] transition-all duration-300"
    >
      {/* Visual Image Container */}
      <div className="relative overflow-hidden w-full sm:w-[200px] md:w-[220px] lg:w-[230px] h-[190px] sm:h-auto shrink-0 bg-[#fbf6ec]">
        <img
          src={service.image}
          alt={service.name}
          loading={priority ? 'eager' : 'lazy'}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#221e19]/10 group-hover:bg-transparent transition-colors duration-300" />
        
        {/* Subtle Category Pill on mobile */}
        {service.categoryTag && (
          <span className="sm:hidden absolute top-[12px] left-[12px] bg-white/90 backdrop-blur-sm px-[8px] py-[3px] rounded-[6px] text-[11px] font-semibold text-[#221e19] tracking-tight shadow-sm">
            {service.categoryTag}
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between flex-1 p-[20px] sm:p-[24px] md:p-[28px] border-t sm:border-t-0 sm:border-l border-[#ebe4d6]">
        <div className="flex flex-col gap-[6px]">
          {service.categoryTag && (
            <div className="flex items-center justify-start">
              <span className="hidden sm:inline-block text-[12px] text-[#9a927f] font-medium tracking-wide uppercase">
                {service.categoryTag}
              </span>
            </div>
          )}

          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#221e19] text-[18px] md:text-[19px] leading-[25px] tracking-[-0.3px] group-hover:text-[#dd7a2a] transition-colors mt-[2px]">
            {service.name}
          </h3>

          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[#615a4e] text-[14px] leading-[22px] line-clamp-2 mt-[2px]">
            {service.shortDesc}
          </p>
        </div>

        {/* Action Link / Micro-CTA */}
        <div className="flex items-center gap-[6px] pt-[16px] sm:pt-[20px] text-[#dd7a2a] group-hover:text-[#b75f16] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] transition-colors">
          <span>Ver servicio</span>
          <ArrowRight className="w-[14px] h-[14px] transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}
