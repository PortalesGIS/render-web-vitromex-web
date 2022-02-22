import React from "react";
import { ButtonRedirect } from "../components/Buttons/ButtonRedirect";
import { Path } from "../utils/route";
import { HeadersLading } from "../components/Headers/HeadersLading";
import { HeaderSub } from "../components/Headers/HeaderSub";

export const Landing = () => {
  return (
    <div className="bg-landing bg-no-repeat bg-center bg-cover gridLayout fixed inset-0 h-full grid-rows-lading_header">
      <HeaderSub />
      <HeadersLading />
      <TextInformation />
    </div>
  );
};

const TextInformation = () => {
  return (
    <div className="row-start-3 small:col-span-6 medium:col-span-7 col-span-4 self-end text-white px-4 flex flex-col gap-y-8 pb-28">
      <div>
        <h1 className="text-title_movil small:text-title_table medium:text-title_desktop">
          VITRORENDER
        </h1>
        <div className="">
          <p className="">
            Descarga los productos y sus variaciones necesarias para tus
            proyectos. Recursos hechos por y para profesionales.
          </p>
        </div>
      </div>
      <div>
        <ButtonRedirect
          text={"Empezar a construir"}
          direction={`${Path.FORM}/${Path.LOGIN}`}
        />
      </div>
    </div>
  );
};
