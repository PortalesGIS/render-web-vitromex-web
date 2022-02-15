import React from "react";
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

export const FormRegister = () => {
  const [hasVisibilityPassword, showPassword] = useShowPassword(true);
  const [hasVisibilityConfirmPassword, showConfirmPassword] =
    useShowPassword(true);
  const [formValues, handleInputChange, validationInput] = useForm({
    name: "",
    lastname: "",
    email: "",
    profesion: "",
    country: "",
    city: "",
    password: "",
    secondPassword: "",
    check: false,
  });
  const {
    name,
    lastname,
    email,
    profesion,
    country,
    city,
    password,
    secondPassword,
    check,
  } = formValues;
  const { equalPassword, isEmail } = validationInput;

  return (
    <>
      <TitleForm
        direction={`${Path.FORM}/${Path.LOGIN}`}
        title={"Registrate"}
        text={"¿Ya tienes cuenta?"}
        textdirection={"Iniciar sesión"}
      />
      <div className="flex flex-col gap-11 text-white">
        {/* name */}
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={handleInputChange}
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {/* lastname */}
        <input
          type="text"
          placeholder="Apellido"
          name="lastname"
          value={lastname}
          onChange={handleInputChange}
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
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

        {/* profesion */}
        <div className="relative">
          <select
            className="w-full appearance-none border-b-2 bg-transparent focus:outline-none"
            name="profesion"
            value={profesion}
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
        </div>
        {/* country */}
        <input
          type="text"
          placeholder="Estado de la república"
          name="country"
          value={country}
          onChange={handleInputChange}
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {/* city */}
        <input
          type="text"
          placeholder="Ciudad"
          name="city"
          value={city}
          onChange={handleInputChange}
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {/* password */}
        <div className="relative flex items-center">
          <input
            type={hasVisibilityPassword ? "password" : "text"}
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={handleInputChange}
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
            name="secondPassword"
            value={secondPassword}
            onChange={handleInputChange}
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
              <span className="cursor-pointer text-black">
                términos y condiciones{" "}
              </span>{" "}
              de Vitrorender
            </p>
          </div>
        </div>
        {/* advertencia check */}
        <div className="my-0 mx-auto h-10">
          {!check && (
            <div className="bg-neutral20 flex h-10 w-72 items-center justify-center gap-3">
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
            direction={`${Path.PRODUCT}`}
            action={typesAuhtButton.register}
            data={formValues}
            validations={[equalPassword, check]}
          />
        </div>
      </div>
    </>
  );
};
