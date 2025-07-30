import navItems from "@/data/navItems";

const NavList = () => {
  return (
    <>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-navbar text-sm font-semibold mb-1 text-navbar"
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default NavList;
