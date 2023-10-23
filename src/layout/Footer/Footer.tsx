// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Footer.module.scss';
import { Fcol, Frow } from 'qwik-forge-grid';
import { customResponsive } from 'src/utils/functions/responsiveUtils';
import { COMPANY_YEAR } from 'src/appConfig/globalConfig';
import { ContactItem } from 'src/common/ContactItem/ContactItem';
import { Link } from '@builder.io/qwik-city';
import { locales } from 'src/appConfig/locales';

/**
 * Footer Component:  Descripción del comportamiento...
 */
export const Footer = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['Footer']}>
      <h4>Contacto</h4>
      <Frow hAlign="center">
        <Fcol {...customResponsive(50, 100)}>
          <ContactItem variant="Linkedin" />
        </Fcol>
        <Fcol {...customResponsive(50, 100)}>
          <ContactItem variant="Whats" />
        </Fcol>
        <Fcol {...customResponsive(50, 100)}>
          <ContactItem variant="youtube" />
        </Fcol>
        <Fcol {...customResponsive(50, 100)}>
          <ContactItem variant="mail" />
        </Fcol>
      </Frow>
      <Link href="/aviso-de-privacidad">
        <h5>Revisa nuestro Aviso de Privacidad</h5>
      </Link>
      <h6>
        {`© ${COMPANY_YEAR} ${locales.comps.footer.rights}. Todos los derechos reservados. ¿Te gusta éste sitio? Revisa `}
        <a href="https://www.forgemytech.com/" target="_blank" rel="noopener noreferrer">
          forgemytech.com
        </a>
      </h6>
    </div>
  );
});
