// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

interface Props {
  href: string;
  label: string;
}

/**
 * NavLink Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const NavLink = component$<Props>(({ href, label }) => {
  // -----------------------CONSTS, HOOKS, STATES
  const location = useLocation();
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Link href={href}>
      <div class={'NavLink ' + (location.url.pathname === href ? 'active' : '')}>{label}</div>
    </Link>
  );
});
