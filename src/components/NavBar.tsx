"use client";

import navItems from "@/data/navItems";
import useScroll from "@/hooks/useScroll";
import { useEffect, useState } from "react";

const NavBar = () => {
  const isScrolled = useScroll();

  useEffect(() => {
    console.log(isScrolled);
  }, [isScrolled]);

  return (
    <header
      className={`bg-navbar font-semibold mb-[0.8px] fixed top-0 z-50 w-full transition-all duration-400 ${
          isScrolled 
        ? 'translate-y-[-200px] shadow-md'
        : 'transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-logo">
          <h1 className="text-xl">Restaurant And Cafe Pro</h1>
          <p className="text-sm">A Complete Theme For Food Service</p>
        </div>
        <nav className="w-[60%] text-sm flex justify-left gap-25 items-center hidden md:flex">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="text-navbar">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
