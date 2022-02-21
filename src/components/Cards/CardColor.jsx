import React from "react";

export const CardColor = (color) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <div className="basis-4/5 rounded-2xl overflow-hidden">
        <img
          src="https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png"
          alt="imagen"
          className="w-full object-cover"
        />
      </div>
      <div className="basis-1/5">
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
