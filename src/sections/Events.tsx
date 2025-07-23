function Events() {
  return (
    <section className="bg-events py-16 h-[600px]" id="eventos">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Próximos Eventos
        </h2>

        <div className="bg-black p-[0.1px] mb-10"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Evento 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">
              🧁 Taller de Pastelería Artesanal
            </h3>
            <p className="text-gray-600 mb-2">
              Sábado, 27 de julio – 10:00 a.m.
            </p>
            <p className="text-gray-700 text-sm">
              Aprende a preparar postres tradicionales con nuestras chefs
              invitadas. Incluye materiales y degustación.
            </p>
          </div>

          {/* Evento 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">
              🍞 Cata de Panes y Café
            </h3>
            <p className="text-gray-600 mb-2">
              Viernes, 2 de agosto – 5:00 p.m.
            </p>
            <p className="text-gray-700 text-sm">
              Disfruta una tarde de sabores con nuestros mejores panes y cafés
              artesanales. Evento gratuito con inscripción.
            </p>
          </div>

          {/* Evento 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">
              🎉 Lanzamiento: Nueva línea de postres
            </h3>
            <p className="text-gray-600 mb-2">
              Domingo, 11 de agosto – 3:00 p.m.
            </p>
            <p className="text-gray-700 text-sm">
              Ven a conocer nuestras nuevas recetas y llévate una muestra
              gratis. ¡Sorpresas y descuentos exclusivos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
