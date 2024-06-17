import viberr from '../assets/viberr.png';
import spacestagram from '../assets/spacestagram.png';
import githubApp from '../assets/githubApp.png';
import ecommerce from '../assets/e-commerce.png';
import audioApp from '../assets/audio-app.png';

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type ProjectCardProps = {
  src: string;
  link: string;
  h3: string;
  p: string;
};

export type SkillListProps = {
  src: string;
  skill: string;
};

export const skills = [
  ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node'],
  ['React', 'Angular', 'Vue', 'Tailwind CSS'],
  ['Redux', 'Webpack', 'Git', 'Jest', 'Bootstrap'],
];

export const projects = [
  {
    src: viberr,
    link: 'https://mern-booking-app-fe6u.onrender.com/',
    h3: 'Mern Booking App',
    p: 'Booking Platform for Hotels',
  },
  {
    src: audioApp,
    link: 'https://staccato-audio.netlify.app/',
    h3: 'Staccato App',
    p: 'Audio Listening Platform for Staccato',
  },
  {
    src: spacestagram,
    link: 'https://spacestagram-shopify-app.netlify.app/',
    h3: 'Shopify Spacetagram App',
    p: 'Shopify Spacetagram App for Astrology',
  },
  {
    src: githubApp,
    link: 'https://githubs-api-test.netlify.app/',
    h3: 'Github App',
    p: 'Github Search App',
  },
  {
    src: ecommerce,
    link: 'https://github.com/kene17/MERN-e-commerce-app',
    h3: 'Mern E-commerce App',
    p: 'E-commerce App for Users',
  },
];
