import Button from "@/components/Button";
import Image from "next/image";
import bakeryBg from "../../public/images/Bakery.png";

const Hero = () => {
  return (
    <section id="inicio" className="relative h-[600px] flex items-center justify-center">
      {/* Imagen de fondo */}
      <Image
        alt="Imagen de tienda de panes"
        src={bakeryBg}
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay opcional para mejor contraste */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Contenido */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-[80%] text-center md:text-left text-white">
          <h2 className="text-5xl font-bold mb-4">Pan recién horneado cada día</h2>
          <p className="mb-6">
            Disfruta de nuestros productos artesanales elaborados con
            ingredientes frescos y mucho amor.
          </p>
          <Button children="Ver productos" href="#productos" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
