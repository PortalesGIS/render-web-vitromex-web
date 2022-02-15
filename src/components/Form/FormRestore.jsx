import React from "react";
import { Path } from "../../utils/route";
import ojoabierto from "../../assets/ojoabierto.svg";
import ojoscerrado from "../../assets/ojocerrado.svg";
import { TitleForm } from "./TextForm/TitleForm";
import { ButtonRedirect } from "../Buttons/ButtonRedirect";
import { useShowPassword } from "../../hooks/useShowPassword";
import { useForm } from "../../hooks/useForm";
import { InputError } from "./Errors/InputError";
import { typesAuhtButton } from "../../modules/types/typesAuthButton";

export const FormRestore = () => {
  const [hasVisibilityPassword, showPassword] = useShowPassword(true);
  const [hasVisibilityConfirmPassword, showConfirmPassword] =
    useShowPassword(true);
  const [formValues, handleInputChange, validationInput] = useForm({
    email: "",
    password: "",
    secondPassword: "",
  });
  const { email, password, secondPassword } = formValues;
  const { equalPassword, isEmail } = validationInput;
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
        <div>
        <input
          type="text"
          placeholder="Correo electronico"
          name="email"
          value={email}
          onChange={handleInputChange}
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {!isEmail && <InputError text={"Completa este campo"} />}
        </div>
        {/* password */}
        <div className="relative flex items-center">
          <input
            type={hasVisibilityPassword ? "password" : "text"}
            placeholder="Contraseña"
            value={password}
            onChange={handleInputChange}
            name="password"
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
        <div className="relative flex flex-col">
          <input
            type={hasVisibilityConfirmPassword ? "password" : "text"}
            placeholder="Confirmar contraseña"
            value={secondPassword}
            onChange={handleInputChange}
            name="secondPassword"
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
          {!equalPassword && <InputError text={"No es igual la contraseña"} />}
        </div>
        <div className="mt-12 flex justify-center items-center">
          <ButtonRedirect
            text={"Iniciar sesión"}
            direction={`${Path.PRODUCT}`}
            action={typesAuhtButton.restore}
            data={formValues}
            validations={[equalPassword]}
          />
        </div>
      </div>
    </>
  );
};
