import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

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
    link: 'https://facebook.com/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://angel.co/',
    label: 'Angel List',
    icon: faAngellist,
  },
  {
    link: 'https://twitter.com/BrentBigThink58',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:brentbigthink@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
