import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${queries.biggerTablet} {
    grid-column: 2/-1;
    grid-row: 1/-1;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 1800px;
    margin-bottom: 3rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${queries.biggerTablet} {
    grid-column: 1/-1;
    max-width: 90%;
  }
  @media ${queries.laptop} {
    max-width: 95%;
  }
`;
