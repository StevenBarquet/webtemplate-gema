// ---Dependencies
import { component$ } from '@builder.io/qwik';
import { blogs } from 'src/appConfig/blogs';
import { BlogFooter } from 'src/common/BlogFooter/BlogFooter';
import { BlogHeader } from 'src/common/BlogHeader/BlogHeader';
// ---Styles
import style from 'src/common/BlogStyles.module.scss';
import { stringToBlog } from 'src/utils/functions/qwikUtils';

/**
 * Blog2 Component:  Descripción del comportamiento...
 */
export const Blog2 = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['BlogStyles']}>
      <BlogHeader title={blogs.blog2.h1} />
      <hr />
      <section class="blogCont">{stringToBlog(blogs.blog2.text, blogs.blog2.textProps)}</section>
      <BlogFooter backUrl="/cronicas-de-paz" />
    </div>
  );
});
