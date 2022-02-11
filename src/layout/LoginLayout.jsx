import React from "react";
import { Outlet } from "react-router-dom";
import logovitromex from "../assets/logovitromex.svg";

export const LoginLayout = () => {
  return (
    <div>
      <div className="bg-neutral grid-cols-movil tablet:grid-cols-tableta desktop:grid-cols-desktop relative grid h-screen w-screen">
        <div className="desktop:flex desktop:col-span-5 hidden items-center justify-center bg-slate-100">
          <div className="h-20 w-20 rounded-full bg-red-100"></div>
        </div>
        <div className="tablet:col-span-8 desktop:col-span-7 col-span-4 ">
          {/* image */}
          <div className="">
            <div className="flex items-center justify-center pt-14">
              <img src={logovitromex} alt="logo" />
            </div>
            {/* router */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
