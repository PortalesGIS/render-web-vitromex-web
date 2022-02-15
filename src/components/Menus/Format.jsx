import React from "react";
import formato from "../../assets/Formato.svg";
export const Format = () => {
  return (
    <div className="text-white">
      <div className="flex items-center gap-4 cursor-pointer">
        <div>
          <img src={formato} alt="" />
        </div>
        <div><span>Por formato</span></div>
      </div>
      {/* <div>
        <p>dawda</p>
      </div> */}
    </div>
  );
};
