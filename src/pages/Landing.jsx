import React from "react";
import logovitromex from "../assets/logovitromex.svg";
import { ButtonRedirect } from "../components/Buttons/ButtonRedirect";
import { Path } from "../utils/route";
import { HeadersLading } from "../components/Headers/HeadersLading";

export const Landing = () => {
  return (
    <div className="bg-neutral gridLayout fixed inset-0 h-full grid-rows-lading_header">
      <HeadersLading />
      <TextInformation />
    </div>
  );
};

const TextInformation = () => {
  return (
    <div className="row-start-3 small:col-span-6 medium:col-span-7 col-span-4 text-white px-4 flex flex-col gap-y-8">
      <div>
        <h1 className="text-title_movil small:text-title_table medium:text-title_desktop">
          Título
        </h1>
        <h2 className="text-subtitle_movil small:text-subtitle_table medium:text-subtitle_desktop">
          subtitulo
        </h2>
        <div className="mt-4">
          <p className="text-paragraph_movil small:text-paragraph_table medium:text-paragraph_desktop">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            veritatis. Impedit cum natus pariatur mollitia praesentium,
            inventore tenetur qui maxime. Commodi nostrum iste eligendi autem
            recusandae id, fugit rem minus!
          </p>
        </div>
      </div>
      <div>
        <ButtonRedirect
          text={"Iniciar sección"}
          direction={`${Path.FORM}/${Path.LOGIN}`}
        />
      </div>
    </div>
  );
};