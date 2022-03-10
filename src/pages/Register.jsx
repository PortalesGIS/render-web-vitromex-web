import React from "react";
import { FormRegister } from "../components/Form/FormRegister";
import { TitleForm } from "../components/Form/TextForm/TitleForm";
import { Path } from "../utils/route";

export const Register = () => {
  return (
    <div className="min-h-full gridLayout">
      <div className="bg-register bg-cover bg-no-repeat bg-center hidden medium:block medium:col-span-3" />
      <RegistroMedium />
    </div>
  );
};

const RegistroMedium = () => {
  return (
    <div className="medium:col-span-9 xsmall:col-span-full flex justify-center items-center bg-neutral80">
      <div className="flex flex-col gap-y-14 xsmall:pt-20 medium:pt-10 mb-28">
        <div>
          <div className="uppercase text-left font-bold text-Text-4xl text-white">
            <h1>Vitrorender</h1>
          </div>
          <TitleForm
            direction={`${Path.FORM}/${Path.LOGIN}`}
            title={"registro"}
            text={"¿Ya tienes cuenta?"}
            textdirection={"Iniciar sesión"}
          />
        </div>
        <FormRegister />
      </div>
    </div>
  );
};
