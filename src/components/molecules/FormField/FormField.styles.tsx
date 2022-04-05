import styled from 'styled-components';
import { queries } from 'helpers/mediaQueries';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  @media ${queries.phone} {
    width: 70%;
  }
  @media ${queries.biggerTablet} {
    width: 40%;
  }
  @media ${queries.desktop} {
    width: 65%;
    gap: 5px;
  }
`;
