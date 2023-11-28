import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { MecanismosAlternativosDeSoluciNDeConflictosEnMXico } from 'src/pages/Blog/MecanismosAlternativosDeSoluciNDeConflictosEnMXico/MecanismosAlternativosDeSoluciNDeConflictosEnMXico';

export default component$(() => {
  return (
    <>
      <MecanismosAlternativosDeSoluciNDeConflictosEnMXico />
    </>
  );
});

export const head: DocumentHead = {
  title: 'MECANISMOS ALTERNATIVOS DE SOLUCIÓN DE CONFLICTOS EN MÉXICO | GEMAAYECAC',
  meta: [
    {
      name: 'description',
      content:
        'Los Mecanismos Alternos de Solución de Conflictos son una alternativa real, viable y legal para resolver conflictos sin tener que recurrir a un tribunal. Actualmente son reconocidos por la Constitución y por diversas leyes vigentes. No obstante, debe tenerse en cuenta que, los principios, aplicabilidad, procedimientos y resultados pueden variar significativamente entre una materia y otra...',
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
