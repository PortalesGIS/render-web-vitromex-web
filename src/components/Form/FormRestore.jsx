import React, { useEffect } from "react";
import { Path } from "../../utils/route";
import ojoabierto from "../../assets/ojoabierto.svg";
import ojoscerrado from "../../assets/ojocerrado.svg";
import { TitleForm } from "./TextForm/TitleForm";
import { ButtonRedirect } from "../Buttons/ButtonRedirect";
import { useShowPassword } from "../../hooks/useShowPassword";
import { useForm } from "../../hooks/useForm";
import { InputError } from "./Errors/InputError";
import { typesAuhtButton } from "../../modules/types/typesAuthButton";
import { useCompleteInput } from "../../hooks/useCompleteInput";
import { useSelector, useDispatch } from "react-redux";
import { errorLoginClean } from "../../modules/actions/auth";

export const FormRestore = () => {
  const state = useSelector((state) => state.ui.errorInput);
  const dispatch = useDispatch();
  const [hasVisibilityPassword, showPassword] = useShowPassword(true);
  const [hasVisibilityConfirmPassword, showConfirmPassword] =
    useShowPassword(true);
  const [formValues, handleInputChange, validationInput] = useForm({
    email: "",
    password: "",
    secondPassword: "",
  });
  const [validationsCompleteInput] = useCompleteInput(formValues);
  const { email, password, secondPassword } = formValues;
  const { equalPassword, isEmail } = validationInput;

  useEffect(() => {
    return () => {
      dispatch(errorLoginClean())
    }
  }, [])

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
          {!isEmail && (
            <InputError text={"No es un correo electronico valido"} />
          )}
          {state && <InputError text={"Este correo existe"} />}
          {!email && state && <InputError text={"Completa este campo"} />}
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
          {!password && state && <InputError text={"Completa este campo"} />}
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
          {!secondPassword && state && <InputError text={"Completa este campo"} />}
        </div>
        <div className="mt-12 flex justify-center items-center">
          <ButtonRedirect
            text={"Iniciar sesión"}
            direction={`${Path.PRODUCT}`}
            action={typesAuhtButton.restore}
            data={formValues}
            validations={[equalPassword, validationsCompleteInput]}
          />
        </div>
      </div>
    </>
  );
};
