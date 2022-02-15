import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderProduct } from "../components/Headers/HeaderProduct";
import { Menu } from "../components/Menus/Menu";
import { useShowMenu } from "../hooks/useShowMenu";

export const ProductLayout = () => {
  const [menuNavbar, showMenu] = useShowMenu();
  return (
    <div className="gridLayout h-screen grid-rows-layout_product">
      <HeaderProduct menuValue={menuNavbar} actionmenu={showMenu}/>
      {/* menu */}
      <Menu menuResponsive={menuNavbar} actionmenu={showMenu}/>
      {/* cuerpo */}
      <div className="medium:col-span-10 col-span-full">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
