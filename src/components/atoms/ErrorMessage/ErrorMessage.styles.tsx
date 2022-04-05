import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 15px;
  max-width: 350px;
  margin: 2rem auto;
  @media ${queries.biggerTablet} {
    margin: 5rem 0;
  }
  p {
    color: ${({ theme }) => theme.colors.error};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.xs};
    @media ${queries.biggerTablet} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;
