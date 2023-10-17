// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './AsesorAEmpresarial.module.scss';
import { BlogHeader } from 'src/common/BlogHeader/BlogHeader';
import { BlogFooter } from 'src/common/BlogFooter/BlogFooter';
import { stringToBlog } from 'src/utils/functions/qwikUtils';
import { locales } from 'src/appConfig/locales';

/**
 * AsesorAEmpresarial Component:  Descripción del comportamiento...
 */
export const AsesorAEmpresarial = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <article>
      <div class={style['AsesorAEmpresarial']}>
        <BlogHeader title="Asesoría Empresarial" />
        <section class="blogCont">
          {stringToBlog(locales.pages.asesoriaEmpresarial.text)}
          <br />
          <div class="postImg">
            <img src="/images/servicios/asesoria-empresarial.webp" />
          </div>
        </section>
        <BlogFooter backUrl="/servicios" />
      </div>
    </article>
  );
});
