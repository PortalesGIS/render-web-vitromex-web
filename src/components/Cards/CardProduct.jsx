import React from "react";
import { useNavigate } from "react-router-dom";
import { Path } from "../../utils/route";
import { ButtonDownloadZip } from "../Buttons/ButtonDownloadZip";
import { ButtonViewFronts } from "../Buttons/ButtonViewFronts";

export const CardProduct = ({product}) => {
  const navigate = useNavigate()
  const viewColors = () => {
    navigate(`${Path.PRODUCT}/${Path.SERIES}/${product.name}/1`)
  }
  return (
    <div className="flex flex-col justify-between cursor-pointer" >
      <div onClick={viewColors}>
        <img src="https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png" alt="imagen" />
      </div>
      <div>
        <div>
          <h1>Nombre de la serie</h1>
        </div>
        <div className="medium:text-12px small:text-10px text-primario/gris">
          <span className="">
            35x35,40x40 / Rectificado / Antiderrapante brillante / Hasta 16
            variaciones
          </span>
        </div>
        <div>
          <ButtonViewFronts />
          <ButtonDownloadZip />
        </div>
      </div>
    </div>
  );
};
