import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useShowMenu } from "../../../hooks/useShowMenu";
import { filterTypology } from "../../../modules/actions/products";

export const Filtertype = ({ typeFilter, img }) => {
  let filterState = [];
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [visibilityMenu, showMenu] = useShowMenu();
  if (typeFilter === "Por formato") {
    filterState = state.typologie;
  } else {
    filterState = state.typologie;
  }
  const selectFilter = (type) => {
    switch (typeFilter) {
      case "Por formato":
        console.log("formato");
        break;
      case "Por tipologia":
        dispatch(filterTypology(type, state.productsGeneral));
        break;
      default:
        break;
    }
  };
  return (
    <div className="text-white">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={showMenu}
      >
        <div>
          <img src={img} alt="formato" />
        </div>
        <div>
          <span>{typeFilter} </span>
        </div>
      </div>
      {/* base */}
      {filterState.map((filter) => (
        <div
          className={`flex flex-col gap-2 overflow-hidden cursor-pointer ${
            !visibilityMenu && "hidden"
          }`}
          key={filter}
          onClick={() => {
            selectFilter(filter);
          }}
        >
          <div className="h-10 hover:bg-white hover:text-black flex justify-start items-center pl-5 rounded-r-full">
            <span className="capitalize text-14px ">{filter}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
