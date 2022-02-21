import React from "react";
import descargar from '../../assets/descargar.svg'

export const ButtonDownloadZip = () => {
  return (
    <button>
      <div>
        <img src={descargar} alt="caras" />
      </div>
      <div>
        <span>Descargar ZIP</span>
      </div>
    </button>
  );
};
