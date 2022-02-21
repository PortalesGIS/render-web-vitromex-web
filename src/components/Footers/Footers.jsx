import React from "react";
import footer from "../../assets/footervitromex.svg";
import face from '../../assets/redes/face.svg'
import insta from '../../assets/redes/insta.svg'
import linkedin from '../../assets/redes/linkedin.svg'
import pinteres from '../../assets/redes/pinteres.svg'
import telefono from '../../assets/redes/telefono.svg'
import twitter from '../../assets/redes/twitter.svg'
import whats from '../../assets/redes/whats.svg'

export const Footers = () => {
  return (
    <div className="bg-black h-full text-white px-4 py-2">
      <div className="flex justify-between flex-col medium:flex-row gap-y-4">
        <div className="small:basis-1/2">
          <div>
            <img src={footer} alt="footer" />
          </div>
          <div>
            <p>@2021 Vitromex. Todos los derechos reservados</p>
          </div>
        </div>
        <div className="small:basis-1/2">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <a href="https://www.vitromex.com.mx/blog">Guía de instalación</a>
              <a href="https://www.vitromex.com.mx/blog">Blog</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="https://www.vitromex.com.mx/blog">Tiendas</a>
              <a href="https://www.vitromex.com.mx/blog">Catálogo</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="https://www.vitromex.com.mx/blog">Nosotros</a>
              <a href="https://www.vitromex.com.mx/blog">Contacto</a>
            </div>
          </div>
          {/* aviso */}
          <div className="mt-4">
            <a href="https://www.vitromex.com.mx/blog">Aviso de privasidad</a>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center items-center flex-col gap-y-2">
        <div className="flex gap-2">
          <div className="h-5 w-5 flex justify-center items-center">
            <img src={face} alt="face" />
          </div>
          <div className="h-5 w-5 flex justify-center items-center">
            <img src={insta} alt="insta" />
          </div>
          <div className="h-5 w-5 flex justify-center items-center">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="h-5 w-5 flex justify-center items-center">
            <img src={pinteres} alt="pinteres" />
          </div>
          <div className="h-5 w-5 flex justify-center items-center">
            <img src={telefono} alt="telefono" />
          </div>
          <div className="h-5 w-5 flex justify-center items-center">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="h-5 w-5 flex justify-center items-center">
            <img src={whats} alt="whats" />
          </div>
        </div>
        <div>
          Eje 140 Número 420 Esquina Morelos CP. 78422 La Pila, San Luis Potosí
        </div>
      </div>
    </div>
  );
};
