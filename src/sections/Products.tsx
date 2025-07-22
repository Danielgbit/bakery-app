import ProductCard from "@/components/ProductCard"

const Products = () => {
  return (
    <section id="productos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold text-yellow-800 mb-12">Nuestros Productos</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <ProductCard limit={3} />
        </div>
      </div>
    </section>
  )
}

export default Products
