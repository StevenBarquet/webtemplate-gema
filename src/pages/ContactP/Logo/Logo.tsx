// ---Dependencies
import { component$ } from '@builder.io/qwik';
import LogoImg from '/public/images/logo.png?jsx';
import { locales } from 'src/appConfig/locales';

/**
 * Logo Component:  Descripción del comportamiento...
 */
export const Logo = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class="Logo">
      <LogoImg />
      <section>
        {locales.comps.navbar.logo1}
        <span>{locales.comps.navbar.logo2}</span>
      </section>
      <p>{locales.comps.navbar.logoSub}</p>
    </div>
  );
});
