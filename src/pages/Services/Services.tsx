// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Services.module.scss';
import { Mcol, Mrow } from 'qwik-forge-grid';
import { customResponsive } from 'src/utils/functions/responsiveUtils';
import { Cards } from './Cards/Cards';

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
      <Mrow>
        <Mcol {...customResponsive(50, 100)}>
          <Cards
            img="/images/services-icons/asesoria-empresarial.webp"
            label="Asesoría Empresarial"
            url="/asesoria-empresarial"
          />
        </Mcol>
        <Mcol {...customResponsive(50, 100)}>
          <Cards
            img="/images/services-icons/defensa-fiscal.webp"
            label="Defensa Fiscal"
            url="/defensa-fiscal"
          />
        </Mcol>
        <Mcol {...customResponsive(50, 100)}>
          <Cards img="/images/services-icons/mediacion.webp" label="Mediación" url="/mediacion" />
        </Mcol>
        <Mcol {...customResponsive(50, 100)}>
          <Cards
            img="/images/services-icons/capacitacion.webp"
            label="Capacitación"
            url="/capacitacion"
          />
        </Mcol>
      </Mrow>
    </div>
  );
});
