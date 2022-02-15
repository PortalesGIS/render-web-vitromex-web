import React from "react";
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
      <div className="bg-red-300 medium:col-span-10 col-span-full">Body</div>
    </div>
  );
};
