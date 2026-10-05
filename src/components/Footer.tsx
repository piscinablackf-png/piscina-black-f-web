import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Logo y Slogan */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Piscina <span className="text-cyan-400">Black-F</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              ¡Calidad, lujo y confianza para tu hogar! Piscinas listas para disfrutar.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/piscinablackf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">Instagram @piscinablackf</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="#modelos" className="text-gray-400 hover:text-cyan-400 transition-colors">Modelos</Link></li>
              <li><Link href="#servicios" className="text-gray-400 hover:text-cyan-400 transition-colors">Servicios e Inclusiones</Link></li>
              <li><Link href="#proyectos" className="text-gray-400 hover:text-cyan-400 transition-colors">Proyectos Instalados</Link></li>
              <li><Link href="#cotizar" className="text-gray-400 hover:text-cyan-400 transition-colors">Solicitar Cotización</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">📞</span> +56 9 5457 0802
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✉️</span> contacto@piscinablackf.cl
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">📍</span> La Serena, Chile
              </li>
            </ul>
          </div>

          {/* Instagram y Pagos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <ul className="space-y-1 text-sm text-gray-400 mb-6">
              <li><a href="https://instagram.com/piscinablackf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">@piscinablackf</a></li>
              <li><a href="https://instagram.com/blackfpiscina" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">@blackfpiscina</a></li>
            </ul>
            
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Piscina Black-F. Todos los derechos reservados.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors text-sm group">
            <img src="/red-enlace-logo.png" alt="Logo Red-Enlace" className="h-5 w-auto opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
            <span>Desarrollado por Red-Enlace Soluciones Digitales</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
