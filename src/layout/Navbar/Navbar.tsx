// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Navbar.module.scss';
import { Fcol, Frow } from 'qwik-forge-grid';
import { Link } from '@builder.io/qwik-city';
import { customResponsive } from 'src/utils/functions/responsiveUtils';
import { Logo } from './Logo/Logo';
import { NavLink } from './NavLink/NavLink';

/**
 * Navbar Component:  Descripción del comportamiento...
 */
export const Navbar = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <header class={style.Navbar}>
      <Frow vAlign="middle" hAlign="center">
        <Fcol {...customResponsive(40, 100)}>
          <Link href="/">
            <Logo />
          </Link>
        </Fcol>
        <Fcol {...customResponsive(15, 33)}>
          <NavLink href="/" label="INICIO" />
        </Fcol>
        <Fcol {...customResponsive(15, 33)}>
          <NavLink href="/servicios/" label="SERVICIOS" />
        </Fcol>
        <Fcol {...customResponsive(15, 100)}>
          <NavLink href="/contacto/" label="CONTACTO" />
        </Fcol>
      </Frow>
    </header>
  );
});
