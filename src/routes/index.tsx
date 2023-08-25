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

export const head: DocumentHead = (/**{ url } */) => ({
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
  // links: [
  //   {
  //     rel: 'canonical',
  //     href: url.pathname,
  //   },
  // ],
});
