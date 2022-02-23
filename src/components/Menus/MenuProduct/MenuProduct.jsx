import React from "react";
import { useDispatch } from "react-redux";
import { logoutButton } from "../../../modules/actions/ui";
import { ButtonMenu } from "../../Buttons/ButtonMenu";
import { FindProduct } from "../../Inputs/FindProduct";
import usuario from "../../../assets/Usuario.svg";
import exit from "../../../assets/Exit.svg";
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
          <div className="overflow-auto ">
            <div className="flex gap-4 flex-col">
              <FindProduct />
              <Filtertype typeFilter={"Por formato"} img={formato} imgActive={formatoNegro}/>
              <Filtertype typeFilter={"Por tipología"} img={Tipología} imgActive={TipologíaNegro}/>
            </div>
          </div>
          {state && <ButtonClearFilter />}
        </div>
      </div>
      <div className="px-4">
        <div className="bg-white h-px w-full" />
        <ButtonMenu
          img={usuario}
          text={`${localStorage.getItem("name")}`}
          action={null}
        />
        <ButtonMenu img={exit} text={"Salir"} action={logoutAction} />
      </div>
    </div>
  );
};
