import React from "react";
import { ButtonDownloadZip } from "../Buttons/ButtonDownloadZip";
import { ButtonViewFronts } from "../Buttons/ButtonViewFronts";

export const CardProduct = ({ product, number }) => {
  return (
    <div className="px-3 large:py-3">
      <div className="grid grid-cols-card_grid_xsmall">
        <div className="pr-3 ">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png"
              alt="imagen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="pl-3">
          <div className="flex justify-between flex-col h-full">
            <div className="flex flex-col medium:gap-y-1 large:gap-4 basis-1/2">
              <div className="font-semibold xsmall:text-15px small:text-12px large:text-20px">
                <h1>{product.name}</h1>
              </div>
              <div className="xsmall:text-12px large:text-15px small:text-10px text-primario/gris">
                <span className="">
                  {product.color} /{" "}
                  {product.rectified === "0" ? "No Rectificado" : "Rectificado"}{" "}
                  / {product.renders.length} variaciones
                </span>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col gap-y-2">
              <ButtonViewFronts product={product} number={number} />
              <ButtonDownloadZip number={number} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
