// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from 'src/common/BlogStyles.module.scss';
import { locales } from 'src/appConfig/locales';
import { stringToBlog } from 'src/utils/functions/qwikUtils';
import { BlogHeader } from 'src/common/BlogHeader/BlogHeader';
import { BlogFooter } from 'src/common/BlogFooter/BlogFooter';
import Img from '/public/images/servicios/DefensaFiscal.webp?jsx';

/**
 * DefensaFiscal Component:  Descripción del comportamiento...
 */
export const DefensaFiscal = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['BlogStyles']}>
      <BlogHeader title={locales.pages.DefensaFiscal.h1} />
      <hr />
      <section class="blogCont">
        {stringToBlog(locales.pages.DefensaFiscal.text)}
        <br />
        <div class="postImg">
          <Img />
        </div>
      </section>
      <BlogFooter backUrl="/servicios" />
    </div>
  );
});
