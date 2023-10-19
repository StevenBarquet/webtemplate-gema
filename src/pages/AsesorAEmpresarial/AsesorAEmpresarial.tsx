// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from 'src/common/BlogStyles.module.scss';
import { BlogHeader } from 'src/common/BlogHeader/BlogHeader';
import { BlogFooter } from 'src/common/BlogFooter/BlogFooter';
import { stringToBlog } from 'src/utils/functions/qwikUtils';
import { locales } from 'src/appConfig/locales';
import Img from '/public/images/servicios/asesoria-empresarial.webp?jsx';

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
      <div class={style['BlogStyles']}>
        <BlogHeader title={locales.pages.asesoriaEmpresarial.h1} />
        <hr />
        <section class="blogCont">
          {stringToBlog(locales.pages.asesoriaEmpresarial.text)}
          <br />
          <div class="postImg">
            <Img />
          </div>
        </section>
        <BlogFooter backUrl="/servicios" />
      </div>
    </article>
  );
});
