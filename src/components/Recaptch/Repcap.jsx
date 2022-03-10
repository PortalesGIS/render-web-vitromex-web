import React from "react";
import Reaptcha from "reaptcha";

export const Repcap = ({setrecaptchaState}) => {
  
  var verifyCallback = function (response) {
    setrecaptchaState(true)
    console.log(response);
  };
  return (
    <>
      <Reaptcha
        sitekey="6LdtFc0eAAAAADRV8zedJgP6tkvcWJCMFupLVoWW"
        onVerify={verifyCallback}
      />
    </>
  );
};
