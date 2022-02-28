import React from "react";
import { useNavigate } from "react-router-dom";

export const FooterForm = ({ direction,text, textdirection }) => {
  const navigate = useNavigate();
  const redirectTo = () => {
    navigate(direction);
  };
  return (
    <div className="mt-6">
      <div className="text-paragraph_movil text-white flex flex-col items-center">
        <span>{text} </span>
        <span
          className="cursor-pointer font-bold underline"
          onClick={() => {
            redirectTo();
          }}
        >
          {textdirection}
        </span>
      </div>
    </div>
  );
};
