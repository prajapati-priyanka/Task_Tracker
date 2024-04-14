import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  {
    name: "All tasks",
    path: "/",
  },

  {
    name: "Completed tasks",
    path: "/completed",
  },
  {
    name: "Pending tasks",
    path: "/pending",
  },
];
const Navlinks = ({ classActive }) => {
 
  const location = useLocation()

  return (
    <nav>
      <ul className="flex flex-col mt-12 ">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={`px-4 py-2 w-full block transition hover:text-rose-600  ${
                location.pathname === link.path ? classActive : ""
              }`}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
