import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Radio } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/b1abae71a_MAS-RFID-SOLUTIONS-V01-MAE-26-VHP.png";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Light base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

      {/* Tech circuit pattern */}
      <div className="absolute inset-0 tech-circuit opacity-80" />

      {/* Red glow top-left */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(227,0,0,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Gray glow bottom-right */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(155,155,155,0.06) 0%, transparent 70%)' }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* RFID signal rings */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-[#E30000]"
            style={{
              width: `${i * 100}px`,
              height: `${i * 100}px`,
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
            animate={{ opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Logo — aparece y desaparece en loop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -10 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.85, 1, 1, 0.95], y: [-10, 0, 0, 10] }}
          transition={{ duration: 4, times: [0, 0.2, 0.75, 1], repeat: Infinity, repeatDelay: 1.5 }}
          className="flex justify-center mb-10"
        >
          <div className="bg-white rounded-2xl px-8 py-4 shadow-xl shadow-gray-200 border border-gray-100">
            <img
              src={LOGO_URL}
              alt="MAS RFID Solutions"
              className="h-20 md:h-28 w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#E30000]/40 bg-[#E30000]/10 mb-8"
        >
          <Radio className="w-4 h-4 text-[#E30000]" />
          <span className="text-sm font-semibold text-[#E30000] tracking-wider uppercase">
            Soluciones de Identificación de Valor Agregado
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight"
        >
          <span className="text-gray-900">Tecnología</span>
          <br />
          <span className="text-[#E30000]">RFID</span>
          <span className="text-[#9B9B9B]"> que</span>
          <br />
          <span className="text-gray-900">transforma</span>
        </motion.h1>

        {/* Subtitle from presentation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Empresa mexicana especializada en consultoría, capacitación e implementación 
          de soluciones de identificación por Radio Frecuencia (RFID) con alto valor agregado.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E30000] hover:bg-[#B00000] text-white text-lg font-bold rounded-xl shadow-lg shadow-red-900/40 transition-all hover:scale-105"
          >
            Ver Servicios
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-600 hover:border-[#E30000] hover:text-[#E30000] text-lg font-semibold rounded-xl transition-all"
          >
            Contactar Experto
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200"
        >
          {[
            { value: '50+', label: 'Proyectos' },
            { value: '15+', label: 'Años de Experiencia' },
            { value: '99.9%', label: 'Precisión de Lectura' },
            { value: '24/7', label: 'Soporte Técnico' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#E30000]">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#E30000] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}