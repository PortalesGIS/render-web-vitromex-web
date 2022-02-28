import React from "react";

export const CardColor = ({ color, number, product }) => {
  return (
    <div className="">
      <div className="h-full overflow-hidden flex flex-col gap-1">
        <div className="xsmall:h-img_series_xsmall small:h-img_series_small medium:h-img_series_medium large:h-img_series_large">
          <div className="rounded-3xl overflow-hidden h-full">
            <img
              src={
                color.url
                  ? color.url
                  : "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1"
              }
              alt="serie"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="">
          <div className="medium:text-12px xsmall:text-10px text-primario/gris">
            <span className="">
              {product.serie}/{product.color} /{product.sized} / Variación{" "}
              {number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
