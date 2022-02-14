import React from "react";
import { useDispatch } from "react-redux";
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
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const actionForm = () => {
    const passAction = validations.every(validation => validation)
    if(passAction){
      switch (action) {
        case typesAuhtButton.landing:
          navigate(direction);
          break;
        case typesAuhtButton.login:
          dispatch(authAxios(action, data));
          break;
        case typesAuhtButton.restore:
          dispatch(authAxios(action, data));
          break;
        case typesAuhtButton.register:
          dispatch(authAxios(action, data));
          break;
        default:
          break;
      }
    }
  };

  // useEffect(() => {
  //   if(state.auth.authentication && action !== 'landing'){
  //     navigate(direction);
  //   }
  // }, [state])
  
  return (
    <button
      className="flex h-10 w-52 items-center justify-center bg-white text-black"
      onClick={actionForm}
    >
      {text}
    </button>
  );
};
