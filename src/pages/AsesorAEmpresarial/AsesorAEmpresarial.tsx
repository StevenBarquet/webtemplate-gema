// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './AsesorAEmpresarial.module.scss';
const text = `Cumplimiento normativo

También conocido como Compliance o Tax compliance, implica el cambio de cultura corporativa para migrar, de la gestión reactiva al conflicto hacía la prevención y gestión de riesgos.

Los programas de cumplimiento fiscal y normativo son procesos que incorporan valor a las organizaciones; les permiten crecer sostenidamente y disminuir sensiblemente los riesgos legales, normativos e incluso penales. Estos programas ofrecen solidez a las bases corporativas, apegando el funcionamiento de la sociedad al marco constitucional, legal y reglamentario de nuestro país.

Auditoría preventiva

El conocimiento de los riesgos que aloja tu empresa es condición necesaria para la toma de decisiones y la consecuente disminución o desaparición de estos riesgos. La auditoría preventiva permite a los empresarios conocer el nivel de cumplimiento normativo concreto de su organización. Conocerá los riesgos adquiridos de otras entidades, los riesgos creados previamente y los riesgos latentes que existen en su organización. 
`;
/**
 * AsesorAEmpresarial Component:  Descripción del comportamiento...
 */
export const AsesorAEmpresarial = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div class={style['AsesorAEmpresarial']}>
      <h1>Asesoría Empresarial</h1>
      <p>{text}</p>
    </div>
  );
});
