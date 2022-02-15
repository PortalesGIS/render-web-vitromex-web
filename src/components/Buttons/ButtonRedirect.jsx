import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAxios } from "../../modules/actions/auth";
import { useNavigate } from "react-router-dom";
import { typesAuhtButton } from "../../modules/types/typesAuthButton";

export const ButtonRedirect = ({
  text,
  direction,
  action = typesAuhtButton.landing,
  data = {},
  validations = [true]
}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const actionForm = () => {
    const passAction = validations.every(validation => validation)
    if(passAction){
      if(action === typesAuhtButton.landing){
        navigate(direction);
      }else {
        dispatch(authAxios(action, data));
      }
    }
  };

  useEffect(() => {
    if(state.auth.authentication && action !== 'landing'){
      navigate(direction);
    }
  }, [state])
  
  return (
    <button
      className="flex h-10 w-52 items-center justify-center bg-white text-black"
      onClick={actionForm}
    >
      {text}
    </button>
  );
};
