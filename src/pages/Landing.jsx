import React from "react";
import { ButtonRedirect } from "../components/Buttons/ButtonRedirect";
import { Path } from "../utils/route";
import { HeadersLading } from "../components/Headers/HeadersLading";
import { HeaderSub } from "../components/Headers/HeaderSub";
import logovitrolab from "../assets/VitroLab.svg";

export const Landing = () => {
  return (
    <div className="gridLayout fixed inset-0 h-full grid-rows-lading_header">
      <HeaderSub />
      <HeadersLading />
      <div className="col-span-full">
        <div className="bg-landing bg-no-repeat bg-center bg-cover h-full relative animate__animated animate__fadeIn">
          <div className="bg-black opacity-50 absolute h-full w-full z-1" />
          <div className="absolute z-10 h-full w-full">
            <div className="grid gridLayout h-full items-end text-white px-4">
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
    <div className="small:col-span-6 medium:col-span-6 col-span-4 text-white flex flex-col gap-y-14 pb-32">
      <div>
        <div className="w-[78%] mb-6 flex animate__animated animate__fadeIn">
          <img src={logovitrolab} alt="vitrolab"/>
        </div>
        <div className="small:text-[20px] xsmall:text-[18px] leading-6">
          <p className="font-extralight">
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
