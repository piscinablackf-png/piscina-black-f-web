"use client";

import { useState } from "react";

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Instalación completa (Llave en mano)",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      alert("Por favor, ingresa tu nombre y correo electrónico.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ocurrió un error al enviar el formulario.');
      }

      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Instalación completa (Llave en mano)",
        message: ""
      });
      
      // Volver al estado normal después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || "Error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="cotizar" className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/50 p-8 md:p-12 rounded-3xl border border-cyan-900 backdrop-blur-sm shadow-xl shadow-black/50">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Columna Izquierda: Info de Contacto y Mapa */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Inicia tu <span className="text-cyan-400">Proyecto</span></h2>
              <p className="text-gray-300 mb-6">Déjanos tus datos o contáctanos directamente. ¡Estamos listos para hacer realidad tu piscina soñada!</p>
              
              <div className="space-y-4 mb-8">
                {/* Oficina La Serena */}
                <div className="flex items-start gap-4 text-gray-300 bg-blue-950/20 p-4 rounded-xl border border-blue-900/30">
                  <span className="text-cyan-400 text-2xl mt-1">📍</span>
                  <div>
                    <h4 className="text-white font-bold">Oficina La Serena</h4>
                    <p className="text-sm">Ruta 41, pasado el aeropuerto (Frente a gasolinera Shell)</p>
                  </div>
                </div>
                
                {/* Fábrica Buin */}
                <div className="flex items-start gap-4 text-gray-300 bg-blue-950/20 p-4 rounded-xl border border-blue-900/30">
                  <span className="text-cyan-400 text-2xl mt-1">🏭</span>
                  <div>
                    <h4 className="text-white font-bold">Fábrica Metropolitana</h4>
                    <p className="text-sm">Cam. Padre Hurtado 5233, Buin</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 pt-2 px-2">
                  <span className="text-cyan-400 text-xl">📞</span>
                  <span>+56 9 5457 0802</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300 px-2">
                  <span className="text-cyan-400 text-xl">✉️</span>
                  <span>contacto@piscinablackf.cl</span>
                </div>
              </div>

              {/* Mapas de Google */}
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-40 rounded-xl overflow-hidden border border-blue-900/50 relative shadow-lg group">
                  <div className="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur-sm text-[10px] px-2 py-1 rounded text-white font-semibold uppercase tracking-wider">La Serena</div>
                  <iframe 
                    src="https://maps.google.com/maps?q=-29.925872,-71.180664&hl=es&z=13&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500 filter contrast-125"
                    title="Oficina La Serena"
                  ></iframe>
                </div>
                <div className="w-full h-40 rounded-xl overflow-hidden border border-blue-900/50 relative shadow-lg group">
                  <div className="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur-sm text-[10px] px-2 py-1 rounded text-white font-semibold uppercase tracking-wider">Fábrica Buin</div>
                  <iframe 
                    src="https://maps.google.com/maps?q=Cam.+Padre+Hurtado+5233,+Buin&hl=es&z=13&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500 filter contrast-125"
                    title="Fábrica Buin"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Formulario */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Nombre completo *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full bg-blue-950/50 border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50" 
                      placeholder="Ej. Juan Pérez" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Correo electrónico *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full bg-blue-950/50 border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50" 
                      placeholder="tucorreo@ejemplo.com" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Teléfono / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-blue-950/50 border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors disabled:opacity-50" 
                      placeholder="+56 9 5457 0802" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Tipo de servicio</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-blue-950/50 border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 appearance-none transition-colors disabled:opacity-50"
                    >
                      <option>Instalación completa (Llave en mano)</option>
                      <option>Venta de piscina (Solo casco)</option>
                      <option>Reparación y restauración (Fibra, Hormigón, Losa)</option>
                      <option>Mantenimiento técnico y bombas</option>
                      <option>Cotizar modelo 9x3.40 m</option>
                      <option>Cotizar modelo 7x3.40 m</option>
                      <option>Cotizar modelo 6x3 m</option>
                      <option>Cotizar modelo 5.30x3.10 m</option>
                      <option>Cotizar modelo 4.80x2.60 m</option>
                      <option>Cotizar modelo 3x2 m</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje o detalles adicionales</label>
                  <textarea 
                    rows={5} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-blue-950/50 border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none disabled:opacity-50" 
                    placeholder="Cuéntanos más sobre lo que necesitas o dónde se realizaría la instalación..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-xl text-green-400 text-center font-medium animate-pulse">
                    ¡Cotización enviada correctamente! Te contactaremos pronto.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-400 text-center font-medium">
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-3 ${
                    isSubmitting 
                      ? 'bg-cyan-900 text-cyan-200 cursor-not-allowed' 
                      : 'bg-cyan-500 hover:bg-cyan-400 text-black hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      Enviar Cotización por Correo
                    </>
                  )}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
