import Image from "next/image";
import Product from "@/interface/Product";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row p-4 rounded-4xl mb-4 bg-cards-tertiary shadow-md transition-all duration-300">
      <Image
        src={product.image}
        alt={product.alt}
        width={200}
        height={200}
        className="w-[120px] h-[120px] mx-auto sm:mx-0 border-t-4 border-yellow-500 object-cover rounded-full"
      />
      <div className="flex flex-col justify-center sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left">
        <h3 className="font-bold text-lg text-primary">{product.nombre}</h3>
        <p className="text-sm text-sixth font-semibold">{product.descripcion}</p>
      </div>
    </div>
  );
};

export default ProductCard;
