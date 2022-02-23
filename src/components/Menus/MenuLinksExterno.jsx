import React from "react";
import { LinkExterno } from "../shared/LinkExterno";

export const MenuLinksExterno = () => {
  return (
    <div className="absolute z-10 w-full bg-white">
      <div className="flex justify-center items-end flex-col bg-neutral10">
        <div className="h-12 text-14px">
          <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
            <LinkExterno
              url={"https://www.vitromex.com.mx/catalogo"}
              texto={"Catálogo"}
            />
          </div>
        </div>
        <div className="h-12 text-14px">
          <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
            <LinkExterno
              url={"https://www.vitromex.com.mx/cercadeti"}
              texto={"Cerca de mí"}
            />
          </div>
        </div>
        <div className="h-12 text-14px">
          <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
            <LinkExterno
              url={"ttps://polite-tree-072d8e710.azurestaticapps.net/"}
              texto={"Mi proyecto"}
            />
          </div>
        </div>
        <div className="h-12 text-14px">
          <div className="hover:bg-white rounded-l-2xl w-56 h-full flex justify-end items-center pr-3 hover:font-bold">
            <LinkExterno
              url={"https://www.vitromex.com.mx/blog"}
              texto={"Blog"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
