import React from 'react';

const LOGO_URL = "https://media.base44.com/images/public/698d2db71e7c46d87a21dcce/b1abae71a_MAS-RFID-SOLUTIONS-V01-MAE-26-VHP.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl px-5 py-3 inline-block mb-5">
              <img src={LOGO_URL} alt="MAS RFID Solutions" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Empresa mexicana líder en soluciones de identificación por radio frecuencia (RFID). 
              Creamos valor a través de tecnología especializada y experiencia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-5 border-l-2 border-[#E30000] pl-3">Servicios</h4>
            <ul className="space-y-3">
              {["Consultoría RFID", "Venta de Equipos", "Etiquetas y Consumibles", "Soporte y Mantenimiento", "Capacitación"].map((s, i) => (
                <li key={i}>
                  <a href="#servicios" className="text-gray-500 hover:text-[#E30000] transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-5 border-l-2 border-[#E30000] pl-3">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="mailto:info@mas-rfid-solutions.com" className="hover:text-[#E30000] transition-colors break-all">
                  info@mas-rfid-solutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} MAS RFID Solutions. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#E30000]" />
            <span className="text-gray-400 text-xs">Soluciones de Identificación de Valor Agregado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}