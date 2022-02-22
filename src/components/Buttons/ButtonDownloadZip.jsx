import React from "react";
import descargar from '../../assets/descargar.svg'

export const ButtonDownloadZip = () => {
  return (
    <div
      className="buttonNameSerie cursor-pointer"
    >
      <div>
        <img src={descargar} alt="caras" />
      </div>
      <div className="text-10px">
        <span>Descargar ZIP</span>
      </div>
    </div>
  );
};
