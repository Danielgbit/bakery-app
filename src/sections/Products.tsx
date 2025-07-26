"use client";

import { useState } from "react";
import Categories from "@/components/Categories";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductList = () => {
  const [categoria, setCategoria] = useState("panes");

  const filtered = products.filter((p) => p.categoria === categoria);

  return (
    <section className="py-16 bg-white h-[600px]" id="productos">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-yellow-800">Menú</h3>
        <div className="bg-black p-[0.2px] w-[50%] m-auto my-4"></div>
        <p className="text-sm w-[80%] m-auto mb-10 mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, qui
          magni. Natus aut expedita dignissimos sint aspernatur dicta quidem
          alias non neque. Perferendis adipisci sapiente deserunt incidunt
          numquam. Veniam, dignissimos!
        </p>
          <Categories onSelect={setCategoria} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
