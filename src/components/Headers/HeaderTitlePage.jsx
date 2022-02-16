import React from "react";
import { useSelector } from "react-redux";

export const HeaderTitlePage = () => {
  const state = useSelector((state) => state.product.titlePage)
  return (
    <div className="h-full flex justify-center items-center">
      <h1 className="text-20px font-bold uppercase">{state}</h1>
    </div>
  );
};
