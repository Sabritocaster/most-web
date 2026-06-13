"use client";

import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    carModel: "",
    carYear: "",
    subject: "",
    message: "",
    kvkk: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.kvkk) {
      alert("Lütfen KVKK Aydınlatma Metnini onaylayınız.");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/mostsolutions26@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: "MOST Web Sitesi Yeni İletişim Formu",
          "İsim": formData.firstName,
          "Soyisim": formData.lastName,
          "E-posta": formData.email || "Belirtilmedi",
          "Telefon": formData.phone,
          "Araç Modeli": formData.carModel || "Belirtilmedi",
          "Araç Üretim Yılı": formData.carYear || "Belirtilmedi",
          "Başlık": formData.subject,
          "Mesaj": formData.message,
          _template: "table",
        }),
      });

      if (response.ok) {
        alert("Formunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          carModel: "",
          carYear: "",
          subject: "",
          message: "",
          kvkk: false,
        });
      } else {
        alert("Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" className="relative w-full bg-grey-dark pb-24 sm:pb-32 pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-20 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-5xl mx-auto">
            Bir sorunuz mu var? Formu doldurun, Most ekibi size dönüş yapacaktır.
          </h2>
        </div>

        {/* Card */}
        <div className="bg-[#231F20] rounded-[32px] p-8 md:p-12 lg:p-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Contact details & Required notice */}
            <div className="lg:col-span-4 flex flex-col justify-between min-h-[250px]">
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
                  İletişim Bilgileri
                </h3>
                <div className="flex flex-col gap-3 text-[#C2C2C2] text-sm font-semibold">
                  <a href="tel:+905519662291" className="hover:text-white transition-colors duration-300">
                    +90 (551) 966 22 91
                  </a>
                  <a href="mailto:info@mostsolution.com" className="hover:text-white transition-colors duration-300">
                    info@mostsolution.com
                  </a>
                </div>
              </div>
              
              <div className="mt-8 text-[11px] text-[#C2C2C2]/50 font-medium tracking-wide">
                *Doldurulması Gerekli Alan
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
                  {/* İsim */}
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-[#C2C2C2] mb-1.5">
                      İsim*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C2C2C2]/40 text-white text-sm pb-2 hover:border-white focus:border-white focus:outline-none transition-colors placeholder:text-white/60 font-semibold"
                    />
                  </div>

                  {/* Soyisim */}
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-[#C2C2C2] mb-1.5">
                      Soyisim*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C2C2C2]/40 text-white text-sm pb-2 hover:border-white focus:border-white focus:outline-none transition-colors placeholder:text-white/60 font-semibold"
                    />
                  </div>

                  {/* E-posta Adresi */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[#C2C2C2] mb-1.5">
                      E-posta Adresi
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C2C2C2]/40 text-white text-sm pb-2 hover:border-white focus:border-white focus:outline-none transition-colors placeholder:text-white/60 font-semibold"
                    />
                  </div>

                  {/* Telefon Numarası */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#C2C2C2] mb-1.5">
                      Telefon Numarası*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C2C2C2]/40 text-white text-sm pb-2 hover:border-white focus:border-white focus:outline-none transition-colors placeholder:text-white/60 font-semibold"
                    />
                  </div>

                  {/* Araç Modeli */}
                  <div>
                    <label htmlFor="carModel" className="block text-xs font-semibold text-[#C2C2C2] mb-1.5">
                      Araç Modeli
                    </label>
                    <input
                      type="text"
                      id="carModel"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C2C2C2]/40 text-white text-sm pb-2 hover:border-white focus:border-white focus:outline-none transition-colors placeholder:text-white/60 font-semibold"
                    />
                  </div>

                  {/* Araç Üretim Yılı */}
                  <div>
                    <label htmlFor="carYear" className="block text-xs font-semibold text-[#C2C2C2] mb-1.5">
                      Araç Üretim Yılı
                    </label>
                    <input
                      type="text"
                      id="carYear"
                      name="carYear"
                      value={formData.carYear}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C2C2C2]/40 text-white text-sm pb-2 hover:border-white focus:border-white focus:outline-none transition-colors placeholder:text-white/60 font-semibold"
                    />
                  </div>

                  {/* Başlık */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#C2C2C2] mb-1.5">
                      Başlık*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#C2C2C2]/40 text-white text-sm pb-2 hover:border-white focus:border-white focus:outline-none transition-colors placeholder:text-white/60 font-semibold"
                    />
                  </div>
                </div>

                {/* Mesaj */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#C2C2C2] mb-2">
                    Mesaj*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#EAEAEA] text-black text-sm p-4 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-white/30 transition-all font-semibold resize-none"
                  />
                </div>

                {/* KVKK & Submit Button */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4 border-t border-[#C2C2C2]/10">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="kvkk"
                      name="kvkk"
                      checked={formData.kvkk}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[#001AFF] bg-black border-black rounded cursor-pointer"
                    />
                    <label htmlFor="kvkk" className="text-xs text-[#C2C2C2] cursor-pointer leading-relaxed hover:text-white transition-colors">
                      KVKK Aydınlatma Metnini okudum, anladım ve kabul ediyorum. *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-10 py-4 bg-[#EAEAEA] text-black text-sm font-bold rounded-full transition-all duration-300 ${
                      isSubmitting
                        ? "opacity-75 cursor-not-allowed"
                        : "hover:bg-[#001AFF] hover:text-white"
                    }`}
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
                  </button>
                </div>

              </form>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
