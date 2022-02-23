import React from "react";
import { InputError } from "../Form/Errors/InputError";

export const InputForm = ({
  isEmail = false,
  emailValidation,
  errorInput,
  nameInput,
  valueInput,
  handleInputChange,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Correo electronico"
        name={nameInput}
        className={`w-full appearance-none border-b-2 ${
          !valueInput && errorInput ? "border-Feedback_Warning" : "border-white"
        } bg-transparent focus:outline-none`}
        value={valueInput}
        onChange={handleInputChange}
      />
      {isEmail && !emailValidation && (
        <InputError text={"No es un correo electronico valido"} />
      )}
      {isEmail && errorInput && <InputError text={"No existe correo"} />}
      {!valueInput && errorInput && <InputError text={"Completa este campo"} />}
    </div>
  );
};
