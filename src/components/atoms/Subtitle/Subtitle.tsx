import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Subtitle = styled.h4`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.s};
  @media ${queries.phone} {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;
