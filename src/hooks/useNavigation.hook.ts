import type { FunctionComponent, SVGAttributes } from 'react';

import { routes } from '@/routes';

export type NavLink = {
  href: string;
  icon?: FunctionComponent<SVGAttributes<SVGElement>>;
  label: string;
};

export const useNavigation = () => {
  const navLinks: NavLink[] = [
    {
      href: routes.home,
      label: 'Home',
    },
    {
      href: routes.companies,
      label: 'Companies',
    },
  ];

  return { navLinks };
};
