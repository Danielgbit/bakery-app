import Image from "next/image";
import { Product } from "@/interface/Product";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex p-4 ml-8 rounded-4xl mb-4 bg-cards">
      <Image
        src={product.image}
        alt={product.alt}
        width={200}
        height={200}
        className="w-[120px] h-[120px] border-t-4 border-yellow-500 object-cover rounded-full"
      />
      <div className="flex flex-col justify-center ml-4 text-left">
        <h3 className="font-bold">{product.nombre}</h3>
        <p className="text-sm">{product.descripcion}</p>
      </div>
    </div>
  );
};

export default ProductCard;
