import React from "react";
import { useDispatch } from "react-redux";
import { logoutButton } from "../../../modules/actions/ui";
import { ButtonMenu } from "../../Buttons/ButtonMenu";
import { FindProduct } from "../../Inputs/FindProduct";
import { ButtonClearFilter } from "../../Buttons/ButtonClearFilter";
import { Filtertype } from "./Filtertype";
import { useSelector } from "react-redux";

export const MenuProduct = () => {
  const state = useSelector((state) => state.ui.filterActive);
  const dispatch = useDispatch();
  const logoutAction = () => {
    dispatch(logoutButton());
  };
  return (
    <div className="h-full grid grid-rows-layout_menu_slide font-normal">
      <div className="pt-[60px] pl-[16px] pr-[32px] flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col justify-between h-full">
          <div className="overflow-hidden h-full flex flex-col gap-y-6">
            <div className="relative">
              <FindProduct />
            </div>
            <div className="overflow-auto h-full w-full flex flex-col gap-y-4">
              <Filtertype
                typeFilter={"Por formato"}
                img={"bg-formato"}
                imgActive={"hover:bg-formato_hover"}
                activeButton={"bg-formato_hover"}
              />
              <Filtertype
                typeFilter={"Por tipología"}
                img={"bg-tipologia"}
                imgActive={"hover:bg-tipologia_hover"}
                activeButton={"bg-tipologia_hover"}
              />
            </div>
          </div>
          {state && <ButtonClearFilter />}
        </div>
      </div>
      <div className=" pl-[16px] pr-[32px] flex flex-col gap-y-4">
        <div className="bg-white h-px w-full" />
        <div className="flex flex-col gap-y-10">
          <ButtonMenu text={`${localStorage.getItem("name")}`} action={null} />
          <ButtonMenu text={"Salir"} action={logoutAction} />
        </div>
      </div>
    </div>
  );
};
