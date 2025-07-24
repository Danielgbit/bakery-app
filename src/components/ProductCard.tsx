import products from "@/data/products";

const ProductCard = ({ limit = 6 }) => {
  return <div className="grid  gap-4 justify-center grid-cols-[40%_40%] grid-rows-2">
    {products.slice(0, limit).map((item) => (
        <div key={item.id} className="border p-4 rounded mb-4">
          <h3 className="font-bold">{item.nombre}</h3>
          <p>{item.descripcion}</p>
          <img src={item.imagen} alt={item.alt} className="w-full h-auto" />
        </div>
    ))}
  </div>;
};

export default ProductCard;
