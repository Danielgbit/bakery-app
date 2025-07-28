// src/components/Footer.tsx

import { FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footer text-primary pt-16 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Descripción */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Panadería Delicias</h2>
          <p className="text-sm leading-relaxed">
            Más de 20 años horneando con amor. Nuestros productos son elaborados con ingredientes frescos,
            recetas artesanales y mucha pasión.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#inicio" className="hover:underline">Inicio</Link></li>
            <li><Link href="#productos" className="hover:underline">Productos</Link></li>
            <li><Link href="#historia" className="hover:underline">Nuestra historia</Link></li>
            <li><Link href="#servicios" className="hover:underline">Servicios</Link></li>
            <li><Link href="#eventos" className="hover:underline">Eventos</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Calle Pan Nº 123, Ciudad Gourmet
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +34 600 123 456
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> contacto@deliciaspan.com
            </li>
          </ul>
        </div>

        {/* Horarios + Redes */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Horarios</h3>
          <p className="text-sm mb-4">
            Lunes a Sábado: 7:00 AM – 8:00 PM<br />
            Domingo: 8:00 AM – 2:00 PM
          </p>
          <div className="flex gap-4 text-white text-xl">
            <a href="#" aria-label="Instagram" className="hover:text-yellow-300"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-yellow-300"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-300"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-left px-5 text-xs mt-5 border-t pt-4">
        © {new Date().getFullYear()} Panadería Delicias. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
