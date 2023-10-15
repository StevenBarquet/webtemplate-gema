// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Capacitacion.module.scss';
const text = `Los recursos humanos son un componente fundamental del éxito de toda empresa. Una gerencia capacitada contará con la información necesaria para tomar decisiones eficientes orientadas a la prevención de riesgos. Los operadores capacitados disminuyen las contingencias y aportan al crecimiento de la organización. 

Para atender esta necesidad contamos con un grupo de expertos que realizan capacitación laboral, debidamente registrada ante la STPS. Contamos con la capacidad de certificar distintos estándares de competencias habilitados por el CONOCER de la Secretaría de Educación Pública y también diseñamos programas  Ad Hoc  para atender necesidades específicas de su empresa. 

Nuestra red de capacitación permite la colaboración con diversas instituciones nacionales e internacionales.
`;

/**
 * Capacitacion Component:  Descripción del comportamiento...
 */
export const Capacitacion = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['Capacitacion']}>
      <h1>Capacitación</h1>
      <p>{text}</p>
    </div>
  );
});
