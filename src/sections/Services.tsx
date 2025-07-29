import { FaClock, FaParking, FaUtensils, FaStar } from "react-icons/fa";
import { services } from "@/data/services";

const getIcon = (icon: string) => {
  const base = "text-primary text-3xl mb-4";
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
    <section id="servicios" className="py-20 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-fourth mb-12">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4 flex justify-center text-4xl text-yellow-600">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-primary text-sm font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
