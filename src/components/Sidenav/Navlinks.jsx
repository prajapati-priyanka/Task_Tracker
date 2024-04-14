import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { menusActions } from "../../redux/slices/menuSlice";
import { useDispatch } from "react-redux";

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
  const location = useLocation();
  const dispatch = useDispatch();

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
              onClick={() => dispatch(menusActions.closeMenuHeader())}
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
