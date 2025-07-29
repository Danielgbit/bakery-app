"use client";

import { useState } from "react";
import Categories from "@/components/Categories";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductList = () => {
  const [categoria, setCategoria] = useState("panes");

  const filtered = products.filter((p) => p.categoria === categoria);

  return (
    <section className="bg-secondary py-20" id="productos">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Título */}
        <h3 className="text-4xl font-semibold text-fifth">Menú</h3>
        <div className="bg-dark h-[1px] w-1/5 mx-auto mb-6 mt-4" />

        {/* Descripción */}
        <p className="text-sm text-tertiary w-[90%] md:w-[80%] mx-auto font-semibold mb-10 mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, qui
          magni. Natus aut expedita dignissimos sint aspernatur dicta quidem.
        </p>

        {/* Categorías */}
        <Categories onSelect={setCategoria} />

        {/* Lista de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-15 md:mt-8">
          {filtered.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
