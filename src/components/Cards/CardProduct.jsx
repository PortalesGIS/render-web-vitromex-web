import React from "react";
import { ButtonDownloadZip } from "../Buttons/ButtonDownloadZip";
import { ButtonViewFronts } from "../Buttons/ButtonViewFronts";

export const CardProduct = ({ product, number }) => {
  return (
    <div className="">
      <div className="flex gap-6">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png"
            alt="imagen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="">
          <div>
            <div>
              <h1 className="font-semibold text-15px">{product.name}</h1>
            </div>
            <div className="xsmall:text-12px medium:text-12px small:text-10px text-primario/gris">
              <span className="">
                {product.color}/
                {product.rectified === "0" ? "No Rectificado" : "Rectificado"}/
                {product.renders.length} variaciones
              </span>
            </div>
          </div>
          <div className="">
            <ButtonViewFronts product={product} number={number} />
            <ButtonDownloadZip number={number} />
          </div>
        </div>
      </div>
    </div>
  );
};
