import React from "react";

export const ButtonMenu = ({ img, text, action }) => {
  return (
    <div className={`h-12 flex items-center gap-2 ${action && 'cursor-pointer' } `} onClick={action}>
      <div className="h-7">
        <img src={img} alt="imagen" className="h-full"/>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-14px text-white">{text}</span>
      </div>
    </div>
  );
};
