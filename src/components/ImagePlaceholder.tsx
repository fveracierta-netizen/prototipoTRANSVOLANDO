interface ImagePlaceholderProps {
  aspect?: string;
  className?: string;
}

export default function ImagePlaceholder({
  aspect = 'aspect-[16/9] md:aspect-[21/9]',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`w-full ${aspect} bg-[#ece8df] border border-[#dfd9cd] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] flex items-center justify-center select-none ${className}`}
      aria-label="Espacio para fotografía"
    >
      <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] sm:text-[16px] tracking-[0.25em] text-[#9c9485] uppercase">
        IMG
      </span>
    </div>
  );
}
