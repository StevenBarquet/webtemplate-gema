// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Styles
import style from './AsesorAEmpresarial.module.scss';
const text = `La recaudación es fundamental para las finanzas de nuestro país. No obstante, las autoridades fiscales deben realizar sus actos con apego a la ley y estricto respeto a los derechos fundamentales de los contribuyentes.  Desafortunadamente, frecuentemente las autoridades fiscales pueden exceder sus facultades o vulnerar derechos de los contribuyentes.

La relación entre contribuyente y fisco es desequilibrada y se caracteriza por una marcada diferencia en poder y recursos. Para realizar una defensa adecuada ante actos de autoridad ilegales, es necesario estar asistido por profesionales altamente especializados en materia fiscal, corporativa y derechos humanos. Nuestro equipo de colaboradores cuenta con amplia experiencia y preparación para atender de manera responsable y eficaz la defensa de sus clientes.
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
      <h1>Defensa Fiscal</h1>
      <p>{text}</p>
    </div>
  );
});
