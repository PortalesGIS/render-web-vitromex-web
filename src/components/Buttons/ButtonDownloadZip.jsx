import React from "react";
import descargar from '../../assets/descargar.svg'

export const ButtonDownloadZip = () => {
  return (
    <div
      className="border-2 border-black xsmall:h-8 small:h-6 w-3/4 flex gap-2 justify-start items-center px-2 cursor-pointer"
    >
      <div>
        <img src={descargar} alt="caras" />
      </div>
      <div className="text-12px">
        <span>Descargar ZIP</span>
      </div>
    </div>
  );
};
