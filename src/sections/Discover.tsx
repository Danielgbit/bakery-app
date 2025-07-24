import Button from "@/components/Button";
import Image from "next/image";

function Discover() {
  const image =
    "https://plus.unsplash.com/premium_photo-1687904747536-139743e096a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFuYWRlcm98ZW58MHx8MHx8fDA%3D";

  return (
    <section className="bg-found py-20" id="historia">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Imagen */}
        <div className="md:w-1/2">
          <Image
            alt="imagen de panadero"
            width={400}
            height={400}
            className="w-full h-auto rounded-xl shadow-md"
            src={image}
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 h-100 flex flex-col justify-evenly aling-center">
          <div>
            <h2 className="text-3xl font-bold text-yellow-800 mb-4">
              Descubre nuestra historia
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Desde hace más de 20 años, en <strong>Panadería Delicias</strong>{" "}
              horneamos con pasión, dedicación y recetas familiares que han
              pasado de generación en generación.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nuestro compromiso es ofrecerte productos frescos y artesanales
              que conectan con la tradición, el sabor auténtico y los momentos
              especiales en familia.
            </p>
          </div>
          <Button children="Ver historia" href="#historia" />
        </div>
      </div>
    </section>
  );
}

export default Discover;
