import React from "react";
import { LinkExterno } from "../shared/LinkExterno";

export const MenuVitromex = ({ visibilityMenu }) => {
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`absolute w-full animate__animated ${
          visibilityMenu ? "animate__slideInDown" : "animate__slideOutUp"
        }`}
      >
        <div className="flex justify-center items-end flex-col bg-neutral10 text-14px">
          <div className="h-12">
            <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
              <LinkExterno
                url={"https://www.vitromex.com.mx/catalogo"}
                texto={"Catálogo"}
              />
            </div>
          </div>
          <div className="h-12">
            <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
              <LinkExterno
                url={"https://www.vitromex.com.mx/cercadeti"}
                texto={"Cerca de mí"}
              />
            </div>
          </div>
          <div className="h-12">
            <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
              <LinkExterno
                url={"ttps://polite-tree-072d8e710.azurestaticapps.net/"}
                texto={"Mi proyecto"}
              />
            </div>
          </div>
          <div className="h-12">
            <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
              <LinkExterno
                url={"https://www.vitromex.com.mx/blog"}
                texto={"Blog"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
