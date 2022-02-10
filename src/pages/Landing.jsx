import React from "react";
import { Link } from "react-router-dom";
import logovitromex from "../assets/logovitromex.svg";
import { Path } from "../utils/route";

export const Landing = () => {
  return (
    <div className="bg-neutral grid-cols-movil tablet:grid-cols-tableta desktop:grid-cols-desktop relative grid h-screen w-screen grid-rows-2 px-4">
      <div className="tablet:col-span-8 desktop:col-span-12 col-span-4">
        <div className="flex items-center justify-center pt-14">
          <img src={logovitromex} alt="logo" />
        </div>
      </div>
      <div className="tablet:col-span-6 desktop:col-span-7 col-span-4 row-start-2 text-white">
        <div>
          <h1 className="text-title_movil tablet:text-title_table desktop:text-title_desktop">
            Título
          </h1>
          <h2 className="text-subtitle_movil tablet:text-subtitle_table desktop:text-subtitle_desktop">
            subtitulo
          </h2>
          <div className="mt-4">
            <p className="text-paragraph_movil tablet:text-paragraph_table desktop:text-paragraph_desktop">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, veritatis. Impedit cum natus pariatur mollitia
              praesentium, inventore tenetur qui maxime. Commodi nostrum iste
              eligendi autem recusandae id, fugit rem minus!
            </p>
          </div>
        </div>
        <div className="mt-12 flex h-12 w-56 items-center justify-center bg-white text-black">
          <Link to={Path.LOGIN}>Iniciar sesión</Link>
        </div>
      </div>
    </div>
  );
};
