import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contacto" className="relative py-28 overflow-hidden bg-white tech-circuit">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E30000]/10 border border-[#E30000]/30 text-[#E30000] text-xs font-bold uppercase tracking-widest mb-6">
            Contáctanos
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-gray-900">¿Listo para </span>
            <span className="text-[#E30000]">transformar</span>
            <br />
            <span className="text-gray-900">tu negocio?</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Contáctanos hoy y recibe una <strong className="text-gray-900">consultoría inicial</strong> para 
            evaluar cómo la tecnología RFID puede optimizar tus operaciones.
          </p>

          {/* CTA button */}
          <div className="flex justify-center">
            <a
              href="mailto:info@mas-rfid-solutions.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E30000] hover:bg-[#B00000] text-white text-lg font-bold rounded-xl shadow-lg shadow-red-900/20 transition-all hover:scale-105"
            >
              Solicitar Consultoría Inicial
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.a
            href="mailto:info@mas-rfid-solutions.com"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="group block p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#E30000]/40 transition-all text-center w-full max-w-sm"
          >
            <div className="w-14 h-14 rounded-xl bg-[#E30000]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E30000] transition-colors duration-300">
              <Mail className="w-6 h-6 text-[#E30000] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Correo Electrónico</h3>
            <p className="text-gray-900 font-bold text-base mb-1">info@mas-rfid-solutions.com</p>
            <p className="text-gray-500 text-sm">Respuesta en 24 hrs</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}