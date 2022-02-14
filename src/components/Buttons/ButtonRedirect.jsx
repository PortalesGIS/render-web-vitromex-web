import React from "react";
import { useDispatch } from "react-redux";
import { authAxios } from "../../modules/actions/auth";
import { useNavigate } from "react-router-dom";

export const ButtonRedirect = ({
  text,
  direction,
  action = "landing",
  data = {},
}) => {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const actionForm = () => {
    switch (action) {
      case "landing":
        navigate(direction);
        break;
      case "login":
        dispatch(authAxios(action, data));
        break;
      case "register":
        dispatch(authAxios(action, data));
        break;
      case "restore":
        dispatch(authAxios(action, data));
        break;
      default:
        break;
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
