import React from "react";
import menor from "../../assets/arrowright.svg";
import mayor from "../../assets/arrowleft.svg";

export const Pagination = () => {
  return (
    <div className="bg-neutral10 flex justify-center items-center gap-4">
      <div className="h-5 w-5 flex justify-center items-center">
        <img src={mayor} alt="mayor" />
      </div>
      <div className="h-5 w-5 bg-black font-bold text-white flex justify-center items-center">
        <span>1</span>
      </div>
      <div className="h-5 w-5 flex justify-center items-center">
        <span>2</span>
      </div>
      <div className="h-5 w-5 flex justify-center items-center">
        <img src={menor} alt="menor" />
      </div>
    </div>
  );
};
