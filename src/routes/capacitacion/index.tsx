import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Capacitacion } from 'src/pages/Capacitacion/Capacitacion';

export default component$(() => {
  return (
    <>
      <Capacitacion />
    </>
  );
});

export const head: DocumentHead = {
  title: 'CAPACITACIÓN | GEMAAYECAC',
  meta: [
    {
      name: 'description',
      content:
        'Los recursos humanos son un componente fundamental del éxito de toda empresa. Una gerencia capacitada contará con la información necesaria para tomar decisiones eficientes orientadas a la prevención de riesgos. Los operadores capacitados disminuyen las contingencias y aportan al crecimiento de la organización. 	Para atender esta necesidad contamos con un grupo de expertos que realizan capacitación laboral, debidamente registrada ante la STPS. Contamos con la capacidad de certificar distintos estándares de competencias habilitados por el CONOCER de la Secretaría de Educación Pública y también diseñamos programas Ad Hoc para atender necesidades específicas de su empresa. Nuestra red de capacitación permite la colaboración con diversas instituciones nacionales e internacionales. ',
    },
  ],
  links: [
    // Fuente Inter
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
      rel: 'stylesheet',
    },
  ],
};
