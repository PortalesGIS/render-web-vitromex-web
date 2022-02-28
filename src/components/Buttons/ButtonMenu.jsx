import React from "react";

export const ButtonMenu = ({ text, action }) => {
  return (
    <div
      className={`h-8 flex items-center gap-2 text-white ${
        action &&
        "cursor-pointer hover:bg-neutral20 active:bg-white active:font-bold active:text-black hover:text-neutral80 "
      } rounded-r-full relative
      `}
      onClick={action}
    >
      <div
        className={`ml-2 h-6 w-full absolute ${
          action ? "bg-exit" : "bg-usuario"
        } bg-left bg-no-repeat bg-contain ${
          action && "hover:bg-exit_hover active:bg-exit_hover"
        } `}
      />
      <div className={`pl-12 flex justify-center items-center `}>
        <span className="text-14px ">{text}</span>
      </div>
    </div>
  );
};
