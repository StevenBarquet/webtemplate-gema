// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { Fcol } from 'qwik-forge-grid';
import { NavLink } from '../common/NavLink/NavLink';

/**
 * MobButtons Component:  Descripción del comportamiento...
 */
export const MobButtons = component$(() => {
  // -----------------------RENDER
  return (
    <>
      <Fcol span={100}>
        <NavLink href="/" label="INICIO" />
      </Fcol>
      <Fcol span={100}>
        <NavLink href="/servicios/" label="SERVICIOS" />
      </Fcol>
      <Fcol span={100}>
        <NavLink href="/contacto/" label="CONTACTO" />
      </Fcol>
      <Fcol span={100}>
        <NavLink href="/cronicas-de-paz/" label="CRÓNICAS DE PAZ" />
      </Fcol>
    </>
  );
});
