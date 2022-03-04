import React, { useEffect, useState } from "react";
import { Path } from "../../utils/route";
import ojoabierto from "../../assets/ojoabierto.svg";
import ojoscerrado from "../../assets/ojocerrado.svg";
import advertencia from "../../assets/advertencia.svg";
import selectactive from "../../assets/select_flecha_active.svg";
import flechadesactive from "../../assets/flechadesactive.svg";
import { ButtonRedirect } from "../Buttons/ButtonRedirect";
import { useShowPassword } from "../../hooks/useShowPassword";
import { useForm } from "../../hooks/useForm";
import { typesAuhtButton } from "../../modules/types/typesAuthButton";
import { InputError } from "./Errors/InputError";
import { useCompleteInput } from "../../hooks/useCompleteInput";
import { useSelector, useDispatch } from "react-redux";
import { errorLoginClean } from "../../modules/actions/auth";

export const FormRegister = () => {
  const state = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [hasVisibilityPassword, showPassword] = useShowPassword(true);
  const [hasVisibilitySelect, showVisibilitySelect] = useShowPassword(false);
  const [hasVisibilityConfirmPassword, showConfirmPassword] =
    useShowPassword(true);
    const [check, setcheck] = useState(false)
  const [formValues, handleInputChange, validationInput] = useForm({
    name: "",
    lastName: "",
    email: "",
    profession: "",
    country: "",
    city: "",
    password: "",
    secondPassword: ""
  });
  const {
    name,
    lastName,
    email,
    profession,
    country,
    city,
    password,
    secondPassword
  } = formValues;
  const { equalPassword } = validationInput;
  const [validationsCompleteInput] = useCompleteInput(formValues);

  useEffect(() => {
    return () => {
      dispatch(errorLoginClean());
    };
  }, []);

  const handleInputChangeCheck = ({ target }) => {
    setcheck(!check);
  }

  const addProfesion = (profesion) => {
    showVisibilitySelect();
    handleInputChange({ target: { name: "profession", value: profesion } });
  };

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex xsmall:flex-col medium:flex-row justify-between medium:gap-48 xsmall:gap-y-8 text-white"
      >
        <div className="flex flex-col w-72 gap-y-3">
          {/* name */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="name"
              name="name"
              className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 focus:border-b-3 ${
                !name && state.errorInput ? "border-Feedback_Warning" : "border-gray-300"
              }  appearance-none focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              value={name}
              onChange={handleInputChange}
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-neutral00 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
            <div className="absolute w-full">
              {!name && state.errorInput && <InputError text={"Completa este campo"} />}
            </div>
          </div>
          {/* lastName */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="lastName"
              name="lastName"
              className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 focus:border-b-3 ${
                !lastName && state.errorInput
                  ? "border-Feedback_Warning"
                  : "border-gray-300"
              }  appearance-none focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              value={lastName}
              onChange={handleInputChange}
            />
            <label
              htmlFor="lastName"
              className="absolute text-sm text-neutral00 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellido
            </label>
            <div className="absolute w-full">
              {!lastName && state.errorInput && (
                <InputError text={"Completa este campo"} />
              )}
            </div>
          </div>
          {/* email */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 focus:border-b-3 ${
                !email && state.errorInput ? "border-Feedback_Warning" : "border-gray-300"
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
              {state.errorInput && (
                <InputError text={"No es un correo electrónico válido."} />
              )}
            </div>
          </div>
          {/* profession */}
          <div className="relative z-1 mb-6 w-full group">
            <div
              className={`cursor-pointer block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 focus:border-b-3 ${
                !profession && state.errorInput
                  ? "border-Feedback_Warning"
                  : "border-gray-300"
              }  appearance-none focus:outline-none focus:ring-0 peer`}
              onClick={showVisibilitySelect}
            >
              {profession === "" ? (
                <span>Profesión</span>
              ) : (
                <span>{profession}</span>
              )}
            </div>
            <div
              className={`absolute w-full bg-white top-12 ${
                hasVisibilitySelect ? "hidden" : "none"
              }`}
            >
              <div
                className="pl-2 h-8 flex items-center hover:bg-neutral40 text-black hover:text-white cursor-pointer"
                onClick={() => addProfesion("Arquitecto")}
              >
                <span>Arquitecto</span>
              </div>
              <div
                className="pl-2 h-8 flex items-center hover:bg-neutral40 text-black hover:text-white cursor-pointer"
                onClick={() => addProfesion("Diseñador")}
              >
                <span>Diseñador</span>
              </div>
              <div
                className="pl-2 h-8 flex items-center hover:bg-neutral40 text-black hover:text-white cursor-pointer"
                onClick={() => addProfesion("Otro")}
              >
                <span>Otro</span>
              </div>
            </div>
            <span
              id="visiblity-toggle"
              className="absolute top-5 right-0 h-5 w-5 cursor-pointer"
              onClick={showVisibilitySelect}
            >
              <img
                src={hasVisibilitySelect ? selectactive : flechadesactive}
                alt="ojoabierto"
              />
            </span>
          </div>
        </div>
        {/* parte 2 */}
        <div className="flex flex-col w-72 gap-y-3">
          {/* country */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="country"
              name="country"
              className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 focus:border-b-3 ${
                !country && state.errorInput
                  ? "border-Feedback_Warning"
                  : "border-gray-300"
              }  appearance-none focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              value={country}
              onChange={handleInputChange}
            />
            <label
              htmlFor="country"
              className="absolute text-sm text-neutral00 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Estado de la república
            </label>
            <div className="absolute w-full">
              {!country && state.errorInput && <InputError text={"Completa este campo"} />}
            </div>
          </div>
          {/* city */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="city"
              name="city"
              className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 focus:border-b-3 ${
                !city && state.errorInput ? "border-Feedback_Warning" : "border-gray-300"
              }  appearance-none focus:outline-none focus:ring-0 peer`}
              placeholder=" "
              value={city}
              onChange={handleInputChange}
            />
            <label
              htmlFor="city"
              className="absolute text-sm text-neutral00 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ciudad
            </label>
            <div className="absolute w-full">
              {!city && state.errorInput && <InputError text={"Completa este campo"} />}
            </div>
          </div>
          {/* password */}
          <div className="relative z-0 mb-6 w-full group">
            <input
              type={hasVisibilityPassword ? "password" : "text"}
              name="password"
              className={`block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 focus:border-b-3 ${
                !password && state.errorInput
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
              {!password && state.errorInput && (
                <InputError text={"Completa este campo"} />
              )}
            </div>
          </div>
          {/* password confirm*/}
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
          {/* check */}
          <div className="my-0 mx-auto">
            <div className="flex h-10 w-72 items-center justify-center gap-4">
              <input
                type="checkbox"
                className="accent-neutral80 h-6 w-6"
                name="check"
                value={check}
                onChange={handleInputChangeCheck}
              />
              <p className="text-12px">
                Acepta el{" "}
                <a href="https://www.vitromex.com.mx/assets/pdf/aviso-de-privacidad.pdf">
                  <span className="cursor-pointer text-Feedback_Information">
                    aviso de privacidad{" "}
                  </span>{" "}
                </a>
                de Vitrorender
              </p>
            </div>
          </div>
          {/* advertencia check */}
          <div className="my-0 mx-auto h-10">
            {!check && state.validationExtra && (
              <div className="bg-Feedback_Warning flex h-10 w-72 items-center justify-center gap-3">
                <img src={advertencia} alt="advertancia" />
                <span className="text-10px text-black">
                  Aún no has aceptado el aviso de privacidad
                </span>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <ButtonRedirect
              text={"Registrarme"}
              direction={`${Path.PRODUCT}/${Path.SERIES}`}
              action={typesAuhtButton.register}
              data={formValues}
              validations={[equalPassword, validationsCompleteInput]}
              validation_extra={[check]}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
