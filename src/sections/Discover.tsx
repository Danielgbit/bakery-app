'use client'

import Button from "@/components/Button";
import { motion } from "framer-motion";
import Image from "next/image";

function Discover() {
  const image =
    "https://plus.unsplash.com/premium_photo-1687904747536-139743e096a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFuYWRlcm98ZW58MHx8MHx8fDA%3D";


  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    className="bg-primary py-20" id="historia">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <Image
            alt="imagen de panadero"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-4xl shadow-md"
            src={image}
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <div className="w-full md:w-[90%]">
            <h2 className="text-3xl md:text-4xl font-bold text-fourth mb-6 md:mb-8">
              Descubre nuestra historia
            </h2>
            <p className="text-tertiary leading-relaxed mb-4 text-base md:text-lg">
              Desde hace más de 20 años, en <strong>Panadería Delicias</strong>{" "}
              horneamos con pasión, dedicación y recetas familiares que han
              pasado de generación en generación.
            </p>
            <p className="text-tertiary leading-relaxed text-base md:text-lg">
              Nuestro compromiso es ofrecerte productos frescos y artesanales
              que conectan con la tradición, el sabor auténtico y los momentos
              especiales en familia.
            </p>
          </div>
          <div className="mt-8 md:mt-10">
            <Button href="#historia">Ver historia</Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Discover;
