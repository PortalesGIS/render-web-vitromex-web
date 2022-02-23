import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import descargar from '../../assets/descargar.svg'
import { downloadZip } from "../../modules/actions/products";

export const ButtonDownloadZip = ({number = null}) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const download = () => {
    let path = location.pathname.split('/')
    if(path.length > 4){
      console.log('url');
    }else{
      dispatch(downloadZip(number))
    }
  }
  return (
    <div
      className="buttonNameSerie cursor-pointer"
      onClick={download}
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
