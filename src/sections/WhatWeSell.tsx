import Image from "next/image";
import image from "../../public/images/pan.jpg";
import Button from "@/components/Button";

function WhatWeSell() {
  return (
    <section className="bg-found py-16 text-center h-[800px]" id="que-vendemos">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6">
          ¿Qué vendemos?
        </h2>
        <div className="bg-black p-[0.1px] mb-10"></div>
        <p className="text-lg leading-relaxed mb-20">
          En Panadería Delicias encontrarás una deliciosa variedad de{" "}
          <strong>panes artesanales</strong>, <strong>pasteles frescos</strong>,{" "}
          <strong>galletas caseras</strong> y{" "}
          <strong>postres hechos con amor</strong>. Todo preparado diariamente
          con ingredientes naturales y sin conservantes.
        </p>
      </div>
      <div className="flex justify-center flex-rp mt-8 gap-4">
        <div className="flex flex-col items-center">
          <Image
            alt="pan"
            width={300}
            height={300}
            src={image}
            className="rounded-full"
          />
          <p className="text-sm w-70 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in
            ipsa nihil fuga magni reiciendis suscipit molestias est optio error?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="pan"
            width={300}
            height={300}
            src={image}
            className="rounded-full"
          />
          <p className="text-sm w-70 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in
            ipsa nihil fuga magni reiciendis suscipit molestias est optio error?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            alt="pan"
            width={300}
            height={300}
            src={image}
            className="rounded-full"
          />
          <p className="text-sm w-70 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in
            ipsa nihil fuga magni reiciendis suscipit molestias est optio error?
          </p>
        </div>
      </div>
      <div className="mt-20">
        <Button children="Ver menu" href="#productos" />
      </div>
    </section>
  );
}

export default WhatWeSell;
