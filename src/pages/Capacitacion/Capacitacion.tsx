// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Capacitacion.module.scss';
import { locales } from 'src/appConfig/locales';
import { BlogFooter } from 'src/common/BlogFooter/BlogFooter';
import { BlogHeader } from 'src/common/BlogHeader/BlogHeader';
import { stringToBlog } from 'src/utils/functions/qwikUtils';

/**
 * Capacitacion Component:  Descripción del comportamiento...
 */
export const Capacitacion = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['Capacitacion']}>
      <BlogHeader title={locales.pages.Capacitacion.h1} />
      <section class="blogCont">
        {stringToBlog(locales.pages.Capacitacion.text)}
        <br />
        <div class="postImg">
          <img src="/images/servicios/Capacitacion.webp" />
        </div>
      </section>
      <BlogFooter backUrl="/servicios" />
    </div>
  );
});
