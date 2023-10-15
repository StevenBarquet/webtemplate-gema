// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Services.module.scss';
import { Link } from '@builder.io/qwik-city';

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
      <ul>
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
      </ul>
    </div>
  );
});
