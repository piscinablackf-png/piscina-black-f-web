import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.piscinablackf.cl"),
  title: "Piscina Black-F | Piscinas de Lujo en La Serena",
  description: "Diseño, construcción y mantenimiento de piscinas exclusivas en La Serena y Región Metropolitana. Especialistas en piscinas llave en mano, reparación y venta directa de fábrica.",
  openGraph: {
    title: "Piscina Black-F | Piscinas de Lujo en La Serena",
    description: "Diseño, construcción y mantenimiento de piscinas exclusivas. Especialistas en piscinas llave en mano, reparación y venta directa de fábrica.",
    url: "https://www.piscinablackf.cl",
    siteName: "Piscina Black-F",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
