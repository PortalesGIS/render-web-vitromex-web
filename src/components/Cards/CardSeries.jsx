import React from "react";

export const CardSeries = ({ data }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="rounded-3xl overflow-hidden h-full">
        <img
          src={data.img}
          alt="serie"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="">
        <div>
          <h1 className="medium:text-Text-xl small:text-14px text-black font-semibold">{data.name}</h1>
        </div>
        <div className="medium:text-12px small:text-10px text-primario/gris">
          <span className="">
            35x35,40x40 / Rectificado / Antiderrapante brillante / Hasta 16
            variaciones
          </span>
        </div>
      </div>
    </div>
  );
};
