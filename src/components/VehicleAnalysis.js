"use client";

<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react";
import Image from "next/image";

const vehicleDb = {
  BMW: {
    "3 Serisi": {
      "F30 (2012-2019)": {
        "320d (184 HP)": { originalHp: 184, optimizedHp: 220, originalTorque: 380, optimizedTorque: 440, saving: "0.5 L / 100km" },
        "316i (136 HP)": { originalHp: 136, optimizedHp: 170, originalTorque: 220, optimizedTorque: 270, saving: "0.4 L / 100km" },
        "320i ED (170 HP)": { originalHp: 170, optimizedHp: 210, originalTorque: 250, optimizedTorque: 310, saving: "0.6 L / 100km" }
      },
      "G20 (2019-2026)": {
        "320i (170 HP)": { originalHp: 170, optimizedHp: 220, originalTorque: 250, optimizedTorque: 330, saving: "0.5 L / 100km" },
        "330i (258 HP)": { originalHp: 258, optimizedHp: 300, originalTorque: 400, optimizedTorque: 470, saving: "0.6 L / 100km" }
      }
    },
    "5 Serisi": {
      "F10 (2010-2016)": {
        "520d (184 HP)": { originalHp: 184, optimizedHp: 220, originalTorque: 380, optimizedTorque: 440, saving: "0.6 L / 100km" },
        "525d xDrive (218 HP)": { originalHp: 218, optimizedHp: 260, originalTorque: 450, optimizedTorque: 520, saving: "0.7 L / 100km" }
      }
    }
  },
  Volkswagen: {
    "Golf": {
      "Golf 7 (2012-2020)": {
        "1.6 TDI (105 HP)": { originalHp: 105, optimizedHp: 140, originalTorque: 250, optimizedTorque: 310, saving: "0.5 L / 100km" },
        "1.4 TSI (125 HP)": { originalHp: 125, optimizedHp: 155, originalTorque: 200, optimizedTorque: 250, saving: "0.4 L / 100km" },
        "2.0 TDI (150 HP)": { originalHp: 150, optimizedHp: 185, originalTorque: 320, optimizedTorque: 390, saving: "0.6 L / 100km" }
      },
      "Golf 8 (2020-2026)": {
        "1.5 eTSI (150 HP)": { originalHp: 150, optimizedHp: 180, originalTorque: 250, optimizedTorque: 300, saving: "0.4 L / 100km" }
      }
    },
    "Passat": {
      "B8 (2014-2023)": {
        "1.6 TDI (120 HP)": { originalHp: 120, optimizedHp: 150, originalTorque: 250, optimizedTorque: 310, saving: "0.5 L / 100km" },
        "2.0 TDI (150 HP)": { originalHp: 150, optimizedHp: 190, originalTorque: 340, optimizedTorque: 410, saving: "0.6 L / 100km" },
        "1.5 TSI (150 HP)": { originalHp: 150, optimizedHp: 180, originalTorque: 250, optimizedTorque: 300, saving: "0.4 L / 100km" }
      }
    }
  },
  Audi: {
    "A4": {
      "B9 (2015-2024)": {
        "2.0 TDI (150 HP)": { originalHp: 150, optimizedHp: 190, originalTorque: 320, optimizedTorque: 400, saving: "0.6 L / 100km" },
        "2.0 TFSI (190 HP)": { originalHp: 190, optimizedHp: 245, originalTorque: 320, optimizedTorque: 380, saving: "0.5 L / 100km" }
      }
    }
  },
  Renault: {
    "Megane": {
      "Megane 4 (2016-2024)": {
        "1.5 dCi (110 HP)": { originalHp: 110, optimizedHp: 135, originalTorque: 260, optimizedTorque: 320, saving: "0.5 L / 100km" },
        "1.3 TCe (140 HP)": { originalHp: 140, optimizedHp: 165, originalTorque: 240, optimizedTorque: 290, saving: "0.4 L / 100km" }
      }
    },
    "Clio": {
      "Clio 5 (2019-2026)": {
        "1.0 TCe (100 HP)": { originalHp: 100, optimizedHp: 120, originalTorque: 160, optimizedTorque: 200, saving: "0.3 L / 100km" },
        "1.5 dCi (85 HP)": { originalHp: 85, optimizedHp: 110, originalTorque: 220, optimizedTorque: 270, saving: "0.4 L / 100km" }
      }
    }
  },
  Fiat: {
    "Egea": {
      "Egea (2015-2026)": {
        "1.3 Multijet (95 HP)": { originalHp: 95, optimizedHp: 115, originalTorque: 200, optimizedTorque: 240, saving: "0.4 L / 100km" },
        "1.6 Multijet (120 HP)": { originalHp: 120, optimizedHp: 150, originalTorque: 320, optimizedTorque: 380, saving: "0.5 L / 100km" },
        "1.4 Fire (95 HP)": { originalHp: 95, optimizedHp: 105, originalTorque: 127, optimizedTorque: 140, saving: "0.2 L / 100km" }
      }
    }
  }
};

export default function VehicleAnalysis() {
  
  // Set default selection to BMW 3 Series F30 320d for a beautiful initial load
  const [selectedBrand, setSelectedBrand] = useState("BMW");
  const [selectedModel, setSelectedModel] = useState("3 Serisi");
  const [selectedSeries, setSelectedSeries] = useState("F30 (2012-2019)");
  const [selectedEngine, setSelectedEngine] = useState("320d (184 HP)");
  const [activeSpecs, setActiveSpecs] = useState(null);

  useEffect(() => {
    // Load default specs
    if (vehicleDb["BMW"]?.["3 Serisi"]?.["F30 (2012-2019)"]?.["320d (184 HP)"]) {
      setActiveSpecs(vehicleDb["BMW"]["3 Serisi"]["F30 (2012-2019)"]["320d (184 HP)"]);
    }
  }, []);

  // Handlers for dynamic dropdown updates
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedModel("");
    setSelectedSeries("");
    setSelectedEngine("");
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
    setSelectedSeries("");
    setSelectedEngine("");
  };

  const handleSeriesChange = (series) => {
    setSelectedSeries(series);
    setSelectedEngine("");
  };

  const handleEngineChange = (engine) => {
    setSelectedEngine(engine);
  };

  const handleAnalyze = () => {
    if (selectedBrand && selectedModel && selectedSeries && selectedEngine) {
      const specs = vehicleDb[selectedBrand]?.[selectedModel]?.[selectedSeries]?.[selectedEngine];
      if (specs) {
        setActiveSpecs(specs);
      }
    }
  };

  // Generate lists based on current state
  const brandList = Object.keys(vehicleDb);
  const modelList = selectedBrand ? Object.keys(vehicleDb[selectedBrand] || {}) : [];
  const seriesList = (selectedBrand && selectedModel) ? Object.keys(vehicleDb[selectedBrand][selectedModel] || {}) : [];
  const engineList = (selectedBrand && selectedModel && selectedSeries) ? Object.keys(vehicleDb[selectedBrand][selectedModel][selectedSeries] || {}) : [];
>>>>>>> master

  return (
    <section
      id="arac-analizi"
<<<<<<< HEAD
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
            Aracınızın fabrika çıkış verileriyle Most Bilişim&apos;in sunduğu optimize
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
=======
      className="relative bg-white pb-32 sm:pb-40 pt-28 sm:pt-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-20 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-md tracking-tight">
            Araç Analizi
          </h2>
          <p className="text-black text-body-lg max-w-lg">
            Aracınızın fabrika çıkış verileriyle Most Stage 1 yazılımının sunduğu optimize değerleri yan yana inceleyin. Güç artışını ve verimlilik farkını teknik verilerle analiz edin.
          </p>
        </div>

        {/* Filter Bar & Interactive Display */}
        <div className="bg-grey-medium rounded-3xl p-6 sm:p-10 border border-grey-medium shadow-xl shadow-grey-medium/50">
          {/* Filters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-grey-dark tracking-wider pl-6">Marka</label>
              <div className="relative">
                <select
                  value={selectedBrand}
                  onChange={(e) => handleBrandChange(e.target.value)}
                  className="w-full appearance-none bg-white border border-grey-medium rounded-full px-6 py-3 pr-10 text-sm text-black font-semibold cursor-pointer hover:border-grey-dark transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#001AFF]"
                >
                  <option value="">Marka Seçin</option>
                  {brandList.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-dark pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-grey-dark tracking-wider pl-6">Model</label>
              <div className="relative">
                <select
                  value={selectedModel}
                  disabled={!selectedBrand}
                  onChange={(e) => handleModelChange(e.target.value)}
                  className="w-full appearance-none bg-white border border-grey-medium rounded-full px-6 py-3 pr-10 text-sm text-black font-semibold cursor-pointer hover:border-grey-dark transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#001AFF] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Model Seçin</option>
                  {modelList.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-dark pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-grey-dark tracking-wider pl-6">Seri</label>
              <div className="relative">
                <select
                  value={selectedSeries}
                  disabled={!selectedModel}
                  onChange={(e) => handleSeriesChange(e.target.value)}
                  className="w-full appearance-none bg-white border border-grey-medium rounded-full px-6 py-3 pr-10 text-sm text-black font-semibold cursor-pointer hover:border-grey-dark transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#001AFF] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Seri Seçin</option>
                  {seriesList.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-dark pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-grey-dark tracking-wider pl-6">Motor</label>
              <div className="relative">
                <select
                  value={selectedEngine}
                  disabled={!selectedSeries}
                  onChange={(e) => handleEngineChange(e.target.value)}
                  className="w-full appearance-none bg-white border border-grey-medium rounded-full px-6 py-3 pr-10 text-sm text-black font-semibold cursor-pointer hover:border-grey-dark transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#001AFF] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">Motor Seçin</option>
                  {engineList.map((e) => (
                    <option key={e} value={e}>{e}</option>
                  ))}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-dark pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!selectedEngine}
              className="w-full py-3 px-6 bg-black text-white text-sm font-semibold rounded-full hover:bg-[#001AFF] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed h-[46px]"
            >
              Analiz Et
            </button>
          </div>

          {/* Results Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Red SUV Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/car-suv.png"
                  alt="Araç Görseli"
                  width={500}
                  height={330}
                  className="w-full h-auto object-contain p-8"
                />
                {/* Ground reflection shadow */}
                <div className="w-4/5 h-6 bg-black/10 rounded-full blur-xl mx-auto -mt-4" />
              </div>
            </div>

            {/* Spec Comparison Table */}
            <div className="lg:col-span-7">
              {activeSpecs ? (
                <div className="bg-white rounded-2xl border border-grey-light overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-grey-light/60 border-b border-grey-medium/50">
                        <th className="py-4 px-6 text-xs font-bold text-grey-dark">Parametre</th>
                        <th className="py-4 px-6 text-xs font-bold text-grey-dark">Orijinal</th>
                        <th className="py-4 px-6 text-xs font-bold text-grey-dark text-[#001AFF]">most. Yazılım</th>
                        <th className="py-4 px-6 text-xs font-bold text-grey-dark text-green-600">Değişim</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-grey-light">
                      <tr className="hover:bg-grey-light/50 transition-colors">
                        <td className="py-5 px-6 font-bold text-black text-sm">Güç (HP)</td>
                        <td className="py-5 px-6 font-semibold text-black text-sm">{activeSpecs.originalHp} HP</td>
                        <td className="py-5 px-6 font-bold text-[#001AFF] text-sm">{activeSpecs.optimizedHp} HP</td>
                        <td className="py-5 px-6 font-bold text-green-600 text-sm">
                          +{activeSpecs.optimizedHp - activeSpecs.originalHp} HP (+{Math.round(((activeSpecs.optimizedHp - activeSpecs.originalHp) / activeSpecs.originalHp) * 100)}%)
                        </td>
                      </tr>
                      <tr className="hover:bg-grey-light/50 transition-colors">
                        <td className="py-5 px-6 font-bold text-black text-sm">Tork (Nm)</td>
                        <td className="py-5 px-6 font-semibold text-black text-sm">{activeSpecs.originalTorque} Nm</td>
                        <td className="py-5 px-6 font-bold text-[#001AFF] text-sm">{activeSpecs.optimizedTorque} Nm</td>
                        <td className="py-5 px-6 font-bold text-green-600 text-sm">
                          +{activeSpecs.optimizedTorque - activeSpecs.originalTorque} Nm (+{Math.round(((activeSpecs.optimizedTorque - activeSpecs.originalTorque) / activeSpecs.originalTorque) * 100)}%)
                        </td>
                      </tr>
                      <tr className="hover:bg-grey-light/50 transition-colors">
                        <td className="py-5 px-6 font-bold text-black text-sm">Yakıt Tüketimi</td>
                        <td className="py-5 px-6 font-semibold text-black text-xs sm:text-sm">Fabrika Değeri</td>
                        <td className="py-5 px-6 font-bold text-[#001AFF] text-xs sm:text-sm">Optimize Edildi</td>
                        <td className="py-5 px-6 font-bold text-green-600 text-xs sm:text-sm">-{activeSpecs.saving}*</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="py-3 px-6 bg-grey-light/70 border-t border-grey-light">
                    <p className="text-[10px] text-grey-dark italic">
                      * Yakıt verileri kullanıma ve yol şartlarına bağlı olarak değişkenlik gösterebilir.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center border border-dashed border-grey-medium rounded-2xl p-12 text-center bg-white h-[280px]">
                  <svg className="w-12 h-12 text-grey-dark mb-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <p className="text-grey-dark text-sm font-semibold">Lütfen aracınızın teknik detaylarını yukarıdan seçin.</p>
                </div>
              )}
            </div>
>>>>>>> master
          </div>
        </div>
      </div>
    </section>
  );
}
