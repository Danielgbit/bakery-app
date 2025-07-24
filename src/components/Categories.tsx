import categories from "@/data/categories";
import { ChevronDown } from "lucide-react";

const Categories = () => {
  return (
    <div className="flex flex-col w-[60%] m-auto gap-8 justify-center mb-8">
      <div className="flex gap-8 justify-center">
        {categories.map((item) => (
          <span
            className="bg-cards rounded-xl px-3 text-sm cursor-pointer"
            key={item.id}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div>
        <div className="bg-black w-full p-[0.1px]"></div>
        <ChevronDown className="mt-1 w-4 h-4 text-yellow-700" />
      </div>
    </div>
  );
};
export default Categories;
