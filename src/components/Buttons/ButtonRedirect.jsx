import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAxios } from "../../modules/actions/auth";
import { useNavigate } from "react-router-dom";
import { typesAuhtButton } from "../../modules/types/typesAuthButton";
import { validationExtraActive } from "../../modules/actions/ui";

export const ButtonRedirect = ({
  text,
  direction,
  action = typesAuhtButton.landing,
  data = {},
  validations = [true],
  validation_extra = [true]
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
        const passExtra = validation_extra.every((validation) => validation);
        if(passExtra){
          dispatch(authAxios(action, data));
        }else {
          dispatch(validationExtraActive(true))
        }
      }
    }
  };

  useEffect(() => {
    if (state.auth.authentication && action !== "landing") {
      dispatch(validationExtraActive(false))
      navigate(direction);
    }
    // eslint-disable-next-line
  }, [state]);

  return (
    <button
      className={`animate__animated flex h-10 w-56 items-center justify-center text-[18px] ${
        !passAction ? "bg-neutral20 text-neutral40" : "bg-neutral05 hover:bg-neutral10 focus:font-medium focus:bg-neutral00 text-black"
      }`}
      onClick={actionForm}
      disabled={!passAction}
    >
      {text}
    </button>
  );
};
