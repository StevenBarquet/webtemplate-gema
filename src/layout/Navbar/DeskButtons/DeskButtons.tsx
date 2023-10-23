// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { Fcol } from 'qwik-forge-grid';
import { customResponsive } from 'src/utils/functions/responsiveUtils';
import { NavLink } from '../common/NavLink/NavLink';

/**
 * DeskButtons Component:  Descripción del comportamiento...
 */
export const DeskButtons = component$(() => {
  // -----------------------RENDER
  return (
    <>
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
    </>
  );
});
