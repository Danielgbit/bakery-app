const NavBar = () => {
  const navItems = [
    {
      name: "Inicio",
      href: "#inicio",
    },
    {
      name: "Productos",
      href: "#productos",
    },
    {
      name: "Nosotros",
      href: "#nosotros",
    },
    {
      name: "Eventos",
      href: "#events",
    },
    {
      name: "Servicios",
      href: "#services",
    },
  ];

  return (
    <header className="bg-navbar shadow-md font-medium">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold ">
          <h1 className="text-xl">Restaurant And Cafe Pro</h1>
          <p className="text-sm">A Complete Theme For Food Service</p>
        </div>
        <nav className="w-[70%] text-sm tracking-[0.1px] flex justify-between items-center hidden md:flex">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-yellow-700"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
