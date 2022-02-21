import React from "react";
import descargar from '../../assets/descargar.svg'

export const ButtonDownloadZip = () => {
  return (
    <div className="border border-black w-36 h-6 flex gap-2 justify-start items-center px-2 cursor-pointer">
      <div>
        <img src={descargar} alt="caras" />
      </div>
      <div>
        <span>Descargar ZIP</span>
      </div>
    </div>
  );
};
