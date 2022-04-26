import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const ViewWrapper = styled.div`
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 550px;
  margin: 3rem 0 0;

  @media ${queries.phone} {
    max-width: 550px;
  }
  @media ${queries.tablet} {
    max-width: 650px;
  }
  @media ${queries.biggerTablet} {
    grid-column: 1/2;
    grid-row: 2/4;
    height: 100%;
  }
  @media ${queries.desktop} {
    margin: 0;
    max-width: 550px;
  }
  @media (min-width: 1600px) {
    width: 500px;
  }
`;
