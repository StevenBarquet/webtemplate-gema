// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Home.module.scss';
import { locales } from 'src/appConfig/locales';
import { Fcol, Frow } from 'qwik-forge-grid';
import { basicResponsive } from 'src/utils/functions/responsiveUtils';
import ProgileImg from '/public/images/profile.webp?jsx';

/**
 * Home Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const Home = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES

  // -----------------------RENDER
  return (
    <div class={style.Home}>
      <Frow vAlign="middle" hAlign="center">
        <Fcol {...basicResponsive(25)}>
          <h1>{locales.pages.home.h1}</h1>
          <ProgileImg />
        </Fcol>
        <Fcol {...basicResponsive(75)}>
          <section class="post">
            <h2>{locales.pages.home.h2}</h2>
            <p>{locales.pages.home.P}</p>
            <br />
            <h3>{locales.pages.home.CERTIFICACIONES.title}</h3>
            <ul>
              {locales.pages.home.CERTIFICACIONES.list.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </Fcol>
      </Frow>
    </div>
  );
});
