import React from "react";

export const CardColor = ({ color, number, product }) => {
  return (
    <div className="px-3 cardColorSerie">
      <div className="h-full overflow-hidden flex flex-col gap-1">
        <div className="rounded-3xl overflow-hidden basis-4/5">
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
          <div className="medium:text-12px xsmall:text-10px text-primario/gris">
            <span className="">
              {product.serie}/{product.color} /{product.sized} / Variación {number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
