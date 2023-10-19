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
        <Fcol {...customResponsive(30, 100)}>
          <Link href="/">
            <Logo />
          </Link>
        </Fcol>
        <Fcol {...customResponsive(15, 50)}>
          <NavLink href="/" label="INICIO" />
        </Fcol>
        <Fcol {...customResponsive(15, 50)}>
          <NavLink href="/servicios/" label="SERVICIOS" />
        </Fcol>
        <Fcol {...customResponsive(15, 50)}>
          <NavLink href="/contacto/" label="CONTACTO" />
        </Fcol>
        <Fcol {...customResponsive(20, 50)}>
          <NavLink href="/cronicas-de-paz/" label="CRÓNICAS DE PAZ" />
        </Fcol>
      </Frow>
    </header>
  );
});
