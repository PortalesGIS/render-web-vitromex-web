import React from "react";
import { ButtonDownloadZip } from "../Buttons/ButtonDownloadZip";
import { ButtonViewFronts } from "../Buttons/ButtonViewFronts";

export const CardProduct = ({ product }) => {
  return (
    <div className="flex gap-6">
      <div className="basis-1/2 overflow-hidden rounded-2xl">
        <img
          src="https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png"
          alt="imagen"
          className="w-full object-cover"
        />
      </div>
      <div className="basis-1/2 flex flex-col justify-between">
        <div>
          <h1 className="font-semibold text-15px">Nombre de la serie</h1>
        </div>
        <div className="medium:text-12px small:text-10px text-primario/gris">
          <span className="">
            35x35,40x40 / Rectificado / Antiderrapante brillante / Hasta 16
            variaciones
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <ButtonViewFronts product={product}/>
          <ButtonDownloadZip />
        </div>
      </div>
    </div>
  );
};
