// ---Dependencies
import type { FunctionComponent, JSXNode, NoSerialize, QRL } from '@builder.io/qwik';
import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import style from './useDrawer.module.scss';
import { BsXLg } from '@qwikest/icons/bootstrap';
import { Fcol, Frow } from 'qwik-forge-grid';

type SimpleJsx = JSXNode<string | FunctionComponent<Record<string, any>>>;

interface Props {
  defaultOpen?: boolean;
  onOpen?: QRL<() => void | Promise<() => void>>;
  onClose?: QRL<() => void | Promise<() => void>>;
  title?: SimpleJsx | string;
  closable?: boolean;
  headerCloseModal?: boolean;
  footerCloseModal?: boolean;
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
  footerCloseModal = false,
  headerCloseModal = false,
}: Props) {
  // -----------------------CONSTS, HOOKS, STATES
  const isOpen = useSignal(defaultOpen);
  const newTitle = title as NoSerialize<SimpleJsx> | string | undefined;
  const newFooter = footer as NoSerialize<SimpleJsx> | string | undefined;
  const newContent = content as NoSerialize<SimpleJsx> | string;

  // -----------------------MAIN METHODS
  const handleClose = $(() => {
    onClose?.();
    isOpen.value = false;
  });

  const handleOpen = $(() => {
    isOpen.value = true;
    onOpen?.();
  });

  // -----------------------AUX METHODS
  // -----------------------HOOK DATA
  return {
    handleOpen,
    handleClose,
    Drawer: component$(() => {
      const contentRef = useSignal<Element>();
      const footerRef = useSignal<Element>();

      useVisibleTask$(({ track }) => {
        track(() => footerRef.value?.scrollHeight);

        if (contentRef.value && footerRef.value) {
          const footerHeight = footerRef.value.getBoundingClientRect().height;
          (contentRef.value as any).style.paddingBottom = `${footerHeight}px`;
        }
      });

      if (isOpen.value)
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
                <div
                  class="header"
                  onClick$={() => {
                    headerCloseModal ? handleClose() : undefined;
                  }}
                  style={{
                    cursor: headerCloseModal ? 'pointer' : undefined,
                  }}
                >
                  <Frow>
                    {closable && (
                      <Fcol span={10}>
                        <button class="closable" onClick$={handleClose}>
                          <BsXLg />
                        </button>
                      </Fcol>
                    )}
                    {typeof newTitle == 'string' ? (
                      <Fcol span={closable ? 90 : 100}>
                        <span class="default">{newTitle}</span>{' '}
                      </Fcol>
                    ) : (
                      <Fcol span={closable ? 90 : 100}>{newTitle}</Fcol>
                    )}
                  </Frow>
                </div>
              )}
              <div class="content" ref={contentRef}>
                {newContent}
              </div>
              {newFooter && (
                <div
                  class="footer"
                  onClick$={() => {
                    footerCloseModal ? handleClose() : undefined;
                  }}
                  style={{
                    cursor: footerCloseModal ? 'pointer' : undefined,
                  }}
                  ref={footerRef}
                >
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
      return null;
    }),
  };
}

export type DrawerHandler = ReturnType<typeof useDrawer>;
