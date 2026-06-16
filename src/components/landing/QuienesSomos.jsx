import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users } from 'lucide-react';

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="relative py-28 bg-gray-50 overflow-hidden">
      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#E30000] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E30000]/10 border border-[#E30000]/30 text-[#E30000] text-xs font-bold uppercase tracking-widest mb-6">
              Quiénes Somos
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span className="text-gray-900">Empresa mexicana </span>
              <span className="text-[#E30000]">líder en RFID</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Somos una empresa mexicana dedicada a brindar servicios profesionales de 
              <strong className="text-gray-800"> consultoría, capacitación e implementación</strong> de 
              soluciones de identificación a través de la tecnología de identificación por 
              Radio Frecuencia (RFID).
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Estamos orientados en la <strong className="text-[#E30000]">creación de valor</strong> para nuestros 
              clientes, aprovechando nuestro amplio conocimiento en la tecnología para 
              ofrecer soluciones a medida con alto nivel de especialización.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-4">
              {[
                { icon: Target, label: 'Misión', text: 'Crear valor real a través de soluciones RFID personalizadas' },
                { icon: Award, label: 'Calidad', text: 'Alto grado de especialización en proyectos de integración' },
                { icon: Users, label: 'Equipo', text: 'Profesionales con amplia experiencia en el mercado' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#E30000]/40 transition-colors group shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-[#E30000]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E30000]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#E30000]" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold text-sm">{item.label}</div>
                    <div className="text-gray-500 text-sm">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/841afdc3d_generated_image.png"
                alt="Tecnología RFID"
                className="w-full h-[520px] object-cover"
              />
              {/* Red overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E30000]/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-2xl p-5 shadow-2xl"
            >
              <div className="text-4xl font-black text-[#E30000]">15+</div>
              <div className="text-gray-900 font-semibold text-sm">Años en el mercado</div>
              <div className="text-gray-400 text-xs">de identificación RFID</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-[#E30000] rounded-2xl p-5 shadow-2xl shadow-red-900/50"
            >
              <div className="text-4xl font-black text-white">50+</div>
              <div className="text-white/80 font-semibold text-sm">Proyectos</div>
              <div className="text-white/60 text-xs"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}