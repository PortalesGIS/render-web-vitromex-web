import React, { useEffect } from "react";
import { Path } from "../../utils/route";
import ojoabierto from "../../assets/ojoabierto.svg";
import ojoscerrado from "../../assets/ojocerrado.svg";
import advertencia from "../../assets/advertencia.svg";
import selectactive from "../../assets/select_flecha_active.svg";
import { TitleForm } from "./TextForm/TitleForm";
import { ButtonRedirect } from "../Buttons/ButtonRedirect";
import { useShowPassword } from "../../hooks/useShowPassword";
import { useForm } from "../../hooks/useForm";
import { typesAuhtButton } from "../../modules/types/typesAuthButton";
import { InputError } from "./Errors/InputError";
import { useCompleteInput } from "../../hooks/useCompleteInput";
import { useSelector, useDispatch } from "react-redux";
import { errorLoginClean } from "../../modules/actions/auth";

export const FormRegister = () => {
  const state = useSelector((state) => state.ui.errorInput);
  const dispatch = useDispatch();
  const [hasVisibilityPassword, showPassword] = useShowPassword(true);
  const [hasVisibilityConfirmPassword, showConfirmPassword] =
    useShowPassword(true);
  const [formValues, handleInputChange, validationInput] = useForm({
    name: "",
    lastName: "",
    email: "",
    profession: "",
    country: "",
    city: "",
    password: "",
    secondPassword: "",
    check: false,
  });
  const {
    name,
    lastName,
    email,
    profession,
    country,
    city,
    password,
    secondPassword,
    check,
  } = formValues;
  const { equalPassword, isEmail } = validationInput;
  const [validationsCompleteInput] = useCompleteInput(formValues);

  useEffect(() => {
    return () => {
      dispatch(errorLoginClean());
    };
  }, []);

  return (
    <div className="">
      <div className="flex xsmall:flex-col medium:flex-row justify-between medium:gap-48 xsmall:gap-y-8 text-white">
        <div className="flex flex-col gap-y-8 w-72">
          {/* name */}
          <div>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              value={name}
              onChange={handleInputChange}
              className={`w-full appearance-none border-b-2 ${!name && state ? "border-secundary10" : "border-white"} bg-transparent focus:outline-none`}
            />
            {!name && state && <InputError text={"Completa este campo"} />}
          </div>
          {/* lastName */}
          <div>
            <input
              type="text"
              placeholder="Apellido"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              className={`w-full appearance-none border-b-2 ${!lastName && state ? "border-secundary10" : "border-white"} bg-transparent focus:outline-none`}
            />
            {!lastName && state && <InputError text={"Completa este campo"} />}
          </div>
          {/* email */}
          <div>
            <input
              type="text"
              placeholder="Correo electronico"
              name="email"
              value={email}
              onChange={handleInputChange}
              className={`w-full appearance-none border-b-2 ${!email && state ? "border-secundary10" : "border-white"} bg-transparent focus:outline-none`}
            />
            {!isEmail && <InputError text={"No es un correo valido"} />}
            {state && <InputError text={"Este correo existe"} />}
            {!email && state && <InputError text={"Completa este campo"} />}
          </div>
          {/* profession */}
          <div className="relative text-white">
            <select
              className="w-full appearance-none border-b-2 bg-transparent focus:outline-none"
              name="profession"
              value={profession}
              onChange={handleInputChange}
            >
              <option className="text-white" hidden value="null">
                Profesión
              </option>
              <option className="text-black" value="Arquitecto">
                Arquitecto
              </option>
              <option className="text-black" value="Diseñador">
                Diseñador
              </option>
              <option className="text-black" value="Otro">
                Otro
              </option>
            </select>
            <div className="absolute h-5 w-5 top-1 right-0">
              <img src={selectactive} alt="" className="w-full h-auto" />
            </div>
            {!profession && state && (
              <InputError text={"Completa este campo"} />
            )}
          </div>
        </div>
        {/* parte 2 */}
        <div className="flex flex-col gap-y-8 w-72">
          {/* country */}
          <div>
            <input
              type="text"
              placeholder="Estado de la república"
              name="country"
              value={country}
              onChange={handleInputChange}
              className={`w-full appearance-none border-b-2 ${!country && state ? "border-secundary10" : "border-white"} bg-transparent focus:outline-none`}
            />
            {!country && state && <InputError text={"Completa este campo"} />}
          </div>
          {/* city */}
          <div>
            <input
              type="text"
              placeholder="Ciudad"
              name="city"
              value={city}
              onChange={handleInputChange}
              className={`w-full appearance-none border-b-2 ${!city && state ? "border-secundary10" : "border-white"} bg-transparent focus:outline-none`}
            />
            {!city && state && <InputError text={"Completa este campo"} />}
          </div>
          {/* password */}
          <div className="relative flex items-center">
            <input
              type={hasVisibilityPassword ? "password" : "text"}
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={handleInputChange}
              className={`w-full appearance-none border-b-2 ${!password && state ? "border-secundary10" : "border-white"} bg-transparent focus:outline-none`}
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
              name="secondPassword"
              value={secondPassword}
              onChange={handleInputChange}
              className={`w-full appearance-none border-b-2 ${!secondPassword && state ? "border-secundary10" : "border-white"} bg-transparent focus:outline-none`}
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
            {!secondPassword && state && (
              <InputError text={"Completa este campo"} />
            )}
            {!equalPassword && (
              <InputError text={"No es igual la contraseña"} />
            )}
          </div>
          {/* check */}
          <div className="my-0 mx-auto">
            <div className="flex h-10 w-72 items-center justify-center gap-4">
              <input
                type="checkbox"
                className="accent-neutral80 h-6 w-6"
                name="check"
                value={check}
                onChange={handleInputChange}
              />
              <p className="text-12px">
                Acepto los{" "}
                <span className="cursor-pointer text-secundary20">
                  términos y condiciones{" "}
                </span>{" "}
                de Vitrorender
              </p>
            </div>
          </div>
          {/* advertencia check */}
          <div className="my-0 mx-auto h-10">
            {!check && (
              <div className="bg-secundary10 flex h-10 w-72 items-center justify-center gap-3">
                <img src={advertencia} alt="advertancia" />
                <span className="text-10px text-black">
                  Aún no has aceptado los terminos y condiciones
                </span>
              </div>
            )}
          </div>
          <div className="my-12 flex justify-center items-center">
            <ButtonRedirect
              text={"Crear Usuario"}
              direction={`${Path.PRODUCT}/${Path.SERIES}`}
              action={typesAuhtButton.register}
              data={formValues}
              validations={[equalPassword, check, validationsCompleteInput]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
