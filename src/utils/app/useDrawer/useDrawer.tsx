// ---Dependencies
import type { FunctionComponent, JSXNode, NoSerialize, QRL } from '@builder.io/qwik';
import { $, component$, render, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import style from './useDrawer.module.scss';
import { BsXLg } from '@qwikest/icons/bootstrap';

type SimpleJsx = JSXNode<string | FunctionComponent<Record<string, any>>>;

interface Props {
  defaultOpen?: boolean;
  onOpen?: QRL<() => void | Promise<() => void>>;
  onClose?: QRL<() => void | Promise<() => void>>;
  title?: SimpleJsx | string;
  closable?: boolean;
  content: SimpleJsx | string;
  footer?: SimpleJsx | string;
  size?: 'size-378' | 'size-736';
  position?: 'left' | 'right';
  closeOverlay?: boolean;
  closeOverlayVisible?: boolean;
  theme?: 'dark' | 'light';
}

/**
 * useDrawer Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export function useDrawer({
  onClose,
  onOpen,
  closable = true,
  title,
  content,
  footer,
  defaultOpen,
  size = 'size-378',
  position = 'right',
  closeOverlay = true,
  closeOverlayVisible = true,
  theme = 'light',
}: Props) {
  // -----------------------CONSTS, HOOKS, STATES
  const newTitle = title as NoSerialize<SimpleJsx> | string | undefined;
  const newFooter = footer as NoSerialize<SimpleJsx> | string | undefined;
  const newContent = content as NoSerialize<SimpleJsx> | string;

  // -----------------------MAIN METHODS
  const handleClose = $(() => {
    const drawerDiv = document.getElementById('drawer');
    if (drawerDiv && drawerDiv.parentNode) {
      // Elimina el nodo drawerDiv actual y reemplaza con uno fresco
      const newDrawer = document.createElement('div');
      newDrawer.id = 'drawer'; // Asegurándonos de que el nuevo div tenga el ID 'drawer'
      drawerDiv.parentNode.replaceChild(newDrawer, drawerDiv);
    }
    onClose?.();
  });

  const drawerBuilder = $(() =>
    component$(() => {
      const contentRef = useSignal<Element>();
      const footerRef = useSignal<Element>();

      useVisibleTask$(({ track }) => {
        track(() => footerRef.value?.scrollHeight);

        if (contentRef.value && footerRef.value) {
          const footerHeight = footerRef.value.getBoundingClientRect().height;
          (contentRef.value as any).style.paddingBottom = `${footerHeight}px`;
        }
      });

      return (
        <>
          {closeOverlay && (
            <div
              class={`${style['overlay'] || ''} ${closeOverlayVisible ? 'visible' : ''}`}
              onClick$={handleClose}
            />
          )}
          <div class={`${style['useDrawer'] || ''} ${size} ${position} ${theme}`}>
            {(closable || newTitle) && (
              <div class="header">
                <section>
                  {closable && (
                    <button onClick$={handleClose}>
                      <BsXLg />
                    </button>
                  )}
                  {typeof newTitle == 'string' ? <span class="default">{newTitle}</span> : newTitle}
                </section>
              </div>
            )}
            <div class="content" ref={contentRef}>
              {newContent}
            </div>
            {newFooter && (
              <div class="footer" ref={footerRef}>
                {typeof newFooter == 'string' ? (
                  <span class="default">{newFooter}</span>
                ) : (
                  newFooter
                )}
              </div>
            )}
          </div>
        </>
      );
    }),
  );

  const handleOpen = $(async () => {
    onOpen?.();
    const drawerDiv = document.getElementById('drawer');
    if (drawerDiv && !drawerDiv.hasChildNodes()) {
      const DrawerContent = await drawerBuilder();
      render(drawerDiv, <DrawerContent />);
    }
  });
  useVisibleTask$(({ track }) => {
    track(() => defaultOpen);
    if (defaultOpen) handleOpen();
  });
  // -----------------------AUX METHODS
  // -----------------------HOOK DATA
  return {
    handleOpen,
    handleClose,
  };
}

export type DrawerHandler = ReturnType<typeof useDrawer>;
