export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image (Imagen moderna de piscina real) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop')"
        }}
      ></div>
      
      {/* Overlays para asegurar legibilidad y estilo oscuro/azul premium */}
      <div className="absolute inset-0 z-10 bg-blue-950/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left md:text-center pb-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl">
          Piscinas de Lujo que <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
            Transforman tu Hogar
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl md:mx-auto mb-12 font-light drop-shadow-md">
          Diseño, construcción y mantenimiento de piscinas exclusivas. 
          Calidad profesional con acabados de primera línea para disfrutar todo el año.
        </p>
        <div className="flex flex-col sm:flex-row md:justify-center gap-6">
          <a href="#cotizar" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            Solicitar Presupuesto
          </a>
          <a href="#modelos" className="bg-black/30 backdrop-blur-md border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300">
            Ver Modelos
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2 font-medium tracking-widest uppercase">Descubre más</span>
        <svg className="w-6 h-6 text-cyan-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
