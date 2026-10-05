import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black/80 backdrop-blur-md fixed w-full z-50 top-0 left-0 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-14 w-14 md:h-16 md:w-16 flex items-center justify-center transition-transform group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="Logo Piscina Black-F" 
                  fill 
                  className="object-contain drop-shadow-md"
                  sizes="(max-width: 768px) 56px, 64px"
                />
              </div>
              
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                Piscina <span className="text-cyan-400">Black-F</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="#modelos" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wider">Modelos</Link>
            <Link href="#servicios" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wider">Servicios</Link>
            <Link href="#proyectos" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-wider">Proyectos</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link href="#cotizar" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-full transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105">
              Cotizar Ahora
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-cyan-400 transition-colors p-2">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
