import React from "react";

export const CardColor = (color) => {
  return (
    <div className="flex flex-col justify-between cursor-pointer">
      <div>
        <img src="https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png" alt="imagen" />
      </div>
      <div>
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
