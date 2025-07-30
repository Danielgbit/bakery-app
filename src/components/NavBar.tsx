"use client";

import useScrollDirection from "@/hooks/useScroll";
import clsx from "clsx";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import NavList from "./NavList";

const NavBar = () => {
  const isScrolled = useScrollDirection();
  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => setClicked(!clicked);

  return (
    <header
      className={clsx(
        "fixed top-2 left-1/2 transform py-1 -translate-x-1/2 z-50 w-[96%] rounded-4xl bg-navbar transition-all duration-300 ease-in-out shadow-md",
        {
          "translate-y-0": isScrolled,
          "-translate-y-100": !isScrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-logo">
          <h1 className="text-xs md:text-xl">Restaurant And Cafe Pro</h1>
          <p className="hidden md:text-sm">
            A Complete Theme For Food Service
          </p>
        </div>

        {/* Mobile Menu Icon */}
        <FaBars
          className="text-fifth text-xl cursor-pointer block md:hidden"
          onClick={handleMenuClick}
        />

        {/* Mobile Navigation */}
        {clicked && (
          <nav className="fixed top-[-15%] left-0 bg-navbar w-full h-screen z-50 flex flex-col items-center justify-center">
            <FaXmark
              onClick={handleMenuClick}
              className="mb-10 text-4xl p-2 rounded-4xl bg-dark text-primary cursor-pointer"
            />
            <NavList />
          </nav>
        )}

        {/* Desktop Navigation */}
        <nav className="w-[60%] text-sm hidden md:flex justify-evenly items-center gap-8">
          <NavList />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
