import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Blog2 } from 'src/pages/Blog/Blog2/Blog2';

export default component$(() => {
  return (
    <>
      <Blog2 />
    </>
  );
});

export const head: DocumentHead = {
  title:
    'MECANISMOS ALTERNATIVOS DE SOLUCION DE CONTROVERSIAS EN MATERIA ADMINISTRATIVA Y FISCAL | GEMAAYECAC',
  meta: [
    {
      name: 'description',
      content:
        'Originalmente, nuestra Constitución de 1917 estableció en el artículo 124, la cláusula federal. Así configuró la competencia legislativa para las entidades federativas como regla general, mientras que reservó a la federación un numerus clausus de materias.  Bajo este entendido, consideramos al sistema jurídico integrado por una norma suprema, leyes federales, leyes locales y, por disposición del artículo 115,  reglamentos municipales.',
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
