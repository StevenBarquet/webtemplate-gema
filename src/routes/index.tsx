import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Home } from 'src/pages/Home/Home';

export default component$(() => {
  return (
    <>
      <Home />
    </>
  );
});

export const head: DocumentHead = {
  title: 'SEMBLANZA | GEMAAYECAC',
  meta: [
    {
      name: 'description',
      content:
        'Abogada por la UNAM. Realizó estudios de Maestría en Derechos Humanos en el Instituto Tecnológico Autónomo de México (ITAM), Doctorado en Mediación y Negociación en el Instituto de Mediación de México. Actualmente cursa el master en Mediación, Negociación y Resolución...',
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
