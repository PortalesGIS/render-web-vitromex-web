import React from "react";
import { useDispatch } from "react-redux";
import { clearFilter } from "../../modules/actions/products";

export const ButtonClearFilter = () => {
  const dispatch = useDispatch()
  const clearFilterAll = () => {
    dispatch(clearFilter())
  }
  return (
    <div className="">
      <button
        className={`flex h-10 mb-4 w-full items-center justify-center bg-neutral20 text-neutral80 font-bold`}
        onClick={clearFilterAll}
      >
        Quitar filtro
      </button>
    </div>
  );
};
