import React from "react";
import { MenuProduct } from "./MenuProduct/MenuProduct";

export const Menu = ({ menuResponsive, actionmenu }) => {
  
  return (
    <>
      <MediumMenu />
      {menuResponsive && (
        <ResponsiveMenu  actionmenu={actionmenu} />
      )}
    </>
  );
};

const MediumMenu = ({ logoutButton }) => {
  return (
    <div className={`bg-neutral hidden medium:block medium:col-span-2`}>
      <MenuProduct />
    </div>
  );
};

const ResponsiveMenu = ({ actionmenu }) => {
  return (
    <div className="absolute z-10 h-full w-full medium:hidden">
      <div className="gridLayout h-full">
        <div className="bg-neutral col-span-3 small:col-span-5 overflow-hidden">
          <MenuProduct />
        </div>
        <div className="small:col-span-3" onClick={actionmenu}></div>
      </div>
    </div>
  );
};
