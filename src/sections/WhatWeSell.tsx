import Image from "next/image";
import Button from "@/components/Button";
import whatWeSell from "@/data/whatWeSell";

function WhatWeSell() {
  return (
    <section
      className="bg-primary py-30 text-center"
      id="que-vendemos"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-tertiary mb-6">
          ¿Qué vendemos?
        </h2>
        <div className="bg-secondary p-[0.1px] mb-10"></div>
        <p className="text-lg text-fourth leading-relaxed mb-20">
          En Panadería Delicias encontrarás una deliciosa variedad de{" "}
          <strong>panes artesanales</strong>, <strong>pasteles frescos</strong>,{" "}
          <strong>galletas caseras</strong> y{" "}
          <strong>postres hechos con amor</strong>. Todo preparado diariamente
          con ingredientes naturales y sin conservantes.
        </p>
      </div>
      <div className="flex justify-center flex-rp mt-8 gap-4">
        {whatWeSell.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              alt="pan"
              width={300}
              height={300}
              src={item.imageSrc}
              className="rounded-full"  
            />
            <p className="text-sm text-tertiary w-70 mt-5">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-20">
        <Button children="Ver menu" href="#productos" />
      </div>
    </section>
  );
}

export default WhatWeSell;
