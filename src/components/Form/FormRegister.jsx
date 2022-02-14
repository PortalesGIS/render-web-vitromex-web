import React, { useState } from "react";
import { Path } from "../../utils/route";
import ojoabierto from "../../assets/ojoabierto.svg";
import ojoscerrado from "../../assets/ojocerrado.svg";
import advertencia from "../../assets/advertencia.svg";
import { TitleForm } from "./TextForm/TitleForm";

export const FormRegister = () => {
  const [hasVisibilityPassword, sethasVisibilityPassword] = useState(true);
  const [hasVisibilityConfirmPassword, sethasVisibilityConfirmPassword] =
    useState(true);
  const [valueSelect, setvalueSelect] = useState("null");
  const [checked, setChecked] = useState(false);

  const showPassword = () => {
    if (hasVisibilityPassword) {
      sethasVisibilityPassword(false);
    } else {
      sethasVisibilityPassword(true);
    }
  };

  const showConfirmPassword = () => {
    if (hasVisibilityConfirmPassword) {
      sethasVisibilityConfirmPassword(false);
    } else {
      sethasVisibilityConfirmPassword(true);
    }
  };

  const onChagueSelectContract = (event) => {
    setChecked(!checked);
  };

  const onChagueSelect = (event) => {
    setvalueSelect(event.target.value);
  };
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
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {/* lastname */}
        <input
          type="text"
          placeholder="Apellido"
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {/* email */}
        <input
          type="text"
          placeholder="Correo electronico"
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {/* profesion */}
        <div className="">
          <select
            className="w-full appearance-none border-b-2 bg-transparent focus:outline-none"
            onChange={onChagueSelect}
            value={valueSelect}
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
        </div>
        <input
          type="text"
          placeholder="Profesión"
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {/* country */}
        <input
          type="text"
          placeholder="Estado de la republica"
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {/* city */}
        <input
          type="text"
          placeholder="Ciudad"
          className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        />
        {/* password */}
        <div className="relative flex items-center">
          <input
            type={hasVisibilityPassword ? "password" : "text"}
            placeholder="Contraseña"
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
        <div className="relative flex items-center">
          <input
            type={hasVisibilityConfirmPassword ? "password" : "text"}
            placeholder="Confirmar contraseña"
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
        </div>
        {/* check */}
        <div className="my-0 mx-auto">
          <div className="flex h-10 w-72 items-center justify-center gap-4">
            <input
              type="checkbox"
              className="accent-neutral20 h-6 w-6"
              onChange={onChagueSelectContract}
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
          {!checked && (
            <div className="bg-neutral20 flex h-10 w-72 items-center justify-center gap-3">
              <img src={advertencia} alt="advertancia" />
              <span className="text-10px text-black">
                Aún no has aceptado los terminos y condiciones
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
