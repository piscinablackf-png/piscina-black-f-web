export default function Services() {
  const services = [
    { 
      title: 'Instalación Completa', 
      desc: 'Servicio "Llave en mano". Incluimos excavación, flete, equipamiento Vulcano y la entregamos funcionando al 100%.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/>
          <path d="M14 9h4l4 4v5h-3"/>
          <circle cx="7" cy="18" r="2"/>
          <path d="M15 18H9"/>
          <circle cx="17" cy="18" r="2"/>
        </svg>
      )
    },
    { 
      title: 'Venta Directa (Solo Casco)', 
      desc: 'Adquiere tu piscina de fibra de vidrio directo de fábrica. Ideal si prefieres gestionar la instalación por tu cuenta.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    { 
      title: 'Reparación y Restauración', 
      desc: 'Expertos en reparación estructural y estética de piscinas de losa, hormigón y fibra de vidrio. Déjala como nueva.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="m14.7 13.5 5.5 5.5-2.2 2.2-5.5-5.5"/>
          <circle cx="9" cy="9" r="6"/>
          <path d="M11.5 6.5 9 9"/>
        </svg>
      )
    },
    { 
      title: 'Mantenimiento Técnico', 
      desc: 'Servicio especializado en mantención preventiva y correctiva de salas de bombas, filtros y equipamiento.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Soluciones Integrales para <span className="text-cyan-400">tu Piscina</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Desde la venta directa de fábrica hasta la restauración y mantención de tu piscina actual. Somos especialistas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-black/40 p-8 rounded-3xl border border-blue-900/50 hover:border-cyan-400/50 transition-colors group flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 border border-cyan-900/30 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-cyan-900/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Llamado a la acción (CTA) */}
        <div className="text-center">
          <a href="#cotizar" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            Cotizar un Servicio
          </a>
        </div>
      </div>
    </section>
  );
}
