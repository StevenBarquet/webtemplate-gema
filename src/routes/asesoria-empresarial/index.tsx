import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { AsesorAEmpresarial } from 'src/pages/AsesorAEmpresarial/AsesorAEmpresarial';

export default component$(() => {
  return (
    <>
      <AsesorAEmpresarial />
    </>
  );
});

export const head: DocumentHead = {
  title: 'ASESORÍA EMPRESARIAL | GEMAAYECAC',
  meta: [
    {
      name: 'description',
      content:
        'También conocido como Compliance o Tax compliance, implica el cambio de cultura corporativa para migrar, de la gestión reactiva al conflicto hacía la prevención y gestión de riesgos. Los programas de cumplimiento fiscal y normativo son procesos que incorporan valor a las organizaciones; les permiten crecer sostenidamente y disminuir sensiblemente los riesgos legales, normativos e incluso penales. Estos programas ofrecen solidez a las bases corporativas, apegando el funcionamiento de la sociedad al marco constitucional, legal y reglamentario de nuestro país.',
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
