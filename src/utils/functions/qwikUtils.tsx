import { component$, useSignal } from '@builder.io/qwik';
export interface AnchorProps {
  href: string;
  target?: string;
  rel?: string;
}

type MarkupJsxProps = {
  /** hrefs para los LinkCustom, se inyectan en orden de aparición en "originalText" */
  hrefs?: string[];
  /** Props de tag anchor (<a></a>), se inyectan en orden de aparición en "originalText" */
  anchorProps?: AnchorProps[];
};

export function useStringToHtml(originalText: string, linkProps?: MarkupJsxProps) {
  const hrefs = useSignal(linkProps?.hrefs || []);
  const anchorProps = useSignal(linkProps?.anchorProps || []);

  return component$(() => {
    const parts: (string | null)[] = originalText.split(
      /(<\/?LinkCustom>|<\/?span.*?>|<\/?Anchor>|<\/?b>|<\/?section>|<\/?article>|<h[1-6]>|<\/h[1-6]>)/g,
    );

    let linkIndex = 0;
    let anchorIndex = 0;
    const nodes = parts.map((part, i) => {
      if (part === '<LinkCustom>') {
        const linkContent = parts[i + 1];
        parts[i + 1] = null;
        const href = hrefs.value[linkIndex] ?? '#';
        linkIndex++;
        return (
          <a key={`linkCustom-${i}`} href={href}>
            {linkContent}
          </a>
        );
      } else if (part === '<Anchor>') {
        const anchorContent = parts[i + 1];
        parts[i + 1] = null;
        const props = anchorProps.value[anchorIndex] ?? {};
        anchorIndex++;
        return (
          <a key={`anchor-${i}`} {...props}>
            {anchorContent}
          </a>
        );
      } else if (part !== null && part.startsWith('<span')) {
        const spanContent = parts[i + 1];
        parts[i + 1] = null;
        return <span key={`span-${i}`}>{spanContent}</span>;
      } else if (part !== null && part.startsWith('<section')) {
        const sectionContent = parts[i + 1];
        parts[i + 1] = null;
        return <section key={`section-${i}`}>{sectionContent}</section>;
      } else if (part !== null && part.startsWith('<article')) {
        const articleContent = parts[i + 1];
        parts[i + 1] = null;
        return <article key={`article-${i}`}>{articleContent}</article>;
      } else if (part !== null && /<h[1-6]>/.test(part)) {
        const headingContent = parts[i + 1];
        const headingLevel = part[2];
        parts[i + 1] = null;
        switch (headingLevel) {
          case '1':
            return <h1 key={`h1-${i}`}>{headingContent}</h1>;
          case '2':
            return <h2 key={`h2-${i}`}>{headingContent}</h2>;
          case '3':
            return <h3 key={`h3-${i}`}>{headingContent}</h3>;
          case '4':
            return <h4 key={`h4-${i}`}>{headingContent}</h4>;
          case '5':
            return <h5 key={`h5-${i}`}>{headingContent}</h5>;
          case '6':
            return <h6 key={`h6-${i}`}>{headingContent}</h6>;
          default:
            return null;
        }
      } else if (part !== null && part.startsWith('<b')) {
        const boldContent = parts[i + 1];
        parts[i + 1] = null;
        return <b key={`bold-${i}`}>{boldContent}</b>;
      } else if (part !== null && part.startsWith('</')) {
        // Ignorar etiquetas de cierre
        return null;
      } else if (part !== null) {
        return part;
      }
      return null;
    });

    return <>{nodes}</>;
  });
}
