import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  margin: 2rem auto 0;
  width: 90%;
  display: flex;
  flex-direction: column;
  @media ${queries.phone} {
    align-items: center;
  }

  @media ${queries.tablet} {
    width: 70%;
  }

  @media ${queries.biggerTablet} {
    display: grid;
    grid-template-columns: 250px 1fr 1fr;
    gap: 5rem;
    width: 100%;
  }
`;
