import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../modules/actions/auth";
// import { useNavigate } from 'react-router-dom';

export const ButtonRedirect = ({ text, direction, action = 'login' }) => {

  const dispatch = useDispatch();
  // const navigate  = useNavigate();

  // const redirectTo = () => {
  //   navigate(direction);
  // }
  
  const actionForm = () => {
    dispatch(login('luis@luis.com', 123456))
  }
  return (
    <button className="flex h-10 w-52 items-center justify-center bg-white text-black" onClick={actionForm}>
      {text}
    </button>
  );
};
