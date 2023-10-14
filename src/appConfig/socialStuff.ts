class SocialStuff {
  simpleContact = {
    phone: {
      plus: '+525541851471',
      noPlus: '525541851471',
      plusFormatted: '(+52) 55-4185-1471',
      noPlusFormatted: '(52) 55-4185-1471',
    },
    email: 'gayecac@amasbconsultores.com',
  };
  linkedin = {
    channelName: 'Linkedin',
    desktopUrl: `https://www.linkedin.com/in/gema-ayecac-48498292/`,
    mobileUrl: `https://www.linkedin.com/in/gema-ayecac-48498292/`,
  };
  whatsApp = {
    channelName: this.simpleContact.phone.noPlusFormatted,
    desktopUrl: `https://web.whatsapp.com/send?phone=${this.simpleContact.phone.noPlus}`,
    mobileUrl: `https://api.whatsapp.com/send?phone=${this.simpleContact.phone.noPlus}`,
  };
  youtube = {
    channelName: 'Youtube',
    desktopUrl: `https://www.youtube.com/channel/UChieAIq5Yr_rdmN7vOHNYEg`,
    mobileUrl: `https://www.youtube.com/channel/UChieAIq5Yr_rdmN7vOHNYEg`,
  };
  mail = {
    channelName: this.simpleContact.email,
    desktopUrl: `mailto:${this.simpleContact.email}`,
    mobileUrl: `mailto:${this.simpleContact.email}`,
  };
}
export const socialStuff = new SocialStuff();
