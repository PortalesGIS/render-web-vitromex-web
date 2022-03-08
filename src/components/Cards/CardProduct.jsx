import React from "react";
import { ButtonDownloadZip } from "../Buttons/ButtonDownloadZip";
import { ButtonViewFronts } from "../Buttons/ButtonViewFronts";

export const CardProduct = ({ product, number }) => {
  console.log(product);
  return (
    <div className="">
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
          <div className="flex justify-between flex-col h-full ">
            <div className="flex flex-col gap-y-[1px]  h-1/2">
              <div className="font-semibold xsmall:text-15px small:text-12px large:text-20px">
                <h1>{product.name}</h1>
              </div>
              <div className="xsmall:text-12px large:text-[13px] small:text-10px text-primario/gris">
                <span>
                  {product.color}
                </span>
                <br/>
                <span className="">
                  {product.sized} / {" "}
                  {product.rectified === "0" ? "No Rectificado" : "Rectificado"}{" "}
                  / {product.renders.length} variaciones
                </span>
              </div>
            </div>
            <div className="h-1/2 flex flex-col justify-self-end gap-y-2">
              <ButtonViewFronts product={product} number={number} />
              <ButtonDownloadZip number={number} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
