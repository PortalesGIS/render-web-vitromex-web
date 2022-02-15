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
  const [validationsCompleteInput] = useCompleteInput(formValues)
  const { email, password } = formValues;
  const { isEmail } = validationInput;

  useEffect(() => {
    return () => {
      dispatch(errorLoginClean())
    }
  }, [])
  
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
          {!isEmail && (
            <InputError text={"No es un correo electronico valido"} />
          )}
          {state && <InputError text={"No existe correo"} />}
          {!email && state && <InputError text={"Completa este campo"} />}
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
          {!password && state && <InputError text={"Completa este campo"} />}
        </div>
      </div>
      <div className="mt-12 flex justify-center items-center">
        <ButtonRedirect
          text={"Iniciar sesión"}
          direction={`${Path.PRODUCT}`}
          action={typesAuhtButton.login}
          data={formValues}
          validations={[validationsCompleteInput, isEmail]}
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
