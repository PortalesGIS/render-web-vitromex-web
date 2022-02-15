import React from "react";
import Tipología from "../../assets/Tipología.svg";

export const Tipology = () => {
  return (
    <div className="text-white">
      <div className="flex items-center gap-4 cursor-pointer">
        <div>
          <img src={Tipología} alt="" />
        </div>
        <div>
          <span>Por tipología</span>
        </div>
      </div>
      {/* base */}
      {/* <div>p</div> */}
    </div>
  );
};
