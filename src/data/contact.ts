import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/bluebigthink',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://twitter.com/BrentBigThink58',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://t.me/bluebigthink',
    label: 'Telegram',
    icon: faTelegram,
  },
  {
    link: 'https://discord.com/channels/1264273935013384297/1264273935013384300',
    label: 'Discord',
    icon: faDiscord,
  },
  // {
  //   link: 'https://www.linkedin.com/',
  //   label: 'LinkedIn',
  //   icon: faLinkedinIn,
  // },
  // {
  //   link: 'https://angel.co/',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  {
    link: 'mailto:brentbigthink@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
