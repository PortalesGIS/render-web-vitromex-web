import React from "react";
import { FormLogin } from "../components/Form/FormLogin";

export const Login = () => {
  return (
    <div className="min-h-full gridLayout">
      <div className="bg-login bg-cover bg-no-repeat bg-center hidden medium:block medium:col-span-5" />
      <div className="medium:col-span-7 xsmall:col-span-full flex justify-center pt-20 bg-neutral80 ">
        <div className="flex flex-col gap-y-14">
          <div className="uppercase text-center font-bold text-white text-[35px]">
            <h1>Vitrorender</h1>
          </div>
          <FormLogin />
        </div>
      </div>
    </div>
  );
};
