export default function Services() {
  const services = [
    { 
      title: 'Instalación Completa', 
      desc: 'Incluimos excavación con retroexcavadora y flete directo a tu terreno.',
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
      title: 'Equipamiento Premium', 
      desc: 'Instalación completa con Bomba Vulcano (italiana) de alta calidad.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="m14.7 13.5 5.5 5.5-2.2 2.2-5.5-5.5"/>
          <circle cx="9" cy="9" r="6"/>
          <path d="M11.5 6.5 9 9"/>
        </svg>
      )
    },
    { 
      title: 'Garantía de 2 Años', 
      desc: 'Calidad, lujo y confianza para tu hogar. Respaldamos fuertemente nuestro trabajo.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    { 
      title: 'Lista para Disfrutar', 
      desc: 'Entregamos la piscina funcionando al 100% en tu propio terreno.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
          <path d="M2 6c.6 0 1.2-.2 1.7-.6.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6"/>
          <path d="M2 12c.6 0 1.2-.2 1.7-.6.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6"/>
          <path d="M2 18c.6 0 1.2-.2 1.7-.6.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6s1.2-.2 1.7-.6c.9-.8 2.5-.8 3.4 0 .5.4 1.1.6 1.7.6"/>
        </svg>
      )
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Qué Incluye <span className="text-cyan-400">Nuestro Servicio?</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Nos encargamos de todo el proceso. ¡Aprovecha nuestras ofertas de temporada y ten tu piscina soñada!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-black/40 p-8 rounded-3xl border border-blue-900/50 hover:border-cyan-400/50 transition-colors group">
              <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 border border-cyan-900/30 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
