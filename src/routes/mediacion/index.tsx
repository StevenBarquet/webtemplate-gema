import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Mediacion } from 'src/pages/Mediacion/Mediacion';

export default component$(() => {
  return (
    <>
      <Mediacion />
    </>
  );
});

export const head: DocumentHead = {
  title: 'MEDIACIÓN | GEMAAYECAC',
  meta: [
    {
      name: 'description',
      content:
        'La Mediación es un procedimiento voluntario mediante el cual las personas, con el apoyo de un Mediador que será neutral e imparcial, pueden comunicarse y negociar, para encontrar de manera amigable y satisfactoria la solución legal a su problema de carácter Civil-Mercantil o Familiar. En la Ciudad de México este servicio puede obtenerse de Mediadores Privados que se encuentren certificados y autorizados por el Tribunal Superior de Justicia de la Ciudad de México.',
    },
  ],
  links: [
    // Fuente Inter
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
      rel: 'stylesheet',
    },
  ],
};
