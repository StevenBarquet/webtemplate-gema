// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { blogs } from 'src/appConfig/blogs';
import { BlogFooter } from 'src/common/BlogFooter/BlogFooter';
import { BlogHeader } from 'src/common/BlogHeader/BlogHeader';
// ---Styles
import style from 'src/common/BlogStyles.module.scss';
import { stringToBlog } from 'src/utils/functions/qwikUtils';

/**
 * MecanismosAlternativosDeSoluciNDeConflictosEnMXico Component:  Descripción del comportamiento...
 */
export const MecanismosAlternativosDeSoluciNDeConflictosEnMXico = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['BlogStyles']}>
      <BlogHeader title={blogs.MecanismosAlternativosDeSoluciNDeConflictosEnMXico.h1} />
      <hr />
      <section class="blogCont">
        {stringToBlog(
          blogs.MecanismosAlternativosDeSoluciNDeConflictosEnMXico.text,
          blogs.MecanismosAlternativosDeSoluciNDeConflictosEnMXico.textProps,
        )}
      </section>
      <BlogFooter backUrl="/cronicas-de-paz" />
    </div>
  );
});
