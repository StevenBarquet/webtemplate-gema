// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from 'src/common/BlogStyles.module.scss';
import { locales } from 'src/appConfig/locales';
import { BlogFooter } from 'src/common/BlogFooter/BlogFooter';
import { BlogHeader } from 'src/common/BlogHeader/BlogHeader';
import { stringToBlog } from 'src/utils/functions/qwikUtils';
import Img from '/public/images/servicios/Capacitacion.webp?jsx';

/**
 * Capacitacion Component:  Descripción del comportamiento...
 */
export const Capacitacion = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['BlogStyles']}>
      <BlogHeader title={locales.pages.Capacitacion.h1} />
      <section class="blogCont">
        {stringToBlog(locales.pages.Capacitacion.text)}
        <br />
        <div class="postImg">
          <Img />
        </div>
      </section>
      <BlogFooter backUrl="/servicios" />
    </div>
  );
});
