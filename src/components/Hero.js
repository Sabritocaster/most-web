"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F4F4F4]/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-[1.2] mb-6 tracking-tight">
              Aracınız için
              <br />
              <span className="text-[#001AFF]">Akıllı Çözümler</span>
            </h1>
            <p className="text-base sm:text-lg text-black mb-8 max-w-lg leading-relaxed">
              Profesyonel chip yazılım çözümleri, DPF temizliği ve enjektör bakımı ile aracınızın performansını, verimliliğini ve motor ömrünü en üst seviyeye çıkarıyoruz.
            </p>
            <a
              href="#iletisim"
              onClick={(e) => scrollToSection(e, "iletisim")}
              className="inline-flex items-center px-8 py-4 bg-[#001AFF] text-white text-sm font-bold rounded-full hover:bg-[#231F20] transition-all duration-300"
            >
              Hemen İletişime Geçin
            </a>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in-right flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/engine-hero.png"
                alt="Araç Motor Parçası"
                width={600}
                height={500}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
              {/* Decorative glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#001AFF]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
