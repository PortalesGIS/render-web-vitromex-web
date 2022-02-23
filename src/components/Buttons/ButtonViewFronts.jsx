import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import aplicaciones from "../../assets/aplicaciones.svg";
import { viewRender } from "../../modules/actions/products";
import { Path } from "../../utils/route";

export const ButtonViewFronts = ({ product, number }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewColors = () => {
    dispatch(viewRender(`${Path.PRODUCT}/${Path.SERIES}/${product.id}/${number}`, number));
    navigate(`${Path.PRODUCT}/${Path.SERIES}/${product.id}/${number}`);
  };
  return (
    <div onClick={viewColors} className="buttonNameSerie cursor-pointer">
      <div>
        <img src={aplicaciones} alt="caras" />
      </div>
      <div className="text-10px medium:text-12px">
        <span>Ver caras</span>
      </div>
    </div>
  );
};
