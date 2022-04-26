import { queries } from 'helpers/mediaQueries';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${queries.biggerTablet} {
    grid-column: 2/-1;
    grid-row: 1/-1;
    display: grid;
    grid-template-columns: 330px 350px 1fr;
    width: 100%;
    gap: 0rem 2rem;
    margin: 1rem 0 2rem;
  }
  @media ${queries.laptop} {
    grid-template-columns: 450px 450px 1fr;
    margin: 1rem -2rem 2rem;
  }
  @media ${queries.desktop} {
    grid-template-columns: 540px 540px 1fr;
    gap: 1rem 2rem;
  }
  @media (min-width: 1800px) {
    grid-template-columns: 500px 500px 1fr;
  }
`;
