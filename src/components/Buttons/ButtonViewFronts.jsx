import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import aplicaciones from "../../assets/aplicaciones.svg";
import { redirectCard } from "../../modules/actions/products";
import { Path } from "../../utils/route";

export const ButtonViewFronts = ({product}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const viewColors = () => {
    dispatch(redirectCard(1, `${Path.PRODUCT}/${Path.SERIES}/${product.name}/1`))
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
