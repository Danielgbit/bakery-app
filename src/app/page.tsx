import Discover from "@/sections/Discover";
import Events from "@/sections/Events";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import WhatWeSell from "@/sections/WhatWeSell";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhatWeSell/>
      <Events/>
      <Discover/>
      <Products/>
    </div>
  );
}
