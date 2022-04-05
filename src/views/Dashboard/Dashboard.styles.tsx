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
    grid-template-columns: 500px 500px 1fr;
    width: 100%;
    gap: 2rem;
    margin: 1rem 0 5rem;
  }
`;
