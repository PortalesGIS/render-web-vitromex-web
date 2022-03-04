import React from "react";
import { LinkExterno } from "../shared/LinkExterno";

export const HeaderSub = () => {
  return (
    <div className="bg-neutral h-full flex justify-end items-center col-span-full pr-3">
      <div className="flex justify-between gap-x-10 text-white text-12px ">
        <div>
          <LinkExterno url={'https://www.vitromex.com.mx/contacto'} texto={'Contacto'} />
        </div>
        <div>
          <LinkExterno url={'https://www.vitromex.com.mx/aboutus'} texto={'Nosotros'} />
        </div>
      </div>
    </div>
  );
};
