export default function Services() {
  const services = [
    { title: 'Instalación Completa', desc: 'Incluimos excavación con retroexcavadora y flete directo a tu terreno.' },
    { title: 'Equipamiento Premium', desc: 'Instalación completa con Bomba Vulcano (italiana) de alta calidad.' },
    { title: 'Garantía de 2 Años', desc: 'Calidad, lujo y confianza para tu hogar. Respaldamos fuertemente nuestro trabajo.' },
    { title: 'Lista para Disfrutar', desc: 'Entregamos la piscina funcionando al 100% en tu propio terreno.' },
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
            <div key={index} className="bg-black/40 p-6 rounded-2xl border border-white/5 hover:bg-black/60 transition-colors">
              <div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                <div className="w-6 h-6 bg-cyan-400/20 rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
