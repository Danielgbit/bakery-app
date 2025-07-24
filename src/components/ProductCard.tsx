import products from "@/data/products";
import Image from "next/image";

const ProductCard = ({ limit = 6 }) => {
  return (
    <div className="grid  gap-4 justify-center grid-cols-[40%_40%] grid-rows-2">
      {products.slice(0, limit).map((item) => (
        <div key={item.id} className="flex p-4 ml-8 rounded-4xl mb-4 bg-cards">
          <Image
            src={item.image}
            alt={item.alt}
            width={200}
            height={200}
            className="w-[120px] h-[120px] border-t-10  border-color object-cover rounded-full"
          />
          <div className="flex flex-col justify-center ml-4 text-left">
            <h3 className="font-bold">{item.nombre}</h3>
            <p className="text-sm">{item.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
