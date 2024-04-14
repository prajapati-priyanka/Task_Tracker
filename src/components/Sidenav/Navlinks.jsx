import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
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

  return (
    <nav>
      <ul className="grid gap-2">
        {links.map((link) => (
          <li
            key={link.path}
            className="px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200"
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
