// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Navbar.module.scss';
import { Fcol, Frow } from 'qwik-forge-grid';
import { Link } from '@builder.io/qwik-city';
import { customResponsive } from 'src/utils/functions/responsiveUtils';
import { Logo } from './Logo/Logo';
import { useFStore } from 'src/store/config/storeConfig';
import { BsList } from '@qwikest/icons/bootstrap';
import { useDrawer } from 'src/utils/app/useDrawer/useDrawer';
import { DeskButtons } from './DeskButtons/DeskButtons';
import { MobButtons } from './MobButtons/MobButtons';

/**
 * Navbar Component:  Descripción del comportamiento...
 */
export const Navbar = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const { state } = useFStore();
  const { handleOpen, Drawer } = useDrawer({
    theme: 'dark',
    defaultOpen: false,
    headerCloseModal: true,
    title: (
      <div class={style.Mobile}>
        <Logo />
      </div>
    ),
    content: (
      <div class={style.Mobile}>
        <Frow vAlign="middle" hAlign="center" vSpace={10}>
          <MobButtons />
        </Frow>
      </div>
    ),
  });
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <header class={style.Navbar}>
      <Frow vAlign="middle" hAlign="center">
        <Fcol {...customResponsive(30, 100)}>
          <Link href="/">
            <Logo />
          </Link>
        </Fcol>
        {state.appInfo.isMobile ? (
          <Fcol {...customResponsive(15, 50)}>
            <button class="hamburger" onClick$={handleOpen}>
              <BsList />
            </button>
          </Fcol>
        ) : (
          <DeskButtons />
        )}
      </Frow>
      <Drawer />
    </header>
  );
});
