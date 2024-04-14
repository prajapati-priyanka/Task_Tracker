import React from "react";
import { ReactComponent as HamburgerMenu } from "../../../assets/menu.svg";
import SearchField from "../../Search/SearchField";
import AddTaskBtn from "../../../utilities/AddTaskBtn";
import { useDispatch } from "react-redux";
import { menusActions } from "../../../redux/slices/menuSlice";

const Header = () => {
  const dispatch = useDispatch();

  const openMenuHeaderHandler = () => {
    dispatch(menusActions.openMenuHeader());
  };

  return (
    <header
      className={`flex items-center justify-evenly grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex`}
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

      <div className="flex flex-1 sm:mr-4 md:mr-6 ml-auto grid place-items-center relative">
        <AddTaskBtn
          className={`btn sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400 sm:shadow-transparent  `}
        />
      </div>
    </header>
  );
};

export default Header;
