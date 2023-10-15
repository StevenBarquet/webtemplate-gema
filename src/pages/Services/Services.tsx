// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Services.module.scss';
import { stringToHtml } from 'src/utils/functions/qwikUtils';
// Texto de prueba
const originalText = `
<h1>Pruebita</h1>
Este es un texto de prueba. Aquí hay un <LinkCustom>link interno</LinkCustom> que te llevará a la página principal. 
También tenemos un <Anchor>link externo</Anchor> que te llevará a una página externa.
Además, algunas palabras están en <span>color diferente</span> y otras están en <b>negrita</b>.
`;

// Propiedades para las etiquetas Anchor
const anchorProps = [
  {
    href: 'https://ejemplo.com',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

// Rutas para las etiquetas LinkCustom
const hrefs = ['/ruta-interna'];

/**
 * Services Component:  Descripción del comportamiento...
 */
export const Services = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['Services']}>
      {/* <ul>
        <li>
          <Link href="/asesoria-empresarial">Asesoría Empresarial</Link>
        </li>
        <li>
          <Link href="/defensa-fiscal">Defensa Fiscal</Link>
        </li>
        <li>
          <Link href="/mediacion">Mediación</Link>
        </li>
        <li>
          <Link href="/capacitacion">Capacitación</Link>
        </li>
      </ul> */}
      {stringToHtml(originalText, { anchorProps, hrefs })}
    </div>
  );
});
