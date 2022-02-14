import React from "react";
import { ButtonRedirect } from "../components/Buttons/ButtonRedirect";
import { FormLogin } from "../components/Form/FormLogin";
import { Path } from "../utils/route";

export const Login = () => {
  return (
    <div className="grid-cols-xsmall small:grid-cols-small  grid">
      <div className="small:col-start-2 small:col-span-6 medium:col-start-3 medium:col-span-4 col-span-4 px-4">
        <div className="">
          <FormLogin />
          <div className="mt-12 flex justify-center items-center">
            <ButtonRedirect
              text={"Iniciar sesión"}
              direction={`${Path.LANDING}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
