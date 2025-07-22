const NavBar = () => {
  return (
    <header className="bg-yellow-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-700">Panadería Delicias</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#inicio" className="text-gray-700 hover:text-yellow-700">Inicio</a>
          <a href="#productos" className="text-gray-700 hover:text-yellow-700">Productos</a>
          <a href="#nosotros" className="text-gray-700 hover:text-yellow-700">Nosotros</a>
          <a href="#contacto" className="text-gray-700 hover:text-yellow-700">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default NavBar;
