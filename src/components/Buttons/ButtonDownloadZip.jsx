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
      dispatch(downloadZip(parseInt(path[path.length -1])))
    }else{
      dispatch(downloadZip(number))
    }
  }
  return (
    <div
      className="buttonNameSerie"
      onClick={download}
    >
      <div>
        <img src={descargar} alt="caras" />
      </div>
      <div className="textNameSerieButton">
        <span>Descargar ZIP</span>
      </div>
    </div>
  );
};
