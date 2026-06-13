"use client";

import Image from "next/image";

const services = [
  {
    id: "chip-tuning",
    title: "Chip Tuning & Yazılım Çözümleri",
    description:
      "Aracınızın performansını optimize edin. EGR, DPF ve AdBlue sistemleri için profesyonel yazılım iptalleri ile kronik hatalardan kurtulun ve yakıt verimliliğini artırın.",
    image: "/chip-tuning.png",
    tags: ["EGR İptal", "DPF İptal", "AdBlue Çözümleri"],
    imagePosition: "left",
  },
  {
    id: "dpf-temizligi",
    title: "Partikül Filtre (DPF) Temizliği",
    description:
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
  },
];

export default function Services() {
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
            Profesyonel yazılım ve temizlik araçlarımızla aracınızın verimini
            arttırıyoruz.
          </h2>
        </div>

        {/* Service Cards */}
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
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-3/5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-black leading-relaxed mb-6 text-base">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-[#001AFF] bg-[#F4F4F4] rounded-full hover:bg-[#EAEAEA] transition-colors duration-300 cursor-default"
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
