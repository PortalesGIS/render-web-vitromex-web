import React from "react";
import { useSelector } from "react-redux";

export const CardColor = ({ color, number }) => {
  const state = useSelector((state) => state.product);
  let product = state.products[state.numberProduct];
  return (
    <div className="flex flex-col gap-2 cardColorSerie">
      <div className="h-4/5 rounded-2xl overflow-hidden">
        <img
          src={
            color.url
              ? color.url
              : "https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png"
          }
          alt="imagen"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <div className="medium:text-12px small:text-10px text-primario/gris">
          <span className="">
            {product.serie}/{product.color} /{product.sized} / Variación{" "}
            {number}
          </span>
        </div>
      </div>
    </div>
  );
};
