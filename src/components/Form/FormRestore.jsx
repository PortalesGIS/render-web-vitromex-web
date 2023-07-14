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
import { authAxios, errorLoginClean } from "../../modules/actions/auth";

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
    // eslint-disable-next-line
  }, []);

  const SendForm = (e) => {
    e.preventDefault();
    let validationsInputs = [validationsCompleteInput, isEmail, equalPassword]
    const passAction = validationsInputs.every((validation) => validation);
    if(passAction){
      dispatch(authAxios(typesAuhtButton.restore, formValues));
    }
  };

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
        <form
          onSubmit={(e) => {
            SendForm(e)
          }}
          className="flex flex-col gap-4"
        >
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 focus:border-b-3 ${
                state ? "border-Feedback_Warning" : "border-gray-300"
              }  appearance-none focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              value={email}
              onChange={handleInputChange}
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-neutral00 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Correo electrónico
            </label>
            <div className="absolute w-full">
              {state && (
                <InputError text={"No es un correo electrónico válido."} />
              )}
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type={hasVisibilityPassword ? "password" : "text"}
              name="password"
              className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 focus:border-b-3 ${
                !password && state
                  ? "border-Feedback_Warning"
                  : "border-gray-300"
              }  appearance-none focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              value={password}
              onChange={handleInputChange}
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-neutral00 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contraseña
            </label>
            <span
              id="visiblity-toggle"
              className="absolute top-5 right-0 h-5 w-5 cursor-pointer"
              onClick={showPassword}
            >
              <img
                src={hasVisibilityPassword ? ojoabierto : ojoscerrado}
                alt="ojoabierto"
              />
            </span>
            <div className="absolute w-full">
              {!password && state && (
                <InputError text={"Completa este campo"} />
              )}
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type={hasVisibilityConfirmPassword ? "password" : "text"}
              name="secondPassword"
              className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 focus:border-b-3 ${
                !equalPassword ? "border-Feedback_Warning" : "border-gray-300"
              }  appearance-none focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              value={secondPassword}
              onChange={handleInputChange}
            />
            <label
              htmlFor="secondPassword"
              className="absolute text-sm text-neutral00 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirmar contraseña
            </label>
            <span
              id="visiblity-toggle"
              className="absolute top-5 right-0 h-5 w-5 cursor-pointer"
              onClick={showConfirmPassword}
            >
              <img
                src={hasVisibilityConfirmPassword ? ojoabierto : ojoscerrado}
                alt="ojoabierto"
              />
            </span>
            <div className="absolute w-full">
              {!equalPassword && (
                <InputError text={"La contraseña no coincide"} />
              )}
            </div>
          </div>
          <input type="submit" value="Submit" className="hidden"/>
        </form>
        <div className="flex justify-center items-center">
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
