import React from "react";
import { Outlet } from "react-router-dom";
import { HeadersLading } from "../components/Headers/HeadersLading";
import { HeaderSub } from "../components/Headers/HeaderSub";

export const LoginLayout = () => {
  return (
    <div className="gridLayout min-h-screen grid-rows-layout_login">
      <HeaderSub />
      <HeadersLading />
      <div className="col-span-full">
        <Outlet />
      </div>
    </div>
  );
};
// {/* <div className="medium:flex medium:col-span-5 hidden h-full items-center justify-center bg-slate-50">
//   <div className="h-20 w-20 rounded-full bg-red-100"></div>
// </div> */}

// <div className="small:col-span-8 medium:col-span-7 col-span-4 ">
//         {/* image */}
//         <div className="">
//           <div className="flex items-center justify-center pt-14">
//             <img src={logovitromex} alt="logo" />
//           </div>
//           {/* router */}
//           <div className="mt-90px">
//             <Outlet />
//           </div>
//         </div>
//       </div>
