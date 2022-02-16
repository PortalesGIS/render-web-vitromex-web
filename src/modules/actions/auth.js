import clientAxios from "../../config/axios";
import { types } from "../types/types";
import { typesAuhtButton } from "../types/typesAuthButton";

export const authAxios = (type, dataform) => {
  return async (dispatch) => {
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
        dispatch(login(response.data.name));
      } catch (error) {
        console.log(error);
        dispatch(errorLogin());
      }
    } else if (type === typesAuhtButton.restore) {
      const { secondPassword, ...res } = dataform;
      console.log(res);
      try {
        const response = await clientAxios.post("auth/restorePassword", res);
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('email', res.email)
        // localStorage.setItem('password', res.password)
        dispatch(restore(response.data.name));
      } catch (error) {
        console.log(error);
        dispatch(errorLogin());
      }
    } else if (type === typesAuhtButton.register) {
      const { check, secondPassword, ...res } = dataform;
      try {
        const response = await clientAxios.post("user", res);
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('email', res.email)
        // localStorage.setItem('password', res.password)
        dispatch(resgiter(response.data.name));
      } catch (error) {
        console.log(error);
        dispatch(errorLogin());
      }
    }
  };
};

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
