import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Tipología from "../../assets/Tipología.svg";
import { useShowMenu } from "../../hooks/useShowMenu";
import { filterTypology } from "../../modules/actions/products";

export const Tipology = () => {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch()
  const [visibilityMenu, showMenu] = useShowMenu()
  const selectTypology = (type) => {
    dispatch(filterTypology(type, state.productsGeneral))
  }
  return (
    <div className="text-white">
      <div className="flex items-center gap-4 cursor-pointer" onClick={showMenu}>
        <div>
          <img src={Tipología} alt="" />
        </div>
        <div>
          <span>Por tipología</span>
        </div>
      </div>
      {/* base */}
      {state.typologie.map((typelogie) => (
        <div className={`flex flex-col gap-2 overflow-hidden cursor-pointer ${!visibilityMenu && 'hidden'}`} key={typelogie} onClick={() => {
          selectTypology(typelogie)
        }}>
          <div className="h-10 hover:bg-white hover:text-black flex justify-start items-center pl-5 rounded-r-full">
            <span className="capitalize text-14px ">{typelogie}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
