import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonRedirect } from "../components/Buttons/ButtonRedirect";
import { FormLogin } from "../components/Form/FormLogin";
import { Path } from "../utils/route";

export const Login = () => {
  const navigate  = useNavigate();

  const redirectTo = (direction) => {
    navigate(direction);
  }
  
  return (
    <div className="grid-cols-movil tablet:grid-cols-tableta grid">
      <div className="col-start-2 col-end-7">
        <div>
          <h1>Login</h1>
          <span>¿No tienes cuenta?</span>
          <span className="cursor-pointer" onClick={() => {redirectTo(`${Path.REGISTER}`)}}>Regístrate</span>
        </div>
        <FormLogin />
        <div>
          <h1>Login</h1>
          <span>¿No tienes cuenta?</span>
          <Link to={`${Path.FORM}+${Path.RESTORE}`}>
            Recuperar tu contraseña
          </Link>
        </div>
        <div className="mt-12">
          <ButtonRedirect
            text={"Iniciar sesión"}
            direction={`${Path.LANDING}`}
          />
        </div>
      </div>
    </div>
  );
};
