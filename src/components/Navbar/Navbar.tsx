import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { type NavLink } from '@/hooks';

const MenuItemList = styled.ul`
  list-style-type: none;
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li<{ $isActive?: boolean }>`
  font-weight: ${({ $isActive }) => ($isActive ? 800 : 500)};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.neutral.subtle : theme.colors.neutral.main};
`;

const StyledNav = styled.nav`
  margin: ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.page};
  display: flex;
  justify-content: space-between;
`;

type NavbarProps = {
  data: NavLink[];
};

export const Navbar = ({ data }: NavbarProps) => {
  const router = useRouter();
  return (
    <StyledNav>
      <MenuItemList>
        <span>NFInvesT</span>
        {data.map(item => {
          const isActive = router.pathname === item.href;
          return (
            <Link href={item.href} key={item.href}>
              <MenuItem $isActive={isActive}>{item.label}</MenuItem>
            </Link>
          );
        })}
      </MenuItemList>
      <MenuItemList>
        <Link href={''}>
          <MenuItem>Login</MenuItem>
        </Link>
      </MenuItemList>
    </StyledNav>
  );
};
