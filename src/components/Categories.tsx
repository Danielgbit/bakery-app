"use client";

import { useState } from "react";
import categories from "@/data/categories";

type CategoriesProps = { onSelect: (id: string) => void; };

const Categories = ({ onSelect } : CategoriesProps) => {
  const [active, setActive] = useState("panes");

  return (
    <div className="flex gap-4 justify-center mb-8">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => {
            setActive(cat.id);
            onSelect(cat.id);
          }}
          className={`px-4 py-1 rounded-xl text-sm cursor-pointer ${
            active === cat.id ? "bg-yellow-400 text-white" : "bg-cards"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
