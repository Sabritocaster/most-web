"use client";

export default function Footer() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo & Info */}
          <div className="flex flex-col gap-4">
            <span
              className="text-xl font-black tracking-wider text-white"
              style={{ letterSpacing: "0.15em" }}
            >
              MOST
            </span>
            <div className="text-gray-500 text-sm space-y-1">
              <p>www.mostsolution.com</p>
              <p>info@mostsolution.com</p>
              <p>+90 (551) 966 22 91</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-8 text-sm">
            <a
              href="#hizmetlerimiz"
              onClick={(e) => scrollToSection(e, "hizmetlerimiz")}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Hizmetlerimiz
            </a>
            <a
              href="#arac-analizi"
              onClick={(e) => scrollToSection(e, "arac-analizi")}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Araç Analizi
            </a>
            <a
              href="#iletisim"
              onClick={(e) => scrollToSection(e, "iletisim")}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              İletişim
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-xs">
              <p>
                75. Yıl Mahallesi / Emko Sanayi Sitesi / Edirne Sokak /No:28
              </p>
              <p>Odunpazarı / Eskişehir</p>
            </div>
            <div className="flex gap-6 text-gray-600 text-xs">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-gray-600 text-xs">
              © 2026 Most Chip Yazılım. Bütün Hakları Saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
