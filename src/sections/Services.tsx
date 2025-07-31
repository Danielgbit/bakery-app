"use client";

import { FaClock, FaParking, FaUtensils, FaStar } from "react-icons/fa";
import { services } from "@/data/services";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="servicios"
      className="py-20 lg:py-50"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl font-bold text-fourth mb-12"
          id="servicios"
        >
          Nuestros Servicios
        </motion.div>

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
    </motion.section>
  );
};

export default Services;
