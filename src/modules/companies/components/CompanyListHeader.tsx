import styled from 'styled-components';

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.main};
  font-weight: 700;
`;

export const CompanyListHeader = () => {
  return <Header>Companies</Header>;
};
