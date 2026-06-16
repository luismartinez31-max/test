import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Alianzas reales de la presentación
const ALIANZAS = [
  { name: 'GS1 México', logo: 'https://logo.clearbit.com/gs1mexico.org' },
  { name: 'Zebra Technologies', logo: 'https://logo.clearbit.com/zebra.com' },
  { name: 'Impinj', logo: 'https://logo.clearbit.com/impinj.com' },
  { name: 'Beontag', logo: 'https://logo.clearbit.com/beontag.com' },
  { name: 'Track & Trace', logo: 'https://logo.clearbit.com/trackandtrace.com' },
  { name: 'Tageos', logo: 'https://logo.clearbit.com/tageos.com' },
  { name: 'Avery Dennison', logo: 'https://logo.clearbit.com/averydennison.com' },
];

// Texto fallback si logo no carga
function AllianceLogo({ name, logo }) {
  const [imgError, setImgError] = React.useState(false);
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#E30000]/30 transition-all group cursor-default shadow-sm hover:shadow-md">
      <div className="h-12 w-24 flex items-center justify-center">
        {!imgError ? (
          <img
            src={logo}
            alt={name}
            className="max-h-10 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-[#E30000]/10 flex items-center justify-center">
            <span className="text-[#E30000] font-black text-sm">{initials}</span>
          </div>
        )}
      </div>
      <span className="text-xs text-gray-400 group-hover:text-[#E30000] transition-colors text-center font-medium leading-tight">
        {name}
      </span>
    </div>
  );
}

export default function AlianzasSection() {
  return (
    <section id="alianzas" className="relative py-28 bg-gray-50 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E30000]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E30000]/10 border border-[#E30000]/30 text-[#E30000] text-xs font-bold uppercase tracking-widest mb-6">
            Nuestras Alianzas
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gray-900">Marcas líderes </span>
            <span className="text-[#9B9B9B]">mundiales</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trabajamos con los fabricantes y organizaciones más reconocidos del ecosistema 
            RFID global para garantizar la mejor tecnología para su proyecto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
        >
          {ALIANZAS.map((alianza, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <AllianceLogo name={alianza.name} logo={alianza.logo} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}