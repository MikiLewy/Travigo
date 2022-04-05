import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 5rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${queries.phone} {
    margin: 5rem 0 3rem;
  }

  @media ${queries.biggerTablet} {
    align-items: flex-start;
    grid-column: 1/2;
    grid-row: 1/2;
  }

  h2 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.m};
    @media ${queries.phone} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    @media ${queries.phone} {
      font-size: ${({ theme }) => theme.fontSize.sd};
    }
  }
`;
