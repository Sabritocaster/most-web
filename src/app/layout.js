import "./globals.css";

export const metadata = {
  title: "MOST | Aracınız İçin Akıllı Çözümler",
  description:
    "Profesyonel yazılım ve temizlik araçlarımızla aracınızın verimini arttırıyoruz. Chip Tuning, DPF Temizliği, Katalizör Temizliği ve Araç Analizi hizmetleri.",
  keywords:
    "chip tuning, dpf temizliği, katalizör temizliği, araç yazılım, araç analizi, most solution",
  openGraph: {
    title: "MOST | Aracınız İçin Akıllı Çözümler",
    description:
      "Profesyonel yazılım ve temizlik araçlarımızla aracınızın verimini arttırıyoruz.",
    type: "website",
    url: "https://mostsolution.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
