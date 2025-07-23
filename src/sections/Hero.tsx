import Button from "@/components/Button";

const Hero = () => {
  return (
    <section id="inicio" className="py-16 h-130">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 text-yellow-800">
            Pan recién horneado cada día
          </h2>
          <p className="text-gray-700 mb-6">
            Disfruta de nuestros productos artesanales elaborados con
            ingredientes frescos y mucho amor.
          </p>
          <Button children="Ver productos" href="#productos" />
        </div>
        <div className="md:w-1/2">
          <img
            src="https://source.unsplash.com/600x400/?bread,bakery"
            alt="Panadería"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
