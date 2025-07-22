function Discover() {
  return (
    <section className="bg-white py-20" id="historia">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="/img/nuestra-historia.jpg"
            alt="Panadería tradicional"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-yellow-800 mb-4">
            Descubre nuestra historia
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Desde hace más de 20 años, en <strong>Panadería Delicias</strong> horneamos con pasión, dedicación y recetas familiares que han pasado de generación en generación.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nuestro compromiso es ofrecerte productos frescos y artesanales que conectan con la tradición, el sabor auténtico y los momentos especiales en familia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Discover;