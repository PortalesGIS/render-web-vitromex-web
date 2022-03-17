# Render Web 
> Version web de render vitromex

## Develop
Para modo desarrollador primero necesitas instalar las dependecias

```bash
npm i
```

Levantar servidor
```bash
npm run start
```

## Build
Para generar el build con 


```bash
npm run build
```

pudes probarlo con 


```bash
npm run serve
```

## Deploy
Para el despligue


## Para agregar una nueva red social
Primero dirigite a `src/asstes/redes`, en esta carpeta agregar la imagen que quieras.

![alt Menu](https://gitlab.com/inmersys/render-web-vitromex-web/-/raw/develop/src/assets/readme/redes.png)

Ahora ve al archivo imagesLinsk.js `src/types/imagesLinks.js`

![alt types](https://gitlab.com/inmersys/render-web-vitromex-web/-/raw/develop/src/assets/readme/types.png)

Una vez ya en el archivo, primero tienes que importar la nueva imagen

```js
// De esta manera
import nueva_red from "../assets/redes/nueva_red.svg"; // importante poner la extension de la imagen [svg,png,jpg]
```

una vez que se importa, agregar a la lista el nuevo link con su imagen

```js
// De esta manera
{
    img: nueva_imagen,
    url: 'http://link de red social'
}
```

![alt nueva](https://gitlab.com/inmersys/render-web-vitromex-web/-/raw/develop/src/assets/readme/nuevered.png)

## Recaptha
En caso de fallas ir a `src/components/Form/FormRegister.jsx`

una vez ahi ir a 

```js
<ButtonRedirect
    text={"Registrarme"}
    direction={`${Path.PRODUCT}/${Path.SERIES}`}
    action={typesAuhtButton.register}
    data={formValues}
    validations={[equalPassword, validationsCompleteInput, repacthValidation]}
    validation_extra={[check]}
/>
```

y quitar `repacthValidation`, de validations, eso dejara que se registren sin pasar por el recapth

```js
// de esta manera
<ButtonRedirect
    text={"Registrarme"}
    direction={`${Path.PRODUCT}/${Path.SERIES}`}
    action={typesAuhtButton.register}
    data={formValues}
    validations={[equalPassword, validationsCompleteInput]}
    validation_extra={[check]}
/>
```

## Links de apoyo
Documentación
[Recaptch documentacioon](https://developers.google.com/recaptcha/intro)

Npm recapcha
[Recaptch npm](https://www.npmjs.com/package/reaptcha)

Para ver informes del recapth
[Recapch Informe](https://www.google.com/recaptcha/admin/site/516756845)


## Creado por

[Luis Ocampo](https://github.com/Luis-Blash)


