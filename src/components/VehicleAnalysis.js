"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const brands = [
  "BMW", "Mercedes", "Audi", "Volkswagen", "Toyota", "Honda", 
  "Ford", "Renault", "Fiat", "Hyundai", "Kia", "Peugeot",
  "Opel", "Volvo", "Nissan", "Skoda", "Seat", "Citroen",
];

export default function VehicleAnalysis() {
  const sectionRef = useRef(null);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-hidden");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const years = [];
  for (let y = 2026; y >= 2000; y--) years.push(y.toString());

  return (
    <section
      id="arac-analizi"
      ref={sectionRef}
      className="relative bg-white py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12 scroll-hidden">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-md">
            Araç Analizi
          </h2>
          <p className="text-gray-500 max-w-md leading-relaxed text-base">
            Aracınızın fabrika çıkış verileriyle Most Bilişim'in sunduğu optimize
            değerleri yan yana inceleyin. Güç, artışını ve verimlilik farkını teknik
            tabloda analiz edin.
          </p>
        </div>

        {/* Filter Bar & Car Image */}
        <div className="scroll-hidden bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8 items-center">
            <div className="relative">
              <select
                id="brand-select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-700 font-medium cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#3366FF]"
              >
                <option value="">Marka Seçiniz</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>

            <div className="relative">
              <select
                id="model-select"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-700 font-medium cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#3366FF]"
              >
                <option value="">Model Seçiniz</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>

            <div className="relative">
              <select
                id="year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-700 font-medium cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#3366FF]"
              >
                <option value="">Seri Seçiniz</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>

            <div className="relative">
              <select
                id="engine-select"
                value={selectedEngine}
                onChange={(e) => setSelectedEngine(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-700 font-medium cursor-pointer hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-[#3366FF]"
              >
                <option value="">Motor Tipi Seçiniz</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>

            <button
              id="search-btn"
              className="px-6 py-2.5 bg-[#3366FF] text-white text-sm font-semibold rounded-lg hover:bg-[#2952CC] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Sonuçları Göster
            </button>
          </div>

          {/* Car Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-lg">
              <Image
                src="/car-suv.png"
                alt="Araç Analizi"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Result Grid Placeholder */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 aspect-[4/3] flex items-center justify-center hover:border-[#3366FF]/30 hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-300 text-sm">—</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
