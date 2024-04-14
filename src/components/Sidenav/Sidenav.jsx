import React from "react";
import LayoutMenus from "../../utilities/LayoutMenus";
import Navlinks from "./Navlinks";

const Sidenav = () => {
  const classLinkActive =
  "text-rose-600 bg-violet-100 border-r-4 border-rose-500 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";
  return (
    <LayoutMenus>
      <div className="h-full flex flex-col">
        <h1 className="font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block">
          TASK MANAGEMENT
        </h1>
        {/* Navigation links */}
        <Navlinks classActive={classLinkActive} />
      </div>
    </LayoutMenus>
  );
};

export default Sidenav;
