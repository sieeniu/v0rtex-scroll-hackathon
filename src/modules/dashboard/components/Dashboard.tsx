import styled from 'styled-components';

import { Carousel, Divider } from '@/components';
import { NewestProjects } from '@/modules/dashboard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

export const Dashboard = () => {
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <Wrapper>
      <Carousel slides={SLIDES} options={{ loop: true }} />
      <Divider />
      <NewestProjects />
    </Wrapper>
  );
};
