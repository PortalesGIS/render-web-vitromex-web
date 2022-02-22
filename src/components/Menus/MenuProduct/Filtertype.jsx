import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useShowMenu } from "../../../hooks/useShowMenu";
import { filterTypology } from "../../../modules/actions/products";
import { Path } from "../../../utils/route";

export const Filtertype = ({ typeFilter, img, imgActive }) => {
  let filterState = [];
  const state = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visibilityMenu, showMenu] = useShowMenu();
  if (typeFilter === "Por formato") {
    filterState = state.formats;
  } else {
    filterState = state.typologie;
  }
  const selectFilter = (type) => {
    navigate(`${Path.SERIES}`);
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
        className={`flex items-center gap-4 cursor-pointer hover:bg-neutral20 rounded-r-full ${
          visibilityMenu && "bg-white text-black"
        }`}
        onClick={showMenu}
      >
        <div>
          <img src={visibilityMenu ? imgActive : img} alt="formato" />
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
          <div
            className={`${
              state.selecttypology === filter && "bg-white text-black"
            } h-10 hover:bg-white hover:text-black flex justify-start items-center pl-5 rounded-r-full`}
          >
            <span className="capitalize text-14px ">{filter}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
