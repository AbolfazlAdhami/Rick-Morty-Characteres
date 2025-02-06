import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/images/logo.png";
function NavBar() {
  const links = [
    {
      title: "Character",
      href: "/",
    },
    {
      title: "Episodes",
      href: "/episodes",
    },
    {
      title: "Locations",
      href: "/Locations",
    },
  ];

  return (
    <nav className="bg-yellow-400  w-screen static top-0 flex flex-row items-center justify-around text-white">
      <Link to={"/"} className="text-4xl text-green-700 font-extrabold">
        <img src={logo} alt="logo" className="w-36 h-24 " />
      </Link>

      <ul className="flex gap-4 flex-row items-center">
        {links.map((item) => (
          <li key={item.title}>
            <NavLink to={item.href}>
              <h3 className="text-xl hover:text-cyan-600 transition-all ease-linear text-cyan-500 font-medium">{item.title}</h3>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
