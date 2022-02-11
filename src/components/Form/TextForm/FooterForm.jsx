import React from "react";
import { useNavigate } from "react-router-dom";

export const FooterForm = ({ direction,text, textdirection }) => {
  const navigate = useNavigate();
  const redirectTo = () => {
    navigate(direction);
  };
  return (
    <div className="mt-14">
      <div className="text-paragraph_movil text-white">
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
