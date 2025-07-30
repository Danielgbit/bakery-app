import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footer w-full text-primary pt-16 pb-5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[30%_65%] gap-8">
        {/* Logo + Descripción */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Panadería Delicias</h2>
          <p className="text-sm leading-relaxed">
            Más de 20 años horneando con amor. Nuestros productos son elaborados
            con ingredientes frescos, recetas artesanales y mucha pasión.
          </p>
        </div>

        {/* Info + Navegación */}
        <div className="flex flex-col  sm:flex-row justify-between gap-8">
          {/* Navegación */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 md:text-sm">
              <li>
                <Link href="#inicio" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#productos" className="hover:underline">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#historia" className="hover:underline">
                  Nuestra historia
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:underline">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#eventos" className="hover:underline">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-3 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-secondary" /> Calle Pan Nº 123,
                Ciudad Gourmet
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-secondary" /> +34 600 123 456
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-secondary" />{" "}
                contacto@deliciaspan.com
              </li>
            </ul>
          </div>

          {/* Horarios + Redes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <p className="md:text-sm text-xs mb-4">
              Lunes a Sábado: 7:00 AM – 8:00 PM
              <br />
              Domingo: 8:00 AM – 2:00 PM
            </p>
            <div className="flex gap-4 text-xl mt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-secondary hover:text-tertiary"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-secondary hover:text-tertiary"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-[11px] mt-8 border-t pt-4 px-4">
        © {new Date().getFullYear()} Panadería Delicias. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
