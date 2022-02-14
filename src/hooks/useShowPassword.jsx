import { useState } from "react";

export const useShowPassword = () => {
  const [hasVisibilityPassword, sethasVisibilityPassword] = useState(true);
  const showPassword = () => {
    sethasVisibilityPassword(!hasVisibilityPassword);
  };

  return [hasVisibilityPassword, showPassword];
};
