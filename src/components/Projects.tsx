"use client";

import { useState, useEffect } from "react";

export default function Projects() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Imágenes principales para la vista previa
  const previewImages = [
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826965/0bde7db2-b43c-4705-b2bb-27bae9a54867.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826977/1c4e4da3-f733-421b-8be7-b0a34683a51b.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826990/ecd74e01-4283-43fc-b2af-a446228a20bc.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80827022/037fd400-07ec-4457-9fe9-2afc2f2e50e5.jpeg'
  ];

  // Todas las imágenes rescatadas para la galería completa
  const allImages = [
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826939/a8807feb-df6c-4630-988b-093b61da28c5.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826940/4f842d4e-11dd-4c5c-92df-a9b736cc07db.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826950/dc792fa1-fd3c-4af4-987c-946397df7bba.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826951/08dedb86-b588-4328-9a2a-6b2c82458e05.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826965/0bde7db2-b43c-4705-b2bb-27bae9a54867.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826966/6c0918ea-6442-482a-94b8-b15d609a042a.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826977/1c4e4da3-f733-421b-8be7-b0a34683a51b.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826978/c7ff68fc-3fe9-4202-a614-f10f913d1709.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826990/ecd74e01-4283-43fc-b2af-a446228a20bc.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80826991/69c030d0-ca8e-48fe-a678-77fd1de9eafc.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80827022/037fd400-07ec-4457-9fe9-2afc2f2e50e5.jpeg',
    'https://cdnx.jumpseller.com/piscina-black-f/image/80827023/434158de-b1cf-4ce1-945b-04e765db49e7.jpeg'
  ];

  // Prevenir scroll en el body cuando la galería está abierta
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen]);

  return (
    <section id="proyectos" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos <span className="text-cyan-400">Realizados</span></h2>
            <p className="text-gray-400 max-w-2xl">Un vistazo a nuestras instalaciones más recientes y destacadas.</p>
          </div>
          <button 
            onClick={() => setIsGalleryOpen(true)}
            className="px-6 py-3 bg-transparent border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black font-semibold transition-all duration-300"
          >
            Ver Galería Completa
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group h-64 md:h-[400px] rounded-3xl overflow-hidden relative border border-blue-900/30 cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
            <img src={previewImages[0]} alt="Proyecto principal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-semibold text-lg">Residencia Moderna</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="group h-full min-h-[150px] md:h-[190px] rounded-3xl overflow-hidden relative border border-blue-900/30 cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
              <img src={previewImages[1]} alt="Proyecto 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="group h-full min-h-[150px] md:h-[190px] rounded-3xl overflow-hidden relative border border-blue-900/30 cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
              <img src={previewImages[2]} alt="Proyecto 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="group h-full min-h-[150px] md:h-[190px] col-span-2 rounded-3xl overflow-hidden relative border border-blue-900/30 cursor-pointer" onClick={() => setIsGalleryOpen(true)}>
              <img src={previewImages[3]} alt="Proyecto 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">Diseño Compacto</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Galería Completa */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-md">
          {/* Header del Modal */}
          <div className="absolute top-0 left-0 w-full p-4 sm:p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-10">
            <h3 className="text-2xl font-bold text-white">Galería de <span className="text-cyan-400">Proyectos</span></h3>
            <button 
              onClick={() => setIsGalleryOpen(false)}
              className="p-2 bg-white/10 hover:bg-cyan-500 hover:text-black text-white rounded-full transition-colors"
              aria-label="Cerrar galería"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Grid de imágenes scrollable */}
          <div className="w-full h-full overflow-y-auto p-4 sm:p-8 pt-24 pb-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allImages.map((src, index) => (
                <div key={index} className="group relative h-64 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-colors">
                  <img 
                    src={src} 
                    alt={`Proyecto Piscina Black-F ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-full font-semibold backdrop-blur-sm">Proyecto {index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 mb-8">
              <a 
                href="#cotizar"
                onClick={() => setIsGalleryOpen(false)}
                className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-10 rounded-full text-lg transition-all hover:scale-105"
              >
                Quiero una piscina así
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
