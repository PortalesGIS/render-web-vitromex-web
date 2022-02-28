import React from "react";
import { useDispatch } from "react-redux";
import { logoutButton } from "../../../modules/actions/ui";
import { ButtonMenu } from "../../Buttons/ButtonMenu";
import { FindProduct } from "../../Inputs/FindProduct";
import { ButtonClearFilter } from "../../Buttons/ButtonClearFilter";
import { Filtertype } from "./Filtertype";
import Tipología from "../../../assets/Tipología.svg";
import TipologíaNegro from "../../../assets/TipologíaNegro.svg";
import formato from "../../../assets/Formato.svg";
import formatoNegro from "../../../assets/FormatoNegro.svg";
import { useSelector } from "react-redux";

export const MenuProduct = () => {
  const state = useSelector((state) => state.ui.filterActive);
  const dispatch = useDispatch();
  const logoutAction = () => {
    dispatch(logoutButton());
  };
  return (
    <div className="h-full grid grid-rows-layout_menu_slide ">
      <div className="px-4 pt-5">
        <div className="h-full flex flex-col justify-between relative">
          <div className="overflow-auto bg-tipologia_hover">
            <div className="flex gap-4 flex-col">
              <FindProduct />
              <Filtertype
                typeFilter={"Por formato"}
                img={'bg-formato'}
                imgActive={'hover:bg-formato_hover'}
                activeButton={'bg-formato_hover'}
              />
              <Filtertype
                typeFilter={"Por tipología"}
                img={'bg-tipologia'}
                imgActive={'hover:bg-tipologia_hover'}
                activeButton={'bg-tipologia_hover'}
              />
            </div>
          </div>
          {state && <ButtonClearFilter />}
        </div>
      </div>
      <div className="px-4">
        <div className="bg-white h-px w-full" />
        <div className="flex flex-col justify-between gap-4">
          <ButtonMenu text={`${localStorage.getItem("name")}`} action={null} />
          <ButtonMenu text={"Salir"} action={logoutAction} />
        </div>
      </div>
    </div>
  );
};
