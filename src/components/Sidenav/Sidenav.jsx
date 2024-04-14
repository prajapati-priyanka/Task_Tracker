import React from "react";
import LayoutMenus from "../../utilities/LayoutMenus";
import Navlinks from "./Navlinks";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/logo.png";
import { menusActions } from "../../redux/slices/menuSlice";

const Sidenav = () => {
  const menuOpen = useSelector((state) => state.menu.menuHeaderOpened);
  const dispatch = useDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuHeader());
  };
  const classLinkActive =
    "text-rose-600 bg-violet-100 border-r-4 border-rose-500";
  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="left-0"
    >
      <div className="h-full flex flex-col">
        <div className="flex mt-8 items-center justify-center xl:justify-start">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 xl:rounded-md xl:ml-4 md:ml-0"
          />

          <h1 className="font-bold uppercase text-center text-lg mt-1 tracking-wide hidden xl:block">
            Task Tracker
          </h1>
        </div>
        {/* Navigation links */}
        <Navlinks classActive={classLinkActive} />
      </div>
    </LayoutMenus>
  );
};

export default Sidenav;
