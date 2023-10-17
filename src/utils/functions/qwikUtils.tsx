import { component$ } from '@builder.io/qwik';

interface AnchorProps {
  href: string;
  target?: string;
  rel?: string;
}

interface ImageProps {
  src: string;
  alt?: string;
}

type MarkupJsxProps = {
  /** hrefs para los LinkCustom, se inyectan en orden de aparición en "originalText" */
  hrefs?: string[];
  /** Props de tag anchor (<a></a>), se inyectan en orden de aparición en "originalText" */
  anchorProps?: AnchorProps[];
  /** Props de tag img (<img />), se inyectan en orden de aparición en "originalText" */
  imageProps?: ImageProps[];
};

function processLinkCustom(parts: (string | null)[], index: number, hrefs: any, linkIndex: number) {
  const linkContent = parts[index + 1];
  parts[index] = null; // Anular la etiqueta de apertura (sólo una vez)
  parts[index + 1] = null;
  const href = hrefs[linkIndex] ?? '#';
  return (
    <a key={`linkCustom-${index}`} href={href}>
      {linkContent}
    </a>
  );
}

function processAnchor(
  parts: (string | null)[],
  index: number,
  anchorProps: any,
  anchorIndex: number,
) {
  const anchorContent = parts[index + 1];
  parts[index] = null; // Anular la etiqueta de apertura
  parts[index + 1] = null;
  const props = anchorProps[anchorIndex] ?? {};
  return (
    <a key={`anchor-${index}`} {...props}>
      {anchorContent}
    </a>
  );
}

function processImg(parts: (string | null)[], index: number, imageProps: any, imageIndex: number) {
  parts[index] = null; // Anular la etiqueta de apertura
  const props = imageProps[imageIndex] ?? {};
  return <img key={`img-${index}`} {...props} />;
}

function processSimpleTag(parts: (string | null)[], index: number, tag: string) {
  const content = parts[index + 1];
  parts[index] = null; // Anular la etiqueta de apertura
  parts[index + 1] = null;
  switch (tag) {
    case 'span':
      return <span key={`span-${index}`}>{content}</span>;
    case 'section':
      return <section key={`section-${index}`}>{content}</section>;
    case 'div':
      return <div key={`div-${index}`}>{content}</div>;
    case 'article':
      return <article key={`article-${index}`}>{content}</article>;
    case 'b':
      return <b key={`bold-${index}`}>{content}</b>;
    case 'p':
      return <p key={`bold-${index}`}>{content}</p>;
    default:
      return null;
  }
}

function processHr(parts: (string | null)[], index: number) {
  parts[index] = null; // Anular la etiqueta
  return <hr key={`hr-${index}`} />;
}

function processBr(parts: (string | null)[], index: number) {
  parts[index] = null; // Anular la etiqueta
  return <br key={`br-${index}`} />;
}

function processHeading(parts: (string | null)[], index: number) {
  const part = parts[index];
  if (!part) return null;

  const headingContent = parts[index + 1];
  if (!headingContent) return null;

  const headingLevel = part[2];
  parts[index + 1] = null; // Añadir
  switch (headingLevel) {
    case '1':
      return <h1 key={`h1-${index}`}>{headingContent}</h1>;
    case '2':
      return <h2 key={`h2-${index}`}>{headingContent}</h2>;
    case '3':
      return <h3 key={`h3-${index}`}>{headingContent}</h3>;
    case '4':
      return <h4 key={`h4-${index}`}>{headingContent}</h4>;
    case '5':
      return <h5 key={`h5-${index}`}>{headingContent}</h5>;
    case '6':
      return <h6 key={`h6-${index}`}>{headingContent}</h6>;
    default:
      return null;
  }
}

export function stringToHtml(originalText: string, linkProps?: MarkupJsxProps) {
  const hrefs = linkProps?.hrefs || [];
  const anchorProps = linkProps?.anchorProps || [];
  const imageProps = linkProps?.imageProps || [];

  const Jsx = component$(() => {
    const parts: (string | null)[] = originalText.split(
      /(<\/?LinkCustom>|<\/?span.*?>|<\/?Anchor>|<\/?b>|<\/?p>|<\/?section>|<\/?div>|<\/?article>|<h[1-6]>|<\/h[1-6]>|<hr>|<br>|<hr \/>|<br \/>|<img>)/g,
    );

    let linkIndex = 0;
    let anchorIndex = 0;
    let imageIndex = 0;

    const nodes = parts.map((part, index) => {
      if (part === '<LinkCustom>') return processLinkCustom(parts, index, hrefs, linkIndex++);
      if (part === '<Anchor>') return processAnchor(parts, index, anchorProps, anchorIndex++);
      if (part !== null && part.startsWith('<span')) return processSimpleTag(parts, index, 'span');
      if (part !== null && part.startsWith('<section'))
        return processSimpleTag(parts, index, 'section');
      if (part !== null && part.startsWith('<div')) return processSimpleTag(parts, index, 'div');
      if (part !== null && part.startsWith('<article'))
        return processSimpleTag(parts, index, 'article');
      if (part !== null && /<h[1-6]>/.test(part)) return processHeading(parts, index);
      if (part !== null && part.startsWith('<p')) return processSimpleTag(parts, index, 'p');
      if (part !== null && part.startsWith('<hr')) return processHr(parts, index);
      if (part !== null && part.startsWith('<br')) return processBr(parts, index);
      if (part !== null && part.startsWith('<img'))
        return processImg(parts, index, imageProps, imageIndex++);
      if (part !== null && part.startsWith('<b')) return processSimpleTag(parts, index, 'b'); // Choca con br poner al final
      if (part !== null && part.startsWith('</')) return null;
      if (part !== null) return part;

      return null;
    });

    return <>{nodes}</>;
  });

  return (
    <>
      <Jsx />
    </>
  );
}
