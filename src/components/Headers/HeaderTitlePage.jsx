import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ButtonDownloadZip } from "../Buttons/ButtonDownloadZip";

export const HeaderTitlePage = () => {
  const state = useSelector((state) => state.product.titlePage);
  const location = useLocation();
  let path = location.pathname.split("/");
  if (path.length > 4) {
    return (
      <div className="h-full items-center grid grid-cols-3">
        <div></div>
        <div className="text-20px font-bold uppercase justify-self-center">
          <h1>{state}</h1>
        </div>
        <div className="justify-self-end small:block hidden small:w-44">
          <ButtonDownloadZip />
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full flex justify-center items-center">
        <h1 className="text-20px font-bold uppercase">{state}</h1>
      </div>
    );
  }
};
