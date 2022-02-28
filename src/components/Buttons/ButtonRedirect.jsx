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
  validations = [true],
}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passAction = validations.every((validation) => validation);

  const actionForm = () => {
    if (passAction) {
      if (action === typesAuhtButton.landing) {
        navigate(direction);
      } else {
        dispatch(authAxios(action, data));
      }
    }
  };

  useEffect(() => {
    if (state.auth.authentication && action !== "landing") {
      navigate(direction);
    }
  }, [state]);

  return (
    <button
      className={`animate__animated flex h-10 w-56 items-center justify-center font-bold ${
        !passAction ? "bg-neutral20 text-neutral40" : "bg-neutral05 hover:bg-neutral10 focus:font-bold focus:bg-neutral00 text-black"
      }`}
      onClick={actionForm}
      disabled={!passAction}
    >
      {text}
    </button>
  );
};
