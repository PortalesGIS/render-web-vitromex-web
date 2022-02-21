import React from "react";
import aplicaciones from '../../assets/aplicaciones.svg'

export const ButtonViewFronts = () => {
  return (
    <button>
      <div>
        <img src={aplicaciones} alt="caras" />
      </div>
      <div>
        <span>Ver caras</span>
      </div>
    </button>
  );
};
