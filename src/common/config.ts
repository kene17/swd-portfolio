import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';

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

export const projects = [
  {
    src: viberr,
    link: 'https://github.com/Ade-mir/company-landing-page-2',
    h3: 'Viberr',
    p: 'Streaming App',
  },
  {
    src: freshBurger,
    link: 'https://github.com/Ade-mir/company-landing-page-2',
    h3: 'Fresh Burger',
    p: 'Hamburger Restaurant',
  },
  {
    src: hipsster,
    link: 'https://github.com/Ade-mir/company-landing-page-2',
    h3: 'Hipsster',
    p: 'Glasses Shop',
  },
  {
    src: fitLift,
    link: 'https://github.com/Ade-mir/company-landing-page-2',
    h3: 'FitLift',
    p: 'Fitness App',
  },
];
