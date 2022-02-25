import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import aplicaciones from "../../assets/aplicaciones.svg";
import { viewRender } from "../../modules/actions/products";
import { Path } from "../../utils/route";

export const ButtonViewFronts = ({ product, number }) => {
  const location =  useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const viewColors = () => {
    let seriesId = location.pathname.split('/')
    seriesId = seriesId[seriesId.length -  1]
    dispatch(viewRender(`${Path.PRODUCT}/${Path.SERIES}/${seriesId}/${number}`, number));
    navigate(`${Path.PRODUCT}/${Path.SERIES}/${seriesId}/${number}`);
  };
  return (
    <div onClick={viewColors} className="buttonNameSerie cursor-pointer">
      <div>
        <img src={aplicaciones} alt="caras" />
      </div>
      <div className="text-10px large:text-15px ">
        <span>Ver caras</span>
      </div>
    </div>
  );
};
