import { useState, useEffect } from 'react'

const useScrollDirection = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        setLastScrollY(currentScroll);
  
        if (currentScroll > lastScrollY && currentScroll > 50) {
          setShowNavbar(false);
          
        }else {
          setShowNavbar(true);
        };
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
  
    }, [lastScrollY]);

    return showNavbar;
}

export default useScrollDirection;