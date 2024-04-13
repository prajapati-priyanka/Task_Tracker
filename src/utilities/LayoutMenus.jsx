import React, { ReactNode } from "react";
import useScreenMedia from "../hooks/useScreenMedia";

const LayoutMenus = ({children}) => {
  const mediaQueries = useScreenMedia();

  return (
    <>
      <div
        className={`bg-slate-100 h-screen w-60 xl:w-2/12 fixed z-20 ${
          mediaQueries.xl ? "block" : "hidden"
        }`}
      >
        {children}
      </div>
      {!mediaQueries.xl && (
        <div
          className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
         
        ></div>
      )}
    </>
  );
};

export default LayoutMenus;
