"use client";

import { useState, useEffect } from "react";
<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> master

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
<<<<<<< HEAD
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
=======
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
>>>>>>> master
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
<<<<<<< HEAD
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
=======
            className="flex items-center text-black hover:text-[#001AFF] transition-colors duration-300"
          >
            <svg
              className="h-6 w-auto fill-current"
              viewBox="0 0 558.54 171.49"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M522.81,65.5v71.45s35.73,0,35.73,0v29.77s-35.73,0-35.73,0h-33.35s0-29.77,0-29.77v-71.45s-86.94,0-86.94,0v23.82s29.77,0,29.77,0h33.35s0,23.82,0,23.82v23.82s0,29.77,0,29.77h-33.35s-63.12,0-63.12,0v-29.77s63.12,0,63.12,0v-23.82s-29.77,0-29.77,0h-33.35s0-23.82,0-23.82v-53.59s.07,0,.07,0h33.27s86.94,0,86.94,0V0s33.35,0,33.35,0v35.73s35.73,0,35.73,0v29.77s-35.73,0-35.73,0ZM132.19,78.54v-42.81s-33.35,0-33.35,0l-48.83,42.81v-42.81s-33.35,0-33.35,0H0s0,29.77,0,29.77h16.67s0,101.23,0,101.23h33.35s0-50.18,0-50.18l48.83-42.81v92.99s33.35,0,33.35,0v-50.18s48.83-42.81,48.83-42.81v92.99s33.35,0,33.35,0V35.73s-33.35,0-33.35,0l-48.83,42.81ZM362.04,101.23c0,38.81-31.46,70.26-70.26,70.26-38.81,0-70.26-31.46-70.26-70.26,0-38.81,31.46-70.26,70.26-70.26,38.81,0,70.26,31.46,70.26,70.26ZM331.07,101.23c0-21.7-17.6-39.3-39.3-39.3-21.7,0-39.3,17.6-39.3,39.3,0,21.7,17.6,39.3,39.3,39.3s39.3-17.6,39.3-39.3Z" />
            </svg>
>>>>>>> master
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hizmetlerimiz"
              onClick={(e) => scrollToSection(e, "hizmetlerimiz")}
<<<<<<< HEAD
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#3366FF] ${
                scrolled ? "text-gray-700" : "text-gray-700"
              }`}
=======
              className="text-sm font-extrabold text-black transition-colors duration-300 hover:text-[#001AFF]"
>>>>>>> master
            >
              Hizmetlerimiz
            </a>
            <a
              href="#arac-analizi"
              onClick={(e) => scrollToSection(e, "arac-analizi")}
<<<<<<< HEAD
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#3366FF] ${
                scrolled ? "text-gray-700" : "text-gray-700"
              }`}
=======
              className="text-sm font-extrabold text-black transition-colors duration-300 hover:text-[#001AFF]"
>>>>>>> master
            >
              Araç Analizi
            </a>
            <a
              href="#iletisim"
              onClick={(e) => scrollToSection(e, "iletisim")}
<<<<<<< HEAD
              className="inline-flex items-center px-5 py-2.5 bg-[#3366FF] text-white text-sm font-semibold rounded-lg hover:bg-[#2952CC] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
=======
              className="text-sm font-extrabold text-black transition-colors duration-300 hover:text-[#001AFF]"
>>>>>>> master
            >
              İletişime Geçin
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
<<<<<<< HEAD
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-700"
=======
            className="md:hidden p-2 rounded-lg hover:bg-grey-light transition-colors"
          >
            <svg
              className="w-6 h-6 text-black"
>>>>>>> master
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
<<<<<<< HEAD
          <div className="md:hidden animate-slide-down pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="#hizmetlerimiz"
                onClick={(e) => scrollToSection(e, "hizmetlerimiz")}
                className="text-gray-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
=======
          <div className="md:hidden animate-slide-down pb-4 border-t border-grey-light bg-white">
            <div className="flex flex-col gap-3 pt-4 px-2">
              <a
                href="#hizmetlerimiz"
                onClick={(e) => scrollToSection(e, "hizmetlerimiz")}
                className="text-black text-sm font-extrabold px-3 py-2 rounded-lg hover:bg-grey-light transition-colors"
>>>>>>> master
              >
                Hizmetlerimiz
              </a>
              <a
                href="#arac-analizi"
                onClick={(e) => scrollToSection(e, "arac-analizi")}
<<<<<<< HEAD
                className="text-gray-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
=======
                className="text-black text-sm font-extrabold px-3 py-2 rounded-lg hover:bg-grey-light transition-colors"
>>>>>>> master
              >
                Araç Analizi
              </a>
              <a
                href="#iletisim"
                onClick={(e) => scrollToSection(e, "iletisim")}
<<<<<<< HEAD
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#3366FF] text-white text-sm font-semibold rounded-lg hover:bg-[#2952CC] transition-all duration-300"
=======
                className="text-black text-sm font-extrabold px-3 py-2 rounded-lg hover:bg-grey-light transition-colors"
>>>>>>> master
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
