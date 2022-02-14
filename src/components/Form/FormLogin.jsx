import React, { useState } from "react";
import { Path } from "../../utils/route";
import ojoabierto from "../../assets/ojoabierto.svg";
import ojoscerrado from "../../assets/ojocerrado.svg";
import { TitleForm } from "./TextForm/TitleForm";
import { FooterForm } from "./TextForm/FooterForm";
import { ButtonRedirect } from "../Buttons/ButtonRedirect";

export const FormLogin = () => {
  const [hasVisibilityPassword, sethasVisibilityPassword] = useState(true);

  const showPassword = () => {
    if (hasVisibilityPassword) {
      sethasVisibilityPassword(false);
    } else {
      sethasVisibilityPassword(true);
    }
  };

  return (
    <>
      <TitleForm
        direction={`${Path.FORM}/${Path.REGISTER}`}
        title={"Login"}
        text={"¿No tienes cuenta?"}
        textdirection={"Regístrate"}
      />
      <div className="flex flex-col gap-11 text-white">
        <input
          type="text"
          placeholder="Correo electronico"
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        <div className="relative flex items-center">
          <input
            type={hasVisibilityPassword ? "password" : "text"}
            placeholder="Contraseña"
            className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
          />
          <span
            id="visiblity-toggle"
            className="absolute right-0 h-5 w-5 cursor-pointer"
            onClick={showPassword}
          >
            <img
              src={hasVisibilityPassword ? ojoabierto : ojoscerrado}
              alt="ojoabierto"
            />
          </span>
        </div>
      </div>
      <div className="mt-12 flex justify-center items-center">
        <ButtonRedirect text={"Iniciar sesión"} direction={`${Path.LANDING}`} />
      </div>
      <FooterForm
        direction={`${Path.FORM}/${Path.RESTORE}`}
        text={"¿No pudes acceder?"}
        textdirection={"Recupera tu contraseña"}
      />
    </>
  );
};
