// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './BlogHeader.module.scss';

interface Props {
  title: string;
}

/**
 * BlogHeader Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const BlogHeader = component$<Props>(({ title }) => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['BlogHeader']}>
      <h1>{title}</h1>
      <hr />
    </div>
  );
});
