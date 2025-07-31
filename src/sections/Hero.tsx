"use client";

import Button from "@/components/Button";
import Image from "next/image";
import bakeryBg from "../../public/images/Bakery.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-[600px] w-full flex items-center justify-center"
    >
      {/* Imagen de fondo */}
      <Image
        alt="Imagen de tienda de panes"
        src={bakeryBg}
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay opcional para mejor contraste */}
      <div className="absolute inset-0 bg-filter z-10" />

      {/* Contenido */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-[80%] w-full text-center md:text-left p-5 rounded-4xl text-white">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="md:text-6xl text-4xl font-bold mb-4 text-primary"
          >
            Pan recién horneado cada día
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="mb-6 text-primary font-medium text-sm  md:text-lg tracking-text"
          >
            Disfruta de nuestros productos artesanales elaborados con
            ingredientes frescos y mucho amor.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="w-full"
          >
            <Button children="Ver productos" href="#productos" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
