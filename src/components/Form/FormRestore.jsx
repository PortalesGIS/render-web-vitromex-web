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
      dispatch(errorLoginClean());
    };
  }, []);

  return (
    <div className="large:w-96">
      <div className="mb-8">
        <TitleForm
          direction={`${Path.FORM}/${Path.LOGIN}`}
          title={"RESTABLECER CONTRASEÑA"}
          text={"¿Ya tienes cuenta?"}
          textdirection={"Iniciar sesión"}
        />
      </div>
      <div className="flex flex-col gap-11 text-white">
        {/* email */}
        <div className="relative">
          <input
            type="text"
            placeholder="Correo electronico"
            name="email"
            value={email}
            onChange={handleInputChange}
            className={`w-full appearance-none border-b-2 ${
              !email && state ? "border-Feedback_Warning" : "border-white"
            } bg-transparent focus:outline-none`}
          />
          <div className="absolute w-full">
            <div className="relative flex gap-0 flex-col">
              {state ? (
                <InputError text={"Este correo no existe"} />
              ) : (
                !isEmail && (
                  <InputError text={"No es un correo electronico valido"} />
                )
              )}
            </div>
          </div>
        </div>
        {/* password */}
        <div className="relative">
          <input
            type={hasVisibilityPassword ? "password" : "text"}
            placeholder="Contraseña"
            value={password}
            onChange={handleInputChange}
            name="password"
            className={`w-full appearance-none border-b-2 ${
              !password && state ? "border-Feedback_Warning" : "border-white"
            } bg-transparent focus:outline-none`}
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
          <div className="absolute w-full">
            <div className="relative flex gap-0 flex-col">
              {!password && state && (
                <InputError text={"Completa este campo"} />
              )}
            </div>
          </div>
        </div>
        {/* password confirm*/}
        <div className="relative">
          <input
            type={hasVisibilityConfirmPassword ? "password" : "text"}
            placeholder="Confirmar contraseña"
            value={secondPassword}
            onChange={handleInputChange}
            name="secondPassword"
            className={`w-full appearance-none border-b-2 ${
              !secondPassword && state ? "border-Feedback_Warning" : "border-white"
            } bg-transparent focus:outline-none`}
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
          <div className="absolute w-full">
            <div className="relative flex gap-0 flex-col">
              {!equalPassword && (
                <InputError text={"No es igual la contraseña"} />
              )}
              {!secondPassword && state && (
                <InputError text={"Completa este campo"} />
              )}
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <ButtonRedirect
            text={"Iniciar sesión"}
            direction={`${Path.PRODUCT}/${Path.SERIES}`}
            action={typesAuhtButton.restore}
            data={formValues}
            validations={[equalPassword, validationsCompleteInput]}
          />
        </div>
      </div>
    </div>
  );
};
