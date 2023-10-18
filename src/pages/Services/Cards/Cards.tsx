// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface Props {
  label: string;
  img: string;
  url: string;
}

/**
 * Cards Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Cards = component$<Props>(({ img, label, url }) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Link href={url}>
      <img src={img} />
      <div class="Cards">{label}</div>
    </Link>
  );
});
