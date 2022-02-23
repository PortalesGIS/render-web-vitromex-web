import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { redirectCard } from "../../modules/actions/products";
import {Path} from '../../utils/route'

export const CardSeries = ({ data }) => {
  const dispatch =  useDispatch()
  const navigate =  useNavigate()
  const navigateParams = () => {
    dispatch(redirectCard(data.name,`${Path.PRODUCT}/${Path.SERIES}/${data.id}`, data.id))
    navigate(`${Path.PRODUCT}/${Path.SERIES}/${data.id}`)
  }
  return (
    <div className="flex flex-col justify-between gap-1 cursor-pointer cardSerie" onClick={navigateParams}>
      <div className="rounded-3xl overflow-hidden h-4/5">
        <img
          src={data.img ? data.img : "https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png"}
          alt="serie"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="">
        <div>
          <h1 className="medium:text-Text-xl small:text-14px text-black font-semibold">{data.name}</h1>
        </div>
        <div className="medium:text-12px xsmall:text-10px text-primario/gris">
          <span className="">
            35x35,40x40 / Rectificado / Antiderrapante brillante / Hasta 16
            variaciones
          </span>
        </div>
      </div>
    </div>
  );
};
