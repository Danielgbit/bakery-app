"use client";

import { useState } from "react";
import Categories from "@/components/Categories";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductList = () => {
  const [categoria, setCategoria] = useState("panes");

  const filtered = products.filter((p) => p.categoria === categoria);

  return (
    <section className="py-16 bg-white" id="productos">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-yellow-800 mb-6">Menú</h3>
        <Categories onSelect={setCategoria} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <ProductCard key={item.id} product={item}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
