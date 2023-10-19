// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from 'src/common/BlogStyles.module.scss';
import { locales } from 'src/appConfig/locales';
import { BlogFooter } from 'src/common/BlogFooter/BlogFooter';
import { BlogHeader } from 'src/common/BlogHeader/BlogHeader';
import { stringToBlog } from 'src/utils/functions/qwikUtils';
import Img from '/public/images/servicios/Mediacion.webp?jsx';

/**
 * Mediacion Component:  Descripción del comportamiento...
 */
export const Mediacion = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['BlogStyles']}>
      <BlogHeader title={locales.pages.Mediacion.h1} />
      <hr />
      <section class="blogCont">
        {stringToBlog(locales.pages.Mediacion.text, locales.pages.Mediacion.textProps)}
        <br />
        <div class="postImg">
          <Img />
        </div>
      </section>

      <br />

      <BlogFooter backUrl="/servicios" />
    </div>
  );
});
