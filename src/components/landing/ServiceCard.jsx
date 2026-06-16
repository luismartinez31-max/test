import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check, Lightbulb, Cpu, Tag, Headphones, X, ChevronLeft } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const iconMap = { Lightbulb, Cpu, Tag, Headphones };

export default function ServiceCard({ service }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Icon = iconMap[service.icon] || Lightbulb;

  const nextImage = () => setCurrentImageIndex((p) => (p + 1) % service.images.length);
  const prevImage = () => setCurrentImageIndex((p) => (p - 1 + service.images.length) % service.images.length);

  const isRed = service.accentColor === '#E30000';

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group relative h-full cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Card glow on hover */}
        <div className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
          isRed ? 'bg-[#E30000]' : 'bg-[#9B9B9B]'
        }`} />

        <div className="relative h-full bg-white rounded-3xl border border-gray-200 group-hover:border-gray-300 overflow-hidden transition-all duration-400 shadow-sm group-hover:shadow-xl"  >
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={service.images[0]}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Dark + colored overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: service.accentColor }}
            />

            {/* Icon badge */}
            <div
              className="absolute top-4 left-4 p-3 rounded-xl shadow-lg"
              style={{ backgroundColor: service.accentColor }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>

            {/* Image count badge */}
            {service.images.length > 1 && (
              <div className="absolute top-4 right-4 px-2 py-1 rounded-lg bg-black/60 text-xs text-white/70">
                {service.images.length} fotos
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-7">
            <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#E30000] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {service.shortDescription}
            </p>

            {/* Features preview (3 items) */}
            <div className="space-y-2 mb-6">
              {service.features.slice(0, 3).map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: service.accentColor + '22', border: `1px solid ${service.accentColor}44` }}
                  >
                    <Check className="w-2.5 h-2.5" style={{ color: service.accentColor }} />
                  </div>
                  {f}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all group/btn"
              style={{ backgroundColor: service.accentColor + '15', border: `1px solid ${service.accentColor}40`, color: service.accentColor }}
            >
              Ver descripción completa
              <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Detail Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-gray-200 text-gray-900 p-0">
          {/* Carousel */}
          <div className="relative h-72 md:h-96 flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={service.images[currentImageIndex]}
                alt={service.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />

            {service.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-colors">
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {service.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? 'w-6' : 'w-2 bg-white/40'}`}
                  style={idx === currentImageIndex ? { width: '24px', backgroundColor: service.accentColor } : {}}
                />
              ))}
            </div>

            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Modal content */}
          <div className="p-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-white text-sm font-bold"
              style={{ backgroundColor: service.accentColor }}
            >
              <Icon className="w-4 h-4" />
              {service.title}
            </div>

            <h2 className="text-3xl font-black text-gray-900 mb-6">{service.title}</h2>

            <div className="mb-8">
              {service.fullDescription.split('\n\n').map((p, i) => (
                <p key={i} className="text-gray-500 leading-relaxed mb-4 text-sm">{p}</p>
              ))}
            </div>

            {/* Features grid */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-200">
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: service.accentColor }}>
                Características incluidas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: service.accentColor }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: service.accentColor }}
            >
              Solicitar información sobre este servicio
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}