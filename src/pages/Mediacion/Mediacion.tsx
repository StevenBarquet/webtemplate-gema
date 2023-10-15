// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './Mediacion.module.scss';

const text = `La Mediación es un procedimiento voluntario mediante el cual las personas, con el apoyo de un Mediador que será neutral e imparcial, pueden comunicarse y negociar, para encontrar de manera amigable y satisfactoria la solución legal a su problema de carácter Civil-Mercantil o Familiar.
En la Ciudad de México este servicio puede obtenerse de Mediadores Privados que se encuentren certificados y autorizados por el Tribunal Superior de Justicia de la Ciudad de México. El procedimiento se rige por la Ley de Justicia Alternativa de la Ciudad de México https://www.poderjudicialcdmx.gob.mx/cja/wp-content/uploads/LEY-DE-JUST-ALT-Y-REGLA-2017.pdf

¿Qué conflictos se pueden mediar?

Se pueden mediar conflictos en materia civil, mercantil o familiar. Los requisitos son:
Los mediados sean titulares de los derechos que son materia de la controversia
La controversia no implique alguna materia que afecte el interés social o el orden público.
Los mediados soliciten y se sujeten voluntariamente al procedimiento.

¿Qué obtengo de la mediación?

La mediación ofrece a las personas involucradas en un conflicto, la posibilidad de solucionarlo por sí mismas, con la asistencia de un profesional.  La resolución no la dicta el mediador sino que son las personas quienes determinan que es importante y lograrán un mayor grado de satisfacción en su solución. El procedimiento es más ágil que un juicio, implica menor gasto de dinero, tiempo y energía.

Otra ventaja es que, los convenios celebrados e inscritos en el Centro de Justicia Alternativa, adquieren la misma validez y fuerza que una sentencia por lo que no será necesario acudir a un juicio con posterioridad.
`;

/**
 * Mediacion Component:  Descripción del comportamiento...
 */
export const Mediacion = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['Mediacion']}>
      <h1>Mediación</h1>
      <p>{text}</p>
    </div>
  );
});
