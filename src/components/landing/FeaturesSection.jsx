import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, BarChart3, Clock, Layers } from 'lucide-react';

const features = [
  { icon: Zap, title: "Lectura Instantánea", description: "Captura cientos de tags RFID por segundo sin línea de visión directa" },
  { icon: Shield, title: "Alta Seguridad", description: "Encriptación de datos y autenticación para proteger tu información" },
  { icon: Globe, title: "Estándares Globales", description: "Compatibilidad con EPC, ISO y GS1, frecuencias internacionales" },
  { icon: BarChart3, title: "Datos en Tiempo Real", description: "Visibilidad total de activos e inventario con dashboards en vivo" },
  { icon: Clock, title: "Operación Continua", description: "Sistemas diseñados para 24/7 sin interrupciones en entornos exigentes" },
  { icon: Layers, title: "Integración Total", description: "Compatible con ERP, WMS, SAP y sistemas empresariales existentes" },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden tech-grid">
      {/* Red top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E30000]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#9B9B9B]/10 border border-[#9B9B9B]/30 text-[#9B9B9B] text-xs font-bold uppercase tracking-widest mb-6">
              ¿Por qué RFID?
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="text-gray-900">Tecnología que </span>
              <span className="text-[#E30000]">impulsa</span>
              <br />
              <span className="text-gray-900">resultados reales</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              La identificación por radiofrecuencia revoluciona la gestión de activos, 
              inventarios y cadena de suministro. Reduce errores, elimina procesos 
              manuales y proporciona visibilidad total de tu operación.
            </p>

            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <img
                src="https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/9f69e506f_generated_image.png"
                alt="RFID en acción"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#E30000]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-[#E30000]/20">
                  <p className="text-white text-sm font-bold">Tecnología RFID en operación</p>
                  <p className="text-[#9B9B9B] text-xs">Lectura automática, sin contacto, a largo alcance</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="group p-5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#E30000]/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E30000]/10 flex items-center justify-center mb-4 group-hover:bg-[#E30000]/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-[#E30000]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#E30000] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}