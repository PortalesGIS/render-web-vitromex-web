import React from "react";
import { FindProduct } from "../Inputs/FindProduct";
import { Format } from "./Format";
import { Tipology } from "./Tipology";
import usuario from "../../assets/Usuario.svg";
import exit from "../../assets/Exit.svg";
import { ButtonMenu } from "../Buttons/ButtonMenu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../modules/actions/auth";
import { useNavigate } from "react-router-dom";
import { Path } from "../../utils/route";

export const Menu = ({ menuResponsive, actionmenu }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(state);
  const logoutButton = () => {
    dispatch(logout());
    navigate(Path.LANDING);
  };
  return (
    <>
      <MediumMenu logoutButton={logoutButton} />
      {menuResponsive && <ResponsiveMenu logoutButton={logoutButton} actionmenu={actionmenu}/>}
    </>
  );
};

const MediumMenu = ({ logoutButton }) => {
  return (
    <div className={`bg-neutral hidden medium:block medium:col-span-2`}>
      <div className="py-5 pl-4 pr-8 flex justify-between flex-col h-full">
        <div className="flex justify-center gap-4 flex-col">
          <FindProduct />
          <Format />
          <Tipology />
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white h-px w-full" />
          <ButtonMenu img={usuario} text={"Nombre de usuario"} action={null} />
          <ButtonMenu img={exit} text={"Salir"} action={logoutButton} />
        </div>
      </div>
    </div>
  );
};

const ResponsiveMenu = ({logoutButton, actionmenu}) => {
  return (
    <div className="absolute bg-neutral w-menuResponsive medium:hidden h-full">
      <div className="py-5 pl-4 pr-8 flex justify-between flex-col h-full" onClick={actionmenu}>
        <div className="flex justify-center gap-4 flex-col">
          <FindProduct />
          <Format />
          <Tipology />
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-white h-px w-full" />
          <ButtonMenu img={usuario} text={"Nombre de usuario"} action={null} />
          <ButtonMenu img={exit} text={"Salir"} action={logoutButton} />
        </div>
      </div>
    </div>
  );
};
