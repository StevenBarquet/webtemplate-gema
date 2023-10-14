// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './ContactP.module.scss';
import { Frow, Fcol } from 'qwik-forge-grid';
import { ContactItem } from 'src/common/ContactItem/ContactItem';
import { customResponsive } from 'src/utils/functions/responsiveUtils';
import { Logo } from './Logo/Logo';

/**
 * ContactP Component:  Descripción del comportamiento...
 */
export const ContactP = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['ContactP']}>
      <Logo />
      <Frow hAlign="center">
        <Fcol {...customResponsive(50, 100)}>
          <ContactItem variant="Linkedin" />
        </Fcol>
        <Fcol {...customResponsive(50, 100)}>
          <ContactItem variant="Whats" />
        </Fcol>
        <Fcol {...customResponsive(50, 100)}>
          <ContactItem variant="youtube" />
        </Fcol>
        <Fcol {...customResponsive(50, 100)}>
          <ContactItem variant="mail" />
        </Fcol>
      </Frow>
      <br />
      <br />
    </div>
  );
});
