import { type PropsWithChildren } from 'react';
import styled from 'styled-components';

const Main = styled.main`
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.page};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};

    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const LoginLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};
