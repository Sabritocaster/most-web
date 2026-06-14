"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className="flex items-center text-black hover:text-[#001AFF] transition-colors duration-300"
          >
            <svg
              className="h-6 w-auto fill-current"
              viewBox="0 0 558.54 171.49"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M522.81,65.5v71.45s35.73,0,35.73,0v29.77s-35.73,0-35.73,0h-33.35s0-29.77,0-29.77v-71.45s-86.94,0-86.94,0v23.82s29.77,0,29.77,0h33.35s0,23.82,0,23.82v23.82s0,29.77,0,29.77h-33.35s-63.12,0-63.12,0v-29.77s63.12,0,63.12,0v-23.82s-29.77,0-29.77,0h-33.35s0-23.82,0-23.82v-53.59s.07,0,.07,0h33.27s86.94,0,86.94,0V0s33.35,0,33.35,0v35.73s35.73,0,35.73,0v29.77s-35.73,0-35.73,0ZM132.19,78.54v-42.81s-33.35,0-33.35,0l-48.83,42.81v-42.81s-33.35,0-33.35,0H0s0,29.77,0,29.77h16.67s0,101.23,0,101.23h33.35s0-50.18,0-50.18l48.83-42.81v92.99s33.35,0,33.35,0v-50.18s48.83-42.81,48.83-42.81v92.99s33.35,0,33.35,0V35.73s-33.35,0-33.35,0l-48.83,42.81ZM362.04,101.23c0,38.81-31.46,70.26-70.26,70.26-38.81,0-70.26-31.46-70.26-70.26,0-38.81,31.46-70.26,70.26-70.26,38.81,0,70.26,31.46,70.26,70.26ZM331.07,101.23c0-21.7-17.6-39.3-39.3-39.3-21.7,0-39.3,17.6-39.3,39.3,0,21.7,17.6,39.3,39.3,39.3s39.3-17.6,39.3-39.3Z" />
            </svg>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hizmetlerimiz"
              onClick={(e) => scrollToSection(e, "hizmetlerimiz")}
              className="text-sm font-extrabold text-black transition-colors duration-300 hover:text-[#001AFF]"
            >
              Hizmetlerimiz
            </a>
            <a
              href="#arac-analizi"
              onClick={(e) => scrollToSection(e, "arac-analizi")}
              className="text-sm font-extrabold text-black transition-colors duration-300 hover:text-[#001AFF]"
            >
              Araç Analizi
            </a>
            <a
              href="#iletisim"
              onClick={(e) => scrollToSection(e, "iletisim")}
              className="text-sm font-extrabold text-black transition-colors duration-300 hover:text-[#001AFF]"
            >
              İletişime Geçin
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black transition-colors duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 relative">
              <span
                className={`h-0.5 bg-current transition-all duration-300 rounded-full ${
                  mobileMenuOpen ? "w-6 absolute rotate-45" : "w-6"
                }`}
              />
              <span
                className={`h-0.5 bg-current transition-all duration-300 rounded-full ${
                  mobileMenuOpen ? "w-6 absolute -rotate-45" : "w-6"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-18 left-0 right-0 bottom-0 bg-white z-40 transition-transform duration-500 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-2 items-stretch justify-start h-full pt-16 px-4">
            <a
              href="#hizmetlerimiz"
              onClick={(e) => scrollToSection(e, "hizmetlerimiz")}
              className={`w-full block py-4 text-black text-3xl font-extrabold transition-all duration-500 transform hover:text-[#001AFF] active:text-[#001AFF] ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-8"
              }`}
            >
              Hizmetlerimiz
            </a>
            <a
              href="#arac-analizi"
              onClick={(e) => scrollToSection(e, "arac-analizi")}
              className={`w-full block py-4 text-black text-3xl font-extrabold transition-all duration-500 transform hover:text-[#001AFF] active:text-[#001AFF] ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-8"
              }`}
            >
              Araç Analizi
            </a>
            <a
              href="#iletisim"
              onClick={(e) => scrollToSection(e, "iletisim")}
              className={`w-full block py-4 text-black text-3xl font-extrabold transition-all duration-500 transform hover:text-[#001AFF] active:text-[#001AFF] ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-8"
              }`}
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
