"use client";

import navItems from "@/data/navItems";
import useScrollDirection from "@/hooks/useScroll";
import clsx from "clsx";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const NavBar = () => {
  const isScrolled = useScrollDirection();

  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  return (
    <header
      className={clsx(
        "bg-navbar fixed top-0 w-full py-2 z-50 transition-all duration-300 ease-in-out",
        {
          "translate-y-0": isScrolled,
          "-translate-y-100": !isScrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-logo">
          <h1 className="text-xs md:text-xl">Restaurant And Cafe Pro</h1>
          <p className="hidden md:text-sm">A Complete Theme For Food Service</p>
        </div>
        <FaBars className="text-primary cursor-pointer block md:hidden" onClick={handleMenuClick} />
        {/* MOBILE */}
          {clicked && (
            <nav className="absolute  flex flex-col justify-center items-center top-0 left-0 bg-navbar w-full h-screen z-50">
              <FaXmark onClick={handleMenuClick} className="mb-10 text-xl cursor-pointer"/>
              {navItems.map((item, index) => (
                <a key={index} href={item.href} className="text-primary mb-1 text-navbar">
                  {item.name}
                </a>
              ))}
            </nav>
          )}
        {/* DESKTOP */}
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
