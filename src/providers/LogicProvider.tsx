import { Slot, component$ } from '@builder.io/qwik';
import { IS_PROD } from 'src/appConfig/globalConfig';
import { envs } from 'src/envs/envsLoaded';
import { StoreProvider } from 'src/store/config/StoreProvider';

export const LogicProvider = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------RENDER
  return (
    <StoreProvider useLocalStorage={envs.LOCALSTORAGE} withDevTools={!IS_PROD}>
      <Slot />
    </StoreProvider>
  );
});
