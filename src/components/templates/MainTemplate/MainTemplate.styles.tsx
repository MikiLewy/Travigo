import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  margin: 2rem auto 0;
  width: 90%;
  display: flex;
  flex-direction: column;

  @media ${queries.tablet} {
    width: 70%;
  }

  @media ${queries.biggerTablet} {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1rem 5rem;
    width: 100%;
    margin: 2rem auto;
    padding: 0 2rem;
  }
  @media ${queries.desktop} {
    padding: 0 0.5rem;
    gap: 1rem 1rem;
    grid-template-columns: 250px 550px 550px 1fr;
    grid-template-rows: 200px 275px 275px 1fr;
  }
`;
