import React from "react";
import { ButtonRedirect } from "../components/Buttons/ButtonRedirect";
import { Path } from "../utils/route";
import { HeadersLading } from "../components/Headers/HeadersLading";
import { HeaderSub } from "../components/Headers/HeaderSub";

export const Landing = () => {
  return (
    <div className="gridLayout fixed inset-0 h-full grid-rows-lading_header">
      <HeaderSub />
      <HeadersLading />
      <div className="col-span-full">
        <div className="bg-landing bg-no-repeat bg-center bg-cover h-full relative">
          <div className="bg-black opacity-50 absolute h-full w-full z-1" />
          <div className="absolute z-10 h-full w-full">
            <div className="grid gridLayout h-full items-end">
              <TextInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TextInformation = () => {
  return (
    <div className="small:col-span-6 medium:col-span-7 col-span-4 text-white px-4 flex flex-col gap-y-8 pb-28">
      <div>
        <h1 className="text-title_movil small:text-title_table medium:text-title_desktop font-bold">
          VITRORENDER
        </h1>
        <div className="text-10px small:text-15px font-thin">
          <p className="">
            Descarga los productos y sus variaciones necesarias para tus
            proyectos. Recursos hechos por y para profesionales.
          </p>
        </div>
      </div>
      <div className="">
        <ButtonRedirect
          text={"Empezar a construir"}
          direction={`${Path.FORM}/${Path.LOGIN}`}
        />
      </div>
    </div>
  );
};
