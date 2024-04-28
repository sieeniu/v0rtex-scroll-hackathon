import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { type NavLink } from '@/hooks';
import { Button, WalletIcon } from '@/components';

const MenuItemList = styled.ul`
  list-style-type: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li<{ $isActive?: boolean }>`
  font-weight: ${({ $isActive }) => ($isActive ? 800 : 500)};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.neutral.subtle : theme.colors.primary.subtle};

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.subtle};
  }
`;

const StyledNav = styled.nav`
  margin: ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.page};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  display: flex;
  justify-content: space-between;
`;

const AppLogo = styled.span`
  color: ${({ theme }) => theme.colors.success};
  font-weight: 800;
  cursor: default;
`;

type NavbarProps = {
  data: NavLink[];
};

export const Navbar = ({ data }: NavbarProps) => {
  const router = useRouter();
  return (
    <StyledNav>
      <MenuItemList>
        <AppLogo>NFInvesT</AppLogo>
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
        <Button icon={<WalletIcon />}>Login</Button>
      </MenuItemList>
    </StyledNav>
  );
};
