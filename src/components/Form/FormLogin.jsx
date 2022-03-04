import React, { useEffect } from "react";
import { Path } from "../../utils/route";
import ojoabierto from "../../assets/ojoabierto.svg";
import ojoscerrado from "../../assets/ojocerrado.svg";
import { TitleForm } from "./TextForm/TitleForm";
import { FooterForm } from "./TextForm/FooterForm";
import { ButtonRedirect } from "../Buttons/ButtonRedirect";
import { useSelector, useDispatch } from "react-redux";
import { InputError } from "./Errors/InputError";
import { useForm } from "../../hooks/useForm";
import { useShowPassword } from "../../hooks/useShowPassword";
import { typesAuhtButton } from "../../modules/types/typesAuthButton";
import { errorLoginClean } from "../../modules/actions/auth";
import { useCompleteInput } from "../../hooks/useCompleteInput";

export const FormLogin = () => {
  const state = useSelector((state) => state.ui.errorInput);
  const dispatch = useDispatch();
  const [hasVisibilityPassword, showPassword] = useShowPassword(true);
  const [formValues, handleInputChange, validationInput] = useForm({
    email: "",
    password: "",
  });
  const [validationsCompleteInput] = useCompleteInput(formValues);
  const { email, password } = formValues;
  const { isEmail } = validationInput;

  useEffect(() => {
    return () => {
      dispatch(errorLoginClean());
    };
  }, []);

  return (
    <div className="large:w-96">
      <div className="mb-8">
        <TitleForm
          direction={`${Path.FORM}/${Path.REGISTER}`}
          title={"INICIO DE SESIÓN"}
          text={"¿No tienes cuenta?"}
          textdirection={"Regístrate"}
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
              !password && state ? "border-Feedback_Warning" : "border-gray-300"
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
            {!password && state && <InputError text={"Completa este campo"} />}
          </div>
        </div>
      </form>
      <FooterForm
        direction={`${Path.FORM}/${Path.RESTORE}`}
        text={"¿No pudes acceder?"}
        textdirection={"Restablecer tu contraseña"}
      />
      <div className="mt-12 flex justify-center items-center">
        <ButtonRedirect
          text={"Iniciar sesión"}
          direction={`${Path.PRODUCT}/${Path.SERIES}`}
          action={typesAuhtButton.login}
          data={formValues}
          validations={[validationsCompleteInput, isEmail]}
        />
      </div>
    </div>
  );
};
