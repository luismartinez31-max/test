import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

// =============================================
// CONFIGURACIÓN DE SERVICIOS - FÁCIL DE EDITAR
// =============================================
export const SERVICES = [
  {
    id: 1,
    title: "Consultoría RFID",
    shortDescription: "Análisis experto y diseño de soluciones personalizadas para su empresa",
    fullDescription: `Nuestro servicio de consultoría RFID es la base de todo proyecto exitoso. Contamos con ingenieros que realizan un diagnóstico profundo de sus procesos, identificando las oportunidades donde la tecnología RFID genera mayor valor.

Desarrollamos el diseño de arquitectura óptima (LF, HF o UHF), estudios de viabilidad técnica y económica, análisis de retorno de inversión (ROI) y planificación detallada de la implementación. Incluye proyectos piloto y pruebas de concepto para validar la solución antes de escalar.

Adicionalmente, ofrecemos servicios de capacitación técnica para su equipo, garantizando que su organización adopte la tecnología de forma efectiva y autónoma. Todo el proceso está documentado con entregables claros en cada etapa.`,
    icon: "Lightbulb",
    // ↓ IMÁGENES: Cambiar o agregar URLs aquí
    images: [
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/a6305915f_generated_image.png",
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/e6dc479cc_generated_image.png",
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/fd43a0fe0_generated_image.png"
    ],
    features: [
      "Diagnóstico y auditoría de procesos",
      "Diseño de arquitectura RFID (UHF)",
      "Estudio de viabilidad técnica y ROI",
      "Pruebas de concepto y pilotos",
      "Documentación técnica completa",
      "Capacitación especializada al equipo"
    ],
    accentColor: "#E30000"
  },
  {
    id: 2,
    title: "Venta de Equipos RFID",
    shortDescription: "Hardware de última generación: lectores, antenas, impresoras y terminales",
    fullDescription: `Comercializamos equipos RFID de las marcas más reconocidas del mundo. Nuestro catálogo abarca soluciones para todas las frecuencias y aplicaciones industriales.

Ofrecemos lectores fijos de largo alcance para portales y túneles de lectura, lectores portátiles robustos para trabajo en campo, antenas direccionales y omnidireccionales de alto rendimiento, impresoras térmicas de etiquetas RFID de alta velocidad, y terminales móviles industriales con lector integrado.

Todos los equipos incluyen garantía del fabricante, soporte técnico local y asesoría en la selección del hardware óptimo para cada caso de uso específico. Realizamos demostraciones in situ y préstamo de equipos para evaluación.`,
    icon: "Cpu",
    images: [
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/46fd46391_generated_image.png",
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/139e9b530_generated_image.png",
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/881e961c8_generated_image.png"
    ],
    features: [
      "Lectores fijos y portátiles UHF",
      "Antenas de alto rendimiento",
      "Impresoras RFID industriales",
      "Terminales móviles industriales",
      "Portales y túneles de lectura",
      "Garantía y soporte local incluido"
    ],
    accentColor: "#9B9B9B"
  },
  {
    id: 3,
    title: "Consumibles y Etiquetas RFID",
    shortDescription: "Tags y etiquetas especializadas para cualquier aplicación e industria",
    fullDescription: `Suministramos una extensa variedad de etiquetas, tags e inlays RFID para todas las aplicaciones y sectores. Trabajamos con los fabricantes líderes y proveedores certificados GS1, garantizando compatibilidad con los estándares internacionales.

Nuestro catálogo incluye etiquetas adhesivas en rollo para impresión directa, tags rígidos para activos metálicos (especiales anti-metal), tags resistentes al agua IP68 para entornos húmedos, etiquetas para textiles y prendas lavables, tags de alta temperatura para procesos industriales, etiquetas NFC compatibles con smartphones, pulseras RFID para control de acceso, y tarjetas de proximidad.

Ofrecemos servicios de codificación y personalización masiva, impresión con su logotipo e información, y asesoría en la selección del tag adecuado considerando frecuencia, distancia de lectura, entorno y durabilidad requerida.`,
    icon: "Tag",
    images: [
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/c98b76d7e_generated_image.png",
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/674179fed_generated_image.png",
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/fbb4d7594_generated_image.png"
    ],
    features: [
      "Etiquetas adhesivas multi-formato en rollo",
      "Tags para Metal en Activos Industriales",
      "Resistentes al agua IP68 y alta temperatura",
      "Tags textiles lavables para prendas",
      "Codificación y personalización masiva",
      "Certificadas GS1 y estándares EPC"
    ],
    accentColor: "#E30000"
  },
  {
    id: 4,
    title: "Servicios y Soporte",
    shortDescription: "Implementación, mantenimiento, desarrollo de software y soporte 24/7",
    fullDescription: `Ofrecemos un servicio integral que cubre todo el ciclo de vida de la solución RFID. Nuestro equipo de ingenieros realiza la instalación profesional, configuración de equipos, integración con sistemas existentes (ERP, WMS, SAP) y puesta en marcha supervisada.

Desarrollamos software a la medida: middleware RFID, aplicaciones web y móviles, dashboards de monitoreo en tiempo real, APIs para integración, y soluciones de trazabilidad end-to-end. También realizamos migración de sistemas legacy hacia plataformas modernas.

Nuestros planes de soporte incluyen mantenimiento preventivo programado, atención correctiva con tiempos de respuesta garantizados (SLA), actualización de firmware, calibración de equipos y reemplazo de componentes. Operamos un centro de soporte técnico disponible 24/7 para minimizar tiempos de inactividad.`,
    icon: "Headphones",
    images: [
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/02bc1fd89_generated_image.png",
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/221eb5a90_generated_image.png",
      "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/c64a97bb0_generated_image.png"
    ],
    features: [
      "Instalación y puesta en marcha profesional",
      "Integración con ERP/WMS/SAP",
      "Desarrollo de software y middleware RFID",
      "Dashboards y reportes en tiempo real",
      "Mantenimiento preventivo y correctivo",
      "Soporte técnico 24/7 con SLA garantizado"
    ],
    accentColor: "#9B9B9B"
  }
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-28 bg-white overflow-hidden tech-dots">
      {/* Background diagonal red accent */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#E30000]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E30000]/10 border border-[#E30000]/30 text-[#E30000] text-xs font-bold uppercase tracking-widest mb-6">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gray-900">Soluciones </span>
            <span className="text-[#E30000]">integrales</span>
            <span className="text-gray-900"> RFID</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            La implementación de tecnología RFID demanda alto grado de conocimiento y 
            especialización. MAS RFID Solutions ofrece estas capacidades con profesionalismo, 
            desde la consultoría hasta el soporte continuo.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}