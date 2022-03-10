import React from "react";
import { ButtonDownloadZip } from "../Buttons/ButtonDownloadZip";
import { ButtonViewFronts } from "../Buttons/ButtonViewFronts";

export const CardProduct = ({ product, number }) => {
  console.log(product.thumbnail[0].url);
  return (
    <div className="flex large:gap-x-4 medium:gap-x-6 xsmall:gap-x-4">
      <div className="overflow-hidden rounded-2xl w-1/2">
        <img
          src={product.thumbnail[0].url ? product.thumbnail[0].url : "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1"}
          alt="imagen"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="font-semibold xsmall:text-[18px] small:text-[15px] smallTwo:text-[17px] medium:text-[15px] large:text-[15px]">
          <h1>{product.name}</h1>
        </div>
        <div className="xsmall:text-[14px] large:text-[13px] small:text-[10px] smallTwo:text-[14px] medium:text-[12px] text-primario/gris">
          <span>{product.color}</span>
          <br />
          <span className="">
            {product.sized} /{" "}
            {product.rectified === "0" ? "No Rectificado" : "Rectificado"} /{" "}
            {product.renders.length} variaciones
          </span>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex flex-col  xsmall:gap-y-4 small:gap-y-2">
            <ButtonViewFronts product={product} number={number} />
            <ButtonDownloadZip number={number} />
          </div>
        </div>
      </div>
    </div>
  );
};
