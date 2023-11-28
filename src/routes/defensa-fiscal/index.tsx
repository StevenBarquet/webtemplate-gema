import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { DefensaFiscal } from 'src/pages/DefensaFiscal/DefensaFiscal';

export default component$(() => {
  return (
    <>
      <DefensaFiscal />
    </>
  );
});

export const head: DocumentHead = {
  title: 'DEFENSA FISCAL | GEMAAYECAC',
  meta: [
    {
      name: 'description',
      content:
        'La recaudación es fundamental para las finanzas de nuestro país. No obstante, las autoridades fiscales deben realizar sus actos con apego a la ley y estricto respeto a los derechos fundamentales de los contribuyentes.  Desafortunadamente, frecuentemente las autoridades fiscales pueden exceder sus facultades o vulnerar derechos de los contribuyentes.',
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
