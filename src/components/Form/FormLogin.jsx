import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Path } from "../../utils/route";
import ojoabierto from "../../assets/ojoabierto.svg";
import ojoscerrado from "../../assets/ojocerrado.svg";

export const FormLogin = () => {
  const [hasVisibilityPassword, sethasVisibilityPassword] = useState(true)
  const navigate = useNavigate();

  const redirectTo = (direction) => {
    navigate(direction);
  };

  const showPassword = () => {
    if (hasVisibilityPassword) {
      sethasVisibilityPassword(false)
    }else {
      sethasVisibilityPassword(true)
    }
  }

  return (
    <>
      <div className="mb-14">
        <h1 className="text-subtitle_movil text-white">Login</h1>
        <div className="text-paragraph_movil text-white">
          <span>¿No tienes cuenta? </span>
          <span
            className="cursor-pointer font-bold underline"
            onClick={() => {
              redirectTo(`${Path.FORM}/${Path.REGISTER}`);
            }}
          >
            Regístrate
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-11 text-white">
        <input
          type="text"
          placeholder="Correo electronico"
          className="appearance-none w-full border-b-2 border-white bg-transparent focus:outline-none"
        />
        <div className="relative flex items-center">
          <input
            type={hasVisibilityPassword ? "password" : "text"}
            placeholder="Contraseña"
            className="appearance-none w-full border-b-2 border-white bg-transparent focus:outline-none"
          />
          <span
            id="visiblity-toggle"
            className="absolute right-0 h-5 w-5 cursor-pointer"
            onClick={showPassword}
          >
            <img src={hasVisibilityPassword? ojoabierto : ojoscerrado} alt="ojoabierto" />
          </span>
        </div>
      </div>
      <div className="mt-14">
        <div className="text-paragraph_movil text-white">
          <span>¿No puedes acceder? </span>
          <span
            className="cursor-pointer font-bold underline"
            onClick={() => {
              redirectTo(`${Path.FORM}/${Path.REGISTER}`);
            }}
          >
            Recupera tu contraseña
          </span>
        </div>
      </div>
    </>
  );
};
