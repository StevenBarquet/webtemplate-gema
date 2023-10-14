import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Services } from 'src/pages/Services/Services';

export default component$(() => {
  return (
    <>
      <Services />
    </>
  );
});

export const head: DocumentHead = {
  title: 'SERVICIOS | GEMAAYECAC',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
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
