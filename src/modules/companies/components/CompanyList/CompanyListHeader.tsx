import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.main};
  font-weight: 700;
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  width: 600px;
  color: ${({ theme }) => theme.colors.primary.subtle};
`;

export const CompanyListHeader = () => {
  return (
    <Wrapper>
      <Header>Companies</Header>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Description>
    </Wrapper>
  );
};
