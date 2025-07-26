import { useEffect, useState } from "react";

const useScroll = (threshold: number = 50): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // llama inicialmente en caso de que ya esté scrolleado

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
};

export default useScroll;
