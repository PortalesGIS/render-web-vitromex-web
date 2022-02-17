import React from "react";
import menor from "../../assets/arrowright.svg";
import mayor from "../../assets/arrowleft.svg";
import { useSelector } from "react-redux";

export const Pagination = () => {
  const state = useSelector((state) => state.product.numberPage);
  const backPage = () => {
    console.log("back");
  };
  const selectPage = (number) => {
    console.log(number);
  };
  const nextPage = () => {
    console.log("back");
  };
  console.log(state);
  return (
    <div className="bg-neutral10 flex justify-center items-center gap-4">
      <div
        className="h-5 w-5 flex justify-center items-center cursor-pointer"
        onClick={backPage}
      >
        <img src={mayor} alt="mayor" />
      </div>
      {state.map((data, i) => (
          <div
            className="h-5 w-5 hover:bg-black hover:font-bold hover:text-white flex justify-center items-center hover:cursor-pointer"
            onClick={() => {
              selectPage(i);
            }}
            key={i}
          >
            <span>{i + 1}</span>
          </div>
        
      ))}
      <div
        className="h-5 w-5 flex justify-center items-center cursor-pointer"
        onClick={nextPage}
      >
        <img src={menor} alt="menor" />
      </div>
    </div>
  );
};
