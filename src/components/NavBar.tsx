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
    }
  ];

  return (
    <header className="bg-navbar shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-700">
          Panadería Delicias
        </h1>
        <nav className="space-x-6 hidden md:flex">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="text-gray-700 hover:text-yellow-700">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
