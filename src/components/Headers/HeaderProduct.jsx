import React from "react";
import logovitromex from "../../assets/VITROMEX_LOGO.svg";

export const HeaderProduct = () => {
  return (
    <div className="bg-black col-span-full">
      <div className="gridLayout h-full">
        <div className="medium:col-span-2 self-center justify-self-center">
          <img src={logovitromex} alt="logo" className="h-4 w-24" />
        </div>
        <div className=" col-span-10 flex justify-between items-center pr-14">
          <div className="">
            <h1 className="text-white font-bold text-15px">VITRORENDER</h1>
          </div>
          <div className="text-white flex justify-between items-center w-96 text-12px">
            <a href="https://www.vitromex.com.mx/catalogo">Catálogo</a>
            <a href="https://www.vitromex.com.mx/cercadeti">Cerca de mí</a>
            <a href="https://polite-tree-072d8e710.azurestaticapps.net/">Mi proyecto</a>
            <a href="https://www.vitromex.com.mx/blog">Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
};
