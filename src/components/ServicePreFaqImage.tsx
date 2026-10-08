export default function ServicePreFaqImage() {
  return (
    <section className="bg-white border-b border-[#E2E8F0] py-[28px] sm:py-[40px] md:py-[52px]">
      <div className="max-w-[1160px] mx-auto px-[16px] sm:px-[32px] md:px-[48px]">
        <div className="w-full aspect-[4/3] xs:aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] max-h-[480px] rounded-[14px] sm:rounded-[18px] md:rounded-[22px] overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC] shadow-xs">
          <img
            src="/transvolando-chico-banner.webp"
            alt="Equipo gestor Transvolando"
            className="w-full h-full object-cover object-[center_25%]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
