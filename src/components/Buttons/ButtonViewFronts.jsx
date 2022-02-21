import React from "react";
import { useNavigate } from "react-router-dom";
import aplicaciones from "../../assets/aplicaciones.svg";
import { Path } from "../../utils/route";

export const ButtonViewFronts = ({product}) => {
  const navigate = useNavigate();
  const viewColors = () => {
    navigate(`${Path.PRODUCT}/${Path.SERIES}/${product.name}/1`);
  };
  return (
    <div onClick={viewColors} className="border border-black w-36 h-6 flex gap-2 justify-start items-center px-2 cursor-pointer">
      <div>
        <img src={aplicaciones} alt="caras" />
      </div>
      <div>
        <span>Ver caras</span>
      </div>
    </div>
  );
};
