import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ContactP } from 'src/pages/ContactP/ContactP';

export default component$(() => {
  return (
    <>
      <ContactP />
    </>
  );
});

export const head: DocumentHead = {
  title: 'CONTACTO | GEMAAYECAC',
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
