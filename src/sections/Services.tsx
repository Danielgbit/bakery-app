import { FaClock, FaParking, FaUtensils, FaStar } from "react-icons/fa";
import { services } from "@/data/services";

const getIcon = (icon: string) => {
  const base = "text-yellow-600 text-3xl mb-4";
  switch (icon) {
    case "clock":
      return <FaClock className={base} />;
    case "parking":
      return <FaParking className={base} />;
    case "utensils":
      return <FaUtensils className={base} />;
    case "star":
      return <FaStar className={base} />;
    default:
      return null;
  }
};

const Services = () => {
  return (
    <section id="servicios" className="py-20 h-[600px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-yellow-800 mb-12">Nuestros Servicios</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
              {getIcon(service.icon)}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
