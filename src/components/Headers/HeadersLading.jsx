import React from "react";
import { useShowMenu } from "../../hooks/useShowMenu";
import menu from "../../assets/Menú.svg";
import equis from "../../assets/equis.svg";
import vitromex from "../../assets/VITROMEX_LOGO.svg";
import { LinkExterno } from "../shared/LinkExterno";
import { MenuVitromex } from "../Menus/MenuVitromex";

export const HeadersLading = () => {
  return (
    <div className="bg-black col-span-full">
      <div className="h-full hidden medium:block">
        <MediumHeaderLanding />
      </div>
      <div className="medium:hidden h-full relative">
        <ResponsiveHeaderLanding />
      </div>
    </div>
  );
};

const MediumHeaderLanding = () => {
  return (
    <div className="flex justify-between h-full px-4 items-center">
      <div className="w-40">
        <a href="https://www.vitromex.com.mx/">
          <img src={vitromex} alt="vitromex" className="h-full w-full"/>
        </a>
      </div>
      <div className="text-white text-12px flex gap-4">
        <LinkExterno
          url={"https://www.vitromex.com.mx/catalogo"}
          texto={"Catálogo"}
        />
        <LinkExterno
          url={"https://www.vitromex.com.mx/cercadeti"}
          texto={"Cerca de mí"}
        />
        <LinkExterno
          url={"ttps://polite-tree-072d8e710.azurestaticapps.net/"}
          texto={"Mi proyecto"}
        />
        <LinkExterno url={"https://www.vitromex.com.mx/blog"} texto={"Blog"} />
      </div>
    </div>
  );
};

const ResponsiveHeaderLanding = () => {
  const [visibilityMenu, showMenu] = useShowMenu();
  return (
    <>
      <div className="flex justify-between h-full px-4 items-center">
        <div>
          <a href="https://www.vitromex.com.mx/">
            <img src={vitromex} alt="vitromex" />
          </a>
        </div>
        <div>
          <img
            src={visibilityMenu ? equis : menu}
            alt="menu"
            className="cursor-pointer"
            onClick={showMenu}
          />
        </div>
      </div>
      <div className={`absolute z-10 top-13 w-full`}>
        <MenuVitromex visibilityMenu={visibilityMenu} />
      </div>
    </>
  );
};
