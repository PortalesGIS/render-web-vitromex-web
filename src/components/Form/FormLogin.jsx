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
          title={"Login"}
          text={"¿No tienes cuenta?"}
          textdirection={"Regístrate"}
        />
      </div>
      <div className="flex flex-col gap-11 text-white">
        <div className="relative">
          <input
            type="text"
            placeholder="Correo electronico"
            name="email"
            className={`w-full appearance-none border-b-2 ${
              !email && state ? "border-secundary10" : "border-white"
            } bg-transparent focus:outline-none`}
            value={email}
            onChange={handleInputChange}
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
        <div className="relative">
          <input
            type={hasVisibilityPassword ? "password" : "text"}
            placeholder="Contraseña"
            name="password"
            className={`w-full appearance-none border-b-2 ${
              !password && state ? "border-secundary10" : "border-white"
            } bg-transparent focus:outline-none`}
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
          <div className="absolute w-full">
            <div className="relative flex gap-0 flex-col">
              {!password && state && (
                <InputError text={"Completa este campo"} />
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterForm
        direction={`${Path.FORM}/${Path.RESTORE}`}
        text={"¿No pudes acceder?"}
        textdirection={"Recupera tu contraseña"}
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
