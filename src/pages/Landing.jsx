import React, { useState } from "react";
import logovitromex from "../assets/logovitromex.svg";
import { ButtonRedirect } from "../components/Buttons/ButtonRedirect";
import { Path } from "../utils/route";
import menu from "../assets/Menú.svg";

export const Landing = () => {
  const [visibilityMenu, setVisibilityMenu] = useState(false);

  const showMenu = () => {
    setVisibilityMenu(!visibilityMenu)
  }
  return (
    <div className="bg-neutral gridLayout h-screen w-screen grid-rows-2 px-4">
      <div className="small:col-span-8 medium:col-span-12 col-span-4">
        <div className="flex items-center justify-center pt-14">
          <img src={logovitromex} alt="logo" />
        </div>
      </div>
      <div className="absolute right-0 mr-6 mt-4">
        <div className="w-80 hidden justify-between items-center text-12px text-white medium:flex">
          <a href="https://www.vitromex.com.mx/catalogo">Catálogo</a>
          <a href="https://www.vitromex.com.mx/cercadeti">Cerca de mí</a>
          <a href="https://polite-tree-072d8e710.azurestaticapps.net/">
            Mi proyecto
          </a>
          <a href="https://www.vitromex.com.mx/blog">Blog</a>
        </div>
        <div className="medium:hidden relative">
          <div className="flex justify-end items-center">
            <img src={menu} alt="menu" className="cursor-pointer" onClick={showMenu}/>
          </div>
          {visibilityMenu && (
            <div
              className={`w-80 flex flex-col items-end text-12px text-white gap-4 pr-4`}
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
      <div className="small:col-span-6 medium:col-span-7 col-span-4 row-start-2 text-white">
        <div>
          <h1 className="text-title_movil small:text-title_table medium:text-title_desktop">
            Título
          </h1>
          <h2 className="text-subtitle_movil small:text-subtitle_table medium:text-subtitle_desktop">
            subtitulo
          </h2>
          <div className="mt-4">
            <p className="text-paragraph_movil small:text-paragraph_table medium:text-paragraph_desktop">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, veritatis. Impedit cum natus pariatur mollitia
              praesentium, inventore tenetur qui maxime. Commodi nostrum iste
              eligendi autem recusandae id, fugit rem minus!
            </p>
          </div>
        </div>
        <div className="mt-12">
          <ButtonRedirect
            text={"Iniciar sección"}
            direction={`${Path.FORM}/${Path.LOGIN}`}
          />
        </div>
      </div>
    </div>
  );
};
