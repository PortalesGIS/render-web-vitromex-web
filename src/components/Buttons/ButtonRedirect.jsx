import React from "react";
import { useNavigate } from 'react-router-dom';

export const ButtonRedirect = ({ text, direction }) => {
  const navigate  = useNavigate();

  const redirectTo = () => {
    navigate(direction);
  }
  
  return (
    <button className="flex h-10 w-52 items-center justify-center bg-white text-black" onClick={redirectTo}>
      {text}
    </button>
  );
};
