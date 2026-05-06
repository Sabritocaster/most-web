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
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
              Aracınız için
              <br />
              <span className="text-gray-900">Akıllı Çözümler</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
              Hizmetlerimizden yararlanarak aracınızın performansını
              arttırabilirsiniz.
            </p>
            <a
              href="#hizmetlerimiz"
              onClick={(e) => scrollToSection(e, "hizmetlerimiz")}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
            >
              Aracınız Uygunluğunu Test Edin
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in-right flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="animate-float">
                <Image
                  src="/engine-hero.png"
                  alt="Araç Motor Parçası"
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient transition to blue */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#3366FF]" />
    </section>
  );
}
