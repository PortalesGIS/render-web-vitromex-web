import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useShowMenu } from "../../../hooks/useShowMenu";
import {
  filterFormat,
  filterTypology,
} from "../../../modules/actions/products";
import { showFilterActive } from "../../../modules/actions/ui";
import { Path } from "../../../utils/route";

export const Filtertype = ({ typeFilter, img, imgActive, activeButton }) => {
  let filterState = [];
  let visibilityMenu = true;
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [visibilityMenu, showMenu] = useShowMenu();
  if (typeFilter === "Por formato") {
    filterState = state.product.formats;
    visibilityMenu = state.ui.whatFilterActive.format
  } else {
    filterState = state.product.typologie;
    visibilityMenu = state.ui.whatFilterActive.tipology
  }

  const selectFilter = (type) => {
    navigate(`${Path.SERIES}`);
    switch (typeFilter) {
      case "Por formato":
        dispatch(filterFormat(type));
        break;
      case "Por tipología":
        dispatch(filterTypology(type));
        break;
      default:
        break;
    }
  };

  const showMenuFilter = () => {
    dispatch(showFilterActive(typeFilter));
  }
  
  return (
    <div className="text-white" style={{ width: "90%" }}>
      <div
        className={`flex items-center gap-4 h-8 cursor-pointer hover:bg-neutral20 hover:text-neutral80 rounded-r-full ${
          visibilityMenu && "bg-neutral20 text-black font-bold"
        } relative`}
        onClick={showMenuFilter}
      >
        {visibilityMenu ? (
          <div
            className={`ml-1 h-5 w-full absolute  bg-left bg-no-repeat bg-contain ${activeButton}`}
          />
        ) : (
          <div
            className={`ml-1 h-5 w-full absolute  bg-left bg-no-repeat bg-contain ${imgActive} ${img}`}
          />
        )}
        <div className={`pl-12 flex justify-center items-center `}>
          <span className="text-14px ">{typeFilter} </span>
        </div>
      </div>
      {/* base */}
      <div
        className={`flex flex-col pt-[16px] gap-y-4 overflow-hidden cursor-pointer w-full ${
          !visibilityMenu && "hidden"
        }`}
      >
        {filterState.map((filter) => (
          <div
            className={`${
              state.product.selecttypology === filter && "bg-neutral20 text-black font-bold"
            } w-full hover:bg-neutral20 hover:text-black flex justify-start items-center pl-5 rounded-r-full`}
            onClick={() => {
              selectFilter(filter);
            }}
            key={filter}
          >
            <span className="truncate">{filter}</span>
          </div>
        ))}
      </div>
    </div>
  );
};