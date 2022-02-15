import { useState } from "react";

export const useShowMenu = () => {
  const [visibilityMenu, setVisibilityMenu] = useState(false);

  const showMenu = () => {
    setVisibilityMenu(!visibilityMenu);
  };
  return [visibilityMenu, showMenu];
};
