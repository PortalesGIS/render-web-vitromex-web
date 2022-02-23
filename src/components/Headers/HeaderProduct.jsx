import React from "react";
import logovitromex from "../../assets/VITROMEX_LOGO.svg";
import menu from "../../assets/Menú.svg";
import menu2 from "../../assets/menu2.svg";
import equis from "../../assets/equis.svg";
import { useShowMenu } from "../../hooks/useShowMenu";
import { LinkExterno } from "../shared/LinkExterno";
import { MenuVitromex } from "../Menus/MenuVitromex";

export const HeaderProduct = ({ menuValue, actionmenu }) => {
  return (
    <div className="bg-black col-span-full">
      <div className="hidden medium:block h-full">
        <MedimProduct />
      </div>
      <div className="medium:hidden h-full relative">
        <ResponsiveHeader menuValue={menuValue} actionmenu={actionmenu} />
      </div>
    </div>
  );
};

const MedimProduct = () => {
  return (
    <div className="gridLayout h-full">
      <div className="medium:col-span-2 self-center justify-self-center ">
        <img src={logovitromex} alt="logo" className="h-4 w-24" />
      </div>
      <div className=" col-span-10 flex justify-between items-center pr-14">
        <div className="">
          <h1 className="text-white font-bold text-15px">VITRORENDER</h1>
        </div>
        <div className="text-white flex justify-between items-center w-96 text-12px">
          <LinkExterno url={"https://www.vitromex.com.mx/catalogo"} texto={'Catálogo'} />
          <LinkExterno url={"https://www.vitromex.com.mx/cercadeti"} texto={'Cerca de mí'} />
          <LinkExterno url={"ttps://polite-tree-072d8e710.azurestaticapps.net/"} texto={'Mi proyecto'} />
          <LinkExterno url={"https://www.vitromex.com.mx/blog"} texto={'Blog'} />
        </div>
      </div>
    </div>
  );
};

const ResponsiveHeader = ({ menuValue, actionmenu }) => {
  const [menuNavbar, showMenu] = useShowMenu();
  return (
    <>
      <div className="flex justify-between items-center h-full px-4">
        <div>
          <img
            src={menu2}
            alt="menu1"
            className="cursor-pointer"
            onClick={actionmenu}
          />
        </div>
        <div>
          <img src={logovitromex} alt="menu1" />
        </div>
        <div>
          <h1 className="text-white font-bold text-15px">VITRORENDER</h1>
        </div>
        <div>
          <img
            src={menuNavbar ? equis : menu}
            alt="menu1"
            className="cursor-pointer"
            onClick={showMenu}
          />
        </div>
      </div>
      <div className={`absolute top-13 w-full h-80`}>
        <MenuVitromex visibilityMenu={menuNavbar} />
      </div>
    </>
  );
};
