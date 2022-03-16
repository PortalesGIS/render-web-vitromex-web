import React from "react";
import Reaptcha from "reaptcha";

export const RecapthGoogle = ({ setrepacthValidation }) => {
  // console.log(setrepacthValidation);
  const recaptchaResponse = () => {
    console.log("bien");
  };
  return (
    <Reaptcha
      size="normal"
      sitekey="6LdtFc0eAAAAADRV8zedJgP6tkvcWJCMFupLVoWW"
      onVerify={recaptchaResponse}
    />
  );
};
