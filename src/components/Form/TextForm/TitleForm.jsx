import React from "react";
import { useNavigate } from "react-router-dom";

export const TitleForm = ({ direction, title, text, textdirection }) => {
  const navigate = useNavigate();
  const redirectTo = () => {
    navigate(direction);
  };
  return (
    <div className="">
      <h1 className="text-subtitle_movil text-white font-bold uppercase">{title}</h1>
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
