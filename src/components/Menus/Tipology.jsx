import React from "react";
import { useSelector } from "react-redux";
import Tipología from "../../assets/Tipología.svg";
import { useShowMenu } from "../../hooks/useShowMenu";

export const Tipology = () => {
  const state = useSelector((state) => state.product.typologie);
  const [visibilityMenu, showMenu] = useShowMenu()
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
      {state.map((typelogie) => (
        <div className={`flex flex-col gap-2 overflow-hidden cursor-pointer ${!visibilityMenu && 'hidden'}`} key={typelogie}>
          <div className="h-10 hover:bg-white hover:text-black flex justify-start items-center pl-5 rounded-r-full">
            <span className="capitalize text-14px ">{typelogie}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
