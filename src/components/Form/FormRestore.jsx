import React, { useState } from "react";
import { Path } from "../../utils/route";
import ojoabierto from "../../assets/ojoabierto.svg";
import ojoscerrado from "../../assets/ojocerrado.svg";
import { TitleForm } from "./TextForm/TitleForm";

export const FormRestore = () => {
  const [hasVisibilityPassword, sethasVisibilityPassword] = useState(true);
  const [hasVisibilityConfirmPassword, sethasVisibilityConfirmPassword] = useState(true);

  const showPassword = () => {
    if (hasVisibilityPassword) {
      sethasVisibilityPassword(false);
    } else {
      sethasVisibilityPassword(true);
    }
  };

  const showConfirmPassword = () => {
    if (hasVisibilityConfirmPassword) {
      sethasVisibilityConfirmPassword(false);
    } else {
      sethasVisibilityConfirmPassword(true);
    }
  };

  return (
    <>
      <TitleForm
        direction={`${Path.FORM}/${Path.LOGIN}`}
        title={"RESTABLECER CONTRASEÑA"}
        text={"¿Ya tienes cuenta?"}
        textdirection={"Iniciar sesión"}
      />
      <div className="flex flex-col gap-11 text-white">
        {/* email */}
        <input
          type="text"
          placeholder="Correo electronico"
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {/* password */}
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
        {/* password confirm*/}
        <div className="relative flex items-center">
          <input
            type={hasVisibilityConfirmPassword ? "password" : "text"}
            placeholder="Confirmar contraseña"
            className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
          />
          <span
            id="visiblity-toggle"
            className="absolute right-0 h-5 w-5 cursor-pointer"
            onClick={showConfirmPassword}
          >
            <img
              src={hasVisibilityConfirmPassword ? ojoabierto : ojoscerrado}
              alt="ojoabierto"
            />
          </span>
        </div>
      </div>
    </>
  );
};
