import ProductCard from "@/components/ProductCard"

const Products = () => {
  return (
    <section id="productos" className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-yellow-800 mb-12">Nuestros Productos</h3>
        {/* Aquí ProductCard es el que maneja el Grid completo */}
        <ProductCard limit={4} />
      </div>
    </section>
  )
}

export default Products
