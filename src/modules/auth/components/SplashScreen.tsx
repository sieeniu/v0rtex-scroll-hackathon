import styled from 'styled-components';

import { Spinner } from '@/components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;`;

export const SplashScreen = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};
