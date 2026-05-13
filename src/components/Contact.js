"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    year: "",
    engineType: "",
    subject: "",
    message: "",
    kvkk: false,
  });

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    alert("Formunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.");
  };

  return (
    <section id="iletisim" ref={sectionRef} className="relative">
      {/* CTA Banner */}
      <div className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-hidden">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Bir sorunuz mu var? Formu doldurun, Most ekibi size dönüş yapacaktır.
          </h2>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-900 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-hidden">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              İletişim Bilgileri
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-400 text-sm mb-10">
              <span>+90 (551) 966 22 91</span>
              <span>info@mostsolution.com</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: İsim, Soyisim, E-posta */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-400 mb-1.5"
                  >
                    İsim*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="İsim Girin"
                    className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-2 focus:border-[#3366FF] focus:outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="surname"
                    className="block text-xs font-medium text-gray-400 mb-1.5"
                  >
                    Soyisim*
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    required
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder="Soyisim"
                    className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-2 focus:border-[#3366FF] focus:outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-400 mb-1.5"
                  >
                    E-posta Adresi
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mostsample@gmail.com"
                    className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-2 focus:border-[#3366FF] focus:outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Row 2: Telefon, Araç Markası, Araç Üretim Yılı */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-gray-400 mb-1.5"
                  >
                    Telefon Numarası*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 XXX XXX XX XX"
                    className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-2 focus:border-[#3366FF] focus:outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="brand"
                    className="block text-xs font-medium text-gray-400 mb-1.5"
                  >
                    Araç Markası
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="Marka"
                    className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-2 focus:border-[#3366FF] focus:outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="year"
                    className="block text-xs font-medium text-gray-400 mb-1.5"
                  >
                    Araç Üretim Yılı
                  </label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="2024"
                    className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-2 focus:border-[#3366FF] focus:outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* Row 3: Konu */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-gray-400 mb-1.5"
                >
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Araç Bakımı"
                  className="w-full bg-transparent border-b border-gray-700 text-white text-sm py-2 focus:border-[#3366FF] focus:outline-none transition-colors placeholder:text-gray-600"
                />
              </div>

              {/* Row 4: Mesaj */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-400 mb-1.5"
                >
                  Mesaj*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm p-4 focus:border-[#3366FF] focus:outline-none transition-colors placeholder:text-gray-600 resize-none"
                />
              </div>

              {/* KVKK */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="kvkk"
                  name="kvkk"
                  checked={formData.kvkk}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 accent-[#3366FF] bg-gray-700 border-gray-600 rounded cursor-pointer"
                />
                <label
                  htmlFor="kvkk"
                  className="text-xs text-gray-500 cursor-pointer leading-relaxed"
                >
                  KVKK Aydınlatma Metnini okudum ve kabul ediyorum.*
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="submit-btn"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#3366FF] text-white text-sm font-semibold rounded-lg hover:bg-[#2952CC] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
