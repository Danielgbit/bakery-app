"use client";

import navItems from "@/data/navItems";
import useScrollDirection from "@/hooks/useScroll";
import clsx from "clsx";

const NavBar = () => {
  const isScrolled = useScrollDirection();

  return (
    <header
      className={clsx('bg-navbar fixed top-0 w-full z-50 transition-all duration-300 ease-in-out', {
        'translate-y-0' : isScrolled,
        '-translate-y-100': !isScrolled
      })}
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
