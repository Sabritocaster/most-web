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
    <footer className="bg-[#231F20] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo & Info */}
          <div className="flex flex-col sm:flex-row items-start gap-8 md:gap-16">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "hero")}
              className="flex items-center text-grey-dark hover:text-white transition-colors duration-300"
            >
              <svg
                className="h-5 w-auto fill-current"
                viewBox="0 0 558.54 171.49"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M522.81,65.5v71.45s35.73,0,35.73,0v29.77s-35.73,0-35.73,0h-33.35s0-29.77,0-29.77v-71.45s-86.94,0-86.94,0v23.82s29.77,0,29.77,0h33.35s0,23.82,0,23.82v23.82s0,29.77,0,29.77h-33.35s-63.12,0-63.12,0v-29.77s63.12,0,63.12,0v-23.82s-29.77,0-29.77,0h-33.35s0-23.82,0-23.82v-53.59s.07,0,.07,0h33.27s86.94,0,86.94,0V0s33.35,0,33.35,0v35.73s35.73,0,35.73,0v29.77s-35.73,0-35.73,0ZM132.19,78.54v-42.81s-33.35,0-33.35,0l-48.83,42.81v-42.81s-33.35,0-33.35,0H0s0,29.77,0,29.77h16.67s0,101.23,0,101.23h33.35s0-50.18,0-50.18l48.83-42.81v92.99s33.35,0,33.35,0v-50.18s48.83-42.81,48.83-42.81v92.99s33.35,0,33.35,0V35.73s-33.35,0-33.35,0l-48.83,42.81ZM362.04,101.23c0,38.81-31.46,70.26-70.26,70.26-38.81,0-70.26-31.46-70.26-70.26,0-38.81,31.46-70.26,70.26-70.26,38.81,0,70.26,31.46,70.26,70.26ZM331.07,101.23c0-21.7-17.6-39.3-39.3-39.3-21.7,0-39.3,17.6-39.3,39.3,0,21.7,17.6,39.3,39.3,39.3s39.3-17.6,39.3-39.3Z" />
              </svg>
            </a>
            <div className="text-grey-dark text-xs space-y-1.5 font-semibold flex flex-col items-start">
              <a
                href="https://www.mostsolution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                www.mostsolution.com
              </a>
              <a
                href="mailto:info@mostsolution.com"
                className="hover:text-white transition-colors duration-300"
              >
                info@mostsolution.com
              </a>
              <a
                href="tel:+905519662291"
                className="hover:text-white transition-colors duration-300"
              >
                +90 (551) 966 22 91
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold tracking-wider justify-start md:justify-end">
            <a
              href="#hizmetlerimiz"
              onClick={(e) => scrollToSection(e, "hizmetlerimiz")}
              className="text-grey-dark hover:text-white transition-colors duration-300"
            >
              Hizmetlerimiz
            </a>
            <a
              href="#arac-analizi"
              onClick={(e) => scrollToSection(e, "arac-analizi")}
              className="text-grey-dark hover:text-white transition-colors duration-300"
            >
              Araç Analizi
            </a>
            <a
              href="#iletisim"
              onClick={(e) => scrollToSection(e, "iletisim")}
              className="text-grey-dark hover:text-white transition-colors duration-300"
            >
              İletişim
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-grey-dark text-xs font-semibold text-center sm:text-left">
              <p>75. Yıl Mahallesi / Emko Sanayi Sitesi / Edirne Sokak / No:28</p>
              <p>Odunpazarı / Eskişehir</p>
            </div>
            <div className="flex gap-6 text-grey-dark text-xs font-semibold">
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
            <p className="text-grey-dark text-xs font-semibold">
              © 2026 most. Bütün Hakları Saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
