import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import aplicaciones from "../../assets/aplicaciones.svg";
import { redirectCard } from "../../modules/actions/products";
import { Path } from "../../utils/route";

export const ButtonViewFronts = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewColors = () => {
    dispatch(
      redirectCard(1, `${Path.PRODUCT}/${Path.SERIES}/${product.name}/1`)
    );
    navigate(`${Path.PRODUCT}/${Path.SERIES}/${product.name}/1`);
  };
  return (
    <div
      onClick={viewColors}
      className="buttonNameSerie"
    >
      <div>
        <img src={aplicaciones} alt="caras" />
      </div>
      <div className="text-10px medium:text-12px">
        <span>Ver caras</span>
      </div>
    </div>
  );
};
