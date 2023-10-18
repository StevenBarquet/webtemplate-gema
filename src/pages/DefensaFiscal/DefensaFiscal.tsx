// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './DefensaFiscal.module.scss';
import { locales } from 'src/appConfig/locales';
import { stringToBlog } from 'src/utils/functions/qwikUtils';
import { BlogHeader } from 'src/common/BlogHeader/BlogHeader';
import { BlogFooter } from 'src/common/BlogFooter/BlogFooter';

/**
 * DefensaFiscal Component:  Descripción del comportamiento...
 */
export const DefensaFiscal = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['DefensaFiscal']}>
      <BlogHeader title={locales.pages.DefensaFiscal.h1} />
      <section class="blogCont">
        {stringToBlog(locales.pages.DefensaFiscal.text)}
        <br />
        <div class="postImg">
          <img src="/images/servicios/DefensaFiscal.webp" />
        </div>
      </section>
      <BlogFooter backUrl="/servicios" />
    </div>
  );
});
