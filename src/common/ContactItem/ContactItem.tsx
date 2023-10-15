// ---Dependencies
import { component$ } from '@builder.io/qwik';
import {
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMailOutline,
  IoLogoYoutube,
} from '@qwikest/icons/ionicons';
// ---Styles
import style from './ContactItem.module.scss';
import { useFStore } from 'src/store/config/storeConfig';
import { socialStuff } from 'src/appConfig/socialStuff';

interface Props {
  variant: 'Linkedin' | 'Whats' | 'mail' | 'youtube';
}

/**
 * ContactItem Component:  Descripción del comportamiento...
 * @param {Props} props - Parámetros del componente como: ...
 */
export const ContactItem = component$<Props>(({ variant }) => {
  const { state } = useFStore();
  const urlType = state.appInfo.isMobile ? 'mobileUrl' : 'desktopUrl';

  let IconComponent = IoLogoLinkedin;
  let label: string = '';
  let link: string = '';

  switch (variant) {
    case 'Linkedin':
      IconComponent = IoLogoLinkedin;
      label = socialStuff.linkedin.channelName;
      link = socialStuff.linkedin[urlType];
      break;

    case 'Whats':
      IconComponent = IoLogoWhatsapp;
      label = socialStuff.whatsApp.channelName;
      link = socialStuff.whatsApp[urlType];
      break;

    case 'mail':
      IconComponent = IoMailOutline;
      label = socialStuff.mail.channelName;
      link = socialStuff.mail[urlType];
      break;

    case 'youtube':
      IconComponent = IoLogoYoutube;
      label = socialStuff.youtube.channelName;
      link = socialStuff.youtube[urlType];
      break;

    default:
      return null;
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" class={style['ContactItem']}>
      <IconComponent />
      <p>{label}</p>
    </a>
  );
});
