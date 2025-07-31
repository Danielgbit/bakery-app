"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Categories from "@/components/Categories";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

// Variantes para la animación de las tarjetas individuales
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4 },
  },
};

const ProductList = () => {
  const [categoria, setCategoria] = useState("panes");
  const filtered = products.filter((p) => p.categoria === categoria);

  return (
    <section className="bg-secondary py-20" id="productos">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl font-semibold text-fifth"
        >
          Menú
        </motion.div>
        <div className="bg-dark h-[1px] w-1/5 mx-auto mb-6 mt-4" />

        {/* Descripción */}
        <p className="text-sm text-tertiary w-[90%] md:w-[80%] mx-auto font-semibold mb-10 mt-5">
          Explora nuestro delicioso menú lleno de sabores auténticos: panes
          recién horneados, pasteles artesanales, galletas caseras y café de
          especialidad. Todo hecho con ingredientes naturales y mucho amor.
        </p>

        {/* Categorías */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full"
        >
          <Categories onSelect={setCategoria} />
        </motion.div>

        {/* Lista de productos animada */}
        <motion.div
          key={categoria} // clave para que reinicie animación
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-15 md:mt-8"
        >
          <AnimatePresence mode="wait">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ProductCard product={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductList;
