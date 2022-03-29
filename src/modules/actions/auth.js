import clientAxios from "../../config/axios";
import { types } from "../types/types";
import { typesAuhtButton } from "../types/typesAuthButton";
import { validationExtraActive } from "./ui";

export const authAxios = (type, dataform) => {
  return async (dispatch, getState) => {
    const state = getState();
    if (type === typesAuhtButton.login) {
      const { email, password } = dataform;
      try {
        const response = await clientAxios.post("auth/login", {
          email,
          password,
        });
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('email', email)
        // localStorage.setItem('password', password)
        dispatch(errorLoginClean());
        dispatch(validationExtraActive(false));
        dispatch(login(response.data.name));
      } catch (error) {
        console.log(error.response.data);
        let msg = error.response.data.msg
        let errors = state.ui.errorFormPersonality
        let newState = {}
        if(msg.includes('x')) {
          newState = {...errors, email: true, password: true}
        }else if(msg.includes('z')){
          newState = {...errors, password: true, email: false}
        }
        dispatch(errorFormPersonalityState(newState));
      }
    } else if (type === typesAuhtButton.restore) {
      const { secondPassword, ...res } = dataform;
      console.log(res);
      try {
        const response = await clientAxios.post("auth/restorePassword", res);
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('email', res.email)
        // localStorage.setItem('password', res.password)
        dispatch(errorLoginClean());
        dispatch(validationExtraActive(false));
        dispatch(restore(response.data.name));
      } catch (error) {
        console.log(error.response.data);
        let msg = error.response.data
        console.log(msg, 'mgs');
        dispatch(errorLogin());
      }
    } else if (type === typesAuhtButton.register) {
      const { check, secondPassword, ...res } = dataform;
      try {
        const response = await clientAxios.post("user", res);
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('email', res.email)
        // localStorage.setItem('password', res.password)
        dispatch(errorLoginClean());
        dispatch(validationExtraActive(false));
        dispatch(resgiter(response.data.name));
      } catch (error) {
        console.log(error.response.data);
        dispatch(errorLogin());
      }
    }
  };
};


export const professionsAxios = () => {
  return async (dispatch, getState) => {
    try {
      const response = await clientAxios.get("profession");
      const {profession} = response.data
      dispatch(setProfessions(profession));
    } catch (error) {
      console.log(error);
    }
  }
}

//* Mutations
export const setProfessions = (professions) => {
  return {
    type: types.profession,
    payload: {
      professions: professions,
    },
  };
}
export const errorFormPersonalityState = (errorFormPersonality) => {
  return {
    type: types.errorFormPersonality,
    payload: {
      errorFormPersonality: errorFormPersonality,
    },
  };
}

export const errorLogin = () => {
  return {
    type: types.uiErrorInput,
    payload: {
      state: true,
    },
  };
};

export const errorLoginClean = () => {
  return {
    type: types.uiErrorInput,
    payload: {
      state: false,
    },
  };
};

export const login = (user) => {
  return {
    type: types.login,
    payload: {
      user: user,
    },
  };
};
export const restore = (user) => {
  return {
    type: types.restore,
    payload: {
      user: user,
    },
  };
};

export const logout = () => {
  localStorage.clear()
  return {
    type: types.logout,
  };
};
export const resgiter = (user) => {
  return {
    type: types.login,
    payload: {
      user: user,
    },
  };
};
