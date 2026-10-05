"use client";

import { useState } from "react";

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Construcción de piscina nueva",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name) {
      alert("Por favor, ingresa tu nombre.");
      return;
    }

    const subject = `Nueva Cotización web - ${formData.name}`;
    const body = `¡Hola! Tienes una nueva solicitud de cotización desde la página web.

Nombre: ${formData.name}
Correo: ${formData.email}
Teléfono: ${formData.phone}
Servicio de interés: ${formData.service}

Mensaje o detalles:
${formData.message}
`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    // Redirigir a la aplicación de correo por defecto
    window.location.href = `mailto:piscinablackf@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="cotizar" className="py-20 bg-gradient-to-b from-blue-950 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/50 p-8 md:p-12 rounded-3xl border border-cyan-900 backdrop-blur-sm shadow-xl shadow-black/50">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Inicia tu <span className="text-cyan-400">Proyecto</span></h2>
            <p className="text-gray-300">Déjanos tus datos y un asesor se comunicará contigo a la brevedad.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nombre completo *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-blue-950/50 border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" 
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
                  required
                  className="w-full bg-blue-950/50 border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" 
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
                  className="w-full bg-blue-950/50 border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" 
                  placeholder="+56 9 5457 0802" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Tipo de servicio</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-blue-950/50 border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 appearance-none transition-colors"
                >
                  <option>Construcción de piscina nueva</option>
                  <option>Cotizar modelo 9x3.40 m</option>
                  <option>Cotizar modelo 7x3.40 m</option>
                  <option>Cotizar modelo 6x3 m</option>
                  <option>Cotizar modelo 5.30x3.10 m</option>
                  <option>Cotizar modelo 4.80x2.60 m</option>
                  <option>Cotizar modelo 3x2 m</option>
                  <option>Servicio de mantenimiento</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje o detalles adicionales</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-blue-950/50 border border-blue-900 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors" 
                placeholder="Cuéntanos más sobre lo que necesitas o dónde se realizaría la instalación..."
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Enviar Cotización por Correo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
