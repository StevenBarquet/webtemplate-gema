import { Slot, component$ } from '@builder.io/qwik';
import { useAppListener } from './useAppListener/useAppListener';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';

export const LayoutProvider = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  useAppListener();
  // -----------------------RENDER
  return (
    <>
      <div id="drawer" />
      <div id="modal" />
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
