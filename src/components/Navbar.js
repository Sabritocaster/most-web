"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className="flex items-center"
          >
            <span
              className={`text-2xl font-black tracking-wider transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-gray-900"
              }`}
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.15em" }}
            >
              MOST
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hizmetlerimiz"
              onClick={(e) => scrollToSection(e, "hizmetlerimiz")}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#3366FF] ${
                scrolled ? "text-gray-700" : "text-gray-700"
              }`}
            >
              Hizmetlerimiz
            </a>
            <a
              href="#arac-analizi"
              onClick={(e) => scrollToSection(e, "arac-analizi")}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#3366FF] ${
                scrolled ? "text-gray-700" : "text-gray-700"
              }`}
            >
              Araç Analizi
            </a>
            <a
              href="#iletisim"
              onClick={(e) => scrollToSection(e, "iletisim")}
              className="inline-flex items-center px-5 py-2.5 bg-[#3366FF] text-white text-sm font-semibold rounded-lg hover:bg-[#2952CC] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              İletişime Geçin
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden animate-slide-down pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="#hizmetlerimiz"
                onClick={(e) => scrollToSection(e, "hizmetlerimiz")}
                className="text-gray-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Hizmetlerimiz
              </a>
              <a
                href="#arac-analizi"
                onClick={(e) => scrollToSection(e, "arac-analizi")}
                className="text-gray-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Araç Analizi
              </a>
              <a
                href="#iletisim"
                onClick={(e) => scrollToSection(e, "iletisim")}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#3366FF] text-white text-sm font-semibold rounded-lg hover:bg-[#2952CC] transition-all duration-300"
              >
                İletişime Geçin
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
