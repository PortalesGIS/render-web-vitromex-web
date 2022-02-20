import React from "react";
import { useSelector } from "react-redux";
import formato from "../../assets/Formato.svg";
import { useShowMenu } from "../../hooks/useShowMenu";
export const Format = () => {
  const state = useSelector((state) => state.product);
  // const dispatch = useDispatch()
  const [visibilityMenu, showMenu] = useShowMenu();
  const selectFormat = (type) => {
    // dispatch(filterTypology(type, state.productsGeneral))
  };
  return (
    <div className="text-white">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={showMenu}
      >
        <div>
          <img src={formato} alt="formato" />
        </div>
        <div>
          <span>Por formato </span>
        </div>
      </div>
      {/* base */}
      {state.typologie.map((typelogie) => (
        <div
          className={`flex flex-col gap-2 overflow-hidden cursor-pointer ${
            !visibilityMenu && "hidden"
          }`}
          key={typelogie}
          onClick={() => {
            selectFormat(typelogie);
          }}
        >
          <div className="h-10 hover:bg-white hover:text-black flex justify-start items-center pl-5 rounded-r-full">
            <span className="capitalize text-14px ">{typelogie}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
