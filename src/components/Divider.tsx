import styled from 'styled-components';

export const Divider = styled.div`
  height: 1px;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.primary.main};
  margin: 0 auto;
`;
