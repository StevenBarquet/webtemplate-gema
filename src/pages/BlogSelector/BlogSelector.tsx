// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './BlogSelector.module.scss';

/**
 * BlogSelector Component:  Descripción del comportamiento...
 */
export const BlogSelector = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['BlogSelector']}>
      <h1>Crónicas de paz</h1>
      <p>¡Descubre lo que está en tendencia con nuestros artículos más populares! 🌟</p>
      <ul>
        <li>
          <a href="/cronicas-de-paz/mecanismos-alternativos-solucion-conflictos-mexico">
            Mecanismos Alternativos de Solución de Conflictos en Mexico.
          </a>
        </li>
        <li>
          <a href="/cronicas-de-paz/mecanismos-alternativos-de-solucion-de-controversias-en-materia-administrativa-y-fiscal">
            Mecanismos Alternativos de Solución de Controversias en Materia Administrativa y Fiscal
          </a>
        </li>
      </ul>
    </div>
  );
});
