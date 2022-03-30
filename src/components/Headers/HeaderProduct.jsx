import React from "react";
import logovitrolab from "../../assets/VitroLab.svg";
import logovitromex from "../../assets/VITROMEX_LOGO.svg";
import menu from "../../assets/Menú.svg";
import menu2 from "../../assets/menu2.svg";
import equis from "../../assets/equis.svg";
import { useShowMenu } from "../../hooks/useShowMenu";
import { LinkExterno } from "../shared/LinkExterno";
import { MenuVitromex } from "../Menus/MenuVitromex";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { moveMigajas } from "../../modules/actions/products";
import { Path } from "../../utils/route";

export const HeaderProduct = ({ menuValue, actionmenu }) => {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moveSeries = () => {
    if (state.migajas.length > 1) {
      let initial = state.migajas;
      initial = initial.slice(0, 1);
      dispatch(moveMigajas(initial, "Series", false));
    }
    navigate(`${Path.PRODUCT}/${Path.SERIES}`);
  };
  return (
    <div className="bg-black col-span-full">
      <div className="hidden medium:block h-full">
        <MedimProduct moveSeries={moveSeries} />
      </div>
      <div className="medium:hidden h-full relative">
        <ResponsiveHeader
          menuValue={menuValue}
          actionmenu={actionmenu}
          moveSeries={moveSeries}
        />
      </div>
    </div>
  );
};

const MedimProduct = ({ moveSeries }) => {
  return (
    <div className="gridLayout h-full">
      <div className="medium:col-span-2 self-center pl-5 w-40 large:w-44">
        <a href="https://www.vitromex.com.mx/">
          <img src={logovitromex} alt="logo" className="h-full w-full" />
        </a>
      </div>
      <div className=" col-span-10 flex justify-between items-center pr-14">
        <div className="flex animate__animated animate__fadeIn">
          <img src={logovitrolab} alt="vitrolab" className="w-[60%]" />
        </div>
        <div className="text-white flex justify-between items-center text-12px gap-x-10">
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
          <LinkExterno
            url={"https://www.vitromex.com.mx/blog"}
            texto={"Blog"}
          />
        </div>
      </div>
    </div>
  );
};

const ResponsiveHeader = ({ menuValue, actionmenu, moveSeries }) => {
  const [menuNavbar, showMenu] = useShowMenu();
  return (
    <>
      <div className="px-4 h-full flex items-center justify-between">
        <div className="">
          <img
            src={menu2}
            alt="menu1"
            className="cursor-pointer h-full w-full"
            onClick={actionmenu}
          />
        </div>
        <div className="w-[25%] small:w-[15%]">
          <a href="https://www.vitromex.com.mx/">
            <img
              src={logovitromex}
              alt="logo"
              className="cursor-pointer h-full w-full"
            />
          </a>
        </div>
        <div className=" flex justify-center items-center w-[25%] smallTwo:w-[15%] animate__animated animate__fadeIn">
          <img
            src={logovitrolab}
            alt="logo vitrolab"
            className="h-full w-full"
          />
        </div>
        <div className="">
          <img
            src={menuNavbar ? equis : menu}
            alt="menu1"
            className="cursor-pointer h-full w-full"
            onClick={showMenu}
          />
        </div>
      </div>
      <div className={`absolute top-13 w-full`}>
        <MenuVitromex visibilityMenu={menuNavbar} />
      </div>
    </>
  );
};

// <div>
//           <img
//             src={menu2}
//             alt="menu1"
//             className="cursor-pointer"
//             onClick={actionmenu}
//           />
//         </div>
//         <div>
//           <a href="https://www.vitromex.com.mx/">
//             <img src={logovitromex} alt="logo" />
//           </a>
//         </div>
//         <div className="text-white">
//           <img src={logovitrolab} alt="logo" />
//         </div>
//         <div className="w-full">
//           <img
//             src={menuNavbar ? equis : menu}
//             alt="menu1"
//             className="cursor-pointer"
//             onClick={showMenu}
//           />
//         </div>
