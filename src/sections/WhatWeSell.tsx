'use client';

import Image from "next/image";
import Button from "@/components/Button";
import whatWeSell from "@/data/whatWeSell";
import { motion } from "framer-motion";

function WhatWeSell() {
  return (
    <section className="bg-primary py-30 w-full text-center" id="que-vendemos">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-tertiary mb-6">
          ¿Qué vendemos?
        </h2>
        <div className="bg-secondary h-[1px] mb-10" />

        <p className="text-lg text-fourth leading-relaxed mb-20">
          En Panadería Delicias encontrarás una deliciosa variedad de{" "}
          <strong>panes artesanales</strong>, <strong>pasteles frescos</strong>,{" "}
          <strong>galletas caseras</strong> y{" "}
          <strong>postres hechos con amor</strong>. Todo preparado diariamente
          con ingredientes naturales y sin conservantes.
        </p>

        {/* Animación de las cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">
          {whatWeSell.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.8 }}
              className="flex flex-col items-center"
            >
              <Image
                alt="pan"
                width={200}
                height={200}
                src={item.imageSrc}
                className="rounded-full object-cover w-[200px] h-[200px] mb-4"
              />
              <p className="text-sm md:text-base text-tertiary font-medium px-4">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <Button children="Ver menú" href="#productos" />
      </div>
    </section>
  );
}

export default WhatWeSell;
