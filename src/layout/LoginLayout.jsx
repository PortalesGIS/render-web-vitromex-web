import React from "react";
import { Outlet } from "react-router-dom";
import { HeadersLading } from "../components/Headers/HeadersLading";
import { HeaderSub } from "../components/Headers/HeaderSub";

export const LoginLayout = () => {
  return (
    <div className="gridLayout h-screen grid-rows-layout_login">
      <HeaderSub />
      <HeadersLading />
      <div className="col-span-full overflow-auto h-full">
        <Outlet />
      </div>
    </div>
  );
};
