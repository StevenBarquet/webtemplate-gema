// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './BlogFooter.module.scss';
import { Link } from '@builder.io/qwik-city';
import { Fcol, Frow } from 'qwik-forge-grid';

/**
 * BlogFooter Component:  Descripción del comportamiento...
 */
export const BlogFooter = component$<{ backUrl: string }>(({ backUrl }) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['BlogFooter']}>
      <Frow>
        <Fcol span={50}>
          <Link href="/">
            <div class="linkButton">Inicio</div>
          </Link>
        </Fcol>
        <Fcol span={50}>
          <Link href={backUrl}>
            <div class="linkButton">Atrás</div>
          </Link>
        </Fcol>
        <Fcol span={100}>
          <div class="know">
            <Link href="/cronicas-de-paz">Saber más...</Link>
          </div>
        </Fcol>
      </Frow>
    </div>
  );
});
