"use client";

<<<<<<< HEAD
import { useEffect, useRef } from "react";
=======
>>>>>>> master
import Image from "next/image";

const services = [
  {
    id: "chip-tuning",
    title: "Chip Tuning & Yazılım Çözümleri",
    description:
<<<<<<< HEAD
      "Aracınızın performansını optimize edin. EGR, DPF ve AdBlue sistemleri için profesyonel yazılım çözümleri ile birlikte katalizör kurtulur ve yakıt verimliliğini artırın.",
    image: "/chip-tuning.png",
    tags: ["EGR İptal", "DPF İptal", "AdBlue Çözümleri"],
    imagePosition: "right",
=======
      "Aracınızın performansını optimize edin. EGR, DPF ve AdBlue sistemleri için profesyonel yazılım iptalleri ile kronik hatalardan kurtulun ve yakıt verimliliğini artırın.",
    image: "/chip-tuning.png",
    tags: ["EGR İptal", "DPF İptal", "AdBlue Çözümleri"],
    imagePosition: "left",
>>>>>>> master
  },
  {
    id: "dpf-temizligi",
    title: "Partikül Filtre (DPF) Temizliği",
    description:
<<<<<<< HEAD
      "Tıkanan partikül filtrelerinizi profesyonel makinelerle temizleyerek motorun rahat nefes almasını sağlıyoruz. Egzoz emisyon değerlerini normale döndürür, çeliş hatları ortadan kaldırırız.",
    image: "/dpf-filter.png",
    tags: ["Emisyon Kontrolü", "Performans Artışı", "DPF Temizliği"],
    imagePosition: "left",
  },
  {
    id: "kataliz-temizligi",
    title: "Katalizör Temizliği",
    description:
      "Katalitik konvertörünüzü değiştirmeden önce temizliğini deneyin. Kurum ve karbon birikintilerini temizleyerek motor araca tamirda sorularınızı çözer ve çevre dostu sürüş sağlarız.",
    image: "/catalytic-converter.png",
    tags: ["Maliyet Tasarrufu", "Yeşil Teknoloji"],
    imagePosition: "right",
=======
      "Tıkanmış partikül filtrelerini profesyonel makinelerle temizleyerek motorun nefes almasını sağlıyoruz. Egzoz emisyon değerlerini normale döndürür, çekiş kaybını önleriz.",
    image: "/dpf-filter.png",
    tags: ["Emisyon Kontrolü", "Performans Artışı", "DPF Temizliği"],
    imagePosition: "right",
  },
  {
    id: "katalizor-temizligi",
    title: "Katalizör Temizliği",
    description:
      "Katalitik konvertörünüzü değiştirmeden önce temizliği deneyin. Kurum ve karbon birikintilerini temizleyerek motor arıza lambası sorunlarını çözer ve çevre dostu sürüş sağlıyoruz.",
    image: "/catalytic-converter.png",
    tags: ["Katalizör Bakımı", "Arıza Giderme", "Yakıt Tasarrufu"],
    imagePosition: "left",
>>>>>>> master
  },
];

export default function Services() {
<<<<<<< HEAD
  const sectionRef = useRef(null);

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

  return (
    <section
      id="hizmetlerimiz"
      ref={sectionRef}
      className="relative bg-[#3366FF] py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-hidden">
          <span className="inline-block text-sm font-semibold text-blue-200 tracking-wider uppercase mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
=======
  return (
    <section
      id="hizmetlerimiz"
      className="relative bg-[#001AFF] pb-24 sm:pb-32 pt-20 sm:pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-24">
          <span className="inline-block text-sm font-semibold text-[#EAEAEA] tracking-wider mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-5xl mx-auto">
>>>>>>> master
            Profesyonel yazılım ve temizlik araçlarımızla aracınızın verimini
            arttırıyoruz.
          </h2>
        </div>

        {/* Service Cards */}
<<<<<<< HEAD
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`scroll-hidden bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`flex flex-col ${
                  service.imagePosition === "left"
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <div className="relative aspect-square max-w-[300px] mx-auto bg-gray-50 rounded-xl overflow-hidden p-6">
=======
        <div className="flex flex-col space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl w-full lg:w-[85%] ${
                service.imagePosition === "left" ? "mr-auto" : "ml-auto"
              }`}
            >
              <div
                className={`flex flex-col ${service.imagePosition === "left"
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                  } gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-2/5 flex-shrink-0 flex items-center justify-center">
                  <div className="relative w-full max-w-[320px]">
>>>>>>> master
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
<<<<<<< HEAD
                      height={400}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
=======
                      height={300}
                      className="w-full h-auto object-contain"
>>>>>>> master
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-3/5">
<<<<<<< HEAD
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
=======
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-black leading-relaxed mb-6 text-base">
>>>>>>> master
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
<<<<<<< HEAD
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#3366FF] bg-blue-50 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors duration-300 cursor-default"
=======
                        className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-[#001AFF] bg-[#F4F4F4] rounded-full hover:bg-[#EAEAEA] transition-colors duration-300 cursor-default"
>>>>>>> master
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
