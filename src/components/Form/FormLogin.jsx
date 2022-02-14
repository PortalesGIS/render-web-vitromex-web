import React from "react";
import { Path } from "../../utils/route";
import ojoabierto from "../../assets/ojoabierto.svg";
import ojoscerrado from "../../assets/ojocerrado.svg";
import { TitleForm } from "./TextForm/TitleForm";
import { FooterForm } from "./TextForm/FooterForm";
import { ButtonRedirect } from "../Buttons/ButtonRedirect";
import { useSelector } from "react-redux";
import { InputError } from "./Errors/InputError";
import { useForm } from "../../hooks/useForm";
import { useShowPassword } from "../../hooks/useShowPassword";

export const FormLogin = () => {
  const state = useSelector((state) => state.ui.errorInput);
  const [hasVisibilityPassword, showPassword] = useShowPassword(true);
  const [formValues, handleInputChange] = useForm({
    email: "luis@inmersys.com",
    password: "1234",
  });
  const { email, password } = formValues;

  return (
    <>
      <TitleForm
        direction={`${Path.FORM}/${Path.REGISTER}`}
        title={"Login"}
        text={"¿No tienes cuenta?"}
        textdirection={"Regístrate"}
      />
      <div className="flex flex-col gap-11 text-white">
        <div>
          <input
            type="text"
            placeholder="Correo electronico"
            name="email"
            className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
            value={email}
            onChange={handleInputChange}
          />
          {state && <InputError text={"No existe correo"} />}
        </div>
        <div className="relative flex items-center">
          <input
            type={hasVisibilityPassword ? "password" : "text"}
            placeholder="Contraseña"
            name="password"
            className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
            value={password}
            onChange={handleInputChange}
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
        <ButtonRedirect
          text={"Iniciar sesión"}
          direction={`${Path.LANDING}`}
          action={"login"}
          data={formValues}
        />
      </div>
      <FooterForm
        direction={`${Path.FORM}/${Path.RESTORE}`}
        text={"¿No pudes acceder?"}
        textdirection={"Recupera tu contraseña"}
      />
    </>
  );
};
