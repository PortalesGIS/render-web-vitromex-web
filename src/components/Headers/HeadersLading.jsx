import React from "react";
import { useShowMenu } from "../../hooks/useShowMenu";
import menu from "../../assets/Menú.svg";
import vitromex from '../../assets/VITROMEX_LOGO.svg'

export const HeadersLading = () => {
  const [visibilityMenu, showMenu] = useShowMenu();
  return (
    <div className=" w-full col-span-full bg-black">
      <div className="flex justify-between h-full px-4">
        <div className="self-center">
          <img src={vitromex} alt="vitromex" />
        </div>
        <div className="w-80 hidden justify-between items-center text-12px text-white medium:flex self-center">
          <a href="https://www.vitromex.com.mx/catalogo">Catálogo</a>
          <a href="https://www.vitromex.com.mx/cercadeti">Cerca de mí</a>
          <a href="https://polite-tree-072d8e710.azurestaticapps.net/">
            Mi proyecto
          </a>
          <a href="https://www.vitromex.com.mx/blog">Blog</a>
        </div>
        <div className="medium:hidden relative pt-3">
          <div className="flex justify-end items-center">
            <img
              src={menu}
              alt="menu"
              className="cursor-pointer"
              onClick={showMenu}
            />
          </div>
          {visibilityMenu && (
            <div
              className={`w-80 flex flex-col items-end text-12px text-white gap-4 pr-4 pt-4`}
            >
              <a href="https://www.vitromex.com.mx/catalogo">Catálogo</a>
              <a href="https://www.vitromex.com.mx/cercadeti">Cerca de mí</a>
              <a href="https://polite-tree-072d8e710.azurestaticapps.net/">
                Mi proyecto
              </a>
              <a href="https://www.vitromex.com.mx/blog">Blog</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
