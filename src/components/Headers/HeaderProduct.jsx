import React from "react";
import logovitromex from "../../assets/VITROMEX_LOGO.svg";
import menu from "../../assets/Menú.svg";
import menu2 from "../../assets/menu2.svg";
import equis from "../../assets/equis.svg";
import { useShowMenu } from "../../hooks/useShowMenu";

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
          <a href="https://www.vitromex.com.mx/catalogo">Catálogo</a>
          <a href="https://www.vitromex.com.mx/cercadeti">Cerca de mí</a>
          <a href="https://polite-tree-072d8e710.azurestaticapps.net/">
            Mi proyecto
          </a>
          <a href="https://www.vitromex.com.mx/blog">Blog</a>
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
      {menuNavbar && (
        <div className="absolute w-full bg-white">
          <div className="flex justify-center items-end flex-col bg-neutral10">
            <div className="h-12 text-14px">
              <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
                <a href="https://www.vitromex.com.mx/catalogo">Catálogo</a>
              </div>
            </div>
            <div className="h-12 text-14px">
              <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
                <a href="https://www.vitromex.com.mx/cercadeti">Cerca de mí</a>
              </div>
            </div>
            <div className="h-12 text-14px">
              <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
                <a href="https://polite-tree-072d8e710.azurestaticapps.net/">
                  Mi proyecto
                </a>
              </div>
            </div>
            <div className="h-12 text-14px">
              <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
                <a href="https://www.vitromex.com.mx/blog">Blog</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
