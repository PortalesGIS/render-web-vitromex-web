import React from "react";
import footer from "../../assets/footervitromex.svg";
import face from "../../assets/redes/face.svg";
import insta from "../../assets/redes/insta.svg";
import linkedin from "../../assets/redes/linkedin.svg";
import pinteres from "../../assets/redes/pinteres.svg";
import telefono from "../../assets/redes/telefono.svg";
import twitter from "../../assets/redes/twitter.svg";
import whats from "../../assets/redes/whats.svg";
import { ImagesLinks } from "../shared/ImagesLinks";
import { LinkExterno } from "../shared/LinkExterno";

export const Footers = () => {
  return (
    <>
      <MediumFooters />
      <ResponsiveFooters />
    </>
  );
};

const ResponsiveFooters = () => {
  return (
    <div className="bg-black px-4 py-2 text-10px text-neutral00 medium:hidden flex flex-col gap-y-4">
      <div className="flex xsmall:flex-col small:flex-row xsmall:gap-y-4 small:gap-0">
        <div className="w-[50%] ">
          <img src={footer} alt="footer" />
        </div>
        <div className="small:hidden">
        <p>@2021 Vitromex. Todos los derechos reservados</p>
        </div>
        <div className="flex justify-between items-center  small:w-[50%]">
          <div className="flex flex-col gap-2">
            <LinkExterno
              url={"https://www.vitromex.com.mx/blog/guia-de-instalacion"}
              texto={"Guía de instalación"}
            />
            <LinkExterno
              url={"https://www.vitromex.com.mx/blog"}
              texto={"Blog"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <LinkExterno
              url={"https://www.vitromex.com.mx/cercadeti"}
              texto={"Tiendas"}
            />
            <LinkExterno
              url={"https://www.vitromex.com.mx/catalogo"}
              texto={"Catálogo"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <LinkExterno
              url={"https://www.vitromex.com.mx/aboutus"}
              texto={"Nosotros"}
            />
            <LinkExterno
              url={"https://www.vitromex.com.mx/contacto"}
              texto={"Contacto"}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%] xsmall:hidden small:block">
          <p>@2021 Vitromex. Todos los derechos reservados</p>
        </div>
        <div className="w-[50%]">
        <LinkExterno
          url={"https://www.vitromex.com.mx/assets/pdf/aviso-de-privacidad.pdf"}
          texto={"Aviso de privacidad"}
        />

        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-y-4">
        <div className="flex gap-2">
          <ImagesLinks
            img={whats}
            url={
              "https://api.whatsapp.com/send?phone=+525548995130&text=%C2%A1Hola!%20Tengo%20una%20pregunta%20acerca%20de%20los%20productos%20y%20servicios%20Vitromex,%20%C2%BFme%20podr%C3%ADan%20ayudar?"
            }
          />
          <ImagesLinks img={face} url={"https://www.facebook.com/Vitromex/"} />
          <ImagesLinks
            img={twitter}
            url={"https://twitter.com/vitromex_pisos"}
          />
          <ImagesLinks
            img={pinteres}
            url={"https://www.pinterest.com.mx/vitromex/"}
          />
          <ImagesLinks
            img={insta}
            url={"https://www.instagram.com/vitromex/"}
          />
          <ImagesLinks
            img={linkedin}
            url={"https://mx.linkedin.com/company/vitromex-oficial"}
          />
          <ImagesLinks img={telefono} url={"tel:8444115000"} />
        </div>
        <div>
          Eje 140 Número 420 Esquina Morelos CP. 78422 La Pila, San Luis Potosí
        </div>
      </div>
    </div>
  );
};

const MediumFooters = () => {
  return (
    <div className="bg-black px-12 py-4 text-10px medium:block hidden text-neutral20">
      <div className="w-full h-full flex gap-x-36">
        <div className="w-[75%]">
          <div className="flex">
            <div className="w-[40%]">
              <img src={footer} alt="footer" />
            </div>
            <div className="flex w-[60%] justify-between">
              <div className="flex flex-col gap-2">
                <LinkExterno
                  url={"https://www.vitromex.com.mx/blog/guia-de-instalacion"}
                  texto={"Guía de instalación"}
                />
                <LinkExterno
                  url={"https://www.vitromex.com.mx/blog"}
                  texto={"Blog"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <LinkExterno
                  url={"https://www.vitromex.com.mx/cercadeti"}
                  texto={"Tiendas"}
                />
                <LinkExterno
                  url={"https://www.vitromex.com.mx/catalogo"}
                  texto={"Catálogo"}
                />
              </div>
              <div className="flex flex-col gap-2">
                <LinkExterno
                  url={"https://www.vitromex.com.mx/aboutus"}
                  texto={"Nosotros"}
                />
                <LinkExterno
                  url={"https://www.vitromex.com.mx/contacto"}
                  texto={"Contacto"}
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[40%]">
              <p>@2021 Vitromex. Todos los derechos reservados</p>
            </div>
            <div className="flex w-[60%]">
              <LinkExterno
                url={
                  "https://www.vitromex.com.mx/assets/pdf/aviso-de-privacidad.pdf"
                }
                texto={"Aviso de privacidad"}
              />
            </div>
          </div>
        </div>
        <div className="w-[25%] flex flex-col items-end justify-between">
          <div className="flex gap-2">
            <ImagesLinks
              img={whats}
              url={
                "https://api.whatsapp.com/send?phone=+525548995130&text=%C2%A1Hola!%20Tengo%20una%20pregunta%20acerca%20de%20los%20productos%20y%20servicios%20Vitromex,%20%C2%BFme%20podr%C3%ADan%20ayudar?"
              }
            />
            <ImagesLinks
              img={face}
              url={"https://www.facebook.com/Vitromex/"}
            />
            <ImagesLinks
              img={twitter}
              url={"https://twitter.com/vitromex_pisos"}
            />
            <ImagesLinks
              img={pinteres}
              url={"https://www.pinterest.com.mx/vitromex/"}
            />
            <ImagesLinks
              img={insta}
              url={"https://www.instagram.com/vitromex/"}
            />
            <ImagesLinks
              img={linkedin}
              url={"https://mx.linkedin.com/company/vitromex-oficial"}
            />
            <ImagesLinks img={telefono} url={"tel:8444115000"} />
          </div>
          <div>
            Eje 140 Número 420 Esquina Morelos CP. 78422 La Pila, San Luis
            Potosí
          </div>
        </div>
      </div>
    </div>
  );
};
