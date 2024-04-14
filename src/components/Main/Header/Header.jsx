import React from "react";
import { ReactComponent as HamburgerMenu } from "../../../assets/menu.svg";

import SearchField from "./SearchField";
import useScreenMedia from "../../../hooks/useScreenMedia";
import AddTaskBtn from "../../../utilities/AddTaskBtn";
import { menusActions } from "../../../redux/store/slices/menuSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const mediaQueries = useScreenMedia();
  const dispatch = useDispatch();

  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };

  return (
    <header
      // className={`items-center grid ${
      //   mediaQueries.xl ? "grid-cols-[1fr_auto_1fr]" : ""
      // } gap-4 md:gap-0 md:flex `}
      className={`items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex`}
    >
      <button
        className="mr-6 block xl:hidden"
        onClick={openMenuHeaderHandler}
        title="open menu"
      >
        <HamburgerMenu />
      </button>

      <SearchField />
  
     <span className="text-slate-600 text-center uppercase font-bold text-base block xl:hidden heading">
        Task Tracker
      </span>

   
     
      <AddTaskBtn
        className={`btn sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400 sm:shadow-transparent`}
      />
    </header>
  );
};

export default Header;
