"use client";

import { useState } from "react";

type Model = {
  id: number;
  name: string;
  desc: string;
  image: string;
  details: {
    length: string;
    width: string;
    depth: string;
    material: string;
  };
};

export default function Models() {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const models: Model[] = [
    { 
      id: 1, 
      name: 'Piscina 3 x 2 m', 
      desc: 'Piscina compacta, perfecta para espacios reducidos. Ideal para refrescarse y disfrutar en familia.',
      image: 'https://cdnx.jumpseller.com/piscina-black-f/image/80827022/037fd400-07ec-4457-9fe9-2afc2f2e50e5.jpeg',
      details: {
        length: '3.00 m',
        width: '2.00 m',
        depth: '1.00 m uniforme',
        material: 'Fibra de vidrio'
      }
    },
    { 
      id: 2, 
      name: 'Piscina 4,80 x 2,60 m', 
      desc: 'Opción intermedia que optimiza el espacio. Diseño moderno con variación de profundidad.',
      image: 'https://cdnx.jumpseller.com/piscina-black-f/image/80826950/dc792fa1-fd3c-4af4-987c-946397df7bba.jpeg',
      details: {
        length: '4.80 m',
        width: '2.60 m',
        depth: '1.35 a 1.10 m',
        material: 'Fibra de vidrio'
      }
    },
    { 
      id: 3, 
      name: 'Piscina 5,30 x 3,10 m', 
      desc: 'Tamaño versátil y medidas especiales que se adaptan a diversos patios. Diseño elegante.',
      image: 'https://cdnx.jumpseller.com/piscina-black-f/image/80826990/ecd74e01-4283-43fc-b2af-a446228a20bc.jpeg',
      details: {
        length: '5.30 m',
        width: '3.10 m',
        depth: '1.60 a 1.10 m',
        material: 'Fibra de vidrio'
      }
    },
    { 
      id: 4, 
      name: 'Piscina 6 x 3 m', 
      desc: 'La medida clásica más buscada. Espacio ideal para nadar y jugar en tu propio terreno.',
      image: 'https://cdnx.jumpseller.com/piscina-black-f/image/80826965/0bde7db2-b43c-4705-b2bb-27bae9a54867.jpeg',
      details: {
        length: '6.00 m',
        width: '3.00 m',
        depth: '1.60 a 1.10 m',
        material: 'Fibra de vidrio'
      }
    },
    { 
      id: 5, 
      name: 'Piscina 7 x 3,40 m', 
      desc: 'Gran amplitud para disfrutar sin límites. Incluye escalera integrada y declive suave.',
      image: 'https://cdnx.jumpseller.com/piscina-black-f/image/80826940/4f842d4e-11dd-4c5c-92df-a9b736cc07db.jpeg',
      details: {
        length: '7.00 m',
        width: '3.40 m',
        depth: '1.70 a 1.10 m',
        material: 'Fibra de vidrio'
      }
    },
    { 
      id: 6, 
      name: 'Piscina 9 x 3,40 m', 
      desc: 'Nuestro modelo más grande. Una verdadera piscina premium para tu hogar, lista para disfrutar.',
      image: 'https://cdnx.jumpseller.com/piscina-black-f/image/80826939/a8807feb-df6c-4630-988b-093b61da28c5.jpeg',
      details: {
        length: '9.00 m',
        width: '3.40 m',
        depth: '1.90 a 1.10 m',
        material: 'Fibra de vidrio'
      }
    },
  ];

  return (
    <section id="modelos" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros <span className="text-cyan-400">Modelos</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Descubre las dimensiones y características de cada piscina para encontrar tu diseño perfecto.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.id} className="bg-blue-950/30 rounded-2xl overflow-hidden border border-blue-900/50 hover:border-cyan-400/80 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] flex flex-col">
              <div className="h-56 w-full relative overflow-hidden bg-blue-900/50 cursor-pointer" onClick={() => setSelectedModel(model)}>
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{model.name}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">{model.desc}</p>
                <button 
                  onClick={() => setSelectedModel(model)}
                  className="w-full py-3 bg-blue-900/40 hover:bg-cyan-500 hover:text-black border border-cyan-400/30 text-cyan-400 font-semibold rounded-xl flex items-center justify-center gap-2 text-sm uppercase tracking-wider transition-all duration-300"
                >
                  Ver detalles <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalles del Modelo */}
      {selectedModel && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          {/* Fondo oscuro desenfocado (Backdrop) */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedModel(null)}
          ></div>
          
          {/* Contenedor del Modal */}
          <div className="relative bg-blue-950 border border-blue-800 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/20 w-full max-w-4xl flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setSelectedModel(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-cyan-500 hover:text-black text-white rounded-full backdrop-blur-md transition-colors"
              aria-label="Cerrar detalles"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Imagen Izquierda */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-blue-900 relative">
              <img 
                src={selectedModel.image} 
                alt={selectedModel.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-blue-950 via-transparent to-transparent"></div>
            </div>

            {/* Contenido Derecha */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center overflow-y-auto">
              <h3 className="text-3xl font-bold text-white mb-2">{selectedModel.name}</h3>
              <p className="text-cyan-400 text-sm font-semibold mb-6 uppercase tracking-wider">Especificaciones Técnicas</p>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                {selectedModel.desc}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-blue-900/50 pb-3">
                  <span className="text-gray-400">Largo</span>
                  <span className="text-white font-medium">{selectedModel.details.length}</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-900/50 pb-3">
                  <span className="text-gray-400">Ancho</span>
                  <span className="text-white font-medium">{selectedModel.details.width}</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-900/50 pb-3">
                  <span className="text-gray-400">Profundidad</span>
                  <span className="text-white font-medium">{selectedModel.details.depth}</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-900/50 pb-3">
                  <span className="text-gray-400">Material</span>
                  <span className="text-white font-medium text-right">{selectedModel.details.material}</span>
                </div>
              </div>

              <div className="mt-auto">
                <a 
                  href="#cotizar"
                  onClick={() => setSelectedModel(null)}
                  className="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition-colors"
                >
                  Cotizar este modelo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
